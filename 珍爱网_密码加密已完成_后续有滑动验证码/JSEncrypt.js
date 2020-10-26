/*! JSEncrypt v2.3.1 | https://npmcdn.com/jsencrypt@2.3.1/LICENSE.txt */
!function(t, e) {
    "function" == typeof define && define.amd ? define(["exports"], e) : e("object" == typeof exports && "string" != typeof exports.nodeName ? module.exports : t)
}(this, function(t) {
    function e(t, e, r) {
        null != t && ("number" == typeof t ? this.fromNumber(t, e, r) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
    }
    function r() {
        return new e(null)
    }
    function s(t, e, r, s, i, n) {
        for (; --n >= 0; ) {
            var o = e * this[t++] + r[s] + i;
            i = Math.floor(o / 67108864),
            r[s++] = 67108863 & o
        }
        return i
    }
    function i(t, e, r, s, i, n) {
        for (var o = 32767 & e, h = e >> 15; --n >= 0; ) {
            var a = 32767 & this[t]
              , u = this[t++] >> 15
              , p = h * a + u * o;
            a = o * a + ((32767 & p) << 15) + r[s] + (1073741823 & i),
            i = (a >>> 30) + (p >>> 15) + h * u + (i >>> 30),
            r[s++] = 1073741823 & a
        }
        return i
    }
    function n(t, e, r, s, i, n) {
        for (var o = 16383 & e, h = e >> 14; --n >= 0; ) {
            var a = 16383 & this[t]
              , u = this[t++] >> 14
              , p = h * a + u * o;
            a = o * a + ((16383 & p) << 14) + r[s] + i,
            i = (a >> 28) + (p >> 14) + h * u,
            r[s++] = 268435455 & a
        }
        return i
    }
    function o(t) {
        return pt.charAt(t)
    }
    function h(t, e) {
        var r = ct[t.charCodeAt(e)];
        return null == r ? -1 : r
    }
    function a(t) {
        for (var e = this.t - 1; e >= 0; --e)
            t[e] = this[e];
        t.t = this.t,
        t.s = this.s
    }
    function u(t) {
        this.t = 1,
        this.s = t < 0 ? -1 : 0,
        t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
    }
    function p(t) {
        var e = r();
        return e.fromInt(t),
        e
    }
    function c(t, r) {
        var s;
        if (16 == r)
            s = 4;
        else if (8 == r)
            s = 3;
        else if (256 == r)
            s = 8;
        else if (2 == r)
            s = 1;
        else if (32 == r)
            s = 5;
        else {
            if (4 != r)
                return void this.fromRadix(t, r);
            s = 2
        }
        this.t = 0,
        this.s = 0;
        for (var i = t.length, n = !1, o = 0; --i >= 0; ) {
            var a = 8 == s ? 255 & t[i] : h(t, i);
            a < 0 ? "-" == t.charAt(i) && (n = !0) : (n = !1,
            0 == o ? this[this.t++] = a : o + s > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - o) - 1) << o,
            this[this.t++] = a >> this.DB - o) : this[this.t - 1] |= a << o,
            o += s,
            o >= this.DB && (o -= this.DB))
        }
        8 == s && 0 != (128 & t[0]) && (this.s = -1,
        o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)),
        this.clamp(),
        n && e.ZERO.subTo(this, this)
    }
    function f() {
        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
            --this.t
    }
    function l(t) {
        if (this.s < 0)
            return "-" + this.negate().toString(t);
        var e;
        if (16 == t)
            e = 4;
        else if (8 == t)
            e = 3;
        else if (2 == t)
            e = 1;
        else if (32 == t)
            e = 5;
        else {
            if (4 != t)
                return this.toRadix(t);
            e = 2
        }
        var r, s = (1 << e) - 1, i = !1, n = "", h = this.t, a = this.DB - h * this.DB % e;
        if (h-- > 0)
            for (a < this.DB && (r = this[h] >> a) > 0 && (i = !0,
            n = o(r)); h >= 0; )
                a < e ? (r = (this[h] & (1 << a) - 1) << e - a,
                r |= this[--h] >> (a += this.DB - e)) : (r = this[h] >> (a -= e) & s,
                a <= 0 && (a += this.DB,
                --h)),
                r > 0 && (i = !0),
                i && (n += o(r));
        return i ? n : "0"
    }
    function g() {
        var t = r();
        return e.ZERO.subTo(this, t),
        t
    }
    function d() {
        return this.s < 0 ? this.negate() : this
    }
    function v(t) {
        var e = this.s - t.s;
        if (0 != e)
            return e;
        var r = this.t;
        if (e = r - t.t,
        0 != e)
            return this.s < 0 ? -e : e;
        for (; --r >= 0; )
            if (0 != (e = this[r] - t[r]))
                return e;
        return 0
    }
    function m(t) {
        var e, r = 1;
        return 0 != (e = t >>> 16) && (t = e,
        r += 16),
        0 != (e = t >> 8) && (t = e,
        r += 8),
        0 != (e = t >> 4) && (t = e,
        r += 4),
        0 != (e = t >> 2) && (t = e,
        r += 2),
        0 != (e = t >> 1) && (t = e,
        r += 1),
        r
    }
    function y() {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + m(this[this.t - 1] ^ this.s & this.DM)
    }
    function b(t, e) {
        var r;
        for (r = this.t - 1; r >= 0; --r)
            e[r + t] = this[r];
        for (r = t - 1; r >= 0; --r)
            e[r] = 0;
        e.t = this.t + t,
        e.s = this.s
    }
    function S(t, e) {
        for (var r = t; r < this.t; ++r)
            e[r - t] = this[r];
        e.t = Math.max(this.t - t, 0),
        e.s = this.s
    }
    function w(t, e) {
        var r, s = t % this.DB, i = this.DB - s, n = (1 << i) - 1, o = Math.floor(t / this.DB), h = this.s << s & this.DM;
        for (r = this.t - 1; r >= 0; --r)
            e[r + o + 1] = this[r] >> i | h,
            h = (this[r] & n) << s;
        for (r = o - 1; r >= 0; --r)
            e[r] = 0;
        e[o] = h,
        e.t = this.t + o + 1,
        e.s = this.s,
        e.clamp()
    }
    function x(t, e) {
        e.s = this.s;
        var r = Math.floor(t / this.DB);
        if (r >= this.t)
            return void (e.t = 0);
        var s = t % this.DB
          , i = this.DB - s
          , n = (1 << s) - 1;
        e[0] = this[r] >> s;
        for (var o = r + 1; o < this.t; ++o)
            e[o - r - 1] |= (this[o] & n) << i,
            e[o - r] = this[o] >> s;
        s > 0 && (e[this.t - r - 1] |= (this.s & n) << i),
        e.t = this.t - r,
        e.clamp()
    }
    function T(t, e) {
        for (var r = 0, s = 0, i = Math.min(t.t, this.t); r < i; )
            s += this[r] - t[r],
            e[r++] = s & this.DM,
            s >>= this.DB;
        if (t.t < this.t) {
            for (s -= t.s; r < this.t; )
                s += this[r],
                e[r++] = s & this.DM,
                s >>= this.DB;
            s += this.s
        } else {
            for (s += this.s; r < t.t; )
                s -= t[r],
                e[r++] = s & this.DM,
                s >>= this.DB;
            s -= t.s
        }
        e.s = s < 0 ? -1 : 0,
        s < -1 ? e[r++] = this.DV + s : s > 0 && (e[r++] = s),
        e.t = r,
        e.clamp()
    }
    function D(t, r) {
        var s = this.abs()
          , i = t.abs()
          , n = s.t;
        for (r.t = n + i.t; --n >= 0; )
            r[n] = 0;
        for (n = 0; n < i.t; ++n)
            r[n + s.t] = s.am(0, i[n], r, n, 0, s.t);
        r.s = 0,
        r.clamp(),
        this.s != t.s && e.ZERO.subTo(r, r)
    }
    function E(t) {
        for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0; )
            t[r] = 0;
        for (r = 0; r < e.t - 1; ++r) {
            var s = e.am(r, e[r], t, 2 * r, 0, 1);
            (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, s, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV,
            t[r + e.t + 1] = 1)
        }
        t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)),
        t.s = 0,
        t.clamp()
    }
    function A(t, s, i) {
        var n = t.abs();
        if (!(n.t <= 0)) {
            var o = this.abs();
            if (o.t < n.t)
                return null != s && s.fromInt(0),
                void (null != i && this.copyTo(i));
            null == i && (i = r());
            var h = r()
              , a = this.s
              , u = t.s
              , p = this.DB - m(n[n.t - 1]);
            p > 0 ? (n.lShiftTo(p, h),
            o.lShiftTo(p, i)) : (n.copyTo(h),
            o.copyTo(i));
            var c = h.t
              , f = h[c - 1];
            if (0 != f) {
                var l = f * (1 << this.F1) + (c > 1 ? h[c - 2] >> this.F2 : 0)
                  , g = this.FV / l
                  , d = (1 << this.F1) / l
                  , v = 1 << this.F2
                  , y = i.t
                  , b = y - c
                  , S = null == s ? r() : s;
                for (h.dlShiftTo(b, S),
                i.compareTo(S) >= 0 && (i[i.t++] = 1,
                i.subTo(S, i)),
                e.ONE.dlShiftTo(c, S),
                S.subTo(h, h); h.t < c; )
                    h[h.t++] = 0;
                for (; --b >= 0; ) {
                    var w = i[--y] == f ? this.DM : Math.floor(i[y] * g + (i[y - 1] + v) * d);
                    if ((i[y] += h.am(0, w, i, b, 0, c)) < w)
                        for (h.dlShiftTo(b, S),
                        i.subTo(S, i); i[y] < --w; )
                            i.subTo(S, i)
                }
                null != s && (i.drShiftTo(c, s),
                a != u && e.ZERO.subTo(s, s)),
                i.t = c,
                i.clamp(),
                p > 0 && i.rShiftTo(p, i),
                a < 0 && e.ZERO.subTo(i, i)
            }
        }
    }
    function O(t) {
        var s = r();
        return this.abs().divRemTo(t, null, s),
        this.s < 0 && s.compareTo(e.ZERO) > 0 && t.subTo(s, s),
        s
    }
    function C(t) {
        this.m = t
    }
    function B(t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
    }
    function N(t) {
        return t
    }
    function M(t) {
        t.divRemTo(this.m, null, t)
    }
    function I(t, e, r) {
        t.multiplyTo(e, r),
        this.reduce(r)
    }
    function P(t, e) {
        t.squareTo(e),
        this.reduce(e)
    }
    function V() {
        if (this.t < 1)
            return 0;
        var t = this[0];
        if (0 == (1 & t))
            return 0;
        var e = 3 & t;
        return e = e * (2 - (15 & t) * e) & 15,
        e = e * (2 - (255 & t) * e) & 255,
        e = e * (2 - ((65535 & t) * e & 65535)) & 65535,
        e = e * (2 - t * e % this.DV) % this.DV,
        e > 0 ? this.DV - e : -e
    }
    function k(t) {
        this.m = t,
        this.mp = t.invDigit(),
        this.mpl = 32767 & this.mp,
        this.mph = this.mp >> 15,
        this.um = (1 << t.DB - 15) - 1,
        this.mt2 = 2 * t.t
    }
    function H(t) {
        var s = r();
        return t.abs().dlShiftTo(this.m.t, s),
        s.divRemTo(this.m, null, s),
        t.s < 0 && s.compareTo(e.ZERO) > 0 && this.m.subTo(s, s),
        s
    }
    function R(t) {
        var e = r();
        return t.copyTo(e),
        this.reduce(e),
        e
    }
    function _(t) {
        for (; t.t <= this.mt2; )
            t[t.t++] = 0;
        for (var e = 0; e < this.m.t; ++e) {
            var r = 32767 & t[e]
              , s = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
            for (r = e + this.m.t,
            t[r] += this.m.am(0, s, t, e, 0, this.m.t); t[r] >= t.DV; )
                t[r] -= t.DV,
                t[++r]++
        }
        t.clamp(),
        t.drShiftTo(this.m.t, t),
        t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
    }
    function L(t, e) {
        t.squareTo(e),
        this.reduce(e)
    }
    function F(t, e, r) {
        t.multiplyTo(e, r),
        this.reduce(r)
    }
    function q() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
    }
    function U(t, s) {
        if (t > 4294967295 || t < 1)
            return e.ONE;
        var i = r()
          , n = r()
          , o = s.convert(this)
          , h = m(t) - 1;
        for (o.copyTo(i); --h >= 0; )
            if (s.sqrTo(i, n),
            (t & 1 << h) > 0)
                s.mulTo(n, o, i);
            else {
                var a = i;
                i = n,
                n = a
            }
        return s.revert(i)
    }
    function Z(t, e) {
        var r;
        return r = t < 256 || e.isEven() ? new C(e) : new k(e),
        this.exp(t, r)
    }
    function j() {
        this.i = 0,
        this.j = 0,
        this.S = new Array
    }
    function K(t) {
        var e, r, s;
        for (e = 0; e < 256; ++e)
            this.S[e] = e;
        for (r = 0,
        e = 0; e < 256; ++e)
            r = r + this.S[e] + t[e % t.length] & 255,
            s = this.S[e],
            this.S[e] = this.S[r],
            this.S[r] = s;
        this.i = 0,
        this.j = 0
    }
    function z() {
        var t;
        return this.i = this.i + 1 & 255,
        this.j = this.j + this.S[this.i] & 255,
        t = this.S[this.i],
        this.S[this.i] = this.S[this.j],
        this.S[this.j] = t,
        this.S[t + this.S[this.i] & 255]
    }
    function G() {
        return new j
    }
    function J() {
        if (null == ft) {
            for (ft = G(); gt < dt; ) {
                var t = Math.floor(65536 * Math.random());
                lt[gt++] = 255 & t
            }
            for (ft.init(lt),
            gt = 0; gt < lt.length; ++gt)
                lt[gt] = 0;
            gt = 0
        }
        return ft.next()
    }
    function Q(t) {
        var e;
        for (e = 0; e < t.length; ++e)
            t[e] = J()
    }
    function X() {}
    function $(t, r) {
        return new e(t,r)
    }
    function W(t, r) {
        if (r < t.length + 11)
            return console.error("Message too long for RSA"),
            null;
        for (var s = new Array, i = t.length - 1; i >= 0 && r > 0; ) {
            var n = t.charCodeAt(i--);
            n < 128 ? s[--r] = n : n > 127 && n < 2048 ? (s[--r] = 63 & n | 128,
            s[--r] = n >> 6 | 192) : (s[--r] = 63 & n | 128,
            s[--r] = n >> 6 & 63 | 128,
            s[--r] = n >> 12 | 224)
        }
        s[--r] = 0;
        for (var o = new X, h = new Array; r > 2; ) {
            for (h[0] = 0; 0 == h[0]; )
                o.nextBytes(h);
            s[--r] = h[0]
        }
        return s[--r] = 2,
        s[--r] = 0,
        new e(s)
    }
    function Y() {
        this.n = null,
        this.e = 0,
        this.d = null,
        this.p = null,
        this.q = null,
        this.dmp1 = null,
        this.dmq1 = null,
        this.coeff = null
    }
    function tt(t, e) {
        null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = $(t, 16),
        this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
    }
    function et(t) {
        return t.modPowInt(this.e, this.n)
    }
    function rt(t) {
        var e = W(t, this.n.bitLength() + 7 >> 3);
        if (null == e)
            return null;
        var r = this.doPublic(e);
        if (null == r)
            return null;
        var s = r.toString(16);
        return 0 == (1 & s.length) ? s : "0" + s
    }
    function st(t) {
        var e, r, s = "";
        for (e = 0; e + 3 <= t.length; e += 3)
            r = parseInt(t.substring(e, e + 3), 16),
            s += bt.charAt(r >> 6) + bt.charAt(63 & r);
        for (e + 1 == t.length ? (r = parseInt(t.substring(e, e + 1), 16),
        s += bt.charAt(r << 2)) : e + 2 == t.length && (r = parseInt(t.substring(e, e + 2), 16),
        s += bt.charAt(r >> 2) + bt.charAt((3 & r) << 4)); (3 & s.length) > 0; )
            s += St;
        return s
    }
    // Copyright (c) 2005  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.
    var it, nt = 0xdeadbeefcafe, ot = 15715070 == (16777215 & nt);
    ot && "Microsoft Internet Explorer" == navigator.appName ? (e.prototype.am = i,
    it = 30) : ot && "Netscape" != navigator.appName ? (e.prototype.am = s,
    it = 26) : (e.prototype.am = n,
    it = 28),
    e.prototype.DB = it,
    e.prototype.DM = (1 << it) - 1,
    e.prototype.DV = 1 << it;
    var ht = 52;
    e.prototype.FV = Math.pow(2, ht),
    e.prototype.F1 = ht - it,
    e.prototype.F2 = 2 * it - ht;
    var at, ut, pt = "0123456789abcdefghijklmnopqrstuvwxyz", ct = new Array;
    for (at = "0".charCodeAt(0),
    ut = 0; ut <= 9; ++ut)
        ct[at++] = ut;
    for (at = "a".charCodeAt(0),
    ut = 10; ut < 36; ++ut)
        ct[at++] = ut;
    for (at = "A".charCodeAt(0),
    ut = 10; ut < 36; ++ut)
        ct[at++] = ut;
    C.prototype.convert = B,
    C.prototype.revert = N,
    C.prototype.reduce = M,
    C.prototype.mulTo = I,
    C.prototype.sqrTo = P,
    k.prototype.convert = H,
    k.prototype.revert = R,
    k.prototype.reduce = _,
    k.prototype.mulTo = F,
    k.prototype.sqrTo = L,
    e.prototype.copyTo = a,
    e.prototype.fromInt = u,
    e.prototype.fromString = c,
    e.prototype.clamp = f,
    e.prototype.dlShiftTo = b,
    e.prototype.drShiftTo = S,
    e.prototype.lShiftTo = w,
    e.prototype.rShiftTo = x,
    e.prototype.subTo = T,
    e.prototype.multiplyTo = D,
    e.prototype.squareTo = E,
    e.prototype.divRemTo = A,
    e.prototype.invDigit = V,
    e.prototype.isEven = q,
    e.prototype.exp = U,
    e.prototype.toString = l,
    e.prototype.negate = g,
    e.prototype.abs = d,
    e.prototype.compareTo = v,
    e.prototype.bitLength = y,
    e.prototype.mod = O,
    e.prototype.modPowInt = Z,
    e.ZERO = p(0),
    e.ONE = p(1),
    j.prototype.init = K,
    j.prototype.next = z;
    var ft, lt, gt, dt = 256;
    if (null == lt) {
        lt = new Array,
        gt = 0;
        var vt;
        if (window.crypto && window.crypto.getRandomValues) {
            var mt = new Uint32Array(256);
            for (window.crypto.getRandomValues(mt),
            vt = 0; vt < mt.length; ++vt)
                lt[gt++] = 255 & mt[vt]
        }
        var yt = function(t) {
            if (this.count = this.count || 0,
            this.count >= 256 || gt >= dt)
                return void (window.removeEventListener ? window.removeEventListener("mousemove", yt, !1) : window.detachEvent && window.detachEvent("onmousemove", yt));
            try {
                var e = t.x + t.y;
                lt[gt++] = 255 & e,
                this.count += 1
            } catch (r) {}
        };
        window.addEventListener ? window.addEventListener("mousemove", yt, !1) : window.attachEvent && window.attachEvent("onmousemove", yt)
    }
    X.prototype.nextBytes = Q,
    Y.prototype.doPublic = et,
    Y.prototype.setPublic = tt,
    Y.prototype.encrypt = rt;
    var bt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
      , St = "=";
    // Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
    // copyright notice and this permission notice appear in all copies.
    // 
    // THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    // WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    // MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    // ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    // WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
    // ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    // OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
    !function(t) {
        "use strict";
        var e, r = {};
        r.decode = function(r) {
            var s;
            if (e === t) {
                var i = "0123456789ABCDEF"
                  , n = " \f\n\r\t \u2028\u2029";
                for (e = [],
                s = 0; s < 16; ++s)
                    e[i.charAt(s)] = s;
                for (i = i.toLowerCase(),
                s = 10; s < 16; ++s)
                    e[i.charAt(s)] = s;
                for (s = 0; s < n.length; ++s)
                    e[n.charAt(s)] = -1
            }
            var o = []
              , h = 0
              , a = 0;
            for (s = 0; s < r.length; ++s) {
                var u = r.charAt(s);
                if ("=" == u)
                    break;
                if (u = e[u],
                u != -1) {
                    if (u === t)
                        throw "Illegal character at offset " + s;
                    h |= u,
                    ++a >= 2 ? (o[o.length] = h,
                    h = 0,
                    a = 0) : h <<= 4
                }
            }
            if (a)
                throw "Hex encoding incomplete: 4 bits missing";
            return o
        }
        ,
        window.Hex = r
    }(),
    // Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
    // copyright notice and this permission notice appear in all copies.
    // 
    // THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    // WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    // MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    // ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    // WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
    // ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    // OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
    function(t) {
        "use strict";
        var e, r = {};
        r.decode = function(r) {
            var s;
            if (e === t) {
                var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                  , n = "= \f\n\r\t \u2028\u2029";
                for (e = [],
                s = 0; s < 64; ++s)
                    e[i.charAt(s)] = s;
                for (s = 0; s < n.length; ++s)
                    e[n.charAt(s)] = -1
            }
            var o = []
              , h = 0
              , a = 0;
            for (s = 0; s < r.length; ++s) {
                var u = r.charAt(s);
                if ("=" == u)
                    break;
                if (u = e[u],
                u != -1) {
                    if (u === t)
                        throw "Illegal character at offset " + s;
                    h |= u,
                    ++a >= 4 ? (o[o.length] = h >> 16,
                    o[o.length] = h >> 8 & 255,
                    o[o.length] = 255 & h,
                    h = 0,
                    a = 0) : h <<= 6
                }
            }
            switch (a) {
            case 1:
                throw "Base64 encoding incomplete: at least 2 bits missing";
            case 2:
                o[o.length] = h >> 10;
                break;
            case 3:
                o[o.length] = h >> 16,
                o[o.length] = h >> 8 & 255
            }
            return o
        }
        ,
        r.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
        r.unarmor = function(t) {
            var e = r.re.exec(t);
            if (e)
                if (e[1])
                    t = e[1];
                else {
                    if (!e[2])
                        throw "RegExp out of sync";
                    t = e[2]
                }
            return r.decode(t)
        }
        ,
        window.Base64 = r
    }(),
    // Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
    // copyright notice and this permission notice appear in all copies.
    // 
    // THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    // WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    // MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    // ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    // WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
    // ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    // OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
    function(t) {
        "use strict";
        function e(t, r) {
            t instanceof e ? (this.enc = t.enc,
            this.pos = t.pos) : (this.enc = t,
            this.pos = r)
        }
        function r(t, e, r, s, i) {
            this.stream = t,
            this.header = e,
            this.length = r,
            this.tag = s,
            this.sub = i
        }
        var s = 100
          , i = "…"
          , n = {
            tag: function(t, e) {
                var r = document.createElement(t);
                return r.className = e,
                r
            },
            text: function(t) {
                return document.createTextNode(t)
            }
        };
        e.prototype.get = function(e) {
            if (e === t && (e = this.pos++),
            e >= this.enc.length)
                throw "Requesting byte offset " + e + " on a stream of length " + this.enc.length;
            return this.enc[e]
        }
        ,
        e.prototype.hexDigits = "0123456789ABCDEF",
        e.prototype.hexByte = function(t) {
            return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
        }
        ,
        e.prototype.hexDump = function(t, e, r) {
            for (var s = "", i = t; i < e; ++i)
                if (s += this.hexByte(this.get(i)),
                r !== !0)
                    switch (15 & i) {
                    case 7:
                        s += "  ";
                        break;
                    case 15:
                        s += "\n";
                        break;
                    default:
                        s += " "
                    }
            return s
        }
        ,
        e.prototype.parseStringISO = function(t, e) {
            for (var r = "", s = t; s < e; ++s)
                r += String.fromCharCode(this.get(s));
            return r
        }
        ,
        e.prototype.parseStringUTF = function(t, e) {
            for (var r = "", s = t; s < e; ) {
                var i = this.get(s++);
                r += i < 128 ? String.fromCharCode(i) : i > 191 && i < 224 ? String.fromCharCode((31 & i) << 6 | 63 & this.get(s++)) : String.fromCharCode((15 & i) << 12 | (63 & this.get(s++)) << 6 | 63 & this.get(s++))
            }
            return r
        }
        ,
        e.prototype.parseStringBMP = function(t, e) {
            for (var r = "", s = t; s < e; s += 2) {
                var i = this.get(s)
                  , n = this.get(s + 1);
                r += String.fromCharCode((i << 8) + n)
            }
            return r
        }
        ,
        e.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
        e.prototype.parseTime = function(t, e) {
            var r = this.parseStringISO(t, e)
              , s = this.reTime.exec(r);
            return s ? (r = s[1] + "-" + s[2] + "-" + s[3] + " " + s[4],
            s[5] && (r += ":" + s[5],
            s[6] && (r += ":" + s[6],
            s[7] && (r += "." + s[7]))),
            s[8] && (r += " UTC",
            "Z" != s[8] && (r += s[8],
            s[9] && (r += ":" + s[9]))),
            r) : "Unrecognized time: " + r
        }
        ,
        e.prototype.parseInteger = function(t, e) {
            var r = e - t;
            if (r > 4) {
                r <<= 3;
                var s = this.get(t);
                if (0 === s)
                    r -= 8;
                else
                    for (; s < 128; )
                        s <<= 1,
                        --r;
                return "(" + r + " bit)"
            }
            for (var i = 0, n = t; n < e; ++n)
                i = i << 8 | this.get(n);
            return i
        }
        ,
        e.prototype.parseBitString = function(t, e) {
            var r = this.get(t)
              , s = (e - t - 1 << 3) - r
              , i = "(" + s + " bit)";
            if (s <= 20) {
                var n = r;
                i += " ";
                for (var o = e - 1; o > t; --o) {
                    for (var h = this.get(o), a = n; a < 8; ++a)
                        i += h >> a & 1 ? "1" : "0";
                    n = 0
                }
            }
            return i
        }
        ,
        e.prototype.parseOctetString = function(t, e) {
            var r = e - t
              , n = "(" + r + " byte) ";
            r > s && (e = t + s);
            for (var o = t; o < e; ++o)
                n += this.hexByte(this.get(o));
            return r > s && (n += i),
            n
        }
        ,
        e.prototype.parseOID = function(t, e) {
            for (var r = "", s = 0, i = 0, n = t; n < e; ++n) {
                var o = this.get(n);
                if (s = s << 7 | 127 & o,
                i += 7,
                !(128 & o)) {
                    if ("" === r) {
                        var h = s < 80 ? s < 40 ? 0 : 1 : 2;
                        r = h + "." + (s - 40 * h)
                    } else
                        r += "." + (i >= 31 ? "bigint" : s);
                    s = i = 0
                }
            }
            return r
        }
        ,
        r.prototype.typeName = function() {
            if (this.tag === t)
                return "unknown";
            var e = this.tag >> 6
              , r = (this.tag >> 5 & 1,
            31 & this.tag);
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
        ,
        r.prototype.reSeemsASCII = /^[ -~]+$/,
        r.prototype.content = function() {
            if (this.tag === t)
                return null;
            var e = this.tag >> 6
              , r = 31 & this.tag
              , n = this.posContent()
              , o = Math.abs(this.length);
            if (0 !== e) {
                if (null !== this.sub)
                    return "(" + this.sub.length + " elem)";
                var h = this.stream.parseStringISO(n, n + Math.min(o, s));
                return this.reSeemsASCII.test(h) ? h.substring(0, 2 * s) + (h.length > 2 * s ? i : "") : this.stream.parseOctetString(n, n + o)
            }
            switch (r) {
            case 1:
                return 0 === this.stream.get(n) ? "false" : "true";
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
        ,
        r.prototype.toString = function() {
            return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
        }
        ,
        r.prototype.print = function(e) {
            if (e === t && (e = ""),
            document.writeln(e + this),
            null !== this.sub) {
                e += "  ";
                for (var r = 0, s = this.sub.length; r < s; ++r)
                    this.sub[r].print(e)
            }
        }
        ,
        r.prototype.toPrettyString = function(e) {
            e === t && (e = "");
            var r = e + this.typeName() + " @" + this.stream.pos;
            if (this.length >= 0 && (r += "+"),
            r += this.length,
            32 & this.tag ? r += " (constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (r += " (encapsulates)"),
            r += "\n",
            null !== this.sub) {
                e += "  ";
                for (var s = 0, i = this.sub.length; s < i; ++s)
                    r += this.sub[s].toPrettyString(e)
            }
            return r
        }
        ,
        r.prototype.toDOM = function() {
            var t = n.tag("div", "node");
            t.asn1 = this;
            var e = n.tag("div", "head")
              , r = this.typeName().replace(/_/g, " ");
            e.innerHTML = r;
            var s = this.content();
            if (null !== s) {
                s = String(s).replace(/</g, "&lt;");
                var i = n.tag("span", "preview");
                i.appendChild(n.text(s)),
                e.appendChild(i)
            }
            t.appendChild(e),
            this.node = t,
            this.head = e;
            var o = n.tag("div", "value");
            if (r = "Offset: " + this.stream.pos + "<br/>",
            r += "Length: " + this.header + "+",
            r += this.length >= 0 ? this.length : -this.length + " (undefined)",
            32 & this.tag ? r += "<br/>(constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (r += "<br/>(encapsulates)"),
            null !== s && (r += "<br/>Value:<br/><b>" + s + "</b>",
            "object" == typeof oids && 6 == this.tag)) {
                var h = oids[s];
                h && (h.d && (r += "<br/>" + h.d),
                h.c && (r += "<br/>" + h.c),
                h.w && (r += "<br/>(warning!)"))
            }
            o.innerHTML = r,
            t.appendChild(o);
            var a = n.tag("div", "sub");
            if (null !== this.sub)
                for (var u = 0, p = this.sub.length; u < p; ++u)
                    a.appendChild(this.sub[u].toDOM());
            return t.appendChild(a),
            e.onclick = function() {
                t.className = "node collapsed" == t.className ? "node" : "node collapsed"
            }
            ,
            t
        }
        ,
        r.prototype.posStart = function() {
            return this.stream.pos
        }
        ,
        r.prototype.posContent = function() {
            return this.stream.pos + this.header
        }
        ,
        r.prototype.posEnd = function() {
            return this.stream.pos + this.header + Math.abs(this.length)
        }
        ,
        r.prototype.fakeHover = function(t) {
            this.node.className += " hover",
            t && (this.head.className += " hover")
        }
        ,
        r.prototype.fakeOut = function(t) {
            var e = / ?hover/;
            this.node.className = this.node.className.replace(e, ""),
            t && (this.head.className = this.head.className.replace(e, ""))
        }
        ,
        r.prototype.toHexDOM_sub = function(t, e, r, s, i) {
            if (!(s >= i)) {
                var o = n.tag("span", e);
                o.appendChild(n.text(r.hexDump(s, i))),
                t.appendChild(o)
            }
        }
        ,
        r.prototype.toHexDOM = function(e) {
            var r = n.tag("span", "hex");
            if (e === t && (e = r),
            this.head.hexNode = r,
            this.head.onmouseover = function() {
                this.hexNode.className = "hexCurrent"
            }
            ,
            this.head.onmouseout = function() {
                this.hexNode.className = "hex"
            }
            ,
            r.asn1 = this,
            r.onmouseover = function() {
                var t = !e.selected;
                t && (e.selected = this.asn1,
                this.className = "hexCurrent"),
                this.asn1.fakeHover(t)
            }
            ,
            r.onmouseout = function() {
                var t = e.selected == this.asn1;
                this.asn1.fakeOut(t),
                t && (e.selected = null,
                this.className = "hex")
            }
            ,
            this.toHexDOM_sub(r, "tag", this.stream, this.posStart(), this.posStart() + 1),
            this.toHexDOM_sub(r, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent()),
            null === this.sub)
                r.appendChild(n.text(this.stream.hexDump(this.posContent(), this.posEnd())));
            else if (this.sub.length > 0) {
                var s = this.sub[0]
                  , i = this.sub[this.sub.length - 1];
                this.toHexDOM_sub(r, "intro", this.stream, this.posContent(), s.posStart());
                for (var o = 0, h = this.sub.length; o < h; ++o)
                    r.appendChild(this.sub[o].toHexDOM(e));
                this.toHexDOM_sub(r, "outro", this.stream, i.posEnd(), this.posEnd())
            }
            return r
        }
        ,
        r.prototype.toHexString = function(t) {
            return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
        }
        ,
        r.decodeLength = function(t) {
            var e = t.get()
              , r = 127 & e;
            if (r == e)
                return r;
            if (r > 3)
                throw "Length over 24 bits not supported at position " + (t.pos - 1);
            if (0 === r)
                return -1;
            e = 0;
            for (var s = 0; s < r; ++s)
                e = e << 8 | t.get();
            return e
        }
        ,
        r.hasContent = function(t, s, i) {
            if (32 & t)
                return !0;
            if (t < 3 || t > 4)
                return !1;
            var n = new e(i);
            3 == t && n.get();
            var o = n.get();
            if (o >> 6 & 1)
                return !1;
            try {
                var h = r.decodeLength(n);
                return n.pos - i.pos + h == s
            } catch (a) {
                return !1
            }
        }
        ,
        r.decode = function(t) {
            t instanceof e || (t = new e(t,0));
            var s = new e(t)
              , i = t.get()
              , n = r.decodeLength(t)
              , o = t.pos - s.pos
              , h = null;
            if (r.hasContent(i, n, t)) {
                var a = t.pos;
                if (3 == i && t.get(),
                h = [],
                n >= 0) {
                    for (var u = a + n; t.pos < u; )
                        h[h.length] = r.decode(t);
                    if (t.pos != u)
                        throw "Content size is not correct for container starting at offset " + a
                } else
                    try {
                        for (; ; ) {
                            var p = r.decode(t);
                            if (0 === p.tag)
                                break;
                            h[h.length] = p
                        }
                        n = a - t.pos
                    } catch (c) {
                        throw "Exception while decoding undefined length content: " + c
                    }
            } else
                t.pos += n;
            return new r(s,o,n,i,h)
        }
        ,
        r.test = function() {
            for (var t = [{
                value: [39],
                expected: 39
            }, {
                value: [129, 201],
                expected: 201
            }, {
                value: [131, 254, 220, 186],
                expected: 16702650
            }], s = 0, i = t.length; s < i; ++s) {
                var n = new e(t[s].value,0)
                  , o = r.decodeLength(n);
                o != t[s].expected && document.write("In test[" + s + "] expected " + t[s].expected + " got " + o + "\n")
            }
        }
        ,
        window.ASN1 = r
    }(),
    ASN1.prototype.getHexStringValue = function() {
        var t = this.toHexString()
          , e = 2 * this.header
          , r = 2 * this.length;
        return t.substr(e, r)
    }
    ,
    Y.prototype.parseKey = function(t) {
        try {
            var e = 0
              , r = 0
              , s = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/
              , i = s.test(t) ? Hex.decode(t) : Base64.unarmor(t)
              , n = ASN1.decode(i);
            if (3 === n.sub.length && (n = n.sub[2].sub[0]),
            9 === n.sub.length) {
                e = n.sub[1].getHexStringValue(),
                this.n = $(e, 16),
                r = n.sub[2].getHexStringValue(),
                this.e = parseInt(r, 16);
                var o = n.sub[3].getHexStringValue();
                this.d = $(o, 16);
                var h = n.sub[4].getHexStringValue();
                this.p = $(h, 16);
                var a = n.sub[5].getHexStringValue();
                this.q = $(a, 16);
                var u = n.sub[6].getHexStringValue();
                this.dmp1 = $(u, 16);
                var p = n.sub[7].getHexStringValue();
                this.dmq1 = $(p, 16);
                var c = n.sub[8].getHexStringValue();
                this.coeff = $(c, 16)
            } else {
                if (2 !== n.sub.length)
                    return !1;
                var f = n.sub[1]
                  , l = f.sub[0];
                e = l.sub[0].getHexStringValue(),
                this.n = $(e, 16),
                r = l.sub[1].getHexStringValue(),
                this.e = parseInt(r, 16)
            }
            return !0
        } catch (g) {
            return !1
        }
    }
    ,
    Y.prototype.hasPublicKeyProperty = function(t) {
        return t = t || {},
        t.hasOwnProperty("n") && t.hasOwnProperty("e")
    }
    ,
    Y.prototype.hasPrivateKeyProperty = function(t) {
        return t = t || {},
        t.hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
    }
    ,
    Y.prototype.parsePropertiesFrom = function(t) {
        this.n = t.n,
        this.e = t.e,
        t.hasOwnProperty("d") && (this.d = t.d,
        this.p = t.p,
        this.q = t.q,
        this.dmp1 = t.dmp1,
        this.dmq1 = t.dmq1,
        this.coeff = t.coeff)
    }
    ;
    var wt = function(t) {
        Y.call(this),
        t && ("string" == typeof t ? this.parseKey(t) : (this.hasPrivateKeyProperty(t) || this.hasPublicKeyProperty(t)) && this.parsePropertiesFrom(t))
    };
    wt.prototype = new Y,
    wt.prototype.constructor = wt;
    var xt = function(t) {
        t = t || {},
        this.default_key_size = parseInt(t.default_key_size) || 1024,
        this.default_public_exponent = t.default_public_exponent || "010001",
        this.log = t.log || !1,
        this.key = null
    };
    xt.prototype.setKey = function(t) {
        this.log && this.key && console.warn("A key was already set, overriding existing."),
        this.key = new wt(t)
    }
    ,
    xt.prototype.setPublicKey = function(t) {
        this.setKey(t)
    }
    ,
    xt.prototype.encrypt = function(t) {
        try {
            return st(this.getKey().encrypt(t))
        } catch (e) {
            return !1
        }
    }
    ,
    xt.prototype.getKey = function(t) {
        if (!this.key) {
            if (this.key = new wt,
            t && "[object Function]" === {}.toString.call(t))
                return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
            this.key.generate(this.default_key_size, this.default_public_exponent)
        }
        return this.key
    }
    ,
    xt.version = "2.3.1",
    t.JSEncrypt = xt
});
