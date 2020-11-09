"""
Base_Url: https://www.gome.com.cn/
Author: jing
Modify: 2020/10/22
"""


import requests
import execjs
from pprint import pprint
import time
import re


class Login():
    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.login_url = "https://login.gome.com.cn/gmsst5Login.no"
        self.sess = requests.session()
        self.sess.headers = {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        }

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
        pwd = execjs.compile(js_pwd, cwd=r'E:\node\node_modules\npm\node_modules').call("getpwd", self.pwd)
        return pwd

    def login_(self):
        data = self.load_data("data.txt")
        res = self.sess.get("https://login.gome.com.cn/login?intcmp=sy-public01012")

        data["publicKey"] = re.findall("var publicKey=\"(.*?)\";", res.content.decode())[0]
        data["loginName"] = self.user
        data["password"] = self.get_pwd()

        self.sess.headers = {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
            "origin": "https://login.gome.com.cn",
            "referer": "https://login.gome.com.cn/login?intcmp=sy-public01012",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",

        }

        response = self.sess.post(self.login_url, data=data)
        print(response.content.decode())


if __name__ == '__main__':
    user = ""
    pwd = ""
    login = Login(user, pwd)  # TODO: 输入 账号 密码
    login.login_()
