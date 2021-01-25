"""
Base_Url:http://i.yiche.com/authenservice/login.html?returnurl=http%3A%2F%2Fwww.bitauto.com%2F
Author:jing
Modify:2020/11/10
"""

import time
import execjs
import requests
from pprint import pprint
import random
import uuid
import re


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.sess.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
            "accept": "application/json, text/javascript, */*; q=0.01",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Referer": "https://i.yiche.com/authenservice/login.html?returnurl=http%3A%2F%2Fwww.bitauto.com%2F",
            "Host": "i.yiche.com",
            "Origin": "https://i.yiche.com",

        }
        self.login_url = "https://i.yiche.com/ajax/Authenservice/login2.ashx"

    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    def load_data(self, path):
        data = {}
        with open(path, "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:
                split_ = line.split(":")
                data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
        return data

    def get_captcha(self, guid):
        url = "http://i.yiche.com/authenservice/common/CheckCode.aspx?guid=" + guid
        response = self.sess.get(url)
        with open("captcha.jpg", "wb") as f:
            f.write(response.content)

    def login_(self):
        try:
            self.sess.get("https://g.yccdn.com/autolog?v=" + str(int(time.time() * 1000)))

            data = self.load_data("./data.txt")
            res = self.sess.get(
                'https://i.yiche.com/authenservice/login.html?returnurl=http%3A%2F%2Fwww.bitauto.com%2F')
            url = re.findall("hm.src = \"(.*?)\";", res.content.decode())[0]
            cookies_ = re.findall("https://hm.baidu.com/hm.js\?(.*)", url)[0]
            self.sess.get("https://g.yccdn.com/autolog?v=" + str(int(time.time() * 1000)))
            self.sess.get(url)

            pwd = self.get_pwd()

            data["txt_Password"] = pwd
            data["txt_LoginName"] = self.user

            guid = str(uuid.uuid4())
            self.get_captcha(guid)
            data["txt_Code"] = input("请输入验证码:")
            data["guid"] = guid
            pprint(data)

            self.sess.headers["Referer"] = "https://i.yiche.com/authenservice/login.html"
            self.sess.headers["Origin"] = "https://i.yiche.com"

            self.sess.cookies.set("Hm_lvt_" + cookies_, str(int(time.time())))

            self.sess.cookies.set("Hm_lpvt_" + cookies_, str(int(time.time())))

            res2 = self.sess.post(self.login_url, data=data)

            print(res2.content.decode())


        except requests.exceptions.ConnectionError as e:
            print("请求频繁")



if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()

