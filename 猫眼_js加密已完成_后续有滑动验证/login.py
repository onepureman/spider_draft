"""
Base_Url: https://maoyan.com/
Author: jing
Modify: 2020/10/22
"""


import execjs
import requests


class Login():

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd

    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    def login_(self):
        pwd = self.get_pwd()
        print(pwd)

if __name__ == '__main__':
    user = ""
    pwd = "222222"
    login = Login(user, pwd)  # TODO: 输入 账号 密码
    login.login_()