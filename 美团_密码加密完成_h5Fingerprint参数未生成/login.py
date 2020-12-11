"""
Base_Url: https://bj.meituan.com/
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

    def get_h5(self):
        # chrome 中运行的js 可以得到正常的返回  execjs 中报错 待解决
        with open('./get_h5.js', encoding='utf-8') as f:
            js_h5 = f.read()
        h5 = execjs.compile(js_h5, cwd=r'E:\node\node_modules\npm\node_modules').call("h5")
        return h5

    def login_(self):
        # pwd = self.get_pwd()
        # print(pwd)
        h5 = self.get_h5()
        print(h5)


if __name__ == '__main__':
    user = ""
    pwd = "222222"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()
