"""
Base_Url: https://mail.xinhuanet.com
Author: jing
Modify: 2020/10/22
"""

import execjs
import requests


class Login():
    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()

    def get_captcha(self):
        url = "https://mail.xinhuanet.com/t_img.php?_d=Mon,%2019%20Oct%202020%2006:34:47%20GMT"

        response = self.sess.get(url)
        with open("captcha.jpg", "wb") as f:
            f.write(response.content)

    def load_data(self, path):
        data = {}
        with open(path, "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:
                split_ = line.split(":")
                data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
        return data

    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    def login_(self):
        self.get_captcha()
        data = self.load_data("data.txt")
        pwd = self.get_pwd()
        print(pwd)
        data["F_rsapassword"] = pwd
        data["F_email"] = self.user
        data["F_code"] = input("请输入验证码:")


if __name__ == '__main__':

    login = Login("", "")  # TODO: 输入 账号 密码
    login.login_()
