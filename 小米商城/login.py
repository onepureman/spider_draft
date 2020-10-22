import execjs
import requests
import time
from pprint import pprint
import re


class Login(object):
    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()

    def get_pwd(self):

        js_ = """
        CryptoJS = function(o, l) {
            var r = {}
              , h = r.lib = {}
              , b = function() {}
              , t = h.Base = {
                extend: function(k) {
                    b.prototype = this;
                    var e = new b;
                    k && e.mixIn(k);
                    e.hasOwnProperty("init") || (e.init = function() {
                        e.$super.init.apply(this, arguments)
                    }
                    );
                    e.init.prototype = e;
                    e.$super = this;
                    return e
                },
                create: function() {
                    var d = this.extend();
                    d.init.apply(d, arguments);
                    return d
                },
                init: function() {},
                mixIn: function(k) {
                    for (var e in k) {
                        k.hasOwnProperty(e) && (this[e] = k[e])
                    }
                    k.hasOwnProperty("toString") && (this.toString = k.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            }
              , g = h.WordArray = t.extend({
                init: function(e, d) {
                    e = this.words = e || [];
                    this.sigBytes = d != l ? d : 4 * e.length
                },
                toString: function(d) {
                    return (d || s).stringify(this)
                },
                concat: function(x) {
                    var v = this.words
                      , w = x.words
                      , u = this.sigBytes;
                    x = x.sigBytes;
                    this.clamp();
                    if (u % 4) {
                        for (var m = 0; m < x; m++) {
                            v[u + m >>> 2] |= (w[m >>> 2] >>> 24 - m % 4 * 8 & 255) << 24 - (u + m) % 4 * 8
                        }
                    } else {
                        if (65535 < w.length) {
                            for (m = 0; m < x; m += 4) {
                                v[u + m >>> 2] = w[m >>> 2]
                            }
                        } else {
                            v.push.apply(v, w)
                        }
                    }
                    this.sigBytes += x;
                    return this
                },
                clamp: function() {
                    var c = this.words
                      , e = this.sigBytes;
                    c[e >>> 2] &= 4294967295 << 32 - e % 4 * 8;
                    c.length = o.ceil(e / 4)
                },
                clone: function() {
                    var d = t.clone.call(this);
                    d.words = this.words.slice(0);
                    return d
                },
                random: function(k) {
                    for (var m = [], c = 0; c < k; c += 4) {
                        m.push(4294967296 * o.random() | 0)
                    }
                    return new g.init(m,k)
                }
            })
              , p = r.enc = {}
              , s = p.Hex = {
                stringify: function(x) {
                    var v = x.words;
                    x = x.sigBytes;
                    for (var w = [], u = 0; u < x; u++) {
                        var m = v[u >>> 2] >>> 24 - u % 4 * 8 & 255;
                        w.push((m >>> 4).toString(16));
                        w.push((m & 15).toString(16))
                    }
                    return w.join("")
                },
                parse: function(v) {
                    for (var m = v.length, u = [], k = 0; k < m; k += 2) {
                        u[k >>> 3] |= parseInt(v.substr(k, 2), 16) << 24 - k % 8 * 4
                    }
                    return new g.init(u,m / 2)
                }
            }
              , i = p.Latin1 = {
                stringify: function(v) {
                    var m = v.words;
                    v = v.sigBytes;
                    for (var u = [], k = 0; k < v; k++) {
                        u.push(String.fromCharCode(m[k >>> 2] >>> 24 - k % 4 * 8 & 255))
                    }
                    return u.join("")
                },
                parse: function(v) {
                    for (var m = v.length, u = [], k = 0; k < m; k++) {
                        u[k >>> 2] |= (v.charCodeAt(k) & 255) << 24 - k % 4 * 8
                    }
                    return new g.init(u,m)
                }
            }
              , q = p.Utf8 = {
                stringify: function(k) {
                    try {
                        return decodeURIComponent(escape(i.stringify(k)))
                    } catch (e) {
                        throw Error("Malformed UTF-8 data")
                    }
                },
                parse: function(d) {
                    return i.parse(unescape(encodeURIComponent(d)))
                }
            }
              , f = h.BufferedBlockAlgorithm = t.extend({
                reset: function() {
                    this._data = new g.init;
                    this._nDataBytes = 0
                },
                _append: function(d) {
                    "string" == typeof d && (d = q.parse(d));
                    this._data.concat(d);
                    this._nDataBytes += d.sigBytes
                },
                _process: function(x) {
                    var z = this._data
                      , w = z.words
                      , m = z.sigBytes
                      , c = this.blockSize
                      , u = m / (4 * c)
                      , u = x ? o.ceil(u) : o.max((u | 0) - this._minBufferSize, 0);
                    x = u * c;
                    m = o.min(4 * x, m);
                    if (x) {
                        for (var y = 0; y < x; y += c) {
                            this._doProcessBlock(w, y)
                        }
                        y = w.splice(0, x);
                        z.sigBytes -= m
                    }
                    return new g.init(y,m)
                },
                clone: function() {
                    var d = t.clone.call(this);
                    d._data = this._data.clone();
                    return d
                },
                _minBufferSize: 0
            });
            h.Hasher = f.extend({
                cfg: t.extend(),
                init: function(d) {
                    this.cfg = this.cfg.extend(d);
                    this.reset()
                },
                reset: function() {
                    f.reset.call(this);
                    this._doReset()
                },
                update: function(d) {
                    this._append(d);
                    this._process();
                    return this
                },
                finalize: function(d) {
                    d && this._append(d);
                    return this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(d) {
                    return function(c, e) {
                        return (new d.init(e)).finalize(c)
                    }
                },
                _createHmacHelper: function(d) {
                    return function(c, e) {
                        return (new j.HMAC.init(d,e)).finalize(c)
                    }
                }
            });
            var j = r.algo = {};
            return r
        }(Math);
        (function(j) {
            function i(z, y, x, t, r, s, w) {
                z = z + (y & x | ~y & t) + r + w;
                return (z << s | z >>> 32 - s) + y
            }
            function o(z, y, x, t, r, s, w) {
                z = z + (y & t | x & ~t) + r + w;
                return (z << s | z >>> 32 - s) + y
            }
            function g(z, y, x, t, r, s, w) {
                z = z + (y ^ x ^ t) + r + w;
                return (z << s | z >>> 32 - s) + y
            }
            function b(z, y, x, t, s, r, w) {
                z = z + (x ^ (y | ~t)) + s + w;
                return (z << r | z >>> 32 - r) + y
            }
            for (var q = CryptoJS, f = q.lib, l = f.WordArray, p = f.Hasher, f = q.algo, h = [], n = 0; 64 > n; n++) {
                h[n] = 4294967296 * j.abs(j.sin(n + 1)) | 0
            }
            f = f.MD5 = p.extend({
                _doReset: function() {
                    this._hash = new l.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function(Y, W) {
                    for (var N = 0; 16 > N; N++) {
                        var F = W + N
                          , v = Y[F];
                        Y[F] = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360
                    }
                    var N = this._hash.words
                      , F = Y[W + 0]
                      , v = Y[W + 1]
                      , M = Y[W + 2]
                      , B = Y[W + 3]
                      , X = Y[W + 4]
                      , k = Y[W + 5]
                      , Z = Y[W + 6]
                      , T = Y[W + 7]
                      , C = Y[W + 8]
                      , L = Y[W + 9]
                      , K = Y[W + 10]
                      , P = Y[W + 11]
                      , d = Y[W + 12]
                      , t = Y[W + 13]
                      , E = Y[W + 14]
                      , e = Y[W + 15]
                      , O = N[0]
                      , S = N[1]
                      , R = N[2]
                      , Q = N[3]
                      , O = i(O, S, R, Q, F, 7, h[0])
                      , Q = i(Q, O, S, R, v, 12, h[1])
                      , R = i(R, Q, O, S, M, 17, h[2])
                      , S = i(S, R, Q, O, B, 22, h[3])
                      , O = i(O, S, R, Q, X, 7, h[4])
                      , Q = i(Q, O, S, R, k, 12, h[5])
                      , R = i(R, Q, O, S, Z, 17, h[6])
                      , S = i(S, R, Q, O, T, 22, h[7])
                      , O = i(O, S, R, Q, C, 7, h[8])
                      , Q = i(Q, O, S, R, L, 12, h[9])
                      , R = i(R, Q, O, S, K, 17, h[10])
                      , S = i(S, R, Q, O, P, 22, h[11])
                      , O = i(O, S, R, Q, d, 7, h[12])
                      , Q = i(Q, O, S, R, t, 12, h[13])
                      , R = i(R, Q, O, S, E, 17, h[14])
                      , S = i(S, R, Q, O, e, 22, h[15])
                      , O = o(O, S, R, Q, v, 5, h[16])
                      , Q = o(Q, O, S, R, Z, 9, h[17])
                      , R = o(R, Q, O, S, P, 14, h[18])
                      , S = o(S, R, Q, O, F, 20, h[19])
                      , O = o(O, S, R, Q, k, 5, h[20])
                      , Q = o(Q, O, S, R, K, 9, h[21])
                      , R = o(R, Q, O, S, e, 14, h[22])
                      , S = o(S, R, Q, O, X, 20, h[23])
                      , O = o(O, S, R, Q, L, 5, h[24])
                      , Q = o(Q, O, S, R, E, 9, h[25])
                      , R = o(R, Q, O, S, B, 14, h[26])
                      , S = o(S, R, Q, O, C, 20, h[27])
                      , O = o(O, S, R, Q, t, 5, h[28])
                      , Q = o(Q, O, S, R, M, 9, h[29])
                      , R = o(R, Q, O, S, T, 14, h[30])
                      , S = o(S, R, Q, O, d, 20, h[31])
                      , O = g(O, S, R, Q, k, 4, h[32])
                      , Q = g(Q, O, S, R, C, 11, h[33])
                      , R = g(R, Q, O, S, P, 16, h[34])
                      , S = g(S, R, Q, O, E, 23, h[35])
                      , O = g(O, S, R, Q, v, 4, h[36])
                      , Q = g(Q, O, S, R, X, 11, h[37])
                      , R = g(R, Q, O, S, T, 16, h[38])
                      , S = g(S, R, Q, O, K, 23, h[39])
                      , O = g(O, S, R, Q, t, 4, h[40])
                      , Q = g(Q, O, S, R, F, 11, h[41])
                      , R = g(R, Q, O, S, B, 16, h[42])
                      , S = g(S, R, Q, O, Z, 23, h[43])
                      , O = g(O, S, R, Q, L, 4, h[44])
                      , Q = g(Q, O, S, R, d, 11, h[45])
                      , R = g(R, Q, O, S, e, 16, h[46])
                      , S = g(S, R, Q, O, M, 23, h[47])
                      , O = b(O, S, R, Q, F, 6, h[48])
                      , Q = b(Q, O, S, R, T, 10, h[49])
                      , R = b(R, Q, O, S, E, 15, h[50])
                      , S = b(S, R, Q, O, k, 21, h[51])
                      , O = b(O, S, R, Q, d, 6, h[52])
                      , Q = b(Q, O, S, R, B, 10, h[53])
                      , R = b(R, Q, O, S, K, 15, h[54])
                      , S = b(S, R, Q, O, v, 21, h[55])
                      , O = b(O, S, R, Q, C, 6, h[56])
                      , Q = b(Q, O, S, R, e, 10, h[57])
                      , R = b(R, Q, O, S, Z, 15, h[58])
                      , S = b(S, R, Q, O, t, 21, h[59])
                      , O = b(O, S, R, Q, X, 6, h[60])
                      , Q = b(Q, O, S, R, P, 10, h[61])
                      , R = b(R, Q, O, S, M, 15, h[62])
                      , S = b(S, R, Q, O, L, 21, h[63]);
                    N[0] = N[0] + O | 0;
                    N[1] = N[1] + S | 0;
                    N[2] = N[2] + R | 0;
                    N[3] = N[3] + Q | 0
                },
                _doFinalize: function() {
                    var v = this._data
                      , t = v.words
                      , r = 8 * this._nDataBytes
                      , c = 8 * v.sigBytes;
                    t[c >>> 5] |= 128 << 24 - c % 32;
                    var s = j.floor(r / 4294967296);
                    t[(c + 64 >>> 9 << 4) + 15] = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & 4278255360;
                    t[(c + 64 >>> 9 << 4) + 14] = (r << 8 | r >>> 24) & 16711935 | (r << 24 | r >>> 8) & 4278255360;
                    v.sigBytes = 4 * (t.length + 1);
                    this._process();
                    v = this._hash;
                    t = v.words;
                    for (r = 0; 4 > r; r++) {
                        c = t[r],
                        t[r] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360
                    }
                    return v
                },
                clone: function() {
                    var d = p.clone.call(this);
                    d._hash = this._hash.clone();
                    return d
                }
            });
            q.MD5 = p._createHelper(f);
            q.HmacMD5 = p._createHmacHelper(f)
        }
        )(Math);
        
        function getpwd(pwd){
            return (CryptoJS.MD5(pwd).toString() + "").toUpperCase()
        }
        
        
        """
        pwd = execjs.compile(js_).call("getpwd", self.pwd)
        return pwd

    def login_(self):
        self.sess.get("https://www.mi.com/")
        pwd = self.get_pwd()
        data = {
            "_json": "true",
            "callback": "http://order.mi.com/login/callback?followup=https%3A%2F%2Fwww.mi.com%2F&sign=NzY3MDk1YzczNmUwMGM4ODAxOWE0NjRiNTU5ZGQyMzFhYjFmOGU0Nw,,",
            "sid": "mi_eshop",
            "qs": "%3Fcallback%3Dhttp%253A%252F%252Forder.mi.com%252Flogin%252Fcallback%253Ffollowup%253Dhttps%25253A%25252F%25252Fwww.mi.com%25252F%2526sign%253DNzY3MDk1YzczNmUwMGM4ODAxOWE0NjRiNTU5ZGQyMzFhYjFmOGU0Nw%252C%252C%26sid%3Dmi_eshop%26_bannerBiz%3Dmistore%26_qrsize%3D180",
            "_sign": "U1j1VrWClFfydkKkGGbj7phLcaI=",
            "serviceParam": '{"checkSafePhone":false,"checkSafeAddress":false}',
            "user": self.user,
            "hash": pwd,
            "cc": "",
            "log": '{"title":"dataCenterZone","message":"China"}{"title":"locale","message":"zh_CN"}{"title":"env","message":"release"}{"title":"browser","message":{"name":"Chrome","version":78}}{"title":"search","message":"?callback=http%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252F%26sign%3DNzY3MDk1YzczNmUwMGM4ODAxOWE0NjRiNTU5ZGQyMzFhYjFmOGU0Nw%2C%2C&sid=mi_eshop&_bannerBiz=mistore&_qrsize=180"}{"title":"outerlinkDone","message":"done"}{"title":"addInputChange","message":"userName"}{"title":"loginOrigin","message":"loginMain"}',


        }

        url = "https://account.xiaomi.com/pass/serviceLoginAuth2?_dc=" + str(int(time.time()*1000))
        res = self.sess.post(url, data=data)
        fin = re.findall("成功", res.content.decode())
        if len(fin) > 0:
            print("登陆成功")


if __name__ == '__main__':
    login = Login("18513606786", "jing1995")
    login.login_()