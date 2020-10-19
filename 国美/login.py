import requests
import execjs
from pprint import pprint
import time


class Login():
    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.login_url = "https://login.gome.com.cn/gmsst5Login.no"
        self.sess = requests.session()
        self.sess.headers = {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        }


    def load_data(self, path):
        data = {}
        with open(path, "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:
                split_ = line.split(":")
                data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
        return data

    def get_pwd(self):

        js_pwd = """
        navigator = {};window=this;
        var JSEncryptExports = {};
(function(t) {
    var e;
    var i = 0xdeadbeefcafe;
    var r = (i & 16777215) == 15715070;
    function s(t, e, i) {
        if (t != null)
            if ("number" == typeof t)
                this.fromNumber(t, e, i);
            else if (e == null && "string" != typeof t)
                this.fromString(t, 256);
            else
                this.fromString(t, e)
    }
    function n() {
        return new s(null)
    }
    function o(t, e, i, r, s, n) {
        while (--n >= 0) {
            var o = e * this[t++] + i[r] + s;
            s = Math.floor(o / 67108864);
            i[r++] = o & 67108863
        }
        return s
    }
    function h(t, e, i, r, s, n) {
        var o = e & 32767
          , h = e >> 15;
        while (--n >= 0) {
            var a = this[t] & 32767;
            var u = this[t++] >> 15;
            var f = h * a + u * o;
            a = o * a + ((f & 32767) << 15) + i[r] + (s & 1073741823);
            s = (a >>> 30) + (f >>> 15) + h * u + (s >>> 30);
            i[r++] = a & 1073741823
        }
        return s
    }
    function a(t, e, i, r, s, n) {
        var o = e & 16383
          , h = e >> 14;
        while (--n >= 0) {
            var a = this[t] & 16383;
            var u = this[t++] >> 14;
            var f = h * a + u * o;
            a = o * a + ((f & 16383) << 14) + i[r] + s;
            s = (a >> 28) + (f >> 14) + h * u;
            i[r++] = a & 268435455
        }
        return s
    }
    if (r && navigator.appName == "Microsoft Internet Explorer") {
        s.prototype.am = h;
        e = 30
    } else if (r && navigator.appName != "Netscape") {
        s.prototype.am = o;
        e = 26
    } else {
        s.prototype.am = a;
        e = 28
    }
    s.prototype.DB = e;
    s.prototype.DM = (1 << e) - 1;
    s.prototype.DV = 1 << e;
    var u = 52;
    s.prototype.FV = Math.pow(2, u);
    s.prototype.F1 = u - e;
    s.prototype.F2 = 2 * e - u;
    var f = "0123456789abcdefghijklmnopqrstuvwxyz";
    var l = new Array;
    var c, p;
    c = "0".charCodeAt(0);
    for (p = 0; p <= 9; ++p)
        l[c++] = p;
    c = "a".charCodeAt(0);
    for (p = 10; p < 36; ++p)
        l[c++] = p;
    c = "A".charCodeAt(0);
    for (p = 10; p < 36; ++p)
        l[c++] = p;
    function d(t) {
        return f.charAt(t)
    }
    function g(t, e) {
        var i = l[t.charCodeAt(e)];
        return i == null ? -1 : i
    }
    function m(t) {
        for (var e = this.t - 1; e >= 0; --e)
            t[e] = this[e];
        t.t = this.t;
        t.s = this.s
    }
    function y(t) {
        this.t = 1;
        this.s = t < 0 ? -1 : 0;
        if (t > 0)
            this[0] = t;
        else if (t < -1)
            this[0] = t + this.DV;
        else
            this.t = 0
    }
    function b(t) {
        var e = n();
        e.fromInt(t);
        return e
    }
    function T(t, e) {
        var i;
        if (e == 16)
            i = 4;
        else if (e == 8)
            i = 3;
        else if (e == 256)
            i = 8;
        else if (e == 2)
            i = 1;
        else if (e == 32)
            i = 5;
        else if (e == 4)
            i = 2;
        else {
            this.fromRadix(t, e);
            return
        }
        this.t = 0;
        this.s = 0;
        var r = t.length
          , n = false
          , o = 0;
        while (--r >= 0) {
            var h = i == 8 ? t[r] & 255 : g(t, r);
            if (h < 0) {
                if (t.charAt(r) == "-")
                    n = true;
                continue
            }
            n = false;
            if (o == 0)
                this[this.t++] = h;
            else if (o + i > this.DB) {
                this[this.t - 1] |= (h & (1 << this.DB - o) - 1) << o;
                this[this.t++] = h >> this.DB - o
            } else
                this[this.t - 1] |= h << o;
            o += i;
            if (o >= this.DB)
                o -= this.DB
        }
        if (i == 8 && (t[0] & 128) != 0) {
            this.s = -1;
            if (o > 0)
                this[this.t - 1] |= (1 << this.DB - o) - 1 << o
        }
        this.clamp();
        if (n)
            s.ZERO.subTo(this, this)
    }
    function S() {
        var t = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == t)
            --this.t
    }
    function w(t) {
        if (this.s < 0)
            return "-" + this.negate().toString(t);
        var e;
        if (t == 16)
            e = 4;
        else if (t == 8)
            e = 3;
        else if (t == 2)
            e = 1;
        else if (t == 32)
            e = 5;
        else if (t == 4)
            e = 2;
        else
            return this.toRadix(t);
        var i = (1 << e) - 1, r, s = false, n = "", o = this.t;
        var h = this.DB - o * this.DB % e;
        if (o-- > 0) {
            if (h < this.DB && (r = this[o] >> h) > 0) {
                s = true;
                n = d(r)
            }
            while (o >= 0) {
                if (h < e) {
                    r = (this[o] & (1 << h) - 1) << e - h;
                    r |= this[--o] >> (h += this.DB - e)
                } else {
                    r = this[o] >> (h -= e) & i;
                    if (h <= 0) {
                        h += this.DB;
                        --o
                    }
                }
                if (r > 0)
                    s = true;
                if (s)
                    n += d(r)
            }
        }
        return s ? n : "0"
    }
    function R() {
        var t = n();
        s.ZERO.subTo(this, t);
        return t
    }
    function E() {
        return this.s < 0 ? this.negate() : this
    }
    function D(t) {
        var e = this.s - t.s;
        if (e != 0)
            return e;
        var i = this.t;
        e = i - t.t;
        if (e != 0)
            return this.s < 0 ? -e : e;
        while (--i >= 0)
            if ((e = this[i] - t[i]) != 0)
                return e;
        return 0
    }
    function x(t) {
        var e = 1, i;
        if ((i = t >>> 16) != 0) {
            t = i;
            e += 16
        }
        if ((i = t >> 8) != 0) {
            t = i;
            e += 8
        }
        if ((i = t >> 4) != 0) {
            t = i;
            e += 4
        }
        if ((i = t >> 2) != 0) {
            t = i;
            e += 2
        }
        if ((i = t >> 1) != 0) {
            t = i;
            e += 1
        }
        return e
    }
    function B() {
        if (this.t <= 0)
            return 0;
        return this.DB * (this.t - 1) + x(this[this.t - 1] ^ this.s & this.DM)
    }
    function K(t, e) {
        var i;
        for (i = this.t - 1; i >= 0; --i)
            e[i + t] = this[i];
        for (i = t - 1; i >= 0; --i)
            e[i] = 0;
        e.t = this.t + t;
        e.s = this.s
    }
    function A(t, e) {
        for (var i = t; i < this.t; ++i)
            e[i - t] = this[i];
        e.t = Math.max(this.t - t, 0);
        e.s = this.s
    }
    function U(t, e) {
        var i = t % this.DB;
        var r = this.DB - i;
        var s = (1 << r) - 1;
        var n = Math.floor(t / this.DB), o = this.s << i & this.DM, h;
        for (h = this.t - 1; h >= 0; --h) {
            e[h + n + 1] = this[h] >> r | o;
            o = (this[h] & s) << i
        }
        for (h = n - 1; h >= 0; --h)
            e[h] = 0;
        e[n] = o;
        e.t = this.t + n + 1;
        e.s = this.s;
        e.clamp()
    }
    function O(t, e) {
        e.s = this.s;
        var i = Math.floor(t / this.DB);
        if (i >= this.t) {
            e.t = 0;
            return
        }
        var r = t % this.DB;
        var s = this.DB - r;
        var n = (1 << r) - 1;
        e[0] = this[i] >> r;
        for (var o = i + 1; o < this.t; ++o) {
            e[o - i - 1] |= (this[o] & n) << s;
            e[o - i] = this[o] >> r
        }
        if (r > 0)
            e[this.t - i - 1] |= (this.s & n) << s;
        e.t = this.t - i;
        e.clamp()
    }
    function V(t, e) {
        var i = 0
          , r = 0
          , s = Math.min(t.t, this.t);
        while (i < s) {
            r += this[i] - t[i];
            e[i++] = r & this.DM;
            r >>= this.DB
        }
        if (t.t < this.t) {
            r -= t.s;
            while (i < this.t) {
                r += this[i];
                e[i++] = r & this.DM;
                r >>= this.DB
            }
            r += this.s
        } else {
            r += this.s;
            while (i < t.t) {
                r -= t[i];
                e[i++] = r & this.DM;
                r >>= this.DB
            }
            r -= t.s
        }
        e.s = r < 0 ? -1 : 0;
        if (r < -1)
            e[i++] = this.DV + r;
        else if (r > 0)
            e[i++] = r;
        e.t = i;
        e.clamp()
    }
    function J(t, e) {
        var i = this.abs()
          , r = t.abs();
        var n = i.t;
        e.t = n + r.t;
        while (--n >= 0)
            e[n] = 0;
        for (n = 0; n < r.t; ++n)
            e[n + i.t] = i.am(0, r[n], e, n, 0, i.t);
        e.s = 0;
        e.clamp();
        if (this.s != t.s)
            s.ZERO.subTo(e, e)
    }
    function N(t) {
        var e = this.abs();
        var i = t.t = 2 * e.t;
        while (--i >= 0)
            t[i] = 0;
        for (i = 0; i < e.t - 1; ++i) {
            var r = e.am(i, e[i], t, 2 * i, 0, 1);
            if ((t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, r, e.t - i - 1)) >= e.DV) {
                t[i + e.t] -= e.DV;
                t[i + e.t + 1] = 1
            }
        }
        if (t.t > 0)
            t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1);
        t.s = 0;
        t.clamp()
    }
    function I(t, e, i) {
        var r = t.abs();
        if (r.t <= 0)
            return;
        var o = this.abs();
        if (o.t < r.t) {
            if (e != null)
                e.fromInt(0);
            if (i != null)
                this.copyTo(i);
            return
        }
        if (i == null)
            i = n();
        var h = n()
          , a = this.s
          , u = t.s;
        var f = this.DB - x(r[r.t - 1]);
        if (f > 0) {
            r.lShiftTo(f, h);
            o.lShiftTo(f, i)
        } else {
            r.copyTo(h);
            o.copyTo(i)
        }
        var l = h.t;
        var c = h[l - 1];
        if (c == 0)
            return;
        var p = c * (1 << this.F1) + (l > 1 ? h[l - 2] >> this.F2 : 0);
        var d = this.FV / p
          , g = (1 << this.F1) / p
          , v = 1 << this.F2;
        var m = i.t
          , y = m - l
          , b = e == null ? n() : e;
        h.dlShiftTo(y, b);
        if (i.compareTo(b) >= 0) {
            i[i.t++] = 1;
            i.subTo(b, i)
        }
        s.ONE.dlShiftTo(l, b);
        b.subTo(h, h);
        while (h.t < l)
            h[h.t++] = 0;
        while (--y >= 0) {
            var T = i[--m] == c ? this.DM : Math.floor(i[m] * d + (i[m - 1] + v) * g);
            if ((i[m] += h.am(0, T, i, y, 0, l)) < T) {
                h.dlShiftTo(y, b);
                i.subTo(b, i);
                while (i[m] < --T)
                    i.subTo(b, i)
            }
        }
        if (e != null) {
            i.drShiftTo(l, e);
            if (a != u)
                s.ZERO.subTo(e, e)
        }
        i.t = l;
        i.clamp();
        if (f > 0)
            i.rShiftTo(f, i);
        if (a < 0)
            s.ZERO.subTo(i, i)
    }
    function P(t) {
        var e = n();
        this.abs().divRemTo(t, null, e);
        if (this.s < 0 && e.compareTo(s.ZERO) > 0)
            t.subTo(e, e);
        return e
    }
    function M(t) {
        this.m = t
    }
    function L(t) {
        if (t.s < 0 || t.compareTo(this.m) >= 0)
            return t.mod(this.m);
        else
            return t
    }
    function q(t) {
        return t
    }
    function C(t) {
        t.divRemTo(this.m, null, t)
    }
    function H(t, e, i) {
        t.multiplyTo(e, i);
        this.reduce(i)
    }
    function j(t, e) {
        t.squareTo(e);
        this.reduce(e)
    }
    M.prototype.convert = L;
    M.prototype.revert = q;
    M.prototype.reduce = C;
    M.prototype.mulTo = H;
    M.prototype.sqrTo = j;
    function k() {
        if (this.t < 1)
            return 0;
        var t = this[0];
        if ((t & 1) == 0)
            return 0;
        var e = t & 3;
        e = e * (2 - (t & 15) * e) & 15;
        e = e * (2 - (t & 255) * e) & 255;
        e = e * (2 - ((t & 65535) * e & 65535)) & 65535;
        e = e * (2 - t * e % this.DV) % this.DV;
        return e > 0 ? this.DV - e : -e
    }
    function F(t) {
        this.m = t;
        this.mp = t.invDigit();
        this.mpl = this.mp & 32767;
        this.mph = this.mp >> 15;
        this.um = (1 << t.DB - 15) - 1;
        this.mt2 = 2 * t.t
    }
    function _(t) {
        var e = n();
        t.abs().dlShiftTo(this.m.t, e);
        e.divRemTo(this.m, null, e);
        if (t.s < 0 && e.compareTo(s.ZERO) > 0)
            this.m.subTo(e, e);
        return e
    }
    function z(t) {
        var e = n();
        t.copyTo(e);
        this.reduce(e);
        return e
    }
    function Z(t) {
        while (t.t <= this.mt2)
            t[t.t++] = 0;
        for (var e = 0; e < this.m.t; ++e) {
            var i = t[e] & 32767;
            var r = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
            i = e + this.m.t;
            t[i] += this.m.am(0, r, t, e, 0, this.m.t);
            while (t[i] >= t.DV) {
                t[i] -= t.DV;
                t[++i]++
            }
        }
        t.clamp();
        t.drShiftTo(this.m.t, t);
        if (t.compareTo(this.m) >= 0)
            t.subTo(this.m, t)
    }
    function G(t, e) {
        t.squareTo(e);
        this.reduce(e)
    }
    function $(t, e, i) {
        t.multiplyTo(e, i);
        this.reduce(i)
    }
    F.prototype.convert = _;
    F.prototype.revert = z;
    F.prototype.reduce = Z;
    F.prototype.mulTo = $;
    F.prototype.sqrTo = G;
    function Y() {
        return (this.t > 0 ? this[0] & 1 : this.s) == 0
    }
    function W(t, e) {
        if (t > 4294967295 || t < 1)
            return s.ONE;
        var i = n()
          , r = n()
          , o = e.convert(this)
          , h = x(t) - 1;
        o.copyTo(i);
        while (--h >= 0) {
            e.sqrTo(i, r);
            if ((t & 1 << h) > 0)
                e.mulTo(r, o, i);
            else {
                var a = i;
                i = r;
                r = a
            }
        }
        return e.revert(i)
    }
    function Q(t, e) {
        var i;
        if (t < 256 || e.isEven())
            i = new M(e);
        else
            i = new F(e);
        return this.exp(t, i)
    }
    s.prototype.copyTo = m;
    s.prototype.fromInt = y;
    s.prototype.fromString = T;
    s.prototype.clamp = S;
    s.prototype.dlShiftTo = K;
    s.prototype.drShiftTo = A;
    s.prototype.lShiftTo = U;
    s.prototype.rShiftTo = O;
    s.prototype.subTo = V;
    s.prototype.multiplyTo = J;
    s.prototype.squareTo = N;
    s.prototype.divRemTo = I;
    s.prototype.invDigit = k;
    s.prototype.isEven = Y;
    s.prototype.exp = W;
    s.prototype.toString = w;
    s.prototype.negate = R;
    s.prototype.abs = E;
    s.prototype.compareTo = D;
    s.prototype.bitLength = B;
    s.prototype.mod = P;
    s.prototype.modPowInt = Q;
    s.ZERO = b(0);
    s.ONE = b(1);
    function X() {
        var t = n();
        this.copyTo(t);
        return t
    }
    function te() {
        if (this.s < 0) {
            if (this.t == 1)
                return this[0] - this.DV;
            else if (this.t == 0)
                return -1
        } else if (this.t == 1)
            return this[0];
        else if (this.t == 0)
            return 0;
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
    }
    function ee() {
        return this.t == 0 ? this.s : this[0] << 24 >> 24
    }
    function ie() {
        return this.t == 0 ? this.s : this[0] << 16 >> 16
    }
    function re(t) {
        return Math.floor(Math.LN2 * this.DB / Math.log(t))
    }
    function se() {
        if (this.s < 0)
            return -1;
        else if (this.t <= 0 || this.t == 1 && this[0] <= 0)
            return 0;
        else
            return 1
    }
    function ne(t) {
        if (t == null)
            t = 10;
        if (this.signum() == 0 || t < 2 || t > 36)
            return "0";
        var e = this.chunkSize(t);
        var i = Math.pow(t, e);
        var r = b(i)
          , s = n()
          , o = n()
          , h = "";
        this.divRemTo(r, s, o);
        while (s.signum() > 0) {
            h = (i + o.intValue()).toString(t).substr(1) + h;
            s.divRemTo(r, s, o)
        }
        return o.intValue().toString(t) + h
    }
    function oe(t, e) {
        this.fromInt(0);
        if (e == null)
            e = 10;
        var i = this.chunkSize(e);
        var r = Math.pow(e, i)
          , n = false
          , o = 0
          , h = 0;
        for (var a = 0; a < t.length; ++a) {
            var u = g(t, a);
            if (u < 0) {
                if (t.charAt(a) == "-" && this.signum() == 0)
                    n = true;
                continue
            }
            h = e * h + u;
            if (++o >= i) {
                this.dMultiply(r);
                this.dAddOffset(h, 0);
                o = 0;
                h = 0
            }
        }
        if (o > 0) {
            this.dMultiply(Math.pow(e, o));
            this.dAddOffset(h, 0)
        }
        if (n)
            s.ZERO.subTo(this, this)
    }
    function he(t, e, i) {
        if ("number" == typeof e) {
            if (t < 2)
                this.fromInt(1);
            else {
                this.fromNumber(t, i);
                if (!this.testBit(t - 1))
                    this.bitwiseTo(s.ONE.shiftLeft(t - 1), ge, this);
                if (this.isEven())
                    this.dAddOffset(1, 0);
                while (!this.isProbablePrime(e)) {
                    this.dAddOffset(2, 0);
                    if (this.bitLength() > t)
                        this.subTo(s.ONE.shiftLeft(t - 1), this)
                }
            }
        } else {
            var r = new Array
              , n = t & 7;
            r.length = (t >> 3) + 1;
            e.nextBytes(r);
            if (n > 0)
                r[0] &= (1 << n) - 1;
            else
                r[0] = 0;
            this.fromString(r, 256)
        }
    }
    function ae() {
        var t = this.t
          , e = new Array;
        e[0] = this.s;
        var i = this.DB - t * this.DB % 8, r, s = 0;
        if (t-- > 0) {
            if (i < this.DB && (r = this[t] >> i) != (this.s & this.DM) >> i)
                e[s++] = r | this.s << this.DB - i;
            while (t >= 0) {
                if (i < 8) {
                    r = (this[t] & (1 << i) - 1) << 8 - i;
                    r |= this[--t] >> (i += this.DB - 8)
                } else {
                    r = this[t] >> (i -= 8) & 255;
                    if (i <= 0) {
                        i += this.DB;
                        --t
                    }
                }
                if ((r & 128) != 0)
                    r |= -256;
                if (s == 0 && (this.s & 128) != (r & 128))
                    ++s;
                if (s > 0 || r != this.s)
                    e[s++] = r
            }
        }
        return e
    }
    function ue(t) {
        return this.compareTo(t) == 0
    }
    function fe(t) {
        return this.compareTo(t) < 0 ? this : t
    }
    function le(t) {
        return this.compareTo(t) > 0 ? this : t
    }
    function ce(t, e, i) {
        var r, s, n = Math.min(t.t, this.t);
        for (r = 0; r < n; ++r)
            i[r] = e(this[r], t[r]);
        if (t.t < this.t) {
            s = t.s & this.DM;
            for (r = n; r < this.t; ++r)
                i[r] = e(this[r], s);
            i.t = this.t
        } else {
            s = this.s & this.DM;
            for (r = n; r < t.t; ++r)
                i[r] = e(s, t[r]);
            i.t = t.t
        }
        i.s = e(this.s, t.s);
        i.clamp()
    }
    function pe(t, e) {
        return t & e
    }
    function de(t) {
        var e = n();
        this.bitwiseTo(t, pe, e);
        return e
    }
    function ge(t, e) {
        return t | e
    }
    function ve(t) {
        var e = n();
        this.bitwiseTo(t, ge, e);
        return e
    }
    function me(t, e) {
        return t ^ e
    }
    function ye(t) {
        var e = n();
        this.bitwiseTo(t, me, e);
        return e
    }
    function be(t, e) {
        return t & ~e
    }
    function Te(t) {
        var e = n();
        this.bitwiseTo(t, be, e);
        return e
    }
    function Se() {
        var t = n();
        for (var e = 0; e < this.t; ++e)
            t[e] = this.DM & ~this[e];
        t.t = this.t;
        t.s = ~this.s;
        return t
    }
    function we(t) {
        var e = n();
        if (t < 0)
            this.rShiftTo(-t, e);
        else
            this.lShiftTo(t, e);
        return e
    }
    function Re(t) {
        var e = n();
        if (t < 0)
            this.lShiftTo(-t, e);
        else
            this.rShiftTo(t, e);
        return e
    }
    function Ee(t) {
        if (t == 0)
            return -1;
        var e = 0;
        if ((t & 65535) == 0) {
            t >>= 16;
            e += 16
        }
        if ((t & 255) == 0) {
            t >>= 8;
            e += 8
        }
        if ((t & 15) == 0) {
            t >>= 4;
            e += 4
        }
        if ((t & 3) == 0) {
            t >>= 2;
            e += 2
        }
        if ((t & 1) == 0)
            ++e;
        return e
    }
    function De() {
        for (var t = 0; t < this.t; ++t)
            if (this[t] != 0)
                return t * this.DB + Ee(this[t]);
        if (this.s < 0)
            return this.t * this.DB;
        return -1
    }
    function xe(t) {
        var e = 0;
        while (t != 0) {
            t &= t - 1;
            ++e
        }
        return e
    }
    function Be() {
        var t = 0
          , e = this.s & this.DM;
        for (var i = 0; i < this.t; ++i)
            t += xe(this[i] ^ e);
        return t
    }
    function Ke(t) {
        var e = Math.floor(t / this.DB);
        if (e >= this.t)
            return this.s != 0;
        return (this[e] & 1 << t % this.DB) != 0
    }
    function Ae(t, e) {
        var i = s.ONE.shiftLeft(t);
        this.bitwiseTo(i, e, i);
        return i
    }
    function Ue(t) {
        return this.changeBit(t, ge)
    }
    function Oe(t) {
        return this.changeBit(t, be)
    }
    function Ve(t) {
        return this.changeBit(t, me)
    }
    function Je(t, e) {
        var i = 0
          , r = 0
          , s = Math.min(t.t, this.t);
        while (i < s) {
            r += this[i] + t[i];
            e[i++] = r & this.DM;
            r >>= this.DB
        }
        if (t.t < this.t) {
            r += t.s;
            while (i < this.t) {
                r += this[i];
                e[i++] = r & this.DM;
                r >>= this.DB
            }
            r += this.s
        } else {
            r += this.s;
            while (i < t.t) {
                r += t[i];
                e[i++] = r & this.DM;
                r >>= this.DB
            }
            r += t.s
        }
        e.s = r < 0 ? -1 : 0;
        if (r > 0)
            e[i++] = r;
        else if (r < -1)
            e[i++] = this.DV + r;
        e.t = i;
        e.clamp()
    }
    function Ne(t) {
        var e = n();
        this.addTo(t, e);
        return e
    }
    function Ie(t) {
        var e = n();
        this.subTo(t, e);
        return e
    }
    function Pe(t) {
        var e = n();
        this.multiplyTo(t, e);
        return e
    }
    function Me() {
        var t = n();
        this.squareTo(t);
        return t
    }
    function Le(t) {
        var e = n();
        this.divRemTo(t, e, null);
        return e
    }
    function qe(t) {
        var e = n();
        this.divRemTo(t, null, e);
        return e
    }
    function Ce(t) {
        var e = n()
          , i = n();
        this.divRemTo(t, e, i);
        return new Array(e,i)
    }
    function He(t) {
        this[this.t] = this.am(0, t - 1, this, 0, 0, this.t);
        ++this.t;
        this.clamp()
    }
    function je(t, e) {
        if (t == 0)
            return;
        while (this.t <= e)
            this[this.t++] = 0;
        this[e] += t;
        while (this[e] >= this.DV) {
            this[e] -= this.DV;
            if (++e >= this.t)
                this[this.t++] = 0;
            ++this[e]
        }
    }
    function ke() {}
    function Fe(t) {
        return t
    }
    function _e(t, e, i) {
        t.multiplyTo(e, i)
    }
    function ze(t, e) {
        t.squareTo(e)
    }
    ke.prototype.convert = Fe;
    ke.prototype.revert = Fe;
    ke.prototype.mulTo = _e;
    ke.prototype.sqrTo = ze;
    function Ze(t) {
        return this.exp(t, new ke)
    }
    function Ge(t, e, i) {
        var r = Math.min(this.t + t.t, e);
        i.s = 0;
        i.t = r;
        while (r > 0)
            i[--r] = 0;
        var s;
        for (s = i.t - this.t; r < s; ++r)
            i[r + this.t] = this.am(0, t[r], i, r, 0, this.t);
        for (s = Math.min(t.t, e); r < s; ++r)
            this.am(0, t[r], i, r, 0, e - r);
        i.clamp()
    }
    function $e(t, e, i) {
        --e;
        var r = i.t = this.t + t.t - e;
        i.s = 0;
        while (--r >= 0)
            i[r] = 0;
        for (r = Math.max(e - this.t, 0); r < t.t; ++r)
            i[this.t + r - e] = this.am(e - r, t[r], i, 0, 0, this.t + r - e);
        i.clamp();
        i.drShiftTo(1, i)
    }
    function Ye(t) {
        this.r2 = n();
        this.q3 = n();
        s.ONE.dlShiftTo(2 * t.t, this.r2);
        this.mu = this.r2.divide(t);
        this.m = t
    }
    function We(t) {
        if (t.s < 0 || t.t > 2 * this.m.t)
            return t.mod(this.m);
        else if (t.compareTo(this.m) < 0)
            return t;
        else {
            var e = n();
            t.copyTo(e);
            this.reduce(e);
            return e
        }
    }
    function Qe(t) {
        return t
    }
    function Xe(t) {
        t.drShiftTo(this.m.t - 1, this.r2);
        if (t.t > this.m.t + 1) {
            t.t = this.m.t + 1;
            t.clamp()
        }
        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
        this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
        while (t.compareTo(this.r2) < 0)
            t.dAddOffset(1, this.m.t + 1);
        t.subTo(this.r2, t);
        while (t.compareTo(this.m) >= 0)
            t.subTo(this.m, t)
    }
    function ti(t, e) {
        t.squareTo(e);
        this.reduce(e)
    }
    function ei(t, e, i) {
        t.multiplyTo(e, i);
        this.reduce(i)
    }
    Ye.prototype.convert = We;
    Ye.prototype.revert = Qe;
    Ye.prototype.reduce = Xe;
    Ye.prototype.mulTo = ei;
    Ye.prototype.sqrTo = ti;
    function ii(t, e) {
        var i = t.bitLength(), r, s = b(1), o;
        if (i <= 0)
            return s;
        else if (i < 18)
            r = 1;
        else if (i < 48)
            r = 3;
        else if (i < 144)
            r = 4;
        else if (i < 768)
            r = 5;
        else
            r = 6;
        if (i < 8)
            o = new M(e);
        else if (e.isEven())
            o = new Ye(e);
        else
            o = new F(e);
        var h = new Array
          , a = 3
          , u = r - 1
          , f = (1 << r) - 1;
        h[1] = o.convert(this);
        if (r > 1) {
            var l = n();
            o.sqrTo(h[1], l);
            while (a <= f) {
                h[a] = n();
                o.mulTo(l, h[a - 2], h[a]);
                a += 2
            }
        }
        var c = t.t - 1, p, d = true, g = n(), v;
        i = x(t[c]) - 1;
        while (c >= 0) {
            if (i >= u)
                p = t[c] >> i - u & f;
            else {
                p = (t[c] & (1 << i + 1) - 1) << u - i;
                if (c > 0)
                    p |= t[c - 1] >> this.DB + i - u
            }
            a = r;
            while ((p & 1) == 0) {
                p >>= 1;
                --a
            }
            if ((i -= a) < 0) {
                i += this.DB;
                --c
            }
            if (d) {
                h[p].copyTo(s);
                d = false
            } else {
                while (a > 1) {
                    o.sqrTo(s, g);
                    o.sqrTo(g, s);
                    a -= 2
                }
                if (a > 0)
                    o.sqrTo(s, g);
                else {
                    v = s;
                    s = g;
                    g = v
                }
                o.mulTo(g, h[p], s)
            }
            while (c >= 0 && (t[c] & 1 << i) == 0) {
                o.sqrTo(s, g);
                v = s;
                s = g;
                g = v;
                if (--i < 0) {
                    i = this.DB - 1;
                    --c
                }
            }
        }
        return o.revert(s)
    }
    function ri(t) {
        var e = this.s < 0 ? this.negate() : this.clone();
        var i = t.s < 0 ? t.negate() : t.clone();
        if (e.compareTo(i) < 0) {
            var r = e;
            e = i;
            i = r
        }
        var s = e.getLowestSetBit()
          , n = i.getLowestSetBit();
        if (n < 0)
            return e;
        if (s < n)
            n = s;
        if (n > 0) {
            e.rShiftTo(n, e);
            i.rShiftTo(n, i)
        }
        while (e.signum() > 0) {
            if ((s = e.getLowestSetBit()) > 0)
                e.rShiftTo(s, e);
            if ((s = i.getLowestSetBit()) > 0)
                i.rShiftTo(s, i);
            if (e.compareTo(i) >= 0) {
                e.subTo(i, e);
                e.rShiftTo(1, e)
            } else {
                i.subTo(e, i);
                i.rShiftTo(1, i)
            }
        }
        if (n > 0)
            i.lShiftTo(n, i);
        return i
    }
    function si(t) {
        if (t <= 0)
            return 0;
        var e = this.DV % t
          , i = this.s < 0 ? t - 1 : 0;
        if (this.t > 0)
            if (e == 0)
                i = this[0] % t;
            else
                for (var r = this.t - 1; r >= 0; --r)
                    i = (e * i + this[r]) % t;
        return i
    }
    function ni(t) {
        var e = t.isEven();
        if (this.isEven() && e || t.signum() == 0)
            return s.ZERO;
        var i = t.clone()
          , r = this.clone();
        var n = b(1)
          , o = b(0)
          , h = b(0)
          , a = b(1);
        while (i.signum() != 0) {
            while (i.isEven()) {
                i.rShiftTo(1, i);
                if (e) {
                    if (!n.isEven() || !o.isEven()) {
                        n.addTo(this, n);
                        o.subTo(t, o)
                    }
                    n.rShiftTo(1, n)
                } else if (!o.isEven())
                    o.subTo(t, o);
                o.rShiftTo(1, o)
            }
            while (r.isEven()) {
                r.rShiftTo(1, r);
                if (e) {
                    if (!h.isEven() || !a.isEven()) {
                        h.addTo(this, h);
                        a.subTo(t, a)
                    }
                    h.rShiftTo(1, h)
                } else if (!a.isEven())
                    a.subTo(t, a);
                a.rShiftTo(1, a)
            }
            if (i.compareTo(r) >= 0) {
                i.subTo(r, i);
                if (e)
                    n.subTo(h, n);
                o.subTo(a, o)
            } else {
                r.subTo(i, r);
                if (e)
                    h.subTo(n, h);
                a.subTo(o, a)
            }
        }
        if (r.compareTo(s.ONE) != 0)
            return s.ZERO;
        if (a.compareTo(t) >= 0)
            return a.subtract(t);
        if (a.signum() < 0)
            a.addTo(t, a);
        else
            return a;
        if (a.signum() < 0)
            return a.add(t);
        else
            return a
    }
    var oi = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
    var hi = (1 << 26) / oi[oi.length - 1];
    function ai(t) {
        var e, i = this.abs();
        if (i.t == 1 && i[0] <= oi[oi.length - 1]) {
            for (e = 0; e < oi.length; ++e)
                if (i[0] == oi[e])
                    return true;
            return false
        }
        if (i.isEven())
            return false;
        e = 1;
        while (e < oi.length) {
            var r = oi[e]
              , s = e + 1;
            while (s < oi.length && r < hi)
                r *= oi[s++];
            r = i.modInt(r);
            while (e < s)
                if (r % oi[e++] == 0)
                    return false
        }
        return i.millerRabin(t)
    }
    function ui(t) {
        var e = this.subtract(s.ONE);
        var i = e.getLowestSetBit();
        if (i <= 0)
            return false;
        var r = e.shiftRight(i);
        t = t + 1 >> 1;
        if (t > oi.length)
            t = oi.length;
        var o = n();
        for (var h = 0; h < t; ++h) {
            o.fromInt(oi[Math.floor(Math.random() * oi.length)]);
            var a = o.modPow(r, this);
            if (a.compareTo(s.ONE) != 0 && a.compareTo(e) != 0) {
                var u = 1;
                while (u++ < i && a.compareTo(e) != 0) {
                    a = a.modPowInt(2, this);
                    if (a.compareTo(s.ONE) == 0)
                        return false
                }
                if (a.compareTo(e) != 0)
                    return false
            }
        }
        return true
    }
    s.prototype.chunkSize = re;
    s.prototype.toRadix = ne;
    s.prototype.fromRadix = oe;
    s.prototype.fromNumber = he;
    s.prototype.bitwiseTo = ce;
    s.prototype.changeBit = Ae;
    s.prototype.addTo = Je;
    s.prototype.dMultiply = He;
    s.prototype.dAddOffset = je;
    s.prototype.multiplyLowerTo = Ge;
    s.prototype.multiplyUpperTo = $e;
    s.prototype.modInt = si;
    s.prototype.millerRabin = ui;
    s.prototype.clone = X;
    s.prototype.intValue = te;
    s.prototype.byteValue = ee;
    s.prototype.shortValue = ie;
    s.prototype.signum = se;
    s.prototype.toByteArray = ae;
    s.prototype.equals = ue;
    s.prototype.min = fe;
    s.prototype.max = le;
    s.prototype.and = de;
    s.prototype.or = ve;
    s.prototype.xor = ye;
    s.prototype.andNot = Te;
    s.prototype.not = Se;
    s.prototype.shiftLeft = we;
    s.prototype.shiftRight = Re;
    s.prototype.getLowestSetBit = De;
    s.prototype.bitCount = Be;
    s.prototype.testBit = Ke;
    s.prototype.setBit = Ue;
    s.prototype.clearBit = Oe;
    s.prototype.flipBit = Ve;
    s.prototype.add = Ne;
    s.prototype.subtract = Ie;
    s.prototype.multiply = Pe;
    s.prototype.divide = Le;
    s.prototype.remainder = qe;
    s.prototype.divideAndRemainder = Ce;
    s.prototype.modPow = ii;
    s.prototype.modInverse = ni;
    s.prototype.pow = Ze;
    s.prototype.gcd = ri;
    s.prototype.isProbablePrime = ai;
    s.prototype.square = Me;
    function fi() {
        this.i = 0;
        this.j = 0;
        this.S = new Array
    }
    function li(t) {
        var e, i, r;
        for (e = 0; e < 256; ++e)
            this.S[e] = e;
        i = 0;
        for (e = 0; e < 256; ++e) {
            i = i + this.S[e] + t[e % t.length] & 255;
            r = this.S[e];
            this.S[e] = this.S[i];
            this.S[i] = r
        }
        this.i = 0;
        this.j = 0
    }
    function ci() {
        var t;
        this.i = this.i + 1 & 255;
        this.j = this.j + this.S[this.i] & 255;
        t = this.S[this.i];
        this.S[this.i] = this.S[this.j];
        this.S[this.j] = t;
        return this.S[t + this.S[this.i] & 255]
    }
    fi.prototype.init = li;
    fi.prototype.next = ci;
    function pi() {
        return new fi
    }
    var di = 256;
    var gi;
    var vi;
    var mi;
    if (vi == null) {
        vi = new Array;
        mi = 0;
        var yi;
        if (window.crypto && window.crypto.getRandomValues) {
            var bi = new Uint32Array(256);
            window.crypto.getRandomValues(bi);
            for (yi = 0; yi < bi.length; ++yi)
                vi[mi++] = bi[yi] & 255
        }
        var Ti = function(t) {
            this.count = this.count || 0;
            if (this.count >= 256 || mi >= di) {
                if (window.removeEventListener)
                    window.removeEventListener("mousemove", Ti, false);
                else if (window.detachEvent)
                    window.detachEvent("onmousemove", Ti);
                return
            }
            try {
                var e = t.x + t.y;
                vi[mi++] = e & 255;
                this.count += 1
            } catch (i) {}
        };
        if (window.addEventListener)
            window.addEventListener("mousemove", Ti, false);
        else if (window.attachEvent)
            window.attachEvent("onmousemove", Ti)
    }
    function Si() {
        if (gi == null) {
            gi = pi();
            while (mi < di) {
                var t = Math.floor(65536 * Math.random());
                vi[mi++] = t & 255
            }
            gi.init(vi);
            for (mi = 0; mi < vi.length; ++mi)
                vi[mi] = 0;
            mi = 0
        }
        return gi.next()
    }
    function wi(t) {
        var e;
        for (e = 0; e < t.length; ++e)
            t[e] = Si()
    }
    function Ri() {}
    Ri.prototype.nextBytes = wi;
    function Ei(t, e) {
        return new s(t,e)
    }
    function Di(t, e) {
        var i = "";
        var r = 0;
        while (r + e < t.length) {
            i += t.substring(r, r + e) + "\\n";
            r += e
        }
        return i + t.substring(r, t.length)
    }
    function xi(t) {
        if (t < 16)
            return "0" + t.toString(16);
        else
            return t.toString(16)
    }
    function Bi(t, e) {
        if (e < t.length + 11) {
            console.error("Message too long for RSA");
            return null
        }
        var i = new Array;
        var r = t.length - 1;
        while (r >= 0 && e > 0) {
            var n = t.charCodeAt(r--);
            if (n < 128) {
                i[--e] = n
            } else if (n > 127 && n < 2048) {
                i[--e] = n & 63 | 128;
                i[--e] = n >> 6 | 192
            } else {
                i[--e] = n & 63 | 128;
                i[--e] = n >> 6 & 63 | 128;
                i[--e] = n >> 12 | 224
            }
        }
        i[--e] = 0;
        var o = new Ri;
        var h = new Array;
        while (e > 2) {
            h[0] = 0;
            while (h[0] == 0)
                o.nextBytes(h);
            i[--e] = h[0]
        }
        i[--e] = 2;
        i[--e] = 0;
        return new s(i)
    }
    function Ki() {
        this.n = null;
        this.e = 0;
        this.d = null;
        this.p = null;
        this.q = null;
        this.dmp1 = null;
        this.dmq1 = null;
        this.coeff = null
    }
    function Ai(t, e) {
        if (t != null && e != null && t.length > 0 && e.length > 0) {
            this.n = Ei(t, 16);
            this.e = parseInt(e, 16)
        } else
            console.error("Invalid RSA public key")
    }
    function Ui(t) {
        return t.modPowInt(this.e, this.n)
    }
    function Oi(t) {
        var e = Bi(t, this.n.bitLength() + 7 >> 3);
        if (e == null)
            return null;
        var i = this.doPublic(e);
        if (i == null)
            return null;
        var r = i.toString(16);
        if ((r.length & 1) == 0)
            return r;
        else
            return "0" + r
    }
    Ki.prototype.doPublic = Ui;
    Ki.prototype.setPublic = Ai;
    Ki.prototype.encrypt = Oi;
    function Vi(t, e) {
        var i = t.toByteArray();
        var r = 0;
        while (r < i.length && i[r] == 0)
            ++r;
        if (i.length - r != e - 1 || i[r] != 2)
            return null;
        ++r;
        while (i[r] != 0)
            if (++r >= i.length)
                return null;
        var s = "";
        while (++r < i.length) {
            var n = i[r] & 255;
            if (n < 128) {
                s += String.fromCharCode(n)
            } else if (n > 191 && n < 224) {
                s += String.fromCharCode((n & 31) << 6 | i[r + 1] & 63);
                ++r
            } else {
                s += String.fromCharCode((n & 15) << 12 | (i[r + 1] & 63) << 6 | i[r + 2] & 63);
                r += 2
            }
        }
        return s
    }
    function Ji(t, e, i) {
        if (t != null && e != null && t.length > 0 && e.length > 0) {
            this.n = Ei(t, 16);
            this.e = parseInt(e, 16);
            this.d = Ei(i, 16)
        } else
            console.error("Invalid RSA private key")
    }
    function Ni(t, e, i, r, s, n, o, h) {
        if (t != null && e != null && t.length > 0 && e.length > 0) {
            this.n = Ei(t, 16);
            this.e = parseInt(e, 16);
            this.d = Ei(i, 16);
            this.p = Ei(r, 16);
            this.q = Ei(s, 16);
            this.dmp1 = Ei(n, 16);
            this.dmq1 = Ei(o, 16);
            this.coeff = Ei(h, 16)
        } else
            console.error("Invalid RSA private key")
    }
    function Ii(t, e) {
        var i = new Ri;
        var r = t >> 1;
        this.e = parseInt(e, 16);
        var n = new s(e,16);
        for (; ; ) {
            for (; ; ) {
                this.p = new s(t - r,1,i);
                if (this.p.subtract(s.ONE).gcd(n).compareTo(s.ONE) == 0 && this.p.isProbablePrime(10))
                    break
            }
            for (; ; ) {
                this.q = new s(r,1,i);
                if (this.q.subtract(s.ONE).gcd(n).compareTo(s.ONE) == 0 && this.q.isProbablePrime(10))
                    break
            }
            if (this.p.compareTo(this.q) <= 0) {
                var o = this.p;
                this.p = this.q;
                this.q = o
            }
            var h = this.p.subtract(s.ONE);
            var a = this.q.subtract(s.ONE);
            var u = h.multiply(a);
            if (u.gcd(n).compareTo(s.ONE) == 0) {
                this.n = this.p.multiply(this.q);
                this.d = n.modInverse(u);
                this.dmp1 = this.d.mod(h);
                this.dmq1 = this.d.mod(a);
                this.coeff = this.q.modInverse(this.p);
                break
            }
        }
    }
    function Pi(t) {
        if (this.p == null || this.q == null)
            return t.modPow(this.d, this.n);
        var e = t.mod(this.p).modPow(this.dmp1, this.p);
        var i = t.mod(this.q).modPow(this.dmq1, this.q);
        while (e.compareTo(i) < 0)
            e = e.add(this.p);
        return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)
    }
    function Mi(t) {
        var e = Ei(t, 16);
        var i = this.doPrivate(e);
        if (i == null)
            return null;
        return Vi(i, this.n.bitLength() + 7 >> 3)
    }
    Ki.prototype.doPrivate = Pi;
    Ki.prototype.setPrivate = Ji;
    Ki.prototype.setPrivateEx = Ni;
    Ki.prototype.generate = Ii;
    Ki.prototype.decrypt = Mi;
    (function() {
        var t = function(t, e, i) {
            var r = new Ri;
            var o = t >> 1;
            this.e = parseInt(e, 16);
            var h = new s(e,16);
            var a = this;
            var u = function() {
                var e = function() {
                    if (a.p.compareTo(a.q) <= 0) {
                        var t = a.p;
                        a.p = a.q;
                        a.q = t
                    }
                    var e = a.p.subtract(s.ONE);
                    var r = a.q.subtract(s.ONE);
                    var n = e.multiply(r);
                    if (n.gcd(h).compareTo(s.ONE) == 0) {
                        a.n = a.p.multiply(a.q);
                        a.d = h.modInverse(n);
                        a.dmp1 = a.d.mod(e);
                        a.dmq1 = a.d.mod(r);
                        a.coeff = a.q.modInverse(a.p);
                        setTimeout(function() {
                            i()
                        }, 0)
                    } else {
                        setTimeout(u, 0)
                    }
                };
                var f = function() {
                    a.q = n();
                    a.q.fromNumberAsync(o, 1, r, function() {
                        a.q.subtract(s.ONE).gcda(h, function(t) {
                            if (t.compareTo(s.ONE) == 0 && a.q.isProbablePrime(10)) {
                                setTimeout(e, 0)
                            } else {
                                setTimeout(f, 0)
                            }
                        })
                    })
                };
                var l = function() {
                    a.p = n();
                    a.p.fromNumberAsync(t - o, 1, r, function() {
                        a.p.subtract(s.ONE).gcda(h, function(t) {
                            if (t.compareTo(s.ONE) == 0 && a.p.isProbablePrime(10)) {
                                setTimeout(f, 0)
                            } else {
                                setTimeout(l, 0)
                            }
                        })
                    })
                };
                setTimeout(l, 0)
            };
            setTimeout(u, 0)
        };
        Ki.prototype.generateAsync = t;
        var e = function(t, e) {
            var i = this.s < 0 ? this.negate() : this.clone();
            var r = t.s < 0 ? t.negate() : t.clone();
            if (i.compareTo(r) < 0) {
                var s = i;
                i = r;
                r = s
            }
            var n = i.getLowestSetBit()
              , o = r.getLowestSetBit();
            if (o < 0) {
                e(i);
                return
            }
            if (n < o)
                o = n;
            if (o > 0) {
                i.rShiftTo(o, i);
                r.rShiftTo(o, r)
            }
            var h = function() {
                if ((n = i.getLowestSetBit()) > 0) {
                    i.rShiftTo(n, i)
                }
                if ((n = r.getLowestSetBit()) > 0) {
                    r.rShiftTo(n, r)
                }
                if (i.compareTo(r) >= 0) {
                    i.subTo(r, i);
                    i.rShiftTo(1, i)
                } else {
                    r.subTo(i, r);
                    r.rShiftTo(1, r)
                }
                if (!(i.signum() > 0)) {
                    if (o > 0)
                        r.lShiftTo(o, r);
                    setTimeout(function() {
                        e(r)
                    }, 0)
                } else {
                    setTimeout(h, 0)
                }
            };
            setTimeout(h, 10)
        };
        s.prototype.gcda = e;
        var i = function(t, e, i, r) {
            if ("number" == typeof e) {
                if (t < 2) {
                    this.fromInt(1)
                } else {
                    this.fromNumber(t, i);
                    if (!this.testBit(t - 1)) {
                        this.bitwiseTo(s.ONE.shiftLeft(t - 1), ge, this)
                    }
                    if (this.isEven()) {
                        this.dAddOffset(1, 0)
                    }
                    var n = this;
                    var o = function() {
                        n.dAddOffset(2, 0);
                        if (n.bitLength() > t)
                            n.subTo(s.ONE.shiftLeft(t - 1), n);
                        if (n.isProbablePrime(e)) {
                            setTimeout(function() {
                                r()
                            }, 0)
                        } else {
                            setTimeout(o, 0)
                        }
                    };
                    setTimeout(o, 0)
                }
            } else {
                var h = new Array
                  , a = t & 7;
                h.length = (t >> 3) + 1;
                e.nextBytes(h);
                if (a > 0)
                    h[0] &= (1 << a) - 1;
                else
                    h[0] = 0;
                this.fromString(h, 256)
            }
        };
        s.prototype.fromNumberAsync = i
    }
    )();
    var Li = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var qi = "=";
    function Ci(t) {
        var e;
        var i;
        var r = "";
        for (e = 0; e + 3 <= t.length; e += 3) {
            i = parseInt(t.substring(e, e + 3), 16);
            r += Li.charAt(i >> 6) + Li.charAt(i & 63)
        }
        if (e + 1 == t.length) {
            i = parseInt(t.substring(e, e + 1), 16);
            r += Li.charAt(i << 2)
        } else if (e + 2 == t.length) {
            i = parseInt(t.substring(e, e + 2), 16);
            r += Li.charAt(i >> 2) + Li.charAt((i & 3) << 4)
        }
        while ((r.length & 3) > 0)
            r += qi;
        return r
    }
    function Hi(t) {
        var e = "";
        var i;
        var r = 0;
        var s;
        for (i = 0; i < t.length; ++i) {
            if (t.charAt(i) == qi)
                break;
            v = Li.indexOf(t.charAt(i));
            if (v < 0)
                continue;
            if (r == 0) {
                e += d(v >> 2);
                s = v & 3;
                r = 1
            } else if (r == 1) {
                e += d(s << 2 | v >> 4);
                s = v & 15;
                r = 2
            } else if (r == 2) {
                e += d(s);
                e += d(v >> 2);
                s = v & 3;
                r = 3
            } else {
                e += d(s << 2 | v >> 4);
                e += d(v & 15);
                r = 0
            }
        }
        if (r == 1)
            e += d(s << 2);
        return e
    }
    function ji(t) {
        var e = Hi(t);
        var i;
        var r = new Array;
        for (i = 0; 2 * i < e.length; ++i) {
            r[i] = parseInt(e.substring(2 * i, 2 * i + 2), 16)
        }
        return r
    }
    var ki = ki || {};
    ki.env = ki.env || {};
    var Fi = ki
      , _i = Object.prototype
      , zi = "[object Function]"
      , Zi = ["toString", "valueOf"];
    ki.env.parseUA = function(t) {
        var e = function(t) {
            var e = 0;
            return parseFloat(t.replace(/\./g, function() {
                return e++ == 1 ? "" : "."
            }))
        }, i = navigator, r = {
            ie: 0,
            opera: 0,
            gecko: 0,
            webkit: 0,
            chrome: 0,
            mobile: null,
            air: 0,
            ipad: 0,
            iphone: 0,
            ipod: 0,
            ios: null,
            android: 0,
            webos: 0,
            caja: i && i.cajaVersion,
            secure: false,
            os: null
        }, s = t || navigator && navigator.userAgent, n = window && window.location, o = n && n.href, h;
        r.secure = o && o.toLowerCase().indexOf("https") === 0;
        if (s) {
            if (/windows|win32/i.test(s)) {
                r.os = "windows"
            } else if (/macintosh/i.test(s)) {
                r.os = "macintosh"
            } else if (/rhino/i.test(s)) {
                r.os = "rhino"
            }
            if (/KHTML/.test(s)) {
                r.webkit = 1
            }
            h = s.match(/AppleWebKit\/([^\s]*)/);
            if (h && h[1]) {
                r.webkit = e(h[1]);
                if (/ Mobile\//.test(s)) {
                    r.mobile = "Apple";
                    h = s.match(/OS ([^\s]*)/);
                    if (h && h[1]) {
                        h = e(h[1].replace("_", "."))
                    }
                    r.ios = h;
                    r.ipad = r.ipod = r.iphone = 0;
                    h = s.match(/iPad|iPod|iPhone/);
                    if (h && h[0]) {
                        r[h[0].toLowerCase()] = r.ios
                    }
                } else {
                    h = s.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/);
                    if (h) {
                        r.mobile = h[0]
                    }
                    if (/webOS/.test(s)) {
                        r.mobile = "WebOS";
                        h = s.match(/webOS\/([^\s]*);/);
                        if (h && h[1]) {
                            r.webos = e(h[1])
                        }
                    }
                    if (/ Android/.test(s)) {
                        r.mobile = "Android";
                        h = s.match(/Android ([^\s]*);/);
                        if (h && h[1]) {
                            r.android = e(h[1])
                        }
                    }
                }
                h = s.match(/Chrome\/([^\s]*)/);
                if (h && h[1]) {
                    r.chrome = e(h[1])
                } else {
                    h = s.match(/AdobeAIR\/([^\s]*)/);
                    if (h) {
                        r.air = h[0]
                    }
                }
            }
            if (!r.webkit) {
                h = s.match(/Opera[\s\/]([^\s]*)/);
                if (h && h[1]) {
                    r.opera = e(h[1]);
                    h = s.match(/Version\/([^\s]*)/);
                    if (h && h[1]) {
                        r.opera = e(h[1])
                    }
                    h = s.match(/Opera Mini[^;]*/);
                    if (h) {
                        r.mobile = h[0]
                    }
                } else {
                    h = s.match(/MSIE\s([^;]*)/);
                    if (h && h[1]) {
                        r.ie = e(h[1])
                    } else {
                        h = s.match(/Gecko\/([^\s]*)/);
                        if (h) {
                            r.gecko = 1;
                            h = s.match(/rv:([^\s\)]*)/);
                            if (h && h[1]) {
                                r.gecko = e(h[1])
                            }
                        }
                    }
                }
            }
        }
        return r
    }
    ;
    ki.env.ua = ki.env.parseUA();
    ki.isFunction = function(t) {
        return typeof t === "function" || _i.toString.apply(t) === zi
    }
    ;
    ki._IEEnumFix = ki.env.ua.ie ? function(t, e) {
        var i, r, s;
        for (i = 0; i < Zi.length; i = i + 1) {
            r = Zi[i];
            s = e[r];
            if (Fi.isFunction(s) && s != _i[r]) {
                t[r] = s
            }
        }
    }
    : function() {}
    ;
    ki.extend = function(t, e, i) {
        if (!e || !t) {
            throw new Error("extend failed, please check that " + "all dependencies are included.")
        }
        var r = function() {}, s;
        r.prototype = e.prototype;
        t.prototype = new r;
        t.prototype.constructor = t;
        t.superclass = e.prototype;
        if (e.prototype.constructor == _i.constructor) {
            e.prototype.constructor = e
        }
        if (i) {
            for (s in i) {
                if (Fi.hasOwnProperty(i, s)) {
                    t.prototype[s] = i[s]
                }
            }
            Fi._IEEnumFix(t.prototype, i)
        }
    }
    ;
    if (typeof KJUR == "undefined" || !KJUR)
        KJUR = {};
    if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1)
        KJUR.asn1 = {};
    KJUR.asn1.ASN1Util = new function() {
        this.integerToByteHex = function(t) {
            var e = t.toString(16);
            if (e.length % 2 == 1)
                e = "0" + e;
            return e
        }
        ;
        this.bigIntToMinTwosComplementsHex = function(t) {
            var e = t.toString(16);
            if (e.substr(0, 1) != "-") {
                if (e.length % 2 == 1) {
                    e = "0" + e
                } else {
                    if (!e.match(/^[0-7]/)) {
                        e = "00" + e
                    }
                }
            } else {
                var i = e.substr(1);
                var r = i.length;
                if (r % 2 == 1) {
                    r += 1
                } else {
                    if (!e.match(/^[0-7]/)) {
                        r += 2
                    }
                }
                var n = "";
                for (var o = 0; o < r; o++) {
                    n += "f"
                }
                var h = new s(n,16);
                var a = h.xor(t).add(s.ONE);
                e = a.toString(16).replace(/^-/, "")
            }
            return e
        }
        ;
        this.getPEMStringFromHex = function(t, e) {
            var i = CryptoJS.enc.Hex.parse(t);
            var r = CryptoJS.enc.Base64.stringify(i);
            var s = r.replace(/(.{64})/g, "$1\\r\\n");
            s = s.replace(/\\r\\n$/, "");
            return "-----BEGIN " + e + "-----\\r\\n" + s + "\\r\\n-----END " + e + "-----\\r\\n"
        }
    }
    ;
    KJUR.asn1.ASN1Object = function() {
        var t = true;
        var e = null;
        var i = "00";
        var r = "00";
        var s = "";
        this.getLengthHexFromValue = function() {
            if (typeof this.hV == "undefined" || this.hV == null) {
                throw "this.hV is null or undefined."
            }
            if (this.hV.length % 2 == 1) {
                throw "value hex must be even length: n=" + s.length + ",v=" + this.hV
            }
            var t = this.hV.length / 2;
            var e = t.toString(16);
            if (e.length % 2 == 1) {
                e = "0" + e
            }
            if (t < 128) {
                return e
            } else {
                var i = e.length / 2;
                if (i > 15) {
                    throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16)
                }
                var r = 128 + i;
                return r.toString(16) + e
            }
        }
        ;
        this.getEncodedHex = function() {
            if (this.hTLV == null || this.isModified) {
                this.hV = this.getFreshValueHex();
                this.hL = this.getLengthHexFromValue();
                this.hTLV = this.hT + this.hL + this.hV;
                this.isModified = false
            }
            return this.hTLV
        }
        ;
        this.getValueHex = function() {
            this.getEncodedHex();
            return this.hV
        }
        ;
        this.getFreshValueHex = function() {
            return ""
        }
    }
    ;
    KJUR.asn1.DERAbstractString = function(t) {
        KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
        var e = null;
        var i = null;
        this.getString = function() {
            return this.s
        }
        ;
        this.setString = function(t) {
            this.hTLV = null;
            this.isModified = true;
            this.s = t;
            this.hV = stohex(this.s)
        }
        ;
        this.setStringHex = function(t) {
            this.hTLV = null;
            this.isModified = true;
            this.s = null;
            this.hV = t
        }
        ;
        this.getFreshValueHex = function() {
            return this.hV
        }
        ;
        if (typeof t != "undefined") {
            if (typeof t["str"] != "undefined") {
                this.setString(t["str"])
            } else if (typeof t["hex"] != "undefined") {
                this.setStringHex(t["hex"])
            }
        }
    }
    ;
    ki.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERAbstractTime = function(t) {
        KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
        var e = null;
        var i = null;
        this.localDateToUTC = function(t) {
            utc = t.getTime() + t.getTimezoneOffset() * 6e4;
            var e = new Date(utc);
            return e
        }
        ;
        this.formatDate = function(t, e) {
            var i = this.zeroPadding;
            var r = this.localDateToUTC(t);
            var s = String(r.getFullYear());
            if (e == "utc")
                s = s.substr(2, 2);
            var n = i(String(r.getMonth() + 1), 2);
            var o = i(String(r.getDate()), 2);
            var h = i(String(r.getHours()), 2);
            var a = i(String(r.getMinutes()), 2);
            var u = i(String(r.getSeconds()), 2);
            return s + n + o + h + a + u + "Z"
        }
        ;
        this.zeroPadding = function(t, e) {
            if (t.length >= e)
                return t;
            return new Array(e - t.length + 1).join("0") + t
        }
        ;
        this.getString = function() {
            return this.s
        }
        ;
        this.setString = function(t) {
            this.hTLV = null;
            this.isModified = true;
            this.s = t;
            this.hV = stohex(this.s)
        }
        ;
        this.setByDateValue = function(t, e, i, r, s, n) {
            var o = new Date(Date.UTC(t, e - 1, i, r, s, n, 0));
            this.setByDate(o)
        }
        ;
        this.getFreshValueHex = function() {
            return this.hV
        }
    }
    ;
    ki.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERAbstractStructured = function(t) {
        KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
        var e = null;
        this.setByASN1ObjectArray = function(t) {
            this.hTLV = null;
            this.isModified = true;
            this.asn1Array = t
        }
        ;
        this.appendASN1Object = function(t) {
            this.hTLV = null;
            this.isModified = true;
            this.asn1Array.push(t)
        }
        ;
        this.asn1Array = new Array;
        if (typeof t != "undefined") {
            if (typeof t["array"] != "undefined") {
                this.asn1Array = t["array"]
            }
        }
    }
    ;
    ki.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERBoolean = function() {
        KJUR.asn1.DERBoolean.superclass.constructor.call(this);
        this.hT = "01";
        this.hTLV = "0101ff"
    }
    ;
    ki.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERInteger = function(t) {
        KJUR.asn1.DERInteger.superclass.constructor.call(this);
        this.hT = "02";
        this.setByBigInteger = function(t) {
            this.hTLV = null;
            this.isModified = true;
            this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
        }
        ;
        this.setByInteger = function(t) {
            var e = new s(String(t),10);
            this.setByBigInteger(e)
        }
        ;
        this.setValueHex = function(t) {
            this.hV = t
        }
        ;
        this.getFreshValueHex = function() {
            return this.hV
        }
        ;
        if (typeof t != "undefined") {
            if (typeof t["bigint"] != "undefined") {
                this.setByBigInteger(t["bigint"])
            } else if (typeof t["int"] != "undefined") {
                this.setByInteger(t["int"])
            } else if (typeof t["hex"] != "undefined") {
                this.setValueHex(t["hex"])
            }
        }
    }
    ;
    ki.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERBitString = function(t) {
        KJUR.asn1.DERBitString.superclass.constructor.call(this);
        this.hT = "03";
        this.setHexValueIncludingUnusedBits = function(t) {
            this.hTLV = null;
            this.isModified = true;
            this.hV = t
        }
        ;
        this.setUnusedBitsAndHexValue = function(t, e) {
            if (t < 0 || 7 < t) {
                throw "unused bits shall be from 0 to 7: u = " + t
            }
            var i = "0" + t;
            this.hTLV = null;
            this.isModified = true;
            this.hV = i + e
        }
        ;
        this.setByBinaryString = function(t) {
            t = t.replace(/0+$/, "");
            var e = 8 - t.length % 8;
            if (e == 8)
                e = 0;
            for (var i = 0; i <= e; i++) {
                t += "0"
            }
            var r = "";
            for (var i = 0; i < t.length - 1; i += 8) {
                var s = t.substr(i, 8);
                var n = parseInt(s, 2).toString(16);
                if (n.length == 1)
                    n = "0" + n;
                r += n
            }
            this.hTLV = null;
            this.isModified = true;
            this.hV = "0" + e + r
        }
        ;
        this.setByBooleanArray = function(t) {
            var e = "";
            for (var i = 0; i < t.length; i++) {
                if (t[i] == true) {
                    e += "1"
                } else {
                    e += "0"
                }
            }
            this.setByBinaryString(e)
        }
        ;
        this.newFalseArray = function(t) {
            var e = new Array(t);
            for (var i = 0; i < t; i++) {
                e[i] = false
            }
            return e
        }
        ;
        this.getFreshValueHex = function() {
            return this.hV
        }
        ;
        if (typeof t != "undefined") {
            if (typeof t["hex"] != "undefined") {
                this.setHexValueIncludingUnusedBits(t["hex"])
            } else if (typeof t["bin"] != "undefined") {
                this.setByBinaryString(t["bin"])
            } else if (typeof t["array"] != "undefined") {
                this.setByBooleanArray(t["array"])
            }
        }
    }
    ;
    ki.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object);
    KJUR.asn1.DEROctetString = function(t) {
        KJUR.asn1.DEROctetString.superclass.constructor.call(this, t);
        this.hT = "04"
    }
    ;
    ki.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERNull = function() {
        KJUR.asn1.DERNull.superclass.constructor.call(this);
        this.hT = "05";
        this.hTLV = "0500"
    }
    ;
    ki.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERObjectIdentifier = function(t) {
        var e = function(t) {
            var e = t.toString(16);
            if (e.length == 1)
                e = "0" + e;
            return e
        };
        var i = function(t) {
            var i = "";
            var r = new s(t,10);
            var n = r.toString(2);
            var o = 7 - n.length % 7;
            if (o == 7)
                o = 0;
            var h = "";
            for (var a = 0; a < o; a++)
                h += "0";
            n = h + n;
            for (var a = 0; a < n.length - 1; a += 7) {
                var u = n.substr(a, 7);
                if (a != n.length - 7)
                    u = "1" + u;
                i += e(parseInt(u, 2))
            }
            return i
        };
        KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);
        this.hT = "06";
        this.setValueHex = function(t) {
            this.hTLV = null;
            this.isModified = true;
            this.s = null;
            this.hV = t
        }
        ;
        this.setValueOidString = function(t) {
            if (!t.match(/^[0-9.]+$/)) {
                throw "malformed oid string: " + t
            }
            var r = "";
            var s = t.split(".");
            var n = parseInt(s[0]) * 40 + parseInt(s[1]);
            r += e(n);
            s.splice(0, 2);
            for (var o = 0; o < s.length; o++) {
                r += i(s[o])
            }
            this.hTLV = null;
            this.isModified = true;
            this.s = null;
            this.hV = r
        }
        ;
        this.setValueName = function(t) {
            if (typeof KJUR.asn1.x509.OID.name2oidList[t] != "undefined") {
                var e = KJUR.asn1.x509.OID.name2oidList[t];
                this.setValueOidString(e)
            } else {
                throw "DERObjectIdentifier oidName undefined: " + t
            }
        }
        ;
        this.getFreshValueHex = function() {
            return this.hV
        }
        ;
        if (typeof t != "undefined") {
            if (typeof t["oid"] != "undefined") {
                this.setValueOidString(t["oid"])
            } else if (typeof t["hex"] != "undefined") {
                this.setValueHex(t["hex"])
            } else if (typeof t["name"] != "undefined") {
                this.setValueName(t["name"])
            }
        }
    }
    ;
    ki.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERUTF8String = function(t) {
        KJUR.asn1.DERUTF8String.superclass.constructor.call(this, t);
        this.hT = "0c"
    }
    ;
    ki.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERNumericString = function(t) {
        KJUR.asn1.DERNumericString.superclass.constructor.call(this, t);
        this.hT = "12"
    }
    ;
    ki.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERPrintableString = function(t) {
        KJUR.asn1.DERPrintableString.superclass.constructor.call(this, t);
        this.hT = "13"
    }
    ;
    ki.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERTeletexString = function(t) {
        KJUR.asn1.DERTeletexString.superclass.constructor.call(this, t);
        this.hT = "14"
    }
    ;
    ki.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERIA5String = function(t) {
        KJUR.asn1.DERIA5String.superclass.constructor.call(this, t);
        this.hT = "16"
    }
    ;
    ki.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERUTCTime = function(t) {
        KJUR.asn1.DERUTCTime.superclass.constructor.call(this, t);
        this.hT = "17";
        this.setByDate = function(t) {
            this.hTLV = null;
            this.isModified = true;
            this.date = t;
            this.s = this.formatDate(this.date, "utc");
            this.hV = stohex(this.s)
        }
        ;
        if (typeof t != "undefined") {
            if (typeof t["str"] != "undefined") {
                this.setString(t["str"])
            } else if (typeof t["hex"] != "undefined") {
                this.setStringHex(t["hex"])
            } else if (typeof t["date"] != "undefined") {
                this.setByDate(t["date"])
            }
        }
    }
    ;
    ki.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime);
    KJUR.asn1.DERGeneralizedTime = function(t) {
        KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, t);
        this.hT = "18";
        this.setByDate = function(t) {
            this.hTLV = null;
            this.isModified = true;
            this.date = t;
            this.s = this.formatDate(this.date, "gen");
            this.hV = stohex(this.s)
        }
        ;
        if (typeof t != "undefined") {
            if (typeof t["str"] != "undefined") {
                this.setString(t["str"])
            } else if (typeof t["hex"] != "undefined") {
                this.setStringHex(t["hex"])
            } else if (typeof t["date"] != "undefined") {
                this.setByDate(t["date"])
            }
        }
    }
    ;
    ki.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime);
    KJUR.asn1.DERSequence = function(t) {
        KJUR.asn1.DERSequence.superclass.constructor.call(this, t);
        this.hT = "30";
        this.getFreshValueHex = function() {
            var t = "";
            for (var e = 0; e < this.asn1Array.length; e++) {
                var i = this.asn1Array[e];
                t += i.getEncodedHex()
            }
            this.hV = t;
            return this.hV
        }
    }
    ;
    ki.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured);
    KJUR.asn1.DERSet = function(t) {
        KJUR.asn1.DERSet.superclass.constructor.call(this, t);
        this.hT = "31";
        this.getFreshValueHex = function() {
            var t = new Array;
            for (var e = 0; e < this.asn1Array.length; e++) {
                var i = this.asn1Array[e];
                t.push(i.getEncodedHex())
            }
            t.sort();
            this.hV = t.join("");
            return this.hV
        }
    }
    ;
    ki.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured);
    KJUR.asn1.DERTaggedObject = function(t) {
        KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);
        this.hT = "a0";
        this.hV = "";
        this.isExplicit = true;
        this.asn1Object = null;
        this.setASN1Object = function(t, e, i) {
            this.hT = e;
            this.isExplicit = t;
            this.asn1Object = i;
            if (this.isExplicit) {
                this.hV = this.asn1Object.getEncodedHex();
                this.hTLV = null;
                this.isModified = true
            } else {
                this.hV = null;
                this.hTLV = i.getEncodedHex();
                this.hTLV = this.hTLV.replace(/^../, e);
                this.isModified = false
            }
        }
        ;
        this.getFreshValueHex = function() {
            return this.hV
        }
        ;
        if (typeof t != "undefined") {
            if (typeof t["tag"] != "undefined") {
                this.hT = t["tag"]
            }
            if (typeof t["explicit"] != "undefined") {
                this.isExplicit = t["explicit"]
            }
            if (typeof t["obj"] != "undefined") {
                this.asn1Object = t["obj"];
                this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)
            }
        }
    }
    ;
    ki.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);
    (function(t) {
        "use strict";
        var e = {}, i;
        e.decode = function(e) {
            var r;
            if (i === t) {
                var s = "0123456789ABCDEF"
                  , n = " \f\\n\\r	 \u2028\u2029";
                i = [];
                for (r = 0; r < 16; ++r)
                    i[s.charAt(r)] = r;
                s = s.toLowerCase();
                for (r = 10; r < 16; ++r)
                    i[s.charAt(r)] = r;
                for (r = 0; r < n.length; ++r)
                    i[n.charAt(r)] = -1
            }
            var o = []
              , h = 0
              , a = 0;
            for (r = 0; r < e.length; ++r) {
                var u = e.charAt(r);
                if (u == "=")
                    break;
                u = i[u];
                if (u == -1)
                    continue;
                if (u === t)
                    throw "Illegal character at offset " + r;
                h |= u;
                if (++a >= 2) {
                    o[o.length] = h;
                    h = 0;
                    a = 0
                } else {
                    h <<= 4
                }
            }
            if (a)
                throw "Hex encoding incomplete: 4 bits missing";
            return o
        }
        ;
        window.Hex = e
    }
    )();
    (function(t) {
        "use strict";
        var e = {}, i;
        e.decode = function(e) {
            var r;
            if (i === t) {
                var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                  , n = "= \f\\n\\r	 \u2028\u2029";
                i = [];
                for (r = 0; r < 64; ++r)
                    i[s.charAt(r)] = r;
                for (r = 0; r < n.length; ++r)
                    i[n.charAt(r)] = -1
            }
            var o = [];
            var h = 0
              , a = 0;
            for (r = 0; r < e.length; ++r) {
                var u = e.charAt(r);
                if (u == "=")
                    break;
                u = i[u];
                if (u == -1)
                    continue;
                if (u === t)
                    throw "Illegal character at offset " + r;
                h |= u;
                if (++a >= 4) {
                    o[o.length] = h >> 16;
                    o[o.length] = h >> 8 & 255;
                    o[o.length] = h & 255;
                    h = 0;
                    a = 0
                } else {
                    h <<= 6
                }
            }
            switch (a) {
            case 1:
                throw "Base64 encoding incomplete: at least 2 bits missing";
            case 2:
                o[o.length] = h >> 10;
                break;
            case 3:
                o[o.length] = h >> 16;
                o[o.length] = h >> 8 & 255;
                break
            }
            return o
        }
        ;
        e.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\\n]+\\n([A-Za-z0-9+\/=\s]+)====/;
        e.unarmor = function(t) {
            var i = e.re.exec(t);
            if (i) {
                if (i[1])
                    t = i[1];
                else if (i[2])
                    t = i[2];
                else
                    throw "RegExp out of sync"
            }
            return e.decode(t)
        }
        ;
        window.Base64 = e
    }
    )();
    (function(t) {
        "use strict";
        var e = 100
          , i = "…"
          , r = {
            tag: function(t, e) {
                var i = document.createElement(t);
                i.className = e;
                return i
            },
            text: function(t) {
                return document.createTextNode(t)
            }
        };
        function s(t, e) {
            if (t instanceof s) {
                this.enc = t.enc;
                this.pos = t.pos
            } else {
                this.enc = t;
                this.pos = e
            }
        }
        s.prototype.get = function(e) {
            if (e === t)
                e = this.pos++;
            if (e >= this.enc.length)
                throw "Requesting byte offset " + e + " on a stream of length " + this.enc.length;
            return this.enc[e]
        }
        ;
        s.prototype.hexDigits = "0123456789ABCDEF";
        s.prototype.hexByte = function(t) {
            return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(t & 15)
        }
        ;
        s.prototype.hexDump = function(t, e, i) {
            var r = "";
            for (var s = t; s < e; ++s) {
                r += this.hexByte(this.get(s));
                if (i !== true)
                    switch (s & 15) {
                    case 7:
                        r += "  ";
                        break;
                    case 15:
                        r += "\\n";
                        break;
                    default:
                        r += " "
                    }
            }
            return r
        }
        ;
        s.prototype.parseStringISO = function(t, e) {
            var i = "";
            for (var r = t; r < e; ++r)
                i += String.fromCharCode(this.get(r));
            return i
        }
        ;
        s.prototype.parseStringUTF = function(t, e) {
            var i = "";
            for (var r = t; r < e; ) {
                var s = this.get(r++);
                if (s < 128)
                    i += String.fromCharCode(s);
                else if (s > 191 && s < 224)
                    i += String.fromCharCode((s & 31) << 6 | this.get(r++) & 63);
                else
                    i += String.fromCharCode((s & 15) << 12 | (this.get(r++) & 63) << 6 | this.get(r++) & 63)
            }
            return i
        }
        ;
        s.prototype.parseStringBMP = function(t, e) {
            var i = "";
            for (var r = t; r < e; r += 2) {
                var s = this.get(r);
                var n = this.get(r + 1);
                i += String.fromCharCode((s << 8) + n)
            }
            return i
        }
        ;
        s.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
        s.prototype.parseTime = function(t, e) {
            var i = this.parseStringISO(t, e)
              , r = this.reTime.exec(i);
            if (!r)
                return "Unrecognized time: " + i;
            i = r[1] + "-" + r[2] + "-" + r[3] + " " + r[4];
            if (r[5]) {
                i += ":" + r[5];
                if (r[6]) {
                    i += ":" + r[6];
                    if (r[7])
                        i += "." + r[7]
                }
            }
            if (r[8]) {
                i += " UTC";
                if (r[8] != "Z") {
                    i += r[8];
                    if (r[9])
                        i += ":" + r[9]
                }
            }
            return i
        }
        ;
        s.prototype.parseInteger = function(t, e) {
            var i = e - t;
            if (i > 4) {
                i <<= 3;
                var r = this.get(t);
                if (r === 0)
                    i -= 8;
                else
                    while (r < 128) {
                        r <<= 1;
                        --i
                    }
                return "(" + i + " bit)"
            }
            var s = 0;
            for (var n = t; n < e; ++n)
                s = s << 8 | this.get(n);
            return s
        }
        ;
        s.prototype.parseBitString = function(t, e) {
            var i = this.get(t)
              , r = (e - t - 1 << 3) - i
              , s = "(" + r + " bit)";
            if (r <= 20) {
                var n = i;
                s += " ";
                for (var o = e - 1; o > t; --o) {
                    var h = this.get(o);
                    for (var a = n; a < 8; ++a)
                        s += h >> a & 1 ? "1" : "0";
                    n = 0
                }
            }
            return s
        }
        ;
        s.prototype.parseOctetString = function(t, r) {
            var s = r - t
              , n = "(" + s + " byte) ";
            if (s > e)
                r = t + e;
            for (var o = t; o < r; ++o)
                n += this.hexByte(this.get(o));
            if (s > e)
                n += i;
            return n
        }
        ;
        s.prototype.parseOID = function(t, e) {
            var i = ""
              , r = 0
              , s = 0;
            for (var n = t; n < e; ++n) {
                var o = this.get(n);
                r = r << 7 | o & 127;
                s += 7;
                if (!(o & 128)) {
                    if (i === "") {
                        var h = r < 80 ? r < 40 ? 0 : 1 : 2;
                        i = h + "." + (r - h * 40)
                    } else
                        i += "." + (s >= 31 ? "bigint" : r);
                    r = s = 0
                }
            }
            return i
        }
        ;
        function n(t, e, i, r, s) {
            this.stream = t;
            this.header = e;
            this.length = i;
            this.tag = r;
            this.sub = s
        }
        n.prototype.typeName = function() {
            if (this.tag === t)
                return "unknown";
            var e = this.tag >> 6
              , i = this.tag >> 5 & 1
              , r = this.tag & 31;
            switch (e) {
            case 0:
                switch (r) {
                case 0:
                    return "EOC";
                case 1:
                    return "BOOLEAN";
                case 2:
                    return "INTEGER";
                case 3:
                    return "BIT_STRING";
                case 4:
                    return "OCTET_STRING";
                case 5:
                    return "NULL";
                case 6:
                    return "OBJECT_IDENTIFIER";
                case 7:
                    return "ObjectDescriptor";
                case 8:
                    return "EXTERNAL";
                case 9:
                    return "REAL";
                case 10:
                    return "ENUMERATED";
                case 11:
                    return "EMBEDDED_PDV";
                case 12:
                    return "UTF8String";
                case 16:
                    return "SEQUENCE";
                case 17:
                    return "SET";
                case 18:
                    return "NumericString";
                case 19:
                    return "PrintableString";
                case 20:
                    return "TeletexString";
                case 21:
                    return "VideotexString";
                case 22:
                    return "IA5String";
                case 23:
                    return "UTCTime";
                case 24:
                    return "GeneralizedTime";
                case 25:
                    return "GraphicString";
                case 26:
                    return "VisibleString";
                case 27:
                    return "GeneralString";
                case 28:
                    return "UniversalString";
                case 30:
                    return "BMPString";
                default:
                    return "Universal_" + r.toString(16)
                }
            case 1:
                return "Application_" + r.toString(16);
            case 2:
                return "[" + r + "]";
            case 3:
                return "Private_" + r.toString(16)
            }
        }
        ;
        n.prototype.reSeemsASCII = /^[ -~]+$/;
        n.prototype.content = function() {
            if (this.tag === t)
                return null;
            var r = this.tag >> 6
              , s = this.tag & 31
              , n = this.posContent()
              , o = Math.abs(this.length);
            if (r !== 0) {
                if (this.sub !== null)
                    return "(" + this.sub.length + " elem)";
                var h = this.stream.parseStringISO(n, n + Math.min(o, e));
                if (this.reSeemsASCII.test(h))
                    return h.substring(0, 2 * e) + (h.length > 2 * e ? i : "");
                else
                    return this.stream.parseOctetString(n, n + o)
            }
            switch (s) {
            case 1:
                return this.stream.get(n) === 0 ? "false" : "true";
            case 2:
                return this.stream.parseInteger(n, n + o);
            case 3:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(n, n + o);
            case 4:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(n, n + o);
            case 6:
                return this.stream.parseOID(n, n + o);
            case 16:
            case 17:
                return "(" + this.sub.length + " elem)";
            case 12:
                return this.stream.parseStringUTF(n, n + o);
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 26:
                return this.stream.parseStringISO(n, n + o);
            case 30:
                return this.stream.parseStringBMP(n, n + o);
            case 23:
            case 24:
                return this.stream.parseTime(n, n + o)
            }
            return null
        }
        ;
        n.prototype.toString = function() {
            return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (this.sub === null ? "null" : this.sub.length) + "]"
        }
        ;
        n.prototype.print = function(e) {
            if (e === t)
                e = "";
            document.writeln(e + this);
            if (this.sub !== null) {
                e += "  ";
                for (var i = 0, r = this.sub.length; i < r; ++i)
                    this.sub[i].print(e)
            }
        }
        ;
        n.prototype.toPrettyString = function(e) {
            if (e === t)
                e = "";
            var i = e + this.typeName() + " @" + this.stream.pos;
            if (this.length >= 0)
                i += "+";
            i += this.length;
            if (this.tag & 32)
                i += " (constructed)";
            else if ((this.tag == 3 || this.tag == 4) && this.sub !== null)
                i += " (encapsulates)";
            i += "\\n";
            if (this.sub !== null) {
                e += "  ";
                for (var r = 0, s = this.sub.length; r < s; ++r)
                    i += this.sub[r].toPrettyString(e)
            }
            return i
        }
        ;
        n.prototype.toDOM = function() {
            var t = r.tag("div", "node");
            t.asn1 = this;
            var e = r.tag("div", "head");
            var i = this.typeName().replace(/_/g, " ");
            e.innerHTML = i;
            var s = this.content();
            if (s !== null) {
                s = String(s).replace(/</g, "&lt;");
                var n = r.tag("span", "preview");
                n.appendChild(r.text(s));
                e.appendChild(n)
            }
            t.appendChild(e);
            this.node = t;
            this.head = e;
            var o = r.tag("div", "value");
            i = "Offset: " + this.stream.pos + "<br/>";
            i += "Length: " + this.header + "+";
            if (this.length >= 0)
                i += this.length;
            else
                i += -this.length + " (undefined)";
            if (this.tag & 32)
                i += "<br/>(constructed)";
            else if ((this.tag == 3 || this.tag == 4) && this.sub !== null)
                i += "<br/>(encapsulates)";
            if (s !== null) {
                i += "<br/>Value:<br/><b>" + s + "</b>";
                if (typeof oids === "object" && this.tag == 6) {
                    var h = oids[s];
                    if (h) {
                        if (h.d)
                            i += "<br/>" + h.d;
                        if (h.c)
                            i += "<br/>" + h.c;
                        if (h.w)
                            i += "<br/>(warning!)"
                    }
                }
            }
            o.innerHTML = i;
            t.appendChild(o);
            var a = r.tag("div", "sub");
            if (this.sub !== null) {
                for (var u = 0, f = this.sub.length; u < f; ++u)
                    a.appendChild(this.sub[u].toDOM())
            }
            t.appendChild(a);
            e.onclick = function() {
                t.className = t.className == "node collapsed" ? "node" : "node collapsed"
            }
            ;
            return t
        }
        ;
        n.prototype.posStart = function() {
            return this.stream.pos
        }
        ;
        n.prototype.posContent = function() {
            return this.stream.pos + this.header
        }
        ;
        n.prototype.posEnd = function() {
            return this.stream.pos + this.header + Math.abs(this.length)
        }
        ;
        n.prototype.fakeHover = function(t) {
            this.node.className += " hover";
            if (t)
                this.head.className += " hover"
        }
        ;
        n.prototype.fakeOut = function(t) {
            var e = / ?hover/;
            this.node.className = this.node.className.replace(e, "");
            if (t)
                this.head.className = this.head.className.replace(e, "")
        }
        ;
        n.prototype.toHexDOM_sub = function(t, e, i, s, n) {
            if (s >= n)
                return;
            var o = r.tag("span", e);
            o.appendChild(r.text(i.hexDump(s, n)));
            t.appendChild(o)
        }
        ;
        n.prototype.toHexDOM = function(e) {
            var i = r.tag("span", "hex");
            if (e === t)
                e = i;
            this.head.hexNode = i;
            this.head.onmouseover = function() {
                this.hexNode.className = "hexCurrent"
            }
            ;
            this.head.onmouseout = function() {
                this.hexNode.className = "hex"
            }
            ;
            i.asn1 = this;
            i.onmouseover = function() {
                var t = !e.selected;
                if (t) {
                    e.selected = this.asn1;
                    this.className = "hexCurrent"
                }
                this.asn1.fakeHover(t)
            }
            ;
            i.onmouseout = function() {
                var t = e.selected == this.asn1;
                this.asn1.fakeOut(t);
                if (t) {
                    e.selected = null;
                    this.className = "hex"
                }
            }
            ;
            this.toHexDOM_sub(i, "tag", this.stream, this.posStart(), this.posStart() + 1);
            this.toHexDOM_sub(i, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent());
            if (this.sub === null)
                i.appendChild(r.text(this.stream.hexDump(this.posContent(), this.posEnd())));
            else if (this.sub.length > 0) {
                var s = this.sub[0];
                var n = this.sub[this.sub.length - 1];
                this.toHexDOM_sub(i, "intro", this.stream, this.posContent(), s.posStart());
                for (var o = 0, h = this.sub.length; o < h; ++o)
                    i.appendChild(this.sub[o].toHexDOM(e));
                this.toHexDOM_sub(i, "outro", this.stream, n.posEnd(), this.posEnd())
            }
            return i
        }
        ;
        n.prototype.toHexString = function(t) {
            return this.stream.hexDump(this.posStart(), this.posEnd(), true)
        }
        ;
        n.decodeLength = function(t) {
            var e = t.get()
              , i = e & 127;
            if (i == e)
                return i;
            if (i > 3)
                throw "Length over 24 bits not supported at position " + (t.pos - 1);
            if (i === 0)
                return -1;
            e = 0;
            for (var r = 0; r < i; ++r)
                e = e << 8 | t.get();
            return e
        }
        ;
        n.hasContent = function(t, e, i) {
            if (t & 32)
                return true;
            if (t < 3 || t > 4)
                return false;
            var r = new s(i);
            if (t == 3)
                r.get();
            var o = r.get();
            if (o >> 6 & 1)
                return false;
            try {
                var h = n.decodeLength(r);
                return r.pos - i.pos + h == e
            } catch (a) {
                return false
            }
        }
        ;
        n.decode = function(t) {
            if (!(t instanceof s))
                t = new s(t,0);
            var e = new s(t)
              , i = t.get()
              , r = n.decodeLength(t)
              , o = t.pos - e.pos
              , h = null;
            if (n.hasContent(i, r, t)) {
                var a = t.pos;
                if (i == 3)
                    t.get();
                h = [];
                if (r >= 0) {
                    var u = a + r;
                    while (t.pos < u)
                        h[h.length] = n.decode(t);
                    if (t.pos != u)
                        throw "Content size is not correct for container starting at offset " + a
                } else {
                    try {
                        for (; ; ) {
                            var f = n.decode(t);
                            if (f.tag === 0)
                                break;
                            h[h.length] = f
                        }
                        r = a - t.pos
                    } catch (l) {
                        throw "Exception while decoding undefined length content: " + l
                    }
                }
            } else
                t.pos += r;
            return new n(e,o,r,i,h)
        }
        ;
        n.test = function() {
            var t = [{
                value: [39],
                expected: 39
            }, {
                value: [129, 201],
                expected: 201
            }, {
                value: [131, 254, 220, 186],
                expected: 16702650
            }];
            for (var e = 0, i = t.length; e < i; ++e) {
                var r = 0
                  , o = new s(t[e].value,0)
                  , h = n.decodeLength(o);
                if (h != t[e].expected)
                    document.write("In test[" + e + "] expected " + t[e].expected + " got " + h + "\\n")
            }
        }
        ;
        window.ASN1 = n
    }
    )();
    ASN1.prototype.getHexStringValue = function() {
        var t = this.toHexString();
        var e = this.header * 2;
        var i = this.length * 2;
        return t.substr(e, i)
    }
    ;
    Ki.prototype.parseKey = function(t) {
        try {
            var e = 0;
            var i = 0;
            var r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;
            var s = r.test(t) ? Hex.decode(t) : Base64.unarmor(t);
            var n = ASN1.decode(s);
            if (n.sub.length === 3) {
                n = n.sub[2].sub[0]
            }
            if (n.sub.length === 9) {
                e = n.sub[1].getHexStringValue();
                this.n = Ei(e, 16);
                i = n.sub[2].getHexStringValue();
                this.e = parseInt(i, 16);
                var o = n.sub[3].getHexStringValue();
                this.d = Ei(o, 16);
                var h = n.sub[4].getHexStringValue();
                this.p = Ei(h, 16);
                var a = n.sub[5].getHexStringValue();
                this.q = Ei(a, 16);
                var u = n.sub[6].getHexStringValue();
                this.dmp1 = Ei(u, 16);
                var f = n.sub[7].getHexStringValue();
                this.dmq1 = Ei(f, 16);
                var l = n.sub[8].getHexStringValue();
                this.coeff = Ei(l, 16)
            } else if (n.sub.length === 2) {
                var c = n.sub[1];
                var p = c.sub[0];
                e = p.sub[0].getHexStringValue();
                this.n = Ei(e, 16);
                i = p.sub[1].getHexStringValue();
                this.e = parseInt(i, 16)
            } else {
                return false
            }
            return true
        } catch (d) {
            return false
        }
    }
    ;
    Ki.prototype.getPrivateBaseKey = function() {
        var t = {
            array: [new KJUR.asn1.DERInteger({
                "int": 0
            }), new KJUR.asn1.DERInteger({
                bigint: this.n
            }), new KJUR.asn1.DERInteger({
                "int": this.e
            }), new KJUR.asn1.DERInteger({
                bigint: this.d
            }), new KJUR.asn1.DERInteger({
                bigint: this.p
            }), new KJUR.asn1.DERInteger({
                bigint: this.q
            }), new KJUR.asn1.DERInteger({
                bigint: this.dmp1
            }), new KJUR.asn1.DERInteger({
                bigint: this.dmq1
            }), new KJUR.asn1.DERInteger({
                bigint: this.coeff
            })]
        };
        var e = new KJUR.asn1.DERSequence(t);
        return e.getEncodedHex()
    }
    ;
    Ki.prototype.getPrivateBaseKeyB64 = function() {
        return Ci(this.getPrivateBaseKey())
    }
    ;
    Ki.prototype.getPublicBaseKey = function() {
        var t = {
            array: [new KJUR.asn1.DERObjectIdentifier({
                oid: "1.2.840.113549.1.1.1"
            }), new KJUR.asn1.DERNull]
        };
        var e = new KJUR.asn1.DERSequence(t);
        t = {
            array: [new KJUR.asn1.DERInteger({
                bigint: this.n
            }), new KJUR.asn1.DERInteger({
                "int": this.e
            })]
        };
        var i = new KJUR.asn1.DERSequence(t);
        t = {
            hex: "00" + i.getEncodedHex()
        };
        var r = new KJUR.asn1.DERBitString(t);
        t = {
            array: [e, r]
        };
        var s = new KJUR.asn1.DERSequence(t);
        return s.getEncodedHex()
    }
    ;
    Ki.prototype.getPublicBaseKeyB64 = function() {
        return Ci(this.getPublicBaseKey())
    }
    ;
    Ki.prototype.wordwrap = function(t, e) {
        e = e || 64;
        if (!t) {
            return t
        }
        var i = "(.{1," + e + "})( +|$\\n?)|(.{1," + e + "})";
        return t.match(RegExp(i, "g")).join("\\n")
    }
    ;
    Ki.prototype.getPrivateKey = function() {
        var t = "-----BEGIN RSA PRIVATE KEY-----\\n";
        t += this.wordwrap(this.getPrivateBaseKeyB64()) + "\\n";
        t += "-----END RSA PRIVATE KEY-----";
        return t
    }
    ;
    Ki.prototype.getPublicKey = function() {
        var t = "-----BEGIN PUBLIC KEY-----\\n";
        t += this.wordwrap(this.getPublicBaseKeyB64()) + "\\n";
        t += "-----END PUBLIC KEY-----";
        return t
    }
    ;
    Ki.prototype.hasPublicKeyProperty = function(t) {
        t = t || {};
        return t.hasOwnProperty("n") && t.hasOwnProperty("e")
    }
    ;
    Ki.prototype.hasPrivateKeyProperty = function(t) {
        t = t || {};
        return t.hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
    }
    ;
    Ki.prototype.parsePropertiesFrom = function(t) {
        this.n = t.n;
        this.e = t.e;
        if (t.hasOwnProperty("d")) {
            this.d = t.d;
            this.p = t.p;
            this.q = t.q;
            this.dmp1 = t.dmp1;
            this.dmq1 = t.dmq1;
            this.coeff = t.coeff
        }
    }
    ;
    var Gi = function(t) {
        Ki.call(this);
        if (t) {
            if (typeof t === "string") {
                this.parseKey(t)
            } else if (this.hasPrivateKeyProperty(t) || this.hasPublicKeyProperty(t)) {
                this.parsePropertiesFrom(t)
            }
        }
    };
    Gi.prototype = new Ki;
    Gi.prototype.constructor = Gi;
    var $i = function(t) {
        t = t || {};
        this.default_key_size = parseInt(t.default_key_size) || 1024;
        this.default_public_exponent = t.default_public_exponent || "010001";
        this.log = t.log || false;
        this.key = null
    };
    $i.prototype.setKey = function(t) {
        if (this.log && this.key) {
            console.warn("A key was already set, overriding existing.")
        }
        this.key = new Gi(t)
    }
    ;
    $i.prototype.setPrivateKey = function(t) {
        this.setKey(t)
    }
    ;
    $i.prototype.setPublicKey = function(t) {
        this.setKey(t)
    }
    ;
    $i.prototype.decrypt = function(t) {
        try {
            return this.getKey().decrypt(Hi(t))
        } catch (e) {
            return false
        }
    }
    ;
    $i.prototype.encrypt = function(t) {
        try {
            return Ci(this.getKey().encrypt(t))
        } catch (e) {
            return false
        }
    }
    ;
    $i.prototype.getKey = function(t) {
        if (!this.key) {
            this.key = new Gi;
            if (t && {}.toString.call(t) === "[object Function]") {
                this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                return
            }
            this.key.generate(this.default_key_size, this.default_public_exponent)
        }
        return this.key
    }
    ;
    $i.prototype.getPrivateKey = function() {
        return this.getKey().getPrivateKey()
    }
    ;
    $i.prototype.getPrivateKeyB64 = function() {
        return this.getKey().getPrivateBaseKeyB64()
    }
    ;
    $i.prototype.getPublicKey = function() {
        return this.getKey().getPublicKey()
    }
    ;
    $i.prototype.getPublicKeyB64 = function() {
        return this.getKey().getPublicBaseKeyB64()
    }
    ;
    $i.version = "2.3.0";
    t.JSEncrypt = $i
}
)(JSEncryptExports);
(function(t, e) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = e
    } else if (typeof define === "function" && define.amd) {
        define(e)
    } else {
        t.JSEncrypt = e
    }
}
)(this, JSEncryptExports.JSEncrypt);
        
        function getpwd(pwd){
        var publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDcQaCtHVStcFp1bvx6FY/9B8ezfY//K6hczGBCi4qjLV0xs30dJ22a63PRXBf/jMdnC4x5/+UU6/l8WkZW4t0EIPcInQHsJ1ExLxMqynutzVFjztU3sUE+ZG12/QfkiBRNoFNhxD2hMyZfaexxnUUrGsXJo29jUp+f6Pfwi2kRjwIDAQAB"
            var c = new JSEncrypt;
            c.setPublicKey(publicKey);
            return c.encrypt(pwd);
        }
        
        """

        pwd = execjs.compile(js_pwd).call("getpwd", "222")
        return pwd

    def login_(self):
        self.sess.get("https://login.gome.com.cn/login?intcmp=sy-public01012")
        rews = self.sess.post("https://login.gome.com.cn/isShowAuthenticCode.no?sendtimestamp=" + str(int(time.time() * 1000)), data={"loginName": self.user})

        print(rews.content.decode())
        # data = self.load_data("data.txt")
        # data["loginName"] = self.user
        # data["password"] = self.get_pwd()
        # pprint(data)
        # self.sess.headers = {
        #     "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
        #     "origin": "https://login.gome.com.cn",
        #     "referer": "https://login.gome.com.cn/login?intcmp=sy-public01012",
        #     "sec-fetch-mode": "cors",
        #     "sec-fetch-site": "same-origin",
        #
        # }
        #
        # response = self.sess.post(self.login_url)
        # print(response.content.decode())


if __name__ == '__main__':
    user = "11122222"
    pwd = "22211111"
    login = Login(user, pwd)
    login.login_()
