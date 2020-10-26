"""
Base_Url:https://www.qcc.com/
Author:jing
Modify:2020/10/26
"""
"""
说明  滑动验证的 n  p  参数 暂时没有完成 已找到js生成的地方

"""

import execjs
import requests
from pprint import pprint
import time


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.login_url = "https://www.qcc.com/user_loginaction"

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
        
         const {e} = require("E:/pycharmproject/study_own/js_study/企查查_未完成/um.js")
         
         
         function midtoken(){
            var aa = {appName: "QNYX",
            enableFY: 1,
            jf: 1,
            serviceUrl: "https://ynuf.aliapp.org/service/um.json",
            timeout: 3000,
            wtac: 1}
            var ss = e(23, aa, !1, function(n, o) {alert(o.tn);if(o.tn.startsWith('T2gA')){window.ssss=o.tn}"success" === n ? e.umidToken = o.tn : (e.umidToken = "defaultToken4_init_failed with " + n + "@@" + t + "@@" + (new Date).getTime(),i < 3 && r())})
            return window.ssss;
}

        
        """

        pwd = execjs.compile(js_pwd, cwd=r'E:\node\node_modules\npm\node_modules').call("midtoken")
        return pwd

    def load_data(self, path):
        data = {}
        with open(path, "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:
                split_ = line.split(":")
                data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
        return data

    def login_(self):
        # self.sess.get("https://www.qcc.com/")
        # self.sess.headers ={
        #     "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36"
        # }

        # data = self.load_data("data.txt")
        # data["nameNormal"] = self.user
        # data["pwdNormal"] = self.pwd
        # data["token_one"] = "QNYX:" + str(int(time.time()*1000)) + ":" + 0.06369664037166856

        pwd = self.get_pwd()
        print(pwd)
        # res = self.sess.post(self.login_url, data=data)
        # print(res.content.decode())


if __name__ == '__main__':
    user = "18513606785"
    pwd = "222222"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()