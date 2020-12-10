"""
Base_Url:https://tv.sohu.com/
Author:jing
Modify: 2020/12/10
Notes: 目前登录未成功 应该是cookies 有问题 没有获取到主要的cookies  后续查漏会补充
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
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "max-age=0",
            # "content-length": "129",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
            "origin": "https://tv.sohu.com",
            "referer": "https://tv.sohu.com/",
            }
        self.login_url = "https://v4.passport.sohu.com/i/login/107405"

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
        self.sess.get("https://p.aty.sohu.com/p?cat=251366993&pos=15525|14794|14795|14796|14798|14799|14797|cp_20_1|19001|19002&al=&qd=&suv=&age=&labelFirstIds=&pageUrl=https%3A//tv.sohu.com/&pagerefer=")

        self.sess.headers = self.load_data("data.txt")

        print(self.sess.cookies)
        pwd = self.get_pwd()
        data = {

            "userid": self.user,
            "password": pwd,
            "persistentCookie": "1",
            "appid": "107405",
            "callback": "passport403_cb" + str(int(time.time()*1000)),

        }

        pprint(data)

        res = self.sess.post(self.login_url, data=data)
        print(res.content.decode())


if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()