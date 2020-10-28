"""
Base_Url:http://www.hexun.com/
Author:jing
Modify:2020/10/28
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
        
         const {JSEncrypt} = require("E:/pycharmproject/study_own/js_study/和讯网_密码加密成功_validate未找到/jsencrypt.js")
        
        
        function getpwd(pwd){
            var encrypt = new JSEncrypt();
            // clientkey = result.data.key;
            encrypt.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCdNu0QaRmMbBEUmvy8NxNf2MSoggxSlt0zd5Kmdg8mLhmifd9D2xAF2vf9bRc40NKCHI+wXJzO3Bhb1C+sLmLW8X05/K0vTBbi2xyVfL/YoRnZqzxYy1BUgPH2NznKx1k+Bgr9S34oRDoSX4wm3JKZt1LOVT1FjNZ0g80Xqq5RbwIDAQAB");
            return encrypt.encrypt(pwd);
        }
        
        """

        pwd = execjs.compile(js_pwd, cwd=r'E:\node\node_modules\npm\node_modules').call("getpwd", self.pwd)
        return pwd

    def login_(self):
        pwd = self.get_pwd()
        print(pwd)


if __name__ == '__main__':
    user = ""
    pwd = "222222"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()


