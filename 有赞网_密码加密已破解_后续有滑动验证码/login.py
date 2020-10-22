"""
Base_Url: https://www.youzan.com/
Author: jing
Modify: 2020/10/22

"""


import execjs


js_ = """

var wGdk = function(t, e, n) {
        var r;
            var r, o, i = i || function(t, e) {
                var n = {}
                  , r = n.lib = {}
                  , o = function() {}
                  , i = r.Base = {
                    extend: function(t) {
                        o.prototype = this;
                        var e = new o;
                        return t && e.mixIn(t),
                        e.hasOwnProperty("init") || (e.init = function() {
                            e.$super.init.apply(this, arguments)
                        }
                        ),
                        e.init.prototype = e,
                        e.$super = this,
                        e
                    },
                    create: function() {
                        var t = this.extend();
                        return t.init.apply(t, arguments),
                        t
                    },
                    init: function() {},
                    mixIn: function(t) {
                        for (var e in t)
                            t.hasOwnProperty(e) && (this[e] = t[e]);
                        t.hasOwnProperty("toString") && (this.toString = t.toString)
                    },
                    clone: function() {
                        return this.init.prototype.extend(this)
                    }
                }
                  , a = r.WordArray = i.extend({
                    init: function(t, e) {
                        t = this.words = t || [],
                        this.sigBytes = null != e ? e : 4 * t.length
                    },
                    toString: function(t) {
                        return (t || c).stringify(this)
                    },
                    concat: function(t) {
                        var e = this.words
                          , n = t.words
                          , r = this.sigBytes;
                        if (t = t.sigBytes,
                        this.clamp(),
                        r % 4)
                            for (var o = 0; o < t; o++)
                                e[r + o >>> 2] |= (n[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 24 - (r + o) % 4 * 8;
                        else if (65535 < n.length)
                            for (o = 0; o < t; o += 4)
                                e[r + o >>> 2] = n[o >>> 2];
                        else
                            e.push.apply(e, n);
                        return this.sigBytes += t,
                        this
                    },
                    clamp: function() {
                        var e = this.words
                          , n = this.sigBytes;
                        e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                        e.length = t.ceil(n / 4)
                    },
                    clone: function() {
                        var t = i.clone.call(this);
                        return t.words = this.words.slice(0),
                        t
                    },
                    random: function(e) {
                        for (var n = [], r = 0; r < e; r += 4)
                            n.push(4294967296 * t.random() | 0);
                        return new a.init(n,e)
                    }
                })
                  , u = n.enc = {}
                  , c = u.Hex = {
                    stringify: function(t) {
                        var e = t.words;
                        t = t.sigBytes;
                        for (var n = [], r = 0; r < t; r++) {
                            var o = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            n.push((o >>> 4).toString(16)),
                            n.push((15 & o).toString(16))
                        }
                        return n.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, n = [], r = 0; r < e; r += 2)
                            n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                        return new a.init(n,e / 2)
                    }
                }
                  , s = u.Latin1 = {
                    stringify: function(t) {
                        var e = t.words;
                        t = t.sigBytes;
                        for (var n = [], r = 0; r < t; r++)
                            n.push(String.fromCharCode(e[r >>> 2] >>> 24 - r % 4 * 8 & 255));
                        return n.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, n = [], r = 0; r < e; r++)
                            n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                        return new a.init(n,e)
                    }
                }
                  , f = u.Utf8 = {
                    stringify: function(t) {
                        try {
                            return decodeURIComponent(escape(s.stringify(t)))
                        } catch (t) {
                            throw Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(t) {
                        return s.parse(unescape(encodeURIComponent(t)))
                    }
                }
                  , l = r.BufferedBlockAlgorithm = i.extend({
                    reset: function() {
                        this._data = new a.init,
                        this._nDataBytes = 0
                    },
                    _append: function(t) {
                        "string" == typeof t && (t = f.parse(t)),
                        this._data.concat(t),
                        this._nDataBytes += t.sigBytes
                    },
                    _process: function(e) {
                        var n = this._data
                          , r = n.words
                          , o = n.sigBytes
                          , i = this.blockSize
                          , u = o / (4 * i);
                        if (e = (u = e ? t.ceil(u) : t.max((0 | u) - this._minBufferSize, 0)) * i,
                        o = t.min(4 * e, o),
                        e) {
                            for (var c = 0; c < e; c += i)
                                this._doProcessBlock(r, c);
                            c = r.splice(0, e),
                            n.sigBytes -= o
                        }
                        return new a.init(c,o)
                    },
                    clone: function() {
                        var t = i.clone.call(this);
                        return t._data = this._data.clone(),
                        t
                    },
                    _minBufferSize: 0
                });
                r.Hasher = l.extend({
                    cfg: i.extend(),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t),
                        this.reset()
                    },
                    reset: function() {
                        l.reset.call(this),
                        this._doReset()
                    },
                    update: function(t) {
                        return this._append(t),
                        this._process(),
                        this
                    },
                    finalize: function(t) {
                        return t && this._append(t),
                        this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function(t) {
                        return function(e, n) {
                            return new t.init(n).finalize(e)
                        }
                    },
                    _createHmacHelper: function(t) {
                        return function(e, n) {
                            return new p.HMAC.init(t,n).finalize(e)
                        }
                    }
                });
                var p = n.algo = {};
                return n
            }(Math);
            o = (r = i).lib.WordArray,
            r.enc.Base64 = {
                stringify: function(t) {
                    var e = t.words
                      , n = t.sigBytes
                      , r = this._map;
                    t.clamp(),
                    t = [];
                    for (var o = 0; o < n; o += 3)
                        for (var i = (e[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; 4 > a && o + .75 * a < n; a++)
                            t.push(r.charAt(i >>> 6 * (3 - a) & 63));
                    if (e = r.charAt(64))
                        for (; t.length % 4; )
                            t.push(e);
                    return t.join("")
                },
                parse: function(t) {
                    var e = t.length
                      , n = this._map;
                    (r = n.charAt(64)) && -1 != (r = t.indexOf(r)) && (e = r);
                    for (var r = [], i = 0, a = 0; a < e; a++)
                        if (a % 4) {
                            var u = n.indexOf(t.charAt(a - 1)) << a % 4 * 2
                              , c = n.indexOf(t.charAt(a)) >>> 6 - a % 4 * 2;
                            r[i >>> 2] |= (u | c) << 24 - i % 4 * 8,
                            i++
                        }
                    return o.create(r, i)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            },
            function(t) {
                function e(t, e, n, r, o, i, a) {
                    return ((t = t + (e & n | ~e & r) + o + a) << i | t >>> 32 - i) + e
                }
                function n(t, e, n, r, o, i, a) {
                    return ((t = t + (e & r | n & ~r) + o + a) << i | t >>> 32 - i) + e
                }
                function r(t, e, n, r, o, i, a) {
                    return ((t = t + (e ^ n ^ r) + o + a) << i | t >>> 32 - i) + e
                }
                function o(t, e, n, r, o, i, a) {
                    return ((t = t + (n ^ (e | ~r)) + o + a) << i | t >>> 32 - i) + e
                }
                for (var a = i, u = (s = a.lib).WordArray, c = s.Hasher, s = a.algo, f = [], l = 0; 64 > l; l++)
                    f[l] = 4294967296 * t.abs(t.sin(l + 1)) | 0;
                s = s.MD5 = c.extend({
                    _doReset: function() {
                        this._hash = new u.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function(t, i) {
                        for (var a = 0; 16 > a; a++) {
                            var u = t[c = i + a];
                            t[c] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
                        }
                        a = this._hash.words;
                        var c = t[i + 0]
                          , s = (u = t[i + 1],
                        t[i + 2])
                          , l = t[i + 3]
                          , p = t[i + 4]
                          , d = t[i + 5]
                          , h = t[i + 6]
                          , v = t[i + 7]
                          , m = t[i + 8]
                          , g = t[i + 9]
                          , y = t[i + 10]
                          , _ = t[i + 11]
                          , b = t[i + 12]
                          , x = t[i + 13]
                          , w = t[i + 14]
                          , E = t[i + 15]
                          , S = e(S = a[0], M = a[1], D = a[2], O = a[3], c, 7, f[0])
                          , O = e(O, S, M, D, u, 12, f[1])
                          , D = e(D, O, S, M, s, 17, f[2])
                          , M = e(M, D, O, S, l, 22, f[3]);
                        S = e(S, M, D, O, p, 7, f[4]),
                        O = e(O, S, M, D, d, 12, f[5]),
                        D = e(D, O, S, M, h, 17, f[6]),
                        M = e(M, D, O, S, v, 22, f[7]),
                        S = e(S, M, D, O, m, 7, f[8]),
                        O = e(O, S, M, D, g, 12, f[9]),
                        D = e(D, O, S, M, y, 17, f[10]),
                        M = e(M, D, O, S, _, 22, f[11]),
                        S = e(S, M, D, O, b, 7, f[12]),
                        O = e(O, S, M, D, x, 12, f[13]),
                        D = e(D, O, S, M, w, 17, f[14]),
                        S = n(S, M = e(M, D, O, S, E, 22, f[15]), D, O, u, 5, f[16]),
                        O = n(O, S, M, D, h, 9, f[17]),
                        D = n(D, O, S, M, _, 14, f[18]),
                        M = n(M, D, O, S, c, 20, f[19]),
                        S = n(S, M, D, O, d, 5, f[20]),
                        O = n(O, S, M, D, y, 9, f[21]),
                        D = n(D, O, S, M, E, 14, f[22]),
                        M = n(M, D, O, S, p, 20, f[23]),
                        S = n(S, M, D, O, g, 5, f[24]),
                        O = n(O, S, M, D, w, 9, f[25]),
                        D = n(D, O, S, M, l, 14, f[26]),
                        M = n(M, D, O, S, m, 20, f[27]),
                        S = n(S, M, D, O, x, 5, f[28]),
                        O = n(O, S, M, D, s, 9, f[29]),
                        D = n(D, O, S, M, v, 14, f[30]),
                        S = r(S, M = n(M, D, O, S, b, 20, f[31]), D, O, d, 4, f[32]),
                        O = r(O, S, M, D, m, 11, f[33]),
                        D = r(D, O, S, M, _, 16, f[34]),
                        M = r(M, D, O, S, w, 23, f[35]),
                        S = r(S, M, D, O, u, 4, f[36]),
                        O = r(O, S, M, D, p, 11, f[37]),
                        D = r(D, O, S, M, v, 16, f[38]),
                        M = r(M, D, O, S, y, 23, f[39]),
                        S = r(S, M, D, O, x, 4, f[40]),
                        O = r(O, S, M, D, c, 11, f[41]),
                        D = r(D, O, S, M, l, 16, f[42]),
                        M = r(M, D, O, S, h, 23, f[43]),
                        S = r(S, M, D, O, g, 4, f[44]),
                        O = r(O, S, M, D, b, 11, f[45]),
                        D = r(D, O, S, M, E, 16, f[46]),
                        S = o(S, M = r(M, D, O, S, s, 23, f[47]), D, O, c, 6, f[48]),
                        O = o(O, S, M, D, v, 10, f[49]),
                        D = o(D, O, S, M, w, 15, f[50]),
                        M = o(M, D, O, S, d, 21, f[51]),
                        S = o(S, M, D, O, b, 6, f[52]),
                        O = o(O, S, M, D, l, 10, f[53]),
                        D = o(D, O, S, M, y, 15, f[54]),
                        M = o(M, D, O, S, u, 21, f[55]),
                        S = o(S, M, D, O, m, 6, f[56]),
                        O = o(O, S, M, D, E, 10, f[57]),
                        D = o(D, O, S, M, h, 15, f[58]),
                        M = o(M, D, O, S, x, 21, f[59]),
                        S = o(S, M, D, O, p, 6, f[60]),
                        O = o(O, S, M, D, _, 10, f[61]),
                        D = o(D, O, S, M, s, 15, f[62]),
                        M = o(M, D, O, S, g, 21, f[63]);
                        a[0] = a[0] + S | 0,
                        a[1] = a[1] + M | 0,
                        a[2] = a[2] + D | 0,
                        a[3] = a[3] + O | 0
                    },
                    _doFinalize: function() {
                        var e = this._data
                          , n = e.words
                          , r = 8 * this._nDataBytes
                          , o = 8 * e.sigBytes;
                        n[o >>> 5] |= 128 << 24 - o % 32;
                        var i = t.floor(r / 4294967296);
                        for (n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                        n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
                        e.sigBytes = 4 * (n.length + 1),
                        this._process(),
                        n = (e = this._hash).words,
                        r = 0; 4 > r; r++)
                            o = n[r],
                            n[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                        return e
                    },
                    clone: function() {
                        var t = c.clone.call(this);
                        return t._hash = this._hash.clone(),
                        t
                    }
                }),
                a.MD5 = c._createHelper(s),
                a.HmacMD5 = c._createHmacHelper(s)
            }(Math),
            function() {
                var t, e = i, n = (t = e.lib).Base, r = t.WordArray, o = (t = e.algo).EvpKDF = n.extend({
                    cfg: n.extend({
                        keySize: 4,
                        hasher: t.MD5,
                        iterations: 1
                    }),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t)
                    },
                    compute: function(t, e) {
                        for (var n = (u = this.cfg).hasher.create(), o = r.create(), i = o.words, a = u.keySize, u = u.iterations; i.length < a; ) {
                            c && n.update(c);
                            var c = n.update(t).finalize(e);
                            n.reset();
                            for (var s = 1; s < u; s++)
                                c = n.finalize(c),
                                n.reset();
                            o.concat(c)
                        }
                        return o.sigBytes = 4 * a,
                        o
                    }
                });
                e.EvpKDF = function(t, e, n) {
                    return o.create(n).compute(t, e)
                }
            }(),
            i.lib.Cipher || function(t) {
                var e = (h = i).lib
                  , n = e.Base
                  , r = e.WordArray
                  , o = e.BufferedBlockAlgorithm
                  , a = h.enc.Base64
                  , u = h.algo.EvpKDF
                  , c = e.Cipher = o.extend({
                    cfg: n.extend(),
                    createEncryptor: function(t, e) {
                        return this.create(this._ENC_XFORM_MODE, t, e)
                    },
                    createDecryptor: function(t, e) {
                        return this.create(this._DEC_XFORM_MODE, t, e)
                    },
                    init: function(t, e, n) {
                        this.cfg = this.cfg.extend(n),
                        this._xformMode = t,
                        this._key = e,
                        this.reset()
                    },
                    reset: function() {
                        o.reset.call(this),
                        this._doReset()
                    },
                    process: function(t) {
                        return this._append(t),
                        this._process()
                    },
                    finalize: function(t) {
                        return t && this._append(t),
                        this._doFinalize()
                    },
                    keySize: 4,
                    ivSize: 4,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: function(t) {
                        return {
                            encrypt: function(e, n, r) {
                                return ("string" == typeof n ? v : d).encrypt(t, e, n, r)
                            },
                            decrypt: function(e, n, r) {
                                return ("string" == typeof n ? v : d).decrypt(t, e, n, r)
                            }
                        }
                    }
                });
                e.StreamCipher = c.extend({
                    _doFinalize: function() {
                        return this._process(!0)
                    },
                    blockSize: 1
                });
                var s = h.mode = {}
                  , f = function(t, e, n) {
                    var r = this._iv;
                    r ? this._iv = void 0 : r = this._prevBlock;
                    for (var o = 0; o < n; o++)
                        t[e + o] ^= r[o]
                }
                  , l = (e.BlockCipherMode = n.extend({
                    createEncryptor: function(t, e) {
                        return this.Encryptor.create(t, e)
                    },
                    createDecryptor: function(t, e) {
                        return this.Decryptor.create(t, e)
                    },
                    init: function(t, e) {
                        this._cipher = t,
                        this._iv = e
                    }
                })).extend();
                l.Encryptor = l.extend({
                    processBlock: function(t, e) {
                        var n = this._cipher
                          , r = n.blockSize;
                        f.call(this, t, e, r),
                        n.encryptBlock(t, e),
                        this._prevBlock = t.slice(e, e + r)
                    }
                }),
                l.Decryptor = l.extend({
                    processBlock: function(t, e) {
                        var n = this._cipher
                          , r = n.blockSize
                          , o = t.slice(e, e + r);
                        n.decryptBlock(t, e),
                        f.call(this, t, e, r),
                        this._prevBlock = o
                    }
                }),
                s = s.CBC = l,
                l = (h.pad = {}).Pkcs7 = {
                    pad: function(t, e) {
                        for (var n, o = (n = (n = 4 * e) - t.sigBytes % n) << 24 | n << 16 | n << 8 | n, i = [], a = 0; a < n; a += 4)
                            i.push(o);
                        n = r.create(i, n),
                        t.concat(n)
                    },
                    unpad: function(t) {
                        t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2]
                    }
                },
                e.BlockCipher = c.extend({
                    cfg: c.cfg.extend({
                        mode: s,
                        padding: l
                    }),
                    reset: function() {
                        c.reset.call(this);
                        var t = (e = this.cfg).iv
                          , e = e.mode;
                        if (this._xformMode == this._ENC_XFORM_MODE)
                            var n = e.createEncryptor;
                        else
                            n = e.createDecryptor,
                            this._minBufferSize = 1;
                        this._mode = n.call(e, this, t && t.words)
                    },
                    _doProcessBlock: function(t, e) {
                        this._mode.processBlock(t, e)
                    },
                    _doFinalize: function() {
                        var t = this.cfg.padding;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            t.pad(this._data, this.blockSize);
                            var e = this._process(!0)
                        } else
                            e = this._process(!0),
                            t.unpad(e);
                        return e
                    },
                    blockSize: 4
                });
                var p = e.CipherParams = n.extend({
                    init: function(t) {
                        this.mixIn(t)
                    },
                    toString: function(t) {
                        return (t || this.formatter).stringify(this)
                    }
                })
                  , d = (s = (h.format = {}).OpenSSL = {
                    stringify: function(t) {
                        var e = t.ciphertext;
                        return ((t = t.salt) ? r.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(a)
                    },
                    parse: function(t) {
                        var e = (t = a.parse(t)).words;
                        if (1398893684 == e[0] && 1701076831 == e[1]) {
                            var n = r.create(e.slice(2, 4));
                            e.splice(0, 4),
                            t.sigBytes -= 16
                        }
                        return p.create({
                            ciphertext: t,
                            salt: n
                        })
                    }
                },
                e.SerializableCipher = n.extend({
                    cfg: n.extend({
                        format: s
                    }),
                    encrypt: function(t, e, n, r) {
                        r = this.cfg.extend(r);
                        var o = t.createEncryptor(n, r);
                        return e = o.finalize(e),
                        o = o.cfg,
                        p.create({
                            ciphertext: e,
                            key: n,
                            iv: o.iv,
                            algorithm: t,
                            mode: o.mode,
                            padding: o.padding,
                            blockSize: t.blockSize,
                            formatter: r.format
                        })
                    },
                    decrypt: function(t, e, n, r) {
                        return r = this.cfg.extend(r),
                        e = this._parse(e, r.format),
                        t.createDecryptor(n, r).finalize(e.ciphertext)
                    },
                    _parse: function(t, e) {
                        return "string" == typeof t ? e.parse(t, this) : t
                    }
                }))
                  , h = (h.kdf = {}).OpenSSL = {
                    execute: function(t, e, n, o) {
                        return o || (o = r.random(8)),
                        t = u.create({
                            keySize: e + n
                        }).compute(t, o),
                        n = r.create(t.words.slice(e), 4 * n),
                        t.sigBytes = 4 * e,
                        p.create({
                            key: t,
                            iv: n,
                            salt: o
                        })
                    }
                }
                  , v = e.PasswordBasedCipher = d.extend({
                    cfg: d.cfg.extend({
                        kdf: h
                    }),
                    encrypt: function(t, e, n, r) {
                        return n = (r = this.cfg.extend(r)).kdf.execute(n, t.keySize, t.ivSize),
                        r.iv = n.iv,
                        (t = d.encrypt.call(this, t, e, n.key, r)).mixIn(n),
                        t
                    },
                    decrypt: function(t, e, n, r) {
                        return r = this.cfg.extend(r),
                        e = this._parse(e, r.format),
                        n = r.kdf.execute(n, t.keySize, t.ivSize, e.salt),
                        r.iv = n.iv,
                        d.decrypt.call(this, t, e, n.key, r)
                    }
                })
            }(),
            function() {
                for (var t = i, e = t.lib.BlockCipher, n = t.algo, r = [], o = [], a = [], u = [], c = [], s = [], f = [], l = [], p = [], d = [], h = [], v = 0; 256 > v; v++)
                    h[v] = 128 > v ? v << 1 : v << 1 ^ 283;
                var m = 0
                  , g = 0;
                for (v = 0; 256 > v; v++) {
                    var y = (y = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4) >>> 8 ^ 255 & y ^ 99;
                    r[m] = y,
                    o[y] = m;
                    var _ = h[m]
                      , b = h[_]
                      , x = h[b]
                      , w = 257 * h[y] ^ 16843008 * y;
                    a[m] = w << 24 | w >>> 8,
                    u[m] = w << 16 | w >>> 16,
                    c[m] = w << 8 | w >>> 24,
                    s[m] = w,
                    w = 16843009 * x ^ 65537 * b ^ 257 * _ ^ 16843008 * m,
                    f[y] = w << 24 | w >>> 8,
                    l[y] = w << 16 | w >>> 16,
                    p[y] = w << 8 | w >>> 24,
                    d[y] = w,
                    m ? (m = _ ^ h[h[h[x ^ _]]],
                    g ^= h[h[g]]) : m = g = 1
                }
                var E = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
                n = n.AES = e.extend({
                    _doReset: function() {
                        for (var t = (n = this._key).words, e = n.sigBytes / 4, n = 4 * ((this._nRounds = e + 6) + 1), o = this._keySchedule = [], i = 0; i < n; i++)
                            if (i < e)
                                o[i] = t[i];
                            else {
                                var a = o[i - 1];
                                i % e ? 6 < e && 4 == i % e && (a = r[a >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[255 & a]) : (a = r[(a = a << 8 | a >>> 24) >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[255 & a],
                                a ^= E[i / e | 0] << 24),
                                o[i] = o[i - e] ^ a
                            }
                        for (t = this._invKeySchedule = [],
                        e = 0; e < n; e++)
                            i = n - e,
                            a = e % 4 ? o[i] : o[i - 4],
                            t[e] = 4 > e || 4 >= i ? a : f[r[a >>> 24]] ^ l[r[a >>> 16 & 255]] ^ p[r[a >>> 8 & 255]] ^ d[r[255 & a]]
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, a, u, c, s, r)
                    },
                    decryptBlock: function(t, e) {
                        var n = t[e + 1];
                        t[e + 1] = t[e + 3],
                        t[e + 3] = n,
                        this._doCryptBlock(t, e, this._invKeySchedule, f, l, p, d, o),
                        n = t[e + 1],
                        t[e + 1] = t[e + 3],
                        t[e + 3] = n
                    },
                    _doCryptBlock: function(t, e, n, r, o, i, a, u) {
                        for (var c = this._nRounds, s = t[e] ^ n[0], f = t[e + 1] ^ n[1], l = t[e + 2] ^ n[2], p = t[e + 3] ^ n[3], d = 4, h = 1; h < c; h++) {
                            var v = r[s >>> 24] ^ o[f >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & p] ^ n[d++]
                              , m = r[f >>> 24] ^ o[l >>> 16 & 255] ^ i[p >>> 8 & 255] ^ a[255 & s] ^ n[d++]
                              , g = r[l >>> 24] ^ o[p >>> 16 & 255] ^ i[s >>> 8 & 255] ^ a[255 & f] ^ n[d++];
                            p = r[p >>> 24] ^ o[s >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[255 & l] ^ n[d++],
                            s = v,
                            f = m,
                            l = g
                        }
                        v = (u[s >>> 24] << 24 | u[f >>> 16 & 255] << 16 | u[l >>> 8 & 255] << 8 | u[255 & p]) ^ n[d++],
                        m = (u[f >>> 24] << 24 | u[l >>> 16 & 255] << 16 | u[p >>> 8 & 255] << 8 | u[255 & s]) ^ n[d++],
                        g = (u[l >>> 24] << 24 | u[p >>> 16 & 255] << 16 | u[s >>> 8 & 255] << 8 | u[255 & f]) ^ n[d++],
                        p = (u[p >>> 24] << 24 | u[s >>> 16 & 255] << 16 | u[f >>> 8 & 255] << 8 | u[255 & l]) ^ n[d++],
                        t[e] = v,
                        t[e + 1] = m,
                        t[e + 2] = g,
                        t[e + 3] = p
                    },
                    keySize: 8
                });
                t.AES = e._createHelper(n)
            }(),
            i.pad.Iso10126 = {
                pad: function(t, e) {
                    var n = (n = 4 * e) - t.sigBytes % n;
                    t.concat(i.lib.WordArray.random(n - 1)).concat(i.lib.WordArray.create([n << 24], 1))
                },
                unpad: function(t) {
                    t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2]
                }
            }
            return i
 
    }






var encrypt =  function(t) {    
                    return t = e.enc.Utf8.parse(t),
                    e.AES.encrypt(t, o, {
                        mode: e.mode.CBC,
                        padding: e.pad.Iso10126,
                        iv: r
                    }).toString()
                }


function getpwd(t){
    var e = new wGdk;
    var r = e.enc.Utf8.parse("youzan.com.aesiv");
    var o = e.enc.Utf8.parse("youzan.com._key_");
    var t = e.enc.Utf8.parse(t);
    return  e.AES.encrypt(t, o, {
                        mode: e.mode.CBC,
                        padding: e.pad.Iso10126,
                        iv: r
                    }).toString()
}

"""
pwd = execjs.compile(js_).call("getpwd", "222222")  # TODO: 输入 账号 密码

print(pwd)
