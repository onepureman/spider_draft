"""
Base_Url: https://login.10086.cn/login.htm
Author: jing
Modify: 2021/01/25
Notes: 本人使用qq邮箱验证登录 没有问题 出现 { **** "desc":"认证成功"  ***} 等字样
"""

import time
import execjs
import requests
from pprint import pprint
from lxml import etree
import re


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.sess.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        }
        self.login_url = "https://login.10086.cn/login.htm"

    def load_data(self, path):
        data = {}
        with open(path, "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:
                split_ = line.split(":")
                data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
        return data

    def get_pwd(self, pwd):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", pwd)
        return pwd

    def get_captcha(self):
        url = "https://login.10086.cn/captchazh.htm?type=12&timestamp=" + str(int(time.time()*1000))

        response = self.sess.get(url)

        with open("captcha.jpg", "wb") as f:
            f.write(response.content)

    def login_(self):

        response = self.sess.get('https://shop.10086.cn/i/?f=home&welcome=' + str(int(time.time()*1000)))
        html = etree.HTML(response.content.decode())
        href = html.xpath("//a[@id='dropdownMenu2']/@href")[0]
        channelID = re.findall("channelID=(.*?)&", href)[0]
        backUrl = re.findall("backUrl=(.*)", href)[0]

        data = self.load_data("data.txt")
        data["timestamp"] = str(int(time.time() * 1000))
        data["password"] = self.get_pwd(self.pwd)
        data["account"] = self.get_pwd(self.user)

        data["channelID"] = channelID
        data["backUrl"] = backUrl

        pprint(data)

        self.sess.post("https://login.10086.cn/checkUidAvailable.action")

        need_ve = self.sess.get("https://login.10086.cn/needVerifyCode.htm?accountType=02&account={}&timestamp={}".format(self.user, str(int(time.time() * 1000)))).json()
        if need_ve["needVerifyCode"] == "1":
            self.get_captcha()
            data["inputCode"] = input("请输入验证码:")

        self.sess.headers["Host"] = "login.10086.cn"
        self.sess.headers["Origin"] = "https://login.10086.cn"
        self.sess.cookies["captchatype"] = "z"
        self.sess.headers["Referer"] = "https://login.10086.cn/login.html?channelID={}&backUrl={}?f=home&welcome={}".format(channelID, backUrl, str(int(time.time() * 1000)))

        print(self.sess.cookies)
        res = self.sess.post(self.login_url, data=data)

        print(res.content.decode())


if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()
