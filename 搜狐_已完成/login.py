"""
Base_Url:https://www.sohu.com/
Author:jing
Modify:2020/10/28
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
        self.sess.headers ={
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "max-age=0",
        }
        self.login_url = "https://v4.passport.sohu.com/i/login/116005"

    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    def login_(self):
        self.sess.get("https://pv.sohu.com/suv/?t?=1603793150298201_2560_1440?r?=")
        pwd = self.get_pwd()


        data = {
        "userid":self.user,
        "password": pwd,
        "persistentCookie": "1",
        "appid": "116005",
        "callback": "passport403_cb" + str(int(time.time()*1000))
        }

        pprint(data)

        self.sess.headers["referer"] = "https://www.sohu.com/"
        self.sess.headers["origin"] = "https://www.sohu.com"

        res = self.sess.post(self.login_url, data=data)
        print(res.content.decode())


if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()