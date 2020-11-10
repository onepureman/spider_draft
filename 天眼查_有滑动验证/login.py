"""
Base_Url:https://www.sogou.com/sogou?query=%E5%A4%A9%E7%9C%BC%E6%9F%A5&pid=sogou-wsse-91e50fe1e39af286
Author:jing
Modify:2020/10/26
"""

import execjs
import requests
from pprint import pprint
import re
import json


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.login_url = "https://www.tianyancha.com/cd/login.json"

    def get_pwd(self):

        js_pwd = """
        

    function t(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }
    function n(e, t) {
        return e << t | e >>> 32 - t
    }
    function i(e, i, a, r, o, s) {
        return t(n(t(t(i, e), t(r, s)), o), a)
    }
    function a(e, t, n, a, r, o, s) {
        return i(t & n | ~t & a, e, t, r, o, s)
    }
    function r(e, t, n, a, r, o, s) {
        return i(t & a | n & ~a, e, t, r, o, s)
    }
    function o(e, t, n, a, r, o, s) {
        return i(t ^ n ^ a, e, t, r, o, s)
    }
    function s(e, t, n, a, r, o, s) {
        return i(n ^ (t | ~a), e, t, r, o, s)
    }
    function l(e, n) {
        e[n >> 5] |= 128 << n % 32,
        e[14 + (n + 64 >>> 9 << 4)] = n;
        var i, l, c, d, u, p = 1732584193, h = -271733879, f = -1732584194, m = 271733878;
        for (i = 0; i < e.length; i += 16)
            l = p,
            c = h,
            d = f,
            u = m,
            p = a(p, h, f, m, e[i], 7, -680876936),
            m = a(m, p, h, f, e[i + 1], 12, -389564586),
            f = a(f, m, p, h, e[i + 2], 17, 606105819),
            h = a(h, f, m, p, e[i + 3], 22, -1044525330),
            p = a(p, h, f, m, e[i + 4], 7, -176418897),
            m = a(m, p, h, f, e[i + 5], 12, 1200080426),
            f = a(f, m, p, h, e[i + 6], 17, -1473231341),
            h = a(h, f, m, p, e[i + 7], 22, -45705983),
            p = a(p, h, f, m, e[i + 8], 7, 1770035416),
            m = a(m, p, h, f, e[i + 9], 12, -1958414417),
            f = a(f, m, p, h, e[i + 10], 17, -42063),
            h = a(h, f, m, p, e[i + 11], 22, -1990404162),
            p = a(p, h, f, m, e[i + 12], 7, 1804603682),
            m = a(m, p, h, f, e[i + 13], 12, -40341101),
            f = a(f, m, p, h, e[i + 14], 17, -1502002290),
            h = a(h, f, m, p, e[i + 15], 22, 1236535329),
            p = r(p, h, f, m, e[i + 1], 5, -165796510),
            m = r(m, p, h, f, e[i + 6], 9, -1069501632),
            f = r(f, m, p, h, e[i + 11], 14, 643717713),
            h = r(h, f, m, p, e[i], 20, -373897302),
            p = r(p, h, f, m, e[i + 5], 5, -701558691),
            m = r(m, p, h, f, e[i + 10], 9, 38016083),
            f = r(f, m, p, h, e[i + 15], 14, -660478335),
            h = r(h, f, m, p, e[i + 4], 20, -405537848),
            p = r(p, h, f, m, e[i + 9], 5, 568446438),
            m = r(m, p, h, f, e[i + 14], 9, -1019803690),
            f = r(f, m, p, h, e[i + 3], 14, -187363961),
            h = r(h, f, m, p, e[i + 8], 20, 1163531501),
            p = r(p, h, f, m, e[i + 13], 5, -1444681467),
            m = r(m, p, h, f, e[i + 2], 9, -51403784),
            f = r(f, m, p, h, e[i + 7], 14, 1735328473),
            h = r(h, f, m, p, e[i + 12], 20, -1926607734),
            p = o(p, h, f, m, e[i + 5], 4, -378558),
            m = o(m, p, h, f, e[i + 8], 11, -2022574463),
            f = o(f, m, p, h, e[i + 11], 16, 1839030562),
            h = o(h, f, m, p, e[i + 14], 23, -35309556),
            p = o(p, h, f, m, e[i + 1], 4, -1530992060),
            m = o(m, p, h, f, e[i + 4], 11, 1272893353),
            f = o(f, m, p, h, e[i + 7], 16, -155497632),
            h = o(h, f, m, p, e[i + 10], 23, -1094730640),
            p = o(p, h, f, m, e[i + 13], 4, 681279174),
            m = o(m, p, h, f, e[i], 11, -358537222),
            f = o(f, m, p, h, e[i + 3], 16, -722521979),
            h = o(h, f, m, p, e[i + 6], 23, 76029189),
            p = o(p, h, f, m, e[i + 9], 4, -640364487),
            m = o(m, p, h, f, e[i + 12], 11, -421815835),
            f = o(f, m, p, h, e[i + 15], 16, 530742520),
            h = o(h, f, m, p, e[i + 2], 23, -995338651),
            p = s(p, h, f, m, e[i], 6, -198630844),
            m = s(m, p, h, f, e[i + 7], 10, 1126891415),
            f = s(f, m, p, h, e[i + 14], 15, -1416354905),
            h = s(h, f, m, p, e[i + 5], 21, -57434055),
            p = s(p, h, f, m, e[i + 12], 6, 1700485571),
            m = s(m, p, h, f, e[i + 3], 10, -1894986606),
            f = s(f, m, p, h, e[i + 10], 15, -1051523),
            h = s(h, f, m, p, e[i + 1], 21, -2054922799),
            p = s(p, h, f, m, e[i + 8], 6, 1873313359),
            m = s(m, p, h, f, e[i + 15], 10, -30611744),
            f = s(f, m, p, h, e[i + 6], 15, -1560198380),
            h = s(h, f, m, p, e[i + 13], 21, 1309151649),
            p = s(p, h, f, m, e[i + 4], 6, -145523070),
            m = s(m, p, h, f, e[i + 11], 10, -1120210379),
            f = s(f, m, p, h, e[i + 2], 15, 718787259),
            h = s(h, f, m, p, e[i + 9], 21, -343485551),
            p = t(p, l),
            h = t(h, c),
            f = t(f, d),
            m = t(m, u);
        return [p, h, f, m]
    }
    function c(e) {
        var t, n = "", i = 32 * e.length;
        for (t = 0; t < i; t += 8)
            n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return n
    }
    function d(e) {
        var t, n = [];
        for (n[(e.length >> 2) - 1] = void 0,
        t = 0; t < n.length; t += 1)
            n[t] = 0;
        var i = 8 * e.length;
        for (t = 0; t < i; t += 8)
            n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n
    }
    function u(e) {
        return c(l(d(e), 8 * e.length))
    }
    function p(e, t) {
        var n, i, a = d(e), r = [], o = [];
        for (r[15] = o[15] = void 0,
        a.length > 16 && (a = l(a, 8 * e.length)),
        n = 0; n < 16; n += 1)
            r[n] = 909522486 ^ a[n],
            o[n] = 1549556828 ^ a[n];
        return i = l(r.concat(d(t)), 512 + 8 * t.length),
        c(l(o.concat(i), 640))
    }
    function h(e) {
        var t, n, i = "0123456789abcdef", a = "";
        for (n = 0; n < e.length; n += 1)
            t = e.charCodeAt(n),
            a += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
        return a
    }
    function f(e) {
        return unescape(encodeURIComponent(e))
    }
    function m(e) {
        return u(f(e))
    }
    
    function v(e, t) {
        return p(f(e), f(t))
    }
    function y(e, t) {
        return h(v(e, t))
    }
    function b(e, t, n) {
        return t ? n ? v(t, e) : y(t, e) : n ? m(e) : g(e)
    }
    "function" == typeof define && define.amd ? define("md5", [], function() {
        return b
    }) : "object" == typeof module && module.exports ? module.exports = b : e.md5 = b

       function getpwd(pwd) {
        return h(m(pwd))
    }
        """

        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
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
        data = self.load_data("data.txt")
        self.sess.get("https://www.tianyancha.com/vipintro/?jsid=SEM-SOUGOU-PP-VIS-212505")

        res = self.sess.post("https://www.tianyancha.com/verify/geetest.xhtml", json={"uuid": "1603695931416"}).json()
        url = "https://api.geetest.com/get.php?gt=" + res["data"]["gt"] + "&challenge=" + res["data"]["challenge"] + "&product=popup&offline=false&protocol=https://&beeline=/static/js/beeline.1.0.1.js&type=slide&maze=/static/js/maze.1.0.1.js&pencil=/static/js/pencil.1.0.3.js&voice=/static/js/voice.1.2.0.js&path=/static/js/geetest.6.0.9.js&callback=geetest_1603695937791"
        res = self.sess.get(url)
        data["challenge"] = re.findall("\"challenge\": \"(.*?)\",", res.content.decode())

        data["mobile"] = self.user
        data["cdpassword"] = self.get_pwd()

        # TODO:获取滑动验证之后返回的参数
        validate = ""
        data["seccode"] = validate + "|jordan"
        data["validate"] = validate

        res = self.sess.post(self.login_url, data=json.dumps(data))
        print(res.content.decode())


if __name__ == '__main__':
    user = "18513624157"
    pwd = "1111111111"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()