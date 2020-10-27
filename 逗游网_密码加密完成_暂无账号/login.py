"""
Base_Url:https://www.doyo.cn/passport/login?next=https://www.doyo.cn/
Author:jing
Modify:2020/10/27
"""

import execjs
import requests
from pprint import pprint


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.login_url = "https://www.doyo.cn/User/Passport/login"

    def get_pwd(self):

        js_pwd = """
        
        const {SHA1} = require("E:/pycharmproject/study_own/js_study/逗游网_密码加密完成_暂无账号/sha1.js")
        
        function getpwd(pwd){
            return SHA1.Sha1
        
        
        }
        
        """

        pwd = execjs.compile(js_pwd, cwd=r'E:\node\node_modules\npm\node_modules').call("getpwd", self.pwd)
        return pwd

    def login_(self):
        pwd = self.get_pwd()
        print(pwd)
        data = {
        "username": self.user,
        "password": pwd,
        "remberme": "1",
        "next": "aHR0cHMlM0ElMkYlMkZ3d3cuZG95by5jbiUyRg==",
}




if __name__ == '__main__':
    user = ""
    pwd = "222222"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()