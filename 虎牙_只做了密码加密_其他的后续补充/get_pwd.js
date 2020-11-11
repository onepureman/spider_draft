function getpwd(pwd) {
    return toHex(core(toArray(pwd)))
}

function toArray(e) {
                for (var t = (e.length + 8 >> 6) + 1, o = new Array(16 * t), a = 0; 16 * t > a; a++)
                    o[a] = 0;
                for (a = 0; a < e.length; a++)
                    o[a >> 2] |= e.charCodeAt(a) << 24 - 8 * (3 & a);
                return o[a >> 2] |= 128 << 24 - 8 * (3 & a),
                o[16 * t - 1] = 8 * e.length,
                o
            }
function toHex(e) {
    for (var t = "0123456789abcdef", o = "", a = 0; a < 4 * e.length; a++)
        o += t.charAt(e[a >> 2] >> 8 * (3 - a % 4) + 4 & 15) + t.charAt(e[a >> 2] >> 8 * (3 - a % 4) & 15);
    return o
}
function core(e) {
    for (var t = e, o = new Array(80), a = 1732584193, n = -271733879, s = -1732584194, i = 271733878, r = -1009589776, c = 0; c < t.length; c += 16) {
        for (var d = a, l = n, u = s, p = i, h = r, m = 0; 80 > m; m++) {
            o[m] = 16 > m ? t[c + m] : rol(o[m - 3] ^ o[m - 8] ^ o[m - 14] ^ o[m - 16], 1);
            var g = add(add(rol(a, 5), ft(m, n, s, i)), add(add(r, o[m]), kt(m)));
            r = i,
            i = s,
            s = rol(n, 30),
            n = a,
            a = g
        }
        a = add(a, d),
        n = add(n, l),
        s = add(s, u),
        i = add(i, p),
        r = add(r, h)
    }
    return new Array(a,n,s,i,r)
}


function add(e, t) {
                var o = (65535 & e) + (65535 & t)
                  , a = (e >> 16) + (t >> 16) + (o >> 16);
                return a << 16 | 65535 & o
            }
function rol (e, t) {
    return e << t | e >>> 32 - t
}
function ft(e, t, o, a) {
    return 20 > e ? t & o | ~t & a : 40 > e ? t ^ o ^ a : 60 > e ? t & o | t & a | o & a : t ^ o ^ a
}
function kt(e) {
    return 20 > e ? 1518500249 : 40 > e ? 1859775393 : 60 > e ? -1894007588 : -899497514
}
