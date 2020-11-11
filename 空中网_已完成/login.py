"""
Base_Url: http://www.kongzhong.com/
Author: jing
Modify: 2020/10/22
"""


import execjs
from requests import session
import time
import re


class Login(object):

    def __init__(self, user, pwd):

        self.user = user
        self.pwd = pwd
        self.sess = session()
        self.sess.headers = {
            "Referer": "https://passport.kongzhong.com/login",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
        }

    def get_dc(self):
        url = "https://sso.kongzhong.com/ajaxLogin?j=j&jsonp=j&service=https://passport.kongzhong.com/&_=1602833536420".format(str(int(time.time()*1000)))
        response = self.sess.get(url)
        dc = re.findall("\"dc\":\"(.*?)\"", response.content.decode())[0]
        return dc

    def get_captcha(self):
        url = "https://sso.kongzhong.com/createVCode?w=80&h=30&0.4357485497800657"

        res = self.sess.get(url)

        with open("./captcha.jpg","wb") as f:
            f.write(res.content)


    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd, self.get_dc())
        return pwd

    def login(self):
        self.get_captcha()
        self.sess.get("https://passport.kongzhong.com/login")
        pwd = self.get_pwd()

        login_url = "https://sso.kongzhong.com/ajaxLogin?j=j&&type=1&service=https://passport.kongzhong.com/&username={}&password={}&vcode={}&vcode=8zgu&toSave=0&_={}".format(self.user, pwd, input("请输入验证码"), str(int(time.time()*1000)))

        r = self.sess.get(login_url)
        print(r.content.decode())


if __name__ == '__main__':
    login = Login("", "")  # TODO: 输入 账号 密码
    login.login()