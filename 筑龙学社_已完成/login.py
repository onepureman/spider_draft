"""
Base_Url: https://www.zhulong.com/
Author: jing
Modify: 2020/11/10
"""

import execjs
import requests
from requests import session


class Login(object):
    def __init__(self, user,pwd):
        self.pwd = pwd
        self.user = user
        self.sess = session()
        self.login_url = "https://passport.zhulong.com/openapi/user/userLoginNewAuth"
        self.sess.headers = {
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        }

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

    def login(self):
        data = self.load_data("data.txt")
        data["loginName"] = self.user

        pwd = self.get_pwd()
        data["passwd"] = pwd

        self.sess.post(self.login_url, data=data)
        r = self.sess.get("https://message.zhulong.com/openjson/getMessageInfo?member_uid=0&callback=jQuery1830394389132959285_1602830186274&ajax=1&time=0.2517303862633977&_=1602830186493")
        print(r.content.decode("utf-8"))
        # 查看自己的账户名称是否存在


if __name__ == '__main__':

    user = ""
    pwd = ""

    login = Login(user, pwd)   # TODO: 输入 账号 密码
    login.login()

