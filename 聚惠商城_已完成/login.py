"""
Base_Url:http://www.minshengec.com/loginNew/index.jhtml
Author:jing
Modify:2020/11/11
"""

import execjs
import requests
from pprint import pprint


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.login_url = ""

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
    pwd = "22222"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()