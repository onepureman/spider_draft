"""
Base_Url:
Author:
Modify:
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
        self.login_url = "http://api1.fun.tv/account/login_funshion?isajax=1&dtime="

    def get_pwd(self):

        js_pwd = """
        function str2binb(r) {
    for (var a = Array(), e = (1 << chrsz) - 1, n = 0; n < r.length * chrsz; n += chrsz)
        a[n >> 5] |= (r.charCodeAt(n / chrsz) & e) << 32 - chrsz - n % 32;
    return a
}
        function core_sha1(r, a) {
    r[a >> 5] |= 128 << 24 - a % 32,
    r[(a + 64 >> 9 << 4) + 15] = a;
    for (var e = Array(80), n = 1732584193, s = -271733879, h = -1732584194, f = 271733878, c = -1009589776, d = 0; d < r.length; d += 16) {
        for (var o = n, _ = s, u = h, i = f, b = c, l = 0; 80 > l; l++) {
            e[l] = 16 > l ? r[d + l] : rol(e[l - 3] ^ e[l - 8] ^ e[l - 14] ^ e[l - 16], 1);
            var t = safe_add(safe_add(rol(n, 5), sha1_ft(l, s, h, f)), safe_add(safe_add(c, e[l]), sha1_kt(l)));
            c = f,
            f = h,
            h = rol(s, 30),
            s = n,
            n = t
        }
        n = safe_add(n, o),
        s = safe_add(s, _),
        h = safe_add(h, u),
        f = safe_add(f, i),
        c = safe_add(c, b)
    }
    return Array(n, s, h, f, c)
}
        function safe_add(r, a) {
    var e = (65535 & r) + (65535 & a)
      , n = (r >> 16) + (a >> 16) + (e >> 16);
    return n << 16 | 65535 & e
}


function rol(r, a) {
    return r << a | r >>> 32 - a
}

function sha1_ft(t, r, a, e) {
    return 20 > t ? r & a | ~r & e : 40 > t ? r ^ a ^ e : 60 > t ? r & a | r & e | a & e : r ^ a ^ e
}

function sha1_kt(t) {
    return 20 > t ? 1518500249 : 40 > t ? 1859775393 : 60 > t ? -1894007588 : -899497514
}
        
        function binb2hex(r) {
            for (var a = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", e = "", n = 0; n < 4 * r.length; n++)
                e += a.charAt(r[n >> 2] >> 8 * (3 - n % 4) + 4 & 15) + a.charAt(r[n >> 2] >> 8 * (3 - n % 4) & 15);
            return e
        }
        var chrsz = 8;
        var hexcase = 0;
        function hex_sha1(r) {
            return binb2hex(core_sha1(str2binb(r), r.length * chrsz))
        }
        
        
        function getpwd(pwd){
            return hex_sha1(pwd).substr(0, 15)
        
        }
        
        
        """

        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    def login_(self):
        print(self.login_url+str(int(time.time()*1000)))
        pwd = self.get_pwd()

        data = {
            "username": self.user,
            "password": pwd,
            "location": "{location}",
            "autologin": "on",
        }
        res = self.sess.post(self.login_url+str(int(time.time()*1000)), data=data).json()

        print(res)  # {'status': 200, 'msg': '登录成功', 'url': '{location}', 'field': ''}




if __name__ == '__main__':
    user = ""
    pwd = ""

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()
