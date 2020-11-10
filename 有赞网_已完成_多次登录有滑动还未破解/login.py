"""
Base_Url: https://account.youzan.com/login?fromSource=SOURCE_PC
Author: jing
Modify: 2020/10/22

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
        self.login_url = "https://account.youzan.com/api/login/by-pass-with-tencent-image.json"

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

        data = self.load_data("data.txt")
        data["mobile"] = self.user

        csrf_token_response = self.sess.get("https://account.youzan.com/login?fromSource=SOURCE_PC")
        data["csrf_token"] = re.findall("csrf_token\":\"(.*?)\"", csrf_token_response.content.decode())[0]

        ticket_res = self.sess.get("https://passport.youzan.com/api/captcha/get-behavior-captcha-token.json?bizType=15").json()
        data["ticket"] = ticket_res["data"]

        pwd = self.get_pwd()
        data["password"] = pwd
        data["passwordLength"] = str(len(self.pwd))
        pprint(data)

        res = self.sess.post(self.login_url)
        print(res.content.decode())

if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()