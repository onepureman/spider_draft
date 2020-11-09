"""
Base_Url:
Author:
Modify:
"""

import execjs
import requests
from pprint import pprint


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.sess.headers= {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        }
        self.login_url = "https://cnpassport.youku.com/newlogin/login.do?appName=youku&fromSite=23"

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
        self.sess.get("https://www.youku.com/")

        pwd = self.get_pwd()
        data = self.load_data("./data.txt")
        data["password2"] = pwd
        data["loginId"] = self.user

        res = self.sess.post(self.login_url, data=data).json()
        pprint(res)

        # TODO:显示登陆成功， 但是下方的验证  参数还需破解， 一直session过期或者令牌为空

        # res = self.sess.get("https://acs.youku.com/h5/mtop.youku.vip.xtop.member.profile.get/1.0/?jsv=2.5.1&appKey=24679788&t=1603444756988&sign=6a9195a8aab7df2bbceac90abfb2e9ee&api=mtop.youku.vip.xtop.member.profile.get&v=1.0&type=jsonp&dataType=jsonp&timeout=20000&jsonpIncPrefix=utility&callback=mtopjsonputility13&data=%7B%22req%22%3A%22%7B%5C%22deviceType%5C%22%3A%5C%22pc%5C%22%2C%5C%22show%5C%22%3A1%7D%22%7D")
        # pprint(res.content.decode())


if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()

