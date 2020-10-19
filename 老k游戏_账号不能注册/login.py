import execjs
import requests
from pprint import pprint


class Login():
    def __init__(self):
        self.sess = requests.session()

    def get_pwd(self):
        js_pwd = """
        window=this;
        (function(a) {
    var f = a.document
      , d = a.navigator
      , g = a.location
      , b = "private"
      , c = {
        test: function() {
            alert("i am the test function,and the private var is " + b)
        },
        ToBase64: function(g) {
            var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1], a, d, f, c, e, h;
            f = g.length;
            d = 0;
            a = "";
            while (d < f) {
                c = g.charCodeAt(d++) & 255;
                if (d == f) {
                    a += b.charAt(c >> 2);
                    a += b.charAt((c & 3) << 4);
                    a += "==";
                    break
                }
                e = g.charCodeAt(d++);
                if (d == f) {
                    a += b.charAt(c >> 2);
                    a += b.charAt((c & 3) << 4 | (e & 240) >> 4);
                    a += b.charAt((e & 15) << 2);
                    a += "=";
                    break
                }
                h = g.charCodeAt(d++);
                a += b.charAt(c >> 2);
                a += b.charAt((c & 3) << 4 | (e & 240) >> 4);
                a += b.charAt((e & 15) << 2 | (h & 192) >> 6);
                a += b.charAt(h & 63)
            }
            return a
        }
    };
    a.LKEncoder = c
}
)(window);
(function(r) {
    var lb = r.document, ib = r.navigator, mb = r.location, fb = 2, v = 16, d = v, b = 1 << 16, Q = b >>> 1, N = b * b, k = b - 1, hb = 1e16, I, p, x, g;
    function E(c) {
        I = c;
        p = new Array(I);
        for (var b = 0; b < p.length; b++)
            p[b] = 0;
        x = new a;
        g = new a;
        g.digits[0] = 1
    }
    E(20);
    var s = 15
      , bb = u(1e15);
    function a(a) {
        if (typeof a == "boolean" && a == true)
            this.digits = null;
        else
            this.digits = p.slice(0);
        this.isNeg = false
    }
    function y(c) {
        var b = new a(true);
        b.digits = c.digits.slice(0);
        b.isNeg = c.isNeg;
        return b
    }
    function u(c) {
        var d = new a;
        d.isNeg = c < 0;
        c = Math.abs(c);
        var e = 0;
        while (c > 0) {
            d.digits[e++] = c & k;
            c = Math.floor(c / b)
        }
        return d
    }
    function w(c) {
        for (var b = "", a = c.length - 1; a > -1; --a)
            b += c.charAt(a);
        return b
    }
    var C = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    function S(e, f) {
        var c = new a;
        c.digits[0] = f;
        var b = h(e, c)
          , d = C[b[1].digits[0]];
        while (n(b[0], x) == 1) {
            b = h(b[0], c);
            digit = b[1].digits[0];
            d += C[b[1].digits[0]]
        }
        return (e.isNeg ? "-" : "") + w(d)
    }
    var X = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    function T(b) {
        var c = 15
          , a = "";
        for (i = 0; i < 4; ++i) {
            a += X[b & c];
            b >>>= 4
        }
        return w(a)
    }
    function ab(b) {
        for (var d = "", e = c(b), a = c(b); a > -1; --a)
            d += T(b.digits[a]);
        return d
    }
    function H(a) {
        var d = 48, h = d + 9, c = 97, f = c + 25, e = 65, g = 65 + 25, b;
        if (a >= d && a <= h)
            b = a - d;
        else if (a >= e && a <= g)
            b = 10 + a - e;
        else if (a >= c && a <= f)
            b = 10 + a - c;
        else
            b = 0;
        return b
    }
    function U(c) {
        for (var a = 0, d = Math.min(c.length, 4), b = 0; b < d; ++b) {
            a <<= 4;
            a |= H(c.charCodeAt(b))
        }
        return a
    }
    function q(e) {
        for (var c = new a, f = e.length, b = f, d = 0; b > 0; b -= 4,
        ++d)
            c.digits[d] = U(e.substr(Math.max(b - 4, 0), Math.min(b, 4)));
        return c
    }
    function l(g, c) {
        var d;
        if (g.isNeg != c.isNeg) {
            c.isNeg = !c.isNeg;
            d = e(g, c);
            c.isNeg = !c.isNeg
        } else {
            d = new a;
            for (var i = 0, h, f = 0; f < g.digits.length; ++f) {
                h = g.digits[f] + c.digits[f] + i;
                d.digits[f] = h % b;
                i = Number(h >= b)
            }
            d.isNeg = g.isNeg
        }
        return d
    }
    function e(f, g) {
        var d;
        if (f.isNeg != g.isNeg) {
            g.isNeg = !g.isNeg;
            d = l(f, g);
            g.isNeg = !g.isNeg
        } else {
            d = new a;
            var h, e;
            e = 0;
            for (var c = 0; c < f.digits.length; ++c) {
                h = f.digits[c] - g.digits[c] + e;
                d.digits[c] = h % b;
                if (d.digits[c] < 0)
                    d.digits[c] += b;
                e = 0 - Number(h < 0)
            }
            if (e == -1) {
                e = 0;
                for (var c = 0; c < f.digits.length; ++c) {
                    h = 0 - d.digits[c] + e;
                    d.digits[c] = h % b;
                    if (d.digits[c] < 0)
                        d.digits[c] += b;
                    e = 0 - Number(h < 0)
                }
                d.isNeg = !f.isNeg
            } else
                d.isNeg = f.isNeg
        }
        return d
    }
    function c(b) {
        var a = b.digits.length - 1;
        while (a > 0 && b.digits[a] == 0)
            --a;
        return a
    }
    function G(g) {
        for (var f = c(g), b = g.digits[f], e = (f + 1) * d, a = e; a > e - d; --a) {
            if ((b & 32768) != 0)
                break;
            b <<= 1
        }
        return a
    }
    function f(h, i) {
        for (var b = new a, e, l = c(h), m = c(i), n, g, f, d = 0; d <= m; ++d) {
            e = 0;
            f = d;
            for (j = 0; j <= l; ++j,
            ++f) {
                g = b.digits[f] + h.digits[j] * i.digits[d] + e;
                b.digits[f] = g & k;
                e = g >>> v
            }
            b.digits[d + l + 1] = e
        }
        b.isNeg = h.isNeg != i.isNeg;
        return b
    }
    function t(g, h) {
        var f, d, e;
        result = new a;
        f = c(g);
        d = 0;
        for (var b = 0; b <= f; ++b) {
            e = result.digits[b] + g.digits[b] * h + d;
            result.digits[b] = e & k;
            d = e >>> v
        }
        result.digits[1 + f] = d;
        return result
    }
    function m(c, b, f, e, h) {
        for (var g = Math.min(b + h, c.length), a = b, d = e; a < g; ++a,
        ++d)
            f[d] = c[a]
    }
    var P = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535];
    function F(i, h) {
        var f = Math.floor(h / d)
          , b = new a;
        m(i.digits, 0, b.digits, f, b.digits.length - f);
        for (var e = h % d, j = d - e, c = b.digits.length - 1, g = c - 1; c > 0; --c,
        --g)
            b.digits[c] = b.digits[c] << e & k | (b.digits[g] & P[e]) >>> j;
        b.digits[0] = b.digits[c] << e & k;
        b.isNeg = i.isNeg;
        return b
    }
    var R = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];
    function o(f, i) {
        var g = Math.floor(i / d)
          , b = new a;
        m(f.digits, g, b.digits, 0, f.digits.length - g);
        for (var e = i % d, j = d - e, c = 0, h = c + 1; c < b.digits.length - 1; ++c,
        ++h)
            b.digits[c] = b.digits[c] >>> e | (b.digits[h] & R[e]) << j;
        b.digits[b.digits.length - 1] >>>= e;
        b.isNeg = f.isNeg;
        return b
    }
    function z(d, c) {
        var b = new a;
        m(d.digits, 0, b.digits, c, b.digits.length - c);
        return b
    }
    function A(d, c) {
        var b = new a;
        m(d.digits, c, b.digits, 0, b.digits.length - c);
        return b
    }
    function B(d, c) {
        var b = new a;
        m(d.digits, 0, b.digits, 0, c);
        return b
    }
    function n(b, c) {
        if (b.isNeg != c.isNeg)
            return 1 - 2 * Number(b.isNeg);
        for (var a = b.digits.length - 1; a >= 0; --a)
            if (b.digits[a] != c.digits[a])
                return b.isNeg ? 1 - 2 * Number(b.digits[a] > c.digits[a]) : 1 - 2 * Number(b.digits[a] < c.digits[a]);
        return 0
    }
    function h(p, i) {
        var A = G(p), u = G(i), w = i.isNeg, h, f;
        if (A < u) {
            if (p.isNeg) {
                h = y(g);
                h.isNeg = !i.isNeg;
                p.isNeg = false;
                i.isNeg = false;
                f = e(i, p);
                p.isNeg = true;
                i.isNeg = w
            } else {
                h = new a;
                f = y(p)
            }
            return [h, f]
        }
        h = new a;
        f = p;
        var j = Math.ceil(u / d) - 1
          , q = 0;
        while (i.digits[j] < Q) {
            i = F(i, 1);
            ++q;
            ++u;
            j = Math.ceil(u / d) - 1
        }
        f = F(f, q);
        A += q;
        var B = Math.ceil(A / d) - 1
          , r = z(i, B - j);
        while (n(f, r) != -1) {
            ++h.digits[B - j];
            f = e(f, r)
        }
        for (var m = B; m > j; --m) {
            var s = m >= f.digits.length ? 0 : f.digits[m]
              , x = m - 1 >= f.digits.length ? 0 : f.digits[m - 1]
              , C = m - 2 >= f.digits.length ? 0 : f.digits[m - 2]
              , v = j >= i.digits.length ? 0 : i.digits[j]
              , D = j - 1 >= i.digits.length ? 0 : i.digits[j - 1];
            if (s == v)
                h.digits[m - j - 1] = k;
            else
                h.digits[m - j - 1] = Math.floor((s * b + x) / v);
            var E = h.digits[m - j - 1] * (v * b + D)
              , H = s * N + (x * b + C);
            while (E > H) {
                --h.digits[m - j - 1];
                E = h.digits[m - j - 1] * (v * b | D);
                H = s * b * b + (x * b + C)
            }
            r = z(i, m - j - 1);
            f = e(f, t(r, h.digits[m - j - 1]));
            if (f.isNeg) {
                f = l(f, r);
                --h.digits[m - j - 1]
            }
        }
        f = o(f, q);
        h.isNeg = p.isNeg != w;
        if (p.isNeg) {
            if (w)
                h = l(h, g);
            else
                h = e(h, g);
            i = o(i, q);
            f = e(i, f)
        }
        if (f.digits[0] == 0 && c(f) == 0)
            f.isNeg = false;
        return [h, f]
    }
    function Y(a, b) {
        return h(a, b)[0]
    }
    function W(d) {
        this.modulus = y(d);
        this.k = c(this.modulus) + 1;
        var b = new a;
        b.digits[2 * this.k] = 1;
        this.mu = Y(b, this.modulus);
        this.bkplus1 = new a;
        this.bkplus1.digits[this.k + 1] = 1;
        this.modulo = K;
        this.multiplyMod = J;
        this.powMod = L
    }
    function K(c) {
        var g = A(c, this.k - 1)
          , h = f(g, this.mu)
          , i = A(h, this.k + 1)
          , j = B(c, this.k + 1)
          , d = f(i, this.modulus)
          , k = B(d, this.k + 1)
          , a = e(j, k);
        if (a.isNeg)
            a = l(a, this.bkplus1);
        var b = n(a, this.modulus) >= 0;
        while (b) {
            a = e(a, this.modulus);
            b = n(a, this.modulus) >= 0
        }
        return a
    }
    function J(b, c) {
        var a = f(b, c);
        return this.modulo(a)
    }
    function L(f, g) {
        var d = new a;
        d.digits[0] = 1;
        var e = f
          , b = g;
        while (true) {
            if ((b.digits[0] & 1) != 0)
                d = this.multiplyMod(d, e);
            b = o(b, 1);
            if (b.digits[0] == 0 && c(b) == 0)
                break;
            e = this.multiplyMod(e, e)
        }
        return d
    }
    function V(b, a, d) {
        this.e = q(b);
        this.d = q(a);
        this.m = q(d);
        this.digitSize = 2 * c(this.m) + 2;
        this.chunkSize = this.digitSize - 11;
        this.radix = 16;
        this.barrett = new W(this.m)
    }
    function M(b, n) {
        if (b.chunkSize > b.digitSize - 11)
            return "Error";
        var l = []
          , q = n.length
          , c = 0;
        while (c < q) {
            l[c] = n.charCodeAt(c);
            c++
        }
        var k = l.length, j = "", h, i, g;
        for (c = 0; c < k; c += b.chunkSize) {
            g = new a;
            h = 0;
            for (var f = c + b.chunkSize > k ? k % b.chunkSize : b.chunkSize, e = [], d = 0; d < f; d++)
                e[d] = l[c + f - 1 - d];
            e[f] = 0;
            var o = Math.max(8, b.digitSize - 3 - f);
            for (d = 0; d < o; d++)
                e[f + 1 + d] = Math.floor(Math.random() * 254) + 1;
            e[b.digitSize - 2] = 2;
            e[b.digitSize - 1] = 0;
            for (i = 0; i < b.digitSize; ++h) {
                g.digits[h] = e[i++];
                g.digits[h] += e[i++] << 8
            }
            var m = b.barrett.powMod(g, b.e)
              , p = b.radix == 16 ? ab(m) : S(m, b.radix);
            j += p + " "
        }
        return j.substring(0, j.length - 1)
    }
    var cb = function() {
        this.GetRSAKey = function(b, a, c) {
            E(131);
            return new V(b,a,c)
        }
        ;
        this.Encrypt = function(a, b) {
            return M(a, b)
        }
    };
    r.LKRSA = new cb
}
)(window);
        function get_pwd_u(user, pwd){
            var RSAExponent = "010001";
            var RSAModulus = "C7A33AF734DB563D8B34B62E55A463B90DC9BC0A81DD14EEC2E50368F58167805A3F16F2704874EF31A4FA877961E5A067CA6A8728AD069AE05CC1F635338BFC8B097DED72150C1C60408173173388BAB6FC5C531411C6C9FE8338E7AD1FCA449F35D9474BAECCF9D7105AA835EE3EE5E7427F76EB70CE653234B64E912ED2B7",
        
            i = LKRSA.GetRSAKey(RSAExponent, "", RSAModulus)
            l = LKEncoder.ToBase64(user)
            k = LKRSA.Encrypt(i, LKEncoder.ToBase64(pwd))
            return [l, k]
        } 
        """
        u_p = execjs.compile(js_pwd).call("get_pwd_u", "222", "3333")
        return u_p

    def get_captcha(self):
        js_captcha = """
        function url(){
            return 'http://login.lkgame.com/Sso/GetValidCode?'+ Math.random();
            }
        """
        url = execjs.compile(js_captcha).call("url")
        response = self.sess.get(url)
        with open("captcha.jpg", "wb") as f:
            f.write(response.content)

    def login_(self):
        user_pwd = self.get_pwd()
        self.get_captcha()
        data = {
            "lku": user_pwd[0],
            "lkp": user_pwd[1],
            "url": "http://web.lkgame.com/Sso/AjaxLogin?callback=parent.SsoIndex.AjaxSsoLoginCB",
            "vcode": input("请输入验证码："),
            "encoding": "utf-8",
        }
        pprint(data)
        response = self.sess.post("http://login.lkgame.com/Sso/Login", data=data)
        print(response.content.decode())


if __name__ == '__main__':

    login = Login()
    login.login_()
