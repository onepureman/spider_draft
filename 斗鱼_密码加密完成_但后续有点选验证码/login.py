"""
Base_Url: https://www.douyu.com/
Author: jing
Modify: 2020/10/22
"""

import execjs
import requests


js_ = """
var CryptoJS = function(a, b) {
    var c = {}
      , d = c.lib = {}
      , e = function() {}
      , f = d.Base = {
        extend: function(a) {
            e.prototype = this;
            var b = new e;
            return a && b.mixIn(a),
            b.hasOwnProperty("init") || (b.init = function() {
                b.$super.init.apply(this, arguments)
            }
            ),
            b.init.prototype = b,
            b.$super = this,
            b
        },
        create: function() {
            var a = this.extend();
            return a.init.apply(a, arguments),
            a
        },
        init: function() {},
        mixIn: function(a) {
            for (var b in a)
                a.hasOwnProperty(b) && (this[b] = a[b]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    }
      , g = d.WordArray = f.extend({
        init: function(a, c) {
            a = this.words = a || [],
            this.sigBytes = c != b ? c : 4 * a.length
        },
        toString: function(a) {
            return (a || i).stringify(this)
        },
        concat: function(a) {
            var b = this.words
              , c = a.words
              , d = this.sigBytes;
            if (a = a.sigBytes,
            this.clamp(),
            d % 4)
                for (var e = 0; e < a; e++)
                    b[d + e >>> 2] |= (c[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((d + e) % 4);
            else if (65535 < c.length)
                for (e = 0; e < a; e += 4)
                    b[d + e >>> 2] = c[e >>> 2];
            else
                b.push.apply(b, c);
            return this.sigBytes += a,
            this
        },
        clamp: function() {
            var b = this.words
              , c = this.sigBytes;
            b[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4),
            b.length = a.ceil(c / 4)
        },
        clone: function() {
            var a = f.clone.call(this);
            return a.words = this.words.slice(0),
            a
        },
        random: function(b) {
            for (var c = [], d = 0; d < b; d += 4)
                c.push(4294967296 * a.random() | 0);
            return new g.init(c,b)
        }
    })
      , h = c.enc = {}
      , i = h.Hex = {
        stringify: function(a) {
            var b = a.words;
            a = a.sigBytes;
            for (var c = [], d = 0; d < a; d++) {
                var e = b[d >>> 2] >>> 24 - 8 * (d % 4) & 255;
                c.push((e >>> 4).toString(16)),
                c.push((15 & e).toString(16))
            }
            return c.join("")
        },
        parse: function(a) {
            for (var b = a.length, c = [], d = 0; d < b; d += 2)
                c[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - 4 * (d % 8);
            return new g.init(c,b / 2)
        }
    }
      , j = h.Latin1 = {
        stringify: function(a) {
            var b = a.words;
            a = a.sigBytes;
            for (var c = [], d = 0; d < a; d++)
                c.push(String.fromCharCode(b[d >>> 2] >>> 24 - 8 * (d % 4) & 255));
            return c.join("")
        },
        parse: function(a) {
            for (var b = a.length, c = [], d = 0; d < b; d++)
                c[d >>> 2] |= (255 & a.charCodeAt(d)) << 24 - 8 * (d % 4);
            return new g.init(c,b)
        }
    }
      , k = h.Utf8 = {
        stringify: function(a) {
            try {
                return decodeURIComponent(escape(j.stringify(a)))
            } catch (b) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(a) {
            return j.parse(unescape(encodeURIComponent(a)))
        }
    }
      , l = d.BufferedBlockAlgorithm = f.extend({
        reset: function() {
            this._data = new g.init,
            this._nDataBytes = 0
        },
        _append: function(a) {
            "string" == typeof a && (a = k.parse(a)),
            this._data.concat(a),
            this._nDataBytes += a.sigBytes
        },
        _process: function(b) {
            var c = this._data
              , d = c.words
              , e = c.sigBytes
              , f = this.blockSize
              , h = e / (4 * f)
              , h = b ? a.ceil(h) : a.max((0 | h) - this._minBufferSize, 0);
            if (b = h * f,
            e = a.min(4 * b, e),
            b) {
                for (var i = 0; i < b; i += f)
                    this._doProcessBlock(d, i);
                i = d.splice(0, b),
                c.sigBytes -= e
            }
            return new g.init(i,e)
        },
        clone: function() {
            var a = f.clone.call(this);
            return a._data = this._data.clone(),
            a
        },
        _minBufferSize: 0
    });
    d.Hasher = l.extend({
        cfg: f.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a),
            this.reset()
        },
        reset: function() {
            l.reset.call(this),
            this._doReset()
        },
        update: function(a) {
            return this._append(a),
            this._process(),
            this
        },
        finalize: function(a) {
            return a && this._append(a),
            this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(a) {
            return function(b, c) {
                return new a.init(c).finalize(b)
            }
        },
        _createHmacHelper: function(a) {
            return function(b, c) {
                return new m.HMAC.init(a,c).finalize(b)
            }
        }
    });
    var m = c.algo = {};
    return c
}(Math);
!function(a) {
    function b(a, b, c, d, e, f, g) {
        return a = a + (b & c | ~b & d) + e + g,
        (a << f | a >>> 32 - f) + b
    }
    function c(a, b, c, d, e, f, g) {
        return a = a + (b & d | c & ~d) + e + g,
        (a << f | a >>> 32 - f) + b
    }
    function d(a, b, c, d, e, f, g) {
        return a = a + (b ^ c ^ d) + e + g,
        (a << f | a >>> 32 - f) + b
    }
    function e(a, b, c, d, e, f, g) {
        return a = a + (c ^ (b | ~d)) + e + g,
        (a << f | a >>> 32 - f) + b
    }
    for (var f = CryptoJS, g = f.lib, h = g.WordArray, i = g.Hasher, g = f.algo, j = [], k = 0; 64 > k; k++)
        j[k] = 4294967296 * a.abs(a.sin(k + 1)) | 0;
    g = g.MD5 = i.extend({
        _doReset: function() {
            this._hash = new h.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(a, f) {
            for (var g = 0; 16 > g; g++) {
                var h = f + g
                  , i = a[h];
                a[h] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
            }
            var g = this._hash.words
              , h = a[f + 0]
              , i = a[f + 1]
              , k = a[f + 2]
              , l = a[f + 3]
              , m = a[f + 4]
              , n = a[f + 5]
              , o = a[f + 6]
              , p = a[f + 7]
              , q = a[f + 8]
              , r = a[f + 9]
              , s = a[f + 10]
              , t = a[f + 11]
              , u = a[f + 12]
              , v = a[f + 13]
              , w = a[f + 14]
              , x = a[f + 15]
              , y = g[0]
              , z = g[1]
              , A = g[2]
              , B = g[3]
              , y = b(y, z, A, B, h, 7, j[0])
              , B = b(B, y, z, A, i, 12, j[1])
              , A = b(A, B, y, z, k, 17, j[2])
              , z = b(z, A, B, y, l, 22, j[3])
              , y = b(y, z, A, B, m, 7, j[4])
              , B = b(B, y, z, A, n, 12, j[5])
              , A = b(A, B, y, z, o, 17, j[6])
              , z = b(z, A, B, y, p, 22, j[7])
              , y = b(y, z, A, B, q, 7, j[8])
              , B = b(B, y, z, A, r, 12, j[9])
              , A = b(A, B, y, z, s, 17, j[10])
              , z = b(z, A, B, y, t, 22, j[11])
              , y = b(y, z, A, B, u, 7, j[12])
              , B = b(B, y, z, A, v, 12, j[13])
              , A = b(A, B, y, z, w, 17, j[14])
              , z = b(z, A, B, y, x, 22, j[15])
              , y = c(y, z, A, B, i, 5, j[16])
              , B = c(B, y, z, A, o, 9, j[17])
              , A = c(A, B, y, z, t, 14, j[18])
              , z = c(z, A, B, y, h, 20, j[19])
              , y = c(y, z, A, B, n, 5, j[20])
              , B = c(B, y, z, A, s, 9, j[21])
              , A = c(A, B, y, z, x, 14, j[22])
              , z = c(z, A, B, y, m, 20, j[23])
              , y = c(y, z, A, B, r, 5, j[24])
              , B = c(B, y, z, A, w, 9, j[25])
              , A = c(A, B, y, z, l, 14, j[26])
              , z = c(z, A, B, y, q, 20, j[27])
              , y = c(y, z, A, B, v, 5, j[28])
              , B = c(B, y, z, A, k, 9, j[29])
              , A = c(A, B, y, z, p, 14, j[30])
              , z = c(z, A, B, y, u, 20, j[31])
              , y = d(y, z, A, B, n, 4, j[32])
              , B = d(B, y, z, A, q, 11, j[33])
              , A = d(A, B, y, z, t, 16, j[34])
              , z = d(z, A, B, y, w, 23, j[35])
              , y = d(y, z, A, B, i, 4, j[36])
              , B = d(B, y, z, A, m, 11, j[37])
              , A = d(A, B, y, z, p, 16, j[38])
              , z = d(z, A, B, y, s, 23, j[39])
              , y = d(y, z, A, B, v, 4, j[40])
              , B = d(B, y, z, A, h, 11, j[41])
              , A = d(A, B, y, z, l, 16, j[42])
              , z = d(z, A, B, y, o, 23, j[43])
              , y = d(y, z, A, B, r, 4, j[44])
              , B = d(B, y, z, A, u, 11, j[45])
              , A = d(A, B, y, z, x, 16, j[46])
              , z = d(z, A, B, y, k, 23, j[47])
              , y = e(y, z, A, B, h, 6, j[48])
              , B = e(B, y, z, A, p, 10, j[49])
              , A = e(A, B, y, z, w, 15, j[50])
              , z = e(z, A, B, y, n, 21, j[51])
              , y = e(y, z, A, B, u, 6, j[52])
              , B = e(B, y, z, A, l, 10, j[53])
              , A = e(A, B, y, z, s, 15, j[54])
              , z = e(z, A, B, y, i, 21, j[55])
              , y = e(y, z, A, B, q, 6, j[56])
              , B = e(B, y, z, A, x, 10, j[57])
              , A = e(A, B, y, z, o, 15, j[58])
              , z = e(z, A, B, y, v, 21, j[59])
              , y = e(y, z, A, B, m, 6, j[60])
              , B = e(B, y, z, A, t, 10, j[61])
              , A = e(A, B, y, z, k, 15, j[62])
              , z = e(z, A, B, y, r, 21, j[63]);
            g[0] = g[0] + y | 0,
            g[1] = g[1] + z | 0,
            g[2] = g[2] + A | 0,
            g[3] = g[3] + B | 0
        },
        _doFinalize: function() {
            var b = this._data
              , c = b.words
              , d = 8 * this._nDataBytes
              , e = 8 * b.sigBytes;
            c[e >>> 5] |= 128 << 24 - e % 32;
            var f = a.floor(d / 4294967296);
            for (c[(e + 64 >>> 9 << 4) + 15] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8),
            c[(e + 64 >>> 9 << 4) + 14] = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8),
            b.sigBytes = 4 * (c.length + 1),
            this._process(),
            b = this._hash,
            c = b.words,
            d = 0; 4 > d; d++)
                e = c[d],
                c[d] = 16711935 & (e << 8 | e >>> 24) | 4278255360 & (e << 24 | e >>> 8);
            return b
        },
        clone: function() {
            var a = i.clone.call(this);
            return a._hash = this._hash.clone(),
            a
        }
    }),
    f.MD5 = i._createHelper(g),
    f.HmacMD5 = i._createHmacHelper(g)
}(Math),
function() {
    var a = CryptoJS
      , b = a.enc.Utf8;
    a.algo.HMAC = a.lib.Base.extend({
        init: function(a, c) {
            a = this._hasher = new a.init,
            "string" == typeof c && (c = b.parse(c));
            var d = a.blockSize
              , e = 4 * d;
            c.sigBytes > e && (c = a.finalize(c)),
            c.clamp();
            for (var f = this._oKey = c.clone(), g = this._iKey = c.clone(), h = f.words, i = g.words, j = 0; j < d; j++)
                h[j] ^= 1549556828,
                i[j] ^= 909522486;
            f.sigBytes = g.sigBytes = e,
            this.reset()
        },
        reset: function() {
            var a = this._hasher;
            a.reset(),
            a.update(this._iKey)
        },
        update: function(a) {
            return this._hasher.update(a),
            this
        },
        finalize: function(a) {
            var b = this._hasher;
            return a = b.finalize(a),
            b.reset(),
            b.finalize(this._oKey.clone().concat(a))
        }
    })
}();


function getpwd(pwd){
return CryptoJS.MD5(pwd).toString()

}


"""


pwd = execjs.compile(js_).call("getpwd","11111")  # TODO: 输入 账号 密码
print(pwd)