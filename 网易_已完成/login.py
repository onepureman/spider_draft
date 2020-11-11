"""
Base_Url: https://www.163.com/?referFrom=undefined
Author: jing
Modify: 2020/10/22
"""


import execjs
import requests
import time
from pprint import pprint
import json

class Login(object):
    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.sess.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        }
        self.rtid = "skrecxLjeVaKrndvnlSkXQty4wRjsLen"
        self.login_url = "https://dl.reg.163.com/dl/l"

    def load_data(self, path):
        data = {}
        with open(path, "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:
                split_ = line.split(":")
                data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
        return data

    def get_tk_data(self):
        self.sess.headers = {

            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
        }

        gt_un_url = "https://dl.reg.163.com/dl/gt?" \
              "un=" + self.user + \
              "&pkid=MODXOXd&pd=163" \
              "&channel=0" \
              "&topURL=https%3A%2F%2Fwww.163.com%2F%3FreferFrom%3Dundefined" \
              "&rtid=" + self.rtid +  \
              "&nocache=" + str(int(time.time()*1000))

        response = self.sess.get(gt_un_url).json()
        return response["tk"]  # 返回tk参数

    def load_data(self, path):
        data = {}
        with open(path, "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:
                split_ = line.split(":")
                data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
        return data

    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    def login_(self):
        data = self.load_data("data.txt")
        data["un"] = self.user
        self.sess.get("https://nex.163.com/q?app=7BE0FC82&c=homepage&l=11&site=netease&affiliate=homepage&cat=homepage&type=column1200x125_960100&location=1&cb=jsonp_0088962116615948")
        self.sess.get("https://dl.reg.163.com/dl/ini?pd=163&pkid=MODXOXd&pkht=www.163.com&channel=0&topURL=https%3A%2F%2Fwww.163.com%2F%3FreferFrom%3Dundefined&rtid=CFSsnGlWwS6QwN5uj8e0EVXpFBVWENWx&nocache=1605062667352")

        tk = self.get_tk_data()  # 获取tk
        data["tk"] = tk
        data["t"] = str(int(time.time()*1000))
        data["rtid"] = self.rtid

        pwd = self.get_pwd()
        data["pw"] = pwd
        pprint(data)

        res = self.sess.post(self.login_url, json=data)
        print(res.content.decode())


if __name__ == '__main__':
    login = Login("", "")  # TODO: 输入 账号 密码
    login.login_()