"""
Base_Url: https://www.taobao.com/
Author: jing
Modify: 2020/10/22
Notes:2020/12/14发现得定期更新 ua 参数 但execjs 生成ua的方法执行还是无法正常返回， 后续解决生成ua问题
"""

import execjs
import requests
import re
import sys
import os
from pprint import  pprint
os.chdir(os.path.dirname(__file__))


class Login(object):

    def __init__(self, user, pwd):
        self.login_url = "https://login.taobao.com/newlogin/login.do?appName=taobao&fromSite=0"
        self.session = requests.Session()
        self.pwd = pwd
        self.user = user

    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()

        pwd = execjs.compile(js_pwd).call("getPwd", self.pwd)
        return pwd

    # 加载 data数据
    def read_data(self):
        data = {}
        with open("./login_data.txt", "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:

                split_ = line.split(":")
                data[split_[0]] = split_[1].replace("\n", "").replace(" ", "")
        data["loginId"] = self.user  # 重置用户名
        data["password2"] = self.get_pwd()  # 重置密码
        return data

    # 登录，未加成功与否的判断
    def login_(self):
        data = self.read_data()

        self.session.post(self.login_url, data=data)

        r2 = self.session.get("https://i.taobao.com/my_taobao.htm?spm=a21bo.2017.754894437.3.5af911d9fM97Ej&ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739")
        # print(r2.content.decode())
        find = re.findall(self.user, r2.content.decode("gbk"))
        if len(find) > 0:
            return self.session
        else:
            return False


if __name__ == '__main__':
    # TODO: 需要更换logib_data.txt中的ua 参数
    login = Login("", "")  # TODO: 输入 账号 密码  注意此处输入账号名称
    login_sc = login.login_()
    print(login_sc)
