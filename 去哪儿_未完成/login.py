"""
Base_Url:https://user.qunar.com/passport/loginx.jsp
Author:jing
Modify:
Notes: 未能成功登陆  {"data":{"needCaptcha":true},"errcode":0,"errkey":"password","errmsg":"验证码验证失败","ret":false,"ver":0}
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
        self.login_url = "https://user.qunar.com/passport/loginx.jsp"

    def captcha_(self):
        url = "https://user.qunar.com/captcha/api/image?k={en7mni(z&p=ucenter_login&c=ef7d278eca6d25aa6aec7272d57f0a9a&t=1607587064791"
        res = self.sess.get(url)

        with open("captcha.jpg", "wb") as f:
            f.write(res.content)

    def login_(self):
        self.sess.get("http://user.qunar.com/passport/login.jsp?ret=http%3A%2F%2Fhotel.qunar.com%2F%3Fex_track%3Dauto_51f61c7d")
        self.sess.get("https://rmcsdf.qunar.com/js/df.js?org_id=ucenter.login&js_type=0")
        self.sess.get("http://user.qunar.com/passport/addICK.jsp")
        self.sess.get("https://rmcsdf.qunar.com/js/device.js?orgId=ucenter.login&sessionId=5185aba1-a708-46fc-a1db-7822d9ff60b3&auto=false")
        self.captcha_()
        print(self.sess.cookies)
        data = {
            "loginType": "0",
            "ret": "http://hotel.qunar.com/?ex_track=auto_51f61c7d",
            "username": self.user,
            "password": self.pwd,
            "remember": "1",
            "vcode": input("请输入验证码"),
        }

        res = self.sess.post(self.login_url, data=data)
        print(res.content.decode())

if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()