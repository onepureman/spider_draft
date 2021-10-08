
"""
Base_Url: http://www.39.net/
Author: jing
Modify: 2021/10/08
Node: 更新-- 已没有密码等加密， 只是构建cookies与请求的参数，此代码只是成功登录并没有cookies保持，建议使用session
"""

from lxml import etree
import requests



class Login(object):

    def __init__(self, user, pwd):
        self.url = "https://passport.39.net/Account/Login"
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.headers = {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        }

    def login_(self):

        res = requests.get(self.url)

        html = etree.HTML(res.content.decode())
        __RequestVerificationToken = html.xpath("//input[@name='__RequestVerificationToken']/@value")[0]

        self.headers["cookie"] = res.headers["Set-Cookie"]

        data = {
            "ReturnUrl": "",
            "__RequestVerificationToken": __RequestVerificationToken,
            "Username": self.user,
            "Password": self.pwd,
            "LoginType": "Account",
            "RememberLogin": "false"

        }

        res = requests.post(self.url, data=data, headers=self.headers)
        print(res)
        print(res.text)


if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()








