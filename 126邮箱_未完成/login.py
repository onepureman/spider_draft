"""
Base_Url:
Author:
Modify:
"""

import time
import execjs
import requests
from pprint import pprint


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.login_url = ""

    def get_pwd(self):

        js_pwd = """
        
        function getpwd(pwd){
        
        
        
        }
        
        
        """

        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    def _get_tk(self):

        response = self.sess.get("https://passport.126.com/dl/gt?un={}&pkid=TVNAeBP&pd=mail126&channel=0&topURL=https%3A%2F%2Femail.163.com%2F%3Futm_source%3Dbaidu1&rtid=OqTZMiuAGwt83GDbC5ww9rUdbpEoOwcY&nocache=1604038751935".format(self.user)).json()
        print(response)



    def login_(self):
        # pwd = self.get_pwd()
        # print(pwd)

        self.sess.get("https://email.163.com/?utm_source=baidu1")
        print(self.sess.cookies)
        self._get_tk()


if __name__ == '__main__':
    user = ""
    pwd = "222222"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()