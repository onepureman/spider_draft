"""
Base_Url:https://www.douban.com/
Author:jing
Modify:
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
        self.sess.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
            "Referer": "https://accounts.douban.com/passport/login_popup?login_source=anony",
            "Host": "accounts.douban.com",
            }
        self.login_url = "https://accounts.douban.com/j/mobile/login/basic"

    def load_data(self, path):
        data = {}
        with open(path, "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:
                split_ = line.split(":")
                data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
        return data



    def login_(self):
        data = {
            "ck":"",
            "remember": "true",
            "name": self.user,
            "password": self.pwd,
        }
        res = self.sess.post(self.login_url, data=data)
        print(res.content.decode())
        # 需要图形验证码  目前图形验证码刷新不出 后续查漏时会补充


if __name__ == '__main__':
    user = ""
    pwd = "222222"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()