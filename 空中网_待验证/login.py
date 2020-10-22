"""
Base_Url: http://www.kongzhong.com/
Author: jing
Modify: 2020/10/22
"""


import execjs
from requests import session
import time
import re


class Login(object):

    def __init__(self, user, pwd):

        self.user = user
        self.pwd = pwd
        self.sess = session()
        self.sess.headers = {
            "Referer": "https://passport.kongzhong.com/login",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
        }

    def get_dc(self):
        url = "https://sso.kongzhong.com/ajaxLogin?j=j&jsonp=j&service=https://passport.kongzhong.com/&_=1602833536420".format(str(int(time.time()*1000)))
        response = self.sess.get(url)
        dc = re.findall("\"dc\":\"(.*?)\"", response.content.decode())[0]
        return dc

    def get_pwd(self):

        pwd_js = """
        function getpwd(str, pwd) {
                if (pwd == null || pwd.length <= 0) {
                    return null
                }
                ;var prand = "";
                for (var i = 0; i < pwd.length; i++) {
                    prand += pwd.charCodeAt(i).toString()
                }
                ;var sPos = Math.floor(prand.length / 5);
                var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
                var incr = Math.ceil(pwd.length / 2);
                var modu = Math.pow(2, 31) - 1;
                if (mult < 2) {
                    return null
                }
                ;var salt = Math.round(Math.random() * 1000000000) % 100000000;
                prand += salt;
                while (prand.length > 10) {
                    var a = prand.substring(0, 1);
                    var b = prand.substring(10, prand.length);
                    if (b.length > 10) {
                        prand = b
                    } else {
                        prand = (parseInt(a) + parseInt(b)).toString()
                    }
                }
                ;prand = (mult * prand + incr) % modu;
                var enc_chr = "";
                var enc_str = "";
                for (var i = 0; i < str.length; i++) {
                    enc_chr = parseInt(str.charCodeAt(i) ^ Math.floor((prand / modu) * 255));
                    if (enc_chr < 16) {
                        enc_str += "0" + enc_chr.toString(16)
                    } else
                        enc_str += enc_chr.toString(16);
                    prand = (mult * prand + incr) % modu
                }
                ;salt = salt.toString(16);
                while (salt.length < 8)
                    salt = "0" + salt;
                enc_str += salt;
                return enc_str
            }
        
        """
        pwd = execjs.compile(pwd_js).call("getpwd", self.pwd, self.get_dc())
        return pwd

    def login(self):
        pwd = self.get_pwd()

        login_url = "https://sso.kongzhong.com/ajaxLogin?j=j&&type=1&service=https://passport.kongzhong.com/&username={}&password={}&vcode=8zgu&toSave=0&_={}".format(self.user, pwd, str(int(time.time()*1000)))

        r = self.sess.get(login_url)
        print(r.content.decode())


if __name__ == '__main__':
    login = Login("", "")  # TODO: 输入 账号 密码
    login.login()