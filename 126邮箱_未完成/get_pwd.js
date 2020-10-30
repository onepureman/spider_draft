function getpwd(pwd){
    var t = RSA.getPublicKey("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5gsH+AA4XWONB5TDcUd+xCz7ejOFHZKlcZDx+pF1i7Gsvi1vjyJoQhRtRSn950x498VUkx7rUxg1/ScBVfrRxQOZ8xFBye3pjAzfb22+RCuYApSVpJ3OO3KsEuKExftz9oFBv3ejxPlYc5yq7YiBO8XlTnQN0Sa4R4qhPO3I2MQIDAQAB-----END PUBLIC KEY-----");
    return RSA.encrypt(pwd, t)
}

var RSA = {
    getPublicKey: function(e) {
        if (e.length < 50)
            return !1;
        if ("-----BEGIN PUBLIC KEY-----" != e.substr(0, 26))
            return !1;
        e = e.substr(26);
        if ("-----END PUBLIC KEY-----" != e.substr(e.length - 24))
            return !1;
        e = e.substr(0, e.length - 24);
        e = new ASN1Data(Base64.decode(e));
        if (e.error)
            return !1;
        e = e.data;
        if ("1.2.840.113549.1.1.1" == e[0][0][0])
            return new RSAPublicKey(e[0][1][0][0],e[0][1][0][1]);
        else
            return !1
    },
    encrypt: function(e, t) {
        if (!t)
            return !1;
        var i = bnBitLength() + 7 >> 3;
        e = this.pkcs1pad2(e, i);
        if (!e)
            return !1;
        e = e.modPowInt(t.encryptionExponent, t.modulus);
        if (!e)
            return !1;
        e = e.toString(16);
        for (; e.length < 2 * i; )
            e = "0" + e;
        return Base64.encode(Hex.decode(e))
    },
    decrypt: function(e) {
        var t = new BigInteger(e,16)
    },
    pkcs1pad2: function(e, t) {
        if (t < e.length + 11)
            return null;
        var i = [];
        var n = e.length - 1;
        for (; n >= 0 && t > 0; )
            i[--t] = e.charCodeAt(n--);
        i[--t] = 0;
        for (; t > 2; )
            i[--t] = Math.floor(254 * Math.random()) + 1;
        i[--t] = 2;
        i[--t] = 0;
        return new BigInteger(i)
    }
};
var ASN1Data = function(e) {
    this.error = !1;
    this.parse = function(e) {
        if (!e) {
            this.error = !0;
            return null
        }
        var t = [];
        for (; e.length > 0; ) {
            var i = e.charCodeAt(0);
            e = e.substr(1);
            var n = 0;
            if (5 == (31 & i))
                e = e.substr(1);
            else if (128 & e.charCodeAt(0)) {
                var s = 127 & e.charCodeAt(0);
                e = e.substr(1);
                if (s > 0)
                    n = e.charCodeAt(0);
                if (s > 1)
                    n = n << 8 | e.charCodeAt(1);
                if (s > 2) {
                    this.error = !0;
                    return null
                }
                e = e.substr(s)
            } else {
                n = e.charCodeAt(0);
                e = e.substr(1)
            }
            var a = "";
            if (n) {
                if (n > e.length) {
                    this.error = !0;
                    return null
                }
                a = e.substr(0, n);
                e = e.substr(n)
            }
            if (32 & i)
                t.push(this.parse(a));
            else
                t.push(this.value(128 & i ? 4 : 31 & i, a))
        }
        return t
    }
    ;
    this.value = function(e, t) {
        if (1 == e)
            return t ? !0 : !1;
        else if (2 == e)
            return t;
        else if (3 == e)
            return this.parse(t.substr(1));
        else if (5 == e)
            return null;
        else if (6 == e) {
            var i = [];
            var n = t.charCodeAt(0);
            i.push(Math.floor(n / 40));
            i.push(n - 40 * i[0]);
            var s = [];
            var a = 0;
            var r;
            for (r = 1; r < t.length; r++) {
                var o = t.charCodeAt(r);
                s.push(127 & o);
                if (128 & o)
                    a++;
                else {
                    var c;
                    var _ = 0;
                    for (c = 0; c < s.length; c++)
                        _ += s[c] * Math.pow(128, a--);
                    i.push(_);
                    a = 0;
                    s = []
                }
            }
            return i.join(".")
        }
        return null
    }
    ;
    this.data = this.parse(e)
};
var Base64 = {
    base64: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        if (!e)
            return !1;
        var t = "";
        var i, n, s;
        var a, r, o, c;
        var _ = 0;
        do {
            i = e.charCodeAt(_++);
            n = e.charCodeAt(_++);
            s = e.charCodeAt(_++);
            a = i >> 2;
            r = (3 & i) << 4 | n >> 4;
            o = (15 & n) << 2 | s >> 6;
            c = 63 & s;
            if (isNaN(n))
                o = c = 64;
            else if (isNaN(s))
                c = 64;
            t += this.base64.charAt(a) + this.base64.charAt(r) + this.base64.charAt(o) + this.base64.charAt(c)
        } while (_ < e.length);return t
    },
    decode: function(e) {
        if (!e)
            return !1;
        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        var t = "";
        var i, n, s, a;
        var r = 0;
        do {
            i = this.base64.indexOf(e.charAt(r++));
            n = this.base64.indexOf(e.charAt(r++));
            s = this.base64.indexOf(e.charAt(r++));
            a = this.base64.indexOf(e.charAt(r++));
            t += String.fromCharCode(i << 2 | n >> 4);
            if (64 != s)
                t += String.fromCharCode((15 & n) << 4 | s >> 2);
            if (64 != a)
                t += String.fromCharCode((3 & s) << 6 | a)
        } while (r < e.length);return t
    }
};
var RSAPublicKey = function(e, t) {
    this.modulus = new BigInteger(Hex.encode(e),16);
    this.encryptionExponent = new BigInteger(Hex.encode(t),16)
};

function BigInteger(e, t, i) {
    if (null != e)
        if ("number" == typeof e)
            this.fromNumber(e, t, i);
        else if (null == t && "string" != typeof e)
            bnpFromString(e, 256);
        else
            bnpFromString(e, t);

};
var Hex = {
    hex: "0123456789abcdef",
    encode: function(e) {
        if (!e)
            return !1;
        var t = "";
        var i;
        var n = 0;
        do {
            i = e.charCodeAt(n++);
            t += this.hex.charAt(i >> 4 & 15) + this.hex.charAt(15 & i)
        } while (n < e.length);return t
    },
    decode: function(e) {
        if (!e)
            return !1;
        e = e.replace(/[^0-9abcdef]/g, "");
        var t = "";
        var i = 0;
        do
            t += String.fromCharCode(this.hex.indexOf(e.charAt(i++)) << 4 & 240 | 15 & this.hex.indexOf(e.charAt(i++)));
        while (i < e.length);return t
    }
};
var BI_RC = new Array;
function bnpFromString(e, t) {
    var i;
    if (16 == t)
        i = 4;
    else if (8 == t)
        i = 3;
    else if (256 == t)
        i = 8;
    else if (2 == t)
        i = 1;
    else if (32 == t)
        i = 5;
    else if (4 == t)
        i = 2;
    else {
        this.fromRadix(e, t);
        return
    }
    this.t = 0;
    this.s = 0;
    var n = e.length
      , s = !1
      , a = 0;
    for (; --n >= 0; ) {
        var r = 8 == i ? 255 & e[n] : intAt(e, n);
        if (!(r < 0)) {
            s = !1;
            if (0 == a)
                this[this.t++] = r;
            else if (a + i > this.DB) {
                this[this.t - 1] |= (r & (1 << this.DB - a) - 1) << a;
                this[this.t++] = r >> this.DB - a
            } else
                this[this.t - 1] |= r << a;
            a += i;
            if (a >= this.DB)
                a -= this.DB
        } else if ("-" == e.charAt(n))
            s = !0
    }
    if (8 == i && 0 != (128 & e[0])) {
        this.s = -1;
        if (a > 0)
            this[this.t - 1] |= (1 << this.DB - a) - 1 << a
    }
    bnpClamp();
    if (s)
        BigInteger.ZERO.subTo(this, this)
}
function bnBitLength() {
    if (this.t <= 0)
        return 0;
    else
        return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM)
}
function nbits(e) {
    var t = 1, i;
    if (0 != (i = e >>> 16)) {
        e = i;
        t += 16
    }
    if (0 != (i = e >> 8)) {
        e = i;
        t += 8
    }
    if (0 != (i = e >> 4)) {
        e = i;
        t += 4
    }
    if (0 != (i = e >> 2)) {
        e = i;
        t += 2
    }
    if (0 != (i = e >> 1)) {
        e = i;
        t += 1
    }
    return t
}


function bnpFromString(e, t) {
    var i;
    if (16 == t)
        i = 4;
    else if (8 == t)
        i = 3;
    else if (256 == t)
        i = 8;
    else if (2 == t)
        i = 1;
    else if (32 == t)
        i = 5;
    else if (4 == t)
        i = 2;
    else {
        this.fromRadix(e, t);
        return
    }
    this.t = 0;
    this.s = 0;
    var n = e.length
      , s = !1
      , a = 0;
    for (; --n >= 0; ) {
        var r = 8 == i ? 255 & e[n] : intAt(e, n);
        if (!(r < 0)) {
            s = !1;
            if (0 == a)
                this[this.t++] = r;
            else if (a + i > this.DB) {
                this[this.t - 1] |= (r & (1 << this.DB - a) - 1) << a;
                this[this.t++] = r >> this.DB - a
            } else
                this[this.t - 1] |= r << a;
            a += i;
            if (a >= this.DB)
                a -= this.DB
        } else if ("-" == e.charAt(n))
            s = !0
    }
    if (8 == i && 0 != (128 & e[0])) {
        this.s = -1;
        if (a > 0)
            this[this.t - 1] |= (1 << this.DB - a) - 1 << a
    }
    bnpClamp();
    if (s)
        BigInteger.ZERO.subTo(this, this)
}
function intAt(e, t) {
    var i = BI_RC[e.charCodeAt(t)];
    return null == i ? -1 : i
}


function bnpClamp() {
    var e = this.s & this.DM;
    for (; this.t > 0 && this[this.t - 1] == e; )
        --this.t
}