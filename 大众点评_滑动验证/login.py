"""
Base_Url: http://www.dianping.com/
Author: jing
Modify: 2020/10/22
"""


import execjs
import requests


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()

    def get_pwd(self, uuid):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd, uuid)
        return pwd

    def login_(self):
        # 获取滑动验证之后返回的uuid 即可获得加密之后的密码
        uuid = ""
        pwd = self.get_pwd(uuid)
        print(pwd)


if __name__ == '__main__':
    user = "1111"
    pwd = "2222"

    login = Login(user, pwd)  # TODO: 输入 账号 密码

    login.login_()


