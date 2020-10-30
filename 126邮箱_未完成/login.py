"""
Base_Url:
Author:
Modify:
"""

import time
import execjs
import requests
from pprint import pprint
import json


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.sess.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        }
        self.login_url = "https://passport.126.com/dl/l"

    def get_pwd(self):

        with open('get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    # 获取tk 参数
    def _get_tk(self):
        response = self.sess.get("https://passport.126.com/dl/gt?un={}&pkid=TVNAeBP&pd=mail126&channel=0&topURL=https%3A%2F%2Femail.163.com%2F%3Futm_source%3Dbaidu1&rtid=OqTZMiuAGwt83GDbC5ww9rUdbpEoOwcY&nocache=1604038751935".format(self.user)).json()
        return response["tk"]

    def load_data(self, path):
        data = {}
        with open(path, "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:
                split_ = line.split(":")
                data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
        return data

    def login_(self):
        # # 加载cookies
        # self.sess.get(
        #     "https://passport.126.com/dl/ini?pd=mail126&pkid=TVNAeBP&pkht=email.163.com&channel=0&topURL=https%3A%2F%2Femail.163.com%2F%3Futm_source%3Dbaidu1&rtid=myPP7bk70x1vvyiQ4NlaLybqHKRLjXxi&nocache=1604044910172")
        #
        # tk = self._get_tk()
        # data = self.load_data("data.txt")
        # data["tk"] = tk
        # data["un"] = self.user
        # data["t"] = str(int(time.time()*1000))

        pwd = self.get_pwd()
        print(pwd)
        # data["pw"] = pwd

        # res = self.sess.post(self.login_url, data=json.dumps(data))
        # print(res)




if __name__ == '__main__':
    user = "125784321@126.com"
    pwd = "222222"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()