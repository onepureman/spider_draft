"""
Base_Url: https://www.17173.com/
Author: jing
Modify: 2020/10/22
Notes: 此网站的破解已经在另一个项目中使用selenium破解成功 - https://github.com/onepureman/selenium_login_cracking/tree/jing/17173_已完成
"""
import execjs
import requests


class Login():

    def __init__(self, user, pwd):
        """
        :param user:
        :param pwd:
        """
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