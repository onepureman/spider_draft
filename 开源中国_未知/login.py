"""
Base_Url: https://www.oschina.net/
Author: jing
Modify: 2020/10/22
"""


import execjs
from pprint import pprint
import requests

js_ = """
function getpwd (pd){
var CryptoJS = CryptoJS || function(e, t) {
    var n, r = {}, i = r.lib = {}, o = i.Base = function() {
        function e() {}
        return {
            extend: function(t) {
                e.prototype = this;
                var n = new e;
                return t && n.mixIn(t),
                n.$super = this,
                n
            },
            create: function() {
                var e = this.extend();
                return e.init.apply(e, arguments),
                e
            },
            init: function() {},
            mixIn: function(e) {
                for (var t in e)
                    e.hasOwnProperty(t) && (this[t] = e[t]);
                e.hasOwnProperty("toString") && (this.toString = e.toString)
            },
            clone: function() {
                return this.$super.extend(this)
            }
        }
    }(), s = i.WordArray = o.extend({
        init: function(e, n) {
            e = this.words = e || [],
            this.sigBytes = n != t ? n : 4 * e.length
        },
        toString: function(e) {
            return (e || u).stringify(this)
        },
        concat: function(e) {
            var t, n = this.words, r = e.words, i = this.sigBytes;
            if (e = e.sigBytes,
            this.clamp(),
            i % 4)
                for (t = 0; t < e; t++)
                    n[i + t >>> 2] |= (r[t >>> 2] >>> 24 - 8 * (t % 4) & 255) << 24 - 8 * ((i + t) % 4);
            else if (65535 < r.length)
                for (t = 0; t < e; t += 4)
                    n[i + t >>> 2] = r[t >>> 2];
            else
                n.push.apply(n, r);
            return this.sigBytes += e,
            this
        },
        clamp: function() {
            var t = this.words
              , n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << 32 - 8 * (n % 4),
            t.length = e.ceil(n / 4)
        },
        clone: function() {
            var e = o.clone.call(this);
            return e.words = this.words.slice(0),
            e
        },
        random: function(t) {
            for (var n = [], r = 0; r < t; r += 4)
                n.push(4294967296 * e.random() | 0);
            return s.create(n, t)
        }
    }), a = r.enc = {}, u = a.Hex = {
        stringify: function(e) {
            var t, n, r, i;
            for (t = e.words,
            e = e.sigBytes,
            n = [],
            r = 0; r < e; r++)
                i = t[r >>> 2] >>> 24 - 8 * (r % 4) & 255,
                n.push((i >>> 4).toString(16)),
                n.push((15 & i).toString(16));
            return n.join("")
        },
        parse: function(e) {
            for (var t = e.length, n = [], r = 0; r < t; r += 2)
                n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - 4 * (r % 8);
            return s.create(n, t / 2)
        }
    }, l = a.Latin1 = {
        stringify: function(e) {
            for (var t = e.words, e = e.sigBytes, n = [], r = 0; r < e; r++)
                n.push(String.fromCharCode(t[r >>> 2] >>> 24 - 8 * (r % 4) & 255));
            return n.join("")
        },
        parse: function(e) {
            for (var t = e.length, n = [], r = 0; r < t; r++)
                n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - 8 * (r % 4);
            return s.create(n, t)
        }
    }, c = a.Utf8 = {
        stringify: function(e) {
            try {
                return decodeURIComponent(escape(l.stringify(e)))
            } catch (e) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(e) {
            return l.parse(unescape(encodeURIComponent(e)))
        }
    }, f = i.BufferedBlockAlgorithm = o.extend({
        reset: function() {
            this._data = s.create(),
            this._nDataBytes = 0
        },
        _append: function(e) {
            "string" == typeof e && (e = c.parse(e)),
            this._data.concat(e),
            this._nDataBytes += e.sigBytes
        },
        _process: function(t) {
            var n, r = this._data, i = r.words, o = r.sigBytes, a = this.blockSize, u = o / (4 * a);
            if (u = t ? e.ceil(u) : e.max((0 | u) - this._minBufferSize, 0),
            t = u * a,
            o = e.min(4 * t, o),
            t) {
                for (n = 0; n < t; n += a)
                    this._doProcessBlock(i, n);
                n = i.splice(0, t),
                r.sigBytes -= o
            }
            return s.create(n, o)
        },
        clone: function() {
            var e = o.clone.call(this);
            return e._data = this._data.clone(),
            e
        },
        _minBufferSize: 0
    });
    return i.Hasher = f.extend({
        init: function() {
            this.reset()
        },
        reset: function() {
            f.reset.call(this),
            this._doReset()
        },
        update: function(e) {
            return this._append(e),
            this._process(),
            this
        },
        finalize: function(e) {
            return e && this._append(e),
            this._doFinalize(),
            this._hash
        },
        clone: function() {
            var e = f.clone.call(this);
            return e._hash = this._hash.clone(),
            e
        },
        blockSize: 16,
        _createHelper: function(e) {
            return function(t, n) {
                return e.create(n).finalize(t)
            }
        },
        _createHmacHelper: function(e) {
            return function(t, r) {
                return n.HMAC.create(e, r).finalize(t)
            }
        }
    }),
    n = r.algo = {},
    r
}(Math);
!function() {
    var e = CryptoJS
      , t = e.lib
      , n = t.WordArray
      , t = t.Hasher
      , r = []
      , i = e.algo.SHA1 = t.extend({
        _doReset: function() {
            this._hash = n.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        },
        _doProcessBlock: function(e, t) {
            var n, i, o, s, a, u, l, c;
            for (n = this._hash.words,
            i = n[0],
            o = n[1],
            s = n[2],
            a = n[3],
            u = n[4],
            l = 0; 80 > l; l++)
                16 > l ? r[l] = 0 | e[t + l] : (c = r[l - 3] ^ r[l - 8] ^ r[l - 14] ^ r[l - 16],
                r[l] = c << 1 | c >>> 31),
                c = (i << 5 | i >>> 27) + u + r[l],
                c = 20 > l ? c + ((o & s | ~o & a) + 1518500249) : 40 > l ? c + ((o ^ s ^ a) + 1859775393) : 60 > l ? c + ((o & s | o & a | s & a) - 1894007588) : c + ((o ^ s ^ a) - 899497514),
                u = a,
                a = s,
                s = o << 30 | o >>> 2,
                o = i,
                i = c;
            n[0] = n[0] + i | 0,
            n[1] = n[1] + o | 0,
            n[2] = n[2] + s | 0,
            n[3] = n[3] + a | 0,
            n[4] = n[4] + u | 0
        },
        _doFinalize: function() {
            var e = this._data
              , t = e.words
              , n = 8 * this._nDataBytes
              , r = 8 * e.sigBytes;
            t[r >>> 5] |= 128 << 24 - r % 32,
            t[(r + 64 >>> 9 << 4) + 15] = n,
            e.sigBytes = 4 * t.length,
            this._process()
        }
    });
    e.SHA1 = t._createHelper(i),
    e.HmacSHA1 = t._createHmacHelper(i)
}();

return CryptoJS.SHA1(pd).toString()
}

"""

# pwd = execjs.compile(js_).call("getpwd", "jjj")  # TODO: 输入 账号 密码
# print(pwd)


def get_google_code():
    url = "https://recaptcha.net/recaptcha/api2/reload?k=6LfiMsEZAAAAADTM7mh5JeS3_L69QZr6iOAsJU9t"

    r = requests.post(url)
    print(r.content.decode())

get_google_code()