"""
Base_Url:http://www.hexun.com/
Author:jing
Modify:2020/10/28

notes: 2021/01/25 多次登录会有点选验证
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
        self.login_url = ""
        self.sess.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        }

    def get_pwd(self, pubkey):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()

        pwd = execjs.compile(js_pwd, cwd=r'E:\node\node_modules\npm\node_modules').call("getpwd", self.pwd, pubkey)

        return pwd

    def login_(self):
        self.sess.get("http://www.hexun.com/")
        data = {"appid": "9073746913", "act": "get"}
        res = self.sess.post("https://reg.hexun.com/wapreg/pubkey.aspx", data=data).json()
        pubkey = res["data"]["pubkey"]
        key = res["data"]["key"]
        print(pubkey, key)
        pwd = self.get_pwd(pubkey)
        print(pwd)


if __name__ == '__main__':
    user = ""
    pwd = "222222"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()
