"""
Base_Url: https://www.migu.cn/
Author: jing
Modify: 2020/10/22
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
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "Connection": "keep-alive",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "navigate",
            "Referer": "https://www.migu.cn/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9",

        }
        self.login_url = "https://passport.migu.cn/authn"

    def load_data(self,path):
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
        loginID = execjs.compile(js_pwd).call("getpwd", self.user)
        finger = execjs.compile(js_pwd).call("rsaFingerprint")
        return loginID, pwd, finger

    def login_(self):
        self.sess.get("https://passport.migu.cn/popup/login?sourceid=208003&callbackURL=https%3A%2F%2Fwww.migu.cn%2F")

        data = self.load_data("data.txt")

        loginID, pwd, finger = self.get_pwd()
        data["loginID"] = loginID
        data["enpassword"] = pwd
        data["fingerPrintDetail"] = finger["details"]
        data["fingerPrint"] = finger["result"]
        res = self.sess.post(self.login_url, data=data)
        # 登录成功


if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()
