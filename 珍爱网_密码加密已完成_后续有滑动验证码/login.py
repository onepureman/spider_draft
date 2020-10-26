"""
Base_Url:https://www.zhenai.com/n/login?registerFrom=baseInfo
Author:jing
Modify:2020/10/26
Notes:用的nodejs 加载的 window等
"""

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
        
        const {JSEncrypt} = require("E:/pycharmproject/study_own/js_study/珍爱网_密码加密已完成_后续有滑动验证码/JSEncrypt.js")


        function getpwd(pwd){
            var n = 2048;
            var t = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApCNjsTlE3AIR1YXyhE9M5SQ9xf1o0+W528nLdvI7ZmCOdFMed8SA3L91YFP+8wBl1we6BwVQBHo/4OQwUNlwVE7BgtsV5D67/rR74d0vGJNLBNMx6V3D/Uf+QgXBlPESWRwRkkHl2RbzTWbI60X0mLTxkvvpEYSvgFytlv5QL+on3TKp/Q4UiUk4MmWnY1taNLw7rAM8/HXYotC+jnhMgjvYEf5Ank/F0Tm4WZq/QlJcT2pOEN8vanGT325XhyshdqZJgG2IT1nt5EdtVjXySF9AMpnA2Cmz35Qygy/rx3+0+82yBpCgxjv0O7pYvtJ5tIXWkcUB3V6HtXiCkMNWRwIDAQAB";
            var r = new JSEncrypt({default_key_size: n});
            r.setPublicKey(t)
            return r.encrypt(pwd)
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
