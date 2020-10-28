"""
Base_Url:https://buyfund.jnlc.com/etrading/sys/web/loginUC
Author:jing
Modify:2020/10/28
"""

import re
import time
import execjs
import requests
from pprint import pprint


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.login_url = "https://buyfund.jnlc.com/etrading/sys/web/loginUC"

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
        
         const {JSEncrypt} = require("E:/pycharmproject/study_own/js_study/金牛理财/jsencrypt.js")
        
        
        
        function getpwd(pwd){
            var encrypt = new JSEncrypt();
            encrypt.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDL0SzLOMIzLX5Jhu++JQfQv9sjZOgvY4cDIaxbR9yAXncYC9ljDr8SFdZUhU3dAtcK1P5Z2KO2i65ZgMzV341e/VxvL/NZlx6Mva6Tpf58A2oEA+96HRAhENG744yJA323ZYRz5IRU+qETJr7KfbzR9zO6c7Oq0seoH9ChgyEAVwIDAQAB")
            return encrypt.encrypt(pwd)
        
        
        }
        
        
        """

        pwd = execjs.compile(js_pwd, cwd=r'E:\node\node_modules\npm\node_modules').call("getpwd", self.pwd)
        return pwd

    def get_CSRFToken(self):
        url = "https://buyfund.jnlc.com/etrading/sys/web/loginUC"
        response = self.sess.get(url)
        CSRFToken = re.findall("name=\"CSRFToken\" value=\"(.*?)\" /", response.content.decode())[0]
        return CSRFToken

    def get_captcha(self):
        url = "https://buyfund.jnlc.com/etrading/sys/web/validateCode?id=3.1596543065850624"
        response = self.sess.get(url)

        with open("captcha.jpg", "wb") as f:
            f.write(response.content)

    def login_(self):
        CSRFToken = self.get_CSRFToken()
        self.get_captcha()
        pwd = self.get_pwd()

        data = {
            "CSRFToken": CSRFToken,
            "password": pwd,
            "userName": self.user,
            "seccode": input("请输入验证码:")

        }
        res = self.sess.post(self.login_url, data=data)
        login_status = re.findall("loginReuslt\((.*?),", res.content.decode())[0]
        if login_status == "true":
            print("登陆成功")


if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()