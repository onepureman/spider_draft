"""
Base_Url: http://www.39.net/
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

    def load_data(self,path):
        data = {}
        with open(path, "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:
                split_ = line.split(":")
                data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
        return data

    def get_pwd(self, input_):
        js_pwd = """

       function getpwd(a) {
        var f, b = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"),
            c = new Array(116, 120, 122, 51, 57), d = encodeURIComponent(a), e = "";
        for (i = 0; i < d.length; i++) f = c[i % 5], s = String.fromCharCode(d.charCodeAt(i) ^ f), e += b[s.charCodeAt(0) >> 4] + b[15 & s.charCodeAt(0)];
        return e
    }

        """

        pwd = execjs.compile(js_pwd).call("getpwd", input_)
        return pwd

    def login_(self):
        user = self.get_pwd(self.user)
        pwd = self.get_pwd(self.pwd)
        data = self.load_data("data.txt")

        r = requests.get(
            "https://my.39.net/post.ashx?callback=jQuery17206856937338735567_1602577896209&action=jsonploginf0&uname={}&pwd={}&safecode=&app=1&_=1602577911928".format(
                user, pwd), headers=data)
        print(r.content)


if __name__ == '__main__':
    user = ""
    pwd = "222222"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()





