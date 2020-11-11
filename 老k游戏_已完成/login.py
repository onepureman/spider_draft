"""
Base_Url: http://web.lkgame.com/
Author: jing
Modify: 2020/10/22
"""

import execjs
import requests
from pprint import pprint


class Login():
    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.login_url = ""

    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        u_p = execjs.compile(js_pwd).call("getpwd", self.user,self.pwd)  # 返回的是加密后的账号密码

        return u_p

    def get_captcha(self):
        js_captcha = """
        function url(){
            return 'http://login.lkgame.com/Sso/GetValidCode?'+ Math.random();
            }
        """
        url = execjs.compile(js_captcha).call("url")
        response = self.sess.get(url)
        with open("captcha.jpg", "wb") as f:
            f.write(response.content)

    def login_(self):
        user_pwd = self.get_pwd()

        self.get_captcha()
        data = {
            "lku": user_pwd[0],
            "lkp": user_pwd[1],
            "url": "http://web.lkgame.com/Sso/AjaxLogin?callback=parent.SsoIndex.AjaxSsoLoginCB",
            "vcode": input("请输入验证码："),
            "encoding": "utf-8",
        }
        pprint(data)
        response = self.sess.post("http://login.lkgame.com/Sso/Login", data=data)
        print(response.content.decode())


if __name__ == '__main__':
    user = "11111"
    pwd = "22222"
    login = Login(user, pwd)
    login.login_()
