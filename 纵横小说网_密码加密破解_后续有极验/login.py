"""
Base_Url:https://passport.zongheng.com/
Author:jing
Modify:2020/10/23
"""

import execjs
import requests


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()

    def get_pwd(self):

        js_pwd = r"""
    function s(i, t, e, s) {
        this.e = l(i),
        this.d = l(t),
        this.m = l(e),
        this.chunkSize = "number" != typeof s ? 2 * m(this.m) : s / 8,
        this.radix = 16,
        this.barrett = new o(this.m)
    }
    function n(t, e, s, n) {
        var o, r, a, c, g, u, l, h = new Array, f = e.length, v = "", y = "string" == typeof s ? s == z.NoPadding ? 1 : s == z.PKCS1Padding ? 2 : 0 : 0, b = "string" == typeof n && n == z.RawEncoding ? 1 : 0;
        for (1 == y ? f > t.chunkSize && (f = t.chunkSize) : 2 == y && f > t.chunkSize - 11 && (f = t.chunkSize - 11),
        o = 0,
        r = 2 == y ? f - 1 : t.chunkSize - 1; o < f; )
            y ? h[r] = e.charCodeAt(o) : h[o] = e.charCodeAt(o),
            o++,
            r--;
        for (1 == y && (o = 0),
        r = t.chunkSize - f % t.chunkSize; 0 < r; ) {
            if (2 == y) {
                for (c = Math.floor(256 * Math.random()); !c; )
                    c = Math.floor(256 * Math.random());
                h[o] = c
            } else
                h[o] = 0;
            o++,
            r--
        }
        for (2 == y && (h[f] = 0,
        h[t.chunkSize - 2] = 2,
        h[t.chunkSize - 1] = 0),
        g = h.length,
        o = 0; o < g; o += t.chunkSize) {
            for (u = new d,
            r = 0,
            a = o; a < o + t.chunkSize; ++r)
                u.digits[r] = h[a++],
                u.digits[r] += h[a++] << 8;
            l = t.barrett.powMod(u, t.e),
            v += 1 == b ? function(i) {
                for (var t = "", e = m(i); -1 < e; --e)
                    t += function(i) {
                        var t = String.fromCharCode(255 & i);
                        return i >>>= 8,
                        String.fromCharCode(255 & i) + t
                    }(i.digits[e]);
                return t
            }(l) : 16 == t.radix ? function(t) {
                for (var e = "", s = (m(t),
                m(t)); -1 < s; --s)
                    e += function(t) {
                        var e = "";
                        for (i = 0; i < 4; ++i)
                            e += O[15 & t],
                            t >>>= 4;
                        return p(e)
                    }(t.digits[s]);
                return e
            }(l) : function(i, t) {
                var e = new d;
                e.digits[0] = t;
                for (var s = X(i, e), n = F[s[1].digits[0]]; 1 == N(s[0], _); )
                    s = X(s[0], e),
                    digit = s[1].digits[0],
                    n += F[s[1].digits[0]];
                return (i.isNeg ? "-" : "") + p(n)
            }(l, t.radix)
        }
        return v
    }
    function o(i) {
        this.modulus = g(i),
        this.k = m(this.modulus) + 1;
        var t = new d;
        t.digits[2 * this.k] = 1,
        this.mu = X(t, this.modulus)[0],
        this.bkplus1 = new d,
        this.bkplus1.digits[this.k + 1] = 1,
        this.modulo = r,
        this.multiplyMod = a,
        this.powMod = c
    }
    function r(i) {
        var t = T(i, this.k - 1)
          , e = T(y(t, this.mu), this.k + 1)
          , s = f(A(i, this.k + 1), A(y(e, this.modulus), this.k + 1));
        s.isNeg && (s = h(s, this.bkplus1));
        for (var n = 0 <= N(s, this.modulus); n; )
            n = 0 <= N(s = f(s, this.modulus), this.modulus);
        return s
    }
    function a(i, t) {
        var e = y(i, t);
        return this.modulo(e)
    }
    function c(i, t) {
        var e = new d;
        e.digits[0] = 1;
        for (var s = i, n = t; 0 != (1 & n.digits[0]) && (e = this.multiplyMod(e, s)),
        0 != (n = S(n, 1)).digits[0] || 0 != m(n); )
            s = this.multiplyMod(s, s);
        return e
    }
    function d(i) {
        this.digits = "boolean" == typeof i && 1 == i ? null : C.slice(0),
        this.isNeg = !1
    }
    function g(i) {
        var t = new d(!0);
        return t.digits = i.digits.slice(0),
        t.isNeg = i.isNeg,
        t
    }
    function p(i) {
        for (var t = "", e = i.length - 1; -1 < e; --e)
            t += i.charAt(e);
        return t
    }
    function u(i) {
        return 48 <= i && i <= 57 ? i - 48 : 65 <= i && i <= 90 ? 10 + i - 65 : 97 <= i && i <= 122 ? 10 + i - 97 : 0
    }
    function l(i) {
        for (var t = new d, e = i.length, s = 0; 0 < e; e -= 4,
        ++s)
            t.digits[s] = function(i) {
                for (var t = 0, e = Math.min(i.length, 4), s = 0; s < e; ++s)
                    t <<= 4,
                    t |= u(i.charCodeAt(s));
                return t
            }(i.substr(Math.max(e - 4, 0), Math.min(e, 4)));
        return t
    }
    function h(i, t) {
        var e;
        if (i.isNeg != t.isNeg)
            t.isNeg = !t.isNeg,
            e = f(i, t),
            t.isNeg = !t.isNeg;
        else {
            e = new d;
            for (var s, n = 0, o = 0; o < i.digits.length; ++o)
                s = i.digits[o] + t.digits[o] + n,
                e.digits[o] = 65535 & s,
                n = Number(P <= s);
            e.isNeg = i.isNeg
        }
        return e
    }
    function f(i, t) {
        if (i.isNeg != t.isNeg)
            t.isNeg = !t.isNeg,
            s = h(i, t),
            t.isNeg = !t.isNeg;
        else {
            for (var e, s = new d, n = 0, o = 0; o < i.digits.length; ++o)
                e = i.digits[o] - t.digits[o] + n,
                s.digits[o] = 65535 & e,
                s.digits[o] < 0 && (s.digits[o] += P),
                n = 0 - Number(e < 0);
            if (-1 == n) {
                for (o = n = 0; o < i.digits.length; ++o)
                    e = 0 - s.digits[o] + n,
                    s.digits[o] = 65535 & e,
                    s.digits[o] < 0 && (s.digits[o] += P),
                    n = 0 - Number(e < 0);
                s.isNeg = !i.isNeg
            } else
                s.isNeg = i.isNeg
        }
        return s
    }
    function m(i) {
        for (var t = i.digits.length - 1; 0 < t && 0 == i.digits[t]; )
            --t;
        return t
    }
    function v(i) {
        for (var t = m(i), e = i.digits[t], s = (t + 1) * M, n = s; s - M < n && 0 == (32768 & e); --n)
            e <<= 1;
        return n
    }
    function y(i, t) {
        for (var e, s, n, o = new d, r = m(i), a = m(t), c = 0; c <= a; ++c) {
            for (n = c,
            j = e = 0; j <= r; ++j,
            ++n)
                s = o.digits[n] + i.digits[j] * t.digits[c] + e,
                o.digits[n] = s & B,
                e = s >>> E;
            o.digits[c + r + 1] = e
        }
        return o.isNeg = i.isNeg != t.isNeg,
        o
    }
    function b(i, t) {
        var e, s, n;
        result = new d,
        e = m(i);
        for (var o = s = 0; o <= e; ++o)
            n = result.digits[o] + i.digits[o] * t + s,
            result.digits[o] = n & B,
            s = n >>> E;
        return result.digits[1 + e] = s,
        result
    }
    function k(i, t, e, s, n) {
        for (var o = Math.min(t + n, i.length), r = t, a = s; r < o; ++r,
        ++a)
            e[a] = i[r]
    }
    function w(i, t) {
        var e = Math.floor(t / M)
          , s = new d;
        k(i.digits, 0, s.digits, e, s.digits.length - e);
        for (var n = t % M, o = M - n, r = s.digits.length - 1, a = r - 1; 0 < r; --r,
        --a)
            s.digits[r] = s.digits[r] << n & B | (s.digits[a] & Q[n]) >>> o;
        return s.digits[0] = s.digits[r] << n & B,
        s.isNeg = i.isNeg,
        s
    }
    function S(i, t) {
        var e = Math.floor(t / M)
          , s = new d;
        k(i.digits, e, s.digits, 0, i.digits.length - e);
        for (var n = t % M, o = M - n, r = 0, a = r + 1; r < s.digits.length - 1; ++r,
        ++a)
            s.digits[r] = s.digits[r] >>> n | (s.digits[a] & U[n]) << o;
        return s.digits[s.digits.length - 1] >>>= n,
        s.isNeg = i.isNeg,
        s
    }
    function $(i, t) {
        var e = new d;
        return k(i.digits, 0, e.digits, t, e.digits.length - t),
        e
    }
    function T(i, t) {
        var e = new d;
        return k(i.digits, t, e.digits, 0, e.digits.length - t),
        e
    }
    function A(i, t) {
        var e = new d;
        return k(i.digits, 0, e.digits, 0, t),
        e
    }
    function N(i, t) {
        if (i.isNeg != t.isNeg)
            return 1 - 2 * Number(i.isNeg);
        for (var e = i.digits.length - 1; 0 <= e; --e)
            if (i.digits[e] != t.digits[e])
                return i.isNeg ? 1 - 2 * Number(i.digits[e] > t.digits[e]) : 1 - 2 * Number(i.digits[e] < t.digits[e]);
        return 0
    }
    function X(i, t) {
        var e, s, n = v(i), o = v(t), r = t.isNeg;
        if (n < o)
            return i.isNeg ? ((e = g(x)).isNeg = !t.isNeg,
            i.isNeg = !1,
            t.isNeg = !1,
            s = f(t, i),
            i.isNeg = !0,
            t.isNeg = r) : (e = new d,
            s = g(i)),
            new Array(e,s);
        e = new d,
        s = i;
        for (var a = Math.ceil(o / M) - 1, c = 0; t.digits[a] < D; )
            t = w(t, 1),
            ++c,
            ++o,
            a = Math.ceil(o / M) - 1;
        s = w(s, c),
        n += c;
        for (var p = Math.ceil(n / M) - 1, u = $(t, p - a); -1 != N(s, u); )
            ++e.digits[p - a],
            s = f(s, u);
        for (var l = p; a < l; --l) {
            var y = l >= s.digits.length ? 0 : s.digits[l]
              , k = l - 1 >= s.digits.length ? 0 : s.digits[l - 1]
              , T = l - 2 >= s.digits.length ? 0 : s.digits[l - 2]
              , A = a >= t.digits.length ? 0 : t.digits[a]
              , X = a - 1 >= t.digits.length ? 0 : t.digits[a - 1];
            e.digits[l - a - 1] = y == A ? B : Math.floor((y * P + k) / A);
            for (var C = e.digits[l - a - 1] * (A * P + X), _ = y * K + (k * P + T); _ < C; )
                --e.digits[l - a - 1],
                C = e.digits[l - a - 1] * (A * P | X),
                _ = y * P * P + (k * P + T);
            (s = f(s, b(u = $(t, l - a - 1), e.digits[l - a - 1]))).isNeg && (s = h(s, u),
            --e.digits[l - a - 1])
        }
        return s = S(s, c),
        e.isNeg = i.isNeg != r,
        i.isNeg && (e = (r ? h : f)(e, x),
        s = f(t = S(t, c), s)),
        0 == s.digits[0] && 0 == m(s) && (s.isNeg = !1),
        new Array(e,s)
    }
    var C, _, x, z = {
        NoPadding: "NoPadding",
        PKCS1Padding: "PKCS1Padding",
        RawEncoding: "RawEncoding",
        NumericEncoding: "NumericEncoding"
    }, E = 16, M = E, P = 65536, D = P >>> 1, K = P * P, B = P - 1;
    !function(i) {
        C = new Array(130);
        for (var t = 0; t < C.length; t++)
            C[t] = 0;
        _ = new d,
        (x = new d).digits[0] = 1
    }(),
    function(i) {
        var t = new d;
        t.isNeg = i < 0,
        i = Math.abs(i);
        for (var e = 0; 0 < i; )
            t.digits[e++] = i & B,
            i >>= E
    }(1e15);
    var F = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
      , O = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f")
      , Q = new Array(0,32768,49152,57344,61440,63488,64512,65024,65280,65408,65472,65504,65520,65528,65532,65534,65535)
      , U = new Array(0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535);


        
function getpwd(pwd){
    return n(new s("10001","","a69ae1dd84777e7d40626a29a76f74c176806bb71ce120b259848a730664340bfa550d6fb807b4fe7a2e2a89478ca2f3ea56793440c70b7f3c2017add92e8661924adbda06bff326828ebdc8bef6d094118d64da2eec815812fb70f16aafc73229aa1734727d0a4df65f1c1a2a61946d00a37376822cb30b87127e15f82d68d1"), encodeURIComponent(pwd))
}
        """

        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    def login_(self):
        pwd = self.get_pwd()
        print(pwd)


if __name__ == '__main__':
    user = ""
    pwd = "222222"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()
