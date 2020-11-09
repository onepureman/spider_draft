"""
Base_Url: https://www.toutiao.com/
Author: jing
Modify: 2020/10/22
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
        self.sess.headers = {
            "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Mobile Safari/537.36"
        }

    def get_signature(self):
        # 加密中的地址与请求的地址必须一致， 或者在请求首页新闻时 可以不加 signature 参数
        with open('./get_signature.js', encoding='utf-8') as f:
            js_pwd = f.read()
        _signature = execjs.compile(js_pwd, cwd=r'E:\node\node_modules\npm\node_modules').call("getsignatrue")
        return _signature

    def login_(self):
        # self.sess.get("https://www.toutiao.com/")
        _signature = self.get_signature()
        url = "https://www.toutiao.com/api/pc/feed/?max_behot_time=0&category=__all__&utm_source=toutiao&widen=1&tadrequire=true".format(_signature)
        res = self.sess.get(url).json()
        pprint(res)


if __name__ == '__main__':
    user = ""
    pwd = "222222"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()



