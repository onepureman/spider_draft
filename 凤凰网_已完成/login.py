"""
Base_Url:http://www.ifeng.com/
Author: jing
Modify:
"""

import time
import execjs
import requests
from pprint import pprint
import base64


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.sess.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
            }
        self.login_url = "https://user.ifeng.com/api/v1/login/common?platform=w&systemid=1"



    def load_data(self, path):
        data = {}
        with open(path, "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:
                split_ = line.split(":")
                data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
        return data

    def get_captcha_id(self):
        url = "https://user.ifeng.com/api/v1/get/captcha?type=2&platform=w&systemid=1&_=" + str(int(time.time() * 1000))
        res = self.sess.get(url).json()
        img = res["image"][22:]
        with open("captcha.png", "wb") as f:
            f.write(base64.b64decode(img))

        return res["id"]

    def login_(self):
        self.sess.get("http://www.ifeng.com/")
        captcha_id = self.get_captcha_id()

        data = {
            "account": self.user,
            "password": self.pwd,
            "captcha_code": input("请输入验证码"),
            "captcha_id": captcha_id
        }

        res = self.sess.post(self.login_url, json=data)


        res = self.sess.get("https://user.ifeng.com/api/v1/get/userinfobytoken?platform=w&systemid=1").json()
        if res["mobile"] == self.user:
            print("登录成功")
        else:
            print("账号或密码错误，或验证码错误")

if __name__ == '__main__':
    user = ""
    pwd = "."

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()