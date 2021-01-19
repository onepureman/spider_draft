#!/usr/bin/env python

"""
Base_Url: https://www.haodou.com/
Author: jing
Modify: 2021/1/18

"""
import requests
import execjs
from get_validate import GETW


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = self.get_pwd(pwd)
        self.login_url = "https://www.tianyancha.com/cd/login.json"
        self.headers = {
            'Host': 'www.tianyancha.com',
            'Origin': 'https://www.tianyancha.com',
            'Referer': 'https://www.tianyancha.com/login',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36',
        }

    def get_pwd(self, pwd):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", pwd)
        return pwd

    def request_login(self):
        validate, challenge, cookie = GETW().run()
        data = {
            'autoLogin': 'false',
            'cdpassword': self.pwd,
            'challenge': '{}'.format(challenge),
            'loginway': 'PL',
            'mobile': self.user,
            'seccode': '{}|jordan'.format(validate),
            'type': '',
            'validate': '{}'.format(validate),
        }
        self.headers['Cookie'] = cookie
        res = requests.post(self.login_url, json=data, headers=self.headers).json()
        print(res['data']['nickname'])


if __name__ == '__main__':
    user = ""
    pwd = ""
    login = Login(user, pwd)
    login.request_login()
