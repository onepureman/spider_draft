!function (t) {
    function e(e) {
        for (var o, r, s = e[0], c = e[1], l = e[2], u = 0, d = []; u < s.length; u++) r = s[u], Object.prototype.hasOwnProperty.call(i, r) && i[r] && d.push(i[r][0]), i[r] = 0;
        for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
        for (p && p(e); d.length;) d.shift()();
        return a.push.apply(a, l || []), n()
    }

    function n() {
        for (var t, e = 0; e < a.length; e++) {
            for (var n = a[e], o = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== i[c] && (o = !1)
            }
            o && (a.splice(e--, 1), t = s(s.s = n[0]))
        }
        return t
    }

    var o = {}, r = {"6": 0}, i = {"6": 0}, a = [];

    function s(e) {
        if (o[e]) return o[e].exports;
        var n = o[e] = {"i": e, "l": !1, "exports": {}};
        return t[e].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }

    s.e = function (t) {
        var e = [];
        r[t] ? e.push(r[t]) : 0 !== r[t] && {
            "5": 1,
            "7": 1,
            "11": 1,
            "12": 1,
            "14": 1,
            "15": 1,
            "18": 1,
            "19": 1,
            "20": 1
        }[t] && e.push(r[t] = new Promise((function (e, n) {
            for (var o = "ssr/static/css/" + t + "." + {
                "0": "31d6cfe0",
                "1": "31d6cfe0",
                "2": "31d6cfe0",
                "3": "31d6cfe0",
                "4": "31d6cfe0",
                "5": "1451bcf6",
                "7": "803258c6",
                "8": "31d6cfe0",
                "9": "31d6cfe0",
                "10": "31d6cfe0",
                "11": "433e5979",
                "12": "f12c0f38",
                "13": "31d6cfe0",
                "14": "1451bcf6",
                "15": "8e1575b2",
                "16": "31d6cfe0",
                "18": "99687a32",
                "19": "65f4b319",
                "20": "856e3a0f",
                "21": "31d6cfe0",
                "22": "31d6cfe0"
            }[t] + ".css", i = s.p + o, a = document.getElementsByTagName("link"), c = 0; c < a.length; c++) {
                var l = (p = a[c]).getAttribute("data-href") || p.getAttribute("href");
                if ("stylesheet" === p.rel && (l === o || l === i)) return e()
            }
            var u = document.getElementsByTagName("style");
            for (c = 0; c < u.length; c++) {
                var p;
                if ((l = (p = u[c]).getAttribute("data-href")) === o || l === i) return e()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet", d.type = "text/css", d.onload = e, d.onerror = function (e) {
                var o = e && e.target && e.target.src || i,
                    a = new Error("Loading CSS chunk " + t + " failed.\n(" + o + ")");
                a.request = o, delete r[t], d.parentNode.removeChild(d), n(a)
            }, d.href = i, 0 !== d.href.indexOf(window.location.origin + "/") && (d.crossOrigin = "anonymous"), document.getElementsByTagName("head")[0].appendChild(d)
        })).then((function () {
            r[t] = 0
        })));
        var n = i[t];
        if (0 !== n) if (n) e.push(n[2]); else {
            var o = new Promise((function (e, o) {
                n = i[t] = [e, o]
            }));
            e.push(n[2] = o);
            var a, c = document.createElement("script");
            c.charset = "utf-8", c.timeout = 120, s.nc && c.setAttribute("nonce", s.nc), c.src = function (t) {
                return s.p + "ssr/static/js/" + ({
                    "0": "common",
                    "5": "agreement",
                    "7": "bookpage",
                    "8": "docpreview",
                    "9": "docrecord",
                    "10": "document",
                    "11": "favorite",
                    "12": "feed",
                    "13": "jump",
                    "14": "policy",
                    "15": "reset",
                    "16": "text",
                    "18": "wapsite",
                    "19": "website",
                    "20": "writing",
                    "21": "wtireBook_index",
                    "22": "wtireBook_wapsearch"
                }[t] || t) + "." + {
                    "0": "42b37ae4",
                    "1": "d50a733a",
                    "2": "2e0390d6",
                    "3": "0eae546a",
                    "4": "11c93e31",
                    "5": "f144b7cd",
                    "7": "ac5be82e",
                    "8": "07f297a8",
                    "9": "ff737f40",
                    "10": "bc9b33ce",
                    "11": "7bb2f629",
                    "12": "807028f5",
                    "13": "a522d3b1",
                    "14": "ab089da1",
                    "15": "4a3ec6c4",
                    "16": "540ab8b5",
                    "18": "ec18b5a9",
                    "19": "a1e5a415",
                    "20": "c721fdbd",
                    "21": "721ddd26",
                    "22": "8caf0ee1"
                }[t] + ".js"
            }(t), 0 !== c.src.indexOf(window.location.origin + "/") && (c.crossOrigin = "anonymous");
            var l = new Error;
            a = function (e) {
                c.onerror = c.onload = null, clearTimeout(u);
                var n = i[t];
                if (0 !== n) {
                    if (n) {
                        var o = e && ("load" === e.type ? "missing" : e.type), r = e && e.target && e.target.src;
                        l.message = "Loading chunk " + t + " failed.\n(" + o + ": " + r + ")", l.name = "ChunkLoadError", l.type = o, l.request = r, n[1](l)
                    }
                    i[t] = void 0
                }
            };
            var u = setTimeout((function () {
                a({"type": "timeout", "target": c})
            }), 12e4);
            c.onerror = c.onload = a, document.head.appendChild(c)
        }
        return Promise.all(e)
    }, s.m = t, s.c = o, s.d = function (t, e, n) {
        s.o(t, e) || Object.defineProperty(t, e, {"enumerable": !0, "get": n})
    }, s.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {"value": "Module"}), Object.defineProperty(t, "__esModule", {"value": !0})
    }, s.t = function (t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
            "enumerable": !0,
            "value": t
        }), 2 & e && "string" != typeof t) for (var o in t) s.d(n, o, function (e) {
            return t[e]
        }.bind(null, o));
        return n
    }, s.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return s.d(e, "a", e), e
    }, s.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, s.p = "//dlweb.sogoucdn.com/translate/", s.oe = function (t) {
        throw console.error(t), t
    };
    var c = window.webpackJsonp = window.webpackJsonp || [], l = c.push.bind(c);
    c.push = e, c = c.slice();
    for (var u = 0; u < c.length; u++) e(c[u]);
    var p = l;
    a.push([391, 17]), n()
}({
    "0": function (t, e, n) {
        "use strict";
        n.d(e, "lb", (function () {
            return o
        })), n.d(e, "Yb", (function () {
            return r
        })), n.d(e, "wb", (function () {
            return i
        })), n.d(e, "mb", (function () {
            return a
        })), n.d(e, "Tb", (function () {
            return s
        })), n.d(e, "Xb", (function () {
            return c
        })), n.d(e, "Eb", (function () {
            return l
        })), n.d(e, "Qb", (function () {
            return u
        })), n.d(e, "pb", (function () {
            return p
        })), n.d(e, "Wb", (function () {
            return d
        })), n.d(e, "Cb", (function () {
            return f
        })), n.d(e, "tb", (function () {
            return h
        })), n.d(e, "N", (function () {
            return m
        })), n.d(e, "Sb", (function () {
            return g
        })), n.d(e, "Ub", (function () {
            return v
        })), n.d(e, "fc", (function () {
            return y
        })), n.d(e, "cb", (function () {
            return w
        })), n.d(e, "Q", (function () {
            return _
        })), n.d(e, "n", (function () {
            return b
        })), n.d(e, "F", (function () {
            return O
        })), n.d(e, "w", (function () {
            return S
        })), n.d(e, "k", (function () {
            return A
        })), n.d(e, "ob", (function () {
            return C
        })), n.d(e, "ub", (function () {
            return T
        })), n.d(e, "K", (function () {
            return E
        })), n.d(e, "a", (function () {
            return k
        })), n.d(e, "J", (function () {
            return P
        })), n.d(e, "S", (function () {
            return x
        })), n.d(e, "ib", (function () {
            return I
        })), n.d(e, "hb", (function () {
            return j
        })), n.d(e, "Pb", (function () {
            return D
        })), n.d(e, "X", (function () {
            return L
        })), n.d(e, "dc", (function () {
            return N
        })), n.d(e, "bc", (function () {
            return R
        })), n.d(e, "gb", (function () {
            return U
        })), n.d(e, "eb", (function () {
            return B
        })), n.d(e, "fb", (function () {
            return M
        })), n.d(e, "c", (function () {
            return G
        })), n.d(e, "qb", (function () {
            return q
        })), n.d(e, "rb", (function () {
            return z
        })), n.d(e, "v", (function () {
            return H
        })), n.d(e, "sb", (function () {
            return F
        })), n.d(e, "bb", (function () {
            return J
        })), n.d(e, "b", (function () {
            return Q
        })), n.d(e, "d", (function () {
            return W
        })), n.d(e, "ac", (function () {
            return V
        })), n.d(e, "M", (function () {
            return $
        })), n.d(e, "B", (function () {
            return Y
        })), n.d(e, "D", (function () {
            return K
        })), n.d(e, "C", (function () {
            return X
        })), n.d(e, "g", (function () {
            return Z
        })), n.d(e, "x", (function () {
            return tt
        })), n.d(e, "Vb", (function () {
            return et
        })), n.d(e, "O", (function () {
            return nt
        })), n.d(e, "P", (function () {
            return ot
        })), n.d(e, "e", (function () {
            return rt
        })), n.d(e, "r", (function () {
            return it
        })), n.d(e, "Ib", (function () {
            return at
        })), n.d(e, "Jb", (function () {
            return st
        })), n.d(e, "Kb", (function () {
            return ct
        })), n.d(e, "Hb", (function () {
            return lt
        })), n.d(e, "L", (function () {
            return ut
        })), n.d(e, "yb", (function () {
            return pt
        })), n.d(e, "A", (function () {
            return dt
        })), n.d(e, "Ob", (function () {
            return ft
        })), n.d(e, "H", (function () {
            return ht
        })), n.d(e, "cc", (function () {
            return mt
        })), n.d(e, "f", (function () {
            return gt
        })), n.d(e, "jb", (function () {
            return vt
        })), n.d(e, "W", (function () {
            return yt
        })), n.d(e, "nb", (function () {
            return wt
        })), n.d(e, "q", (function () {
            return _t
        })), n.d(e, "Ab", (function () {
            return bt
        })), n.d(e, "o", (function () {
            return Ot
        })), n.d(e, "V", (function () {
            return St
        })), n.d(e, "p", (function () {
            return At
        })), n.d(e, "db", (function () {
            return Ct
        })), n.d(e, "T", (function () {
            return Tt
        })), n.d(e, "Fb", (function () {
            return Et
        })), n.d(e, "G", (function () {
            return kt
        })), n.d(e, "Bb", (function () {
            return Pt
        })), n.d(e, "t", (function () {
            return xt
        })), n.d(e, "i", (function () {
            return It
        })), n.d(e, "Rb", (function () {
            return jt
        })), n.d(e, "Gb", (function () {
            return Dt
        })), n.d(e, "j", (function () {
            return Lt
        })), n.d(e, "u", (function () {
            return Nt
        })), n.d(e, "ec", (function () {
            return Rt
        })), n.d(e, "ab", (function () {
            return Ut
        })), n.d(e, "Db", (function () {
            return Bt
        })), n.d(e, "zb", (function () {
            return Mt
        })), n.d(e, "s", (function () {
            return Gt
        })), n.d(e, "m", (function () {
            return qt
        })), n.d(e, "l", (function () {
            return zt
        })), n.d(e, "R", (function () {
            return Ht
        })), n.d(e, "y", (function () {
            return Ft
        })), n.d(e, "I", (function () {
            return Jt
        })), n.d(e, "Nb", (function () {
            return Qt
        })), n.d(e, "Y", (function () {
            return Wt
        })), n.d(e, "vb", (function () {
            return Vt
        })), n.d(e, "Lb", (function () {
            return $t
        })),n.d(e, "z", (function () {
            return Yt
        })),n.d(e, "Mb", (function () {
            return Kt
        })),n.d(e, "h", (function () {
            return Xt
        })),n.d(e, "Z", (function () {
            return Zt
        })),n.d(e, "U", (function () {
            return te
        })),n.d(e, "Zb", (function () {
            return ee
        })),n.d(e, "xb", (function () {
            return ne
        })),n.d(e, "E", (function () {
            return oe
        })),n.d(e, "kb", (function () {
            return re
        }));
        var o = "UPDATE_INDEX_BY_KEY", r = "UPDATE_TRANS_BY_KEY", i = "UPDATE_MIN_INPUTHEIGHT", a = "UPDATE_INIT_TAB",
            s = "UPDATE_TRANSLATE_DATA", c = "UPDATE_TRANSTYPE", l = "UPDATE_RESULT", u = "UPDATE_TARGET_PRONOUNC",
            p = "UPDATE_IS_URL", d = "UPDATE_TRANSLATE_SOURCE", f = "UPDATE_QUERY", h = "UPDATE_LAST_QUERY",
            m = "TOGGLE_TRANSLATE_CORE_WORD", g = "UPDATE_TRANSLATE_CORE_WORD", v = "UPDATE_TRANSLATE_FROM_TO",
            y = "UPDATE_YINGYIN_NORMAL", w = "UPDATE_DICTIONARY_SELECTED_INDEX", _ = "TOGGLE_TANS_BUTTON",
            b = "TOGGLE_DICTIONARY", O = "TOGGLE_QC", S = "TOGGLE_LOADING", A = "TOGGLE_COLLECT",
            C = "UPDATE_IS_FROM_SHUYINGYIN", T = "UPDATE_LEVELLIST", E = "TOGGLE_TAB", k = "COMMIT_SUGG",
            P = "TOGGLE_SIMPLE", x = "TOGGLE_USUALTOP", I = "UPDATE_FR_FLAG", j = "UPDATE_FROM_UA",
            D = "UPDATE_SYNONYM", L = "UPDATE_ANTONYM", N = "UPDATE_WORD_ROOT_INFO", R = "UPDATE_WORD_DIFFERENCE_INFO",
            U = "UPDATE_EXPANONEPIC", B = "UPDATE_EXPANDDATA", M = "UPDATE_EXPANDSHOW", G = "DETECT_LANGUAGE",
            q = "UPDATE_LANGUAGE", z = "UPDATE_LANGUAGE_LIST", H = "TOGGLE_LANGMAP_SHOW", F = "UPDATE_LANG_RECORD",
            J = "UPDATE_DETECT_ITEM", Q = "DETECT_CHANGE", W = "INIT_LANGUAGE_RECORD", V = "UPDATE_VOICE",
            $ = "TOGGLE_TOAST", Y = "TOGGLE_PROMOTION", K = "TOGGLE_PROMOTION_ICON", X = "TOGGLE_PROMOTION_DOWNLOAD",
            Z = "TOGGLE_APPDOWNLOAD", tt = "TOGGLE_LOGINDIALOG", et = "UPDATE_TRANSLATE_RECORD",
            nt = "TOGGLE_TRANSLATE_RECORD", ot = "TOGGLE_TRANSLATE_RECORD_DIALOG", rt = "INIT_TRANSLATE_RECORD",
            it = "TOGGLE_GLOBAL_RECORD", at = "UPDATE_SERVER_RECORD", st = "UPDATE_SERVER_SGTKN",
            ct = "UPDATE_SERVER_UIGS", lt = "UPDATE_SERVER_ERRORCODE", ut = "TOGGLE_TEXTAREA_HEIGHT",
            pt = "UPDATE_PC_INPUT_STATUE", dt = "TOGGLE_NOTFOUND_SHOW", ft = "UPDATE_SUGGESTION", ht = "TOGGLE_SETTING",
            mt = "UPDATE_WORD_PHRASE", gt = "LOAD_ICON_IMG", vt = "UPDATE_HISTORY_ACTION", yt = "UPDATE_ANDROID_URL",
            wt = "UPDATE_IOS_URL", _t = "TOGGLE_FEEDBACK", bt = "UPDATE_PROMOTION_INDEX", Ot = "TOGGLE_DOC_DOWNLOAD",
            St = "UPDATE_ACTIVE_DOC", At = "TOGGLE_DOC_UPLOAD", Ct = "UPDATE_DOCTABLE_LIST", Tt = "UPDATA_DOC_NUM",
            Et = "UPDATE_SELECTION_INFO", kt = "TOGGLE_SELECT_GLOBAL_SHOW", Pt = "UPDATE_PSDMODIFY",
            xt = "TOGGLE_ISREFRESH_NAV", It = "TOGGLE_BOTTOMFILLDIV", jt = "UPDATE_TRANSLATEURL",
            Dt = "UPDATE_SERVER_CONFIG", Lt = "TOGGLE_BTN_TRANS", Nt = "TOGGLE_IS_DELETE", Rt = "UPDATE_WRITING_BY_KEY",
            Ut = "UPDATE_CORRECTINFO_BY_ID", Bt = "UPDATE_QUERY_BY_ID", Mt = "UPDATE_POLISHEDSENTS",
            Gt = "TOGGLE_INDEX_WRITING", qt = "TOGGLE_DIALOG", zt = "TOGGLE_CONTENT_IS_LOCK",
            Ht = "TOGGLE_UNLOCK_POPUP", Ft = "TOGGLE_LOGIN_DIALOG", Jt = "TOGGLE_SHARE_POP", Qt = "UPDATE_SUB_TAB_LIST",
            Wt = "UPDATE_ARTICLES", Vt = "UPDATE_LIBRARY_ID", $t = "UPDATE_SGUID_ID", Yt = "TOGGLE_MORE_BTN",
            Kt = "UPDATE_SUB_TAB_DATA", Xt = "TOGGLE_APP_LOADING", Zt = "UPDATE_ARTICLES_COUNT",
            te = "UPDATE_ACTIVE_CONTENT", ee = "UPDATE_UIGS_INFO", ne = "UPDATE_PAGE_SCROLL_HEIGHT",
            oe = "TOGGLE_PRON_PREFER", re = "UPDATE_HOT_WORD"
    }, "118": function (t, e) {
        t.exports = window.VueRouter
    }, "119": function (t, e, n) {
        "use strict";
        var o = n(1), r = n.n(o), i = n(4), a = n.n(i), s = n(51), c = n(2), l = n(0);

        function u(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function p(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? u(Object(n), !0).forEach((function (e) {
                    r()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var d = {
            "props": ["voice"], "data": function () {
                return {"isOn": !1}
            }, "mounted": function () {
                window.addEventListener("offline", (function () {
                    var t = document.querySelector("audio");
                    t && (t.className.replace(" active", ""), s.a.destroy())
                }))
            }, "methods": p(p({}, Object(c.mapMutations)([l.M])), {}, {
                "onplay": function (t) {
                    t.stopPropagation(), s.a.destroy();
                    var e = this.voice, n = (t || window.event).target;
                    if (window.navigator.onLine) {
                        -1 !== n.className.indexOf("play") ? this.isOn = !1 : this.isOn = !0, s.a.init({
                            "src": e.src || e.filename,
                            "loop": !1,
                            "isLoop": !1,
                            "isOn": this.isOn,
                            "target": n
                        });
                        var o = ["v", e.type];
                        e.lang && o.push(e.lang), a.a.send({"type": "transcl", "pbtype": "cl", "uigs_cl": o.join("_")})
                    } else this[l.M]({"show": !0, "text": "请联网使用发音功能"})
                }
            })
        }, f = n(5), h = Object(f.a)(d, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("i", {
                "staticClass": "btn-sound",
                "attrs": {"data-tooltip": "朗读"},
                "on": {
                    "click": function (e) {
                        return t.onplay(e)
                    }
                }
            })
        }), [], !1, null, null, null);
        e.a = h.exports
    }, "120": function (t, e, n) {
        var o = "", r = n(88), i = {
            "formatCollectData": function (t) {
                var e, n, o, r = {};
                if (t.area && 0 !== t.area.length) {
                    var i, a = t.dictionary;
                    n = (i = a.content[0]).usual, e = i.phonetic, o = a.dicType
                } else {
                    var s = t.common_dict, c = void 0 === s ? {} : s;
                    if (0 !== Object.keys(c).length) {
                        var l, u = c.dict[0];
                        o = u.dict_name || "", e = (l = u.content[0].value[0]).phonetic || [], n = l.usual
                    } else o = "", e = [], n = []
                }
                return r.dicType = o, r.phonetic = e || [], r.usual = n || [], r.translate = t.translate || {}, r
            }, "addCollect": function (t, e, i) {
                o = n(50), t = t || {};
                var a = new Date;
                if (o.get("sgid") && "1" === o.get("ADD_COLLECT") && (a.setTime(a.getTime() - 1), o.set("ADD_COLLECT", "", a, document.domain)), t.text.length <= 500) {
                    var s = {
                        "collections": [{
                            "collectionTime": (new Date).getTime(),
                            "postport": window.localStorage.getItem("PASSPORT_ID") || "",
                            "text": t.text,
                            "transFrom": t.transFrom,
                            "transTo": t.transTo,
                            "dic": this.formatCollectData(t.dic, t.transFrom, t.transTo),
                            "status": 1,
                            "type": -1,
                            "source": 3
                        }]
                    };
                    r.sendAjax(s, "72387f1418dc0aeb", "/reventondc/reportCollection.jws", (function (t) {
                        t ? 0 === t.data.code && "function" == typeof e ? e(t.data) : 2012 == +t.data.code && i("收藏失败，装满了，最多保存1万条收藏~") : i("网络异常，请稍后再试。")
                    }), (function () {
                        i("网络异常，请稍后再试。")
                    }))
                } else i("收藏失败，太长了，原文不能超过500字~")
            }, "deleteCollect": function (t, e, n) {
                r.sendAjax(t, "72387f1418dc0aeb", "/reventondc/reportCollection.jws", (function (t) {
                    e(t)
                }), (function (t) {
                    n(t)
                }))
            }, "getCollections": function (t, e, n) {
                var o = {
                    "source": 3,
                    "postport": window.localStorage.getItem("PASSPORT_ID") || "",
                    "format": "1",
                    "curr": "1",
                    "size": "20",
                    "orderBy": {"collectionTime": "desc"}
                }, i = {};
                Object.assign(i, o, t), r.sendAjax(i, "7869a1bd3d918bde", "/reventondc/listCollection.jws", (function (t) {
                    e(t)
                }), (function (t) {
                    n(t)
                }))
            }
        };
        t.exports = i
    }, "121": function (t, e, n) {
        "use strict";
        var o = n(1), r = n.n(o), i = n(0), a = n(2), s = n(4), c = n.n(s), l = n(13), u = n.n(l), p = n(6), d = n.n(p),
            f = n(7);

        function h(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function m(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? h(Object(n), !0).forEach((function (e) {
                    r()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var g = "", v = n(367), y = n(88), w = {
            "props": ["hideLogin"],
            "data": function () {
                return {"isLogin": !1, "showLogin": !1, "username": "", "isPhoneLogin": !1, "URL_PARAMS": ""}
            },
            "mounted": function () {
                var t = this, e = setTimeout((function () {
                    t.init(), e && window.clearTimeout(e)
                }));
                t.NativeScheme = n(65), t.URL_PARAMS = u.a.parse().query
            },
            "computed": m(m(m(m({}, Object(a.mapState)(["isTranslateAppShare", "isSogouBrowserApp", "isSogouInputClipboard", "setting", "promotionCzSetting"])), Object(a.mapState)("language", ["from", "to"])), Object(a.mapState)("translate", ["query", "result", "transTypeTxt"])), {}, {
                "promot": function () {
                    var t = this.promotionCzSetting || {}, e = t.stype;
                    return {"src": v, "title": t.title, "desc": t.text, "stype": e}
                }, "headerlist": function () {
                    return f.LINK_MAP.header
                }, "morelist": function () {
                    return f.LINK_MAP.more
                }, "showBack": function () {
                    return -1 !== ["/user/favorite", "/user/document/record", "/user/document/preview"].indexOf(this.$route.path)
                }, "hrefShow": function () {
                    return !("/user/favorite" === this.$route.path)
                }
            }),
            "methods": m(m(m(m(m({}, Object(a.mapMutations)("translate", [i.r])), Object(a.mapMutations)([i.H, i.q, i.g, i.x, i.G])), Object(a.mapActions)("download", ["getAndroidURL"])), Object(a.mapActions)(["stopBodyScroll"])), {}, {
                "wapLogoClick": function (t, e) {
                    c.a.send({
                        "terminal": "wap",
                        "type": "transcl",
                        "pbtype": "cl",
                        "uigs_cl": "head_logo"
                    }), (t || window.event).stopPropagation(), this.getAndroidURL(e);
                    var n = this.$store.state.download, o = n.iosUrl, r = n.androidUrl,
                        i = "sogoutranslator://word/openwith";
                    c.a.send({
                        "terminal": "wap",
                        "type": "promot",
                        "pbtype": "cl",
                        "uigs_cl": "download_topbar"
                    }), this.NativeScheme.invokeApp({
                        "scheme": {"ios": i, "android": i},
                        "redirect": {"ios": o, "android": r},
                        "timeout": 4e3
                    })
                }, "init": function () {
                    var t = this;
                    if (t.Cookie = n(50), g = t.Cookie.get("sgid"), t.isLogin = !!g, t.isLogin) var e = "other",
                        o = setInterval((function () {
                            var n = t.Cookie.get("PHONE_NUMBER");
                            if (n) {
                                if (clearInterval(o), e = "sogou", t.username = decodeURIComponent(y.decrypt(n)), t.showLogin = !0, window.localStorage) try {
                                    window.localStorage.setItem("PASSPORT_ID", t.username + "@sohu.com")
                                } catch (t) {
                                }
                            } else if (window.PassportSC && window.PassportSC.parsePassportCookie) {
                                clearInterval(o), window.PassportSC.parsePassportCookie && window.PassportSC.parsePassportCookie();
                                var r = window.PassportSC.cookie;
                                if (r) {
                                    t.username = decodeURIComponent(r.uniqname), t.showLogin = !0;
                                    var i = r.userid;
                                    if (window.localStorage) try {
                                        window.localStorage.setItem("PASSPORT_ID", i)
                                    } catch (t) {
                                    }
                                    -1 !== i.indexOf("@sohu.com") && (e = "sogou", t.username || (t.username = i.substring(0, i.indexOf("@sohu.com"))))
                                }
                            }
                            "sogou" === e && (t.isPhoneLogin = !0)
                        }), 20); else t.showLogin = !0, "/user/favorite" !== t.$router.currentRoute.path && "/user/document/record" !== t.$router.currentRoute.path || (window.location.href = "/")
                }, "appDownLoadShow": function () {
                    this[i.g](!0), c.a.send({
                        "terminal": d.a.terminalJudge(),
                        "type": "transcl",
                        "pbtype": "cl",
                        "uigs_cl": "download_show"
                    })
                }, "headUigSend": function (t) {
                    var e = t.target.dataset;
                    e.type && this.sendUigs(e.type, !0), e.subtype && this.sendUigs(e.subtype, "all")
                }, "PcloginAction": function () {
                    this[i.x](!0)
                }, "PclogOutAction": function () {
                    if (this.sendUigs("logout", !0), this.isLogin) if (d.a.lsRemoveItem("PASSPORT_ID"), this.Cookie.get("PHONE_NUMBER")) {
                        var t = new Date, e = window.location.origin;
                        t.setTime(t.getTime() - 1), this.Cookie.set("PHONE_NUMBER", "", t, document.domain), window.location.href = "https://m.account.sogou.com/wap/logout_redirect?client_id=2017&sgid=" + g + "&ru=" + encodeURIComponent(e)
                    } else window.PassportSC && window.PassportSC.logoutHandle(document.getElementById("header-passport-empty"), (function () {
                    }), (function () {
                        window.location.href = "/"
                    }))
                }, "navTo": function (t) {
                    t.preventDefault();
                    var e = this.query, n = t.target.dataset, o = "";
                    n.type && t.target.href && (c.a.send({
                        "terminal": "web",
                        "type": "transcl",
                        "pbtype": "cl",
                        "uigs_cl": "nav_" + n.type
                    }), n.key && e ? (e = e.slice(0, 100), o = "wenwen" === n.type ? "http://wenwen.sogou.com/s/?ch=fanyisearch&w=" + e : "mingyi" === n.type ? "https://www.sogou.com/web?m2web=mingyi.sogou.com&query=".concat(e, "&ie=utf8") : "map" === n.type || "gouwu" === n.type || "all" === n.type ? t.target.href + "".concat(n.key, "=").concat(e) : [t.target.href + "&from=translateweb", "&", n.key, "=", e].join("")) : o = t.target.href, window.location.href = o)
                }, "sendUigs": function (t, e) {
                    e ? c.a.send({
                        "type": "transcl",
                        "pbtype": "cl",
                        "uigs_cl": "all" === e ? t : "UserCeter_" + t
                    }) : c.a.send({"type": "transcl", "pbtype": "cl", "uigs_cl": t})
                }
            })
        }, _ = n(5), b = Object(_.a)(w, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {"staticClass": "J-logo"}, [n("div", {
                "staticStyle": {"display": "none"},
                "attrs": {"id": "header-passport-empty"}
            }), t._v(" "), n("div", {"staticClass": "topbar"}, [n("div", {"staticClass": "topnav"}, [n("ul", {
                "on": {
                    "click": function (e) {
                        return t.navTo(e)
                    }
                }
            }, t._l(t.headerlist, (function (e, o) {
                return n("li", {
                    "key": o,
                    "class": "fanyi" === e.type ? "current" : ""
                }, [n("a", {"attrs": {"data-type": e.type, "data-key": e.key, "href": e.link}}, [t._v(t._s(e.text))])])
            })), 0), t._v(" "), n("div", {"staticClass": "more"}, [n("span", [t._v("更多")]), t._v(" "), n("div", {"staticClass": "drop-down"}, [n("ul", {
                "staticClass": "subnav",
                "on": {
                    "click": function (e) {
                        return t.navTo(e)
                    }
                }
            }, t._l(t.morelist, (function (e, o) {
                return n("li", {
                    "key": o,
                    "class": "all" === e.type ? "all" : ""
                }, [n("a", {"attrs": {"data-type": e.type, "data-key": e.key, "href": e.link}}, [t._v(t._s(e.text))])])
            })), 0)])])]), t._v(" "), t.hideLogin ? t._e() : n("div", {"staticClass": "login-state"}, [t.showBack ? n("a", {
                "attrs": {"href": "/"},
                "on": {
                    "click": function (e) {
                        return t.sendUigs("backIndex", !0)
                    }
                }
            }, [t._v("«返回翻译首页")]) : t._e(), t._v(" "), t.hrefShow ? n("a", {
                "attrs": {
                    "href": "/download/pc/introduce",
                    "target": "_blank"
                }, "on": {
                    "click": function (e) {
                        return t.sendUigs("intro_app")
                    }
                }
            }, [t._v("搜狗翻译介绍")]) : t._e(), t._v(" "), t.hrefShow ? n("a", {
                "attrs": {
                    "href": "//deepi.sogou.com/?from=translatepc",
                    "target": "_blank"
                }, "on": {
                    "click": function (e) {
                        return t.sendUigs("transAPI")
                    }
                }
            }, [t._v("翻译API")]) : t._e(), t._v(" "), !t.isLogin && t.showLogin ? n("div", {"staticClass": "login"}, [n("a", {
                "attrs": {"href": "javascript:void(0)"},
                "on": {"click": t.PcloginAction}
            }, [t._v("登录")])]) : t.showLogin ? n("div", {"staticClass": "login"}, [n("a", {"attrs": {"href": "javascript:void(0)"}}, [t._v(t._s(t.username))]), t._v(" "), n("div", {"staticClass": "drop-down"}, [n("ul", {"staticClass": "subnav"}, [n("li", [n("a", {
                "attrs": {"href": "javascript:void(0)"},
                "on": {"click": t.PclogOutAction}
            }, [t._v("退出")])]), t._v(" "), t.isPhoneLogin ? n("li", [n("a", {
                "attrs": {
                    "href": "/reset",
                    "data-type": "reset"
                }, "on": {"click": t.headUigSend}
            }, [t._v("修改密码")])]) : t._e()])])]) : t._e()])]), t._v(" "), n("div", {
                "staticClass": "header-fixed",
                "attrs": {"id": "header-fixed"}
            }, [n("div", {"staticClass": "wrap"}, [n("a", {
                "staticClass": "logo",
                "attrs": {"href": "/", "title": "搜狗翻译"}
            }), t._v(" "), n("ul", {"staticClass": "nav"}, [n("li", [n("a", {
                "staticClass": "current",
                "attrs": {"href": "javascript:void(0)"},
                "on": {
                    "click": function (e) {
                        return t.sendUigs("onlineTras")
                    }
                }
            }, [t._v("在线翻译")])]), t._v(" "), n("li", [n("a", {
                "attrs": {
                    "href": "/download/pc/introduce",
                    "target": "_blank"
                }, "on": {
                    "click": function (e) {
                        return t.sendUigs("intro_app")
                    }
                }
            }, [t._v("APP产品介绍")])]), t._v(" "), n("li", [n("a", {
                "attrs": {
                    "href": "//deepi.sogou.com/?from=translatepc",
                    "target": "_blank"
                }, "on": {
                    "click": function (e) {
                        return t.sendUigs("transAPI")
                    }
                }
            }, [t._v("翻译API")])]), t._v(" "), n("li", [n("a", {
                "staticClass": "btn-download",
                "attrs": {"href": "javascript:void(0)"},
                "on": {"click": t.appDownLoadShow}
            }, [t._v("下载翻译APP")])])])])]), t._v(" "), "text" !== t.transTypeTxt || t.isSogouInputClipboard ? t._e() : n("div", {
                "staticClass": "header-wap-new",
                "on": {
                    "click": function (e) {
                        return t.wapLogoClick(e, t.promot.stype)
                    }
                }
            }, [n("a", {
                "staticClass": "logo",
                "attrs": {"href": "javascript: void(0);", "title": "搜狗翻译"}
            }), t._v(" "), n("div", {"staticClass": "text"}, [n("h4", [t._v(t._s(t.promot.title))]), t._v(" "), n("p", [t._v(t._s(t.promot.desc))])]), t._v(" "), n("a", {
                "staticClass": "btn-app",
                "attrs": {"href": "javascript: void(0);"}
            }, [t._v("免费使用")])])])
        }), [], !1, null, null, null);
        e.a = b.exports
    }, "122": function (t, e, n) {
        "use strict";
        var o = n(1), r = n.n(o), i = n(0), a = n(2), s = n(4), c = n.n(s);

        function l(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function u(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? l(Object(n), !0).forEach((function (e) {
                    r()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var p = {
            "methods": u(u(u({}, Object(a.mapMutations)("language", [i.b])), Object(a.mapActions)("translate", ["initTranslate"])), {}, {
                "jumpToIndex": function () {
                    c.a.send({
                        "type": "transcl",
                        "pbtype": "cl",
                        "uigs_cl": "logo"
                    }), this.initTranslate({"query": ""}), this[i.b]({"lang": "", "text": "", "show": !1});
                    var t = window.location;
                    t.origin || (t.origin = t.protocol + "//" + t.hostname + (t.port ? ":" + t.port : "")), window.location.href = t.origin
                }
            })
        }, d = n(5), f = Object(d.a)(p, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {"staticClass": "header-pc"}, [e("a", {
                "staticClass": "logo",
                "attrs": {"href": "javascript:void(0)", "title": "搜狗翻译"},
                "on": {"click": this.jumpToIndex}
            })])
        }), [], !1, null, null, null);
        e.a = f.exports
    }, "123": function (t, e, n) {
        "use strict";
        var o = n(1), r = n.n(o), i = n(2);

        function a(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(n), !0).forEach((function (e) {
                    r()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var c = {
            "computed": s(s({}, Object(i.mapState)(["showLoading"])), {}, {
                "styleObject": function () {
                    return {
                        "position": this.showLoading.position || "fixed",
                        "top": "wap" === this.showLoading.type ? "30%" : this.showLoading.top || "50%",
                        "left": "50%",
                        "transform": "translate(-50%, -50%)"
                    }
                }
            })
        }, l = n(5), u = Object(l.a)(c, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", [e("div", {
                "directives": [{
                    "name": "show",
                    "rawName": "v-show",
                    "value": this.showLoading.show && "wap" !== this.showLoading.type,
                    "expression": "showLoading.show && showLoading.type !== 'wap'"
                }], "staticClass": "loading-pc", "style": this.styleObject
            }, [e("img", {
                "staticClass": "icon-loading",
                "attrs": {"src": n(379)}
            })]), this._v(" "), e("div", {
                "directives": [{
                    "name": "show",
                    "rawName": "v-show",
                    "value": this.showLoading.show && "wap" === this.showLoading.type,
                    "expression": "showLoading.show && showLoading.type === 'wap'"
                }], "staticClass": "loading-wap", "style": this.styleObject
            })])
        }), [], !1, null, null, null);
        e.a = u.exports
    }, "124": function (t, e, n) {
        "use strict";
        var o = [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {"staticClass": "popup-header"}, [e("h2", [this._v("下载搜狗翻译APP")])])
        }, function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {"staticClass": "qrcode-box"}, [e("img", {
                "staticClass": "qrcode",
                "attrs": {"src": n(380), "srcset": n(381)}
            }), this._v(" "), e("a", {
                "staticClass": "link",
                "attrs": {"href": "/download/pc/introduce", "target": "_blank"}
            }, [this._v("查看APP介绍»")])])
        }, function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("a", {
                "attrs": {
                    "href": "//dlweb.sogoucdn.com/phonetic/transapp_channel/transapp_pcshangxuanfu.apk",
                    "target": "_blank"
                }
            }, [e("span", {"staticClass": "icon icon-android"}), this._v("Android 版下载\n                    ")])
        }, function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("a", {
                "attrs": {
                    "href": "https://itunes.apple.com/cn/app/%E6%90%9C%E7%8B%97%E7%BF%BB%E8%AF%91-%E9%AB%98%E6%95%88%E6%B2%9F%E9%80%9A%E7%9A%84%E7%BF%BB%E8%AF%91%E8%BD%AF%E4%BB%B6/id1198464101?mt=8",
                    "target": "_blank"
                }
            }, [e("span", {"staticClass": "icon icon-iphone"}), this._v("iPhone 版下载\n                    ")])
        }], r = n(1), i = n.n(r), a = n(0), s = n(2), c = n(4), l = n.n(c);

        function u(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function p(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? u(Object(n), !0).forEach((function (e) {
                    i()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var d = {
            "computed": p({}, Object(s.mapState)(["showAppDownLoad"])),
            "methods": p(p({}, Object(s.mapMutations)([a.g])), {}, {
                "closeAppDownload": function () {
                    this[a.g](!1)
                }, "sendUIGS": function (t) {
                    l.a.send({"terminal": "web", "type": "transcl", "pbtype": "cl", "uigs_cl": "download_" + t})
                }
            })
        }, f = n(5), h = Object(f.a)(d, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.showAppDownLoad ? n("div", [n("div", {"staticClass": "mask"}), t._v(" "), n("div", {"staticClass": "popup popup-app-download"}, [t._m(0), t._v(" "), n("div", {"staticClass": "popup-content"}, [t._m(1), t._v(" "), n("ul", {"staticClass": "download-list"}, [n("li", {
                "on": {
                    "click": function (e) {
                        return t.sendUIGS("android")
                    }
                }
            }, [t._m(2)]), t._v(" "), n("li", {
                "on": {
                    "click": function (e) {
                        return t.sendUIGS("iOS")
                    }
                }
            }, [t._m(3)])])]), t._v(" "), n("span", {
                "staticClass": "btn-close",
                "attrs": {"title": "关闭"},
                "on": {"click": t.closeAppDownload}
            })])]) : t._e()
        }), o, !1, null, null, null);
        e.a = h.exports
    }, "125": function (t, e, n) {
        "use strict";
        var o = n(1), r = n.n(o), i = n(4), a = n.n(i), s = n(2), c = n(0);

        function l(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function u(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? l(Object(n), !0).forEach((function (e) {
                    r()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var p = {
            "data": function () {
                return {"selectVal": {"type": "word", "dbl": !1}}
            },
            "computed": u(u({}, Object(s.mapState)("doctrans", ["docDownloadShow", "activeDoc"])), {}, {
                "transType": function () {
                    return this.activeDoc.direction.split(" → ").join("译")
                }
            }),
            "watch": {
                "docDownloadShow": function () {
                    this.selectVal = {"type": "word", "dbl": !1}
                }
            },
            "methods": u(u({}, Object(s.mapMutations)("doctrans", [c.o])), {}, {
                "close": function () {
                    this[c.o](!1)
                }, "typetoggle": function (t) {
                    a.a.send({
                        "type": "transcl",
                        "pbtype": "cl",
                        "uigs_cl": "upload_selectType_" + t
                    }), this.selectVal.type = t
                }, "dbltoggle": function () {
                    this.selectVal.dbl = !this.selectVal.dbl
                }, "downloadAction": function () {
                    if (this.activeDoc.fileId) {
                        var t = this.selectVal.dbl ? "download_dbl" : "download_not_dbl";
                        a.a.send({"type": "transcl", "pbtype": "cl", "uigs_cl": t});
                        var e = "/doc_trans/download?fid=".concat(this.activeDoc.fileId);
                        e = this.selectVal.dbl ? e + "&dbl" : e, e = "pdf" === this.selectVal.type ? e + "&pdf" : e, window.location.href = e
                    }
                }
            })
        }, d = n(5), f = Object(d.a)(p, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.docDownloadShow ? n("div", [n("div", {"staticClass": "mask"}), t._v(" "), n("div", {"staticClass": "popup doctrans doc-download"}, [t._m(0), t._v(" "), n("div", {"staticClass": "popup-content"}, [n("div", {"staticClass": "wrap"}, [n("div", {"staticClass": "file-box"}, [n("div", {"staticClass": "file-info"}, [n("span", {"staticClass": "type"}, [t._v(t._s(t.transType))]), n("span", {"staticClass": "title"}, [t._v(t._s(t.activeDoc.fileName))])]), t._v(" "), n("label", {
                "class": t.selectVal.dbl ? "checkbox checked" : "checkbox",
                "on": {"click": t.dbltoggle}
            }, [n("span", {"staticClass": "state"}), t._v("双语对照")])]), t._v(" "), n("div", {"staticClass": "trans-select"}, [n("label", {
                "class": "word" === t.selectVal.type ? "btn-l selected" : "btn-l",
                "on": {
                    "click": function (e) {
                        return t.typetoggle("word")
                    }
                }
            }, [t._v("word格式")]), t._v(" "), n("label", {
                "class": "pdf" === t.selectVal.type ? "btn-r selected" : "btn-r",
                "on": {
                    "click": function (e) {
                        return t.typetoggle("pdf")
                    }
                }
            }, [t._v("pdf格式")])])]), t._v(" "), n("a", {
                "staticClass": "btn-primary",
                "attrs": {"href": "javascript:;"},
                "on": {"click": t.downloadAction}
            }, [t._v("下载")])]), t._v(" "), n("span", {
                "staticClass": "btn-close",
                "attrs": {"title": "关闭"},
                "on": {"click": t.close}
            })])]) : t._e()
        }), [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {"staticClass": "popup-header"}, [e("h3", [this._v("保存译文文档")])])
        }], !1, null, null, null);
        e.a = f.exports
    }, "15": function (t, e) {
        t.exports = window.Axios
    }, "165": function (t, e, n) {
        "use strict";
        var o = [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {"staticClass": "aside-qcode"}, [e("img", {"attrs": {"src": n(370), "alt": ""}})])
        }], r = {}, i = n(5), a = Object(i.a)(r, (function () {
            var t = this.$createElement;
            this._self._c;
            return this._m(0)
        }), o, !1, null, null, null);
        e.a = a.exports
    }, "166": function (t, e, n) {
        "use strict";
        var o = n(1), r = n.n(o), i = n(4), a = n.n(i), s = n(0), c = n(2), l = n(15), u = n.n(l), p = n(6), d = n.n(p);

        function f(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function h(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? f(Object(n), !0).forEach((function (e) {
                    r()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var m = n(67), g = {
            "data": function () {
                return {
                    "moduleList": {"text": "文本翻译", "document": "文档翻译", "writing": "写作助手"},
                    "sugList": {
                        "base": ["其他"],
                        "text": ["结果不准", "展示异常", "发音错误", "音标问题"],
                        "document": ["结果不准", "展示异常", "翻译失败", "下载失败"],
                        "writing": ["纠错不准", "等待时间长", "功能不全", "体验不好"]
                    },
                    "writingFeedback": ["原文没错", "点评不够具体", "句子升级有错"],
                    "suggestType": [],
                    "content": "",
                    "filesList": [],
                    "imgSrcList": [],
                    "showTypeBox": !0,
                    "phone": "",
                    "moduleType": ""
                }
            },
            "mounted": function () {
                "wap" === d.a.terminalJudge() && (this.moduleList = {
                    "text": "文本翻译",
                    "writing": "写作助手"
                }), this.moduleType = this.transTypeTxt, this.Writing = n(87)
            },
            "watch": {
                "showFeedBack": function (t) {
                    this.phone = "", this.suggestType = [], this.content = "", "wap" === d.a.terminalJudge() && t ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
                }, "transTypeTxt": function (t) {
                    this.moduleType = t
                }
            },
            "computed": h(h(h(h({}, Object(c.mapState)(["showFeedBack"])), Object(c.mapState)("translate", ["transTypeTxt", "from", "to", "query", "result"])), Object(c.mapState)("writing", ["query", "articleId", "originQuery", "currIndex"])), {}, {
                "sugType": function () {
                    return "writing" === this.showFeedBack ? this.writingFeedback : this.sugList[this.moduleType].concat(this.sugList.base)
                }
            }),
            "methods": h(h(h(h({}, Object(c.mapMutations)([s.q])), Object(c.mapMutations)([s.M])), Object(c.mapActions)(["stopBodyScroll"])), {}, {
                "setModel": function (t) {
                    this.moduleType = t, this.suggestType = [], this.content = ""
                }, "onSelectSugType": function (t, e) {
                    var n = "writing" === this.showFeedBack ? e : t, o = this.suggestType.indexOf(n);
                    -1 === o ? this.suggestType.push(n) : this.suggestType.splice(o, 1)
                }, "onUpdataImg": function (t) {
                    var e = t.target;
                    if (e.files && e.files[0] && !(this.imgSrcList.length >= 3)) {
                        var n = window.URL.createObjectURL(e.files[0]);
                        this.imgSrcList.push(n), this.filesList.push(e.files[0])
                    }
                }, "onDeleteImg": function (t) {
                    this.imgSrcList.splice(t, 1), this.filesList.splice(t, 1)
                }, "onTextareaFocus": function () {
                    this.showTypeBox = "wap" !== d.a.terminalJudge(), document.body.scrollTop = "0px", document.querySelector("#feedback-div").scrollTop = "0px"
                }, "onTextareaBlur": function () {
                    this.showTypeBox = !0, "wap" === d.a.terminalJudge() && (document.querySelector(".feedback").style.paddingTop = "44px", document.querySelector("#header").style.position = "fixed")
                }, "onclose": function () {
                    this[s.q](!1), this[s.M]({
                        "show": !1,
                        "text": "",
                        "loading": !1
                    }), this.stopBodyScroll(!1), this.moduleType = this.transTypeTxt
                }, "submitAction": function () {
                    var t = this, e = this.content, n = this.moduleList, o = this.moduleType, r = this.suggestType,
                        i = this.phone, c = {
                            "source": "web" === d.a.terminalJudge() ? "3" : "4",
                            "content": e.trim(),
                            "module": n[o],
                            "subModule": r.join("|"),
                            "text": t.query,
                            "dic": t.result,
                            "to": t.to,
                            "from": t.from,
                            "phone": i
                        };
                    if (0 === t.suggestType.length) t[s.M]({
                        "show": !0,
                        "text": "请选择问题类型",
                        "loading": !1
                    }); else if (i.length >= 100) t[s.M]({"show": !0, "text": "联系方式不得超过100字符", "loading": !1}); else {
                        a.a.send({
                            "terminal": d.a.terminalJudge(),
                            "type": "transcl",
                            "pbtype": "cl",
                            "uigs_cl": "feedback_subm"
                        });
                        for (var l = t.encrypt(c, "38a1ad7f2f50630c", "AAAAAAAAAAAAAAAAAAAAAA==", "CBC", "Pkcs7"), p = new FormData, f = 0; f < t.filesList.length; f++) p.append("files", t.filesList[f]);
                        p.append("jsonData", l), t[s.M]({
                            "show": !0,
                            "text": "正在提交",
                            "loading": !0
                        }), u()({
                            "url": "/reventondc/translate/feedback",
                            "method": "POST",
                            "headers": {
                                "Content-Type": "application/x-www-form-urlencoded",
                                "Accept": "application/json"
                            },
                            "data": p
                        }).then((function (e) {
                            if (t[s.M]({"show": !1, "text": "", "loading": !1}), e && e.data && 0 === e.data.code) {
                                t.reset();
                                t.onclose(), t[s.M]({"show": !0, "text": "提交成功！感谢您的反馈，我们会认真处理！", "loading": !1})
                            } else {
                                var n = "wap" === d.a.terminalJudge() ? "提交失败！" : "提交失败~请再试一次吧~";
                                t[s.M]({"show": !0, "text": n, "loading": !1})
                            }
                        })).catch((function () {
                            t[s.M]({"show": !1, "text": "", "loading": !1});
                            var e = "wap" === d.a.terminalJudge() ? "网络连接错误" : "提交失败~请再试一次吧~";
                            t[s.M]({"show": !0, "text": e, "loading": !1})
                        }))
                    }
                }, "encrypt": function (t, e, n, o, r) {
                    var i = JSON.stringify(t), a = {
                        "key": m.enc.Utf8.parse(e),
                        "iv": m.enc.Utf8.parse(atob(n)),
                        "mode": m.mode[o],
                        "pad": m.pad[r]
                    };
                    return i = (i = m.AES.encrypt(i, a.key, {
                        "iv": a.iv,
                        "mode": a.mode,
                        "padding": a.pad
                    })).toString(), i = encodeURIComponent(i)
                }, "submitWriting": function () {
                    var t = this.articleId, e = this.query, n = this.originQuery, o = this.currIndex, r = this.content,
                        i = this.phone, a = this.suggestType, c = this;
                    if (0 !== a.length) if (i.length >= 50) c[s.M]({
                        "show": !0,
                        "text": "联系方式不得超过50字符",
                        "loading": !1
                    }); else {
                        var l = {
                            "articleId": t,
                            "originalSentence": n[o] || "",
                            "reportSentence": this.Writing.getStr(e[o] || ""),
                            "polishedSents": a,
                            "content": r,
                            "contactInfo": i
                        };
                        l = JSON.stringify(l).replace(/^"|"$/g, ""), l = this.Writing.encrypt(l), u()({
                            "url": "//fanyiapp.sogou.com/translateServer/translate/writingAssistant/reportErrorV2",
                            "method": "POST",
                            "dataType": "json",
                            "headers": {"Accept": "application/json", "Content-Type": "application/json"},
                            "data": {"cipherText": l}
                        }).then((function (t) {
                            var e = t.data;
                            e && "success" === e.message ? (c.reset(), "web" === d.a.terminalJudge() && c.onclose(), c[s.M]({
                                "show": !0,
                                "text": "提交成功！感谢您的反馈，我们会认真处理！",
                                "loading": !1
                            })) : c[s.M]({"show": !0, "text": "上报失败，请重试", "loading": !1})
                        })).catch((function () {
                            c[s.M]({"show": !0, "text": "上报失败，请重试", "loading": !1})
                        }))
                    } else c[s.M]({"show": !0, "text": "请选择问题类型", "loading": !1})
                }, "reset": function () {
                    this.content = "", this.phone = "", this.suggestType = [], this.filesList = [], this.imgSrcList = []
                }
            })
        }, v = n(5), y = Object(v.a)(g, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.showFeedBack ? n("div", {"staticClass": "feedback"}, [n("div", {"staticClass": "mask"}), t._v(" "), n("div", {
                "staticClass": "popup feedback",
                "attrs": {"id": "feedback-div"}
            }, [n("div", {
                "staticClass": "popup-header",
                "attrs": {"id": "header"}
            }, [n("h2", [t._v(t._s("writing" === t.showFeedBack ? "报错" : "问题反馈"))]), t._v(" "), n("span", {
                "staticClass": "btn-close",
                "on": {"click": t.onclose}
            })]), t._v(" "), n("div", {"staticClass": "popup-content pd30"}, [t.showTypeBox && "writing" !== t.showFeedBack ? n("div", {"staticClass": "item"}, [t._m(0), t._v(" "), n("ul", {"staticClass": "types"}, t._l(t.moduleList, (function (e, o) {
                return n("li", {"key": o}, [n("span", {
                    "class": {"selected": t.moduleType === o},
                    "on": {
                        "click": function (e) {
                            return t.setModel(o)
                        }
                    }
                }, [t._v(t._s(e))])])
            })), 0)]) : t._e(), t._v(" "), t.showTypeBox ? n("div", {"staticClass": "item"}, [t._m(1), t._v(" "), n("ul", {"staticClass": "types"}, t._l(t.sugType, (function (e, o) {
                return n("li", {"key": o}, [n("span", {
                    "class": -1 !== t.suggestType.indexOf(e) || -1 !== t.suggestType.indexOf(o) ? "selected" : "",
                    "attrs": {"type": e},
                    "on": {
                        "click": function (n) {
                            return t.onSelectSugType(e, o)
                        }
                    }
                }, [t._v(t._s(e))])])
            })), 0)]) : t._e(), t._v(" "), n("div", {"staticClass": "item sug-box"}, [n("h3", [t._v("问题描述")]), t._v(" "), n("div", {"staticClass": "input-wrap"}, [n("textarea", {
                "directives": [{
                    "name": "model",
                    "rawName": "v-model",
                    "value": t.content,
                    "expression": "content"
                }],
                "attrs": {"id": "feedback-content", "maxlength": "200", "placeholder": "请输入您遇到的问题或优化建议（选填）"},
                "domProps": {"value": t.content},
                "on": {
                    "blur": t.onTextareaBlur, "focus": t.onTextareaFocus, "input": function (e) {
                        e.target.composing || (t.content = e.target.value)
                    }
                }
            }), t._v(" "), n("span", {"staticClass": "counter"}, [0 !== t.content.length ? n("em", {"style": t.content.length >= 200 ? "color:red" : ""}, [t._v("\n                            " + t._s(t.content.length) + "\n                        ")]) : n("em", [t._v("0")]), t._v("/200\n                    ")])])]), t._v(" "), n("div", {"staticClass": "item contact"}, [n("h3", [t._v("联系方式")]), t._v(" "), n("input", {
                "directives": [{
                    "name": "model",
                    "rawName": "v-model",
                    "value": t.phone,
                    "expression": "phone"
                }],
                "attrs": {"type": "text", "name": "", "value": "", "placeholder": "请输入您的电话/微信/QQ/邮箱等（选填）"},
                "domProps": {"value": t.phone},
                "on": {
                    "input": function (e) {
                        e.target.composing || (t.phone = e.target.value)
                    }
                }
            })]), t._v(" "), n("div", {"staticClass": "item upload-pic"}, [t._m(2), t._v(" "), n("div", {"staticClass": "pic-list"}, [t._l(t.imgSrcList, (function (e, o) {
                return n("div", {
                    "key": o,
                    "staticClass": "pic"
                }, [n("img", {"attrs": {"src": e}}), t._v(" "), n("span", {
                    "staticClass": "btn-delete",
                    "on": {
                        "click": function (e) {
                            return t.onDeleteImg(o)
                        }
                    }
                })])
            })), t._v(" "), t.imgSrcList.length < 3 ? n("div", {"staticClass": "btn-upload"}, [n("input", {
                "ref": "InputFile",
                "attrs": {"type": "file", "accept": "image/*", "name": "files"},
                "on": {
                    "change": function (e) {
                        return t.onUpdataImg(e)
                    }
                }
            })]) : t._e()], 2)]), t._v(" "), "writing" !== t.showFeedBack ? n("a", {
                "staticClass": "btn-primary small",
                "attrs": {"href": "javascript:void(0)", "id": "btn-translation"},
                "on": {"click": t.submitAction}
            }, [t._v("提交")]) : t._e(), t._v(" "), "writing" === t.showFeedBack ? n("a", {
                "staticClass": "btn-primary small",
                "attrs": {"href": "javascript:void(0)", "id": "btn-translation"},
                "on": {"click": t.submitWriting}
            }, [t._v("提交")]) : t._e()])])]) : t._e()
        }), [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("h3", [e("em", [this._v("*")]), this._v(" 问题模块\n                    "), e("span", {"staticClass": "tip"}, [this._v("（单选）")])])
        }, function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("h3", [e("em", [this._v("*")]), this._v(" 问题类型\n                    "), e("span", {"staticClass": "tip"}, [this._v("（可多选）")])])
        }, function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("h3", [this._v("\n                    图片上传\n                    "), e("span", {"staticClass": "tip"}, [this._v("（最多上传3张）")])])
        }], !1, null, null, null);
        e.a = y.exports
    }, "167": function (t, e, n) {
        "use strict";
        var o = n(1), r = n.n(o), i = n(4), a = n.n(i), s = n(0), c = n(2), l = n(15), u = n.n(l);

        function p(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function d(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? p(Object(n), !0).forEach((function (e) {
                    r()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var f = n(88), h = {
            "data": function () {
                return {
                    "indexUrl": "",
                    "loginPageShow": !1,
                    "isMsg": !0,
                    "showPhoneErr": !1,
                    "showTokenErr": !1,
                    "tokenErrMsg": "请输入图形验证码",
                    "showMsgErr": !1,
                    "msgErrMsg": "请输入短信验证码",
                    "showToken": !1,
                    "showCode": !0,
                    "phoneNum": "",
                    "tokenNum": "",
                    "countNum": 60,
                    "msgToken": "",
                    "captchaSrc": "",
                    "token": "",
                    "msgLoginBtn": "登录",
                    "psdLoginPhoneNum": "",
                    "psdLoginPsd": "",
                    "phonenumErr": !1,
                    "psdErr": !1
                }
            },
            "mounted": function () {
                this.Cookie = n(50), this.indexUrl = window.location.protocol + "//" + window.location.host
            },
            "computed": d({}, Object(c.mapState)(["showLoginDialog"])),
            "methods": d(d({}, Object(c.mapMutations)([s.x, s.M])), {}, {
                "close": function () {
                    this[s.x](!1)
                }, "otherLogin": function (t) {
                    var e = "https://account.sogou.com/connect/login?provider=" + t + "&client_id=2017&ru=" + encodeURIComponent(window.location.origin);
                    "weixin" === t && (e += "&third_appid=wx6634d697e8cc0a29"), a.a.send({
                        "terminal": "web",
                        "type": "transcl",
                        "pbtype": "cl",
                        "uigs_cl": "login_" + t
                    }), window.location.href = e
                }, "checkNumber": function () {
                    var t = this, e = t.phoneNum.replace(/\s/g, ""), n = t.tokenNum;
                    "" === e || 11 !== e.length ? t.showPhoneErr = !0 : "" !== n && /^[0-9]{1,4}$/.test(n) ? /^1[0-9]{10}$/.test(e) ? u()({
                        "method": "get",
                        "url": "/web/login/checkNeedCaptcha",
                        "dataType": "json",
                        "headers": {"Accept": "application/json"},
                        "params": {"username": e, "client_id": "10124"}
                    }).then((function (o) {
                        var r = "", i = "";
                        try {
                            var a = JSON.parse(o && o.data);
                            r = a.status, i = a.statusText
                        } catch (t) {
                            r = "", i = ""
                        }
                        var c = setTimeout((function () {
                            "0" === r ? t.sendMessage("message", e, n) : "10009" === r ? (t.msgLoginBtn = "注册", t.sendMessage("register", e, n)) : t[s.M]({
                                "show": !0,
                                "text": i
                            }), c && window.clearTimeout(c)
                        }), 200)
                    })).catch((function () {
                        t[s.M]({"show": !0, "text": "短信发送失败，请稍后重试"})
                    })) : t.showPhoneErr = !0 : t.showTokenErr = !0
                }, "sendMessage": function (t, e, n) {
                    var o = this, r = "message" === t ? "/wap/smsCodeLogin/sendSms" : "/web/sendsms";
                    u()({
                        "method": "post",
                        "url": r,
                        "dataType": "json",
                        "headers": {"Accept": "application/json"},
                        "params": {"mobile": e, "captcha": n, "client_id": "10124", "token": o.token}
                    }).then((function (t) {
                        var e = "", n = "";
                        try {
                            var r = JSON.parse(t && t.data);
                            e = r.status, n = r.statusText
                        } catch (t) {
                            e = "", n = ""
                        }
                        "0" === e ? (o.refreshCaptcha(), o.countDown(), o.showToken = !1, o.tokenErrMsg = "请输入图形验证码", o[s.M]({
                            "show": !0,
                            "text": "验证码已发送"
                        })) : "20221" === e ? (o.refreshCaptcha(), o.tokenErrMsg = "请输入正确的图片验证码", o.showTokenErr = !0) : "10002" === e ? o.showPhoneErr = !0 : o[s.M]({
                            "show": !0,
                            "text": n
                        })
                    })).catch((function () {
                        o[s.M]({"show": !0, "text": "短信发送失败，请稍后重试"})
                    }))
                }, "msgLogin": function () {
                    var t = this, e = t.phoneNum.replace(/\s/g, ""), n = t.tokenNum.replace(/\s/g, ""),
                        o = t.msgToken.replace(/\s/g, "");
                    "" === e || 11 !== e.length ? t.showPhoneErr = !0 : "" !== n && /^[0-9]{1,4}$/.test(n) ? "" !== o && /^[0-9]{4,6}/.test(o) ? /^1[0-9]{10}$/.test(e) ? u()({
                        "method": "post",
                        "url": "/wap/smsCode/login",
                        "dataType": "json",
                        "headers": {"Accept": "application/json"},
                        "params": {
                            "client_id": "10124",
                            "v": 0,
                            "ru": window.location.origin || t.indexUrl,
                            "mobile": e,
                            "smsCode": o
                        }
                    }).then((function (e) {
                        var n = e.data, o = n.status, r = void 0 === o ? "" : o, i = n.data, c = n.statusText,
                            l = void 0 === c ? "" : c, u = i.sgid, p = void 0 === u ? "" : u, d = i.uniqname,
                            h = void 0 === d ? "" : d;
                        if ("0" === r && p) {
                            a.a.send({
                                "terminal": "web",
                                "type": "transcl",
                                "pbtype": "cl",
                                "uigs_cl": "login_phone"
                            }), t.tokenErrMsg = "请输入图片验证码", t.msgErrMsg = "请输入短信验证码";
                            var m = new Date;
                            m.setTime(m.getTime() + 2592e6), t.Cookie.set("sgid", p, m), t.Cookie.set("PHONE_NUMBER", f.encrypt(h), m, document.domain), window.location.href = window.location.origin
                        } else "20216" === r ? (t.refreshCaptcha(), t.showToken = !0, t.tokenErrMsg = "请输入正确的图片验证码", t.tokenNum = "", t.showCode = !0, t.showMsgErr = !0, t.msgErrMsg = "请输入正确的短信验证码", t.msgToken = "") : t[s.M]({
                            "show": !0,
                            "text": l
                        })
                    })).catch((function () {
                        t[s.M]({"show": !0, "text": "登录失败，请稍后重试"})
                    })) : t.showPhoneErr = !0 : t.showMsgErr = !0 : t.showTokenErr = !0
                }, "passportLogin": function () {
                    var t = this, e = !0, n = !1, o = t.psdLoginPhoneNum.replace(/\s/g, ""),
                        r = t.psdLoginPsd.replace(/\s/g, "");
                    if (!o && !r) {
                        var i = /^1[0-9]{10}$/.test(o), a = /^[A-Za-z0-9!#$?\-(),;"'%^&*.~@=_、+`]{6,16}$/.test(r);
                        e = i && a, n = !0
                    }
                    t.phonenumErr = !o, t.psdErr = !r, e && window.PassportSC && o && r && (window.PassportSC.appid = "10124", window.PassportSC.redirectUrl = t.indexUrl + "/jump", window.PassportSC.loginHandle(o, r, "", 1, document.getElementById("header-passport-empty"), (function (e) {
                        e && (n ? "20206" === e.status ? t[s.M]({
                            "show": !0,
                            "text": "密码错误"
                        }) : "20233" === e.status ? t[s.M]({
                            "show": !0,
                            "text": "该手机号未注册，推荐短信验证登录"
                        }) : t[s.M]({"show": !0, "text": decodeURIComponent(e.msg)}) : t[s.M]({
                            "show": !0,
                            "text": decodeURIComponent(e.msg)
                        }))
                    }), (function () {
                        window.location.href = window.location.origin || t.indexUrl
                    })))
                }, "genToken": function () {
                    function t() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                    }

                    return t() + t() + t() + t() + t() + t() + t() + t()
                }, "refreshCaptcha": function () {
                    this.token = this.genToken(), this.captchaSrc = "https://account.sogou.com/captcha?token=".concat(this.token)
                }, "showLoginPage": function () {
                    this.close(), this.refreshCaptcha(), this.loginPageShow = !0, this.isMsg = !0
                }, "closePhonePage": function () {
                    this.loginPageShow = !1, this.showToken = !1, this.removeAll()
                }, "countDown": function () {
                    var t = this;
                    t.showCode = !1;
                    var e = setInterval((function () {
                        t.countNum--, 0 === t.countNum && (t.showCode = !0, clearInterval(e))
                    }), 1e3)
                }, "toggleMsg": function () {
                    this.isMsg = !0
                }, "togglePsd": function () {
                    this.isMsg = !1, this.removeAll()
                }, "regPhoneNum": function () {
                    11 === this.phoneNum.replace(/\s/g, "").length && (this.showToken = !0)
                }, "removeErr": function () {
                    var t = this;
                    ["showPhoneErr", "showTokenErr", "showMsgErr"].forEach((function (e) {
                        t[e] = !1
                    }))
                }, "removeAll": function () {
                    var t = this;
                    t.phoneNum = "", ["tokenNum", "msgToken", "psdLoginPhoneNum", "psdLoginPsd"].forEach((function (e) {
                        t[e] = ""
                    })), t.removeErr(), t.showCode = !0, t.countNum = 60
                }, "goOther": function () {
                    this.removeAll(), this.showToken = !1, this.loginPageShow = !1, this[s.x](!0)
                }, "pwdFocusAction": function () {
                    this.phonenumErr = !1, this.psdErr = !1
                }, "enterToLogin": function (t) {
                    13 === t.keyCode && this.passportLogin()
                }
            })
        }, m = n(5), g = Object(m.a)(h, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [t.loginPageShow ? n("div", {"staticClass": "mask"}) : t._e(), t._v(" "), t.showLoginDialog ? n("div", [n("div", {"staticClass": "mask"}), t._v(" "), n("div", {"staticClass": "popup popup-login"}, [t._m(0), t._v(" "), n("div", {"staticClass": "popup-content"}, [n("ul", {"staticClass": "login-from"}, [n("li", {
                "staticClass": "icon-wx",
                "on": {
                    "click": function (e) {
                        return t.otherLogin("weixin")
                    }
                }
            }), t._v(" "), n("li", {
                "staticClass": "icon-qq", "on": {
                    "click": function (e) {
                        return t.otherLogin("qq")
                    }
                }
            }), t._v(" "), n("li", {
                "staticClass": "icon-微博_未完成", "on": {
                    "click": function (e) {
                        return t.otherLogin("sina")
                    }
                }
            })]), t._v(" "), n("p", {
                "staticClass": "btn-switch btn-phone",
                "on": {"click": t.showLoginPage}
            }, [n("span", [t._v("手机号登录／注册")])])]), t._v(" "), n("span", {
                "staticClass": "btn-close",
                "attrs": {"title": "关闭"},
                "on": {"click": t.close}
            })])]) : t._e(), t._v(" "), t.loginPageShow ? n("div", {
                "staticClass": "popup popup-login phone-login",
                "staticStyle": {"z-index": "9996"}
            }, [n("div", {"staticClass": "popup-header"}, [n("ul", {"staticClass": "login-tab"}, [n("li", {
                "class": {"current": t.isMsg},
                "attrs": {"data-login-type": "msg"},
                "on": {"click": t.toggleMsg}
            }, [t._v("\n                    短信注册/登录\n                ")]), t._v(" "), n("li", {
                "class": {"current": !t.isMsg},
                "attrs": {"data-login-type": "pwd"},
                "on": {"click": t.togglePsd}
            }, [t._v("\n                    密码登录\n                ")])])]), t._v(" "), n("div", {"staticClass": "popup-content"}, [t.isMsg ? n("div", {"staticClass": "msg-login form-login"}, [n("div", {"staticClass": "item"}, [n("input", {
                "directives": [{
                    "name": "model",
                    "rawName": "v-model",
                    "value": t.phoneNum,
                    "expression": "phoneNum"
                }],
                "class": [{"inputbox": !0}, {"error": t.showPhoneErr}],
                "attrs": {"type": "text", "placeholder": "手机号", "autocomplete": "off new-password", "maxlength": "11"},
                "domProps": {"value": t.phoneNum},
                "on": {
                    "keyup": t.regPhoneNum, "click": t.removeErr, "input": function (e) {
                        e.target.composing || (t.phoneNum = e.target.value)
                    }
                }
            })]), t._v(" "), t.showPhoneErr ? n("p", {"staticClass": "error-tip"}, [t._v("请输入正确的手机号码")]) : t._e(), t._v(" "), t.showToken ? n("div", {"staticClass": "item"}, [n("input", {
                "directives": [{
                    "name": "model",
                    "rawName": "v-model",
                    "value": t.tokenNum,
                    "expression": "tokenNum"
                }],
                "class": [{"inputbox": !0}, {"error": t.showTokenErr}],
                "attrs": {"type": "text", "placeholder": "图片验证码", "autocomplete": "off", "maxlength": "4"},
                "domProps": {"value": t.tokenNum},
                "on": {
                    "click": t.removeErr, "input": function (e) {
                        e.target.composing || (t.tokenNum = e.target.value)
                    }
                }
            }), t._v(" "), n("img", {
                "staticClass": "verify-code",
                "attrs": {"src": t.captchaSrc, "alt": "图形验证码"},
                "on": {"click": t.refreshCaptcha}
            })]) : t._e(), t._v(" "), t.showTokenErr ? n("p", {"staticClass": "error-tip"}, [t._v(t._s(t.tokenErrMsg))]) : t._e(), t._v(" "), t.showCode ? n("div", {"staticClass": "item"}, [n("input", {
                "directives": [{
                    "name": "model",
                    "rawName": "v-model",
                    "value": t.msgToken,
                    "expression": "msgToken"
                }],
                "class": [{"inputbox": !0}, {"error": t.showMsgErr}],
                "attrs": {"type": "text", "placeholder": "短信验证码", "maxlength": "6", "autocomplete": "off new-password"},
                "domProps": {"value": t.msgToken},
                "on": {
                    "click": t.removeErr, "input": function (e) {
                        e.target.composing || (t.msgToken = e.target.value)
                    }
                }
            }), t._v(" "), n("span", {
                "staticClass": "send-code",
                "on": {"click": t.checkNumber}
            }, [t._v("发送验证码")])]) : t._e(), t._v(" "), t.showCode ? t._e() : n("div", {"staticClass": "item"}, [n("input", {
                "directives": [{
                    "name": "model",
                    "rawName": "v-model",
                    "value": t.msgToken,
                    "expression": "msgToken"
                }],
                "class": [{"inputbox": !0}, {"error": t.showMsgErr}],
                "attrs": {"type": "text", "placeholder": "短信验证码", "maxlength": "6"},
                "domProps": {"value": t.msgToken},
                "on": {
                    "click": t.removeErr, "input": function (e) {
                        e.target.composing || (t.msgToken = e.target.value)
                    }
                }
            }), t._v(" "), n("span", {"staticClass": "send-code disabled"}, [t._v("重新发送(" + t._s(t.countNum) + ")")])]), t._v(" "), t.showMsgErr ? n("p", {"staticClass": "error-tip"}, [t._v(t._s(t.msgErrMsg))]) : t._e(), t._v(" "), n("a", {
                "staticClass": "btn-primary",
                "attrs": {"href": "#"},
                "on": {"click": t.msgLogin}
            }, [t._v(t._s(t.msgLoginBtn))])]) : t._e(), t._v(" "), t.isMsg ? t._e() : n("div", {"staticClass": "pwd-login form-login"}, [n("div", {"staticClass": "item"}, [n("input", {
                "directives": [{
                    "name": "model",
                    "rawName": "v-model",
                    "value": t.psdLoginPhoneNum,
                    "expression": "psdLoginPhoneNum"
                }],
                "class": t.phonenumErr ? "inputbox error" : "inputbox",
                "attrs": {"type": "text", "placeholder": "手机号", "autocomplete": "off", "maxlength": "11"},
                "domProps": {"value": t.psdLoginPhoneNum},
                "on": {
                    "focus": t.pwdFocusAction, "input": function (e) {
                        e.target.composing || (t.psdLoginPhoneNum = e.target.value)
                    }
                }
            })]), t._v(" "), t.phonenumErr ? n("p", {"staticClass": "error-tip"}, [t._v("请输入正确的手机号码")]) : t._e(), t._v(" "), n("div", {"staticClass": "item"}, [n("input", {
                "directives": [{
                    "name": "model",
                    "rawName": "v-model",
                    "value": t.psdLoginPsd,
                    "expression": "psdLoginPsd"
                }],
                "class": t.psdErr ? "inputbox error" : "inputbox",
                "attrs": {"type": "password", "placeholder": "密码"},
                "domProps": {"value": t.psdLoginPsd},
                "on": {
                    "focus": t.pwdFocusAction, "keyup": function (e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.enterToLogin(e)
                    }, "input": function (e) {
                        e.target.composing || (t.psdLoginPsd = e.target.value)
                    }
                }
            })]), t._v(" "), t.psdErr ? n("p", {"staticClass": "error-tip"}, [t._v("请输入正确的密码")]) : t._e(), t._v(" "), n("a", {
                "staticClass": "btn-primary",
                "attrs": {"href": "javascript:void(0)"},
                "on": {"click": t.passportLogin}
            }, [t._v("登录")]), t._v(" "), t._m(1)])]), t._v(" "), n("p", {
                "staticClass": "btn-switch btn-other",
                "on": {"click": t.goOther}
            }, [n("span", [t._v("其他登录方式")])]), t._v(" "), n("span", {
                "staticClass": "btn-close",
                "attrs": {"title": "关闭"},
                "on": {"click": t.closePhonePage}
            })]) : t._e()])
        }), [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {"staticClass": "popup-header"}, [e("h2", [this._v("登录")])])
        }, function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("p", {"staticClass": "forget-pwd"}, [e("a", {
                "attrs": {
                    "href": "/reset",
                    "target": "_blank"
                }
            }, [this._v("忘记密码")])])
        }], !1, null, null, null);
        e.a = g.exports
    }, "170": function (t, e) {
        t.exports = window.VuexRouterSync
    }, "171": function (t, e, n) {
        var o = n(67), r = {
            "defaultToken": "72387f1418dc0aeb", "genEncryptOption": function () {
                return {
                    "encryptKey": o.enc.Utf8.parse("7c2e52d43aad8720315ab624b9c9fa0f"),
                    "decryptKey": o.enc.Utf8.parse("cf8d51685b1374cb22329bbf0af3905a"),
                    "encryptOther": {
                        "iv": o.enc.Utf8.parse(atob("AAAAAAAAAAAAAAAAAAAAAA==") || "cf8d51685b1374cb22329bbf0af3905a"),
                        "mode": o.mode.CBC,
                        "pad": o.pad.Pkcs7
                    },
                    "decryptOther": {
                        "iv": o.enc.Utf8.parse(atob("AAAAAAAAAAAAAAAAAAAAAA==") || "7c2e52d43aad8720315ab624b9c9fa0f"),
                        "mode": o.mode.CBC,
                        "pad": o.pad.Pkcs7
                    }
                }
            }, "encrypt": function (t, e) {
                var n = this.genEncryptOption(e || this.defaultToken);
                return o.AES.encrypt(t, n.key, n.basic).toString()
            }, "decrypt": function (t) {
                var e = this.genEncryptOption(),
                    n = o.enc.Utf8.stringify(o.AES.decrypt(decodeURIComponent(t || ""), e.decryptKey, e.decryptOther) || "") || "{}";
                if (n.constructor === Object) try {
                    n = JSON.parse(o.enc.Utf8.stringify(o.AES.decrypt(decodeURIComponent(t || ""), e.decryptKey, e.decryptOther) || "") || "{}")
                } catch (t) {
                    n = "{}"
                } else n = o.enc.Utf8.stringify(o.AES.decrypt(decodeURIComponent(t || ""), e.decryptKey, e.decryptOther) || "") || "{}";
                return n
            }
        };
        t.exports = r
    }, "2": function (t, e) {
        t.exports = window.Vuex
    }, "35": function (t, e, n) {
        "use strict";
        var o = n(80), r = n.n(o), i = n(7).USER_LIST, a = {
            "appJumpLink": function (t) {
                "object" === r()(window.JSInvoker) && "function" == typeof window.JSInvoker.jumpLink ? window.JSInvoker.jumpLink(t) : window.location.href = t
            }, "appShareURL": function (t, e) {
                if (window.JSInvoker) {
                    var n = (new Date).getTime(),
                        o = "http://fanyi.sogou.com/writebook/activity/index?shareId=".concat(t, "&name=").concat(encodeURIComponent(e));
                    window.JSInvoker.shareUrl(o, "https://fanyiappdownload.sogoucdn.com/TreasureBookImg.png?time=" + n, "我一定一定要把这个考前锦囊分享给你，一起金榜题名吧！", "2020中高考英语高分锦囊：新东方名师绝密押题，清北学霸满分范文")
                }
            }, "appGetUserNickName": function (t) {
                if (window.JSInvoker) {
                    var e = navigator.userAgent.toLowerCase();
                    e.indexOf("iphone") >= 0 || e.indexOf("ipad") >= 0 ? (window.GETNICKNAME = function (e) {
                        t(e)
                    }, window.JSInvoker.getNickName("GETNICKNAME")) : t(window.JSInvoker.getNickName())
                }
            }, "appGetUserId": function (t) {
                "object" === r()(window.JSInvoker) && "function" == typeof window.JSInvoker.getPassport ? (window.GET_TRANS_APP_PASSPORT = function (e) {
                    t(e)
                }, window.JSInvoker.getPassport("GET_TRANS_APP_PASSPORT")) : t("1")
            }, "appJumpPhoneLogin": function (t) {
                window.TRANS_APP_JUMP_LOGIN = function (e) {
                    t(e)
                }, "object" === r()(window.JSInvoker) && "function" == typeof window.JSInvoker.jumpPhoneLogin && window.JSInvoker.jumpPhoneLogin("TRANS_APP_JUMP_LOGIN")
            }, "marqueeAction": function (t) {
                var e = document.getElementById("scrollbox");
                if (e) {
                    var n = setTimeout((function () {
                        var o = e.firstElementChild;
                        o && o.style && (o.style.marginTop = t + "px"), clearTimeout(n)
                    }), 1e3);
                    setInterval((function () {
                        var n = e.firstElementChild;
                        n && n.style && (n.style.marginTop = "0px", e.appendChild(n), (n = e.firstElementChild).style.marginTop = t + "px")
                    }), 3e3)
                }
            }, "countArticles": function (t) {
                var e = 0, n = !1;
                return t.forEach((function (t) {
                    t.list.forEach((function (t) {
                        "2" === (t.contentLevel || t.level) && (n = !0)
                    })), "fw" === t.type ? e += t.list.length : e++
                })), {"sum": e, "hasLevel": n}
            }, "getRandomUserName": function () {
                var t = parseInt(21 * Math.random());
                return i.slice(t)
            }, "replaceHeightStr": function (t) {
                var e = t.str, n = void 0 === e ? "" : e, o = t.newline, r = void 0 !== o && o, i = t.notChange,
                    a = void 0 !== i && i, s = n.replace(/(\*\*\*)(.*?)(\*\*\*)/g, (function (t, e, n) {
                        return a ? '<span class="txt-red">'.concat(n, "</span>") : n
                    })).replace(/(###)(.*?)(###)/g, (function (t, e, n) {
                        return a ? '<span class="txt-green">'.concat(n, "</span>") : n
                    }));
                return r && (s = s.replace(/\n|\r\n/g, "<br>")), s
            }, "iOSUrl": function () {
                return "https://apps.apple.com/cn/app/id1198464101"
            }, "schemeURL": function () {
                return "sogoutranslator://detail/openwith"
            }, "apkUrl": function (t) {
                var e = "//dlweb.sogoucdn.com/phonetic/transapp_channel/transapp_liebian.apk";
                return t && "wapsearch" === t && (e = "//dlweb.sogoucdn.com/phonetic/transapp_channel/transapp_sousuozhuanti.apk"), e
            }, "jumpUrl": function (t) {
                return t && /^http:|https:/.test(t) ? t : "javascript:void(0)"
            }, "showPvNum": function (t) {
                return t <= 1e5 ? t : "".concat((t / 1e4).toFixed(1), "万")
            }, "getElementOffsetTop": function (t) {
                var e = t.library_name, o = t.data, r = t.sguid, i = t.islock, s = [], c = n(4),
                    l = document.querySelectorAll(".content ul");
                Array.prototype.forEach.call(l, (function (t, n) {
                    var a = o[n];
                    "model-article" === t.className ? (s.push({
                        "stype": "card_show",
                        "loginstatus": r && r.length ? "1" : "0",
                        "offsetTop": t.offsetTop,
                        "library_name": e,
                        "islock": i,
                        "articleType": a.type || "",
                        "content_id": a.head.contentId || "",
                        "title": a.head.title || "",
                        "rank": a.head.level || "",
                        "position": n + 1
                    }), a.list.forEach((function (n, o) {
                        s.push({
                            "stype": "article_show",
                            "loginstatus": r && r.length ? "1" : "0",
                            "offsetTop": t.offsetTop + 113 * o,
                            "library_name": e,
                            "islock": i,
                            "arti_id": n.id || "",
                            "rank": n.contentLevel || n.level || "",
                            "position": o + 1
                        })
                    }))) : s.push({
                        "stype": "card_show",
                        "loginstatus": r && r.length ? "1" : "0",
                        "offsetTop": t.offsetTop,
                        "library_name": e,
                        "islock": i,
                        "articleType": a.type || "",
                        "content_id": a.list[0].id || "",
                        "title": a.list[0].title || "",
                        "rank": a.list[0].level || "",
                        "position": n + 1
                    })
                })), s.forEach((function (t, e) {
                    t.offsetTop <= window.innerHeight && (c.send(t), delete s[e])
                })), a.scrollExposePvInit({"contentArr": s})
            }, "scrollExposePvInit": function (t) {
                var e = t.contentArr;
                window._WRITEBOOK_PARAMS_ = null;
                var n = window.innerHeight;
                window._WRITEBOOK_PARAMS_ = {
                    "timer": null,
                    "oldHeight": 1,
                    "newHeight": 0,
                    "oldDirection": 0,
                    "newDirection": 0,
                    "fixedHeight": 0,
                    "contentArr": e,
                    "windowHeight": n
                }, document.removeEventListener("scroll", this.sendMsg), document.addEventListener("scroll", this.sendMsg)
            }, "sendMsg": function () {
                var t = n(4), e = window._WRITEBOOK_PARAMS_;
                clearTimeout(e.timer), e.timer = setTimeout((function () {
                    e.newHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, e.newDirection = e.newHeight, e.newDirection > e.oldDirection && e.newHeight > e.fixedHeight && e.newHeight === e.oldHeight && (clearTimeout(e.timer), e.fixedHeight = e.newDirection, e.contentArr.forEach((function (n, o) {
                        n.offsetTop <= e.fixedHeight + e.windowHeight && (t.send(n), delete e.contentArr[o])
                    }))), e.oldDirection = e.newDirection
                }), 200), e.oldHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
            }
        };
        e.a = a
    }, "36": function (t, e) {
        t.exports = window.Vue
    }, "362": function (t, e, n) {
        "use strict";
        var o = n(81);
        n.n(o).a
    }, "367": function (t, e, n) {
        t.exports = n.p + "ssr/static/img/ico_logo.604a254.png"
    }, "368": function (t, e, n) {
        t.exports = n.p + "ssr/static/img/banner-footer.1a9f0c1.png"
    }, "369": function (t, e, n) {
        t.exports = n.p + "ssr/static/img/app-new-footer.dc1f7dd.png"
    }, "370": function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQAQMAAAC6caSPAAAABlBMVEUAAAD///+l2Z/dAAACMElEQVR42u3cQZLCIBBAUSwXLj2CR/FoydE8So6QZRYpGZqmgTiZqUmVMC4+G8skz1UXNE1H5w8PB4EcI7PL4yRXFnf39cWzPFXGDQLpQoYUog8h40W/jPGuPZUu+hUC6UVWuXEREn2kYUwy+z5iJIeb8swAgfwD0Uh+uqtEsstJAQTyGUTnUlv3IZDupF73Qzrq0t0QyctfUgUIpAGpdknBh11SnGDPsu6HL2tOS/c3VhBIA7IZlo7OaS51spP/vQwFgTQgc4rPNGS2fernJMmAT0mB/R4E0ofku3FitczzlZQcFQI5RnzZ3cRHl6qMbjclxzzlAIZAupGLzpKybj+VWCQb8ZJwegikD/G6uwnjmoN2KPVKzTFTMfMGgfQha45gLaOfLBmw39tb9yGQpmS0inlp1SinO3YI6TeRDIG0Jnndt86hHMl5xIn2upMqQCBNyJwzT2vR0AJRKQxVO/tcgYdAmhIbi+6OBktLvfZZ3ust1LBCIF2IZZ62Py9z6eTsLNx6hEcHgXQhKR21NHS0mlIadiZuB+UeAjlKXsKyKhBNzrrT8usRHgLpQl76LqqWc201lwnSp2aM/XYgCOTtZKdLzes+qCqn28oOgfQiVU/va5eaHT56JXttwBBIG1K/L2Zn4tsOom+pAgTSj5Q3IGIx84cOIgikK5m3dcucjtrFFQLpRTbr/rJtbLMOorqxDQJpTza7JB3ppW+rKeVa++7GCgJ5O+FvviAfR74ASngNKYsFmjAAAAAASUVORK5CYII="
    }, "371": function (t, e, n) {
        "use strict";
        var o = n(82);
        n.n(o).a
    }, "372": function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAD1BMVEUAAAD///+CgoLo6OhDQ0NzesCwAAADGUlEQVR42u3bzW3DMAwGUGuDeIOmXaBAJ0j3H6qHXhpACiklcm3j8db6j8+nD6SzrCepBQQEBAQEBARkt5Clp25/b3D5/d/9TQdq/AY3EBAQEBAQEJBDQL7fH9fbtpCudu4g1yBhfrZPq7RWKkfu8NE1Xe2AgICAgICAgIBsC6k84FqBRH2Uprfk4nNXOyAgICAgICAgILuEtJNsMhc/WJqDgICAgICAgICcCrJGgbeScZN4EBAQEBAQEJAzQiqfD/4nJNfO03v22sQz6r3kZq7bfjAAAgICAgICslfIx9fj2hjS1c6UX/S8CNLVzhOQ9mr9RX+AgICAgICAgIDsCzJSyfCajMLPFggICAgICAgIyHTI+PQy2fvaPC18LZXTCggICAgICAgIyA4hpbJA3xbSvlsBAQEBAQEBAQHZB6RW7QeMDEZHXhgICAgICAgICMimkMqVYRCNImoyJPdBmm8PBAQEBAQEBARkI8gajT+7luFLlIvHB7CXIP2CgICAgICAgIDMgCxBhRk3OSWN5qddgXcFAQEBAQEBAQH5P0h0ZV8uTjbVdSSZfkFAQEBAQEBAQOZBRiJq1zY9WaXnJYOAgICAgICAgOwFkuwwyqvhBj45px1PvyAgICAgICAgIAOQdo33vj4bn0vPNSAgICAgICAgINMhyRnlyKOTryWarEYqEBAQEBAQEBCQ6ZBoYBlWhE9u05Or9faeHQQEBAQEBAQEZB4kuk2y3advEHrbbxIEBAQEBAQEBGQ2ZKS6mupboFeeU4JhKggICAgICAgIyHTI0lO3rmsqrV0GVvhR5AYBAQEBAQEB2Tvk+/1xvR0Fcg3y7ufdaS9dk69R+l169uwgICAgICAgICDTIZUIe21CwpFp1NSay9KlGZ9BQEBAQEBAQEB2DIl6H8m44QY+t2cHAQEBAQEBAQHZCyRKsmVN1SXKuLnngICAgICAgIAcBFL5mvGYkJE9e7LDaMwaZdy+kSkICAgICAjIKSAfX4/rMJBk3c4MiZ4WTlaTxOYREBAQEBAQEBCQ6ZDjFwgICAgICMiZID+8HUZmi5MQ/AAAAABJRU5ErkJggg=="
    }, "373": function (t, e, n) {
        t.exports = n.p + "ssr/static/img/logo_fanyi.5d0e708.png"
    }, "374": function (t, e, n) {
        t.exports = n.p + "ssr/static/img/01.5b19315.jpg"
    }, "375": function (t, e, n) {
        t.exports = n.p + "ssr/static/img/02.5c60d77.jpg"
    }, "376": function (t, e, n) {
        t.exports = n.p + "ssr/static/img/03.68fb613.jpg"
    }, "377": function (t, e, n) {
        "use strict";
        var o = n(83);
        n.n(o).a
    }, "378": function (t, e, n) {
        "use strict";
        var o = n(84);
        n.n(o).a
    }, "379": function (t, e, n) {
        t.exports = n.p + "ssr/static/img/loading.71ca978.gif"
    }, "380": function (t, e, n) {
        t.exports = n.p + "ssr/static/img/transapp_pcshangxuanfu.d0b293b.png"
    }, "381": function (t, e, n) {
        t.exports = n.p + "ssr/static/img/transapp_pcshangxuanfu@2x.c99f8d3.png"
    }, "382": function (t, e, n) {
        var o = n(383), r = {
            "format": function (t, e) {
                var n = ("newCentury" === e ? t.context : t) || [], r = e || "";
                return {
                    "formatRarelyWord": function (t) {
                        return n.forEach((function (e) {
                            var n = e.rarelyWordDict || {}, o = n.isHaveRarelyWord;
                            1 === parseInt(o) && (n.rarelyWordList || []).forEach((function (e) {
                                var n = e.rarelyWord, o = e.path, r = new RegExp("\\(\\(" + n + "\\)\\)", "g");
                                o = /^\/\//g.test(o) ? o : "//" + o, o += "?v=".concat("1219"), t = t.replace(r, '<img width="16" height="16" src="' + o + '" class="dict-rarely-word">')
                            }))
                        })), t
                    }, "formatStyle": function (t) {
                        return t = (t || "")._bold("al")._ita("al")._sup("al")._sub("al").trim(), this.formatRarelyWord(t)
                    }, "formatIEStyle": function (t) {
                        return t = (t || "")._bold()._ita()._sup()._sub().trim(), this.formatRarelyWord(t)
                    }, "formatArray": function (t) {
                        return this.formatStyle(Array.isArray(t) ? t.join(";") : t || "")
                    }, "formatPhrases": function (t) {
                        return this.formatArray(t).replace(/。/g, "。<br><br>").replace(/<br><br>$/, "")
                    }, "formatDicTab": function (t, e) {
                        return t = t || "", "oxford" === r ? t = 1 === n.length ? t._supb() : t._sup("al")._sub("al") : "zhen_century" === r && n.length > 1 && e > 0 && (t = t + "<sup>" + e + "</sup>"), t._bold()._ita()
                    }, "formatTag": function (t) {
                        return t._supb_()
                    }, "formatPhonetic": function (t, e, n, r) {
                        return (t = t || {}).text = (t.text || "").replace(/(?:\/|／)/g, "").replace(/\[/g, "").replace(/\]/g, ""), t.type ? t._type = {
                            "usa": "美",
                            "uk": "英",
                            "zh": "汉"
                        }[t.type] || "英" : t._type = "", t.url = t.filename ? /\/\/dlweb\.sogoucdn\.com/.test(t.filename) ? t.filename : "//dlweb.sogoucdn.com/phonetic/" + t.filename : o.getVoiceSrc({
                            "text": e || t.text || "",
                            "lang": n || "auto",
                            "terminalType": r
                        }, "web"), t
                    }, "highlight": function (t, e) {
                        t = this.formatStyle(t || "");
                        var n = "<em>" + (e = this.formatTag(this.formatDicTab(e || ""))) + "</em>";
                        return (t = "oxford" === r ? (t = t && e ? t.replace(new RegExp("\\b" + e + "\\b", "ig"), n) : t).replace(new RegExp('"<em>' + e + '</em>"', "ig"), '"' + e + '"') : t && e ? t.replace(new RegExp(e, "g"), n) : t) || ""
                    }, "formatNoShowChar": function (t) {
                        return n.forEach((function (e) {
                            (e.no_show_char_list || []).forEach((function (e) {
                                t.indexOf('<span class="gbk-s">' + e + "</span>") < 0 && (t = t.replace(new RegExp(e, "g"), '<span class="gbk-s">' + e + "</span>"))
                            }))
                        })), t
                    }, "formatRef": function (t) {
                        return (t = (t || "").replace(/(\S*)(\s.{1}\s)(\S*)/g, "$3 $1")) && (t = "参见：" + t), t
                    }, "formatXSS": function (t) {
                        return (t || "").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    }, "formatChineseTag": function (t) {
                        return t ? "[" + t + "] " : ""
                    }, "formatBrackets": function (t) {
                        return (t || "").replace(/(?:<|〈|［|\[|【).*?(?:>|〉|］|\]|】)[；]?/g, "")
                    }
                }
            }
        };
        t.exports = r
    }, "385": function (t, e) {
        t.exports = {
            "params": {"left": 0, "top": 0, "currentX": 0, "currentY": 0, "flag": !1},
            "getCss": function (t, e) {
                return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, !1)[e]
            },
            "drag": function (t, e, n) {
                var o = this;
                "auto" !== o.getCss(e, "left") && (o.params.left = o.getCss(e, "left")), "auto" !== o.getCss(e, "top") && (o.params.top = o.getCss(e, "top")), o.params.flag = !0, n || (n = window.event, t.onselectstart = function () {
                    return !1
                });
                var r = n;
                o.params.currentX = r.clientX, o.params.currentY = r.clientY, document.onmouseup = function () {
                    o.params.flag = !1, document.onmousedown = null, document.onmousemove = null
                }, document.onmousemove = function (t) {
                    var n = t || window.event;
                    if (o.params.flag) {
                        var r = n.clientX, i = n.clientY, a = r - o.params.currentX, s = i - o.params.currentY,
                            c = parseInt(o.params.left) + a,
                            l = (document.documentElement.clientWidth || document.body.clientWidth) - e.offsetWidth,
                            u = parseInt(o.params.top) + s,
                            p = (document.documentElement.clientHeight || document.body.clientHeight) - e.offsetHeight,
                            d = document.documentElement.scrollTop || document.body.scrollTop,
                            f = document.documentElement.scrollLeft || document.body.scrollLeft,
                            h = "none" !== document.querySelector("#header-fixed").style.display;
                        return e.style.top = u <= d ? h ? d + 61 + "px" : d + "px" : u >= d + p ? d + p + "px" : u + "px", e.style.left = c <= f ? f + "px" : c >= f + l ? f + l + "px" : c + "px", t.preventDefault && t.preventDefault(), !1
                    }
                }
            }
        }
    }, "386": function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAEEAQMAAAD0xthJAAAABlBMVEUAAAD///+l2Z/dAAABv0lEQVRo3u2aMZLsIAxEn4uAkCNwFB/NHM1H4QiEBJR7A8F4ZtZbv34MhK5HopJaLWH0j1OYjMBOzBCqr7jGJr0+z0dIks6YIfQoXUgckpQX8UQk2M+YY8Gr9liKI8E+M0EovoIbEZuckCRV38BqbhF/E73mogrgGttfVTkHMVQ7llB9dc1dm3jU9UUQ3/t+DqpezUTq0RlMQcChBFFS8ZLUtgukdJyvmE5GJNiVIVQAd/1ySov49IXpSNBVyjdzjj3L8nxE12dJBa/qeo4B7CeLeCAspkSVUL00QpoO6YyajkDqNRckyXwQX7PYVEQ6pBMgqPrmdG392u0cF/FGyNIpA6F6WZKBlHaNmpuK4EhYzYFXc227bn+t6Qg4pHM3X4hvThpNvWvyIj6Jlz7nUBg+iH4vz0iY47HlV8U1Gy1MmRbxm+B1gkyltuGj949pfhLiDlko3rY9NpymXTMSw/Aoh+Kl5nR9708XwfM20Poc2DSvtN9OeiritYG3F4m2XT2Ko88t4pFQth29bZy/5v0ZCalgK2cs8857FpuKGG98QdVXZ13MBtZzEU/EvYHHV9/cW98fs8dMxPqr4v+IH0e59J3EM71+AAAAAElFTkSuQmCC"
    }, "387": function (t, e, n) {
        "use strict";
        var o = n(85);
        n.n(o).a
    }, "388": function (t, e, n) {
        t.exports = n.p + "ssr/static/img/top-img-h5.cc57719.png"
    }, "389": function (t, e, n) {
        t.exports = n.p + "ssr/static/img/top-img.65d221a.png"
    }, "390": function (t, e, n) {
        "use strict";
        var o = n(86);
        n.n(o).a
    }, "391": function (t, e, n) {
        "use strict";
        n.r(e);
        n(177);
        var o, r, i = n(36), a = n.n(i), s = {
                "data": function () {
                    return {"className": "view"}
                }, "created": function () {
                    -1 !== this.$route.path.indexOf("writebook") && (this.className = "")
                }
            }, c = (n(362), n(5)), l = Object(c.a)(s, (function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("transition", {"attrs": {"name": "fade", "mode": "out-in"}}, [e("div", {
                    "staticClass": "page",
                    "attrs": {"id": "translateIndex"}
                }, [e("router-view", {"class": this.className})], 1)])
            }), [], !1, null, null, null).exports, u = n(1), p = n.n(u), d = n(2), f = n.n(d), h = n(13), m = n.n(h),
            g = n(64), v = n.n(g), y = n(0), w = n(7), _ = {
                "namespaced": !0,
                "state": {
                    "from": "auto",
                    "to": "zh-CHS",
                    "fromText": "自动检测",
                    "toText": "中文",
                    "detect": {"lang": "", "text": "", "show": !1},
                    "langMap": {"show": !1, "current": "", "type": ""},
                    "toItemList": JSON.parse(JSON.stringify(w.LANGUAGE_TO_LIST)),
                    "fromItemList": JSON.parse(JSON.stringify(w.LANGUAGE_FRONN_LIST)),
                    "detectItem": {"lang": "auto", "text": "自动检测", "play": !1}
                },
                "getters": {
                    "formatItem": function (t, e) {
                        return function (n) {
                            var o = e.getItem(n);
                            return o.text = w.AUTO_DETECT === n ? "检测为" + t.detect.text : o.text, o.font = o.font ? o.font : "", o.dir = w.AUTO_DETECT === n ? t.detect.dir : o.dir || "ltr", o
                        }
                    }, "fromItem": function (t, e) {
                        return e.formatItem(t.from)
                    }, "toItem": function (t, e) {
                        return e.formatItem(t.to)
                    }, "exchange": function (t) {
                        return "auto" === t.from || "autodetect" === t.from
                    }, "getItem": function () {
                        return function (t) {
                            var e, n, o = v.a.LI;
                            if ("auto" === t) return v.a.auto;
                            for (n in o) o[n].forEach((function (n) {
                                n.lang === t && (e = n)
                            }));
                            return e || {}
                        }
                    }, "direction": function (t) {
                        var e, n = t.from, o = t.to;
                        switch (n = /^auto/g.test(n) ? t.detect.lang : n, "".concat(n).concat(o)) {
                            case"zh-CHSen":
                                e = "ztoe";
                                break;
                            case"enzh-CHS":
                                e = "etoz";
                                break;
                            case"zh-CHSja":
                                e = "ztoj";
                                break;
                            case"jazh-CHS":
                                e = "jtoz";
                                break;
                            case"kozh-CHS":
                                e = "ktoz";
                                break;
                            case"zh-CHSko":
                                e = "ztok";
                                break;
                            default:
                                e = "other"
                        }
                        return e
                    }
                },
                "mutations": (o = {}, p()(o, y.bb, (function (t, e) {
                    var n = e.key, o = e.val;
                    t.detectItem[n] = o
                })), p()(o, y.qb, (function (t, e) {
                    var n = e.from, o = e.to;
                    n && (t.from = n), o && (t.to = o)
                })), p()(o, y.rb, (function (t, e) {
                    t.langMap = e
                })), p()(o, y.c, (function (t, e) {
                    var n = e.from, o = e.to, r = e.detect;
                    t.from = n, t.to = o, t.detect = r
                })), p()(o, y.b, (function (t, e) {
                    t.detect = e
                })), p()(o, y.v, (function (t, e) {
                    var n = e.show, o = e.type;
                    t.langMap.show = n, t.langMap.type = o
                })), p()(o, y.sb, (function (t, e) {
                    var n, o = e.type, r = e.item, i = "to" === o ? t.toItemList : t.fromItemList, a = "none";
                    for (n = 0; n < i.length; n++) {
                        if (i[n].lang === r.lang && n < 3) {
                            a = "big";
                            break
                        }
                        if (i[n].lang === r.lang && n >= 3) {
                            a = "small";
                            break
                        }
                    }
                    "small" === a && i.splice(n, 1), "big" !== a && (i.splice(3, 0, r), i.length = i.length >= 6 ? 6 : i.length)
                })), p()(o, y.d, (function (t) {
                    t.toItemList = JSON.parse(JSON.stringify(w.LANGUAGE_TO_LIST)), t.fromItemList = JSON.parse(JSON.stringify(w.LANGUAGE_FRONN_LIST))
                })), o),
                "actions": {
                    "updateLanguageList": function (t, e) {
                        var n, o, r, i, a = t.state, s = t.commit, c = t.getters, l = e.type,
                            u = this.__LANG_MAP__ = this.__LANG_MAP__ || v.a, p = u[l + "CY"], d = !1;
                        n = a[l], o = p.splice(0, p.length - 2), r = p.splice(p.length - 2, 2), n = w.AUTO_DETECT === n ? "auto" : n, o.forEach((function (t) {
                            t.lang === n && (d = !0)
                        })), r && r[0] && r[0].lang !== n && "auto" !== n && !d && (i = c.getItem(n), r.unshift(i)), u[l + "CY"] = o.concat(r.splice(0, 2)), u.show = !0, u.current = n, u.type = l, s(y.rb, u)
                    }, "updateLanguage": function (t, e) {
                        var n = t.commit, o = t.dispatch, r = e.from, i = e.to;
                        o("updateLanguageRecord", {"from": r, "to": i}), n(y.qb, {"from": r, "to": i})
                    }, "exchangeLanguage": function (t) {
                        var e = t.state, n = t.commit, o = t.dispatch;
                        if (!e.exchange) {
                            var r = e.from, i = w.AUTO_DETECT === r ? e.detect.lang : r;
                            o("updateLanguageRecord", {"from": e.to, "to": i}), n(y.qb, {
                                "from": e.to,
                                "to": i
                            }), o("translate/executeTranslate", null, {"root": !0})
                        }
                    }, "detectLanguage": function (t, e) {
                        var n, o, r = t.state, i = t.commit, a = t.dispatch, s = t.getters, c = e.dtype, l = e.lang,
                            u = e.text, p = r.from, d = r.to, f = r.detect, h = f.lang;
                        switch (c) {
                            case"from":
                            case"to":
                                if (p = w.AUTO_DETECT === p ? "auto" : p, "from" === c) n = l, o = l === d ? "auto" === p ? "zh-CHS" === l ? "en" : "zh-CHS" : p : d; else if ("to" === c) {
                                    if (l === d) return;
                                    l === h ? (n = d, o = h) : (n = l === p ? d : p, o = l)
                                }
                                i(y.qb, {"from": n, "to": o}), a("updateLanguageRecord", {
                                    "from": n,
                                    "to": o
                                }), a("translate/executeTranslate", null, {"root": !0});
                                break;
                            case"detect":
                                f = {
                                    "lang": l,
                                    "text": u,
                                    "show": !1
                                }, l && u ? "auto" === p || "autodetect" === p ? (n = w.AUTO_DETECT, o = l === d ? "zh-CHS" === l ? "en" : "zh-CHS" : d) : (l !== p && (f = {
                                    "lang": l,
                                    "text": u,
                                    "show": !0
                                }), n = p, o = d) : (n = "auto" === p ? "zh-CHS" : p, o = "auto" === p ? "en" : d), f.text = s.getItem(f.lang).text, f.show = w.AUTO_DETECT !== n && f.show, f.dir = s.getItem(f.lang).dir, i(y.c, {
                                    "from": n,
                                    "to": o,
                                    "detect": f
                                })
                        }
                    }, "initLanguage": function (t, e) {
                        var n = t.commit;
                        n(y.c, e), n(y.d)
                    }, "updateLanguageRecord": function (t, e) {
                        for (var n = t.commit, o = e.from, r = e.to, i = v.a.ALL, a = "", s = "", c = 0; c < i.length && (a = r === i[c].lang && "" === a ? i[c] : a, !(s = o === i[c].lang && "" === s ? i[c] : s) || !a); c++) ;
                        "auto" !== o && o && n(y.sb, {"type": "from", "item": s}), r && n(y.sb, {"type": "to", "item": a})
                    }
                }
            }, b = n(117), O = n.n(b), S = n(168), A = n.n(S), C = n(37), T = n.n(C), E = n(4), k = n.n(E), P = n(58),
            x = n.n(P), I = n(63), j = n.n(I), D = n(15), L = n.n(D), N = n(169), R = n.n(N), U = n(6), B = n.n(U),
            M = n(51), G = n(161), q = n(120),
            z = new RegExp("^(?:(?:http|https|ftp)://)?(?:(?:[\\w-]+\\.)+(?:com|edu|gov|int|mil|net|org|biz|info|pro|name|museum|coop|aero|xxx|idv|al|dz|af|ar|ae|aw|om|az|eg|et|ie|ee|ad|ao|ai|ag|at|au|mo|bb|pg|bs|pk|py|ps|bh|pa|br|by|bm|bg|mp|bj|be|is|pr|ba|pl|bo|bz|bw|bt|bf|bi|bv|kp|gq|dk|de|tl|tp|tg|dm|do|ru|ec|er|fr|fo|pf|gf|tf|va|ph|fj|fi|cv|fk|gm|cg|cd|co|cr|gg|gd|gl|ge|cu|gp|gu|gy|kz|ht|kr|nl|an|hm|hn|ki|dj|kg|gn|gw|ca|gh|ga|kh|cz|zw|cm|qa|ky|km|ci|kw|cc|hr|ke|ck|lv|ls|la|lb|lt|lr|ly|li|re|lu|rw|ro|mg|im|mv|mt|mw|my|ml|mk|mh|mq|yt|mu|mr|us|um|as|vi|mn|ms|bd|pe|fm|mm|md|ma|mc|mz|mx|nr|np|ni|ne|ng|nu|no|nf|na|za|zq|aq|gs|eu|pw|pn|pt|jp|se|ch|sv|ws|yu|sl|sn|cy|sc|sa|cx|st|sh|kn|lc|sm|pm|vc|lk|sk|si|sj|sz|sd|sr|sb|so|tj|tw|th|tz|to|tc|tt|tn|tv|tr|tm|tk|wf|vu|gt|ve|bn|ug|ua|uy|uz|es|eh|gr|hk|sg|nc|nz|hu|sy|jm|am|ac|ye|iq|ir|il|it|in|id|uk|vg|io|jo|vn|zm|je|td|gi|cl|cf|cn|fun|online|store|tech|vip|wang|top|wiki|pub|live|me|mobi))(:\\d+)?(/[^\\s]*)?$", "i"),
            H = {
                "namespaced": !0,
                "state": {
                    "minInputHeight": "0px",
                    "translateData": "",
                    "transTypeTxt": "",
                    "lastQuery": {"query": "", "from": "", "to": ""},
                    "query": "",
                    "queryIsFromURL": !1,
                    "from": "",
                    "to": "",
                    "result": "",
                    "targetPronounceShow": !1,
                    "isUrl": "",
                    "transSource": "",
                    "button": {"show": !1, "active": !1},
                    "qcMap": {"diff": "", "need": 1},
                    "detectItem": {},
                    "tabSelect": "",
                    "showDictionary": !1,
                    "showVrUsual": "",
                    "dictionaryType": "",
                    "dictionaries": "",
                    "dictionary": "",
                    "usual_Dict": "",
                    "second_query": "",
                    "levelList": "",
                    "notFound_show": !1,
                    "phoneticShow": "",
                    "word_phrase": [],
                    "exchange": "",
                    "bilingual": "",
                    "dictionarySelectedIndex": 0,
                    "translateRecord": [],
                    "globalShowTranslateRecord": !0,
                    "pronPrefer": {"type": "usa_1", "speaker": "male", "speed": "standard"},
                    "ServerRecord": "",
                    "ServerUIGS": {},
                    "ServerSgtkn": "",
                    "serverErrorCode": "",
                    "showTranslateRecord": !0,
                    "showTranslateRecordDialog": !1,
                    "suggestion": [],
                    "suggFlag": !1,
                    "suggDirection": "",
                    "tabObj": {},
                    "usualTop": "",
                    "keywordShow": !1,
                    "keyword": [],
                    "yingyinNormal": [],
                    "expandOnePic": "",
                    "expandShow": 0,
                    "expandShowNum": 0,
                    "expandLen": 0,
                    "expandData": {},
                    "synonym": [],
                    "antonym": [],
                    "wordRootInfo": {},
                    "wordDifferenceInfo": [],
                    "collectInfo": {"isCollect": !1, "collectId": "", "isShow": !1},
                    "activeTabView": "",
                    "isFromShuyingyin": !1,
                    "pcInputstatus": !1,
                    "isBtnTrans": !1,
                    "isDelete": !1,
                    "promotionIndex": !1,
                    "transModel": {"textSimple": "通用", "val": "general"},
                    "hotWords": []
                },
                "getters": {
                    "clear": function (t) {
                        return !!(t.query || "").trim()
                    }
                },
                "mutations": (r = {}, p()(r, y.Yb, (function (t, e) {
                    t = Object.assign(t, e)
                })), p()(r, y.u, (function (t, e) {
                    t.isDelete = e
                })), p()(r, y.j, (function (t, e) {
                    t.isBtnTrans = e
                })), p()(r, y.Hb, (function (t, e) {
                    t.serverErrorCode = e
                })), p()(r, y.ob, (function (t, e) {
                    t.isFromShuyingyin = e
                })), p()(r, y.A, (function (t, e) {
                    t.notFound_show = "web" === B.a.terminalJudge() && e
                })), p()(r, y.tb, (function (t, e) {
                    t.lastQuery = e
                })), p()(r, y.wb, (function (t, e) {
                    t.minInputHeight = e
                })), p()(r, y.mb, (function (t, e) {
                    t.activeTabView = e
                })), p()(r, y.Tb, (function (t, e) {
                    t.translateData = e
                })), p()(r, y.k, (function (t, e) {
                    t.collectInfo = e
                })), p()(r, y.Xb, (function (t, e) {
                    t.transTypeTxt = e
                })), p()(r, y.Pb, (function (t, e) {
                    t.synonym = e
                })), p()(r, y.X, (function (t, e) {
                    t.antonym = e
                })), p()(r, y.dc, (function (t, e) {
                    t.wordRootInfo = e
                })), p()(r, y.bc, (function (t, e) {
                    t.wordDifferenceInfo = e
                })), p()(r, y.fc, (function (t, e) {
                    t.yingyinNormal = e
                })), p()(r, y.ub, (function (t, e) {
                    t.levelList = e
                })), p()(r, y.Ub, (function (t, e) {
                    t.from = e.from, t.to = e.to
                })), p()(r, y.Sb, (function (t, e) {
                    t.keyword = e
                })), p()(r, y.N, (function (t, e) {
                    t.keywordShow = e
                })), p()(r, y.cc, (function (t, e) {
                    t.word_phrase = e
                })), p()(r, y.S, (function (t, e) {
                    t.usualTop = e
                })), p()(r, y.L, (function (t, e) {
                    var n = e.type, o = e.isTooggle, r = document.querySelector("#trans-input");
                    if (r) {
                        var i = window.getComputedStyle(r, null), a = 1 * parseInt(i.lineHeight),
                            s = 5 * parseInt(i.lineHeight), c = function () {
                                r.style.height = "26px";
                                var t = r.scrollHeight;
                                return Math.min(t, s)
                            };
                        if ("input" === n) "wap" === B.a.terminalJudge() && (r.style.height = c() + "px"); else {
                            var l, u, p = document.documentElement, d = document.body, f = window.innerHeight,
                                h = document.querySelector(".J-promotion-cz-bottom"),
                                m = document.querySelector("#J-container"), g = document.querySelector(".J-source"),
                                v = window.getComputedStyle(g, null), y = document.querySelector(".J-logo"),
                                w = document.querySelector("#J-langselect"), _ = y ? y.clientHeight : 0,
                                b = w ? w.clientHeight : 0, O = h ? h.clientHeight : 0,
                                S = document.querySelector(".trans-to");
                            switch (l = m.scrollHeight, n) {
                                case"init":
                                    if ("wap" === B.a.terminalJudge()) if (l + O <= f) if (t.query || t.result || t.showTranslateRecord) u = c(); else u = f - _ - b - parseInt(v.paddingTop) - parseInt(v.paddingBottom) - O; else u = c(); else if (t.query) {
                                        var A = document.querySelector(".J-source"),
                                            C = document.querySelector(".output-val"),
                                            T = document.querySelector(".input_div");
                                        T.style.width = r.clientWidth - 1 + "px";
                                        var E = T.clientHeight;
                                        if (r && r.scrollHeight && r.scrollHeight > 100 || C && C.scrollHeight && C.scrollHeight > 100) if (r.style.overflow = "hidden", o && self.lastH) S.style.height = self.lastH, r.style.height = self.lastH, A.style.height = self.lastH; else if (C) {
                                            C.style.overflow = "hidden";
                                            var k = Math.max(C.scrollHeight + 70, E + 70, 160);
                                            k = k > 2e3 ? k + 20 : k, A.style.height = k + "px", S.style.height = k + "px", r.style.height = k + "px", self.lastH = k
                                        } else {
                                            var P = Math.max(E + 70, 160);
                                            A.style.height = P + "px", r.style.height = P + "px", self.lastH = P + "px";
                                            var x = setTimeout((function () {
                                                S.style.height = P, x && window.clearTimeout(x)
                                            }), 50)
                                        }
                                    }
                                    break;
                                case"focus":
                                    "wap" === B.a.terminalJudge() && (u = t.query && t.query.length ? c() : 26, p.scrollTop || d.scrollTop);
                                    break;
                                case"clear":
                                    "wap" === B.a.terminalJudge() ? (u = c(), u = 26, u = a) : (document.querySelector(".J-source").style.minHeight = 0, document.querySelector(".trans-to").style.minHeight = 0)
                            }
                            r.style.height = u + "px"
                        }
                    }
                })), p()(r, y.a, (function (t, e) {
                    t.suggFlag = e
                })), p()(r, y.K, (function (t, e) {
                    t.tabSelect = e
                })), p()(r, y.Q, (function (t, e) {
                    t.button = e
                })), p()(r, y.n, (function (t, e) {
                    var n = e.dictionary, o = e.bilingual, r = e.Obj;
                    t.showDictionary = n && n.showDictionary, t.showVrUsual = n && n.showVrUsual, t.dictionaryType = n && n.type, t.dictionary = n, t.dictionaries = n && n.dictionaries, t.showDictionary = n && n.showDictionary, t.exchange = n && n.partOfSpeech, t.usual_Dict = n && n.usual_Dict, t.second_query = n && n.second_query, t.bilingual = o, t.phoneticShow = n && n.phoneTicIsSim, t.tabObj = r
                })), p()(r, y.F, (function (t, e) {
                    t.qcMap = e
                })), p()(r, y.O, (function (t, e) {
                    t.showTranslateRecord = !!e
                })), p()(r, y.E, (function (t, e) {
                    var n = e.prefName, o = e.val;
                    t.pronPrefer[n] = o
                })), p()(r, y.r, (function (t, e) {
                    t.globalShowTranslateRecord = !!e
                })), p()(r, y.P, (function (t, e) {
                    t.showTranslateRecordDialog = !!e
                })), p()(r, y.Ob, (function (t, e) {
                    var n, o = e.sugg, r = e.dir;
                    Array.isArray(o) && (n = o.filter((function (t, e) {
                        return e < w.MAX_SUGGESTION_NUM
                    }))), t.suggestion = n, t.suggDirection = r
                })), p()(r, y.Cb, (function (t, e) {
                    var n = e.query, o = e.queryIsFromURL;
                    t.query = n, t.queryIsFromURL = !!o, t.query = (n || "").replace(/(?:\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\uFEFF)/g, "").replace(/^related:http/, "http").replace(/\r\n?/g, "\n").slice(0, w.MAX_TRANSLATE_LEN)
                })), p()(r, y.Eb, (function (t, e) {
                    t.result = e || ""
                })), p()(r, y.Qb, (function (t, e) {
                    t.targetPronounceShow = e
                })), p()(r, y.pb, (function (t, e) {
                    t.isUrl = e || ""
                })), p()(r, y.Wb, (function (t, e) {
                    t.transSource = e || ""
                })), p()(r, y.cb, (function (t, e) {
                    t.dictionarySelectedIndex = e
                })), p()(r, y.Jb, (function (t, e) {
                    t.ServerSgtkn = e
                })), p()(r, y.Ib, (function (t, e) {
                    t.ServerRecord = e
                })), p()(r, y.Kb, (function (t, e) {
                    t.ServerUIGS = e
                })), p()(r, y.Vb, (function (t, e) {
                    var n = e.query, o = e.result, r = e.from, i = e.to, a = e.index;
                    r = r === w.AUTO_DETECT ? "auto" : r;
                    var s = [];
                    try {
                        s = JSON.parse(B.a.lsGetItem(w.LS_KEY_TRANSLATE_RECORD).replace(/[\s]{2,}/g, "") || "[]")
                    } catch (t) {
                        s = []
                    }
                    "number" == typeof a ? s.splice(a, 1) : "all" === a ? s = [] : (s.forEach((function (t, e) {
                        t[0] && t[0].trim() === n.trim() && s.splice(e, 1)
                    })), s.unshift([n, o, r, i]), s.length > 10 && s.splice(10, s.length - 10)), B.a.lsSetItem(w.LS_KEY_TRANSLATE_RECORD, JSON.stringify(s)), t.translateRecord = s
                })), p()(r, y.e, (function (t, e) {
                    try {
                        t.translateRecord = JSON.parse(e || "[]")
                    } catch (e) {
                        t.translateRecord = []
                    }
                })), p()(r, y.gb, (function (t, e) {
                    var n = e.expandData;
                    t.expandOnePic = n.onePic && n.onePic[0].wordPic || ""
                })), p()(r, y.eb, (function (t, e) {
                    var n = e.expandData;
                    if (Object.keys(n).length) {
                        var o = n.morePic, r = n.noPic, i = n.title, a = void 0 === i ? "" : i, s = n.titleEn,
                            c = void 0 === s ? "" : s, l = t.to;
                        n.sourceTitle = "zh-CHS" === l ? c : a, n.targetTitle = "zh-CHS" === l ? a : c, o && (n.data = n.morePic.map((function (t) {
                            return {
                                "sourceWord": "zh-CHS" === l ? t.wordEn : t.wordZh,
                                "targetWord": "zh-CHS" === l ? t.wordZh : t.wordEn,
                                "wordPic": t.wordPic
                            }
                        })), n.morePic = !0, t.expandLen = n.data && n.data.length), r && (n.data = n.noPic.map((function (t) {
                            return {
                                "sourceWord": "zh-CHS" === l ? t.wordEn : t.wordZh,
                                "targetWord": "zh-CHS" === l ? t.wordZh : t.wordEn,
                                "wordAbbr": t.wordAbbr
                            }
                        })), n.noPic = !0, t.expandLen = n.data && n.data.length), t.expandData = n || {}, t.expandShow = t.expandShowNum = n.noPic && n.data && 7 === n.data.length ? 7 : 6
                    } else t.expandData = {}
                })), p()(r, y.fb, (function (t, e) {
                    var n = e.show;
                    t.expandShow = n ? t.expandLen : t.expandShowNum
                })), p()(r, y.yb, (function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    t.pcInputstatus = e
                })), p()(r, y.Ab, (function (t, e) {
                    t.promotionIndex = e
                })), p()(r, y.kb, (function (t, e) {
                    t.hotWords = e
                })), r),
                "actions": {
                    "translateInit": function (t, e) {
                        return A()(O.a.mark((function n() {
                            var o, r, i, a, s, c, l, u, p, d, f, h, m, g, v, _, b, S, A, C, E, k, P, x, I, D, N, R, U,
                                B, M, G, q, H, F, J, Q, W, V, $, Y, K;
                            return O.a.wrap((function (n) {
                                for (; ;) switch (n.prev = n.next) {
                                    case 0:
                                        if (o = t.rootState, r = t.state, i = t.commit, a = t.dispatch, s = t.rootGetters, c = e.params, l = e.$params, u = void 0 === l ? {} : l, p = c.keyword || "", d = c.transfrom || c.from || "auto", f = c.transto || c.to || "zh-CHS", h = c.fr || "default", m = c.activeTab || "", g = r.qcMap, v = s["language/direction"], _ = o.CONFIG.uuid || T.a.get(), b = 0, S = o.CONFIG.isHitSsrSwitch, A = c.model || "general", C = JSON.parse(JSON.stringify(w.TRANS_MODEL_LIST)), ("zh-CHS" === d && "en" === f || "en" === d && "zh-CHS" === f) && (E = {}, C.forEach((function (t) {
                                            t.val === A && (E = t)
                                        })), i(y.Yb, {"transModel": E})), p = p.trim().replace(/\uFEFF/g, ""), b = p.length, d = "autodetect" === (d = d.trim()) ? "auto" : d, f = f.trim(), p && S) {
                                            n.next = 25;
                                            break
                                        }
                                        return i(y.Jb, ""), a("initTranslate", {"query": ""}), a("language/initLanguage", {
                                            "from": "auto",
                                            "to": "zh-CHS",
                                            "detect": {"lang": "", "text": "", "show": !1}
                                        }, {"root": !0}), n.abrupt("return", !1);
                                    case 25:
                                        if (i(y.O, !0), i(y.tb, {
                                            "query": p,
                                            "from": d,
                                            "to": f,
                                            "model": r.transModel.val
                                        }), i(y.Sb, []), i(y.B, {
                                            "showPromotionCzTop": !1,
                                            "showPromotionCzBottom": !1,
                                            "showPromotionShareBottom": !1
                                        }, {"root": !0}), i(y.a, !0), i(y.Cb, {
                                            "query": p,
                                            "queryIsFromURL": !0
                                        }), !z.test(p.trim())) {
                                            n.next = 36;
                                            break
                                        }
                                        return a("translate/urlAction", {
                                            "type": "ssr",
                                            "query": p,
                                            "from": d,
                                            "to": f
                                        }, {"root": !0}), k = {
                                            "type": "all",
                                            "stype": "url",
                                            "direction": v,
                                            "len": b,
                                            "qtype": "url"
                                        }, i(y.Kb, k), n.abrupt("return", !1);
                                    case 36:
                                        return i(y.Eb, ""), i(y.pb, !1), i(y.Wb, ""), i(y.cb, 0), P = Date.now(), x = o.CONFIG.secretCode || "", I = j.a.cal("".concat(d).concat(f).concat(p).concat(x)), D = "web" === o.CONFIG.terminal ? "browser_pc" : "browser_wap", "general" !== (N = r.transModel.val) && (D = D + "_" + N), R = "web" === o.CONFIG.terminal ? "pc" : "wap", U = {
                                            "from": d,
                                            "to": f,
                                            "text": p,
                                            "client": R,
                                            "fr": D,
                                            "needQc": g.need,
                                            "s": I
                                        }, Object.assign(U, u), n.next = 51, L()({
                                            "method": "post",
                                            "url": "".concat(w.ORIGIN_CLIENT, "/api/translate/result"),
                                            "data": U
                                        }).catch((function (t) {
                                            console.log(t), a("updateConfig", {
                                                "transError": {
                                                    "transmsg": t && t.message,
                                                    "transtype": "network"
                                                }
                                            }, {"root": !0})
                                        }));
                                    case 51:
                                        if (B = n.sent, (M = B && B.data) && 0 === M.status) {
                                            n.next = 59;
                                            break
                                        }
                                        return a("updateConfig", {
                                            "transError": {
                                                "transmsg": M ? M.status : -1,
                                                "transtype": "failed"
                                            }
                                        }, {"root": !0}), i(y.Q, {"show": !0, "active": !0}), G = {
                                            "type": "all",
                                            "stype": "failed",
                                            "errcode": M && M.status || null,
                                            "fr": h,
                                            "from": d,
                                            "to": f,
                                            "direction": v,
                                            "len": b,
                                            "qtype": "text",
                                            "uuid": _
                                        }, i(y.Kb, G), n.abrupt("return", !1);
                                    case 59:
                                        if (q = M && M.data || {}, H = q.translate, J = (F = void 0 === H ? {} : H) || M.translate || {}, "10" !== (Q = J.errorCode)) {
                                            n.next = 67;
                                            break
                                        }
                                        return n.abrupt("return", {"type": "transreq", "stype": "hitReload"});
                                    case 67:
                                        if ("20" !== Q) {
                                            n.next = 69;
                                            break
                                        }
                                        return n.abrupt("return", {"type": "transreq", "stype": "hitAnti"});
                                    case 69:
                                        i(y.Tb, q), W = q && q.sgtkn || "", i(y.Jb, W), i(y.gb, {"expandData": {}}), i(y.eb, {"expandData": {}}), i(y.Q, {
                                            "show": !1,
                                            "active": !1
                                        }), i(y.Q, {
                                            "show": !1,
                                            "active": !1
                                        }), i(y.O, !1), V = F.qc_type, d = "auto" === d ? d : F.from, f = F.to, a("translate/machineAction", {
                                            "data": q,
                                            "type": "ssr",
                                            "from": d,
                                            "to": f
                                        }, {"root": !0}), a("translate/qcAction", {"translate": F}, {"root": !0}), $ = q.detect, i(y.Yb, {"detectItem": $}), a("translate/detectAction", {"detect": $}, {"root": !0}), a("translate/keywordsAction", {"keyWords": q.keywords || []}, {"root": !0}), a("translate/dictAction", {
                                            "data": q,
                                            "transType": "ssr"
                                        }, {"root": !0}), Y = "yingyin" === m, i(y.ob, Y), F = q.translate, K = r.dictionary, a("translate/historyAction", {
                                            "type": "ssr",
                                            "from": d,
                                            "to": f
                                        }, {"root": !0}), a("voice/updateVoice", {
                                            "dictionary": K.baseDict || [],
                                            "terminalType": o.CONFIG.terminal
                                        }, {"root": !0}), a("translate/promoteLogAction", {
                                            "dictionary": K,
                                            "terminalType": "ssr",
                                            "qc_type": V,
                                            "TRANS_START_TIME": P,
                                            "fr": h,
                                            "from": d,
                                            "to": f,
                                            "qlen": b,
                                            "isSameFlag": "",
                                            "uuid": _
                                        }, {"root": !0});
                                    case 94:
                                    case"end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, "executeTranslate": function (t, e) {
                        var n = t.state, o = t.commit, r = t.dispatch, i = t.rootState, a = t.rootGetters;
                        M.a.destroy();
                        var s = i.language, c = s.from, l = s.to;
                        "wap" === B.a.terminalJudge() && (document.querySelector(".header-wap-new").style.display = "flex"), r("updateConfig", {"uuid": T.a.get()}, {"root": !0});
                        var u, p, d, f = n.qcMap, h = n.query, g = n.pcInputstatus, v = h.length,
                            _ = m.a.parse().query.fr || "default", b = a["language/direction"], O = i.CONFIG.uuid,
                            S = this;
                        S.historyDelay && clearTimeout(S.historyDelay), !g && window.scrollTo(0, 0);
                        var A = i.CONFIG.transError, C = A && A.transtype;
                        if (!h.trim() || "web" === B.a.terminalJudge() && n.lastQuery.query === h && n.lastQuery.from === c && n.lastQuery.to === l && n.lastQuery.model === n.transModel.val && !C && f.need) return !1;
                        var E = n.lastQuery;
                        o(y.tb, {"query": h, "from": c, "to": l, "model": n.transModel.val});
                        var P, x = e || !1;
                        if (c = w.AUTO_DETECT === c ? "auto" : c, x && "wap" === B.a.terminalJudge()) u = e.key, p = e.from, d = e.to, o(y.Cb, {
                            "query": u,
                            "queryIsFromURL": !0
                        }), r("language/updateLanguage", {"from": p, "to": d}, {"root": !0}), o(y.Ub, {
                            "from": p,
                            "to": d
                        }); else {
                            var I = m.a.parse().query;
                            o(y.Cb, {"query": h, "queryIsFromURL": !0}), p = I.transfrom, d = I.transto, u = I.keyword
                        }
                        P = h === u && p === c && d === l;
                        var D = "wap" === B.a.terminalJudge();
                        if (o(y.a, D), o(y.Q, {"show": !1, "active": !1}), o(y.B, {
                            "showPromotionCzTop": !1,
                            "showPromotionCzBottom": !1,
                            "showPromotionShareBottom": !1
                        }, {"root": !0}), z.test(h.trim())) {
                            r("translate/urlAction", {
                                "type": "front",
                                "query": h,
                                "from": c,
                                "to": l
                            }, {"root": !0}), r("updateURL", {"isSame": P}, {"root": !0}), o(y.L, {"type": "init"});
                            var N = "web" === B.a.terminalJudge() && E.query && E.query.length ? "ignore" : "all";
                            k.a.send({"type": N, "stype": "url", "direction": b, "len": v, "qtype": "url"})
                        } else {
                            "wap" === B.a.terminalJudge() && o(y.w, {
                                "show": !0,
                                "type": "wap"
                            }, {"root": !0}), o(y.pb, !1), o(y.Wb, ""), o(y.cb, 0), c = (c = x ? p : c) || "auto", l = x ? d : l;
                            var R = Date.now(), U = i.CONFIG.secretCode || "",
                                G = j.a.cal("".concat(c).concat(l).concat(h.trim()).concat(U));
                            r("language/updateLanguage", {"from": "", "to": l}, {"root": !0});
                            var H = "web" === i.CONFIG.terminal ? "browser_pc" : "browser_wap", F = n.transModel.val;
                            "general" !== F && (H = H + "_" + F);
                            var J = "web" === i.CONFIG.terminal ? "pc" : "wap";
                            L()({
                                "url": "/reventondc/translateV2",
                                "method": "post",
                                "headers": {"Accept": "application/json"},
                                "data": m.a.params({
                                    "from": c,
                                    "to": l,
                                    "text": h.trim(),
                                    "client": J,
                                    "fr": H,
                                    "pid": "sogou-dict-vr",
                                    "dict": !0,
                                    "word_group": !0,
                                    "second_query": !0,
                                    "uuid": i.CONFIG.uuid,
                                    "needQc": f.need,
                                    "s": G
                                })
                            }).then((function (t) {
                                o(y.A, !1), o(y.yb, !1);
                                var e = t && t.data, n = e && e.data && e.data.sgtkn || window.sgctkn || "";
                                return B.a.sendApprove(O, n), e.translate && "20" === e.translate.errorCode && (window.location.href = "https://www.sogou.com/antispider/?product=fanyi&from=" + encodeURIComponent(location.href)), t
                            })).then((function (t) {
                                var e = t && t.data, n = window.location.href;
                                return e.translate && "10" === e.translate.errorCode && (o(y.A, !0), n.indexOf("reloadTrue=true") <= -1 && (n += "&reloadTrue=true")), t
                            })).then((function (t) {
                                var e, n = t && t.data;
                                if (o(y.gb, {"expandData": {}}), o(y.eb, {"expandData": {}}), "wap" === B.a.terminalJudge() && o(y.Ob, []), n && 0 === n.status && n.data) e = n.data, o(y.Q, {
                                    "show": !1,
                                    "active": !1
                                }); else {
                                    o(y.A, !0), o(y.M, {
                                        "show": !0,
                                        "text": "请求失败，请重试"
                                    }, {"root": !0}), o(y.Q, {
                                        "show": !0,
                                        "active": !0
                                    }), x || r("updateURL", {"isSame": P}, {"root": !0});
                                    var i = "web" === B.a.terminalJudge() && E.query && E.query.length ? "ignore" : "all";
                                    k.a.send({
                                        "type": i,
                                        "stype": "failed",
                                        "errcode": n && n.status || null,
                                        "fr": _,
                                        "from": c,
                                        "to": l,
                                        "direction": b,
                                        "len": v,
                                        "qtype": "text",
                                        "uuid": O
                                    })
                                }
                                return e || {}
                            })).then((function (t) {
                                var e = t.translate || {}, n = e.from, o = e.to;
                                return r("translate/machineAction", {
                                    "data": t,
                                    "type": "front",
                                    "from": n,
                                    "to": o
                                }, {"root": !0}), t
                            })).then((function (t) {
                                var e = t.translate, n = (e || {}).qc_type;
                                return o(y.Tb, t), r("translate/qcAction", {"translate": e}, {"root": !0}), {
                                    "data": t,
                                    "qc_type": n
                                }
                            })).then((function (t) {
                                var e = t.data, n = t.qc_type, i = e.detect;
                                return o(y.Yb, {"detectItem": i}), r("translate/detectAction", {"detect": i}, {"root": !0}), {
                                    "data": e,
                                    "qc_type": n
                                }
                            })).then((function (t) {
                                var e = t.data, n = t.qc_type;
                                return r("translate/keywordsAction", {"keyWords": e.keywords || []}, {"root": !0}), {
                                    "data": e,
                                    "qc_type": n
                                }
                            })).then((function (t) {
                                var e = t.data, i = t.qc_type;
                                return r("translate/dictAction", {
                                    "data": e,
                                    "transType": "front"
                                }, {"root": !0}), o(y.L, {"type": "init"}), {
                                    "data": e,
                                    "dictionary": n.dictionary,
                                    "qc_type": i,
                                    "bilingual": n.bilingual
                                }
                            })).then((function (t) {
                                var e = t.data, r = t.dictionary, i = t.qc_type, a = t.bilingual;
                                return n.query && e.detect && e.detect.detect && n.to && "web" === B.a.terminalJudge() && q.getCollections({
                                    "text": n.query,
                                    "size": "1",
                                    "transFrom": e.detect.detect,
                                    "transTo": l
                                }, (function (t) {
                                    if (t && t.data && 0 === t.data.code) {
                                        var n = !!t.data.content.length, r = {
                                            "isShow": !("en" !== e.translate.from && "zh-CHS" !== e.translate.from || "en" !== l && "zh-CHS" !== l),
                                            "isCollect": n,
                                            "collectId": t.data.content && t.data.content[0] && t.data.content[0].collectionId
                                        };
                                        o(y.k, r)
                                    } else o(y.k, {"isShow": !0, "isCollect": !1, "collectId": ""})
                                }), (function () {
                                })), {"dictionary": r, "qc_type": i, "bilingual": a}
                            })).then((function (t) {
                                var e = t.dictionary, n = t.qc_type, i = t.bilingual;
                                return o(y.O, !1), S.historyDelay = setTimeout((function () {
                                    r("translate/historyAction", {
                                        "type": "front",
                                        "from": c,
                                        "to": l
                                    }, {"root": !0}), S.historyDelay && window.clearTimeout(S.historyDelay)
                                }), 1e3), {"dictionary": e, "qc_type": n, "bilingual": i}
                            })).then((function (t) {
                                var e = t.dictionary, n = t.qc_type, o = t.bilingual;
                                return r("voice/updateVoice", {
                                    "dictionary": e.baseDict || e || [],
                                    "terminalType": B.a.terminalJudge()
                                }, {"root": !0}), {"dictionary": e, "qc_type": n, "bilingual": o}
                            })).then((function (t) {
                                var e = t.dictionary, n = t.qc_type;
                                r("translate/promoteLogAction", {
                                    "dictionary": e,
                                    "terminalType": "front",
                                    "qc_type": n,
                                    "TRANS_START_TIME": R,
                                    "fr": _,
                                    "from": x ? p : c,
                                    "to": x ? d : l,
                                    "qlen": v,
                                    "isSameFlag": P,
                                    "uuid": O,
                                    "prevTransQuery": E
                                }, {"root": !0})
                            })).catch((function () {
                                o(y.w, !1, {"root": !0}), r("voice/toggleAllVoice", {"show": !1}, {"root": !0}), o(y.A, !0), r("initTranslate", {"query": h}), o(y.r, !1), o(y.M, {
                                    "show": !0,
                                    "text": "连接失败，请重试"
                                }, {"root": !0});
                                var t = "web" === B.a.terminalJudge() && E.query && E.query.length ? "ignore" : "all";
                                k.a.send({
                                    "type": t,
                                    "stype": "network",
                                    "fr": _,
                                    "from": c,
                                    "to": l,
                                    "direction": b,
                                    "len": v,
                                    "qtype": "text",
                                    "uuid": O
                                }), o(y.Q, {
                                    "show": !0,
                                    "active": !0
                                }), o(y.F, {"need": 1}), o(y.B, {
                                    "showPromotionCzTop": !1,
                                    "showPromotionCzBottom": !1
                                }, {"root": !0}), x || r("updateURL", {"isSame": P}, {"root": !0})
                            }))
                        }
                    }, "getSuggestion": function (t) {
                        var e = t.state, n = t.commit, o = t.rootState, r = o.language.from, i = o.language.to,
                            a = e.query, s = o.CONFIG.uuid || T.a.get(), c = e.suggFlag;
                        if (r = "autodetect" === r ? "auto" : r, a.length > w.MAX_SUGGESTION_QUERY_LEN) return !1;
                        c ? n(y.a, !1) : L()({
                            "url": "/reventondc/suggV3",
                            "method": "post",
                            "headers": {"Accept": "application/json"},
                            "data": m.a.params({
                                "from": r,
                                "to": i,
                                "client": "wap",
                                "text": a,
                                "uuid": s,
                                "pid": "sogou-dict-vr",
                                "addSugg": "on"
                            })
                        }).then((function (t) {
                            (t = t && t.data) && 0 === t.code && t.sugg ? (n(y.Ob, {
                                "sugg": t.sugg,
                                "dir": t.direction
                            }), n(y.B, {
                                "showPromotionCzTop": !1,
                                "showPromotionCzBottom": !1,
                                "showPromotionShareBottom": !1
                            }, {"root": !0})) : n(y.Ob, {"sugg": [], "dir": t.direction})
                        })).catch((function () {
                        }))
                    }, "getExpand": function (t, e) {
                        var n = t.state, o = t.commit, r = t.rootState, i = t.dispatch, a = e.type, s = r.language.to;
                        return L()({
                            "url": "/reventondc/translateV2ForPicSet",
                            "method": "post",
                            "headers": {"Accept": "application/json"},
                            "data": m.a.params({
                                "text": "zh-CHS" === s ? n.expandData.titleEn : n.expandData.title,
                                "picType": "zh-CHS" === s ? "noPic" === a ? 6 : 4 : "morePic" === a ? 3 : 5
                            })
                        }).then((function (t) {
                            if (t && t.data) {
                                var e = t.data;
                                a = e.morePic ? "pic" : "nopic", e.morePic && e.morePic.forEach((function (t) {
                                    t.wordPic = t.wordPic.replace("http://", location.protocol + "//")
                                })), o(y.eb, {"expandData": e}), i("expandUigs", {"pvType": a})
                            } else o(y.M, {"show": !0, "text": "请求失败，请重试"}, {"root": !0})
                        })).catch((function () {
                            o(y.M, {"show": !0, "text": "连接失败，请重试"}, {"root": !0})
                        })), {"dispatch": i, "commit": o}
                    }, "expandUigs": function (t, e) {
                        var n = t.rootState, o = e.type, r = e.pvType, i = n.language, a = i.from, s = i.to,
                            c = n.CONFIG.uuid || T.a.get(), l = "en" === s ? "zh" : "en";
                        r ? k.a.send({
                            "from": a,
                            "to": s,
                            "type": "all",
                            "stype": "success",
                            "more_pic": "pic" === r ? 1 : 0,
                            "no_pic": "nopic" === r ? 1 : 0,
                            "uuid": c
                        }) : k.a.send({"type": "transcl", "pbtype": "cl", "uigs_cl": "".concat(o, "_").concat(l)})
                    }, "initTranslate": function (t, e) {
                        var n = t.commit, o = e.query;
                        e.isUrl || (n(y.Eb, ""), n(y.Cb, {"query": o, "queryIsFromURL": !0})), n(y.k, {
                            "isCollect": !1,
                            "collectId": "",
                            "isShow": !1
                        }), n(y.Kb, {}), n(y.O, !0), n(y.Ib, ""), n(y.Sb, []), n(y.N, !1), n(y.n, {
                            "dictionary": "",
                            "bilingual": "",
                            "Obj": {
                                "detail": {
                                    "type": "detail",
                                    "view": "常用词典",
                                    "tabView": "DetailItem",
                                    "show": "",
                                    "content": {"simple": "", "bilingual": "", "change": ""}
                                },
                                "dict": {
                                    "type": "",
                                    "view": "",
                                    "tabView": "",
                                    "show": "",
                                    "content": {"dictionary": ""}
                                },
                                "pic": {"type": "", "view": "词汇拓展", "tabView": "picItem", "show": ""},
                                "book": {
                                    "type": "",
                                    "view": "书影音",
                                    "tabView": "bookItem",
                                    "show": "",
                                    "content": {"dictionary": ""}
                                },
                                "networkdic": {
                                    "type": "",
                                    "view": "网络词条",
                                    "tabView": "",
                                    "show": "",
                                    "content": {"dictionary": ""}
                                }
                            }
                        })
                    }, "keywordsAction": function (t, e) {
                        var n = t.commit, o = e.keyWords;
                        (o = o.map((function (t) {
                            var e = t.key, n = t.value.split(";");
                            return n.length > 1 || (n = t.value.split("；")), {
                                "key": e,
                                "value": t = n.join("；$").split("$")
                            }
                        }))).length ? (n(y.Sb, o), n(y.N, !0)) : n(y.Sb, [])
                    }, "detectAction": function (t, e) {
                        var n = t.dispatch, o = e.detect;
                        o && 0 == +o.errorCode && n("language/detectLanguage", {
                            "dtype": "detect",
                            "lang": o.detect,
                            "text": o.language
                        }, {"root": !0})
                    }, "qcAction": function (t, e) {
                        var n = t.commit, o = e.translate || {}, r = o.qc_type, i = o.qc_text, a = o.diff_text;
                        n(y.F, {"need": 1, "type": r, "text": i, "diff": a})
                    }, "machineAction": function (t, e) {
                        var n = t.commit, o = t.dispatch, r = e.data, i = e.type, a = e.from, s = e.to,
                            c = r.common_dict, l = void 0 === c ? {} : c, u = r.translate, p = void 0 === u ? {} : u,
                            d = l.dict, f = void 0 === d ? [] : d, h = f[0] && f[0].content[0].value[0].levelList,
                            m = p || {}, g = m.dit, v = m.text, w = m.source, _ = g || v || "";
                        n(y.ub, h), n(y.Ub, {
                            "from": a,
                            "to": s
                        }), n(y.Eb, _), n(y.Wb, w), o("language/updateLanguage", {
                            "from": a = "ssr" === i ? a : "",
                            "to": s
                        }, {"root": !0})
                    }, "dictAction": function (t, e) {
                        var n, o, r, i, a, s, c, l, u, p, d = t.commit, f = t.state, h = e.data, m = e.transType,
                            g = !0, v = [], _ = h.network_mean, b = void 0 === _ ? [] : _, O = h.network_phrase,
                            S = void 0 === O ? [] : O, A = h.common_dict, C = void 0 === A ? {} : A, T = h.word_group,
                            E = void 0 === T ? [] : T, k = h.second_query, P = void 0 === k ? [] : k, I = h.dict_pic,
                            j = void 0 === I ? {} : I, D = h.translate, L = void 0 === D ? {} : D, N = h.yingyin_normal,
                            U = void 0 === N ? [] : N;
                        d(y.Ab, !1), d(y.fc, U), d(y.bc, []);
                        var B = C.dict, M = void 0 === B ? [] : B;
                        if (M && M.length) {
                            var G = M[0];
                            i = G && G.content, r = G.dict_name, d(y.K, "dict"), d(y.N, !1), o = i && i[0] && i[0].value && i[0].value[0] || {}, L.phoneticForzh2en && (o.phoneticForzh2en = L.phoneticForzh2en), c = o && o.synonym || [], l = o && o.antonym || [], u = o && o.wordRootInfo || [], p = o && o.wordDifferenceInfo || [], d(y.Pb, c), d(y.X, l), d(y.dc, u), d(y.bc, p), a = o && o.exchange_info || {}, v = o && o.usual || [];
                            var q = o, z = q.phonetic, H = void 0 === z ? [] : z, F = q.phonetic_add,
                                J = void 0 === F ? [] : F;
                            s = H.length ? H : J.length ? J : []
                        } else r = "", i = [], v = [], s = [], g = !1;
                        Array.isArray(E) && E.length ? d(y.cc, E) : d(y.cc, []);
                        var Q, W = s, V = h && h.translate && h.translate.from || "auto", $ = {};
                        if (W = W.reduce((function (t, e) {
                            return !$[e.text] && ($[e.text] = t.push(e)), t
                        }), []), "zh-CHS" === V && (W = W.splice(0, 1)), (n = {
                            "type": r,
                            "baseDict": o,
                            "dictionaries": i,
                            "partOfSpeech": a,
                            "usual_Dict": v,
                            "second_query": P,
                            "showDictionary": g,
                            "showVrUsual": !1,
                            "phoneTicIsSim": W,
                            "dict_pic": j,
                            "network_mean": b,
                            "network_phrase": S,
                            "yingyin_normal": U,
                            "phoneticForzh2en": L.phoneticForzh2en || []
                        }).usual_Dict.length) {
                            var Y = (Q = R.a.bilingual(h && h.bilingual)) && Q.length ? "detail" : "dict";
                            d(y.K, Y)
                        } else Q = [];
                        M = n.dictionaries, r = n.type, P = n.second_query, b = n.network_mean, S = n.network_phrase, j = n.dict_pic;
                        var K = w.TAB, X = {"dictionary": M}, Z = n.usual_Dict, tt = n.partOfSpeech,
                            et = Object.keys(K), nt = {};
                        nt.detail_cond = !!(Z && Z.length || Q && Q.length), nt.dict_cond = !!(M && M[0] && M[0].value && (M[0].value[0].context || M[0].value[0].content)), nt.pic_cond = !!(j.onePic || j.morePic || j.noPic || j.picSet), nt.net_cond = !!(S && S.length || b && b.length), r = "zhen_century" === r ? "newCentury" : r;
                        var ot = x.a.oxf(r) ? {
                                "view": "牛津词典",
                                "tabView": "OxfordItem"
                            } : x.a.ncAll(r) ? {"view": "权威词典", "tabView": "NewCenturyItem"} : "", rt = ot.view,
                            it = ot.tabView, at = !0;
                        et.forEach((function (t) {
                            var e = nt[t + "_cond"];
                            if ("detail" === t) {
                                var o = [{"simple": Z, "bilingual": Q, "change": tt, "second_query": P}, e];
                                K[t].content = o[0], K[t].show = o[1], d(y.S, !e)
                            } else if ("dict" === t) K[t] = {
                                "type": r,
                                "view": rt,
                                "tabView": it,
                                "show": e,
                                "content": X
                            }; else if ("pic" === t) K[t].show = e; else if ("networkdic" === t) {
                                var i = {"network_mean": n.network_mean, "network_phrase": n.network_phrase};
                                0 !== n.network_mean.length && 0 !== n.network_phrase.length || (at = !1), K[t] = {
                                    "type": "networkdic",
                                    "view": "网络词条",
                                    "tabView": "netItem",
                                    "show": at,
                                    "content": i
                                }
                            } else "book" === t && (0 === n.yingyin_normal.length || f.keywordShow ? K[t].show = !1 : K[t].show = !0)
                        })), K && K.book && K.book.show || d(y.ob, !1);
                        for (var st = Object.keys(K), ct = 0; ct < st.length; ct++) if (K[st[ct]].show) {
                            d(y.mb, K[st[ct]].tabView);
                            break
                        }
                        if (d(y.n, {
                            "dictionary": n,
                            "bilingual": Q,
                            "Obj": K
                        }), nt.pic_cond && (d(y.gb, {"expandData": j}), d(y.eb, {"expandData": j})), nt.pic_cond && !nt.detail_cond && !nt.dict_cond && "front" === m) var lt = setTimeout((function () {
                            document.getElementById("activePic").click(), lt && window.clearTimeout(lt)
                        }), 0)
                    }, "urlAction": function (t, e) {
                        var n = t.commit, o = t.dispatch, r = t.rootState, i = e.type, a = e.query, s = e.from,
                            c = e.to, l = r.CONFIG.terminal;
                        "web" === l && o("initTranslate", {"query": "", "isUrl": !0});
                        var u = a;
                        i && "ssr" !== i && (n(y.w, !1, {"root": !0}), u = a._escape());
                        var p = "";
                        if ("auto" !== s && "en" !== s && "zh-CHS" !== s || "en" !== c && "zh-CHS" !== c || "web" !== l) {
                            var d = {"from": s, "to": c, "a": u}, f = B.a.urlParams(d);
                            p = "http://www.microsofttranslator.com/bv.aspx?".concat(f)
                        } else {
                            var h = {"from": s, "to": c, "tfr": "translatepc", "url": u, "domainType": "sogou"},
                                m = B.a.urlParams(h);
                            p = (/^https:/.test(u) ? "https" : "http") + "://translate.sogoucdn.com/pcvtsnapshot?" + m
                        }
                        o("voice/toggleAllVoice", {"show": !1}, {"root": !0}), n(y.Eb, '<a style="color: blue;" target="_blank" href="'.concat(p, '" id="toUrl">').concat(u, "</a>")), n(y.pb, !0), n(y.F, {"need": 1})
                    }, "historyAction": function (t, e) {
                        var n, o = t.commit, r = t.state, i = e.type, a = e.from, s = e.to, c = r.result,
                            l = r.dictionary.usual_Dict, u = r.query, p = {
                                "query": u, "result": (n = "", Array.isArray(l) && l.length ? l.forEach((function (t) {
                                    (n += " " + (t.pos || "") + t.values)._bold()._ita()._sup()._sub()
                                })) : n = c, n), "from": a, "to": s
                            };
                        u.length && o("ssr" === i ? y.Ib : y.Vb, p)
                    }, "promoteLogAction": function (t, e) {
                        var n, o, r, i = t.commit, a = t.state, s = t.rootState, c = t.rootGetters, l = t.dispatch,
                            u = e.terminalType, p = e.dictionary, d = e.qc_type, f = e.TRANS_START_TIME, h = e.fr,
                            m = e.from, g = e.to, v = e.qlen, w = e.isSameFlag, _ = e.uuid, b = e.prevTransQuery,
                            O = a.bilingual, S = p.showDictionary, A = a.keyword, C = a.keywordShow, T = p.showVrUsual,
                            E = Date.now(), P = p.type, I = c["language/direction"];
                        "web" === s.CONFIG.terminal || s.isFromAITranslate ? (o = !1, n = !1) : s.isTranslateAppShare ? (o = !1, n = !1, r = !0) : T ? (o = !1, n = !0) : (o = S || C && A.length, n = !0), i(y.B, {
                            "showPromotionCzTop": o,
                            "showPromotionCzBottom": n,
                            "showPromotionShareBottom": r
                        }, {"root": !0});
                        var j = p.partOfSpeech, D = j && Object.keys(j).length, L = p.dict_pic, N = L && L.onePic,
                            R = L && L.morePic, U = L && L.noPic,
                            M = p.dictionaries && p.dictionaries[0] && p.dictionaries[0].value && p.dictionaries[0].value[0],
                            G = M && (M.context || M.content),
                            q = x.a.dict(P) && G && G[0] && (G[0].item || G[0].category || G[0].refArr),
                            z = p.usual_Dict, H = z && z.length && ("" !== z.pos || "" !== z.values[0]) || T,
                            F = H && O && Array.isArray(O) && O.length, J = F, Q = a.word_phrase, W = Q && Q.length,
                            V = a.keywordShow && a.keyword.length, $ = p.yingyin_normal && p.yingyin_normal.length,
                            Y = a.tabObj.networkdic.show || "",
                            K = (a.keyword.length || a.second_query && a.second_query.length) && a.usualTop;
                        a.isBtnTrans && "front" === u && (k.a.send({
                            "type": "transcl",
                            "pbtype": "cl",
                            "uigs_cl": "translate",
                            "direction": I
                        }), i(y.j, !1));
                        var X = {
                            "type": "all",
                            "stype": "success",
                            "fr": h,
                            "direction": I,
                            "from": m,
                            "to": g,
                            "len": v,
                            "cztop": +o,
                            "czbottom": +n,
                            "qtype": "text",
                            "qctype": d ? "qc_" + d : "",
                            "detail": J ? 1 : 0,
                            "dict": q ? 1 : 0,
                            "deform_show": D ? 1 : 0,
                            "keyword": V ? 1 : 0,
                            "bilingual": F ? 1 : 0,
                            "simple": H ? 1 : 0,
                            "network_tab": Y ? 1 : 0,
                            "yinying_tab": $ ? 1 : 0,
                            "word_phrase": W ? 1 : 0,
                            "second_query": K ? 1 : 0,
                            "one_pic": N ? 1 : 0,
                            "more_pic": R ? 1 : 0,
                            "no_pic": U ? 1 : 0,
                            "level_list": p.baseDict && p.baseDict.levelList ? 1 : 0,
                            "uuid": _
                        };
                        if ("front" === u) {
                            var Z = "web" === B.a.terminalJudge() && b.query && b.query.length ? "ignore" : "all";
                            X.type = Z, X.t_trans = E - f, k.a.send(X), l("updateURL", {"isSame": w}, {"root": !0}), i(y.w, !1, {"root": !0})
                        } else X.t_trans_ssr = E - (s.CONFIG.loadTime || 0), i(y.Kb, X)
                    }, "getHotWord": function (t) {
                        var e = t.commit, n = (new Date).getTime(), o = new FormData;
                        o.append("S-Param", "wap"), L()({
                            "url": "//fanyiapp.sogou.com/translateServer/getWebHotWords",
                            "method": "POST",
                            "dataType": "json",
                            "headers": {
                                "Accept": "application/json",
                                "Content-Type": "application/x-www-form-urlencoded",
                                "S-Appid": "sogou-fanyi-web",
                                "S-CurTime": n,
                                "S-Sign": G("sogou-fanyi-web" + n + "wap")
                            },
                            "data": o
                        }).then((function (t) {
                            var n = t.data;
                            0 === n.code && "success" === n.message && e(y.kb, n.data)
                        })).catch((function (t) {
                            console.log(t)
                        }))
                    }
                }
            }, F = n(163);

        function J(t, e, n) {
            t.forEach((function (t) {
                t.filename = "" === t.filename ? e : t.filename
            })), t.forEach((function (t, e) {
                var o = t.type, r = t.text, i = t.filename;
                e < 2 && r && i && n.push({
                    "type": o + "_" + e,
                    "play": !0,
                    "show": !0,
                    "active": !1,
                    "phonetic": (r || "").replace(/(?:\/|／)/g, ""),
                    "abbr": Y[o] || "英",
                    "src": i
                })
            }))
        }

        n.n(F)()();
        var Q, W, V, $, Y = {"usa": "美", "uk": "英"}, K = ["from", "to"], X = {
            "namespaced": !0,
            "state": {"from": {"show": !1}, "to": {"show": !1}},
            "getters": {
                "vfrom": function (t) {
                    return t.from
                }, "vto": function (t) {
                    return t.to
                }
            },
            "mutations": p()({}, y.ac, (function (t, e) {
                var n = e.from, o = e.to;
                t.from = n, t.to = o
            })),
            "actions": {
                "toggleAllVoice": function (t, e) {
                    var n = t.commit, o = t.state, r = e.show, i = {"from": o.from, "to": o.to};
                    K.forEach((function (t) {
                        i[t] = {"show": !!r}
                    })), n(y.ac, i)
                }, "updateVoice": function (t, e) {
                    var n = t.state, o = t.commit, r = t.rootState, i = t.rootGetters, a = e.dictionary,
                        s = e.terminalType, c = r.language, l = c.detect, u = c.from, p = c.to, d = r.translate,
                        f = d.query, h = d.result, g = Array.isArray(a && a.phonetic) ? a.phonetic : [],
                        v = Array.isArray(a && a.phonetic_add) ? a.phonetic_add : [],
                        _ = a && a.phoneticForzh2en && Object.keys(a.phoneticForzh2en).length ? a.phoneticForzh2en : [],
                        b = {"from": n.from, "to": n.to}, O = [], S = [], A = [];
                    if (K.forEach((function (t) {
                        var e = b[t] = {}, n = "from" === t ? l.lang ? l.lang : u : p, o = "from" === t ? f : h,
                            r = !!i["language/getItem"](n).play, a = function (t) {
                                var e = t.lang, n = t.text, o = t.terminalType;
                                n = (n || "")._br("al").replace(/(?:<br\s*\/?>|\r?\n)/gi, " ").slice(0, w.MAX_VOICE_LEN) || "";
                                var r = "web" === o ? "translateweb" : "translatewap";
                                return "en" === e || "zh-CHS" === e ? "".concat(w.AUDIO_SOGOU_PATH, "?").concat(m.a.params({
                                    "text": n,
                                    "speed": 1,
                                    "lang": e,
                                    "from": r
                                })) : "".concat(w.AUDIO_MICRO_PATH, "?").concat(m.a.params({
                                    "text": n,
                                    "spokenDialect": e,
                                    "from": r
                                }))
                            }({"lang": n, "text": o, "terminalType": s});
                        A.push(a), e.lang = "zh-CHS" === n ? "zh" : "en" === n ? n : "other", e.type = t, e.show = r, e.play = r, e.src = a
                    })), g.length ? J(g, A[0], O) : v.length && J(v, A[0], O), Object.keys(_).length) {
                        var C = [];
                        ["uk", "usa"].forEach((function (t) {
                            var e = _[t];
                            e && C.push({"filename": e.source, "text": e.phonetic, "type": t})
                        })), J(C, A[1], S)
                    }
                    O.length ? (b.from.list = O, b.from.stype = "phonetic", b.from.show = !0) : b.from.stype = "normal", S.length ? (b.to.list = S, b.to.stype = "phonetic", b.to.show = !0) : b.to.stype = "normal", o(y.ac, b)
                }
            }
        }, Z = {
            "namespaced": !0,
            "state": {
                "iosUrl": "https://apps.apple.com/app/apple-store/id1198464101?pt=625281&ct=transapp_yc_cz1&mt=8",
                "androidUrl": "//dlweb.sogoucdn.com/phonetic/transapp_channel/transapp_cz_a.apk"
            },
            "getters": {
                "iosUrl": function (t) {
                    return t.iosUrl
                }, "androidUrl": function (t) {
                    return t.androidUrl
                }
            },
            "mutations": (Q = {}, p()(Q, y.W, (function (t, e) {
                t.androidUrl = e
            })), p()(Q, y.nb, (function (t, e) {
                t.iosUrl = e
            })), Q),
            "actions": {
                "getAndroidURL": function (t, e) {
                    var n = t.commit, o = t.state.androidUrl.split("/");
                    o[o.length - 1] = "transapp_".concat(e, ".apk"), o = o.join("/");
                    var r = "https://apps.apple.com/app/apple-store/id1198464101?pt=625281&ct=".concat("cz_a" === e || "waptop" === e ? "" : "transapp_").concat(e, "&mt=8");
                    n(y.W, o), n(y.nb, r)
                }
            }
        }, tt = n(161), et = {
            "namespaced": !0,
            "state": {"activeDoc": {}, "docDownloadShow": !1, "docUploadShow": !1, "docAddItem": "", "docNum": 26e6},
            "mutations": (W = {}, p()(W, y.db, (function (t, e) {
                t.docAddItem = e
            })), p()(W, y.o, (function (t, e) {
                t.docDownloadShow = e
            })), p()(W, y.V, (function (t, e) {
                t.activeDoc = e
            })), p()(W, y.p, (function (t, e) {
                t.docUploadShow = e
            })), p()(W, y.T, (function (t, e) {
                t.docNum = e
            })), W),
            "actions": {
                "getDocNum": function (t) {
                    var e = t.commit, n = (new Date).getTime();
                    L()({
                        "url": "//fanyiapp.sogou.com/translateServer/translate/getDocTransCount",
                        "method": "POST",
                        "dataType": "json",
                        "headers": {
                            "Accept": "application/json",
                            "S-Appid": "sogou-fanyi-web",
                            "S-CurTime": n,
                            "S-Sign": tt("sogou-fanyi-web" + n + null)
                        },
                        "data": {"S-Param": null}
                    }).then((function (t) {
                        var n = t.data;
                        0 === n.code && "success" === n.message && e(y.T, n.data)
                    })).catch((function (t) {
                        console.log(t)
                    }))
                }
            }
        }, nt = {
            "namespaced": !0,
            "state": {
                "type": "textarea",
                "query": "",
                "queryBackUp": "",
                "queryHtmlBackup": {},
                "result": null,
                "state": null,
                "currIndex": 0,
                "wordLength": 0,
                "strLength": 0,
                "correctionNum": 2,
                "popup": !1,
                "articleId": null,
                "showDone": !1,
                "originQuery": [],
                "firstVisit": !1
            },
            "getters": {
                "queryLength": function (t) {
                    return t.query.length
                }, "errorDetect": function (t) {
                    return t.result && t.result.length || t.state && "waploading" !== t.state
                }, "visibleCorrectInfo": function (t) {
                    return t.result && t.result[t.currIndex].correctInfo.slice(0, t.correctionNum)
                }, "btnDisable": function (t) {
                    return "loading" === t.state || "textarea" === t.type && "" === t.query.trim() || "loading" === t.state || "html" === t.type && !t.query.length
                }, "visiblePolishedSents": function (t) {
                    return t.result && t.result[t.currIndex].polishedSents.data.filter((function (t, e) {
                        return e < 2
                    })).map((function (t) {
                        return t = t.replace(/(<br \/>)+$/g, "")
                    }))
                }, "curCorrectInfo": function (t) {
                    return t.result && t.result[t.currIndex].correctInfo
                }, "curPolishedSents": function (t) {
                    return t.result && t.result[t.currIndex].polishedSents
                }, "curCorrectInfoLength": function (t) {
                    return t.result && t.result[t.currIndex].correctInfo.length
                }, "curPolishedSentsLength": function (t) {
                    return t.result && t.result[t.currIndex].polishedSents.data.length
                }, "resultDisabled": function (t) {
                    return "textarea" === t.type && "error" !== t.state && "noEnglish" !== t.state && "offline" !== t.state
                }
            },
            "mutations": (V = {}, p()(V, y.ec, (function (t, e) {
                t = Object.assign(t, e)
            })), p()(V, y.ab, (function (t, e) {
                var n = e.id, o = e.key, r = e.val;
                t.result[t.currIndex].correctInfo[n][o] = r
            })), p()(V, y.Db, (function (t, e) {
                var n = e.key, o = e.id, r = e.val;
                t[n][o] = r
            })), p()(V, y.zb, (function (t, e) {
                var n = e.active, o = e.data;
                "number" == typeof n && (t.result[t.currIndex].polishedSents.active = n), o && (t.result[t.currIndex].polishedSents.data = o)
            })), V),
            "actions": {
                "clear": function (t) {
                    (0, t.commit)(y.ec, {
                        "query": "",
                        "queryBackUp": "",
                        "queryHtmlBackup": {},
                        "type": "textarea",
                        "state": !1,
                        "wordLength": 0,
                        "currIndex": 0,
                        "showDone": 0,
                        "result": null,
                        "originQuery": []
                    })
                }
            }
        }, ot = {
            "namespaced": !0,
            "state": {
                "showDialog": !1,
                "showUnlockPopup": !1,
                "showLoginDialog": !1,
                "showSharePop": !1,
                "contentIsLock": !1,
                "libraryId": "",
                "subTabList": [],
                "subTabData": {},
                "articles": [],
                "fwHeadData": {},
                "sguid": "",
                "showMoreBtn": !1,
                "showLoading": !1,
                "articlesCount": 0,
                "hasLevel": !0,
                "activeContent": {},
                "uigsData": {},
                "pageScrollHeight": 0
            },
            "mutations": ($ = {}, p()($, y.xb, (function (t, e) {
                t.pageScrollHeight = e
            })), p()($, y.Zb, (function (t, e) {
                t.uigsData = e
            })), p()($, y.U, (function (t, e) {
                t.activeContent = e
            })), p()($, y.Z, (function (t, e) {
                var n = e.sum, o = e.hasLevel;
                t.articlesCount = n, t.hasLevel = o
            })), p()($, y.h, (function (t, e) {
                t.showLoading = e
            })), p()($, y.Mb, (function (t, e) {
                t.subTabData = e
            })), p()($, y.z, (function (t, e) {
                t.showMoreBtn = e
            })), p()($, y.Lb, (function (t, e) {
                t.sguid = e
            })), p()($, y.vb, (function (t, e) {
                t.libraryId = e
            })), p()($, y.Y, (function (t, e) {
                t.articles = e
            })), p()($, y.Nb, (function (t, e) {
                t.subTabList = e
            })), p()($, y.I, (function (t, e) {
                t.showSharePop = e
            })), p()($, y.R, (function (t, e) {
                t.showUnlockPopup = e
            })), p()($, y.y, (function (t, e) {
                t.showLoginDialog = e
            })), p()($, y.m, (function (t, e) {
                t.showDialog = e
            })), p()($, y.l, (function (t, e) {
                var n = e.contentIsLock, o = e.contentIsLockMask;
                t.contentIsLock = n, t.contentIsLockMask = o || !1
            })), $),
            "actions": {}
        };
        a.a.use(f.a);
        var rt = {
            "czTop": {"stype": "cz_a", "text": "智能拍译 尽在搜狗翻译APP"},
            "czSet": {"stype": "waptop", "title": "搜狗翻译", "text": "会说人话一拍就懂的翻译神器"},
            "czMask": {"stype": "trans_b", "text": "智能拍译 尽在搜狗翻译APP"},
            "czBottom": {
                "stype": "trans_c",
                "bucket": [0, 8],
                "texts": ["拍照翻译", "语音同传", "文档翻译"],
                "icons": [1, 2, 3],
                "className": ["camera", "voice", "dict02"],
                "btnText": ["使用搜狗翻译APP", "翻译更准确，词典更权威"],
                "btnPs": "不想打字，还能这样翻"
            }
        }, it = rt.czTop, at = rt.czBottom, st = rt.czSet, ct = rt.czMask;
        var lt = n(118), ut = n.n(lt), pt = n(121);

        function dt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function ft(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? dt(Object(n), !0).forEach((function (e) {
                    p()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : dt(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var ht = {
            "data": function () {
                return {"initPage": !0, "dialogConfirmShow": !1}
            },
            "computed": ft(ft(ft(ft({}, Object(d.mapState)("translate", ["query", "transTypeTxt"])), Object(d.mapState)("download", ["iosUrl", "androidUrl"])), Object(d.mapState)(["promotionCzBottom", "showPromotionCzBottom", "promotionMask", "isSogouInputClipboard"])), {}, {
                "isTransparent": function () {
                    return this.initPage ? "transparent" : ""
                }, "promot": function () {
                    var t = this.promotionCzBottom;
                    return {
                        "texts": t.texts || [],
                        "icons": t.icons || [],
                        "btnText": t.btnText || "",
                        "btnBottom": t.btnPs || "",
                        "stype": t.stype || "",
                        "cName": t.className || []
                    }
                }
            }),
            "mounted": function () {
                this.initPage = !1, this.NativeScheme = n(65)
            },
            "methods": ft(ft(ft(ft({}, Object(d.mapMutations)([y.D])), Object(d.mapMutations)("download", [y.W])), Object(d.mapActions)("download", ["getAndroidURL"])), {}, {
                "downloadAction": function () {
                    this.isSogouInputClipboard ? this.dialogConfirmShow = !0 : this.download()
                }, "dialogSubmit": function (t) {
                    var e = t.target.dataset.type;
                    this.dialogConfirmShow = !1, "submit" === e && this.download()
                }, "download": function () {
                    var t = this.promot, e = this.query, n = t.stype, o = "sogoutranslator://word/openwith";
                    this.getAndroidURL(n);
                    var r = this.$store.state.download, i = r.iosUrl, a = r.androidUrl;
                    this.NativeScheme.invokeApp({
                        "scheme": {"ios": o, "android": o},
                        "redirect": {"ios": i, "android": a},
                        "timeout": 4e3
                    }), k.a.send({
                        "terminal": "wap",
                        "pagetype": "promotion",
                        "type": "promot",
                        "pbtype": "cl",
                        "uigs_cl": "download_" + (e ? "result" : "index"),
                        "dtype": n
                    })
                }
            })
        }, mt = Object(c.a)(ht, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.showPromotionCzBottom && "writing" !== t.transTypeTxt ? n("div", {"class": ["footer-wap J-promotion-cz-bottom ", t.isTransparent]}, [n("a", {
                "staticClass": "btn-download",
                "on": {"click": t.downloadAction}
            }, [n("p", [t._v(t._s(t.promot.btnText[0] || ""))]), t._v(" "), n("span", [t._v(t._s(t.promot.btnText[1] || ""))])]), t._v(" "), n("div", {"staticClass": "features"}, [n("h3", [t._v("- " + t._s(t.promot.btnBottom || "") + " -")]), t._v(" "), n("ul", t._l(t.promot.texts || [], (function (e, o) {
                return n("li", {
                    "key": o,
                    "on": {"click": t.downloadAction}
                }, [n("span", {"class": "icon-" + t.promot.cName[o]}), t._v("\n                " + t._s(e) + "\n            ")])
            })), 0)]), t._v(" "), t.dialogConfirmShow ? n("div", {"staticClass": "mask"}) : t._e(), t._v(" "), t.dialogConfirmShow ? n("div", {"staticClass": "dialog-confirm"}, [t._m(0), t._v(" "), n("div", {"staticClass": "btn-box"}, [n("span", {
                "attrs": {"data-type": "cancel"},
                "on": {
                    "click": function (e) {
                        return t.dialogSubmit(e)
                    }
                }
            }, [t._v("取消")]), t._v(" "), n("span", {
                "attrs": {"data-type": "submit"}, "on": {
                    "click": function (e) {
                        return t.dialogSubmit(e)
                    }
                }
            }, [t._v("确认")])])]) : t._e()]) : t._e()
        }), [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {"staticClass": "progress-box"}, [e("p", {"staticClass": "text"}, [this._v("是否确认下载?")])])
        }], !1, null, null, null).exports, gt = [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {"staticClass": "banner-img-box"}, [e("img", {
                "staticClass": "banner-img",
                "attrs": {"src": n(368)}
            }), this._v(" "), e("img", {"staticClass": "qcode-img", "attrs": {"src": n(369)}})])
        }];

        function vt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function yt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? vt(Object(n), !0).forEach((function (e) {
                    p()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : vt(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var wt = {
            "data": function () {
                return {"showBanner": !1, "localStorageName": "WB_BOTTOM_CLOSE", "isHitWritebookSwitch": !1}
            },
            "computed": yt(yt(yt({}, Object(d.mapState)(["CONFIG"])), Object(d.mapState)("translate", ["transTypeTxt"])), {}, {
                "show": function () {
                    return ("writing" === this.transTypeTxt || "document" === this.transTypeTxt) && this.showBanner && this.isHitWritebookSwitch
                }
            }),
            "mounted": function () {
                var t = this.localStorageName;
                B.a.lsGetItem(t).length || (this.showBanner = !0), this.isHitWritebookSwitch = this.CONFIG.isHitWritebookSwitch || !1
            },
            "methods": {
                "close": function () {
                    var t = this.localStorageName;
                    this.showBanner = !1, B.a.lsSetItem(t, 1), k.a.send({
                        "terminal": "web",
                        "type": "transcl",
                        "pbtype": "cl",
                        "uigs_cl": "close_layer"
                    })
                }
            }
        }, _t = Object(c.a)(wt, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return this.show ? e("div", {"staticClass": "trans-footer-banner"}, [this._m(0), this._v(" "), e("i", {
                "staticClass": "btn-close",
                "on": {"click": this.close}
            })]) : this._e()
        }), gt, !1, null, null, null).exports, bt = n(165);

        function Ot(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function St(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ot(Object(n), !0).forEach((function (e) {
                    p()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ot(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var At = {
            "data": function () {
                return {"footAbsolute": !0}
            }, "computed": St(St({}, Object(d.mapState)(["CONFIG"])), {}, {
                "currentYear": function () {
                    return this.CONFIG.loadTime ? new Date(this.CONFIG.loadTime).getFullYear() : (new Date).getFullYear()
                }
            }), "methods": {
                "PcLearnMore": function () {
                    k.a.send({"terminal": "web", "type": "transcl", "pbtype": "cl", "uigs_cl": "get_more"})
                }
            }, "created": function () {
                this.footAbsolute = !this.$route.query.keyword
            }, "mounted": function () {
                this.footAbsolute = !1
            }
        }, Ct = (n(371), Object(c.a)(At, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                "class": {
                    "footer-pc": !0,
                    "foot-absolute": t.footAbsolute
                }
            }, [t._m(0), t._v(" "), n("p", {"staticClass": "copyright"}, [n("span", [t._v("© " + t._s(t.currentYear) + " SOGOU")]), t._v(" - "), n("span", [t._v("京ICP证050897号")]), t._v(" -\n        "), n("span", {"staticClass": "record-num"}, [t._v("京公网安备11000002000025号")])])])
        }), [function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {"staticClass": "nav"}, [n("div", {"staticClass": "links"}, [n("a", {
                "attrs": {
                    "href": "http://corp.sogou.com/",
                    "target": "_blank"
                }
            }, [t._v("关于搜狗")]), t._v(" "), n("span", {"staticClass": "line"}), t._v(" "), n("a", {
                "attrs": {
                    "href": "https://deepi.sogou.com/?from=translatepc",
                    "target": "_blank"
                }
            }, [t._v("搜狗翻译API")]), t._v(" "), n("i"), t._v(" "), n("span", {"staticClass": "line"}), t._v(" "), n("a", {
                "attrs": {
                    "href": "http://www.sogou.com/docs/terms.htm?v=1",
                    "target": "_blank"
                }
            }, [t._v("免责声明")]), t._v(" "), n("i"), t._v(" "), n("span", {"staticClass": "line"}), t._v(" "), n("a", {
                "attrs": {
                    "href": "http://fankui.help.sogou.com/index.php/web/web/index/type/4",
                    "target": "_blank"
                }
            }, [t._v("意见反馈及投诉")]), t._v(" "), n("i"), t._v(" "), n("span", {"staticClass": "line"}), t._v(" "), n("a", {
                "attrs": {
                    "href": "http://corp.sogou.com/private.html",
                    "target": "_blank"
                }
            }, [t._v("隐私政策")])])])
        }], !1, null, "67d5c8d6", null).exports);

        function Tt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Et(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Tt(Object(n), !0).forEach((function (e) {
                    p()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Tt(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var kt = {
            "computed": Et({}, Object(d.mapState)(["showPromotionPCDownload"])),
            "methods": Et(Et({}, Object(d.mapMutations)([y.C])), {}, {
                "handleHover": function () {
                    !this.showPromotionPCDownload && k.a.send({
                        "terminal": "web",
                        "stype": "download",
                        "pbtype": "pv",
                        "uigs_cl": "pchover"
                    }), !this.showPromotionPCDownload && this[y.C](!0)
                }
            })
        };

        function Pt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function xt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Pt(Object(n), !0).forEach((function (e) {
                    p()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Pt(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var It = {
            "data": function () {
                return {
                    "transMap": {
                        "text": {"className": "text", "txt": "文字翻译"},
                        "document": {"className": "doc", "txt": "文档翻译"},
                        "writing": {"className": "write", "txt": "写作助手"}
                    }
                }
            },
            "components": {
                "PromotionPCDownload": Object(c.a)(kt, (function () {
                    var t = this, e = t.$createElement, o = t._self._c || e;
                    return o("li", {
                        "class": {"btn-app": !0, "active": t.showPromotionPCDownload},
                        "on": {"mouseenter": t.handleHover}
                    }, [o("span", [t._v("下载翻译APP")]), t._v(" "), t.showPromotionPCDownload ? o("div", {"staticClass": "qcode"}, [o("img", {
                        "attrs": {
                            "src": n(372),
                            "alt": ""
                        }
                    }), t._v(" "), o("span", [t._v("不用打字，一拍就懂")])]) : t._e()])
                }), [], !1, null, null, null).exports
            },
            "computed": xt(xt({}, Object(d.mapState)(["translateTabUrl"])), Object(d.mapState)("translate", ["transTypeTxt"])),
            "mounted": function () {
                var t = this.$route.path.replace(/\//gi, "") || "text";
                this[y.Xb](t)
            },
            "methods": xt(xt({}, Object(d.mapMutations)("translate", [y.Xb])), {}, {
                "PcChangeTransType": function (t) {
                    var e = "text" === t ? "/" : "document" === t ? "/document" : "/writing";
                    if (this[y.Xb](t), this.$route.path !== e) {
                        var n = this.translateTabUrl, o = n.keyword, r = void 0 === o ? "" : o, i = n.transfrom,
                            a = void 0 === i ? "" : i, s = n.transto, c = void 0 === s ? "" : s;
                        "text" === t && "" !== r ? this.$router.push({
                            "path": e,
                            "query": {"keyword": r, "transfrom": a, "transto": c, "isclient": 1}
                        }) : this.$router.push({"path": e})
                    }
                    k.a.send({
                        "terminal": B.a.terminalJudge(),
                        "type": "transcl",
                        "pbtype": "cl",
                        "uigs_cl": "trans_tab_" + t
                    })
                }
            })
        }, jt = Object(c.a)(It, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("ul", {"staticClass": "trans-type"}, [t._l(t.transMap, (function (e, o) {
                return n("li", {
                    "key": o,
                    "class": [e.className, {"current": t.transTypeTxt === o}],
                    "on": {
                        "click": function (e) {
                            return t.PcChangeTransType(o)
                        }
                    }
                }, [t._v("\n        " + t._s(e.txt) + "\n        "), "writing" === o ? n("span", {"staticClass": "tag-free"}) : t._e()])
            })), t._v(" "), "text" === t.transTypeTxt ? n("PromotionPCDownload") : t._e()], 2)
        }), [], !1, null, null, null).exports, Dt = n(122), Lt = function (t, e) {
            var n, o = window.navigator.userAgent, r = /weibo/gi.test(o) || /newsarticle/gi.test(o);
            n = setTimeout((function () {
                !r && (window.location.href = /OS\s/g.test(o) ? t : e), window.clearTimeout(n), n = null
            }), 1e3)
        };

        function Nt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Rt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Nt(Object(n), !0).forEach((function (e) {
                    p()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Nt(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Ut = {
            "computed": Rt(Rt({}, Object(d.mapState)("translate", ["query"])), Object(d.mapState)(["promotionIcon"])),
            "watch": {
                "promotionIcon": function () {
                }
            },
            "methods": Rt(Rt(Rt({}, Object(d.mapMutations)([y.D])), Object(d.mapActions)("download", ["getAndroidURL"])), {}, {
                "maskClick": function () {
                    this[y.D](0)
                }, "download": function () {
                    var t = this.query || "";
                    this.getAndroidURL("trans_b");
                    var e = this.$store.state.download, n = e.iosUrl, o = e.androidUrl;
                    Lt(n, o), k.a.send({
                        "terminal": "wap",
                        "pagetype": "promotion",
                        "type": "promot",
                        "pbtype": "cl",
                        "uigs_cl": "download_" + (t ? "result" : "index"),
                        "dtype": "trans_b"
                    })
                }
            })
        }, Bt = (n(377), Object(c.a)(Ut, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return t.promotionIcon > 0 ? o("div", [o("div", {
                "staticClass": "mask", "on": {
                    "click": function (e) {
                        return t.maskClick()
                    }
                }
            }), t._v(" "), o("div", {"staticClass": "popup-app"}, [o("div", {"staticClass": "maskbg"}, [o("img", {
                "staticClass": "logo",
                "staticStyle": {"z-index": "2"},
                "attrs": {"src": n(373)}
            }), t._v(" "), o("div", {"staticClass": "feature-wrap"}, [o("ul", {
                "staticClass": "swiper-wrapper",
                "style": {"width": "1520px"},
                "attrs": {"id": "J-slide"}
            }, [o("li", {"staticClass": "swiper-slide"}, [o("img", {
                "staticClass": "J-img swiper-lazy",
                "attrs": {"src": n(374)}
            })]), t._v(" "), o("li", {"staticClass": "swiper-slide"}, [o("img", {
                "staticClass": "J-img swiper-lazy",
                "attrs": {"src": n(375)}
            })]), t._v(" "), o("li", {"staticClass": "swiper-slide"}, [o("img", {
                "staticClass": "J-img swiper-lazy",
                "attrs": {"src": n(376)}
            })])]), t._v(" "), o("a", {
                "staticClass": "btn-download",
                "on": {"click": t.download}
            }, [t._v("立即下载APP")]), t._v(" "), o("a", {
                "staticClass": "btn-close",
                "on": {"click": t.maskClick}
            })]), t._v(" "), o("div", {
                "staticClass": "swiper-pagination",
                "attrs": {"slot": "pagination"},
                "slot": "pagination"
            })])])]) : t._e()
        }), [], !1, null, null, null).exports);

        function Mt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Gt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Mt(Object(n), !0).forEach((function (e) {
                    p()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Mt(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var qt = {
            "data": function () {
                return {"channel": ""}
            },
            "watch": {
                "showPromotionShareBottom": function (t) {
                    this[y.i](t)
                }
            },
            "mounted": function () {
                switch (this.NativeScheme = n(65), m.a.parse().query.fr) {
                    case"share_transapp_result":
                        this.channel = "jieguofenxiang";
                        break;
                    default:
                        this.channel = "jieguofenxiang"
                }
                this.showPromotionShareBottom && this[y.i](!0)
            },
            "computed": Gt(Gt(Gt(Gt({}, Object(d.mapState)(["showPromotionShareBottom"])), Object(d.mapState)("translate", ["query", "result"])), Object(d.mapState)("language", ["from", "to"])), Object(d.mapState)("download", ["iosUrl", "androidUrl"])),
            "methods": Gt(Gt(Gt({}, Object(d.mapMutations)([y.i, y.B])), Object(d.mapActions)("download", ["getAndroidURL"])), {}, {
                "close": function () {
                    this[y.B]({"showPromotionShareBottom": !1}), k.a.send({
                        "pagetype": "promotion",
                        "type": "promot",
                        "pbtype": "cl",
                        "uigs_cl": "close",
                        "dtype": this.channel
                    })
                }, "download": function () {
                    var t = "sogoutranslator://word/openwith?".concat(m.a.params({
                        "key": this.query,
                        "transfrom": this.from,
                        "transto": this.to,
                        "result": this.result
                    }));
                    this.getAndroidURL(this.channel);
                    var e = this.$store.state.download, n = e.iosUrl, o = e.androidUrl;
                    k.a.send({
                        "pagetype": "promotion",
                        "type": "promot",
                        "pbtype": "cl",
                        "uigs_cl": "download",
                        "dtype": this.channel
                    }), this.NativeScheme.invokeApp({
                        "scheme": {"ios": t, "android": t},
                        "redirect": {"ios": n, "android": o},
                        "timeout": 2e3
                    })
                }
            })
        }, zt = (n(378), Object(c.a)(qt, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.showPromotionShareBottom ? n("div", {
                "staticClass": "download-box",
                "staticStyle": {"height": "76px"}
            }, [n("span", {
                "staticClass": "close",
                "on": {"click": t.close}
            }), t._v(" "), n("span", {"staticClass": "logo"}), t._v(" "), t._m(0), t._v(" "), n("a", {
                "attrs": {"href": "javascript:void(0);"},
                "on": {"click": t.download}
            }, [t._v("免费下载")])]) : t._e()
        }), [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("p", [e("span", [this._v("搜狗翻译")]), this._v(" "), e("span", [this._v("您的贴身智能翻译专家")])])
        }], !1, null, null, null).exports);

        function Ht(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Ft(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ht(Object(n), !0).forEach((function (e) {
                    p()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ht(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Jt = {
                "computed": Ft({}, Object(d.mapState)("translate", ["showTranslateRecordDialog"])),
                "methods": Ft(Ft({}, Object(d.mapMutations)("translate", [y.Vb, y.O, y.P])), {}, {
                    "clickButton": function (t) {
                        var e = t.target, n = e && e.dataset && e.dataset.dialogAction;
                        "ok" === n && this[y.Vb]({"index": "all"}), k.a.send({
                            "terminal": "wap",
                            "type": "transcl",
                            "pbtype": "cl",
                            "uigs_cl": "delall_history_" + ("ok" === n ? "yes" : "no")
                        }), this[y.P](!1)
                    }
                })
            }, Qt = Object(c.a)(Jt, (function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return t.showTranslateRecordDialog ? n("div", [n("div", {"staticClass": "mask"}), t._v(" "), n("div", {"staticClass": "dialog-confirm"}, [n("p", {"staticClass": "text"}, [t._v("确定删除全部历史记录？")]), t._v(" "), n("div", {
                    "staticClass": "btn-box",
                    "on": {
                        "click": function (e) {
                            return t.clickButton(e)
                        }
                    }
                }, [n("span", {"attrs": {"data-dialog-action": "cancel"}}, [t._v("取消")]), t._v(" "), n("span", {"attrs": {"data-dialog-action": "ok"}}, [t._v("确定")])])])]) : t._e()
            }), [], !1, null, null, null).exports, Wt = n(164), Vt = n.n(Wt), $t = {
                "name": "gotTop", "data": function () {
                    return {"showGoTop": !1}
                }, "mounted": function () {
                    var t = this, e = window.innerHeight, n = document.documentElement, o = document.body;
                    window.addEventListener("scroll", (function () {
                        t.showGoTop = (n.scrollTop || o.scrollTop) > e / 2 && !document.querySelector(".lang-header")
                    }), !1)
                }, "methods": {
                    "goTop": function () {
                        Vt.a.scrollTo({"y": 0}), k.a.send({"type": "transcl", "pbtype": "cl", "uigs_cl": "gotop"})
                    }
                }
            }, Yt = Object(c.a)($t, (function () {
                var t = this.$createElement, e = this._self._c || t;
                return this.showGoTop ? e("a", {
                    "staticClass": "go-top show",
                    "attrs": {"href": "javascript:void(0);"},
                    "on": {"click": this.goTop}
                }) : this._e()
            }), [], !1, null, null, null).exports, Kt = n(166), Xt = n(125), Zt = n(123), te = n(66), ee = n(124),
            ne = n(167), oe = n(119);

        function re(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function ie(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? re(Object(n), !0).forEach((function (e) {
                    p()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var ae = n(382).format(), se = n(37), ce = n(13), le = n(385), ue = n(120);
        var pe = {
            "mounted": function () {
                this.Cookie = n(50), this.isLogin = !!this.Cookie.get("sgid")
            },
            "data": function () {
                return {
                    "area": "left",
                    "orig_text": "",
                    "dit": "",
                    "details": "",
                    "phonetics": "",
                    "transResult": "",
                    "dictionary": "",
                    "show": !1,
                    "showSetting": !1,
                    "isLogin": !1,
                    "isCollect": !1,
                    "collectInfo": "",
                    "showCollect": !1
                }
            },
            "watch": {
                "queryKey": function () {
                    this.ajaxTranslate(this.selectionInfo)
                }, "selectionInfo": function (t) {
                    !1 === t.show && this.cardInit()
                }
            },
            "computed": ie(ie(ie(ie(ie({}, Object(d.mapState)(["CONFIG"])), Object(d.mapState)("language", ["detect"])), Object(d.mapState)("translate", ["query", "to"])), Object(d.mapState)(["selectionInfo", "selectionGlobalShow"])), {}, {
                "queryKey": function () {
                    return this.selectionInfo.val || ""
                }
            }),
            "components": {"Voice": oe.a},
            "methods": Object.assign(ie(ie(ie({}, Object(d.mapMutations)([y.Fb, y.G, y.x, y.M])), Object(d.mapMutations)("translate", [y.k])), {}, {
                "close": function () {
                    this.sendUigs("destroy"), this[y.Fb]({"show": !1})
                }, "ajaxTranslate": function (t) {
                    var e = this, n = t.from, o = t.to, r = t.area, i = t.val, a = e.CONFIG.uuid || se.get(),
                        s = (new Date).getTime(), c = "";
                    if (ce.is(i, !1, !0)) {
                        var l, u = i, p = {};
                        l = "auto" !== n && "en" !== n && "zh-CHS" !== n || "en" !== o && "zh-CHS" !== o || /MSIE [678]\.0/.test(window.navigator.userAgent) ? "http://www.microsofttranslator.com/bv.aspx?" + ce.params({
                            "from": n,
                            "to": o,
                            "a": u
                        }) : (/^https:/.test(u) ? "https" : "http") + "://translate.sogoucdn.com/pcvtsnapshot?" + ce.params({
                            "from": n,
                            "to": o,
                            "tfr": "translatepc",
                            "url": u,
                            "domainType": "sogou"
                        }), p.text = u, p.href = l, e.showCollect = !p.href, p.isUrl = !0, e.transResult = p, k.a.send({
                            "type": "all",
                            "stype": "url",
                            "qtype": "url",
                            "fr": "selection",
                            "query": i,
                            "area": r,
                            "from": n,
                            "to": o,
                            "text": u,
                            "time": (new Date).getTime() - s,
                            "len": u.length,
                            "uuid": a
                        })
                    } else if (i) {
                        var d = e.CONFIG.secretCode || "", f = j.a.cal("".concat(n).concat(o).concat(i).concat(d)),
                            h = {
                                "from": n,
                                "to": o,
                                "text": i,
                                "useDetect": "on",
                                "useDetectResult": "on",
                                "needQc": 0,
                                "uuid": a,
                                "oxford": "on",
                                "isReturnSugg": "off",
                                "isStroke": "on",
                                "fr": "selection",
                                "s": f
                            };
                        L()({
                            "url": "/reventondc/translate",
                            "method": "post",
                            "dataType": "json",
                            "headers": {"Accept": "application/json"},
                            "data": ce.params(h)
                        }).then((function (t) {
                            var l = t && t.data && t.data.sgtkn || window.sgctkn || "";
                            B.a.sendApprove(a, l);
                            var u = "";
                            if ("0" !== (t = t.data).translate.errorCode) e.show = !1, c = "failed", u = t.translate.errorCode; else if (t && t.translateArr) {
                                e.transResult = t;
                                var p = t.dictionary || {}, d = p.dicType || "", f = (p.content || [])[0] || {}, m = [],
                                    g = [];
                                if (e.dictionary = p, "newCentury" === d) {
                                    g.push({"text": f.phonetic || "", "type": "zh"});
                                    var v = B.a.terminalJudge();
                                    g.forEach((function (e) {
                                        (e = ae.formatPhonetic(e, e.text, e.type, v)).src = function (t) {
                                            var e = t.lang, n = t.text;
                                            n = (n || "")._br("al").replace(/(?:<br\s*\/?>|\r?\n)/gi, " ").slice(0, w.MAX_VOICE_LEN) || "";
                                            var o = "web" === B.a.terminalJudge() ? "translateweb" : "translatewap";
                                            return "en" === e || "zh-CHS" === e ? "".concat(w.AUDIO_SOGOU_PATH, "?").concat(ce.params({
                                                "text": n,
                                                "speed": 1,
                                                "lang": e,
                                                "from": o
                                            })) : "".concat(w.AUDIO_MICRO_PATH, "?").concat(ce.params({
                                                "text": n,
                                                "spokenDialect": e,
                                                "from": o
                                            }))
                                        }({"lang": t.detect.detect, "text": t.detect.text})
                                    })), (m = ((f.category || [])[0] || {}).sense || []).length || m.push({"ref": ((f.refArr || [])[0] || {}).phonetic || ""}), m.forEach((function (t) {
                                        t.sref = ae.formatRef(t.ref), t.val = ae.formatBrackets(t.description)
                                    }))
                                } else "oxford" === d && (g = f.phonetic || [], (m = f.usual || []).forEach((function (t) {
                                    t.val = t.values.join(";"), t.sref = ae.formatRef(t.ref)
                                })));
                                e.orig_text = h.text, e.dit = t.translate.dit, e.phonetics = g, e.details = m;
                                var y = t.translateArr[0].from, _ = t.translateArr[0].to;
                                if (e.details.length || "en" === y && "zh-CHS" === _ || "zh-CHS" === y && "en" === _) {
                                    var b = {
                                        "text": e.orig_text,
                                        "size": "1",
                                        "transFrom": t.detect.detect,
                                        "transTo": t.translate.to
                                    };
                                    ue.getCollections(b, (function (t) {
                                        var n = t.data.content;
                                        n && n.length && n.length > 0 ? (e.collectInfo = n[0], e.isCollect = !0) : e.isCollect = !1, e.selectTrans = setTimeout((function () {
                                            e.show = !0, ("en" === y && "zh-CHS" === _ || "zh-CHS" === y && "en" === _) && (e.showCollect = !0), k.a.send({
                                                "type": "transcl",
                                                "pbtype": "cl",
                                                "uigs_cl": "selection_create"
                                            }), e.selectTrans && clearTimeout(e.selectTrans)
                                        }), 10)
                                    }), (function () {
                                    }))
                                } else e.show = !0, e.showCollect = !1, k.a.send({
                                    "type": "transcl",
                                    "pbtype": "cl",
                                    "uigs_cl": "selection_create"
                                });
                                c = "success"
                            } else c = "failed";
                            var O = {
                                "type": "all",
                                "stype": c,
                                "qtype": "text",
                                "fr": "selection",
                                "query": e.query,
                                "area": r,
                                "from": n,
                                "to": o,
                                "text": i,
                                "time": (new Date).getTime() - s,
                                "len": i.length,
                                "uuid": a
                            };
                            u && (O.errcode = u), k.a.send(O)
                        })).catch((function () {
                            k.a.send({
                                "type": "all",
                                "stype": "network",
                                "qtype": "text",
                                "fr": "selection",
                                "query": e.query,
                                "area": r,
                                "from": n,
                                "to": o,
                                "text": i,
                                "time": (new Date).getTime() - s,
                                "len": i.length,
                                "uuid": a
                            })
                        }))
                    }
                }, "move": function (t) {
                    return le.drag(document.getElementById("selection-drag-bar"), document.getElementById("selection-drag-box"), t)
                }, "toggleCollect": function () {
                    this.isLogin ? this.isCollect ? (this.sendUigs("deleteCollect"), this.deleteCollect()) : (this.sendUigs("addCollect"), this.addCollect()) : (this[y.x](!0), this.show = !1)
                }, "addCollect": function () {
                    var t = this;
                    ue.addCollect({
                        "text": t.transResult.detect.text,
                        "transFrom": t.transResult.translate.from,
                        "transTo": t.transResult.translate.to,
                        "dic": t.transResult
                    }, (function (e) {
                        0 === e.code && (t.isCollect = !0, t.collectInfo = {"collectionId": e.collectionIds[0]}, t.query === t.transResult.detect.text && t.detect.lang === t.transResult.translate.from && t.to === t.transResult.translate.to && t[y.k]({
                            "isCollect": !0,
                            "collectId": e.collectionIds[0],
                            "isShow": !0
                        }), t[y.M]({"show": !0, "text": "成功加入我的收藏！"}))
                    }), (function (e) {
                        t[y.M]({"show": !0, "text": e})
                    }))
                }, "deleteCollect": function () {
                    var t = this;
                    ue.deleteCollect({
                        "collections": [{
                            "status": 0,
                            "collectionId": t.collectInfo.collectionId
                        }]
                    }, (function (e) {
                        0 === e.data.code && e.data.collectionIds[0] === t.collectInfo.collectionId && (t.isCollect = !1, t.query === t.transResult.detect.text && t.detect.lang === t.transResult.translate.from && t.to === t.transResult.translate.to && t[y.k]({
                            "isCollect": !1,
                            "collectId": t.collectInfo.collectionId,
                            "isShow": !0
                        }), t[y.M]({"show": !0, "text": "已移出我的收藏！"}))
                    }), (function () {
                        t[y.M]({"show": !0, "text": "网络错误"})
                    }))
                }, "toggleSet": function () {
                    this.sendUigs("showSwitch"), this.showSetting = !this.showSetting
                }, "PcDrawWordToggle": function () {
                    var t = this.selectionGlobalShow ? 0 : 1;
                    this.sendUigs("switch"), B.a.lsSetItem(w.SELECTION_SWITCH, t), this.showSetting = !1, this.cardInit(), this[y.G](!this.selectionGlobalShow)
                }, "sendUigs": function (t) {
                    k.a.send({"type": "transcl", "pbtype": "cl", "uigs_cl": "selection_" + t})
                }, "cardInit": function () {
                    this.collectInfo = "", this.transResult = "", this.orig_text = "", this.dic = "", this.phonetics = "", this.details = "", this.dictionary = "", this.show = !1, this.showSetting = !1
                }
            }))
        }, de = Object(c.a)(pe, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                "directives": [{
                    "name": "show",
                    "rawName": "v-show",
                    "value": t.selectionInfo.show && t.selectionGlobalShow && t.show,
                    "expression": "selectionInfo.show && selectionGlobalShow && show"
                }],
                "staticClass": "select-translate",
                "style": {"left": t.selectionInfo.left + "px", "top": t.selectionInfo.right + "px"},
                "attrs": {"id": "selection-drag-box"}
            }, [n("div", {
                "staticClass": "st-header",
                "attrs": {"id": "selection-drag-bar"},
                "on": {"mousedown": t.move}
            }, [n("h3", [t._v("搜狗翻译")]), t._v(" "), n("div", {"staticClass": "setting"}, [n("a", {
                "attrs": {"href": "javascript:;"},
                "on": {"click": t.toggleSet}
            }, [t._v("设置")]), t._v(" "), t.showSetting ? n("div", {"staticClass": "set-box"}, [t._v("\n                划词翻译"), n("span", {
                "class": [{"state": !0}, {"active": t.selectionGlobalShow}],
                "on": {"click": t.PcDrawWordToggle}
            })]) : t._e()]), t._v(" "), n("span", {
                "staticClass": "btn-close",
                "on": {"click": t.close}
            })]), t._v(" "), t.transResult.isUrl ? n("div", {"staticClass": "st-content"}, [n("div", {"staticClass": "source"}, [n("a", {
                "attrs": {
                    "href": t.transResult.href,
                    "target": "_blank",
                    "rel": "noopener noreferrer"
                }
            }, [t._v(t._s(t.transResult.text))])])]) : n("div", {"staticClass": "st-content"}, [-1 !== ["oxford", "newCentury"].indexOf(t.dictionary.dicType) && t.showCollect ? n("div", {"staticClass": "source tit"}, [t._v("\n            " + t._s(t.orig_text) + "\n        ")]) : t.dictionary || !t.showCollect ? n("div", {"staticClass": "tit"}, [t._v(t._s(t.dit))]) : t._e(), t._v(" "), t.showCollect ? n("div", {"staticClass": "pronounce"}, t._l(t.phonetics, (function (e, o) {
                return n("div", {
                    "key": o,
                    "staticClass": "item"
                }, [n("voice", {"attrs": {"voice": e}}), t._v(" "), n("span", {"staticClass": "phonetic"}, [t._v(t._s("zh" === e.type ? "汉" : "uk" === e.type ? "英" : "美") + " [" + t._s(e.text) + "]")])], 1)
            })), 0) : t._e(), t._v(" "), "oxford" === t.dictionary.dicType && t.showCollect ? n("ul", {"staticClass": "mean-list"}, t._l(t.details, (function (e, o) {
                return n("li", {"key": o}, [n("span", {"staticClass": "tag"}, [t._v(t._s(e.pos))]), t._v(" "), n("p", {"domProps": {"innerHTML": t._s(e.val)}})])
            })), 0) : "newCentury" === t.dictionary.dicType && t.showCollect ? n("ul", {"staticClass": "mean-list"}, t._l(t.details, (function (e, o) {
                return n("li", {"key": o}, [(e.ref || e.val) && e.cat ? n("span", {"staticClass": "tag"}, [t._v("[" + t._s(e.cat) + "]")]) : t._e(), t._v(" "), n("p", [t._v("\n                    " + t._s(e.val) + "\n                    "), e.ref ? n("span", [t._v(t._s(e.sref))]) : t._e()])])
            })), 0) : t._e(), t._v(" "), n("span", {
                "directives": [{
                    "name": "show",
                    "rawName": "v-show",
                    "value": !!t.showCollect && !!t.details.length,
                    "expression": "!!showCollect && !!details.length"
                }], "class": t.isCollect ? "btn-collect active" : "btn-collect", "on": {"click": t.toggleCollect}
            })])])
        }), [], !1, null, null, null).exports, fe = [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("p", [this._v("\n                查看批改对照，体验\n                "), e("em", [this._v("完整")]), this._v(" 功能!\n            ")])
        }, function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {"staticClass": "pop-amend-content"}, [e("div", {"staticClass": "app"}, [e("img", {
                "staticClass": "qrcode",
                "attrs": {"src": n(386)}
            }), this._v(" "), e("div", {"staticClass": "info"}, [e("p", [this._v("批改对照 更多功能")]), this._v(" "), e("p", [e("span", [this._v("扫码下载")]), this._v(" 搜狗翻译APP")])])])])
        }, function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {"staticClass": "amend-header"}, [e("i", {"staticClass": "success-green"}, [this._v("√")]), this._v(" "), e("p", [this._v("文章已复制到剪贴板")])])
        }, function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {"staticClass": "progress-box"}, [e("p", {"staticClass": "text"}, [this._v("是否保留本次修改?")])])
        }];

        function he(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function me(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? he(Object(n), !0).forEach((function (e) {
                    p()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var ge = {
            "data": function () {
                return {"frName": "WRITING_FR", "progressbar": 0, "timer": null, "isHitWritebookSwitch": !1}
            },
            "computed": me(me(me(me({}, Object(d.mapState)(["CONFIG"])), Object(d.mapState)("writing", ["popup", "state", "query", "queryBackUp"])), Object(d.mapState)(["isTranslateAppShare", "isSogouSearchApp", "isFromAITranslate", "isSogouInputTab", "isSogouInputMagnifier", "isSogouInputClipboard"])), {}, {
                "promot": function () {
                    var t = this.promotionCzTop || {}, e = t.stype;
                    return {"desc": t.text, "stype": e}
                }
            }),
            "watch": {
                "state": function () {
                    var t = this;
                    "waploading" === this.state && (this.progressbar = 0, clearInterval(this.timer), this.timer = setInterval((function () {
                        t.progressbar += 20, t.progress > 70 && clearInterval(t.timer)
                    }), 200))
                }, "popup": function () {
                    var t = this.popup;
                    document.body.style.overflow = t ? "hidden" : "auto"
                }
            },
            "mounted": function () {
                this.isHitWritebookSwitch = this.CONFIG.isHitWritebookSwitch || !1;
                var t = this.frName, e = this.isTranslateAppShare, o = this.isSogouSearchApp,
                    r = this.isFromAITranslate, i = this.isSogouInputTab, a = this.isSogouInputMagnifier,
                    s = this.isSogouInputClipboard, c = this.$route, l = this.$store, u = this.isHitWritebookSwitch,
                    p = l.state.translate.query;
                "wap" !== B.a.terminalJudge() || "/" !== c.path || e || o || r || i || a || s || (!B.a.lsGetItem(t).length && u ? (this[y.ec]({"popup": "writeBook"}), B.a.lsSetItem(t, 1)) : p && B.a.lsGetItem(t).length), this.Writing = n(87)
            },
            "methods": me(me(me(me({}, Object(d.mapMutations)("writing", [y.ec])), Object(d.mapActions)("writing", ["clear"])), Object(d.mapActions)(["stopBodyScroll"])), {}, {
                "hide": function () {
                    this[y.ec]({"popup": !1})
                }, "goDownloadPage": function (t) {
                    this.$router.push({"path": "/download/wap/".concat(t)}), k.a.send({
                        "terminal": "wap",
                        "type": "transcl",
                        "pbtype": "cl",
                        "uigs_cl": "zwpg_dz" === t ? "download_compare" : "download_copy"
                    })
                }, "goWriteBook": function () {
                    k.a.send({
                        "terminal": "wap",
                        "type": "transcl",
                        "pbtype": "cl",
                        "uigs_cl": "promotion_writebook_btn"
                    }), window.location.href = "//fanyi.sogou.com/writebook/wapsearch?fr=waptc"
                }, "nosafe": function () {
                    var t = this.queryBackUp || "";
                    this.hide(), this.clear(), this[y.ec]({"query": t}), k.a.send({
                        "terminal": "wap",
                        "type": "transcl",
                        "pbtype": "cl",
                        "uigs_cl": "nosafe"
                    })
                }, "safe": function () {
                    this.hide();
                    var t = this.query;
                    t = this.Writing.getStr(t), this.clear(), this[y.ec]({
                        "type": "textarea",
                        "query": t
                    }), k.a.send({"terminal": "wap", "type": "transcl", "pbtype": "cl", "uigs_cl": "safe"})
                }, "loadClose": function () {
                    this[y.ec]({"state": !1})
                }
            })
        }, ve = Object(c.a)(ge, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {"staticClass": "report-pop"}, ["correct" === t.popup ? n("div", {"staticClass": "pop-amend"}, [n("div", {
                "staticClass": "btn-close",
                "attrs": {"title": "关闭"},
                "on": {"click": t.hide}
            }), t._v(" "), n("div", {"staticClass": "amend-content"}, [t._m(0), t._v(" "), n("div", {"staticClass": "amend-img"}), t._v(" "), n("div", {
                "staticClass": "btn-orange",
                "on": {
                    "click": function (e) {
                        return t.goDownloadPage("zwpg_dz")
                    }
                }
            }, [t._v("下载搜狗翻译APP")])])]) : t._e(), t._v(" "), "done" === t.popup || "copyPc" === t.popup ? n("div", {"staticClass": "pop-amend-pc"}, [n("div", {
                "staticClass": "btn-close",
                "attrs": {"title": "关闭"},
                "on": {"click": t.hide}
            }), t._v(" "), n("div", {"staticClass": "pop-amend-header"}, [n("p", [n("i"), t._v("\n                " + t._s("done" === t.popup ? "写作助手完成" : "文章已复制到剪贴板") + "\n            ")])]), t._v(" "), t._m(1)]) : t._e(), t._v(" "), "copy" === t.popup ? n("div", {"class": ["pop-amend", {"pop-trans": t.isHitWritebookSwitch}]}, [n("div", {
                "staticClass": "btn-close",
                "attrs": {"title": "关闭"},
                "on": {"click": t.hide}
            }), t._v(" "), t._m(2), t._v(" "), n("div", {"staticClass": "amend-content"}, [t.isHitWritebookSwitch ? t._e() : n("div", {"staticClass": "amend-img"}), t._v(" "), t.isHitWritebookSwitch ? t.isHitWritebookSwitch ? n("div", {
                "staticClass": "btn-gain",
                "on": {
                    "click": function (e) {
                        return t.goDownloadPage("zwpg")
                    }
                }
            }, [t._v("\n                即刻领取「冲刺锦囊」\n            ")]) : t._e() : n("div", {
                "staticClass": "btn-orange pd-top",
                "on": {
                    "click": function (e) {
                        return t.goDownloadPage("zwpg")
                    }
                }
            }, [t._v("\n                查看批改对照\n            ")])])]) : t._e(), t._v(" "), "index" === t.popup ? n("div", {"staticClass": "pop-amend-big"}, [n("i", {
                "staticClass": "btn-close",
                "attrs": {"title": "关闭"},
                "on": {"click": t.hide}
            })]) : t._e(), t._v(" "), "exit" === t.popup ? n("div", {"staticClass": "dialog-confirm"}, [t._m(3), t._v(" "), n("div", {"staticClass": "btn-box"}, [n("span", {"on": {"click": t.nosafe}}, [t._v("不保留")]), t._v(" "), n("span", {"on": {"click": t.safe}}, [t._v("保留")])])]) : t._e(), t._v(" "), "waploading" === t.state ? n("div", {"staticClass": "dialog-confirm"}, [n("div", {"staticClass": "progress-box"}, [n("p", {"staticClass": "text"}, [t._v("写作助手中")]), t._v(" "), n("div", {"staticClass": "progress"}, [n("span", {"style": "width: " + t.progressbar + "%;"})])]), t._v(" "), n("div", {
                "staticClass": "btn-box",
                "on": {"click": t.loadClose}
            }, [n("span", [t._v("关闭")])])]) : t._e(), t._v(" "), "writeBook" === t.popup && t.isHitWritebookSwitch ? n("div", {"staticClass": "pop-amend-trans"}, [n("i", {
                "staticClass": "btn-close",
                "on": {"click": t.hide}
            }), t._v(" "), n("div", {
                "staticClass": "btn-gain",
                "on": {"click": t.goWriteBook}
            }, [t._v("即刻领取「冲刺锦囊」")])]) : t._e(), t._v(" "), t.popup || "waploading" === t.state ? n("div", {"staticClass": "mask"}) : t._e()])
        }), fe, !1, null, null, null).exports;

        function ye(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function we(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ye(Object(n), !0).forEach((function (e) {
                    p()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var _e = {
            "data": function () {
                return {"modelList": JSON.parse(JSON.stringify(w.TRANS_MODEL_LIST))}
            },
            "watch": {
                "showTransModelPopup": function (t) {
                    var e = document.body, n = 0;
                    t ? (n = window.scrollY, e.style.position = "fixed", e.style.width = "100%", e.style.top = -n + "px") : (e.style.position = "", e.style.top = "", window.scrollTo(0, n))
                }
            },
            "computed": we(we(we(we({}, Object(d.mapState)("language", ["from", "to", "detect"])), Object(d.mapState)("translate", ["transModel", "query"])), Object(d.mapState)(["showTransModelPopup"])), {}, {
                "modelBan": function () {
                    var t = -1 !== ["auto", "autodetect"].indexOf(this.from) ? this.detect.lang : this.from;
                    return !("zh-CHS" === t && "en" === this.to || "en" === t && "zh-CHS" === this.to)
                }
            }),
            "methods": we(we(we(we({}, Object(d.mapMutations)([y.lb, y.M])), Object(d.mapMutations)("translate", [y.Yb])), Object(d.mapActions)("translate", ["executeTranslate"])), {}, {
                "close": function () {
                    this[y.lb]({"showTransModelPopup": !1})
                }, "toggleModel": function (t) {
                    this.modelBan && "通用领域" !== t.text ? this[y.M]({
                        "show": !0,
                        "text": "仅支持中英互译"
                    }) : (this[y.Yb]({"transModel": t}), this.query.trim() && this.executeTranslate(), this.close()), k.a.send({
                        "terminal": "wap",
                        "type": "transcl",
                        "pbtype": "cl",
                        "uigs_cl": "model_".concat(t.val)
                    })
                }
            })
        }, be = Object(c.a)(_e, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.showTransModelPopup ? n("div", [n("div", {"staticClass": "mask"}), t._v(" "), n("div", {"staticClass": "popup-sort-select"}, [n("h4", [t._v("领域")]), t._v(" "), n("i", {
                "staticClass": "close",
                "on": {"click": t.close}
            }), t._v(" "), n("ul", {"staticClass": "sort-list"}, t._l(t.modelList, (function (e, o) {
                return n("li", {
                    "key": o,
                    "class": {"cur": t.transModel.val === e.val, "disabled": t.modelBan && "general" !== e.val},
                    "on": {
                        "click": function (n) {
                            return t.toggleModel(e)
                        }
                    }
                }, [n("span", [t._v(t._s(e.text))])])
            })), 0)])]) : t._e()
        }), [], !1, null, null, null).exports;

        function Oe(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Se(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Oe(Object(n), !0).forEach((function (e) {
                    p()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Oe(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Ae = {
            "computed": Se({}, Object(d.mapState)(["isTranslateAppShare", "isSogouSearchApp", "CONFIG"])),
            "data": function () {
                return {"showLanguageList": !1, "lastSelect": "", "URL_PARAMS": "", "isWriting": !0}
            },
            "beforeMount": function () {
                var t = this;
                B.a.appendPassportJs(), t.URL_PARAMS = m.a.parse().query;
                var e = window.location.hash;
                if (e) {
                    var n = (e = decodeURIComponent(e)).replace(/^#+/, "").split("/");
                    ["transfrom", "transto", "keyword"].forEach((function (e, o) {
                        var r = n[o];
                        r && (t.URL_PARAMS[e] = r)
                    }))
                }
            },
            "created": function () {
                this[y.Xb](this.$route.name);
                var t = {};
                try {
                    t = JSON.parse(this.CONFIG.promotionList)
                } catch (e) {
                    t = {}
                }
                this[y.lb]({"promotionList": t})
            },
            "mounted": function () {
                var t = this;
                t.getHotWord(), t.Cookie = n(50), t.getDocNum(), document.addEventListener("click", (function (e) {
                    e.cancelBubble ? e.cancelBubble = !0 : e.stopPropagation();
                    var n = document.querySelector(".qcode");
                    n && !n.contains(e.target) && t[y.C](!1)
                }))
            },
            "components": {
                "Header": pt.a,
                "PromotionPCBanner": bt.a,
                "PromotionPCBottom": Ct,
                "PromotionCzBottom": mt,
                "PromotionWapSwiper": Bt,
                "PromotionShareBottom": zt,
                "PromotionWbFooter": _t,
                "TranslateType": jt,
                "TranslateRecordDialog": Qt,
                "GoTop": Yt,
                "FeedBack": Kt.a,
                "Docdownload": Xt.a,
                "Loading": Zt.a,
                "Toast": te.a,
                "AppDownload": ee.a,
                "LoginDiaLog": ne.a,
                "LogoHead": Dt.a,
                "SelectionCard": de,
                "WritingPopup": ve,
                "TransModelPopup": be
            },
            "methods": Se(Se(Se(Se({}, Object(d.mapMutations)([y.C, y.lb])), Object(d.mapMutations)("translate", [y.Xb])), Object(d.mapActions)("doctrans", ["getDocNum"])), Object(d.mapActions)("translate", ["getHotWord"]))
        }, Ce = (n(387), Object(c.a)(Ae, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                "class": t.isTranslateAppShare ? "theme-green" : "",
                "attrs": {"id": "J-container"}
            }, [n("Header", {
                "directives": [{
                    "name": "show",
                    "rawName": "v-show",
                    "value": !t.isSogouSearchApp,
                    "expression": "!isSogouSearchApp"
                }]
            }), t._v(" "), n("div", {"staticClass": "content-wrap"}, [n("div", {"staticClass": "inner-wrap"}, [n("LogoHead"), t._v(" "), n("TranslateType"), t._v(" "), n("router-view"), t._v(" "), n("WritingPopup")], 1)]), t._v(" "), n("GoTop"), t._v(" "), n("PromotionWapSwiper"), t._v(" "), n("PromotionPCBanner"), t._v(" "), n("PromotionPCBottom"), t._v(" "), n("PromotionShareBottom"), t._v(" "), n("PromotionCzBottom", {
                "directives": [{
                    "name": "show",
                    "rawName": "v-show",
                    "value": !t.isSogouSearchApp,
                    "expression": "!isSogouSearchApp"
                }]
            }), t._v(" "), n("PromotionWbFooter"), t._v(" "), n("TranslateRecordDialog"), t._v(" "), n("FeedBack"), t._v(" "), n("Toast"), t._v(" "), n("AppDownload"), t._v(" "), n("LoginDiaLog"), t._v(" "), n("Docdownload"), t._v(" "), n("SelectionCard"), t._v(" "), n("Loading"), t._v(" "), n("TransModelPopup")], 1)
        }), [], !1, null, null, null).exports);

        function Te(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        var Ee = {
            "computed": function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Te(Object(n), !0).forEach((function (e) {
                        p()(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Te(Object(n)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }({}, Object(d.mapState)("writebook", ["showLoading"]))
        }, ke = Object(c.a)(Ee, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return this.showLoading ? e("div", {"staticClass": "writing-loading centered"}, [e("i"), this._v("正在加载...")]) : this._e()
        }), [], !1, null, null, null).exports, Pe = n(35);

        function xe(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Ie(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? xe(Object(n), !0).forEach((function (e) {
                    p()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : xe(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var je = {
            "computed": Ie({}, Object(d.mapState)("writebook", ["showDialog"])), "mounted": function () {
                this.NativeScheme = n(65)
            }, "methods": Ie(Ie({}, Object(d.mapMutations)("writebook", [y.m])), {}, {
                "cancel": function () {
                    k.a.send({
                        "type": "transcl",
                        "pbtype": "cl",
                        "uigs_cl": "writebook_dialog_close"
                    }), this[y.m](!1), this.$router.replace("/writebook/wapsearch?mark=1")
                }, "downloadApp": function () {
                    k.a.send({"type": "transcl", "pbtype": "cl", "uigs_cl": "writebook_dialog_certain"});
                    var t = this.$route.name;
                    this[y.m](!1);
                    var e = Pe.a.schemeURL(), n = Pe.a.iOSUrl(),
                        o = t && "wapsearch" === t ? Pe.a.apkUrl("wapsearch") : Pe.a.apkUrl();
                    this.NativeScheme.invokeApp({
                        "scheme": {"ios": e, "android": e},
                        "redirect": {"ios": n, "android": o},
                        "timeout": 2e3
                    })
                }
            })
        }, De = Object(c.a)(je, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.showDialog ? n("div", {"staticClass": "writing-bible-popup"}, [n("div", {"staticClass": "popup-box"}, [t._m(0), t._v(" "), n("div", {"staticClass": "popup-btn"}, [n("div", {"on": {"click": t.cancel}}, [t._v("取消")]), t._v(" "), n("div", {"on": {"click": t.downloadApp}}, [t._v("查看全部")])])])]) : t._e()
        }), [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {"staticClass": "popup-content"}, [e("p", [this._v("打开【搜狗翻译】APP")]), this._v(" "), e("p", [this._v("查看全部范文和押题")])])
        }], !1, null, null, null).exports, Le = {
            "data": function () {
                return {"routeName": "", "fr": ""}
            }, "created": function () {
                this.routeName = this.$route.name, this.fr = this.$route.query.fr
            }, "methods": {
                "goBack": function () {
                    "main" === this.routeName ? this.close() : this.$router.go(-1)
                }, "close": function () {
                    window.JSInvoker && window.JSInvoker.close()
                }
            }
        }, Ne = Object(c.a)(Le, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {"staticClass": "header-wap"}, [n("div", {
                "staticClass": "btn-back",
                "attrs": {"title": "返回"},
                "on": {"click": t.goBack}
            }), t._v(" "), "wapsearch" !== t.routeName && "wapSearch" !== t.fr ? n("div", {
                "staticClass": "btn-close",
                "attrs": {"title": "关闭"},
                "on": {"click": t.close}
            }) : t._e(), t._v(" "), n("h2", [t._v("写作宝典")])])
        }), [], !1, null, null, null).exports;

        function Re(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        var Ue = n(171), Be = {
            "created": function () {
                this.isfrWapSearch = "wapsearch" === this.$route.name
            }, "data": function () {
                return {"isfrWapSearch": "", "tickets": 0}
            }, "mounted": function () {
                this.Writing = n(87);
                var t = this;
                setTimeout((function () {
                    t.getUserTicket()
                }), 1e3)
            }, "computed": function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Re(Object(n), !0).forEach((function (e) {
                        p()(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Re(Object(n)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }({}, Object(d.mapState)("writebook", ["showBanner"])), "methods": {
                "getUserTicket": function () {
                    var t = this;
                    Pe.a.appGetUserId((function (e) {
                        var n = {"sguid": e};
                        n = JSON.stringify(n).replace(/^"|"$/g, ""), n = t.Writing.encrypt(n), L()({
                            "method": "POST",
                            "url": "".concat(w.WRITEBOOK_HOST, "/translateServer/marketing/getTickets"),
                            "dataType": "json",
                            "headers": {"Accept": "application/json"},
                            "data": {"cipherText": n}
                        }).then((function (e) {
                            var n = e.data.data, o = JSON.parse(Ue.decrypt(n)), r = B.a.lsGetItem("appTicket") || 0;
                            t.tickets = o.tickets > r ? parseInt(o.tickets) - parseInt(r) : 0, B.a.lsSetItem("appTicket", o.tickets)
                        }))
                    }))
                }, "jumpToMyShare": function () {
                    var t = this;
                    Pe.a.appGetUserId((function (e) {
                        e && e.length ? t.$router.push({"name": "sResult"}) : Pe.a.appJumpPhoneLogin((function (e) {
                            e && t.$router.push({"name": "sResult"})
                        })), k.a.send({
                            "type": "transcl",
                            "pbtype": "cl",
                            "uigs_cl": "writebook_unlockBtn_click",
                            "loginstatus": e ? 1 : 0
                        })
                    }))
                }
            }
        }, Me = Object(c.a)(Be, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {"class": [{"img-banner": !0}, {"special-banner": t.isfrWapSearch}]}, [t.isfrWapSearch ? o("div", {"staticClass": "logo-box"}, [o("i", {"staticClass": "sg"}), t._v(" "), o("i", {"staticClass": "xdf"})]) : t._e(), t._v(" "), t.isfrWapSearch ? o("img", {"attrs": {"src": n(388)}}) : o("img", {"attrs": {"src": n(389)}}), t._v(" "), t.isfrWapSearch ? t._e() : o("div", {
                "staticClass": "btn-unlock",
                "on": {"click": t.jumpToMyShare}
            }, [o("span", [t._v("解锁券")]), t._v(" "), t.tickets ? o("i", [t._v(t._s(t.tickets))]) : t._e()])])
        }), [], !1, null, null, null).exports;

        function Ge(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        var qe = {
            "data": function () {
                return {"showUpdate": !1}
            }, "computed": function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ge(Object(n), !0).forEach((function (e) {
                        p()(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ge(Object(n)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }({}, Object(d.mapState)(["CONFIG"])), "mounted": function () {
                var t = "wapsearch" === this.$route.name ? "wapsearch" : "writeBook";
                B.a.uigsInit({"pagetype": t, "uuid": this.CONFIG.uuid || T.a.get()})
            }, "components": {"ImgBanner": Me, "Toast": te.a, "Header": Ne, "Dialog": De, "Loading": ke}
        }, ze = (n(390), Object(c.a)(qe, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {"staticClass": "writing-bible page-fixed"}, [e("Header"), this._v(" "), e("ImgBanner"), this._v(" "), e("router-view"), this._v(" "), e("Toast"), this._v(" "), e("Dialog"), this._v(" "), e("Loading")], 1)
        }), [], !1, null, null, null).exports);
        a.a.use(ut.a);
        var He = n(170);
        try {
            n(174), n(175)
        } catch (t) {
            console.log(t)
        }
        n(176).polyfill(), a.a.prototype.$http = L.a.create(), a.a.mixin({
            "beforeRouteUpdate": function (t, e, n) {
                var o = this.$options.asyncData;
                o ? o({"store": this.$store, "route": t}).then(n).catch(n) : n()
            }
        });
        var Fe, Je, Qe, We = (Je = function (t) {
            var e;
            return new f.a.Store({
                "state": {
                    "fillDivShow": !1,
                    "psdModify": {"currentStep": 1, "scode": "", "username": ""},
                    "CONFIG": t || {},
                    "loginStatus": !0,
                    "isTranslateAppShare": !1,
                    "isSogouSearchApp": !1,
                    "isSogouBrowserApp": !1,
                    "isFromAITranslate": !1,
                    "isSogouInputTab": !1,
                    "isSogouInputMagnifier": !1,
                    "isSogouInputClipboard": !1,
                    "showFeedBack": !1,
                    "showPromotionCzTop": !1,
                    "showPromotionCzBottom": !0,
                    "showPromotionShareBottom": !1,
                    "showPromotionPopup": {"show": !1, "type": ""},
                    "showTransModelPopup": !1,
                    "showPromotionPCDownload": !1,
                    "showShareBomb": !1,
                    "shareData": null,
                    "showAppDownLoad": !1,
                    "showLoginDialog": !1,
                    "showLoading": {"show": !1},
                    "toast": {"show": !1, "text": "", "loading": !1},
                    "promotionCzTop": it,
                    "promotionCzBottom": at,
                    "promotionCzSetting": st,
                    "promotionCzMask": ct,
                    "indexWriting": !1,
                    "setting": !1,
                    "promotionIcon": 0,
                    "icon_img": "",
                    "historyAction": "",
                    "FrFlag": 0,
                    "top": 0,
                    "selectionGlobalShow": !0,
                    "selectionInfo": {"left": 0, "right": 0, "show": !1},
                    "isRefreshNav": !1,
                    "translateTabUrl": "",
                    "showPcDialog": !1,
                    "promotionList": ""
                },
                "mutations": (e = {}, p()(e, y.lb, (function (t, e) {
                    t = Object.assign(t, e)
                })), p()(e, y.Gb, (function (t, e) {
                    var n = e.uuid, o = e.ssrSwitch, r = e.transError, i = t.CONFIG;
                    i.uuid = n || t.CONFIG.uuid, i.isHitSsrSwitch = o || t.CONFIG.isHitSsrSwitch, i.transError = r || t.CONFIG.transError
                })), p()(e, y.Rb, (function (t, e) {
                    t.translateTabUrl = e
                })), p()(e, y.i, (function (t, e) {
                    t.fillDivShow = e
                })), p()(e, y.t, (function (t, e) {
                    t.isRefreshNav = e
                })), p()(e, y.Bb, (function (t, e) {
                    t.psdModify = e
                })), p()(e, y.G, (function (t, e) {
                    t.selectionGlobalShow = e
                })), p()(e, y.Fb, (function (t, e) {
                    t.selectionInfo = e
                })), p()(e, y.x, (function (t, e) {
                    t.showLoginDialog = e
                })), p()(e, y.g, (function (t, e) {
                    t.showAppDownLoad = e
                })), p()(e, y.q, (function (t, e) {
                    t.showFeedBack = e
                })), p()(e, y.B, (function (t, e) {
                    var n = e.showPromotionCzTop, o = e.showPromotionCzBottom, r = e.showPromotionShareBottom;
                    t.showPromotionCzTop = n, t.showPromotionCzBottom = o, t.showPromotionShareBottom = r
                })), p()(e, y.C, (function (t, e) {
                    t.showPromotionPCDownload = e
                })), p()(e, y.ib, (function (t, e) {
                    t.FrFlag += e
                })), p()(e, y.jb, (function (t, e) {
                    t.historyAction = e
                })), p()(e, y.f, (function (t, e) {
                    t.icon_img = e
                })), p()(e, y.D, (function (t, e) {
                    t.promotionIcon = e
                })), p()(e, y.w, (function (t, e) {
                    t.showLoading = e
                })), p()(e, y.M, (function (t, e) {
                    var n = e.show, o = e.text, r = e.loading;
                    t.toast = {"show": n, "text": o, "loading": r}
                })), p()(e, y.H, (function (t, e) {
                    t.setting = e
                })), p()(e, y.s, (function (t, e) {
                    t.indexWriting = e
                })), e),
                "actions": {
                    "updateURL": function (t, e) {
                        var o = t.commit, r = t.rootState, i = m.a.parse().query, a = r.translate, s = r.language,
                            c = a.query.trim(), l = a.transModel.val, u = e.action, p = e.isSame, d = this.state.FrFlag;
                        if (c = c.length <= 400 ? c : c.substring(0, 400), i.text && delete i.text, i.query && delete i.query, i.from = s.from === w.AUTO_DETECT ? "auto" : s.from, i.to = s.to, i.keyword = c, i.transfrom = i.from, i.transto = i.to, i.model = l, delete i.tab, ["from", "to"].forEach((function (t) {
                            delete i[t]
                        })), "clear" !== u) {
                            if (delete i.activeTab, "function" == typeof history.replaceState || "function" == typeof history.pushState) {
                                i.fr && 0 === d ? (o(y.ib, 1), history.replaceState("", document.title, "?".concat(m.a.params(i)))) : p ? history.replaceState("", document.title, "?".concat(m.a.params(i))) : history.pushState(c, document.title, "?".concat(m.a.params(i)));
                                var f = i.keyword, h = void 0 === f ? "" : f, g = i.transfrom,
                                    v = void 0 === g ? "" : g, _ = i.transto, b = void 0 === _ ? "" : _;
                                o(y.Rb, {"keyword": h, "transfrom": v, "transto": b}), n.e(1).then(function () {
                                    n(450).updateWXQQShare({"query": c})
                                }.bind(null, n)).catch(n.oe)
                            }
                        } else ["keyword"].forEach((function (t) {
                            delete i[t]
                        }))
                    }, "postMessage": function (t, e) {
                        t.rootState.isSogouInputTab && e && window.parent !== window.self && (e.type = "SOGOU_INPUT_TAB", e.iframeH = Math.max(document.querySelector("#translateIndex").clientHeight, document.documentElement.clientHeight, document.body.clientHeight), window.parent.postMessage(e, "*"))
                    }, "updateFrInfo": function (t, e) {
                        var n = t.rootState, o = n.CONFIG.ua, r = (e || {}).fr, i = "share_transapp_result" === r,
                            a = "sogousearchapp" === r && /SogouSearch/gi.test(o),
                            s = /^mobile_sogoubrowser(?:_ios|_android)?$/.test(r),
                            c = /\s+com\.sogou\.websearch\//g.test(o), l = s || c, u = "sogou_input_tab" === r,
                            p = "sogou_input_magnifier" === r, d = "sogou_input_clipboard" === r;
                        Object.assign(n, {
                            "isTranslateAppShare": i,
                            "isSogouSearchApp": a,
                            "isSogouBrowserApp": s,
                            "isFromAITranslate": l,
                            "isSogouInputTab": u,
                            "isSogouInputMagnifier": p,
                            "isSogouInputClipboard": d
                        })
                    }, "stopBodyScroll": function (t, e) {
                        var n = t.rootState, o = document.querySelector(".page").style;
                        e ? (n.top = window.scrollY, o.position = "fixed", o.top = -n.top + "px") : (o.position = "", o.top = "", window.scrollTo(0, n.top))
                    }, "updateConfig": function (t, e) {
                        var n = t.commit, o = e.uuid, r = e.ssrSwitch, i = e.transError;
                        n(y.Gb, {"uuid": o, "ssrSwitch": r, "transError": i})
                    }
                },
                "modules": {
                    "language": _,
                    "translate": H,
                    "voice": X,
                    "download": Z,
                    "doctrans": et,
                    "writing": nt,
                    "writebook": ot
                }
            })
        }(Fe), Qe = new ut.a({
            "mode": "history",
            "fallback": !1,
            "routes": [{
                "title": "文本翻译",
                "path": "/",
                "component": Ce,
                "children": [{
                    "path": "/", "name": "text", "component": function () {
                        return Promise.all([n.e(0), n.e(16)]).then(n.bind(null, 454))
                    }
                }, {
                    "path": "/document", "name": "document", "component": function () {
                        return Promise.all([n.e(0), n.e(10)]).then(n.bind(null, 456))
                    }
                }, {
                    "path": "/writing", "name": "writing", "component": function () {
                        return n.e(20).then(n.bind(null, 455))
                    }
                }]
            }, {
                "title": "我的收藏", "path": "/user/favorite", "name": "favorite", "component": function () {
                    return n.e(11).then(n.bind(null, 459))
                }
            }, {
                "title": "我的文档", "path": "/user/document/record", "name": "docRecord", "component": function () {
                    return Promise.all([n.e(0), n.e(9)]).then(n.bind(null, 460))
                }
            }, {
                "title": "文档预览", "path": "/user/document/preview", "name": "docPreview", "component": function () {
                    return Promise.all([n.e(0), n.e(8)]).then(n.bind(null, 461))
                }
            }, {
                "title": "书影音", "path": "/bookPage", "name": "bookPage", "component": function () {
                    return n.e(7).then(n.bind(null, 462))
                }
            }, {
                "props": !0, "path": "/download/wap/:stype", "component": function () {
                    return n.e(18).then(n.bind(null, 463))
                }
            }, {
                "props": !0, "path": "/download/pc/:stype", "component": function () {
                    return n.e(19).then(n.bind(null, 464))
                }
            }, {
                "title": "jump", "path": "/jump", "component": function () {
                    return n.e(13).then(n.bind(null, 465))
                }
            }, {
                "title": "密码重置", "path": "/reset", "component": function () {
                    return n.e(15).then(n.bind(null, 457))
                }
            }, {
                "title": "feed流", "path": "/feedId/:feedid", "component": function () {
                    return Promise.all([n.e(0), n.e(12)]).then(n.bind(null, 445))
                }
            }, {
                "title": "用户手册", "path": "/app/userAgreement", "name": "userAgreement", "component": function () {
                    return n.e(5).then(n.bind(null, 466))
                }
            }, {
                "title": "个人隐私", "path": "/app/privacyPolicy", "name": "privacyPolicy", "component": function () {
                    return n.e(14).then(n.bind(null, 467))
                }
            }, {
                "title": "写作宝典",
                "path": "/writebook",
                "component": ze,
                "children": [{
                    "path": ":type/:tab", "name": "main", "component": function () {
                        return Promise.all([n.e(0), n.e(21)]).then(n.bind(null, 458))
                    }
                }, {
                    "title": "写作宝典大搜页面", "path": "wapsearch", "name": "wapsearch", "component": function () {
                        return Promise.all([n.e(0), n.e(22)]).then(n.bind(null, 468))
                    }
                }]
            }, {"path": "*", "redirect": "/"}]
        }), Object(He.sync)(Je, Qe), {
            "app": new a.a({
                "router": Qe, "store": Je, "render": function (t) {
                    return t(l)
                }
            }), "router": Qe, "store": Je
        }), Ve = We.app, $e = We.router, Ye = We.store;
        window.__INITIAL_STATE__ && Ye.replaceState(window.__INITIAL_STATE__), $e.onReady((function () {
            $e.beforeResolve((function (t, e, n) {
                if (1 === t.query.isclient) return n();
                var o = $e.getMatchedComponents(t), r = $e.getMatchedComponents(e), i = !1,
                    a = o.filter((function (t, e) {
                        return i || (i = r[e] !== t)
                    })).map((function (t) {
                        return t.asyncData
                    })).filter((function (t) {
                        return t
                    }));
                if (!a.length) return n();
                Promise.all(a.map((function (e) {
                    return e({"store": Ye, "route": t})
                }))).then((function () {
                    n()
                })).catch(n)
            })), Ve.$mount("#app")
        }))
    }, "51": function (t, e, n) {
        "use strict";
        var o = n(7);
        e.a = {
            "init": function (t) {
                var e = Object.assign({}, {
                    "id": "translate_audio",
                    "activeClass": "play",
                    "isOn": !1,
                    "loop": !1,
                    "target": "",
                    "src": ""
                }, t);
                this.timerSum = 1, this.opts = e;
                var n = this.__prev__ || {}, o = n.target, r = n.loop;
                return o && (r && this.timer && (window.clearTimeout(this.timer), delete this.timer), this.toggleActive(!1), this.destroy(), delete this.__prev__, o === e.target) || e.target && (this.isActive() && !e.isApp || this.create().toggleActive(!0)), this
            }, "create": function () {
                var t, e, n = this, r = n.opts;
                return t = document.createElement("audio"), e = document.createElement("source"), t.id = r.id, t.style.cssText = "height:0", e.type = "audio/mpeg", e.src = r.src, t.appendChild(e), document.body.appendChild(t), n._canPlayHandler = function () {
                    e.currentTime = 0, t.play()
                }, n._endedHandler = function (e) {
                    "ended" === e.type && r.loop ? n.timer = setTimeout((function () {
                        t.src = r.src, t.play(), n.timerSum++, n.timerSum >= o.MAX_VOICE_LOOP && (r.loop = !1), clearTimeout(n.timer), n.timer = null
                    }), 1e3) : (n.toggleActive(!1), n.destroy(), n.__prev__ = null)
                }, t.addEventListener("canplay", n._canPlayHandler), t.addEventListener("ended", n._endedHandler), t.addEventListener("error", n._endedHandler), n.toggleActive(!0), t.play(), n.__prev__ = r, this
            }, "destroy": function () {
                var t, e, n = this.opts;
                n && (this.toggleActive(!1), (t = document.querySelector("#".concat(n.id))) && (n.loop && this.timer && (window.clearTimeout(this.timer), delete this.timer), e = t.querySelector("source"), t.pause && t.pause(), e.src = "", t.removeChild(e), document.body.removeChild(t), t.removeEventListener("canplay", this._canPlayHandler), t.removeEventListener("ended", this._endedHandler), t = e = null))
            }, "toggleActive": function (t) {
                var e = this.opts, n = e.activeClass, o = e.target, r = new RegExp("\\s+" + n, "g");
                if (t) o && !r.test(o.className) && (o.className += " " + n); else {
                    var i = this.__prev__ && this.__prev__.target;
                    i && (i.className = i.className.replace(r, ""))
                }
                return this
            }, "isActive": function () {
                var t = this.opts, e = t.activeClass, n = t.target;
                return new RegExp(e, "g").test(n && n.className)
            }
        }
    }, "6": function (t, e, n) {
        var o = n(4), r = n(7).CK_KEY_SUV, i = {
            "ieClassToggle": function (t) {
                var e = window.navigator.userAgent;
                (document.documentMode || +(e.match(/MSIE (\d+)/) && RegExp.$1) || e.match(/mqbhd/gi)) && -1 !== ["/", "/document", "/writing"].indexOf(t) || this.removeClass(document.body, "fixIE")
            }, "removeElement": function (t) {
                var e = t.parentNode;
                e && e.removeChild(t)
            }, "terminalJudge": function () {
                var t = window.navigator.userAgent.toLowerCase(),
                    e = RegExp(/iphone|symbianos|android|windows phone|ipod/);
                return t.match(e) || window.innerWidth <= 820 ? "wap" : "web"
            }, "toggleTip": function () {
                if ("web" === i.terminalJudge()) for (var t, e = document.querySelectorAll("[data-tooltip]"), n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.addEventListener("mouseenter", (function () {
                        if (0 === document.querySelectorAll(".tooltip").length) {
                            var e = this.getBoundingClientRect();
                            (t = document.createElement("span")).className = "tooltip", t.textContent = i.getDataset(this).tooltip, document.body.appendChild(t);
                            var n = window.scrollX || window.pageXOffset, o = window.scrollY || window.pageYOffset;
                            t.style.left = e.left + n - (t.clientWidth - this.clientWidth) / 2 + "px", t.style.top = e.top + o - t.clientHeight - 10 + "px"
                        }
                    })), o.addEventListener("mouseleave", (function () {
                        t && i.removeElement(t)
                    }))
                }
            }, "sendApprove": function (t, e) {
                (new Image).src = "/approve?uuid=" + encodeURIComponent(t) + "&token=" + encodeURIComponent(e)
            }, "getParentTag": function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return t instanceof HTMLElement ? t.parentElement && "BODY" !== t.parentElement.nodeName ? (e.push(t.parentElement.className), i.getParentTag(t.parentElement, e)) : e : console.error("receive only HTMLElement")
            }, "uigsInit": function (t) {
                var e = t.pagetype, a = t.uuid, s = n(50), c = n(13), l = 1,
                    u = /(msie\s|trident.*rv:)([\w.]+)/.exec(window.navigator.userAgent.toLowerCase());
                null !== u && (l = (parseInt(u[2]) || 0) < 10 ? 0 : 1);
                var p = s.get(r), d = new Date;
                p || (p = d.getTime(), d.setTime(p + 31536e6), s.set(r, p, d)), o.init({
                    "uigs_productid": "vs_web",
                    "vstype": "translate",
                    "snuid": "" === s.get("SNUID") ? null : s.get("SNUID"),
                    "terminal": i.terminalJudge(),
                    "pagetype": e,
                    "pbtype": "pv",
                    "uuid": a,
                    "fr": c.parse().query.fr || "default",
                    "onerror": !0,
                    "wuid": p,
                    "t_overIe10": l,
                    "abtest": s.get("ABTEST").split("|")[0] || null
                })
            }, "appendPassportJs": function () {
                if ("web" === i.terminalJudge() && !document.getElementById("passport")) {
                    var t = document.createElement("script");
                    t.id = "passport", t.type = "text/javascript", t.src = "//account.sogou.com/static/api/passport_cb.js", document.body.appendChild(t)
                }
            }, "getSelection": function () {
                var t = "";
                if (window.getSelection) {
                    var e = document.activeElement;
                    t = !e || "TEXTAREA" !== e.nodeName && "INPUT" !== e.nodeName ? window.getSelection() : e.value.substring(e.selectionStart, e.selectionEnd)
                } else document.getSelection ? t = document.getSelection() : document.selection && (t = document.selection.createRange().text);
                return t.toString().replace(/^\s+/g, "").replace(/\s+$/g, "")
            }, "removeSelection": function () {
                window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection && document.getSelection.empty ? document.getSelection().empty() : document.selection && document.selection.empty && document.selection.empty()
            }, "lsSetItem": function (t, e) {
                var n = [];
                if (window.localStorage) try {
                    n = window.localStorage.setItem(t, e)
                } catch (t) {
                    n = []
                }
                return n
            }, "lsGetItem": function (t) {
                var e = [];
                if (window.localStorage) try {
                    e = window.localStorage.getItem(t).replace(/[\s]{2,}/g, "")
                } catch (t) {
                    e = []
                }
                return e
            }, "lsRemoveItem": function (t) {
                return window.localStorage && window.localStorage.removeItem(t)
            }, "getDataset": function (t) {
                if (t.dataset) return t.dataset;
                for (var e, n = t.attributes, o = {}, r = 0; r < n.length; r++) (e = n[r].name.match(/^data-(.+)/)) && (o[e[1].replace(/-([\da-z])/gi, (function (t, e) {
                    return e.toUpperCase()
                }))] = n[r].value);
                return o
            }, "hasClass": function (t, e) {
                return !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
            }, "addClass": function (t, e) {
                i.hasClass(t, e) || (t.className += " " + e)
            }, "removeClass": function (t, e) {
                i.hasClass(t, e) && (t.className = t.className.replace(new RegExp("(\\s|^)" + e + "(\\s|$)"), " "))
            }, "urlParams": function (t) {
                var e = [];
                for (var n in t) e.push(n + "=" + encodeURIComponent(t[n]));
                return e.join("&")
            }, "wordStatic": function (t) {
                var e = t.trim();
                if (!e) return 0;
                var n = 0,
                    o = (e = (e = (e = e.replace(/[\u4e00-\u9fa5]+/g, " ").trim()).replace(/\n|\r|^\s+$/gi, "")).replace(/\s+/gi, " ")).match(/\s/g);
                return o ? n = o.length + 1 : e && (n = 1), n
            }, "getRandomNum": function (t, e) {
                var n = "";
                switch (arguments.length) {
                    case 1:
                        n = parseInt(Math.random() * t + 1, 10);
                        break;
                    case 2:
                        n = parseInt(Math.random() * (e - t + 1) + t, 10);
                        break;
                    default:
                        n = 0
                }
                return n
            }
        };
        t.exports = i
    }, "66": function (t, e, n) {
        "use strict";
        var o = n(1), r = n.n(o), i = n(0), a = n(2);

        function s(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(n), !0).forEach((function (e) {
                    r()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var l = {
            "computed": c({}, Object(a.mapState)(["toast"])), "watch": {
                "toast": {
                    "handler": function (t) {
                        var e = this;
                        if (t.show && !t.loading) var n = window.setTimeout((function () {
                            e[i.M]({"show": !1, "text": ""}), n && window.clearTimeout(n)
                        }), 2e3)
                    }, "immediate": !0, "deep": !0
                }
            }, "methods": c({}, Object(a.mapMutations)([i.M]))
        }, u = n(5), p = Object(u.a)(l, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return this.toast.show ? e("div", {"class": this.toast.loading ? "toast toast-loading" : "toast"}, [this._v(this._s(this.toast.text))]) : this._e()
        }), [], !1, null, null, null);
        e.a = p.exports
    }, "67": function (t, e) {
        var n, o, r = r || function (t, e) {
            var n = {}, o = n.lib = {}, r = function () {
            }, i = o.Base = {
                "extend": function (t) {
                    r.prototype = this;
                    var e = new r;
                    return t && e.mixIn(t), e.hasOwnProperty("init") || (e.init = function () {
                        e.$super.init.apply(this, arguments)
                    }), e.init.prototype = e, e.$super = this, e
                }, "create": function () {
                    var t = this.extend();
                    return t.init.apply(t, arguments), t
                }, "init": function () {
                }, "mixIn": function (t) {
                    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                    t.hasOwnProperty("toString") && (this.toString = t.toString)
                }, "clone": function () {
                    return this.init.prototype.extend(this)
                }
            }, a = o.WordArray = i.extend({
                "init": function (t, e) {
                    t = this.words = t || [], this.sigBytes = void 0 !== e ? e : 4 * t.length
                }, "toString": function (t) {
                    return (t || c).stringify(this)
                }, "concat": function (t) {
                    var e = this.words, n = t.words, o = this.sigBytes;
                    if (t = t.sigBytes, this.clamp(), o % 4) for (var r = 0; r < t; r++) e[o + r >>> 2] |= (n[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (o + r) % 4 * 8; else if (65535 < n.length) for (r = 0; r < t; r += 4) e[o + r >>> 2] = n[r >>> 2]; else e.push.apply(e, n);
                    return this.sigBytes += t, this
                }, "clamp": function () {
                    var e = this.words, n = this.sigBytes;
                    e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, e.length = t.ceil(n / 4)
                }, "clone": function () {
                    var t = i.clone.call(this);
                    return t.words = this.words.slice(0), t
                }, "random": function (e) {
                    for (var n = [], o = 0; o < e; o += 4) n.push(4294967296 * t.random() | 0);
                    return new a.init(n, e)
                }
            }), s = n.enc = {}, c = s.Hex = {
                "stringify": function (t) {
                    var e = t.words;
                    t = t.sigBytes;
                    for (var n = [], o = 0; o < t; o++) {
                        var r = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        n.push((r >>> 4).toString(16)), n.push((15 & r).toString(16))
                    }
                    return n.join("")
                }, "parse": function (t) {
                    for (var e = t.length, n = [], o = 0; o < e; o += 2) n[o >>> 3] |= parseInt(t.substr(o, 2), 16) << 24 - o % 8 * 4;
                    return new a.init(n, e / 2)
                }
            }, l = s.Latin1 = {
                "stringify": function (t) {
                    var e = t.words;
                    t = t.sigBytes;
                    for (var n = [], o = 0; o < t; o++) n.push(String.fromCharCode(e[o >>> 2] >>> 24 - o % 4 * 8 & 255));
                    return n.join("")
                }, "parse": function (t) {
                    for (var e = t.length, n = [], o = 0; o < e; o++) n[o >>> 2] |= (255 & t.charCodeAt(o)) << 24 - o % 4 * 8;
                    return new a.init(n, e)
                }
            }, u = s.Utf8 = {
                "stringify": function (t) {
                    try {
                        return decodeURIComponent(escape(l.stringify(t)))
                    } catch (t) {
                        throw Error("Malformed UTF-8 data")
                    }
                }, "parse": function (t) {
                    return l.parse(unescape(encodeURIComponent(t)))
                }
            }, p = o.BufferedBlockAlgorithm = i.extend({
                "reset": function () {
                    this._data = new a.init, this._nDataBytes = 0
                }, "_append": function (t) {
                    "string" == typeof t && (t = u.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                }, "_process": function (e) {
                    var n = this._data, o = n.words, r = n.sigBytes, i = this.blockSize, s = r / (4 * i);
                    if (e = (s = e ? t.ceil(s) : t.max((0 | s) - this._minBufferSize, 0)) * i, r = t.min(4 * e, r), e) {
                        for (var c = 0; c < e; c += i) this._doProcessBlock(o, c);
                        c = o.splice(0, e), n.sigBytes -= r
                    }
                    return new a.init(c, r)
                }, "clone": function () {
                    var t = i.clone.call(this);
                    return t._data = this._data.clone(), t
                }, "_minBufferSize": 0
            });
            o.Hasher = p.extend({
                "cfg": i.extend(), "init": function (t) {
                    this.cfg = this.cfg.extend(t), this.reset()
                }, "reset": function () {
                    p.reset.call(this), this._doReset()
                }, "update": function (t) {
                    return this._append(t), this._process(), this
                }, "finalize": function (t) {
                    return t && this._append(t), this._doFinalize()
                }, "blockSize": 16, "_createHelper": function (t) {
                    return function (e, n) {
                        return new t.init(n).finalize(e)
                    }
                }, "_createHmacHelper": function (t) {
                    return function (e, n) {
                        return new d.HMAC.init(t, n).finalize(e)
                    }
                }
            });
            var d = n.algo = {};
            return n
        }(Math);
        o = (n = r).lib.WordArray, n.enc.Base64 = {
            "stringify": function (t) {
                var e = t.words, n = t.sigBytes, o = this._map;
                t.clamp(), t = [];
                for (var r = 0; r < n; r += 3) for (var i = (e[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (e[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | e[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, a = 0; 4 > a && r + .75 * a < n; a++) t.push(o.charAt(i >>> 6 * (3 - a) & 63));
                if (e = o.charAt(64)) for (; t.length % 4;) t.push(e);
                return t.join("")
            }, "parse": function (t) {
                var e = t.length, n = this._map;
                (r = n.charAt(64)) && -1 !== (r = t.indexOf(r)) && (e = r);
                for (var r = [], i = 0, a = 0; a < e; a++) if (a % 4) {
                    var s = n.indexOf(t.charAt(a - 1)) << a % 4 * 2, c = n.indexOf(t.charAt(a)) >>> 6 - a % 4 * 2;
                    r[i >>> 2] |= (s | c) << 24 - i % 4 * 8, i++
                }
                return o.create(r, i)
            }, "_map": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }, function (t) {
            function e(t, e, n, o, r, i, a) {
                return ((t = t + (e & n | ~e & o) + r + a) << i | t >>> 32 - i) + e
            }

            function n(t, e, n, o, r, i, a) {
                return ((t = t + (e & o | n & ~o) + r + a) << i | t >>> 32 - i) + e
            }

            function o(t, e, n, o, r, i, a) {
                return ((t = t + (e ^ n ^ o) + r + a) << i | t >>> 32 - i) + e
            }

            function i(t, e, n, o, r, i, a) {
                return ((t = t + (n ^ (e | ~o)) + r + a) << i | t >>> 32 - i) + e
            }

            for (var a = r, s = (l = a.lib).WordArray, c = l.Hasher, l = a.algo, u = [], p = 0; 64 > p; p++) u[p] = 4294967296 * t.abs(t.sin(p + 1)) | 0;
            l = l.MD5 = c.extend({
                "_doReset": function () {
                    this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878])
                }, "_doProcessBlock": function (t, r) {
                    for (var a = 0; 16 > a; a++) {
                        var s = t[c = r + a];
                        t[c] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                    }
                    a = this._hash.words;
                    var c = t[r + 0], l = (s = t[r + 1], t[r + 2]), p = t[r + 3], d = t[r + 4], f = t[r + 5],
                        h = t[r + 6], m = t[r + 7], g = t[r + 8], v = t[r + 9], y = t[r + 10], w = t[r + 11],
                        _ = t[r + 12], b = t[r + 13], O = t[r + 14], S = t[r + 15],
                        A = e(A = a[0], E = a[1], T = a[2], C = a[3], c, 7, u[0]), C = e(C, A, E, T, s, 12, u[1]),
                        T = e(T, C, A, E, l, 17, u[2]), E = e(E, T, C, A, p, 22, u[3]);
                    A = e(A, E, T, C, d, 7, u[4]), C = e(C, A, E, T, f, 12, u[5]), T = e(T, C, A, E, h, 17, u[6]), E = e(E, T, C, A, m, 22, u[7]), A = e(A, E, T, C, g, 7, u[8]), C = e(C, A, E, T, v, 12, u[9]), T = e(T, C, A, E, y, 17, u[10]), E = e(E, T, C, A, w, 22, u[11]), A = e(A, E, T, C, _, 7, u[12]), C = e(C, A, E, T, b, 12, u[13]), T = e(T, C, A, E, O, 17, u[14]), A = n(A, E = e(E, T, C, A, S, 22, u[15]), T, C, s, 5, u[16]), C = n(C, A, E, T, h, 9, u[17]), T = n(T, C, A, E, w, 14, u[18]), E = n(E, T, C, A, c, 20, u[19]), A = n(A, E, T, C, f, 5, u[20]), C = n(C, A, E, T, y, 9, u[21]), T = n(T, C, A, E, S, 14, u[22]), E = n(E, T, C, A, d, 20, u[23]), A = n(A, E, T, C, v, 5, u[24]), C = n(C, A, E, T, O, 9, u[25]), T = n(T, C, A, E, p, 14, u[26]), E = n(E, T, C, A, g, 20, u[27]), A = n(A, E, T, C, b, 5, u[28]), C = n(C, A, E, T, l, 9, u[29]), T = n(T, C, A, E, m, 14, u[30]), A = o(A, E = n(E, T, C, A, _, 20, u[31]), T, C, f, 4, u[32]), C = o(C, A, E, T, g, 11, u[33]), T = o(T, C, A, E, w, 16, u[34]), E = o(E, T, C, A, O, 23, u[35]), A = o(A, E, T, C, s, 4, u[36]), C = o(C, A, E, T, d, 11, u[37]), T = o(T, C, A, E, m, 16, u[38]), E = o(E, T, C, A, y, 23, u[39]), A = o(A, E, T, C, b, 4, u[40]), C = o(C, A, E, T, c, 11, u[41]), T = o(T, C, A, E, p, 16, u[42]), E = o(E, T, C, A, h, 23, u[43]), A = o(A, E, T, C, v, 4, u[44]), C = o(C, A, E, T, _, 11, u[45]), T = o(T, C, A, E, S, 16, u[46]), A = i(A, E = o(E, T, C, A, l, 23, u[47]), T, C, c, 6, u[48]), C = i(C, A, E, T, m, 10, u[49]), T = i(T, C, A, E, O, 15, u[50]), E = i(E, T, C, A, f, 21, u[51]), A = i(A, E, T, C, _, 6, u[52]), C = i(C, A, E, T, p, 10, u[53]), T = i(T, C, A, E, y, 15, u[54]), E = i(E, T, C, A, s, 21, u[55]), A = i(A, E, T, C, g, 6, u[56]), C = i(C, A, E, T, S, 10, u[57]), T = i(T, C, A, E, h, 15, u[58]), E = i(E, T, C, A, b, 21, u[59]), A = i(A, E, T, C, d, 6, u[60]), C = i(C, A, E, T, w, 10, u[61]), T = i(T, C, A, E, l, 15, u[62]), E = i(E, T, C, A, v, 21, u[63]);
                    a[0] = a[0] + A | 0, a[1] = a[1] + E | 0, a[2] = a[2] + T | 0, a[3] = a[3] + C | 0
                }, "_doFinalize": function () {
                    var e = this._data, n = e.words, o = 8 * this._nDataBytes, r = 8 * e.sigBytes;
                    n[r >>> 5] |= 128 << 24 - r % 32;
                    var i = t.floor(o / 4294967296);
                    for (n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), e.sigBytes = 4 * (n.length + 1), this._process(), n = (e = this._hash).words, o = 0; 4 > o; o++) r = n[o], n[o] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                    return e
                }, "clone": function () {
                    var t = c.clone.call(this);
                    return t._hash = this._hash.clone(), t
                }
            }), a.MD5 = c._createHelper(l), a.HmacMD5 = c._createHmacHelper(l)
        }(Math), function () {
            var t, e = r, n = (t = e.lib).Base, o = t.WordArray, i = (t = e.algo).EvpKDF = n.extend({
                "cfg": n.extend({"keySize": 4, "hasher": t.MD5, "iterations": 1}),
                "init": function (t) {
                    this.cfg = this.cfg.extend(t)
                },
                "compute": function (t, e) {
                    for (var n = (s = this.cfg).hasher.create(), r = o.create(), i = r.words, a = s.keySize, s = s.iterations; i.length < a;) {
                        c && n.update(c);
                        var c = n.update(t).finalize(e);
                        n.reset();
                        for (var l = 1; l < s; l++) c = n.finalize(c), n.reset();
                        r.concat(c)
                    }
                    return r.sigBytes = 4 * a, r
                }
            });
            e.EvpKDF = function (t, e, n) {
                return i.create(n).compute(t, e)
            }
        }(), r.lib.Cipher || function (t) {
            var e = (h = r).lib, n = e.Base, o = e.WordArray, i = e.BufferedBlockAlgorithm, a = h.enc.Base64,
                s = h.algo.EvpKDF, c = e.Cipher = i.extend({
                    "cfg": n.extend(),
                    "createEncryptor": function (t, e) {
                        return this.create(this._ENC_XFORM_MODE, t, e)
                    },
                    "createDecryptor": function (t, e) {
                        return this.create(this._DEC_XFORM_MODE, t, e)
                    },
                    "init": function (t, e, n) {
                        this.cfg = this.cfg.extend(n), this._xformMode = t, this._key = e, this.reset()
                    },
                    "reset": function () {
                        i.reset.call(this), this._doReset()
                    },
                    "process": function (t) {
                        return this._append(t), this._process()
                    },
                    "finalize": function (t) {
                        return t && this._append(t), this._doFinalize()
                    },
                    "keySize": 4,
                    "ivSize": 4,
                    "_ENC_XFORM_MODE": 1,
                    "_DEC_XFORM_MODE": 2,
                    "_createHelper": function (t) {
                        return {
                            "encrypt": function (e, n, o) {
                                return ("string" == typeof n ? m : f).encrypt(t, e, n, o)
                            }, "decrypt": function (e, n, o) {
                                return ("string" == typeof n ? m : f).decrypt(t, e, n, o)
                            }
                        }
                    }
                });
            e.StreamCipher = c.extend({
                "_doFinalize": function () {
                    return this._process(!0)
                }, "blockSize": 1
            });
            var l = h.mode = {}, u = function (t, e, n) {
                var o = this._iv;
                o ? this._iv = void 0 : o = this._prevBlock;
                for (var r = 0; r < n; r++) t[e + r] ^= o[r]
            }, p = (e.BlockCipherMode = n.extend({
                "createEncryptor": function (t, e) {
                    return this.Encryptor.create(t, e)
                }, "createDecryptor": function (t, e) {
                    return this.Decryptor.create(t, e)
                }, "init": function (t, e) {
                    this._cipher = t, this._iv = e
                }
            })).extend();
            p.Encryptor = p.extend({
                "processBlock": function (t, e) {
                    var n = this._cipher, o = n.blockSize;
                    u.call(this, t, e, o), n.encryptBlock(t, e), this._prevBlock = t.slice(e, e + o)
                }
            }), p.Decryptor = p.extend({
                "processBlock": function (t, e) {
                    var n = this._cipher, o = n.blockSize, r = t.slice(e, e + o);
                    n.decryptBlock(t, e), u.call(this, t, e, o), this._prevBlock = r
                }
            }), l = l.CBC = p, p = (h.pad = {}).Pkcs7 = {
                "pad": function (t, e) {
                    for (var n, r = (n = (n = 4 * e) - t.sigBytes % n) << 24 | n << 16 | n << 8 | n, i = [], a = 0; a < n; a += 4) i.push(r);
                    n = o.create(i, n), t.concat(n)
                }, "unpad": function (t) {
                    t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2]
                }
            }, e.BlockCipher = c.extend({
                "cfg": c.cfg.extend({"mode": l, "padding": p}), "reset": function () {
                    c.reset.call(this);
                    var t = (e = this.cfg).iv, e = e.mode;
                    if (this._xformMode === this._ENC_XFORM_MODE) var n = e.createEncryptor; else n = e.createDecryptor, this._minBufferSize = 1;
                    this._mode = n.call(e, this, t && t.words)
                }, "_doProcessBlock": function (t, e) {
                    this._mode.processBlock(t, e)
                }, "_doFinalize": function () {
                    var t = this.cfg.padding;
                    if (this._xformMode === this._ENC_XFORM_MODE) {
                        t.pad(this._data, this.blockSize);
                        var e = this._process(!0)
                    } else e = this._process(!0), t.unpad(e);
                    return e
                }, "blockSize": 4
            });
            var d = e.CipherParams = n.extend({
                "init": function (t) {
                    this.mixIn(t)
                }, "toString": function (t) {
                    return (t || this.formatter).stringify(this)
                }
            }), f = (l = (h.format = {}).OpenSSL = {
                "stringify": function (t) {
                    var e = t.ciphertext;
                    return ((t = t.salt) ? o.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(a)
                }, "parse": function (t) {
                    var e = (t = a.parse(t)).words;
                    if (1398893684 === e[0] && 1701076831 === e[1]) {
                        var n = o.create(e.slice(2, 4));
                        e.splice(0, 4), t.sigBytes -= 16
                    }
                    return d.create({"ciphertext": t, "salt": n})
                }
            }, e.SerializableCipher = n.extend({
                "cfg": n.extend({"format": l}), "encrypt": function (t, e, n, o) {
                    o = this.cfg.extend(o);
                    var r = t.createEncryptor(n, o);
                    return e = r.finalize(e), r = r.cfg, d.create({
                        "ciphertext": e,
                        "key": n,
                        "iv": r.iv,
                        "algorithm": t,
                        "mode": r.mode,
                        "padding": r.padding,
                        "blockSize": t.blockSize,
                        "formatter": o.format
                    })
                }, "decrypt": function (t, e, n, o) {
                    return o = this.cfg.extend(o), e = this._parse(e, o.format), t.createDecryptor(n, o).finalize(e.ciphertext)
                }, "_parse": function (t, e) {
                    return "string" == typeof t ? e.parse(t, this) : t
                }
            })), h = (h.kdf = {}).OpenSSL = {
                "execute": function (t, e, n, r) {
                    return r || (r = o.random(8)), t = s.create({"keySize": e + n}).compute(t, r), n = o.create(t.words.slice(e), 4 * n), t.sigBytes = 4 * e, d.create({
                        "key": t,
                        "iv": n,
                        "salt": r
                    })
                }
            }, m = e.PasswordBasedCipher = f.extend({
                "cfg": f.cfg.extend({"kdf": h}), "encrypt": function (t, e, n, o) {
                    return n = (o = this.cfg.extend(o)).kdf.execute(n, t.keySize, t.ivSize), o.iv = n.iv, (t = f.encrypt.call(this, t, e, n.key, o)).mixIn(n), t
                }, "decrypt": function (t, e, n, o) {
                    return o = this.cfg.extend(o), e = this._parse(e, o.format), n = o.kdf.execute(n, t.keySize, t.ivSize, e.salt), o.iv = n.iv, f.decrypt.call(this, t, e, n.key, o)
                }
            })
        }(), function () {
            for (var t = r, e = t.lib.BlockCipher, n = t.algo, o = [], i = [], a = [], s = [], c = [], l = [], u = [], p = [], d = [], f = [], h = [], m = 0; 256 > m; m++) h[m] = 128 > m ? m << 1 : m << 1 ^ 283;
            var g = 0, v = 0;
            for (m = 0; 256 > m; m++) {
                var y = (y = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4) >>> 8 ^ 255 & y ^ 99;
                o[g] = y, i[y] = g;
                var w = h[g], _ = h[w], b = h[_], O = 257 * h[y] ^ 16843008 * y;
                a[g] = O << 24 | O >>> 8, s[g] = O << 16 | O >>> 16, c[g] = O << 8 | O >>> 24, l[g] = O, O = 16843009 * b ^ 65537 * _ ^ 257 * w ^ 16843008 * g, u[y] = O << 24 | O >>> 8, p[y] = O << 16 | O >>> 16, d[y] = O << 8 | O >>> 24, f[y] = O, g ? (g = w ^ h[h[h[b ^ w]]], v ^= h[h[v]]) : g = v = 1
            }
            var S = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            n = n.AES = e.extend({
                "_doReset": function () {
                    for (var t = (n = this._key).words, e = n.sigBytes / 4, n = 4 * ((this._nRounds = e + 6) + 1), r = this._keySchedule = [], i = 0; i < n; i++) if (i < e) r[i] = t[i]; else {
                        var a = r[i - 1];
                        i % e ? 6 < e && 4 == i % e && (a = o[a >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a]) : (a = o[(a = a << 8 | a >>> 24) >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a], a ^= S[i / e | 0] << 24), r[i] = r[i - e] ^ a
                    }
                    for (t = this._invKeySchedule = [], e = 0; e < n; e++) i = n - e, a = e % 4 ? r[i] : r[i - 4], t[e] = 4 > e || 4 >= i ? a : u[o[a >>> 24]] ^ p[o[a >>> 16 & 255]] ^ d[o[a >>> 8 & 255]] ^ f[o[255 & a]]
                }, "encryptBlock": function (t, e) {
                    this._doCryptBlock(t, e, this._keySchedule, a, s, c, l, o)
                }, "decryptBlock": function (t, e) {
                    var n = t[e + 1];
                    t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, u, p, d, f, i), n = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = n
                }, "_doCryptBlock": function (t, e, n, o, r, i, a, s) {
                    for (var c = this._nRounds, l = t[e] ^ n[0], u = t[e + 1] ^ n[1], p = t[e + 2] ^ n[2], d = t[e + 3] ^ n[3], f = 4, h = 1; h < c; h++) {
                        var m = o[l >>> 24] ^ r[u >>> 16 & 255] ^ i[p >>> 8 & 255] ^ a[255 & d] ^ n[f++],
                            g = o[u >>> 24] ^ r[p >>> 16 & 255] ^ i[d >>> 8 & 255] ^ a[255 & l] ^ n[f++],
                            v = o[p >>> 24] ^ r[d >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & u] ^ n[f++];
                        d = o[d >>> 24] ^ r[l >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[255 & p] ^ n[f++], l = m, u = g, p = v
                    }
                    m = (s[l >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & d]) ^ n[f++], g = (s[u >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & l]) ^ n[f++], v = (s[p >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & u]) ^ n[f++], d = (s[d >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & p]) ^ n[f++], t[e] = m, t[e + 1] = g, t[e + 2] = v, t[e + 3] = d
                }, "keySize": 8
            });
            t.AES = e._createHelper(n)
        }(), t.exports = r
    }, "7": function (t, e, n) {
        "use strict";
        n.r(e), n.d(e, "ORIGIN_CLIENT", (function () {
            return o
        })), n.d(e, "MAX_TRANSLATE_LEN", (function () {
            return r
        })), n.d(e, "MAX_QUERY_LEN", (function () {
            return i
        })), n.d(e, "MAX_VOICE_LEN", (function () {
            return a
        })), n.d(e, "MAX_VOICE_LOOP", (function () {
            return s
        })), n.d(e, "SELECT_CARD_WIDTH", (function () {
            return c
        })), n.d(e, "AUTO_DETECT", (function () {
            return l
        })), n.d(e, "AUDIO_SOGOU_PATH", (function () {
            return u
        })), n.d(e, "AUDIO_MICRO_PATH", (function () {
            return p
        })), n.d(e, "MAX_TEXTAREA_LINE_NUM", (function () {
            return d
        })), n.d(e, "CK_KEY_SUV", (function () {
            return f
        })), n.d(e, "HISTORY_SWITCH", (function () {
            return h
        })), n.d(e, "PRONPREF_TYPE", (function () {
            return m
        })), n.d(e, "PRONPREF_SPEAKER", (function () {
            return g
        })), n.d(e, "PRONPREF_SPEED", (function () {
            return v
        })), n.d(e, "SELECTION_SWITCH", (function () {
            return y
        })), n.d(e, "CK_KEY_UPSCREEN", (function () {
            return w
        })), n.d(e, "LS_KEY_TRANSLATE_RECORD", (function () {
            return _
        })), n.d(e, "LS_KEY_TRANSLATE_SPEED", (function () {
            return b
        })), n.d(e, "MAX_SUGGESTION_NUM", (function () {
            return O
        })), n.d(e, "MAX_SUGGESTION_QUERY_LEN", (function () {
            return S
        })), n.d(e, "HEADER_FIXED_HHEIGHT", (function () {
            return A
        })), n.d(e, "TAB_HEIGHT", (function () {
            return C
        })), n.d(e, "SECOND_TAB_HEIGHT", (function () {
            return T
        })), n.d(e, "NAV_ABSOLUTE_LEFT", (function () {
            return E
        })), n.d(e, "TAB_TITLE_HEIGHT", (function () {
            return k
        })), n.d(e, "WRITEBOOK_HOST", (function () {
            return P
        })), n.d(e, "TAB", (function () {
            return x
        })), n.d(e, "UIGS_MAP", (function () {
            return I
        })), n.d(e, "LANGUAGE_FRONN_LIST", (function () {
            return j
        })), n.d(e, "LANGUAGE_TO_LIST", (function () {
            return D
        })), n.d(e, "FavorMap", (function () {
            return L
        })), n.d(e, "LINK_MAP", (function () {
            return N
        })), n.d(e, "LANGSELECT_MAP", (function () {
            return R
        })), n.d(e, "DOCTYPE_LIST", (function () {
            return U
        })), n.d(e, "OXFORD_TAB_LIST", (function () {
            return B
        })), n.d(e, "TRANS_MODEL_LIST", (function () {
            return M
        })), n.d(e, "USER_LIST", (function () {
            return G
        })), n.d(e, "PRON_PREF_DIC", (function () {
            return q
        }));
        var o = "", r = 5e3, i = 100, a = 400, s = 10, c = 350, l = "autodetect", u = "/reventondc/synthesis",
            p = "/reventondc/microsoftGetSpeakFile", d = 5, f = "SUV", h = "HISTORY_SWITCH", m = "PRONPREF_TYPE",
            g = "PRONPREF_SPEAKER", v = "PRONPREF_SPEED", y = "SELECTION_SWITCH", w = "SGINPUT_UPSCREEN",
            _ = "TranslateWapRecord", b = "TranslateWapSpeed", O = 10, S = 70, A = 60, C = 44, T = 48, E = -110, k = 20,
            P = "//fanyiapp.sogou.com", x = {
                "detail": {
                    "type": "detail",
                    "view": "常用词典",
                    "tabView": "DetailItem",
                    "show": "",
                    "content": {"simple": "", "bilingual": "", "change": ""}
                },
                "dict": {"type": "", "view": "", "tabView": "", "show": "", "content": {"dictionary": ""}},
                "pic": {"type": "", "view": "词汇拓展", "tabView": "picItem", "show": ""},
                "book": {"type": "book", "view": "书影音", "tabView": "bookItem", "show": "", "content": {"dictionary": ""}},
                "networkdic": {"type": "", "view": "网络词条", "tabView": "", "show": "", "content": {"dictionary": ""}}
            }, I = {
                "SOUND_UIGS_MAP_FROM": {
                    "oxford": "v_from_en",
                    "oxford_buchong": "v_from_en",
                    "newCentury": "v_from_zh",
                    "newCentury_simple": "v_from_zh",
                    "jazh_simple": "v_from_other",
                    "zhja_simple": "v_from_other",
                    "kozh_simple": "v_from_other",
                    "zhko_simple": "v_from_other",
                    "other": "v_from_other",
                    "ukloop": "rv_uk_0",
                    "usaloop": "rv_usa_1",
                    "uk": "v_uk_0",
                    "usa": "v_usa_1"
                },
                "SOUND_UIGS_MAP_TO": {
                    "oxford": "v_to_zh",
                    "oxford_buchong": "v_to_zh",
                    "newCentury": "v_to_en",
                    "newCentury_simple": "v_to_en",
                    "jazh_simple": "rv_to_other",
                    "zhja_simple": "rv_to_other",
                    "kozh_simple": "rv_to_other",
                    "zhko_simple": "rv_to_other",
                    "other": "v_from_other",
                    "ukloop": "rv_to_uk",
                    "usaloop": "rv_to_usa",
                    "uk": "v_to_uk",
                    "usa": "v_to_usa"
                },
                "NAV_TREE_EN": {
                    "simple": "common_detail_en",
                    "bilingual": "common_example_en",
                    "word_group": "common_phrase_en",
                    "synonym": "common_synonym_en",
                    "antonym": "common_antonym_en",
                    "conjugate": "common_conjugate_en",
                    "detail": "oxlist_detail",
                    "phrases": "oxlist_phrase",
                    "phrasalVerbs": "oxlist_phrasev",
                    "derivatives": "oxlist_deriv",
                    "origin": "oxlist_origin",
                    "network_mean": "network_mean_en",
                    "network_phrase": "network_phrase_en"
                },
                "NAV_TREE_ZH": {
                    "simple": "common_detail_zh",
                    "bilingual": "common_example_zh",
                    "category": "ctlist_detail",
                    "refArr": "ctlist_detail",
                    "subentry": "ctlist_entry",
                    "network_mean": "network_mean_zh",
                    "network_phrase": "network_phrase_zh"
                }
            }, j = [{"lang": "en", "text": "英语", "play": !0}, {"lang": "zh-CHS", "text": "中文", "play": !0}, {
                "lang": "ja",
                "text": "日语",
                "play": !0
            }], D = [{"lang": "zh-CHS", "text": "中文", "play": !0}, {"lang": "en", "text": "英语", "play": !0}, {
                "lang": "ja",
                "text": "日语",
                "play": !0
            }], L = {
                "lang": [{
                    "type": "direction",
                    "text": "全部语言",
                    "value": "",
                    "uigs": "direction_all"
                }, {
                    "type": "direction",
                    "text": "中文 → 英文",
                    "value": "zh-CHS#en",
                    "uigs": "direction_zh2en"
                }, {"type": "direction", "text": "英文 → 中文", "value": "en#zh-CHS", "uigs": "direction_en2zh"}],
                "uploadTime": [{
                    "type": "collectionTime",
                    "text": "时间升序",
                    "value": "asc",
                    "uigs": "uploadTime_asc"
                }, {
                    "type": "collectionTime",
                    "text": "时间降序",
                    "value": "desc",
                    "uigs": "uploadTime_desc"
                }, {"type": "textLetter", "text": "首字母升序", "value": "asc", "uigs": ""}, {
                    "type": "textLetter",
                    "text": "首字母降序",
                    "value": "desc",
                    "uigs": ""
                }]
            }, N = {
                "header": [{
                    "type": "news",
                    "text": "新闻",
                    "link": "//www.sogou.com/sogou?ie=utf8&interation=1728053249&interV=&pid=sogou-wsse-7050094b04fd9aa3",
                    "key": "query"
                }, {"type": "page", "text": "网页", "link": "//www.sogou.com/web?ie=utf8", "key": "query"}, {
                    "type": "wechat",
                    "text": "微信",
                    "link": "//weixin.sogou.com/weixin?ie=utf8",
                    "key": "query"
                }, {
                    "type": "zhihu",
                    "text": "知乎",
                    "link": "//zhihu.sogou.com/zhihu?ie=utf8&p=73351201",
                    "key": "query"
                }, {
                    "type": "pic",
                    "text": "图片",
                    "link": "//pic.sogou.com/pics?ie=utf8&p=40230504",
                    "key": "query"
                }, {
                    "type": "video",
                    "text": "视频",
                    "link": "//v.sogou.com/v?ie=utf8&p=40230608",
                    "key": "query"
                }, {
                    "type": "mingyi",
                    "text": "明医",
                    "link": "//www.sogou.com/web?m2web=mingyi.sogou.com&ie=utf8",
                    "key": "keyword"
                }, {
                    "type": "english",
                    "text": "英文",
                    "link": "//english.sogou.com/english?b_o_e=1&ie=utf8",
                    "key": "keyword"
                }, {
                    "type": "wenwen",
                    "text": "问问",
                    "link": "//wenwen.sogou.com/?ch=fanyisearch",
                    "key": "w"
                }, {"type": "fanyi", "text": "翻译", "link": "javascript:void(0)"}],
                "more": [{"type": "map", "text": "地图", "link": "//map.sogou.com", "key": "#lq"}, {
                    "type": "gouwu",
                    "text": "购物",
                    "link": "//gouwu.sogou.com/shop?",
                    "key": "query"
                }, {
                    "type": "wechat",
                    "text": "百科",
                    "link": "//www.sogou.com/sogou?ie=utf8&insite=baike.sogou.com",
                    "key": "query"
                }, {
                    "type": "zhishi",
                    "text": "知识",
                    "link": "//www.sogou.com/sogou?ie=utf8&interation=196636",
                    "key": "query"
                }, {"type": "as", "text": "应用", "link": "//as.sogou.com/so?", "key": "query"}, {
                    "type": "zhishu",
                    "text": "指数",
                    "link": "//index.sogou.com"
                }, {
                    "type": "dangjian",
                    "text": "党建",
                    "link": "//dangjian.sogou.com/dangjian?",
                    "key": "query"
                }, {"type": "all", "text": "全部", "link": "//www.sogou.com/docs/more.htm?", "key": "kw"}]
            }, R = [{
                "title": "中英",
                "type": "en",
                "subList": [{
                    "from": "en",
                    "to": "zh-CHS",
                    "from_text": "英",
                    "to_text": "中",
                    "direct": "en2zh"
                }, {"from": "zh-CHS", "to": "en", "from_text": "中", "to_text": "英", "direct": "zh2en"}]
            }, {
                "title": "中韩",
                "type": "ko",
                "subList": [{
                    "from": "ko",
                    "to": "zh-CHS",
                    "from_text": "韩",
                    "to_text": "中",
                    "direct": "ko2zh"
                }, {"from": "zh-CHS", "to": "ko", "from_text": "中", "to_text": "韩", "direct": "zh2ko"}]
            }, {
                "title": "中日",
                "type": "ja",
                "subList": [{
                    "from": "ja",
                    "to": "zh-CHS",
                    "from_text": "日",
                    "to_text": "中",
                    "direct": "ja2zh"
                }, {"from": "zh-CHS", "to": "ja", "from_text": "中", "to_text": "日", "direct": "zh2ja"}]
            }], U = [{"from": "en", "to": "zh-CHS", "from_text": "英", "to_text": "中", "direct": "en2zh"}, {
                "from": "zh-CHS",
                "to": "en",
                "from_text": "中",
                "to_text": "英",
                "direct": "zh2en"
            }, {"from": "ko", "to": "zh-CHS", "from_text": "韩", "to_text": "中", "direct": "ko2zh"}, {
                "from": "zh-CHS",
                "to": "ko",
                "from_text": "中",
                "to_text": "韩",
                "direct": "zh2ko"
            }, {"from": "ja", "to": "zh-CHS", "from_text": "日", "to_text": "中", "direct": "ja2zh"}, {
                "from": "zh-CHS",
                "to": "ja",
                "from_text": "中",
                "to_text": "日",
                "direct": "zh2ja"
            }], B = {
                "detail": {"originHeight": 500, "show": !1, "text": "更多释义", "toggle": !0},
                "phrases": {"originHeight": 250, "show": !1, "text": "更多短语", "toggle": !0},
                "phrasalVerbs": {"originHeight": 250, "show": !1, "text": "更多短语动词", "toggle": !0}
            }, M = [{"textSimple": "通用", "text": "通用领域", "val": "general"}, {
                "textSimple": "生物",
                "text": "生物医学",
                "val": "medical"
            }, {"textSimple": "金融", "text": "金融财经", "val": "finance"}],
            G = ["迟来的缘", "丫妮疒I", "拒绝暧昧", "ice", "李胖子", "莫尛锛哭", "释怀", "调皮的家伙", "好诗书克拉", "秋末初冬", "性感pg", "囿你", "爱你到永远", "卢文建", "翠竹之缘", "男神", "回车键", "我是二号", "枣庄老王", "周天易海", "呵呵4", "很闹心", "5886qiz", "果冻", "不知火舞", "哦陪明白", "天空星星", "一生学习", "平安是福", "丑小鸭", "BORN", "hardg", "阿醒妈妈", "最情人", "耐宇汽车", "淡定", "吾过客", "观鱼读月", "颐凡", "逻魂不灭", "喂喂", "Antunes", "小哥", "小财神", "小★丫★头"],
            q = {
                "type": [{"text": "美式", "type": "usa_1"}, {"text": "英式", "type": "uk_0"}],
                "voice": [{"text": "男声", "speaker": "male", "value": 1}, {
                    "text": "女声",
                    "speaker": "female",
                    "value": 3
                }],
                "speed": [{"text": "较慢", "speed": "slow", "value": 1.3}, {
                    "text": "中速",
                    "speed": "standard",
                    "value": 1
                }, {"text": "较快", "speed": "fast", "value": .7}]
            }
    }, "81": function (t, e, n) {
    }, "82": function (t, e, n) {
    }, "83": function (t, e, n) {
    }, "84": function (t, e, n) {
    }, "85": function (t, e, n) {
    }, "86": function (t, e, n) {
    }, "87": function (t, e, n) {
        var o = n(67), r = {
            "encryptKey": o.enc.Utf8.parse("7c2e52d43aad8720315ab624b9c9fa0f"),
            "decryptKey": o.enc.Utf8.parse("cf8d51685b1374cb22329bbf0af3905a"),
            "encryptOther": {
                "iv": o.enc.Utf8.parse(window.atob("AAAAAAAAAAAAAAAAAAAAAA==") || "7c2e52d43aad8720315ab624b9c9fa0f"),
                "mode": o.mode.CBC,
                "pad": o.pad.Pkcs7
            },
            "decryptOther": {
                "iv": o.enc.Utf8.parse(window.atob("AAAAAAAAAAAAAAAAAAAAAA==") || "cf8d51685b1374cb22329bbf0af3905a"),
                "mode": o.mode.CBC,
                "pad": o.pad.Pkcs7
            }
        };
        t.exports = {
            "encrypt": function (t) {
                return o.AES.encrypt(t, r.encryptKey, r.encryptOther).toString()
            }, "decrypt": function (t) {
                var e = null;
                try {
                    e = JSON.parse(o.enc.Utf8.stringify(o.AES.decrypt(decodeURIComponent(t), r.decryptKey, r.decryptOther) || ""))
                } catch (t) {
                    console.log(t)
                }
                return e
            }, "escapeStr": function (t) {
                return t.replace(/&nbsp;/gi, " ").replace(/&gt;/gi, ">").replace(/&lt;/gi, "<").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"')
            }, "getStr": function (t) {
                return "string" != typeof t && (t = t.join("")), t = t.replace(/<span class="num(.*?)<\/span>/gi, "").replace(/<span class="error(.*?)<\/span>\s{0,1}/gi, "").replace(/(<br([\s\S])*?>)|(<div\s*\/?>)/gi, "\n").replace(/<\/{0,1}(div|p|span)[^>]*>/gi, ""), this.escapeStr(t)
            }
        }
    }, "88": function (t, e, n) {
        var o = n(15), r = n(67), i = {
            "defaultToken": "72387f1418dc0aeb", "genEncryptOption": function (t) {
                t = t || this.defaultToken;
                return {
                    "key": r.enc.Utf8.parse(t),
                    "basic": {
                        "iv": r.enc.Utf8.parse("function" == typeof window.atob ? window.atob("AAAAAAAAAAAAAAAAAAAAAA==") : decodeURIComponent("%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00")),
                        "mode": r.mode.CBC,
                        "pad": r.pad.Pkcs7
                    }
                }
            }, "encrypt": function (t, e) {
                var n = this.genEncryptOption(e || this.defaultToken);
                return r.AES.encrypt(t, n.key, n.basic).toString()
            }, "decrypt": function (t, e) {
                var n = this.genEncryptOption(e || this.defaultToken),
                    o = r.enc.Utf8.stringify(r.AES.decrypt(decodeURIComponent(t || ""), n.key, n.basic) || "") || "{}";
                if (o.constructor === Object) try {
                    o = JSON.parse(r.enc.Utf8.stringify(r.AES.decrypt(decodeURIComponent(t || ""), n.key, n.basic) || "") || "{}")
                } catch (t) {
                    o = "{}"
                } else o = r.enc.Utf8.stringify(r.AES.decrypt(decodeURIComponent(t || ""), n.key, n.basic) || "") || "{}";
                return o
            }, "sendAjax": function (t, e, n, r, a) {
                var s = i.encrypt(this.stringify(t), e);
                o({
                    "method": "POST",
                    "url": n,
                    "dataType": "json",
                    "timeout": 1e4,
                    "headers": {"Accept": "application/json", "Content-Type": "application/x-www-form-urlencoded"},
                    "data": "isformatCode=on&jsonData=" + encodeURIComponent(encodeURIComponent(s))
                }).then((function (t) {
                    "function" == typeof r && r(t)
                })).catch((function (t) {
                    a(t)
                }))
            }, "stringify": function (t) {
                var e = this, n = [], o = "", r = Object.prototype.toString.call(t);
                if ("[object Array]" === r) t.forEach((function (t) {
                    n.push(e.stringify(t))
                })), o = "[" + n.join(",") + "]"; else if ("[object Object]" === r) {
                    for (var i in t) n.push('"' + i + '":' + e.stringify(t[i]));
                    o = "{" + n.join(",") + "}"
                } else o = "[object String]" === r ? '"' + t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/[\n\r]/g, "\\n") + '"' : t;
                return o
            }
        };
        t.exports = i
    }
});