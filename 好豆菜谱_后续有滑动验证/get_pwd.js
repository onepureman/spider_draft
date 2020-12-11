
function md5() {
                "use strict";
                var ERROR = "input is invalid type"
                  , WINDOW = "object" == typeof window
                  , root = WINDOW ? window : {};
                root.JS_MD5_NO_WINDOW && (WINDOW = !1);
                var WEB_WORKER = !WINDOW && "object" == typeof self
                  , NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
                NODE_JS ? root = global : WEB_WORKER && (root = self);
                var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" == typeof module && module.exports, ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [128, 32768, 8388608, -2147483648], SHIFT = [0, 8, 16, 24], OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), blocks = [], buffer8;
                if (ARRAY_BUFFER) {
                    var buffer = new ArrayBuffer(68);
                    buffer8 = new Uint8Array(buffer),
                    blocks = new Uint32Array(buffer)
                }
                !root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
                ),
                !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                    return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
                }
                );
                var createOutputMethod = function(e) {
                    return function(t) {
                        return new Md5(!0).update(t)[e]()
                    }
                }
                  , createMethod = function() {
                    var e = createOutputMethod("hex");
                    NODE_JS && (e = nodeWrap(e)),
                    e.create = function() {
                        return new Md5
                    }
                    ,
                    e.update = function(t) {
                        return e.create().update(t)
                    }
                    ;
                    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
                        var t = OUTPUT_TYPES[i];
                        e[t] = createOutputMethod(t)
                    }
                    return e
                }
                  , nodeWrap = function(method) {
                    var crypto = eval("require('crypto')")
                      , Buffer = eval("require('buffer').Buffer")
                      , nodeMethod = function(e) {
                        if ("string" == typeof e)
                            return crypto.createHash("md5").update(e, "utf8").digest("hex");
                        if (null == e)
                            throw ERROR;
                        return e.constructor === ArrayBuffer && (e = new Uint8Array(e)),
                        Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(e)).digest("hex") : method(e)
                    };
                    return nodeMethod
                };
                function Md5(e) {
                    if (e)
                        blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0,
                        this.blocks = blocks,
                        this.buffer8 = buffer8;
                    else if (ARRAY_BUFFER) {
                        var t = new ArrayBuffer(68);
                        this.buffer8 = new Uint8Array(t),
                        this.blocks = new Uint32Array(t)
                    } else
                        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0,
                    this.finalized = this.hashed = !1,
                    this.first = !0
                }
                Md5.prototype.update = function(e) {
                    if (!this.finalized) {
                        var t, n = typeof e;
                        if ("string" !== n) {
                            if ("object" !== n)
                                throw ERROR;
                            if (null === e)
                                throw ERROR;
                            if (ARRAY_BUFFER && e.constructor === ArrayBuffer)
                                e = new Uint8Array(e);
                            else if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e)))
                                throw ERROR;
                            t = !0
                        }
                        for (var code, i, r = 0, o = e.length, l = this.blocks, c = this.buffer8; r < o; ) {
                            if (this.hashed && (this.hashed = !1,
                            l[0] = l[16],
                            l[16] = l[1] = l[2] = l[3] = l[4] = l[5] = l[6] = l[7] = l[8] = l[9] = l[10] = l[11] = l[12] = l[13] = l[14] = l[15] = 0),
                            t)
                                if (ARRAY_BUFFER)
                                    for (i = this.start; r < o && i < 64; ++r)
                                        c[i++] = e[r];
                                else
                                    for (i = this.start; r < o && i < 64; ++r)
                                        l[i >> 2] |= e[r] << SHIFT[3 & i++];
                            else if (ARRAY_BUFFER)
                                for (i = this.start; r < o && i < 64; ++r)
                                    (code = e.charCodeAt(r)) < 128 ? c[i++] = code : code < 2048 ? (c[i++] = 192 | code >> 6,
                                    c[i++] = 128 | 63 & code) : code < 55296 || code >= 57344 ? (c[i++] = 224 | code >> 12,
                                    c[i++] = 128 | code >> 6 & 63,
                                    c[i++] = 128 | 63 & code) : (code = 65536 + ((1023 & code) << 10 | 1023 & e.charCodeAt(++r)),
                                    c[i++] = 240 | code >> 18,
                                    c[i++] = 128 | code >> 12 & 63,
                                    c[i++] = 128 | code >> 6 & 63,
                                    c[i++] = 128 | 63 & code);
                            else
                                for (i = this.start; r < o && i < 64; ++r)
                                    (code = e.charCodeAt(r)) < 128 ? l[i >> 2] |= code << SHIFT[3 & i++] : code < 2048 ? (l[i >> 2] |= (192 | code >> 6) << SHIFT[3 & i++],
                                    l[i >> 2] |= (128 | 63 & code) << SHIFT[3 & i++]) : code < 55296 || code >= 57344 ? (l[i >> 2] |= (224 | code >> 12) << SHIFT[3 & i++],
                                    l[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[3 & i++],
                                    l[i >> 2] |= (128 | 63 & code) << SHIFT[3 & i++]) : (code = 65536 + ((1023 & code) << 10 | 1023 & e.charCodeAt(++r)),
                                    l[i >> 2] |= (240 | code >> 18) << SHIFT[3 & i++],
                                    l[i >> 2] |= (128 | code >> 12 & 63) << SHIFT[3 & i++],
                                    l[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[3 & i++],
                                    l[i >> 2] |= (128 | 63 & code) << SHIFT[3 & i++]);
                            this.lastByteIndex = i,
                            this.bytes += i - this.start,
                            i >= 64 ? (this.start = i - 64,
                            this.hash(),
                            this.hashed = !0) : this.start = i
                        }
                        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
                        this.bytes = this.bytes % 4294967296),
                        this
                    }
                }
                ,
                Md5.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var e = this.blocks
                          , i = this.lastByteIndex;
                        e[i >> 2] |= EXTRA[3 & i],
                        i >= 56 && (this.hashed || this.hash(),
                        e[0] = e[16],
                        e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0),
                        e[14] = this.bytes << 3,
                        e[15] = this.hBytes << 3 | this.bytes >>> 29,
                        this.hash()
                    }
                }
                ,
                Md5.prototype.hash = function() {
                    var a, b, e, t, n, r, o = this.blocks;
                    this.first ? b = ((b = ((a = ((a = o[0] - 680876937) << 7 | a >>> 25) - 271733879 << 0) ^ (e = ((e = (-271733879 ^ (t = ((t = (-1732584194 ^ 2004318071 & a) + o[1] - 117830708) << 12 | t >>> 20) + a << 0) & (-271733879 ^ a)) + o[2] - 1126478375) << 17 | e >>> 15) + t << 0) & (t ^ a)) + o[3] - 1316259209) << 22 | b >>> 10) + e << 0 : (a = this.h0,
                    b = this.h1,
                    e = this.h2,
                    b = ((b += ((a = ((a += ((t = this.h3) ^ b & (e ^ t)) + o[0] - 680876936) << 7 | a >>> 25) + b << 0) ^ (e = ((e += (b ^ (t = ((t += (e ^ a & (b ^ e)) + o[1] - 389564586) << 12 | t >>> 20) + a << 0) & (a ^ b)) + o[2] + 606105819) << 17 | e >>> 15) + t << 0) & (t ^ a)) + o[3] - 1044525330) << 22 | b >>> 10) + e << 0),
                    b = ((b += ((a = ((a += (t ^ b & (e ^ t)) + o[4] - 176418897) << 7 | a >>> 25) + b << 0) ^ (e = ((e += (b ^ (t = ((t += (e ^ a & (b ^ e)) + o[5] + 1200080426) << 12 | t >>> 20) + a << 0) & (a ^ b)) + o[6] - 1473231341) << 17 | e >>> 15) + t << 0) & (t ^ a)) + o[7] - 45705983) << 22 | b >>> 10) + e << 0,
                    b = ((b += ((a = ((a += (t ^ b & (e ^ t)) + o[8] + 1770035416) << 7 | a >>> 25) + b << 0) ^ (e = ((e += (b ^ (t = ((t += (e ^ a & (b ^ e)) + o[9] - 1958414417) << 12 | t >>> 20) + a << 0) & (a ^ b)) + o[10] - 42063) << 17 | e >>> 15) + t << 0) & (t ^ a)) + o[11] - 1990404162) << 22 | b >>> 10) + e << 0,
                    b = ((b += ((a = ((a += (t ^ b & (e ^ t)) + o[12] + 1804603682) << 7 | a >>> 25) + b << 0) ^ (e = ((e += (b ^ (t = ((t += (e ^ a & (b ^ e)) + o[13] - 40341101) << 12 | t >>> 20) + a << 0) & (a ^ b)) + o[14] - 1502002290) << 17 | e >>> 15) + t << 0) & (t ^ a)) + o[15] + 1236535329) << 22 | b >>> 10) + e << 0,
                    b = ((b += ((t = ((t += (b ^ e & ((a = ((a += (e ^ t & (b ^ e)) + o[1] - 165796510) << 5 | a >>> 27) + b << 0) ^ b)) + o[6] - 1069501632) << 9 | t >>> 23) + a << 0) ^ a & ((e = ((e += (a ^ b & (t ^ a)) + o[11] + 643717713) << 14 | e >>> 18) + t << 0) ^ t)) + o[0] - 373897302) << 20 | b >>> 12) + e << 0,
                    b = ((b += ((t = ((t += (b ^ e & ((a = ((a += (e ^ t & (b ^ e)) + o[5] - 701558691) << 5 | a >>> 27) + b << 0) ^ b)) + o[10] + 38016083) << 9 | t >>> 23) + a << 0) ^ a & ((e = ((e += (a ^ b & (t ^ a)) + o[15] - 660478335) << 14 | e >>> 18) + t << 0) ^ t)) + o[4] - 405537848) << 20 | b >>> 12) + e << 0,
                    b = ((b += ((t = ((t += (b ^ e & ((a = ((a += (e ^ t & (b ^ e)) + o[9] + 568446438) << 5 | a >>> 27) + b << 0) ^ b)) + o[14] - 1019803690) << 9 | t >>> 23) + a << 0) ^ a & ((e = ((e += (a ^ b & (t ^ a)) + o[3] - 187363961) << 14 | e >>> 18) + t << 0) ^ t)) + o[8] + 1163531501) << 20 | b >>> 12) + e << 0,
                    b = ((b += ((t = ((t += (b ^ e & ((a = ((a += (e ^ t & (b ^ e)) + o[13] - 1444681467) << 5 | a >>> 27) + b << 0) ^ b)) + o[2] - 51403784) << 9 | t >>> 23) + a << 0) ^ a & ((e = ((e += (a ^ b & (t ^ a)) + o[7] + 1735328473) << 14 | e >>> 18) + t << 0) ^ t)) + o[12] - 1926607734) << 20 | b >>> 12) + e << 0,
                    b = ((b += ((r = (t = ((t += ((n = b ^ e) ^ (a = ((a += (n ^ t) + o[5] - 378558) << 4 | a >>> 28) + b << 0)) + o[8] - 2022574463) << 11 | t >>> 21) + a << 0) ^ a) ^ (e = ((e += (r ^ b) + o[11] + 1839030562) << 16 | e >>> 16) + t << 0)) + o[14] - 35309556) << 23 | b >>> 9) + e << 0,
                    b = ((b += ((r = (t = ((t += ((n = b ^ e) ^ (a = ((a += (n ^ t) + o[1] - 1530992060) << 4 | a >>> 28) + b << 0)) + o[4] + 1272893353) << 11 | t >>> 21) + a << 0) ^ a) ^ (e = ((e += (r ^ b) + o[7] - 155497632) << 16 | e >>> 16) + t << 0)) + o[10] - 1094730640) << 23 | b >>> 9) + e << 0,
                    b = ((b += ((r = (t = ((t += ((n = b ^ e) ^ (a = ((a += (n ^ t) + o[13] + 681279174) << 4 | a >>> 28) + b << 0)) + o[0] - 358537222) << 11 | t >>> 21) + a << 0) ^ a) ^ (e = ((e += (r ^ b) + o[3] - 722521979) << 16 | e >>> 16) + t << 0)) + o[6] + 76029189) << 23 | b >>> 9) + e << 0,
                    b = ((b += ((r = (t = ((t += ((n = b ^ e) ^ (a = ((a += (n ^ t) + o[9] - 640364487) << 4 | a >>> 28) + b << 0)) + o[12] - 421815835) << 11 | t >>> 21) + a << 0) ^ a) ^ (e = ((e += (r ^ b) + o[15] + 530742520) << 16 | e >>> 16) + t << 0)) + o[2] - 995338651) << 23 | b >>> 9) + e << 0,
                    b = ((b += ((t = ((t += (b ^ ((a = ((a += (e ^ (b | ~t)) + o[0] - 198630844) << 6 | a >>> 26) + b << 0) | ~e)) + o[7] + 1126891415) << 10 | t >>> 22) + a << 0) ^ ((e = ((e += (a ^ (t | ~b)) + o[14] - 1416354905) << 15 | e >>> 17) + t << 0) | ~a)) + o[5] - 57434055) << 21 | b >>> 11) + e << 0,
                    b = ((b += ((t = ((t += (b ^ ((a = ((a += (e ^ (b | ~t)) + o[12] + 1700485571) << 6 | a >>> 26) + b << 0) | ~e)) + o[3] - 1894986606) << 10 | t >>> 22) + a << 0) ^ ((e = ((e += (a ^ (t | ~b)) + o[10] - 1051523) << 15 | e >>> 17) + t << 0) | ~a)) + o[1] - 2054922799) << 21 | b >>> 11) + e << 0,
                    b = ((b += ((t = ((t += (b ^ ((a = ((a += (e ^ (b | ~t)) + o[8] + 1873313359) << 6 | a >>> 26) + b << 0) | ~e)) + o[15] - 30611744) << 10 | t >>> 22) + a << 0) ^ ((e = ((e += (a ^ (t | ~b)) + o[6] - 1560198380) << 15 | e >>> 17) + t << 0) | ~a)) + o[13] + 1309151649) << 21 | b >>> 11) + e << 0,
                    b = ((b += ((t = ((t += (b ^ ((a = ((a += (e ^ (b | ~t)) + o[4] - 145523070) << 6 | a >>> 26) + b << 0) | ~e)) + o[11] - 1120210379) << 10 | t >>> 22) + a << 0) ^ ((e = ((e += (a ^ (t | ~b)) + o[2] + 718787259) << 15 | e >>> 17) + t << 0) | ~a)) + o[9] - 343485551) << 21 | b >>> 11) + e << 0,
                    this.first ? (this.h0 = a + 1732584193 << 0,
                    this.h1 = b - 271733879 << 0,
                    this.h2 = e - 1732584194 << 0,
                    this.h3 = t + 271733878 << 0,
                    this.first = !1) : (this.h0 = this.h0 + a << 0,
                    this.h1 = this.h1 + b << 0,
                    this.h2 = this.h2 + e << 0,
                    this.h3 = this.h3 + t << 0)
                }
                ,
                Md5.prototype.hex = function() {
                    this.finalize();
                    var e = this.h0
                      , h1 = this.h1
                      , h2 = this.h2
                      , h3 = this.h3;
                    return HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[15 & h1] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h2 >> 4 & 15] + HEX_CHARS[15 & h2] + HEX_CHARS[h2 >> 12 & 15] + HEX_CHARS[h2 >> 8 & 15] + HEX_CHARS[h2 >> 20 & 15] + HEX_CHARS[h2 >> 16 & 15] + HEX_CHARS[h2 >> 28 & 15] + HEX_CHARS[h2 >> 24 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[15 & h3] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15]
                }
                ,
                Md5.prototype.toString = Md5.prototype.hex,
                Md5.prototype.digest = function() {
                    this.finalize();
                    var e = this.h0
                      , h1 = this.h1
                      , h2 = this.h2
                      , h3 = this.h3;
                    return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & h1, h1 >> 8 & 255, h1 >> 16 & 255, h1 >> 24 & 255, 255 & h2, h2 >> 8 & 255, h2 >> 16 & 255, h2 >> 24 & 255, 255 & h3, h3 >> 8 & 255, h3 >> 16 & 255, h3 >> 24 & 255]
                }
                ,
                Md5.prototype.array = Md5.prototype.digest,
                Md5.prototype.arrayBuffer = function() {
                    this.finalize();
                    var e = new ArrayBuffer(16)
                      , t = new Uint32Array(e);
                    return t[0] = this.h0,
                    t[1] = this.h1,
                    t[2] = this.h2,
                    t[3] = this.h3,
                    e
                }
                ,
                Md5.prototype.buffer = Md5.prototype.arrayBuffer,
                Md5.prototype.base64 = function() {
                    for (var e, t, n, r = "", o = this.array(), i = 0; i < 15; )
                        e = o[i++],
                        t = o[i++],
                        n = o[i++],
                        r += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[63 & (e << 4 | t >>> 4)] + BASE64_ENCODE_CHAR[63 & (t << 2 | n >>> 6)] + BASE64_ENCODE_CHAR[63 & n];
                    return e = o[i],
                    r += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[e << 4 & 63] + "=="
                }
                ;
                var exports = createMethod();
    return exports
    }
function getpwd (pwd) {
        return new md5(!0).update(pwd).toString()
        }
