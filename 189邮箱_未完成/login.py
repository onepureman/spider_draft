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



        
        
        
        
        
        var RSA_Pwd = {
    j_isPwdRsa: document.getElementById("j_isPwdRsa"),
    j_isMobileRsa: document.getElementById("j_isMobileRsa"),
    j_rsaKey: document.getElementById("j_rsaKey"),
    appId: "",
    rsaPre: "{RSA}",
    mobileNeedRsa: !1,
    pwdNeedRsa: !1,
    encrypt: null,
    getRsaFlag: !1,
    domain: "//" + document.domain,
    needRsaFunc: function(type, RSA) {
        var elementId = "mobile" === type ? this.j_isMobileRsa : this.j_isPwdRsa
          , rsaVal = null !== elementId && "true" === elementId.value
          , rsaKeyVal = !!RSA && 0 < RSA.length;
        return rsaVal && rsaKeyVal
    },
    getRsaFuc: function(isInit, type, val) {
        var _this = this;
        function dealRsa(rsa) {
            if (_this.getRsaFlag = !0,
            _this.pwdNeedRsa = _this.needRsaFunc("pwd", rsa),
            _this.mobileNeedRsa = _this.needRsaFunc("mobile", rsa),
            (_this.needRsa || _this.mobileNeedRsa) && (_this.encrypt = new JSEncrypt,
            _this.encrypt.setPublicKey(rsa)),
            !isInit) {
                var rsaStr = _this.rsaPre + _this.encrypt.encrypt(val);
                return "mobile" === type ? _this.mobileNeedRsa ? rsaStr : val : _this.pwdNeedRsa ? rsaStr : val
            }
        }
        ajax({
            url: _this.domain + "/api/logbox/config/encryptConf.do",
            data: {
                appId: _this.appId
            },
            sync: !1,
            method: "POST",
            dataType: "json",
            timeout: "10000",
            success: function(data) {
                var rsa = "";
                return 0 === parseInt(data.result) ? (rsa = data.data.pubKey,
                _this.rsaPre = data.data.pre) : (_this.rsaPre = "{RSA}",
                rsa = _this.j_rsaKey.value),
                dealRsa(rsa)
            },
            error: function(err) {
                var rsa = _this.j_rsaKey.value;
                return _this.rsaPre = "{RSA}",
                dealRsa(rsa)
            }
        })
    },
    getRsaStr: function(type, val) {
        if (this.getRsaFlag) {
            var rsaStr = this.rsaPre + this.encrypt.encrypt(val);
            return "mobile" === type ? this.mobileNeedRsa ? rsaStr : val : this.pwdNeedRsa ? rsaStr : val
        }
        return this.getRsaFuc(!1, type, val)
    },
    rsaPwd: function(val) {
        return this.getRsaStr("pwd", val)
    },
    rsaMobile: function(val) {
        return this.getRsaStr("mobile", val)
    },
    init: function(appId) {
        this.appId = appId,
        this.getRsaFuc(!0)
    }
}
        
        
        
        function getpwd(pwd){
        return RSA_Pwd.rsaMobile(pwd)
        
        
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