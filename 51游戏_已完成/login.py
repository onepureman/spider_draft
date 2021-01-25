"""
Base_Url:http://www.51.com/
Author:jing
Modify:2021/01/25
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

            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Connection": "keep-alive",
            "Host": "passport.51.com",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",

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

        res = requests.get("http://www.51.com/")
        # print(self.sess.cookies)
        iv = re.findall(".*\|(.*?)\|iv\|", res.content.decode())[0]
        key = re.findall(".*\|(.*?)\|key\|", res.content.decode())[0]

        # # 设置cookies
        # two_t = int(time.time() * 1000)
        # self.sess.cookies["Hm_lvt_940aa8668c1606e3733aded32f601d5d"] = two_t
        # self.sess.cookies["Hm_lpvt_940aa8668c1606e3733aded32f601d5d"] = two_t

        # 加密账户 密码
        user = self.get_pwd(self.user, key, iv)
        pwd = self.get_pwd(self.pwd, key, iv)

        url ="http://passport.51.com/login/submit?callback=jQuery111105728217809844967_{}&passport_51_user={}&passport_51_password={}&passport_cookie_login=0&from=www&gourl=http%3A%2F%2Fwww.51.com%2F&passport_auto_login=1&passport_51_ishidden=0&chn=www&ie=0&version=2012&passport_51_ajax=true&passport_51_jsonp=1&aes=2&passport_51_user_ht={}&passport_51_password_ht={}&_={}".format(str(int(time.time() * 1000)), user, pwd,  "jq", "j5", str(int(time.time() * 1000)))

        res = requests.get(url)
        print(res.content.decode())


if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()
