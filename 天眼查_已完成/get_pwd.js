            function t(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }
    function n(e, t) {
        return e << t | e >>> 32 - t
    }
    function o(e, o, i, r, a, s) {
        return t(n(t(t(o, e), t(r, s)), a), i)
    }
    function i(e, t, n, i, r, a, s) {
        return o(t & n | ~t & i, e, t, r, a, s)
    }
    function r(e, t, n, i, r, a, s) {
        return o(t & i | n & ~i, e, t, r, a, s)
    }
    function a(e, t, n, i, r, a, s) {
        return o(t ^ n ^ i, e, t, r, a, s)
    }
    function s(e, t, n, i, r, a, s) {
        return o(n ^ (t | ~i), e, t, r, a, s)
    }
    function c(e, n) {
        e[n >> 5] |= 128 << n % 32,
        e[14 + (n + 64 >>> 9 << 4)] = n;
        var o, c, l, u, d, h = 1732584193, p = -271733879, f = -1732584194, m = 271733878;
        for (o = 0; o < e.length; o += 16)
            c = h,
            l = p,
            u = f,
            d = m,
            h = i(h, p, f, m, e[o], 7, -680876936),
            m = i(m, h, p, f, e[o + 1], 12, -389564586),
            f = i(f, m, h, p, e[o + 2], 17, 606105819),
            p = i(p, f, m, h, e[o + 3], 22, -1044525330),
            h = i(h, p, f, m, e[o + 4], 7, -176418897),
            m = i(m, h, p, f, e[o + 5], 12, 1200080426),
            f = i(f, m, h, p, e[o + 6], 17, -1473231341),
            p = i(p, f, m, h, e[o + 7], 22, -45705983),
            h = i(h, p, f, m, e[o + 8], 7, 1770035416),
            m = i(m, h, p, f, e[o + 9], 12, -1958414417),
            f = i(f, m, h, p, e[o + 10], 17, -42063),
            p = i(p, f, m, h, e[o + 11], 22, -1990404162),
            h = i(h, p, f, m, e[o + 12], 7, 1804603682),
            m = i(m, h, p, f, e[o + 13], 12, -40341101),
            f = i(f, m, h, p, e[o + 14], 17, -1502002290),
            p = i(p, f, m, h, e[o + 15], 22, 1236535329),
            h = r(h, p, f, m, e[o + 1], 5, -165796510),
            m = r(m, h, p, f, e[o + 6], 9, -1069501632),
            f = r(f, m, h, p, e[o + 11], 14, 643717713),
            p = r(p, f, m, h, e[o], 20, -373897302),
            h = r(h, p, f, m, e[o + 5], 5, -701558691),
            m = r(m, h, p, f, e[o + 10], 9, 38016083),
            f = r(f, m, h, p, e[o + 15], 14, -660478335),
            p = r(p, f, m, h, e[o + 4], 20, -405537848),
            h = r(h, p, f, m, e[o + 9], 5, 568446438),
            m = r(m, h, p, f, e[o + 14], 9, -1019803690),
            f = r(f, m, h, p, e[o + 3], 14, -187363961),
            p = r(p, f, m, h, e[o + 8], 20, 1163531501),
            h = r(h, p, f, m, e[o + 13], 5, -1444681467),
            m = r(m, h, p, f, e[o + 2], 9, -51403784),
            f = r(f, m, h, p, e[o + 7], 14, 1735328473),
            p = r(p, f, m, h, e[o + 12], 20, -1926607734),
            h = a(h, p, f, m, e[o + 5], 4, -378558),
            m = a(m, h, p, f, e[o + 8], 11, -2022574463),
            f = a(f, m, h, p, e[o + 11], 16, 1839030562),
            p = a(p, f, m, h, e[o + 14], 23, -35309556),
            h = a(h, p, f, m, e[o + 1], 4, -1530992060),
            m = a(m, h, p, f, e[o + 4], 11, 1272893353),
            f = a(f, m, h, p, e[o + 7], 16, -155497632),
            p = a(p, f, m, h, e[o + 10], 23, -1094730640),
            h = a(h, p, f, m, e[o + 13], 4, 681279174),
            m = a(m, h, p, f, e[o], 11, -358537222),
            f = a(f, m, h, p, e[o + 3], 16, -722521979),
            p = a(p, f, m, h, e[o + 6], 23, 76029189),
            h = a(h, p, f, m, e[o + 9], 4, -640364487),
            m = a(m, h, p, f, e[o + 12], 11, -421815835),
            f = a(f, m, h, p, e[o + 15], 16, 530742520),
            p = a(p, f, m, h, e[o + 2], 23, -995338651),
            h = s(h, p, f, m, e[o], 6, -198630844),
            m = s(m, h, p, f, e[o + 7], 10, 1126891415),
            f = s(f, m, h, p, e[o + 14], 15, -1416354905),
            p = s(p, f, m, h, e[o + 5], 21, -57434055),
            h = s(h, p, f, m, e[o + 12], 6, 1700485571),
            m = s(m, h, p, f, e[o + 3], 10, -1894986606),
            f = s(f, m, h, p, e[o + 10], 15, -1051523),
            p = s(p, f, m, h, e[o + 1], 21, -2054922799),
            h = s(h, p, f, m, e[o + 8], 6, 1873313359),
            m = s(m, h, p, f, e[o + 15], 10, -30611744),
            f = s(f, m, h, p, e[o + 6], 15, -1560198380),
            p = s(p, f, m, h, e[o + 13], 21, 1309151649),
            h = s(h, p, f, m, e[o + 4], 6, -145523070),
            m = s(m, h, p, f, e[o + 11], 10, -1120210379),
            f = s(f, m, h, p, e[o + 2], 15, 718787259),
            p = s(p, f, m, h, e[o + 9], 21, -343485551),
            h = t(h, c),
            p = t(p, l),
            f = t(f, u),
            m = t(m, d);
        return [h, p, f, m]
    }
    function l(e) {
        var t, n = "", o = 32 * e.length;
        for (t = 0; t < o; t += 8)
            n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return n
    }
    function u(e) {
        var t, n = [];
        for (n[(e.length >> 2) - 1] = void 0,
        t = 0; t < n.length; t += 1)
            n[t] = 0;
        var o = 8 * e.length;
        for (t = 0; t < o; t += 8)
            n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n
    }
    function d(e) {
        return l(c(u(e), 8 * e.length))
    }
    function h(e, t) {
        var n, o, i = u(e), r = [], a = [];
        for (r[15] = a[15] = void 0,
        i.length > 16 && (i = c(i, 8 * e.length)),
        n = 0; n < 16; n += 1)
            r[n] = 909522486 ^ i[n],
            a[n] = 1549556828 ^ i[n];
        return o = c(r.concat(u(t)), 512 + 8 * t.length),
        l(c(a.concat(o), 640))
    }
    function p(e) {
        var t, n, o = "0123456789abcdef", i = "";
        for (n = 0; n < e.length; n += 1)
            t = e.charCodeAt(n),
            i += o.charAt(t >>> 4 & 15) + o.charAt(15 & t);
        return i
    }
    function f(e) {
        return unescape(encodeURIComponent(e))
    }
    function m(e) {
        return d(f(e))
    }
    function getpwd(e) {
        return p(m(e))
    }
    function v(e, t) {
        return h(f(e), f(t))
    }