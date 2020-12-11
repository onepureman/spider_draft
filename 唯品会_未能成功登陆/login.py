"""
Base_Url: https://www.vip.com/
Author: jing
Modify: 2020/10/22
"""

import execjs
import requests
from pprint import pprint
import json

class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.login_url = "https://passport.vip.com/login"
        self.sess = requests.session()
        self.sess.headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        }

    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    def login_(self):
        self.sess.get("https://passport.vip.com/login")
        print(self.sess.cookies)
        pwd = self.get_pwd()
        data = {
            "loginName": self.user,
            "password": pwd,
            "remUser": "0",
            "whereFrom": "",
            "captchaId": "",
            "captchaTicket": "",
        }
        pprint(data)
        self.sess.headers["referer"] = "https://passport.vip.com/login"
        self.sess.headers["origin"] = "https://passport.vip.com"
        response = self.sess.post(self.login_url, data=data)
        print(response.content.decode())



        #
        # print(response.content.decode())
        #
        # response2 = self.sess.get("https://safe.vip.com/profile/safeCenter?callback=getAccountSafeInfo&_=1603272668032")
        # print(response2.content.decode())



if __name__ == '__main__':
    login = Login("", "")  # TODO: 输入 账号 密码
    login.login_()
