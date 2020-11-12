"""
Base_Url:http://www.51.com/
Author:jing
Modify:2020/11/12
"""

import time
import execjs
import requests
from pprint import pprint
import re


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.sess.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
            "Host": "passport.51.com",
            "Referer": "http://www.51.com/"
        }
        self.login_url = ""

    def load_data(self, path):
        data = {}
        with open(path, "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:
                split_ = line.split(":")
                data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
        return data

    def get_pwd(self, pwd,key, iv):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", pwd, key, iv)
        return pwd

    def login_(self):

        res = self.sess.get("http://www.51.com/")
        find = re.findall("\|.*?\|(.*?)\|key\|(.*?)\|k.*?\|(.*?)\|iv\|", res.content.decode())
        key = find[0][-2]
        iv = find[0][-1]

        self.sess.get("http://notice.51.com/api/message/getuid?callback=jQuery111103445219882626207_1605148527561&_=1605148527562")
        self.sess.get("https://hm.baidu.com/hm.js?940aa8668c1606e3733aded32f601d5d")
        self.sess.get("http://passport.51.com/port/logininfo/iptips?callback=jQuery111104666529225349123_1605148684755&_=1605148684761")

        user = self.get_pwd(self.user, key, iv)
        pwd = self.get_pwd(self.pwd, key, iv)

        url ="http://passport.51.com/login/submit?callback=jQuery111105728217809844967_1605145451570&passport_51_user={}&passport_51_password={}&passport_cookie_login=0&from=www&gourl=http%3A%2F%2Fwww.51.com%2F&passport_auto_login=1&passport_51_ishidden=0&chn=www&ie=0&version=2012&passport_51_ajax=true&passport_51_jsonp=1&aes=2&passport_51_user_ht={}&passport_51_password_ht={}&_=1605145451578".format(user, pwd,  "je", "j5")
        print(url)
        res = self.sess.get(url)
        print(res.content.decode())

        # TODO： 有滑动验证
        # jQuery111105728217809844967_1605145451570({"errno":2001,"error":"1","message":"1","data":{"errorUrl":""}})


if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()
