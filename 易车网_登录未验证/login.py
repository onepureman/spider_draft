"""
Base_Url:
Author:
Modify:
"""

import time
import execjs
import requests
from pprint import pprint
import random


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.sess.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        }
        self.login_url = "https://i.yiche.com/ajax/Authenservice/login2.ashx"

    def get_pwd(self):

        js_pwd = """
        
         const jsdom = require("jsdom");
        const { JSDOM } = jsdom;
        const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
        window = global;
        var document = dom.window.document;
        var params = {
            location:{
                hash: "",
                host: "www.toutiao.com",
                hostname: "www.toutiao.com",
                href: "https://www.toutiao.com",
                origin: "https://www.toutiao.com",
                pathname: "/",
                port: "",
                protocol: "https:",
                search: "",
            },
            navigator:{
                appCodeName: "Mozilla",
                appName: "Netscape",
                appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
                cookieEnabled: true,
                deviceMemory: 8,
                doNotTrack: null,
                hardwareConcurrency: 4,
                language: "zh-CN",
                languages: ["zh-CN", "zh"],
                maxTouchPoints: 0,
                onLine: true,
                platform: "Win32",
                product: "Gecko",
                productSub: "20030107",
                userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
                vendor: "Google Inc.",
                vendorSub: "",
            },
            "screen":{
                availHeight: 1040,
                availLeft: 0,
                availTop: 0,
                availWidth: 1920,
                colorDepth: 24,
                height: 1080,
                pixelDepth: 24,
                width: 1920,
            }
        };
        Object.assign(window,params);
        
        
        window.document = document;
        
         const {JSEncrypt} = require("E:/pycharmproject/study_own/js_study/金牛理财_已完成/jsencrypt.js")
        
        
        function getpwd(pwd){
            var S = new JSEncrypt();
            S.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDhSuJhMKlDvYfdNziWxvcV0FFANWANlvlsqpD8ksbxCFiaiVsVy8+QGhB/rXCWMG0pVSCZ9mHHPrZeNzRMHtHB/2IBxCt1l6vZEgHlxGtvU6+X8nKMNH/RvaU9tq3tEIKEJ4OqRWbMwpP34PTyHunzT+yvgYgb4NK9P4ZkViURNQIDAQAB")
            return S.encrypt(pwd)

        }
        
        """

        pwd = execjs.compile(js_pwd, cwd=r'E:\node\node_modules\npm\node_modules').call("getpwd", self.pwd)
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
        data = self.load_data("./data.txt")

        res = self.sess.get("https://g.yccdn.com/autolog?v=" + str(int(time.time()*1000)))

        pwd = self.get_pwd()

        data["txt_Password"] = pwd
        data["txt_LoginName"] = self.user
        # 生成guid
        guid_raw = []
        for i in range(3):
            guid_raw.append(str(random.randint(1, 100000000)))
        guid = "-".join(guid_raw)
        self.get_captcha(guid)
        data["txt_Code"] = input("请输入验证码:")
        data["guid"] = guid
        pprint(data)

        self.sess.headers["Referer"] = "https://i.yiche.com/authenservice/login.html"
        self.sess.headers["Origin"] = "https://i.yiche.com"
        res = self.sess.post(self.login_url, data=data)
        print(res)
        print(res.content.decode())
        print(self.sess.cookies)

        self.sess.headers["x-user-guid"] = guid
        response = self.sess.get("http://www.bitauto.com/web_api/user_center_api/api/v1/user/decrypt_user_info?cid=508&param=%7B%7D")
        print(response.content.decode())


if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()