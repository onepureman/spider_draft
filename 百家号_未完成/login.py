"""
Base_Url:
Author:
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
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
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

    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    def login_(self):
        # pwd = self.get_pwd()
        # print(pwd)

        data = self.load_data("data.txt")
        pprint(data)
if __name__ == '__main__':
    # user = ""
    # pwd = "222222"
    #
    # login = Login(user, pwd)  # TODO: 输入账号&密码
    # login.login_()
    print("\u7528\u6237\u540D\u6216\u5BC6\u7801\u4E0D\u6B63\u786E")