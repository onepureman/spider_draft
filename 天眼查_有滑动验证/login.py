"""
Base_Url:https://www.sogou.com/sogou?query=%E5%A4%A9%E7%9C%BC%E6%9F%A5&pid=sogou-wsse-91e50fe1e39af286
Author:jing
Modify:2020/10/26
"""

import execjs
import requests
from pprint import pprint
import re
import json
import time


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.login_url = "https://www.tianyancha.com/cd/login.json"

    def get_pwd(self):
        with open('get_pwd.js', encoding='utf-8') as f:
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

    def login_(self):
        # data = self.load_data("data.txt")
        # self.sess.get("https://www.tianyancha.com/vipintro/?jsid=SEM-SOUGOU-PP-VIS-212505")
        #
        # res = self.sess.post("https://www.tianyancha.com/verify/geetest.xhtml", json={"uuid": "1603695931416"}).json()
        # url = "https://api.geetest.com/get.php?gt=" + res["data"]["gt"] + "&challenge=" + res["data"]["challenge"] + "&product=popup&offline=false&protocol=https://&beeline=/static/js/beeline.1.0.1.js&type=slide&maze=/static/js/maze.1.0.1.js&pencil=/static/js/pencil.1.0.3.js&voice=/static/js/voice.1.2.0.js&path=/static/js/geetest.6.0.9.js&callback=geetest_1603695937791"
        # res = self.sess.get(url)
        # data["challenge"] = re.findall("\"challenge\": \"(.*?)\",", res.content.decode())
        #
        # data["mobile"] = self.user
        # data["cdpassword"] = self.get_pwd()

        # 获取gt_challenge参数
        gt_challenge = self.sess.post("https://www.tianyancha.com/verify/geetest.xhtml", json={"uuid": str(int(time.time()*1000))}).json()
        gt = gt_challenge["data"]["gt"]
        challenge = gt_challenge["data"]["challenge"]
        print(challenge)


        res = self.sess.get("https://api.geetest.com/get.php?gt="+ gt +"&challenge=" + challenge
                      + "&product=popup&offline=false&protocol=https://&type=slide&maze=/static/js/maze.1.0.1.js"
                        "&voice=/static/js/voice.1.2.0.js&path=/static/js/geetest.6.0.9.js"
                        "&pencil=/static/js/pencil.1.0.3.js&beeline=/static/js/beeline.1.0.1.js"
                        "&callback=geetest_1607930594962")
        pprint(json.loads(re.findall("\((.*)\)", res.content.decode())[0]))

        # 获取极验的返回参数
        # get_validate = self.sess.get()

        # # TODO:获取滑动验证之后返回的参数
        # validate = ""
        # data["seccode"] = validate + "|jordan"
        # data["validate"] = validate
        #
        # res = self.sess.post(self.login_url, data=json.dumps(data))
        # print(res.content.decode())


if __name__ == '__main__':
    user = ""
    pwd = "1111111111"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()