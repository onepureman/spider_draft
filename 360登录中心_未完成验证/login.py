"""
Base_Url: https://www.360.cn/
Author: jing
Modify: 2020/10/22
"""


import execjs
import requests
from requests import Session
from pprint import pprint
import re
import time

sess = Session()
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 QIHU 360SE",
    "Host": "login.360.cn"
}

js_ = """

        function t(e, t) {
            var n = (65535 & e) + (65535 & t)
              , i = (e >> 16) + (t >> 16) + (n >> 16);
            return i << 16 | 65535 & n
        }
        function n(e, t) {
            return e << t | e >>> 32 - t
        }
        function i(e, i, r, o, a, c) {
            return t(n(t(t(i, e), t(o, c)), a), r)
        }
        function r(e, t, n, r, o, a, c) {
            return i(t & n | ~t & r, e, t, o, a, c)
        }
        function o(e, t, n, r, o, a, c) {
            return i(t & r | n & ~r, e, t, o, a, c)
        }
        function a(e, t, n, r, o, a, c) {
            return i(t ^ n ^ r, e, t, o, a, c)
        }
        function c(e, t, n, r, o, a, c) {
            return i(n ^ (t | ~r), e, t, o, a, c)
        }
        function s(e, n) {
            e[n >> 5] |= 128 << n % 32,
            e[(n + 64 >>> 9 << 4) + 14] = n;
            var i, s, u, l, f, p = 1732584193, d = -271733879, h = -1732584194, m = 271733878;
            for (i = 0; i < e.length; i += 16)
                s = p,
                u = d,
                l = h,
                f = m,
                p = r(p, d, h, m, e[i], 7, -680876936),
                m = r(m, p, d, h, e[i + 1], 12, -389564586),
                h = r(h, m, p, d, e[i + 2], 17, 606105819),
                d = r(d, h, m, p, e[i + 3], 22, -1044525330),
                p = r(p, d, h, m, e[i + 4], 7, -176418897),
                m = r(m, p, d, h, e[i + 5], 12, 1200080426),
                h = r(h, m, p, d, e[i + 6], 17, -1473231341),
                d = r(d, h, m, p, e[i + 7], 22, -45705983),
                p = r(p, d, h, m, e[i + 8], 7, 1770035416),
                m = r(m, p, d, h, e[i + 9], 12, -1958414417),
                h = r(h, m, p, d, e[i + 10], 17, -42063),
                d = r(d, h, m, p, e[i + 11], 22, -1990404162),
                p = r(p, d, h, m, e[i + 12], 7, 1804603682),
                m = r(m, p, d, h, e[i + 13], 12, -40341101),
                h = r(h, m, p, d, e[i + 14], 17, -1502002290),
                d = r(d, h, m, p, e[i + 15], 22, 1236535329),
                p = o(p, d, h, m, e[i + 1], 5, -165796510),
                m = o(m, p, d, h, e[i + 6], 9, -1069501632),
                h = o(h, m, p, d, e[i + 11], 14, 643717713),
                d = o(d, h, m, p, e[i], 20, -373897302),
                p = o(p, d, h, m, e[i + 5], 5, -701558691),
                m = o(m, p, d, h, e[i + 10], 9, 38016083),
                h = o(h, m, p, d, e[i + 15], 14, -660478335),
                d = o(d, h, m, p, e[i + 4], 20, -405537848),
                p = o(p, d, h, m, e[i + 9], 5, 568446438),
                m = o(m, p, d, h, e[i + 14], 9, -1019803690),
                h = o(h, m, p, d, e[i + 3], 14, -187363961),
                d = o(d, h, m, p, e[i + 8], 20, 1163531501),
                p = o(p, d, h, m, e[i + 13], 5, -1444681467),
                m = o(m, p, d, h, e[i + 2], 9, -51403784),
                h = o(h, m, p, d, e[i + 7], 14, 1735328473),
                d = o(d, h, m, p, e[i + 12], 20, -1926607734),
                p = a(p, d, h, m, e[i + 5], 4, -378558),
                m = a(m, p, d, h, e[i + 8], 11, -2022574463),
                h = a(h, m, p, d, e[i + 11], 16, 1839030562),
                d = a(d, h, m, p, e[i + 14], 23, -35309556),
                p = a(p, d, h, m, e[i + 1], 4, -1530992060),
                m = a(m, p, d, h, e[i + 4], 11, 1272893353),
                h = a(h, m, p, d, e[i + 7], 16, -155497632),
                d = a(d, h, m, p, e[i + 10], 23, -1094730640),
                p = a(p, d, h, m, e[i + 13], 4, 681279174),
                m = a(m, p, d, h, e[i], 11, -358537222),
                h = a(h, m, p, d, e[i + 3], 16, -722521979),
                d = a(d, h, m, p, e[i + 6], 23, 76029189),
                p = a(p, d, h, m, e[i + 9], 4, -640364487),
                m = a(m, p, d, h, e[i + 12], 11, -421815835),
                h = a(h, m, p, d, e[i + 15], 16, 530742520),
                d = a(d, h, m, p, e[i + 2], 23, -995338651),
                p = c(p, d, h, m, e[i], 6, -198630844),
                m = c(m, p, d, h, e[i + 7], 10, 1126891415),
                h = c(h, m, p, d, e[i + 14], 15, -1416354905),
                d = c(d, h, m, p, e[i + 5], 21, -57434055),
                p = c(p, d, h, m, e[i + 12], 6, 1700485571),
                m = c(m, p, d, h, e[i + 3], 10, -1894986606),
                h = c(h, m, p, d, e[i + 10], 15, -1051523),
                d = c(d, h, m, p, e[i + 1], 21, -2054922799),
                p = c(p, d, h, m, e[i + 8], 6, 1873313359),
                m = c(m, p, d, h, e[i + 15], 10, -30611744),
                h = c(h, m, p, d, e[i + 6], 15, -1560198380),
                d = c(d, h, m, p, e[i + 13], 21, 1309151649),
                p = c(p, d, h, m, e[i + 4], 6, -145523070),
                m = c(m, p, d, h, e[i + 11], 10, -1120210379),
                h = c(h, m, p, d, e[i + 2], 15, 718787259),
                d = c(d, h, m, p, e[i + 9], 21, -343485551),
                p = t(p, s),
                d = t(d, u),
                h = t(h, l),
                m = t(m, f);
            return [p, d, h, m]
        }
        function u(e) {
            var t, n = "";
            for (t = 0; t < 32 * e.length; t += 8)
                n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }
        function l(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0,
            t = 0; t < n.length; t += 1)
                n[t] = 0;
            for (t = 0; t < 8 * e.length; t += 8)
                n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }
        function f(e) {
            return u(s(l(e), 8 * e.length))
        }
        function p(e, t) {
            var n, i, r = l(e), o = [], a = [];
            for (o[15] = a[15] = void 0,
            r.length > 16 && (r = s(r, 8 * e.length)),
            n = 0; n < 16; n += 1)
                o[n] = 909522486 ^ r[n],
                a[n] = 1549556828 ^ r[n];
            return i = s(o.concat(l(t)), 512 + 8 * t.length),
            u(s(a.concat(i), 640))
        }
        function d(e) {
            var t, n, i = "0123456789abcdef", r = "";
            for (n = 0; n < e.length; n += 1)
                t = e.charCodeAt(n),
                r += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
            return r
        }
        function h(e) {
            return unescape(encodeURIComponent(e))
        }
        function m(e) {
            return f(h(e))
        }
        function g(e) {
            return d(m(e))
        }
        function v(e, t) {
            return p(h(e), h(t))
        }
        function q(e, t) {
            return d(v(e, t))
        }
        md5 = function(e, t) {
            return t ? q(t, e) : g(e)
        }
"""
pwd = execjs.compile(js_).call("md5", "")  # TODO: 输入密码


def load_data():
    data = {}
    with open("./data.txt", "rt", encoding="utf-8") as f:
        read = f.readlines()
        for line in read:
            split_ = line.split(":")
            data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
    return data


data = load_data()
data["password"] = pwd


# 获取 token
def get_token():
    url = "https://login.360.cn/?func=jQuery112407017940677562093_1602486129494&src=pcw_home&from=pcw_home&cha"

    r = requests.get(url)
    token = re.findall("\"token\":\"(.*?)\"", r.content.decode())
    return token


data["token"] = get_token()

post_url = "https://login.360.cn/"

r = sess.post(post_url, data=data)
print(r.content.decode())


# 验证是否登陆成功
yanzheng_url = "https://login.360.cn/?o=sso&m=info&requestScema=https&callback=jQuery110207241101365568958_1602486378473&_=" + str(round(time.time() * 1000))
response = sess.get(yanzheng_url, headers=headers)
print(response.content.decode())
# TODO: 未能成功验证， ，没有获取到 用户名称
