"""
Base_Url: http://www.kongzhong.com/
Author: jing
Modify: 2020/10/22
"""

import execjs
import requests
import re


class Login(object):

    def __init__(self, user, pwd):
        self.sess = requests.session()
        self.pwd = pwd
        self.user = user
        self.login_url = "https://tiku.fenbi.com/api/users/loginV2?kav=12&app=web"

    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    def login_(self):
        data = {
            "password": self.get_pwd(),
            "persistent": "true",
            "app": "web",
            "phone": self.user,
        }
        self.sess.post(self.login_url, data=data)
        response = self.sess.get("https://fenbi.com/page/home")
        find = re.findall("({})".format(self.user), response.content.decode(), re.S)
        if len(find) > 0:
            print("登录成功")


if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)   # TODO: 输入 账号 密码
    login.login_()