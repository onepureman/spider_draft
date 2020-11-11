"""
Base_Url: https://passport.tuniu.com/login?origin=https://i.tuniu.com/ssoConnect
Author: jing
Modify: 2020/10/22
"""

import execjs
import requests
from requests import session
import re


class Login(object):

    def __init__(self, user, pwd):
        self.sess = session()
        self.login_url = "https://passport.tuniu.com/login/post"
        self.user = user
        self.pwd = pwd
        self.sess.headers = {
            "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "zh-CN,zh;q=0.9",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
            # "referer": "https://passport.tuniu.com/login?origin=https://www.tuniu.com/ssoConnect"
        }

    # 获取验证码的地址 并进行请求
    def get_captcha_url(self):
        captcha_js = '''
        function captcha(){
            return  new Date().getTime() +Math.random()
        }
        '''
        captcha = execjs.compile(captcha_js).call("captcha")

        captcha_url = "https://passport.tuniu.com/ajax/captcha/v/" + str(captcha)
        r = self.sess.get(captcha_url)
        print(r.content)
        with open("./captcha_img.png", "wb") as f:
            f.write(r.content)

    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    def login(self):
        self.sess.get("https://passport.tuniu.com/login?origin=https://i.tuniu.com/ssoConnect")  # 获取cookies


        data = {
            "sWeak": "0",
            "login_type": "P-N",
            "intlCode": "",
            "username": self.user,
            "password": self.get_pwd(),
        }
        if self.get_status(data):
            print("登陆成功!!!")
        else:
            self.get_captcha_url()
            data["identify_code"] = input("请输入验证码:")
            if self.get_status(data):
                print("登陆成功!!!")
            else:
                print("请核对 账号密码!!!!!!!")

    def get_status(self, data):
        self.sess.post(self.login_url, data=data)
        yan = "https://i.tuniu.com/usercenter/usercommonajax/japi"
        res = self.sess.post(yan, data={"serviceName": "MOB.MEMBERS.InnerController.userInfo"}).json()
        if len(re.findall("({})".format(self.user), str(res))) > 0:
            return True
        else:
            return False


if __name__ == '__main__':
    login = Login("", "")   # TODO: 输入 账号 密码
    login.login()
