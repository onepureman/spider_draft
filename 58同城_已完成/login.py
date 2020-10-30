"""
Base_Url: https://bj.58.com/?utm_source=market&spm=u-LlFBrx8a1luDwQM.sgppzq_zbt
Author: jing
Modify: 2020/10/30
"""

import time
import execjs
import requests
from pprint import pprint
import re

class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.sess.headers = {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        }

        self.login_url = "https://passport.58.com/58/login/pc/dologin"

    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    def get_token(self):
        path_time = str(int(time.time()*1000))

        # 生成callback
        callback_js = """
        function get_call(){
        return "JsonpCallBack" + (new Date).getTime() + Math.floor(1e3 * Math.random())
        }
        """
        callback = execjs.compile(callback_js).call("get_call")

        # 获取cookies
        self.sess.get("https://passport.58.com/sec/58/fingerprint?source=58-homepage-pc&finger2=zh-CN%7C24%7C1.5%7C12%7C2560_1440%7C2560_1400%7C-480%7C1%7C1%7C1%7Cundefined%7C1%7Cunknown%7CWin32%7Cunknown%7C20%7Cfalse%7Cfalse%7Cfalse%7Cfalse%7Cfalse%7C0_false_false%7Cd41d8cd98f00b204e9800998ecf8427e%7Ce3ae0e04402d1d2f7aa0d5ddc69e021f&psdk-d=jsdk&psdk-v=1.0.6&callback=JsonpCallBack1604040163925934")
        # 生成请求地址
        url = "https://passport.58.com/58/login/init?source=58-homepage-pc&path=https%253A%252F%252Fbj.58.com%252F%253Fpts%253D{}&psdk-d=jsdk&psdk-v=1.0.6&callback=JsonpCallBack{}".format(path_time, callback)
        self.sess.headers["referer"]= "https://passport.58.com/login/?path=https%3A%2F%2Fbj.58.com%2F&source=58-homepage-pc&PGTID=0d100000-0000-1c0f-6f8d-1fbc67d111de&ClickID=2"
        response = self.sess.get(url)
        token = re.findall("\"token\":\"(.*?)\",", response.content.decode())[0]
        return token

    def load_data(self, path):
        data = {}
        with open(path, "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:
                split_ = line.split(":")
                data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
        return data

    def get_captcha(self):
        url = "https://passport.58.com/sec/58/validcode/get?vcodekey=4TqBiD9V__N-QpBd90dHqKLUZkRAPqm2&time=1604042990555"
        response = self.sess.get(url)

        with open("captcha.jpg", "wb") as f:
            f.write(response.content)

    def login_(self):
        data = self.load_data("data.txt")
        data["username"] = self.user
        data["path"] = 'https%3A%2F%2Fbj.58.com%2F%3Fpts%3D' + str(int(time.time()*1000))
        data["vcodekey"] = "4TqBiD9V__N-QpBd90dHqKLUZkRAPqm2"
        pwd = self.get_pwd()
        data["password"] = pwd

        token = self.get_token()
        data["token"] = token

        response = self.sess.post(self.login_url, data=data)
        if "请输入图片验证码" in response.content.decode():
            self.get_captcha()
            data["validcode"] = input("请输入验证码:")
            pprint(data)

            response = self.sess.post(self.login_url, data=data)
            print(response.content.decode())


        else:
            print(response.content.decode())


if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()