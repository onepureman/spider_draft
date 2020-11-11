"""
Base_Url:https://www.doyo.cn/passport/login?next=/
Author:jing
Modify:2020/11/11
"""

import execjs
import requests
from pprint import pprint
import time


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.nonce = ""
        self.ts = ""
        self.login_url = "https://www.doyo.cn/User/Passport/login"

    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd, self.ts, self.nonce)
        return pwd

    def get_nonce(self):
        js = """
            function get(){
                return  Math.random()
            }
        """
        random_ = execjs.compile(js).call("get")
        url = "https://www.doyo.cn/User/Passport/token?username={}&random={}".format(self.user, random_)

        res = self.sess.get(url).json()
        self.nonce = res["nonce"]
        self.ts = res["ts"]

    def login_(self):
        self.sess.get("https://www.doyo.cn/passport/login?next=/")
        self.get_nonce()

        pwd = self.get_pwd()

        data = {
        "username": self.user,
        "password": pwd,
        "remberme": "1",
        "next": "JTJG",
        }

        res = self.sess.post(self.login_url, data=data)


if __name__ == '__main__':
    user = "sdfsafsadf"
    pwd = "222222"
    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()