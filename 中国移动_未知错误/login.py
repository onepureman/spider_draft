"""
Base_Url: https://login.10086.cn/login.htm
Author: jing
Modify: 2020/10/22
"""

import time
import execjs
import requests
from pprint import pprint


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.sess.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        }
        self.login_url = "https://login.10086.cn/login.htm"

    def load_data(self, path):
        data = {}
        with open(path, "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:
                split_ = line.split(":")
                data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
        return data

    def get_pwd(self, pwd):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", pwd)
        return pwd

    def get_captcha(self):
        url = "https://login.10086.cn/captchazh.htm?type=12&timestamp=1604977071523"

        response = self.sess.get(url)

        with open("captcha.jpg", "wb") as f:
            f.write(response.content)

    def login_(self):
        self.sess.post("https://login.10086.cn/checkUidAvailable.action")
        self.get_captcha()
        data = self.load_data("data.txt")
        data["timestamp"] = str(int(time.time()*1000))
        data["password"] = self.get_pwd(self.pwd)
        data["account"]= self.get_pwd(self.user)
        data["inputCode"] = input("请输入验证码:")
        pprint(data)
        res = self.sess.post(self.login_url, data=data)
        print(res.content.decode())


if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()


