"""
Base_Url: https://www.360.cn/
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
        self.sess.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 QIHU 360SE",
            "Host": "login.360.cn"
        }
        self.login_url = "https://login.360.cn/"

    # 获取 token
    def get_token(self):
        url = "https://login.360.cn/?func=jQuery112407017940677562093_1602486129494&src=pcw_home&from=pcw_home&cha"

        r = requests.get(url)
        token = re.findall("\"token\":\"(.*?)\"", r.content.decode())
        return token


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
        self.sess.get("https://www.360.cn/")
        data = self.load_data("data.txt")
        pwd = self.get_pwd()
        data["password"] = pwd
        data["token"] = self.get_token()

        r = self.sess.post(self.login_url, data=data)

        # 验证是否登陆成功
        yanzheng_url = "https://login.360.cn/?o=sso&m=info&requestScema=https&callback=jQuery110207241101365568958_1602486378473&_=" + str(
            round(time.time() * 1000))
        response = self.sess.get(yanzheng_url)
        print(response.content.decode())
        # TODO: 未能成功验证， ，没有获取到 用户名称


if __name__ == '__main__':
    user = ""
    pwd = "222222"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()



























