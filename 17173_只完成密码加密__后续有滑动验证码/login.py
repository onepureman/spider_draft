"""
Base_Url: https://www.17173.com/
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
    login = Login("222", "333")
    login.login_()