this.seajs = {_seajs: this.seajs}, seajs.version = "1.3.1", seajs._util = {}, seajs._config = {
    debug: "",
    preload: []
}, function (e) {
    var t = Object.prototype.toString, n = Array.prototype;
    e.isString = function (e) {
        return "[object String]" === t.call(e)
    }, e.isFunction = function (e) {
        return "[object Function]" === t.call(e)
    }, e.isRegExp = function (e) {
        return "[object RegExp]" === t.call(e)
    }, e.isObject = function (e) {
        return e === Object(e)
    }, e.isArray = Array.isArray || function (e) {
        return "[object Array]" === t.call(e)
    }, e.indexOf = n.indexOf ? function (e, t) {
        return e.indexOf(t)
    } : function (e, t) {
        for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
        return -1
    };
    var r = e.forEach = n.forEach ? function (e, t) {
        e.forEach(t)
    } : function (e, t) {
        for (var n = 0; n < e.length; n++) t(e[n], n, e)
    };
    e.map = n.map ? function (e, t) {
        return e.map(t)
    } : function (e, t) {
        var n = [];
        return r(e, function (e, r, i) {
            n.push(t(e, r, i))
        }), n
    }, e.filter = n.filter ? function (e, t) {
        return e.filter(t)
    } : function (e, t) {
        var n = [];
        return r(e, function (e, r, i) {
            t(e, r, i) && n.push(e)
        }), n
    };
    var i = e.keys = Object.keys || function (e) {
        var t, n = [];
        for (t in e) e.hasOwnProperty(t) && n.push(t);
        return n
    };
    e.unique = function (e) {
        var t = {};
        return r(e, function (e) {
            t[e] = 1
        }), i(t)
    }, e.now = Date.now || function () {
        return (new Date).getTime()
    }
}(seajs._util), seajs._util.log = function () {
    if ("undefined" != typeof console) {
        var e = Array.prototype.slice.call(arguments), t = "log";
        if (console[e[e.length - 1]] && (t = e.pop()), "log" !== t || seajs.debug) if (console[t].apply) ; else e.length
    }
}, function (e, t, n) {
    function r(e) {
        return ((e = e.match(u)) ? e[0] : ".") + "/"
    }

    function i(e) {
        if (d.lastIndex = 0, d.test(e) && (e = e.replace(d, "$1/")), -1 === e.indexOf(".")) return e;
        for (var t, n = e.split("/"), r = [], i = 0; i < n.length; i++) if (".." === (t = n[i])) {
            if (0 === r.length) throw Error("The path is invalid: " + e);
            r.pop()
        } else "." !== t && r.push(t);
        return r.join("/")
    }

    function a(e) {
        var t = (e = i(e)).charAt(e.length - 1);
        return "/" === t ? e : ("#" === t ? e = e.slice(0, -1) : -1 === e.indexOf("?") && !f.test(e) && (e += ".js"), 0 < e.indexOf(":80/") && (e = e.replace(":80/", "/")), e)
    }

    function o(e) {
        if ("#" === e.charAt(0)) return e.substring(1);
        var n = t.alias;
        if (n && c(e)) {
            var r = e.split("/"), i = r[0];
            n.hasOwnProperty(i) && (r[0] = n[i], e = r.join("/"))
        }
        return e
    }

    function s(e) {
        return 0 < e.indexOf("://") || 0 === e.indexOf("//")
    }

    function l(e) {
        return "/" === e.charAt(0) && "/" !== e.charAt(1)
    }

    function c(e) {
        var t = e.charAt(0);
        return -1 === e.indexOf("://") && "." !== t && "/" !== t
    }

    var u = /.*(?=\/.*$)/, d = /([^:\/])\/\/+/g, f = /\.(?:css|js)$/, p = /^(.*?\w)(?:\/|$)/, h = {},
        m = (n = n.location).protocol + "//" + n.host + function (e) {
            return "/" !== e.charAt(0) && (e = "/" + e), e
        }(n.pathname);
    0 < m.indexOf("\\") && (m = m.replace(/\\/g, "/")), e.dirname = r, e.realpath = i, e.normalize = a, e.parseAlias = o, e.parseMap = function (n) {
        var a = t.map || [];
        if (!a.length) return n;
        for (var o = n, l = 0; l < a.length; l++) {
            var c = a[l];
            if (e.isArray(c) && 2 === c.length) {
                var u = c[0];
                (e.isString(u) && -1 < o.indexOf(u) || e.isRegExp(u) && u.test(o)) && (o = o.replace(u, c[1]))
            } else e.isFunction(c) && (o = c(o))
        }
        return s(o) || (o = i(r(m) + o)), o !== n && (h[o] = n), o
    }, e.unParseMap = function (e) {
        return h[e] || e
    }, e.id2Uri = function (e, n) {
        if (!e) return "";
        e = o(e), n || (n = m);
        var i;
        return s(e) ? i = e : 0 === e.indexOf("./") || 0 === e.indexOf("../") ? (0 === e.indexOf("./") && (e = e.substring(2)), i = r(n) + e) : i = l(e) ? n.match(p)[1] + e : t.base + "/" + e, a(i)
    }, e.isAbsolute = s, e.isRoot = l, e.isTopLevel = c, e.pageUri = m
}(seajs._util, seajs._config, this), function (e, t) {
    function n(e, n) {
        e.onload = e.onerror = e.onreadystatechange = function () {
            f.test(e.readyState) && (e.onload = e.onerror = e.onreadystatechange = null, e.parentNode && !t.debug && c.removeChild(e), e = void 0, n())
        }
    }

    function r(t, n) {
        h || m ? (e.log("Start poll to fetch css"), setTimeout(function () {
            i(t, n)
        }, 1)) : t.onload = t.onerror = function () {
            t.onload = t.onerror = null, t = void 0, n()
        }
    }

    function i(e, t) {
        var n;
        if (h) e.sheet && (n = !0); else if (e.sheet) try {
            e.sheet.cssRules && (n = !0)
        } catch (e) {
            "NS_ERROR_DOM_SECURITY_ERR" === e.name && (n = !0)
        }
        setTimeout(function () {
            n ? t() : i(e, t)
        }, 1)
    }

    function a() {
    }

    var o, s, l = document, c = l.head || l.getElementsByTagName("head")[0] || l.documentElement,
        u = c.getElementsByTagName("base")[0], d = /\.css(?:\?|$)/i, f = /loaded|complete|undefined/;
    e.fetch = function (t, i, s) {
        var l = d.test(t), f = document.createElement(l ? "link" : "script");
        s && (s = e.isFunction(s) ? s(t) : s) && (f.charset = s), i = i || a, "SCRIPT" === f.nodeName ? n(f, i) : r(f, i), l ? (f.rel = "stylesheet", f.href = t) : (f.async = "async", f.src = t), o = f, u ? c.insertBefore(f, u) : c.appendChild(f), o = null
    }, e.getCurrentScript = function () {
        if (o) return o;
        if (s && "interactive" === s.readyState) return s;
        for (var e = c.getElementsByTagName("script"), t = 0; t < e.length; t++) {
            var n = e[t];
            if ("interactive" === n.readyState) return s = n
        }
    }, e.getScriptAbsoluteSrc = function (e) {
        return e.hasAttribute ? e.src : e.getAttribute("src", 4)
    }, e.importStyle = function (e, t) {
        if (!t || !l.getElementById(t)) {
            var n = l.createElement("style");
            t && (n.id = t), c.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(l.createTextNode(e))
        }
    };
    var p = navigator.userAgent, h = 536 > Number(p.replace(/.*AppleWebKit\/(\d+)\..*/, "$1")),
        m = 0 < p.indexOf("Firefox") && !("onload" in document.createElement("link"))
}(seajs._util, seajs._config), function (e) {
    var t = /(?:^|[^.$])\brequire\s*\(\s*(["'])([^"'\s\)]+)\1\s*\)/g;
    e.parseDependencies = function (n) {
        var r, i = [], n = n.replace(/^\s*\/\*[\s\S]*?\*\/\s*$/gm, "").replace(/^\s*\/\/.*$/gm, "");
        for (t.lastIndex = 0; r = t.exec(n);) r[2] && i.push(r[2]);
        return e.unique(i)
    }
}(seajs._util), function (e, t, n) {
    function r(e, t) {
        this.uri = e, this.status = t || 0
    }

    function i(e, n) {
        return t.isString(e) ? r._resolve(e, n) : t.map(e, function (e) {
            return i(e, n)
        })
    }

    function a(e, i) {
        var a = t.parseMap(e);
        g[a] ? i() : m[a] ? v[a].push(i) : (m[a] = !0, v[a] = [i], r._fetch(a, function () {
            g[a] = !0;
            var n = d[e];
            n.status === h.FETCHING && (n.status = h.FETCHED), y && (r._save(e, y), y = null), b && n.status === h.FETCHED && (d[e] = b, b.realUri = e), b = null, m[a] && delete m[a], (n = v[a]) && (delete v[a], t.forEach(n, function (e) {
                e()
            }))
        }, n.charset))
    }

    function o(e, t) {
        var n = e(t.require, t.exports, t);
        void 0 !== n && (t.exports = n)
    }

    function s(e) {
        var n = e.realUri || e.uri, r = f[n];
        r && (t.forEach(r, function (t) {
            o(t, e)
        }), delete f[n])
    }

    function l(e) {
        var n = e.uri;
        return t.filter(e.dependencies, function (e) {
            return x = [n], (e = c(d[e])) && (x.push(n), t.log("Found circular dependencies:", x.join(" --\x3e "), void 0)), !e
        })
    }

    function c(e) {
        if (!e || e.status !== h.SAVED) return !1;
        if (x.push(e.uri), (e = e.dependencies).length) {
            var n = e.concat(x);
            if (n.length > t.unique(n).length) return !0;
            for (n = 0; n < e.length; n++) if (c(d[e[n]])) return !0
        }
        return x.pop(), !1
    }

    function u(e) {
        var t = n.preload.slice();
        n.preload = [], t.length ? w._use(t, e) : e()
    }

    var d = {}, f = {}, p = [], h = {FETCHING: 1, FETCHED: 2, SAVED: 3, READY: 4, COMPILING: 5, COMPILED: 6};
    r.prototype._use = function (e, n) {
        t.isString(e) && (e = [e]);
        var r = i(e, this.uri);
        this._load(r, function () {
            u(function () {
                var e = t.map(r, function (e) {
                    return e ? d[e]._compile() : null
                });
                n && n.apply(null, e)
            })
        })
    }, r.prototype._load = function (e, n) {
        function i(e) {
            (e || {}).status < h.READY && (e.status = h.READY), 0 == --c && n()
        }

        var o = t.filter(e, function (e) {
            return e && (!d[e] || d[e].status < h.READY)
        }), s = o.length;
        if (0 === s) n(); else for (var c = s, u = 0; u < s; u++) !function (e) {
            function t() {
                if ((n = d[e]).status >= h.SAVED) {
                    var t = l(n);
                    t.length ? r.prototype._load(t, function () {
                        i(n)
                    }) : i(n)
                } else i()
            }

            var n = d[e] || (d[e] = new r(e, h.FETCHING));
            n.status >= h.FETCHED ? t() : a(e, t)
        }(o[u])
    }, r.prototype._compile = function () {
        function e(e) {
            return e = i(e, n.uri), (e = d[e]) ? e.status === h.COMPILING ? e.exports : (e.parent = n, e._compile()) : null
        }

        var n = this;
        if (n.status === h.COMPILED) return n.exports;
        if (n.status < h.SAVED && !f[n.realUri || n.uri]) return null;
        n.status = h.COMPILING, e.async = function (e, t) {
            n._use(e, t)
        }, e.resolve = function (e) {
            return i(e, n.uri)
        }, e.cache = d, n.require = e, n.exports = {};
        var r = n.factory;
        return t.isFunction(r) ? (p.push(n), o(r, n), p.pop()) : void 0 !== r && (n.exports = r), n.status = h.COMPILED, s(n), n.exports
    }, r._define = function (e, n, a) {
        1 === (s = arguments.length) ? (a = e, e = void 0) : 2 === s && (a = n, n = void 0, t.isArray(e) && (n = e, e = void 0)), !t.isArray(n) && t.isFunction(a) && (n = t.parseDependencies(a.toString()));
        var o, s = {id: e, dependencies: n, factory: a};
        if (document.attachEvent) {
            var l = t.getCurrentScript();
            l && (o = t.unParseMap(t.getScriptAbsoluteSrc(l))), o || t.log("Failed to derive URI from interactive script for:", a.toString(), "warn")
        }
        if (l = e ? i(e) : o) {
            if (l === o) {
                var c = d[o];
                c && c.realUri && c.status === h.SAVED && (d[o] = null)
            }
            s = r._save(l, s), o ? (d[o] || {}).status === h.FETCHING && (d[o] = s, s.realUri = o) : b || (b = s)
        } else y = s
    }, r._getCompilingModule = function () {
        return p[p.length - 1]
    }, r._find = function (e) {
        var n = [];
        return t.forEach(t.keys(d), function (r) {
            (t.isString(e) && -1 < r.indexOf(e) || t.isRegExp(e) && e.test(r)) && (r = d[r]).exports && n.push(r.exports)
        }), n
    }, r._modify = function (t, n) {
        var r = i(t), a = d[r];
        return a && a.status === h.COMPILED ? o(n, a) : (f[r] || (f[r] = []), f[r].push(n)), e
    }, r.STATUS = h, r._resolve = t.id2Uri, r._fetch = t.fetch, r._save = function (e, n) {
        var a = d[e] || (d[e] = new r(e));
        return a.status < h.SAVED && (a.id = n.id || e, a.dependencies = i(t.filter(n.dependencies || [], function (e) {
            return !!e
        }), e), a.factory = n.factory, a.status = h.SAVED), a
    };
    var m = {}, g = {}, v = {}, y = null, b = null, x = [], w = new r(t.pageUri, h.COMPILED);
    e.use = function (t, n) {
        return u(function () {
            w._use(t, n)
        }), e
    }, e.define = r._define, e.cache = r.cache = d, e.find = r._find, e.modify = r._modify, r.fetchedList = g, e.pluginSDK = {
        Module: r,
        util: t,
        config: n
    }
}(seajs, seajs._util, seajs._config), function (e, t, n) {
    var r = "seajs-ts=" + t.now(), i = document.getElementById("seajsnode");
    i || (i = document.getElementsByTagName("script"), i = i[i.length - 1]);
    var a = i && t.getScriptAbsoluteSrc(i) || t.pageUri, a = t.dirname(function (e) {
        if (-1 === e.indexOf("??")) return e;
        var n = e.split("??");
        return (e = n[0]) + (n = t.filter(n[1].split(","), function (e) {
            return -1 !== e.indexOf("sea.js")
        }))[0]
    }(a));
    t.loaderDir = a;
    var o = a.match(/^(.+\/)seajs\/[\.\d]+(?:-dev)?\/$/);
    o && (a = o[1]), n.base = a, n.main = i && i.getAttribute("data-main"), n.charset = "utf-8", e.config = function (i) {
        for (var a in i) if (i.hasOwnProperty(a)) {
            var o = n[a], s = i[a];
            if (o && "alias" === a) {
                for (var l in s) if (s.hasOwnProperty(l)) {
                    var c = o[l], u = s[l];
                    /^\d+\.\d+\.\d+$/.test(u) && (u = l + "/" + u + "/" + l), c && c !== u && t.log("The alias config is conflicted:", "key =", '"' + l + '"', "previous =", '"' + c + '"', "current =", '"' + u + '"', "warn"), o[l] = u
                }
            } else !o || "map" !== a && "preload" !== a ? n[a] = s : (t.isString(s) && (s = [s]), t.forEach(s, function (e) {
                e && o.push(e)
            }))
        }
        return (i = n.base) && !t.isAbsolute(i) && (n.base = t.id2Uri((t.isRoot(i) ? "" : "./") + i + "/")), 2 === n.debug && (n.debug = 1, e.config({
            map: [[/^.*$/, function (e) {
                return -1 === e.indexOf("seajs-ts=") && (e = e + (-1 === e.indexOf("?") ? "?" : "&") + r), e
            }]]
        })), e.debug = !!n.debug, this
    }, e.debug = !!n.debug
}(seajs, seajs._util, seajs._config), function (e, t, n) {
    e.log = t.log, e.importStyle = t.importStyle, e.config({alias: {seajs: t.loaderDir}}), t.forEach(function () {
        var e = [], r = n.location.search;
        return (r = (r = r.replace(/(seajs-\w+)(&|$)/g, "$1=1$2")) + " " + document.cookie).replace(/seajs-(\w+)=[1-9]/g, function (t, n) {
            e.push(n)
        }), t.unique(e)
    }(), function (t) {
        e.use("seajs/plugin-" + t), "debug" === t && (e._use = e.use, e._useArgs = [], e.use = function () {
            return e._useArgs.push(arguments), e
        })
    })
}(seajs, seajs._util, this), function (e, t, n) {
    if ((r = e._seajs) && !r.args) n.seajs = e._seajs; else {
        if (n.define = e.define, t.main && e.use(t.main), t = (r || 0).args) for (var r = {
            0: "config",
            1: "use",
            2: "define"
        }, i = 0; i < t.length; i += 2) e[r[t[i]]].apply(e, t[i + 1]);
        n.define.cmd = {}, delete e.define, delete e._util, delete e._config, delete e._seajs
    }
}(seajs, seajs._config, this), define("newweb/common/TranslateState", [], function (e, t) {
    e("./jquery-1.7");
    var n = {
        smallFont: !1,
        originalText: "",
        originalTgt: "",
        updateEle: "",
        isUpdate: !1,
        isSelectLan: !1,
        translateResult: [],
        type: "ATUO",
        getFromTo: function () {
            var e = this.type;
            return "AUTO" == e ? ["AUTO", "AUTO"] : this.isSelectLan ? e.split("2") : ["AUTO", "AUTO"]
        },
        getDetectedFromTo: function () {
            var e = this.type;
            return "AUTO" == e ? ["AUTO", "AUTO"] : e.split("2")
        }
    };
    t.state = n
}), define("newweb/common/ZeroClipboard", [], function (e, t) {
    !function (e, t) {
        "use strict";
        var n, r, i, a = e, o = a.document, s = a.navigator, l = a.setTimeout, c = a.clearTimeout, u = a.setInterval,
            d = a.clearInterval, f = a.getComputedStyle, p = a.encodeURIComponent, h = a.ActiveXObject, m = a.Error,
            g = a.Number.parseInt || a.parseInt, v = a.Number.parseFloat || a.parseFloat, y = a.Number.isNaN || a.isNaN,
            b = a.Date.now, x = a.Object.keys, w = a.Object.prototype.hasOwnProperty, T = a.Array.prototype.slice,
            _ = function () {
                var e = function (e) {
                    return e
                };
                if ("function" == typeof a.wrap && "function" == typeof a.unwrap) try {
                    var t = o.createElement("div"), n = a.unwrap(t);
                    1 === t.nodeType && n && 1 === n.nodeType && (e = a.unwrap)
                } catch (e) {
                }
                return e
            }(), k = function (e) {
                return T.call(e, 0)
            }, C = function () {
                var e, t, n, r, i, a = k(arguments), o = a[0] || {};
                for (e = 1, t = a.length; e < t; e++) if (null != (n = a[e])) for (r in n) w.call(n, r) && (o[r], o !== (i = n[r]) && void 0 !== i && (o[r] = i));
                return o
            }, S = function (e) {
                var t, n, r, i;
                if ("object" != typeof e || null == e || "number" == typeof e.nodeType) t = e; else if ("number" == typeof e.length) for (t = [], n = 0, r = e.length; n < r; n++) w.call(e, n) && (t[n] = S(e[n])); else {
                    t = {};
                    for (i in e) w.call(e, i) && (t[i] = S(e[i]))
                }
                return t
            }, E = function (e, t) {
                for (var n = {}, r = 0, i = t.length; r < i; r++) t[r] in e && (n[t[r]] = e[t[r]]);
                return n
            }, j = function (e, t) {
                var n = {};
                for (var r in e) -1 === t.indexOf(r) && (n[r] = e[r]);
                return n
            }, N = function (e) {
                if (e) for (var t in e) w.call(e, t) && delete e[t];
                return e
            }, A = function (e, t) {
                if (e && 1 === e.nodeType && e.ownerDocument && t && (1 === t.nodeType && t.ownerDocument && t.ownerDocument === e.ownerDocument || 9 === t.nodeType && !t.ownerDocument && t === e.ownerDocument)) do {
                    if (e === t) return !0;
                    e = e.parentNode
                } while (e);
                return !1
            }, D = function (e) {
                var t;
                return "string" == typeof e && e && (t = e.split("#")[0].split("?")[0], t = e.slice(0, e.lastIndexOf("/") + 1)), t
            }, O = function (e) {
                var t, n;
                return "string" == typeof e && e && ((n = e.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/)) && n[1] ? t = n[1] : (n = e.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/)) && n[1] && (t = n[1])), t
            }, L = function () {
                var e, t;
                try {
                    throw new m
                } catch (e) {
                    t = e
                }
                return t && (e = t.sourceURL || t.fileName || O(t.stack)), e
            }, F = function () {
                var e, t, n;
                if (o.currentScript && (e = o.currentScript.src)) return e;
                if (1 === (t = o.getElementsByTagName("script")).length) return t[0].src || void 0;
                if ("readyState" in (t[0] || document.createElement("script"))) for (n = t.length; n--;) if ("interactive" === t[n].readyState && (e = t[n].src)) return e;
                return "loading" === o.readyState && (e = t[t.length - 1].src) ? e : (e = L()) ? e : void 0
            }, q = function () {
                var e, t, n, r = o.getElementsByTagName("script");
                for (e = r.length; e--;) {
                    if (!(n = r[e].src)) {
                        t = null;
                        break
                    }
                    if (n = D(n), null == t) t = n; else if (t !== n) {
                        t = null;
                        break
                    }
                }
                return t || void 0
            }, M = function () {
                var e = /win(dows|[\s]?(nt|me|ce|xp|vista|[\d]+))/i;
                return !!s && (e.test(s.appVersion || "") || e.test(s.platform || "") || -1 !== (s.userAgent || "").indexOf("Windows"))
            }, R = null == a.opener && (!!a.top && a != a.top || !!a.parent && a != a.parent),
            I = "html" === o.documentElement.nodeName, H = {
                bridge: null,
                version: "0.0.0",
                pluginType: "unknown",
                sandboxed: null,
                disabled: null,
                outdated: null,
                insecure: null,
                unavailable: null,
                degraded: null,
                deactivated: null,
                overdue: null,
                ready: null
            }, z = {}, P = {}, B = null, U = 0, W = 0, $ = {
                ready: "Flash communication is established",
                error: {
                    "flash-sandboxed": "Attempting to run Flash in a sandboxed iframe, which is impossible",
                    "flash-disabled": "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.",
                    "flash-outdated": "Flash is too outdated to support ZeroClipboard",
                    "flash-insecure": "Flash will be unable to communicate due to a protocol mismatch between your `swfPath` configuration and the page",
                    "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
                    "flash-degraded": "Flash is unable to preserve data fidelity when communicating with JavaScript",
                    "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.",
                    "flash-overdue": "Flash communication was established but NOT within the acceptable time limit",
                    "version-mismatch": "ZeroClipboard JS version number does not match ZeroClipboard SWF version number",
                    "clipboard-error": "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard",
                    "config-mismatch": "ZeroClipboard configuration does not match Flash's reality",
                    "swf-not-found": "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity",
                    "browser-unsupported": "The browser does not support the required HTML DOM and JavaScript features"
                }
            },
            X = ["flash-unavailable", "flash-degraded", "flash-overdue", "version-mismatch", "config-mismatch", "clipboard-error"],
            V = ["flash-sandboxed", "flash-disabled", "flash-outdated", "flash-insecure", "flash-unavailable", "flash-degraded", "flash-deactivated", "flash-overdue"],
            Y = new RegExp("^flash-(" + V.map(function (e) {
                return e.replace(/^flash-/, "")
            }).join("|") + ")$"), Z = new RegExp("^flash-(" + V.filter(function (e) {
                return "flash-disabled" !== e
            }).map(function (e) {
                return e.replace(/^flash-/, "")
            }).join("|") + ")$"), K = {
                swfPath: (D(F()) || q() || "") + "ZeroClipboard.swf",
                trustedDomains: a.location.host ? [a.location.host] : [],
                cacheBust: !0,
                forceEnhancedClipboard: !1,
                flashLoadTimeout: 3e4,
                autoActivate: !0,
                bubbleEvents: !0,
                fixLineEndings: !0,
                containerId: "global-zeroclipboard-html-bridge",
                containerClass: "global-zeroclipboard-container",
                swfObjectId: "global-zeroclipboard-flash-bridge",
                hoverClass: "zeroclipboard-is-hover",
                activeClass: "zeroclipboard-is-active",
                forceHandCursor: !1,
                title: null,
                zIndex: 999999999
            }, G = function (e) {
                "object" != typeof e || !e || "length" in e || x(e).forEach(function (t) {
                    if (/^(?:forceHandCursor|title|zIndex|bubbleEvents|fixLineEndings)$/.test(t)) K[t] = e[t]; else if (null == H.bridge) if ("containerId" === t || "swfObjectId" === t) {
                        if (!he(e[t])) throw new Error("The specified `" + t + "` value is not valid as an HTML4 Element ID");
                        K[t] = e[t]
                    } else K[t] = e[t]
                });
                {
                    if ("string" != typeof e || !e) return S(K);
                    if (w.call(K, e)) return K[e]
                }
            }, J = function () {
                return Ye(), {
                    browser: C(E(s, ["userAgent", "platform", "appName", "appVersion"]), {isSupported: Q()}),
                    flash: j(H, ["bridge"]),
                    zeroclipboard: {version: Ke.version, config: Ke.config()}
                }
            }, Q = function () {
                return !!(o.addEventListener && a.Object.keys && a.Array.prototype.map)
            }, ee = function () {
                return !!(H.sandboxed || H.disabled || H.outdated || H.unavailable || H.degraded || H.deactivated)
            }, te = function (e, t) {
                var r, i, a, o = {};
                if ("string" == typeof e && e ? a = e.toLowerCase().split(/\s+/) : "object" != typeof e || !e || "length" in e || void 0 !== t || x(e).forEach(function (t) {
                    var n = e[t];
                    "function" == typeof n && Ke.on(t, n)
                }), a && a.length && t) {
                    for (r = 0, i = a.length; r < i; r++) o[e = a[r].replace(/^on/, "")] = !0, z[e] || (z[e] = []), z[e].push(t);
                    if (o.ready && H.ready && Ke.emit({type: "ready"}), o.error) {
                        for (Q() || Ke.emit({
                            type: "error",
                            name: "browser-unsupported"
                        }), r = 0, i = V.length; r < i; r++) if (!0 === H[V[r].replace(/^flash-/, "")]) {
                            Ke.emit({type: "error", name: V[r]});
                            break
                        }
                        void 0 !== n && Ke.version !== n && Ke.emit({
                            type: "error",
                            name: "version-mismatch",
                            jsVersion: Ke.version,
                            swfVersion: n
                        })
                    }
                }
                return Ke
            }, ne = function (e, t) {
                var n, r, i, a, o;
                if (0 === arguments.length ? a = x(z) : "string" == typeof e && e ? a = e.toLowerCase().split(/\s+/) : "object" != typeof e || !e || "length" in e || void 0 !== t || x(e).forEach(function (t) {
                    var n = e[t];
                    "function" == typeof n && Ke.off(t, n)
                }), a && a.length) for (n = 0, r = a.length; n < r; n++) if (e = a[n].replace(/^on/, ""), (o = z[e]) && o.length) if (t) for (i = o.indexOf(t); -1 !== i;) o.splice(i, 1), i = o.indexOf(t, i); else o.length = 0;
                return Ke
            }, re = function (e) {
                return "string" == typeof e && e ? S(z[e]) || null : S(z)
            }, ie = function (e) {
                var t, n, r;
                if ((e = me(e)) && !Te(e)) return "ready" === e.type && !0 === H.overdue ? Ke.emit({
                    type: "error",
                    name: "flash-overdue"
                }) : (t = C({}, e), xe.call(this, t), "copy" === e.type && (n = (r = De(P)).data, B = r.formatMap), n)
            }, ae = function () {
                var e = K.swfPath || "", t = e.slice(0, 2), n = e.slice(0, e.indexOf("://") + 1);
                return "\\\\" === t ? "file:" : "//" === t || "" === n ? a.location.protocol : n
            }, oe = function () {
                var e, t, n = H.sandboxed;
                if (!Q()) return H.ready = !1, void Ke.emit({type: "error", name: "browser-unsupported"});
                Ye(), "boolean" != typeof H.ready && (H.ready = !1), H.sandboxed !== n && !0 === H.sandboxed ? (H.ready = !1, Ke.emit({
                    type: "error",
                    name: "flash-sandboxed"
                })) : Ke.isFlashUnusable() || null !== H.bridge || ((t = ae()) && t !== a.location.protocol ? Ke.emit({
                    type: "error",
                    name: "flash-insecure"
                }) : ("number" == typeof(e = K.flashLoadTimeout) && e >= 0 && (U = l(function () {
                    "boolean" != typeof H.deactivated && (H.deactivated = !0), !0 === H.deactivated && Ke.emit({
                        type: "error",
                        name: "flash-deactivated"
                    })
                }, e)), H.overdue = !1, Ne()))
            }, se = function () {
                Ke.clearData(), Ke.blur(), Ke.emit("destroy"), Ae(), Ke.off()
            }, le = function (e, t) {
                var n;
                if ("object" == typeof e && e && void 0 === t) n = e, Ke.clearData(); else {
                    if ("string" != typeof e || !e) return;
                    (n = {})[e] = t
                }
                for (var r in n) "string" == typeof r && r && w.call(n, r) && "string" == typeof n[r] && n[r] && (P[r] = Ve(n[r]))
            }, ce = function (e) {
                void 0 === e ? (N(P), B = null) : "string" == typeof e && w.call(P, e) && delete P[e]
            }, ue = function (e) {
                return void 0 === e ? S(P) : "string" == typeof e && w.call(P, e) ? P[e] : void 0
            }, de = function (e) {
                if (e && 1 === e.nodeType) {
                    r && (He(r, K.activeClass), r !== e && He(r, K.hoverClass)), r = e, Ie(e, K.hoverClass);
                    var t = e.getAttribute("title") || K.title;
                    if ("string" == typeof t && t) {
                        var n = Ee(H.bridge);
                        n && n.setAttribute("title", t)
                    }
                    var i = !0 === K.forceHandCursor || "pointer" === ze(e, "cursor");
                    $e(i), We()
                }
            }, fe = function () {
                var e = Ee(H.bridge);
                e && (e.removeAttribute("title"), e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px"), r && (He(r, K.hoverClass), He(r, K.activeClass), r = null)
            }, pe = function () {
                return r || null
            }, he = function (e) {
                return "string" == typeof e && e && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)
            }, me = function (e) {
                var t;
                if ("string" == typeof e && e ? (t = e, e = {}) : "object" == typeof e && e && "string" == typeof e.type && e.type && (t = e.type), t) {
                    t = t.toLowerCase(), !e.target && (/^(copy|aftercopy|_click)$/.test(t) || "error" === t && "clipboard-error" === e.name) && (e.target = i), C(e, {
                        type: t,
                        target: e.target || r || null,
                        relatedTarget: e.relatedTarget || null,
                        currentTarget: H && H.bridge || null,
                        timeStamp: e.timeStamp || b() || null
                    });
                    var n = $[e.type];
                    return "error" === e.type && e.name && n && (n = n[e.name]), n && (e.message = n), "ready" === e.type && C(e, {
                        target: null,
                        version: H.version
                    }), "error" === e.type && (Y.test(e.name) && C(e, {
                        target: null,
                        minimumVersion: "11.0.0"
                    }), Z.test(e.name) && C(e, {version: H.version}), "flash-insecure" === e.name && C(e, {
                        pageProtocol: a.location.protocol,
                        swfProtocol: ae()
                    })), "copy" === e.type && (e.clipboardData = {
                        setData: Ke.setData,
                        clearData: Ke.clearData
                    }), "aftercopy" === e.type && (e = Oe(e, B)), e.target && !e.relatedTarget && (e.relatedTarget = ge(e.target)), ve(e)
                }
            }, ge = function (e) {
                var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
                return t ? o.getElementById(t) : null
            }, ve = function (e) {
                if (e && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) {
                    var t = e.target, n = "_mouseover" === e.type && e.relatedTarget ? e.relatedTarget : void 0,
                        r = "_mouseout" === e.type && e.relatedTarget ? e.relatedTarget : void 0, i = Pe(t),
                        s = a.screenLeft || a.screenX || 0, l = a.screenTop || a.screenY || 0,
                        c = o.body.scrollLeft + o.documentElement.scrollLeft,
                        u = o.body.scrollTop + o.documentElement.scrollTop,
                        d = i.left + ("number" == typeof e._stageX ? e._stageX : 0),
                        f = i.top + ("number" == typeof e._stageY ? e._stageY : 0), p = d - c, h = f - u, m = s + p,
                        g = l + h, v = "number" == typeof e.movementX ? e.movementX : 0,
                        y = "number" == typeof e.movementY ? e.movementY : 0;
                    delete e._stageX, delete e._stageY, C(e, {
                        srcElement: t,
                        fromElement: n,
                        toElement: r,
                        screenX: m,
                        screenY: g,
                        pageX: d,
                        pageY: f,
                        clientX: p,
                        clientY: h,
                        x: p,
                        y: h,
                        movementX: v,
                        movementY: y,
                        offsetX: 0,
                        offsetY: 0,
                        layerX: 0,
                        layerY: 0
                    })
                }
                return e
            }, ye = function (e) {
                var t = e && "string" == typeof e.type && e.type || "";
                return !/^(?:(?:before)?copy|destroy)$/.test(t)
            }, be = function (e, t, n, r) {
                r ? l(function () {
                    e.apply(t, n)
                }, 0) : e.apply(t, n)
            }, xe = function (e) {
                if ("object" == typeof e && e && e.type) {
                    var t = ye(e), n = z["*"] || [], r = z[e.type] || [], i = n.concat(r);
                    if (i && i.length) {
                        var o, s, l, c, u, d = this;
                        for (o = 0, s = i.length; o < s; o++) c = d, "string" == typeof(l = i[o]) && "function" == typeof a[l] && (l = a[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (c = l, l = l.handleEvent), "function" == typeof l && (u = C({}, e), be(l, c, [u], t))
                    }
                    return this
                }
            }, we = function (e) {
                var t = null;
                return (!1 === R || e && "error" === e.type && e.name && -1 !== X.indexOf(e.name)) && (t = !1), t
            }, Te = function (e) {
                var t = e.target || r || null, a = "swf" === e._source;
                switch (delete e._source, e.type) {
                    case"error":
                        var o = "flash-sandboxed" === e.name || we(e);
                        "boolean" == typeof o && (H.sandboxed = o), "browser-unsupported" === e.name ? C(H, {
                            disabled: !1,
                            outdated: !1,
                            unavailable: !1,
                            degraded: !1,
                            deactivated: !1,
                            overdue: !1,
                            ready: !1
                        }) : -1 !== V.indexOf(e.name) ? C(H, {
                            disabled: "flash-disabled" === e.name,
                            outdated: "flash-outdated" === e.name,
                            insecure: "flash-insecure" === e.name,
                            unavailable: "flash-unavailable" === e.name,
                            degraded: "flash-degraded" === e.name,
                            deactivated: "flash-deactivated" === e.name,
                            overdue: "flash-overdue" === e.name,
                            ready: !1
                        }) : "version-mismatch" === e.name && (n = e.swfVersion, C(H, {
                            disabled: !1,
                            outdated: !1,
                            insecure: !1,
                            unavailable: !1,
                            degraded: !1,
                            deactivated: !1,
                            overdue: !1,
                            ready: !1
                        })), Ue();
                        break;
                    case"ready":
                        n = e.swfVersion;
                        var s = !0 === H.deactivated;
                        C(H, {
                            sandboxed: !1,
                            disabled: !1,
                            outdated: !1,
                            insecure: !1,
                            unavailable: !1,
                            degraded: !1,
                            deactivated: !1,
                            overdue: s,
                            ready: !s
                        }), Ue();
                        break;
                    case"beforecopy":
                        i = t;
                        break;
                    case"copy":
                        var l, c, u = e.relatedTarget;
                        !P["text/html"] && !P["text/plain"] && u && (c = u.value || u.outerHTML || u.innerHTML) && (l = u.value || u.textContent || u.innerText) ? (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", l), c !== l && e.clipboardData.setData("text/html", c)) : !P["text/plain"] && e.target && (l = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", l));
                        break;
                    case"aftercopy":
                        _e(e), Ke.clearData(), t && t !== Re() && t.focus && t.focus();
                        break;
                    case"_mouseover":
                        Ke.focus(t), !0 === K.bubbleEvents && a && (t && t !== e.relatedTarget && !A(e.relatedTarget, t) && ke(C({}, e, {
                            type: "mouseenter",
                            bubbles: !1,
                            cancelable: !1
                        })), ke(C({}, e, {type: "mouseover"})));
                        break;
                    case"_mouseout":
                        Ke.blur(), !0 === K.bubbleEvents && a && (t && t !== e.relatedTarget && !A(e.relatedTarget, t) && ke(C({}, e, {
                            type: "mouseleave",
                            bubbles: !1,
                            cancelable: !1
                        })), ke(C({}, e, {type: "mouseout"})));
                        break;
                    case"_mousedown":
                        Ie(t, K.activeClass), !0 === K.bubbleEvents && a && ke(C({}, e, {type: e.type.slice(1)}));
                        break;
                    case"_mouseup":
                        He(t, K.activeClass), !0 === K.bubbleEvents && a && ke(C({}, e, {type: e.type.slice(1)}));
                        break;
                    case"_click":
                        i = null, !0 === K.bubbleEvents && a && ke(C({}, e, {type: e.type.slice(1)}));
                        break;
                    case"_mousemove":
                        !0 === K.bubbleEvents && a && ke(C({}, e, {type: e.type.slice(1)}))
                }
                if (/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) return !0
            }, _e = function (e) {
                if (e.errors && e.errors.length > 0) {
                    var t = S(e);
                    C(t, {type: "error", name: "clipboard-error"}), delete t.success, l(function () {
                        Ke.emit(t)
                    }, 0)
                }
            }, ke = function (e) {
                if (e && "string" == typeof e.type && e) {
                    var t, n = e.target || null, r = n && n.ownerDocument || o, i = {
                        view: r.defaultView || a,
                        canBubble: !0,
                        cancelable: !0,
                        detail: "click" === e.type ? 1 : 0,
                        button: "number" == typeof e.which ? e.which - 1 : "number" == typeof e.button ? e.button : r.createEvent ? 0 : 1
                    }, s = C(i, e);
                    n && r.createEvent && n.dispatchEvent && (s = [s.type, s.canBubble, s.cancelable, s.view, s.detail, s.screenX, s.screenY, s.clientX, s.clientY, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.button, s.relatedTarget], (t = r.createEvent("MouseEvents")).initMouseEvent && (t.initMouseEvent.apply(t, s), t._source = "js", n.dispatchEvent(t)))
                }
            }, Ce = function () {
                var e = K.flashLoadTimeout;
                if ("number" == typeof e && e >= 0) {
                    var t = Math.min(1e3, e / 10), n = K.swfObjectId + "_fallbackContent";
                    W = u(function () {
                        var e = o.getElementById(n);
                        Be(e) && (Ue(), H.deactivated = null, Ke.emit({type: "error", name: "swf-not-found"}))
                    }, t)
                }
            }, Se = function () {
                var e = o.createElement("div");
                return e.id = K.containerId, e.className = K.containerClass, e.style.position = "absolute", e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px", e.style.zIndex = "" + Xe(K.zIndex), e
            }, Ee = function (e) {
                for (var t = e && e.parentNode; t && "OBJECT" === t.nodeName && t.parentNode;) t = t.parentNode;
                return t || null
            }, je = function (e) {
                return "string" == typeof e && e ? e.replace(/["&'<>]/g, function (e) {
                    switch (e) {
                        case'"':
                            return "&quot;";
                        case"&":
                            return "&amp;";
                        case"'":
                            return "&apos;";
                        case"<":
                            return "&lt;";
                        case">":
                            return "&gt;";
                        default:
                            return e
                    }
                }) : e
            }, Ne = function () {
                var e, t = H.bridge, n = Ee(t);
                if (!t) {
                    var r = Me(a.location.host, K), i = "never" === r ? "none" : "all",
                        s = Fe(C({jsVersion: Ke.version}, K)), l = K.swfPath + Le(K.swfPath, K);
                    I && (l = je(l)), n = Se();
                    var c = o.createElement("div");
                    n.appendChild(c), o.body.appendChild(n);
                    var u = o.createElement("div"), d = "activex" === H.pluginType;
                    u.innerHTML = '<object id="' + K.swfObjectId + '" name="' + K.swfObjectId + '" width="100%" height="100%" ' + (d ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + l + '"') + ">" + (d ? '<param name="movie" value="' + l + '"/>' : "") + '<param name="allowScriptAccess" value="' + r + '"/><param name="allowNetworking" value="' + i + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + s + '"/><div id="' + K.swfObjectId + '_fallbackContent">&nbsp;</div></object>', t = u.firstChild, u = null, _(t).ZeroClipboard = Ke, n.replaceChild(t, c), Ce()
                }
                return t || ((t = o[K.swfObjectId]) && (e = t.length) && (t = t[e - 1]), !t && n && (t = n.firstChild)), H.bridge = t || null, t
            }, Ae = function () {
                var e = H.bridge;
                if (e) {
                    var t = Ee(e);
                    t && ("activex" === H.pluginType && "readyState" in e ? (e.style.display = "none", function n() {
                        if (4 === e.readyState) {
                            for (var r in e) "function" == typeof e[r] && (e[r] = null);
                            e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t)
                        } else l(n, 10)
                    }()) : (e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t))), Ue(), H.ready = null, H.bridge = null, H.deactivated = null, H.insecure = null, n = void 0
                }
            }, De = function (e) {
                var t = {}, n = {};
                if ("object" == typeof e && e) {
                    for (var r in e) if (r && w.call(e, r) && "string" == typeof e[r] && e[r]) switch (r.toLowerCase()) {
                        case"text/plain":
                        case"text":
                        case"air:text":
                        case"flash:text":
                            t.text = e[r], n.text = r;
                            break;
                        case"text/html":
                        case"html":
                        case"air:html":
                        case"flash:html":
                            t.html = e[r], n.html = r;
                            break;
                        case"application/rtf":
                        case"text/rtf":
                        case"rtf":
                        case"richtext":
                        case"air:rtf":
                        case"flash:rtf":
                            t.rtf = e[r], n.rtf = r
                    }
                    return {data: t, formatMap: n}
                }
            }, Oe = function (e, t) {
                if ("object" != typeof e || !e || "object" != typeof t || !t) return e;
                var n = {};
                for (var r in e) if (w.call(e, r)) if ("errors" === r) {
                    n[r] = e[r] ? e[r].slice() : [];
                    for (var i = 0, a = n[r].length; i < a; i++) n[r][i].format = t[n[r][i].format]
                } else if ("success" !== r && "data" !== r) n[r] = e[r]; else {
                    n[r] = {};
                    var o = e[r];
                    for (var s in o) s && w.call(o, s) && w.call(t, s) && (n[r][t[s]] = o[s])
                }
                return n
            }, Le = function (e, t) {
                return null == t || t && !0 === t.cacheBust ? (-1 === e.indexOf("?") ? "?" : "&") + "noCache=" + b() : ""
            }, Fe = function (e) {
                var t, n, r, i, o = "", s = [];
                if (e.trustedDomains && ("string" == typeof e.trustedDomains ? i = [e.trustedDomains] : "object" == typeof e.trustedDomains && "length" in e.trustedDomains && (i = e.trustedDomains)), i && i.length) for (t = 0, n = i.length; t < n; t++) if (w.call(i, t) && i[t] && "string" == typeof i[t]) {
                    if (!(r = qe(i[t]))) continue;
                    if ("*" === r) {
                        s.length = 0, s.push(r);
                        break
                    }
                    s.push.apply(s, [r, "//" + r, a.location.protocol + "//" + r])
                }
                return s.length && (o += "trustedOrigins=" + p(s.join(","))), !0 === e.forceEnhancedClipboard && (o += (o ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof e.swfObjectId && e.swfObjectId && (o += (o ? "&" : "") + "swfObjectId=" + p(e.swfObjectId)), "string" == typeof e.jsVersion && e.jsVersion && (o += (o ? "&" : "") + "jsVersion=" + p(e.jsVersion)), o
            }, qe = function (e) {
                if (null == e || "" === e) return null;
                if ("" === (e = e.replace(/^\s+|\s+$/g, ""))) return null;
                var t = e.indexOf("//"), n = (e = -1 === t ? e : e.slice(t + 2)).indexOf("/");
                return (e = -1 === n ? e : -1 === t || 0 === n ? null : e.slice(0, n)) && ".swf" === e.slice(-4).toLowerCase() ? null : e || null
            }, Me = function () {
                var e = function (e) {
                    var t, n, r, i = [];
                    if ("string" == typeof e && (e = [e]), "object" != typeof e || !e || "number" != typeof e.length) return i;
                    for (t = 0, n = e.length; t < n; t++) if (w.call(e, t) && (r = qe(e[t]))) {
                        if ("*" === r) {
                            i.length = 0, i.push("*");
                            break
                        }
                        -1 === i.indexOf(r) && i.push(r)
                    }
                    return i
                };
                return function (t, n) {
                    var r = qe(n.swfPath);
                    null === r && (r = t);
                    var i = e(n.trustedDomains), a = i.length;
                    if (a > 0) {
                        if (1 === a && "*" === i[0]) return "always";
                        if (-1 !== i.indexOf(t)) return 1 === a && t === r ? "sameDomain" : "always"
                    }
                    return "never"
                }
            }(), Re = function () {
                try {
                    return o.activeElement
                } catch (e) {
                    return null
                }
            }, Ie = function (e, t) {
                var n, r, i, a = [];
                if ("string" == typeof t && t && (a = t.split(/\s+/)), e && 1 === e.nodeType && a.length > 0) {
                    for (i = (" " + (e.className || "") + " ").replace(/[\t\r\n\f]/g, " "), n = 0, r = a.length; n < r; n++) -1 === i.indexOf(" " + a[n] + " ") && (i += a[n] + " ");
                    (i = i.replace(/^\s+|\s+$/g, "")) !== e.className && (e.className = i)
                }
                return e
            }, He = function (e, t) {
                var n, r, i, a = [];
                if ("string" == typeof t && t && (a = t.split(/\s+/)), e && 1 === e.nodeType && a.length > 0 && e.className) {
                    for (i = (" " + e.className + " ").replace(/[\t\r\n\f]/g, " "), n = 0, r = a.length; n < r; n++) i = i.replace(" " + a[n] + " ", " ");
                    (i = i.replace(/^\s+|\s+$/g, "")) !== e.className && (e.className = i)
                }
                return e
            }, ze = function (e, t) {
                var n = f(e, null).getPropertyValue(t);
                return "cursor" !== t || n && "auto" !== n || "A" !== e.nodeName ? n : "pointer"
            }, Pe = function (e) {
                var t = {left: 0, top: 0, width: 0, height: 0};
                if (e.getBoundingClientRect) {
                    var n = e.getBoundingClientRect(), r = a.pageXOffset, i = a.pageYOffset,
                        s = o.documentElement.clientLeft || 0, l = o.documentElement.clientTop || 0, c = 0, u = 0;
                    if ("relative" === ze(o.body, "position")) {
                        var d = o.body.getBoundingClientRect(), f = o.documentElement.getBoundingClientRect();
                        c = d.left - f.left || 0, u = d.top - f.top || 0
                    }
                    t.left = n.left + r - s - c, t.top = n.top + i - l - u, t.width = "width" in n ? n.width : n.right - n.left, t.height = "height" in n ? n.height : n.bottom - n.top
                }
                return t
            }, Be = function (e) {
                if (!e) return !1;
                var t = f(e, null);
                if (!t) return !1;
                var n = v(t.height) > 0, r = v(t.width) > 0, i = v(t.top) >= 0, a = v(t.left) >= 0, o = n && r && i && a,
                    s = o ? null : Pe(e);
                return "none" !== t.display && "collapse" !== t.visibility && (o || !!s && (n || s.height > 0) && (r || s.width > 0) && (i || s.top >= 0) && (a || s.left >= 0))
            }, Ue = function () {
                c(U), U = 0, d(W), W = 0
            }, We = function () {
                var e;
                if (r && (e = Ee(H.bridge))) {
                    var t = Pe(r);
                    C(e.style, {
                        width: t.width + "px",
                        height: t.height + "px",
                        top: t.top + "px",
                        left: t.left + "px",
                        zIndex: "" + Xe(K.zIndex)
                    })
                }
            }, $e = function (e) {
                !0 === H.ready && (H.bridge && "function" == typeof H.bridge.setHandCursor ? H.bridge.setHandCursor(e) : H.ready = !1)
            }, Xe = function (e) {
                if (/^(?:auto|inherit)$/.test(e)) return e;
                var t;
                return "number" != typeof e || y(e) ? "string" == typeof e && (t = Xe(g(e, 10))) : t = e, "number" == typeof t ? t : "auto"
            }, Ve = function (e) {
                var t = /(\r\n|\r|\n)/g;
                return "string" == typeof e && !0 === K.fixLineEndings && (M() ? /((^|[^\r])\n|\r([^\n]|$))/.test(e) && (e = e.replace(t, "\r\n")) : /\r/.test(e) && (e = e.replace(t, "\n"))), e
            }, Ye = function (t) {
                var n, r, i, a = H.sandboxed, o = null;
                if (t = !0 === t, !1 === R) o = !1; else {
                    try {
                        r = e.frameElement || null
                    } catch (e) {
                        i = {name: e.name, message: e.message}
                    }
                    if (r && 1 === r.nodeType && "IFRAME" === r.nodeName) try {
                        o = r.hasAttribute("sandbox")
                    } catch (e) {
                        o = null
                    } else {
                        try {
                            n = document.domain || null
                        } catch (e) {
                            n = null
                        }
                        (null === n || i && "SecurityError" === i.name && /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(i.message.toLowerCase())) && (o = !0)
                    }
                }
                return H.sandboxed = o, a === o || t || Ze(h), o
            }, Ze = function (e) {
                function t(e) {
                    var t = e.match(/[\d]+/g);
                    return t.length = 3, t.join(".")
                }

                function n(e) {
                    return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || "chrome.plugin" === e.slice(-13))
                }

                function r(e) {
                    e && (o = !0, e.version && (u = t(e.version)), !u && e.description && (u = t(e.description)), e.filename && (c = n(e.filename)))
                }

                var i, a, o = !1, l = !1, c = !1, u = "";
                if (s.plugins && s.plugins.length) r(s.plugins["Shockwave Flash"]), s.plugins["Shockwave Flash 2.0"] && (o = !0, u = "2.0.0.11"); else if (s.mimeTypes && s.mimeTypes.length) r((a = s.mimeTypes["application/x-shockwave-flash"]) && a.enabledPlugin); else if (void 0 !== e) {
                    l = !0;
                    try {
                        i = new e("ShockwaveFlash.ShockwaveFlash.7"), o = !0, u = t(i.GetVariable("$version"))
                    } catch (n) {
                        try {
                            i = new e("ShockwaveFlash.ShockwaveFlash.6"), o = !0, u = "6.0.21"
                        } catch (n) {
                            try {
                                i = new e("ShockwaveFlash.ShockwaveFlash"), o = !0, u = t(i.GetVariable("$version"))
                            } catch (e) {
                                l = !1
                            }
                        }
                    }
                }
                H.disabled = !0 !== o, H.outdated = u && v(u) < v("11.0.0"), H.version = u || "0.0.0", H.pluginType = c ? "pepper" : l ? "activex" : o ? "netscape" : "unknown"
            };
        Ze(h), Ye(!0);
        var Ke = function () {
            if (!(this instanceof Ke)) return new Ke;
            "function" == typeof Ke._createClient && Ke._createClient.apply(this, k(arguments))
        };
        Ke.version = "2.4.0-beta.1", Ke.config = function () {
            return G.apply(this, k(arguments))
        }, Ke.state = function () {
            return J.apply(this, k(arguments))
        }, Ke.isFlashUnusable = function () {
            return ee.apply(this, k(arguments))
        }, Ke.on = function () {
            return te.apply(this, k(arguments))
        }, Ke.off = function () {
            return ne.apply(this, k(arguments))
        }, Ke.handlers = function () {
            return re.apply(this, k(arguments))
        }, Ke.emit = function () {
            return ie.apply(this, k(arguments))
        }, Ke.create = function () {
            return oe.apply(this, k(arguments))
        }, Ke.destroy = function () {
            return se.apply(this, k(arguments))
        }, Ke.setData = function () {
            return le.apply(this, k(arguments))
        }, Ke.clearData = function () {
            return ce.apply(this, k(arguments))
        }, Ke.getData = function () {
            return ue.apply(this, k(arguments))
        }, Ke.focus = Ke.activate = function () {
            return de.apply(this, k(arguments))
        }, Ke.blur = Ke.deactivate = function () {
            return fe.apply(this, k(arguments))
        }, Ke.activeElement = function () {
            return pe.apply(this, k(arguments))
        };
        var Ge = 0, Je = {}, Qe = 0, et = {}, tt = {};
        C(K, {autoActivate: !0});
        var nt = function (e) {
            var t, n = this;
            n.id = "" + Ge++, t = {
                instance: n, elements: [], handlers: {}, coreWildcardHandler: function (e) {
                    return n.emit(e)
                }
            }, Je[n.id] = t, e && n.clip(e), Ke.on("*", t.coreWildcardHandler), Ke.on("destroy", function () {
                n.destroy()
            }), Ke.create()
        }, rt = function (e, t) {
            var r, i, a, o = {}, s = this, l = Je[s.id], c = l && l.handlers;
            if (!l) throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");
            if ("string" == typeof e && e ? a = e.toLowerCase().split(/\s+/) : "object" != typeof e || !e || "length" in e || void 0 !== t || x(e).forEach(function (t) {
                var n = e[t];
                "function" == typeof n && s.on(t, n)
            }), a && a.length && t) {
                for (r = 0, i = a.length; r < i; r++) o[e = a[r].replace(/^on/, "")] = !0, c[e] || (c[e] = []), c[e].push(t);
                if (o.ready && H.ready && this.emit({type: "ready", client: this}), o.error) {
                    for (r = 0, i = V.length; r < i; r++) if (H[V[r].replace(/^flash-/, "")]) {
                        this.emit({type: "error", name: V[r], client: this});
                        break
                    }
                    void 0 !== n && Ke.version !== n && this.emit({
                        type: "error",
                        name: "version-mismatch",
                        jsVersion: Ke.version,
                        swfVersion: n
                    })
                }
            }
            return s
        }, it = function (e, t) {
            var n, r, i, a, o, s = this, l = Je[s.id], c = l && l.handlers;
            if (!c) return s;
            if (0 === arguments.length ? a = x(c) : "string" == typeof e && e ? a = e.split(/\s+/) : "object" != typeof e || !e || "length" in e || void 0 !== t || x(e).forEach(function (t) {
                var n = e[t];
                "function" == typeof n && s.off(t, n)
            }), a && a.length) for (n = 0, r = a.length; n < r; n++) if (e = a[n].toLowerCase().replace(/^on/, ""), (o = c[e]) && o.length) if (t) for (i = o.indexOf(t); -1 !== i;) o.splice(i, 1), i = o.indexOf(t, i); else o.length = 0;
            return s
        }, at = function (e) {
            var t = null, n = Je[this.id] && Je[this.id].handlers;
            return n && (t = "string" == typeof e && e ? n[e] ? n[e].slice(0) : [] : S(n)), t
        }, ot = function (e) {
            var t, n = this;
            return dt.call(n, e) && ("object" == typeof e && e && "string" == typeof e.type && e.type && (e = C({}, e)), t = C({}, me(e), {client: n}), ft.call(n, t)), n
        }, st = function (e) {
            if (!Je[this.id]) throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");
            e = pt(e);
            for (var t = 0; t < e.length; t++) if (w.call(e, t) && e[t] && 1 === e[t].nodeType) {
                e[t].zcClippingId ? -1 === et[e[t].zcClippingId].indexOf(this.id) && et[e[t].zcClippingId].push(this.id) : (e[t].zcClippingId = "zcClippingId_" + Qe++, et[e[t].zcClippingId] = [this.id], !0 === K.autoActivate && ht(e[t]));
                var n = Je[this.id] && Je[this.id].elements;
                -1 === n.indexOf(e[t]) && n.push(e[t])
            }
            return this
        }, lt = function (e) {
            var t = Je[this.id];
            if (!t) return this;
            for (var n, r = t.elements, i = (e = void 0 === e ? r.slice(0) : pt(e)).length; i--;) if (w.call(e, i) && e[i] && 1 === e[i].nodeType) {
                for (n = 0; -1 !== (n = r.indexOf(e[i], n));) r.splice(n, 1);
                var a = et[e[i].zcClippingId];
                if (a) {
                    for (n = 0; -1 !== (n = a.indexOf(this.id, n));) a.splice(n, 1);
                    0 === a.length && (!0 === K.autoActivate && mt(e[i]), delete e[i].zcClippingId)
                }
            }
            return this
        }, ct = function () {
            var e = Je[this.id];
            return e && e.elements ? e.elements.slice(0) : []
        }, ut = function () {
            var e = Je[this.id];
            e && (this.unclip(), this.off(), Ke.off("*", e.coreWildcardHandler), delete Je[this.id])
        }, dt = function (e) {
            if (!e || !e.type) return !1;
            if (e.client && e.client !== this) return !1;
            var t = Je[this.id], n = t && t.elements, r = !!n && n.length > 0,
                i = !e.target || r && -1 !== n.indexOf(e.target),
                a = e.relatedTarget && r && -1 !== n.indexOf(e.relatedTarget), o = e.client && e.client === this;
            return !(!t || !(i || a || o))
        }, ft = function (e) {
            var t = Je[this.id];
            if ("object" == typeof e && e && e.type && t) {
                var n = ye(e), r = t && t.handlers["*"] || [], i = t && t.handlers[e.type] || [], o = r.concat(i);
                if (o && o.length) {
                    var s, l, c, u, d, f = this;
                    for (s = 0, l = o.length; s < l; s++) u = f, "string" == typeof(c = o[s]) && "function" == typeof a[c] && (c = a[c]), "object" == typeof c && c && "function" == typeof c.handleEvent && (u = c, c = c.handleEvent), "function" == typeof c && (d = C({}, e), be(c, u, [d], n))
                }
            }
        }, pt = function (e) {
            return "string" == typeof e && (e = []), "number" != typeof e.length ? [e] : e
        }, ht = function (e) {
            if (e && 1 === e.nodeType) {
                var t = function (e) {
                    (e || (e = a.event)) && ("js" !== e._source && (e.stopImmediatePropagation(), e.preventDefault()), delete e._source)
                }, n = function (n) {
                    (n || (n = a.event)) && (t(n), Ke.focus(e))
                };
                e.addEventListener("mouseover", n, !1), e.addEventListener("mouseout", t, !1), e.addEventListener("mouseenter", t, !1), e.addEventListener("mouseleave", t, !1), e.addEventListener("mousemove", t, !1), tt[e.zcClippingId] = {
                    mouseover: n,
                    mouseout: t,
                    mouseenter: t,
                    mouseleave: t,
                    mousemove: t
                }
            }
        }, mt = function (e) {
            if (e && 1 === e.nodeType) {
                var t = tt[e.zcClippingId];
                if ("object" == typeof t && t) {
                    for (var n, r, i = ["move", "leave", "enter", "out", "over"], a = 0, o = i.length; a < o; a++) "function" == typeof(r = t[n = "mouse" + i[a]]) && e.removeEventListener(n, r, !1);
                    delete tt[e.zcClippingId]
                }
            }
        };
        Ke._createClient = function () {
            nt.apply(this, k(arguments))
        }, Ke.prototype.on = function () {
            return rt.apply(this, k(arguments))
        }, Ke.prototype.off = function () {
            return it.apply(this, k(arguments))
        }, Ke.prototype.handlers = function () {
            return at.apply(this, k(arguments))
        }, Ke.prototype.emit = function () {
            return ot.apply(this, k(arguments))
        }, Ke.prototype.clip = function () {
            return st.apply(this, k(arguments))
        }, Ke.prototype.unclip = function () {
            return lt.apply(this, k(arguments))
        }, Ke.prototype.elements = function () {
            return ct.apply(this, k(arguments))
        }, Ke.prototype.destroy = function () {
            return ut.apply(this, k(arguments))
        }, Ke.prototype.setText = function (e) {
            if (!Je[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ke.setData("text/plain", e), this
        }, Ke.prototype.setHtml = function (e) {
            if (!Je[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ke.setData("text/html", e), this
        }, Ke.prototype.setRichText = function (e) {
            if (!Je[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ke.setData("application/rtf", e), this
        }, Ke.prototype.setData = function () {
            if (!Je[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ke.setData.apply(this, k(arguments)), this
        }, Ke.prototype.clearData = function () {
            if (!Je[this.id]) throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ke.clearData.apply(this, k(arguments)), this
        }, Ke.prototype.getData = function () {
            if (!Je[this.id]) throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ke.getData.apply(this, k(arguments))
        }, "function" == typeof define && define.amd ? define(function () {
            return Ke
        }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = Ke : e.ZeroClipboard = Ke
    }(function () {
        return this || window
    }())
}), define("newweb/common/account", ["./log"], function (e, t) {
    function n(e, t) {
        if ("js" === t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, n.src = e, document.getElementsByTagName("head")[0].appendChild(n)
        }
        if ("css" === t) {
            var r = document.createElement("link");
            r.rel = "stylesheet", r.href = e + "loginStyle.css?v=" + h, document.getElementsByTagName("head")[0].appendChild(r)
        }
    }

    function r() {
        l.hide(), s.hide()
    }

    function i() {
        o("#urs-login-block").remove(), o("#loginWindow .content").append("<div id='urs-login-block' style='width:400px;'></div>")
    }

    function a() {
        f.on("click", function () {
            var e = window.location.href;
            yd.account.login("weibo", e)
        }), d.on("click", function () {
            var e = window.location.href;
            yd.account.login("weixin", e)
        }), u.on("click", function () {
            var e = window.location.href;
            yd.account.login("qq", e)
        })
    }

    var o = e("./jquery-1.7"), s = o("#loginAlert"), l = o("#dialogCover"), c = o("#loginWindow"),
        u = o(".third-login-qq"), d = o(".third-login-weixin"), f = o(".third-login-weibo"), p = e("./log"),
        h = (new Date).getTime(), m = "https://urswebzj.nosdn.127.net/webzj_cdn101/message.js",
        g = "http://shared.有道翻译_未完成.com/yd/common-login/yd.account.login.js",
        v = "https://shared.ydstatic.com/fanyi/login/", y = null, b = {
            newCDN: 1,
            version: 3,
            productKey: "01a7b60facc941b59f861101724af7c5",
            product: "youdao_fanyi",
            promark: "MgAgFcA",
            host: "fanyi.有道翻译_未完成.com",
            isHttps: 1,
            cookieDomain: "有道翻译_未完成.com",
            includeBox: "urs-login-block",
            cssDomain: v,
            cssFiles: "loginStyle.css?v=" + h,
            mode: "float",
            domains: "vip.126.com,163.com,126.com,有道翻译_未完成.com,yodao.com,huihui.cn",
            swidth: 320,
            needMobileLogin: 1,
            skin: 0,
            placeholder: {account: "邮箱帐号或手机号", pwd: "8-16位密码，区分大小写"},
            needPrepare: 1,
            needanimation: 1,
            coverBackground: "background:-webkit-radial-gradient(center,rgba(0,0,0,0.3),#000 75%);",
            page: "login",
            single: 1,
            capBarHeight: "40",
            capPadding: "2"
        };
    t.init = function () {
        if (s.find(".dialog-alert--close").on("click", function () {
            r()
        }), s.find(".cancel, .ok").on("click", function () {
            r()
        }), n(m, "js"), n(g, "js"), n(v, "css"), o(".login-link").on("click", function () {
            i(), a(), p.clog("LOGIN_CLICK", ""), l.show(), c.show(), (y = new URS(b)).logincb = function (e, t, n) {
                l.hide(), c.hide(), o.ajax({
                    xhrFields: {withCredentials: !0},
                    type: "GET",
                    url: "https://dict.有道翻译_未完成.com/login/acc/login",
                    data: {app: "web", tp: "urscookie", cf: 7, ru: "http://fanyi.有道翻译_未完成.com", product: "DICT", show: !0}
                }).done(function (e) {
                    window.location.reload()
                }).error(function (e) {
                    window.location.reload()
                })
            }, y.regcb = function (e) {
            }
        }), c.find(".dialog-alert--close").on("click", function () {
            l.hide(), c.hide()
        }), o(".login-out").length > 0) {
            var e = o(".login-out").attr("href");
            e += window.encodeURIComponent(window.location.href), o(".login-out").attr("href", e)
        }
    }, t.showLogin = function () {
        o(".login-link").trigger("click")
    }, t.hideLogin = r
}), define("newweb/common/advert", [], function (e, t) {
    var n = e("./jquery-1.7"), r = function (e, t) {
        var r = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
            i = document.createElement("script");
        i.type = "text/javascript", i.async = !0, i.src = e, i.charset = "utf-8";
        var a = !1;
        i.onload = i.onreadystatechange = function () {
            a || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (n.isFunction(t.successFunc) && t.successFunc(), i.onload = i.onreadystatechange = null, r && i.parentNode && r.removeChild(i), i = null, a = !0)
        }, i.onerror = function () {
            n.isFunction(t.errorFunc) && t.errorFunc()
        }, r.insertBefore(i, r.firstChild)
    };
    t.init = function () {
        r("http://shared.ydstatic.com/ead/js/dict_req_web_1.1.js", {
            successFunc: function () {
                "undefined" != typeof ADSupporter && n("#advertisement").html(ADSupporter.getAdText("dw", "58", "301", "107861", "text_960_75", "960", "75"))
            }
        })
    }, t.reloadSP = function () {
        n("#advertisement iframe").attr("src", n("#advertisement iframe").attr("src") + "&clearCache=" + +new Date)
    }
}), define("newweb/common/advertisement", ["./utils"], function (e, t) {
    var n = e("./jquery-1.7"), r = e("./utils");
    n(function () {
        function e(e) {
            i.contentWindow.postMessage(JSON.stringify(e), "*")
        }

        function t() {
            e({
                width: window.document.documentElement.clientWidth,
                height: window.document.documentElement.clientHeight
            })
        }

        !function (e, t, r, i) {
            var a = document.createElement("iframe");
            a.id = e, a.width = r, a.height = i, a.src = t, a.setAttribute("frameborder", 0), a.setAttribute("scrolling", "no"), n(".inside__products").append(a)
        }("fanyi-advertising-space", "https://shared.ydstatic.com/fanyi/fanyi-ad-place/online/index.html", "100%", 206);
        var i = document.getElementById("fanyi-advertising-space");
        window.addEventListener("message", function (e) {
            if (e.data) {
                var t = JSON.parse(e.data);
                t.height && (i.height = t.height), t.width && (i.width = t.width)
            }
        }, !1), t(), r.addEvent("resize", window, r.throttle(100, t))
    })
}), function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define("newweb/common/clipboard.min", [], e); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Clipboard = e()
    }
}(function () {
    return function e(t, n, r) {
        function i(o, s) {
            if (!n[o]) {
                if (!t[o]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(o, !0);
                    if (a) return a(o, !0);
                    var c = new Error("Cannot find module '" + o + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = n[o] = {exports: {}};
                t[o][0].call(u.exports, function (e) {
                    return i(t[o][1][e] || e)
                }, u, u.exports, e, t, n, r)
            }
            return n[o].exports
        }

        for (var a = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
        return i
    }({
        1: [function (e, t, n) {
            var r = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var i = Element.prototype;
                i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
            }
            t.exports = function (e, t) {
                for (; e && e.nodeType !== r;) {
                    if ("function" == typeof e.matches && e.matches(t)) return e;
                    e = e.parentNode
                }
            }
        }, {}], 2: [function (e, t, n) {
            function r(e, t, n, r) {
                return function (n) {
                    n.delegateTarget = i(n.target, t), n.delegateTarget && r.call(e, n)
                }
            }

            var i = e("./closest");
            t.exports = function (e, t, n, i, a) {
                var o = r.apply(this, arguments);
                return e.addEventListener(n, o, a), {
                    destroy: function () {
                        e.removeEventListener(n, o, a)
                    }
                }
            }
        }, {"./closest": 1}], 3: [function (e, t, n) {
            n.node = function (e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, n.nodeList = function (e) {
                var t = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
            }, n.string = function (e) {
                return "string" == typeof e || e instanceof String
            }, n.fn = function (e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }
        }, {}], 4: [function (e, t, n) {
            function r(e, t, n) {
                return e.addEventListener(t, n), {
                    destroy: function () {
                        e.removeEventListener(t, n)
                    }
                }
            }

            function i(e, t, n) {
                return Array.prototype.forEach.call(e, function (e) {
                    e.addEventListener(t, n)
                }), {
                    destroy: function () {
                        Array.prototype.forEach.call(e, function (e) {
                            e.removeEventListener(t, n)
                        })
                    }
                }
            }

            function a(e, t, n) {
                return s(document.body, e, t, n)
            }

            var o = e("./is"), s = e("delegate");
            t.exports = function (e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!o.string(t)) throw new TypeError("Second argument must be a String");
                if (!o.fn(n)) throw new TypeError("Third argument must be a Function");
                if (o.node(e)) return r(e, t, n);
                if (o.nodeList(e)) return i(e, t, n);
                if (o.string(e)) return a(e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
        }, {"./is": 3, delegate: 2}], 5: [function (e, t, n) {
            t.exports = function (e) {
                var t;
                if ("SELECT" === e.nodeName) e.focus(), t = e.value; else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                    var n = e.hasAttribute("readonly");
                    n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
                } else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var r = window.getSelection(), i = document.createRange();
                    i.selectNodeContents(e), r.removeAllRanges(), r.addRange(i), t = r.toString()
                }
                return t
            }
        }, {}], 6: [function (e, t, n) {
            function r() {
            }

            r.prototype = {
                on: function (e, t, n) {
                    var r = this.e || (this.e = {});
                    return (r[e] || (r[e] = [])).push({fn: t, ctx: n}), this
                }, once: function (e, t, n) {
                    function r() {
                        i.off(e, r), t.apply(n, arguments)
                    }

                    var i = this;
                    return r._ = t, this.on(e, r, n)
                }, emit: function (e) {
                    var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0,
                        i = n.length;
                    for (r; r < i; r++) n[r].fn.apply(n[r].ctx, t);
                    return this
                }, off: function (e, t) {
                    var n = this.e || (this.e = {}), r = n[e], i = [];
                    if (r && t) for (var a = 0, o = r.length; a < o; a++) r[a].fn !== t && r[a].fn._ !== t && i.push(r[a]);
                    return i.length ? n[e] = i : delete n[e], this
                }
            }, t.exports = r
        }, {}], 7: [function (e, t, n) {
            !function (r, i) {
                if (void 0 !== n) i(t, e("select")); else {
                    var a = {exports: {}};
                    i(a, r.select), r.clipboardAction = a.exports
                }
            }(this, function (e, t) {
                "use strict";

                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                var r = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(t), i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), o = function () {
                    function e(t) {
                        n(this, e), this.resolveOptions(t), this.initSelection()
                    }

                    return a(e, [{
                        key: "resolveOptions", value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                        }
                    }, {
                        key: "initSelection", value: function () {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake", value: function () {
                            var e = this, t = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function () {
                                return e.removeFake()
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                            var n = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, r.default)(this.fakeElem), this.copyText()
                        }
                    }, {
                        key: "removeFake", value: function () {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget", value: function () {
                            this.selectedText = (0, r.default)(this.target), this.copyText()
                        }
                    }, {
                        key: "copyText", value: function () {
                            var e = void 0;
                            try {
                                e = document.execCommand(this.action)
                            } catch (t) {
                                e = !1
                            }
                            this.handleResult(e)
                        }
                    }, {
                        key: "handleResult", value: function (e) {
                            this.emitter.emit(e ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection", value: function () {
                            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy", value: function () {
                            this.removeFake()
                        }
                    }, {
                        key: "action", set: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        }, get: function () {
                            return this._action
                        }
                    }, {
                        key: "target", set: function (e) {
                            if (void 0 !== e) {
                                if (!e || "object" !== (void 0 === e ? "undefined" : i(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = e
                            }
                        }, get: function () {
                            return this._target
                        }
                    }]), e
                }();
                e.exports = o
            })
        }, {select: 5}], 8: [function (e, t, n) {
            !function (r, i) {
                if (void 0 !== n) i(t, e("./clipboard-action"), e("tiny-emitter"), e("good-listener")); else {
                    var a = {exports: {}};
                    i(a, r.clipboardAction, r.tinyEmitter, r.goodListener), r.clipboard = a.exports
                }
            }(this, function (e, t, n, r) {
                "use strict";

                function i(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                function a(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function o(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function s(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                function l(e, t) {
                    var n = "data-clipboard-" + e;
                    if (t.hasAttribute(n)) return t.getAttribute(n)
                }

                var c = i(t), u = i(n), d = i(r),
                    f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, p = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }

                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(), h = function (e) {
                        function t(e, n) {
                            a(this, t);
                            var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return r.resolveOptions(n), r.listenClick(e), r
                        }

                        return s(t, u.default), p(t, [{
                            key: "resolveOptions", value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === f(e.container) ? e.container : document.body
                            }
                        }, {
                            key: "listenClick", value: function (e) {
                                var t = this;
                                this.listener = (0, d.default)(e, "click", function (e) {
                                    return t.onClick(e)
                                })
                            }
                        }, {
                            key: "onClick", value: function (e) {
                                var t = e.delegateTarget || e.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new c.default({
                                    action: this.action(t),
                                    target: this.target(t),
                                    text: this.text(t),
                                    container: this.container,
                                    trigger: t,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction", value: function (e) {
                                return l("action", e)
                            }
                        }, {
                            key: "defaultTarget", value: function (e) {
                                var t = l("target", e);
                                if (t) return document.querySelector(t)
                            }
                        }, {
                            key: "defaultText", value: function (e) {
                                return l("text", e)
                            }
                        }, {
                            key: "destroy", value: function () {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported", value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                    t = "string" == typeof e ? [e] : e, n = !!document.queryCommandSupported;
                                return t.forEach(function (e) {
                                    n = n && !!document.queryCommandSupported(e)
                                }), n
                            }
                        }]), t
                    }();
                e.exports = h
            })
        }, {"./clipboard-action": 7, "good-listener": 4, "tiny-emitter": 6}]
    }, {}, [8])(8)
}), define("newweb/common/constData", [], function (e, t) {
    t.errorMsg = {
        10: "抱歉，个别句子太长啦，我读不懂",
        20: "抱歉，超过5000字实在太长啦，让我喘口气",
        30: "抱歉，我绞尽脑汁了",
        40: "抱歉，我还在学习该语种中",
        50: "抱歉，请不要频繁请求服务",
        transRequestError: "翻译出错，请检查网络后重试"
    }
}), define("newweb/common/copy", ["./ZeroClipboard", "./log", "./utils"], function (e, t) {
    var n = e("./jquery-1.7");
    e("./ZeroClipboard");
    var r = e("./log");
    e("./clipboard.min");
    var i = e("./utils");
    window.copyResult = function () {
        return n.trim(n("#transTarget").html().replace(/<br\s+class="fanyi-br-empty-format"\s*.*?>/gi, "").replace(/<br\s*.*?>/gi, "\r\n").replace(/<\/p>/gi, "\r\n").replace(/<p.*?>/gi, "").replace(/<span.*?>/gi, "").replace(/<\/span>/gi, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&copy;/g, "©"))
    };
    var a = function () {
        window.clipboardData && (window.clipboardData.clearData(), window.clipboardData.setData("Text", copyResult()) || alert("您的浏览器不支持直接复制功能，请手动复制。"))
    };
    t.init = function () {
        function e(e) {
            alert("您的浏览器不支持直接复制功能，请手动复制；或在浏览器设置中开启flash插件功能。")
        }

        if (document.oncopy = function (e) {
            var t = (e = e || event).clipboardData || window.clipboardData, n = i.getSelectionText();
            if (n) return t.setData("text", n), e.preventDefault(), !1
        }, !(n("#copyit").length > 0)) {
            if (Clipboard.isSupported()) {
                var t = new Clipboard("#targetCopy", {text: copyResult});
                return t.on("success", function (e) {
                    n("#targetCopy .tips__text--short").text("已复制"), r.clog("COPY_CLICK"), setTimeout(function () {
                        n("#targetCopy .tips__text--short").text("复制")
                    }, 1e3)
                }), void t.on("error", function (e) {
                    r.clog("COPY_CLICK"), alert("您的浏览器不支持直接复制功能，请手动复制。")
                })
            }
            if (n.browser.msie) n('<a id="copyit" href="javascript:;" title=""></a>').appendTo("#targetCopy").show().click(function () {
                return a(), r.clog("COPY_CLICK"), n("#targetCopy .tips__text--short").text("已复制"), n(this).text("").blur(), setTimeout(function () {
                    n("#targetCopy .tips__text--short").text("复制")
                }, 1e3), !1
            }); else {
                var o = new ZeroClipboard(document.getElementById("targetCopy"));
                n("#targetCopy").on("click", e), o.on("ready", function (t) {
                    o.on("copy", function (e) {
                        e.clipboardData.setData("text/plain", copyResult()), n("#targetCopy .tips__text--short").text("已复制"), r.clog("COPY_CLICK"), setTimeout(function () {
                            n("#targetCopy .tips__text--short").text("复制")
                        }, 1e3)
                    }), n("#targetCopy").on("mouseover", function (e) {
                        n(this).addClass("copy-hover"), n("#targetCopy .speaker__tips").css("display", "block")
                    }), n("#targetCopy").on("mouseout", function (e) {
                        n(this).removeClass("copy-hover"), n("#targetCopy .speaker__tips").css("display", "none")
                    }), n("#targetCopy").off("click", e)
                })
            }
        }
    }
}), define("newweb/common/docTrans", ["./form", "./md5", "./jquery-1.7", "./account", "./log", "../langSelect", "./TranslateState", "./star", "./select", "./utils"], function (e, t) {
    function n() {
        var e = p("#language").val().split("2"), t = p("#docUploadFile").val(), n = t.split("."), r = n[n.length - 1],
            i = t.split("\\"), a = i[i.length - 1], o = p("#docUploadFile")[0].files, s = 1e3, l = (new Date).getTime(),
            c = p.md5("new-fanyiweb" + l + "ydsecret://newfanyiweb.doctran/sign/0j9n2{3mLSN-$Lg]K4o0N2}" + a);
        return o && o[0] && o[0].size && (s = o[0].size), {
            from: e[0],
            to: e[1],
            type: r,
            filename: a,
            client: "docserver",
            keyfrom: "new-fanyiweb",
            size: s,
            sign: c,
            salt: l
        }
    }

    function r(e) {
        if (e <= 0) return "";
        var t = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], n = Math.floor(Math.log(e) / Math.log(1024));
        return (e / Math.pow(1024, n)).toPrecision(3) + t[n]
    }

    function i() {
        "true" != m.storage("uploadTipsClose") && b.show()
    }

    function a(e, t) {
        var n = t.name, r = t.size, i = t.msg;
        E = n, p(".doc-name").text(n), p(".doc-size-msg").text(r), e ? (_.find(".doc-type").addClass("doc-type-error"), p(".doc-error-msg").text(i).show(), p(".doc-size-msg").text(r).hide()) : (_.find(".doc-type").removeClass("doc-type-error"), p(".doc-error-msg").text(i).hide(), p(".doc-size-msg").text(r).show()), d(), _.show()
    }

    function o() {
        _.hide()
    }

    function s(e) {
        p(".upload__percent").text(e.percent), p(".upload__filename").text(e.name), p(".upload__progress").css({width: e.percent})
    }

    function l(e) {
        s({percent: "100%", name: ""}), setTimeout(function () {
            if (0 == e.errorcode && e.key) {
                var t = n(), r = A;
                -1 != location.search.indexOf("type=pdf") && (r = resultUrlPdf), p("#language").val("AUTO"), window.location.href = [r, "?key=" + e.key, "&from=" + t.from, "&to=" + t.to, "&type=" + t.type, "&src=new-fanyiweb"].join("")
            } else 401 == e.errorcode ? (C.hide(), s({
                percent: "0%",
                name: ""
            }), p(".login-link").trigger("click")) : (g.clog("DOC_UPLOAD_ERROR", ""), C.hide(), s({
                percent: "0%",
                name: ""
            }), N ? N = !0 : alert("上传或解析失败（错误代码:" + e.errorcode + "）"))
        }, 500)
    }

    function c() {
        var e = p(".upload__progress--con").width(), t = n(), r = t.type;
        p(".upload__progress").width() !== e && p(".upload__progress").animate({width: .95 * e}, t.size / j[r])
    }

    function u() {
        S && (S.ajaxStop(), S = null), C.hide(), s({percent: "0%", name: ""})
    }

    function d() {
        v.hide()
    }

    function f() {
        v.show()
    }

    var p = e("./jquery-1.7");
    e("./form"), e("./md5");
    e("./account");
    var h = e("../langSelect"), m = e("./utils"), g = e("./log"), v = p("#docUploadCon"), y = p(".doc__upload--close"),
        b = p(".doc__upload--tip"), x = p("#docUploadFile"), w = p(".file__type--tips"), T = p("#docUploadForm"),
        _ = p("#docUploadBg"), k = p(".doc-delete"), C = p(".upload__cover"), S = "", E = "",
        j = {pdf: 957 / 4.88, docx: 47 / 2.66}, N = !1;
    x.attr("disabled", !1), x.val("");
    var A = "https://pdf.有道翻译_未完成.com/docview.html";
    if (-1 != location.href.indexOf("type=013")) {
        A = "https://pdf-test.有道翻译_未完成.com/docview.html";
        var D = p("#docUploadForm").attr("action1");
        p("#docUploadForm").attr("action", D)
    }
    t.init = function () {
        i(), y.on("click", function () {
            m.storage("uploadTipsClose", "true"), b.hide()
        }), x.hover(function () {
            w.show()
        }, function () {
            w.hide()
        }), x.on("click", function (e) {
            0 == p(".user-name").length && (p(".login-link").trigger("click"), e.preventDefault(), e.returnValue = !1)
        }), x.on("change", function () {
            var e = x[0].files, n = -1, i = x.val();
            if (h.switchMode(!0), t.isDocMode = !0, t.isDocReady = !1, p("#docLangTip").show(), e && e[0] && e[0].size && (n = e[0].size), "" != (i = e && e[0] && e[0].name ? e[0].name : i.split("\\")[i.split("\\").length - 1])) {
                if (!/(.docx|.pdf|.doc|.ppt|.pptx)$/i.test(i)) return a(!0, {
                    msg: "文档格式错误,目前仅支持doc/docx/pdf/pptx/ppt格式",
                    name: i,
                    size: r(n)
                }), void g.clog("DOC_SELECTED_ERROR", "");
                var o = i.split(".");
                if (o = o[o.length - 1], g.clog("DOC_UPLOAD_CLICK&docType=" + o), n > 104857600) return a(!0, {
                    msg: "文件大小不能超过100M",
                    name: i,
                    size: r(n)
                }), void g.clog("DOC_SELECTED_ERROR");
                t.isDocReady = !0, a(!1, {msg: "", name: i, size: r(n)})
            } else k.trigger("click")
        }), k.on("click", function () {
            o(), x.val(""), p("#docLangTip").hide(), h.switchMode(!1), f(), t.isDocMode = !1, t.isDocReady = !1
        }), p(".upload--cancel").on("click", function () {
            N = !0, u(), window.location.reload()
        })
    }, t.hideDocTrans = d, t.showDocTrans = f, t.uploadFile = function () {
        s({percent: "0%", name: E}), C.show(), S = T.ajaxForm({
            dataType: "json",
            data: n(),
            timeout: 3e5,
            crossDomain: !0,
            xhrFields: {withCredentials: !0},
            beforeSubmit: function (e, t, n) {
            },
            uploadProgress: function (e, t, n, r) {
                p(".upload__percent").text(r + "%")
            },
            success: function (e, t) {
                l(e)
            },
            error: function (e, t) {
                g.clog("DOC_UPLOAD_ERROR", ""), u(), N ? N = !0 : (alert("上传失败，请重试。"), window.location.reload())
            }
        }), c(), T.submit()
    }, t.cancelUploadFile = u, t.isDocMode = !1, t.isDocReady = !1
}), define("newweb/common/download", ["./utils", "./log"], function (e, t) {
    function n() {
        a.on("click", function () {
            c.clog("AD_FULLBANNER_CLOSE"), i.cookie("fanyi-ad-closed", 1), u()
        }), s.on("click", function () {
            i.cookie("fanyi-ad-closed", 1), u(), c.clog("AD_FULLBANNER_CLOSE"), c.clog("AD_FULLBANNER_CLICK")
        })
    }

    var r = e("./jquery-1.7"), i = e("./utils"), a = r(".guide-close"), o = r(".dict-download-guide"),
        s = r(".download-guide-link"), l = r(".download-guide-img"), c = e("./log"), u = function () {
            o.hide()
        }, d = function (e) {
            r.ajax({
                type: "GET",
                url: "http://impservice.dictapp.有道翻译_未完成.com/imp/request.s",
                data: {
                    req: window.location.href,
                    rnd: (new Date).getTime(),
                    syndid: 58,
                    memberid: 311,
                    tn: "text_700_400",
                    width: r(".input__original").width(),
                    height: 400,
                    ref2: "http://www.有道翻译_未完成.com/"
                },
                dataType: "jsonp",
                success: function (t) {
                    t && "" != t.mimeSrc && e(t)
                },
                error: function (e) {
                }
            })
        }, f = function () {
            c.clog("AD_FULLBANNER_SHOW"), o.show()
        }, p = function () {
            d(function (e) {
                var t = e.advId, n = i.cookie("fanyi-ad-id"), r = i.cookie("fanyi-ad-closed"), a = e.link || "javascript:;",
                    o = e.mimeSrc;
                t == n && 1 == r || (i.cookie("fanyi-ad-id", t), i.cookie("fanyi-ad-closed", 0), s.attr("href", a), "" == e.link && s.css({cursor: "default"}), l.attr("src", o), f())
            })
        };
    t.init = function () {
        n(), p()
    }
}), define("newweb/common/form", [], function (e) {
    !function (t) {
        t(e("./jquery-1.7"))
    }(function (e) {
        "use strict";

        function t(t) {
            var n = t.data;
            t.isDefaultPrevented() || (t.preventDefault(), e(t.target).closest("form").ajaxSubmit(n))
        }

        function n(t) {
            var n = t.target, r = e(n);
            if (!r.is("[type=submit],[type=image]")) {
                var i = r.closest("[type=submit]");
                if (0 === i.length) return;
                n = i[0]
            }
            var a = n.form;
            if (a.clk = n, "image" === n.type) if (void 0 !== t.offsetX) a.clk_x = t.offsetX, a.clk_y = t.offsetY; else if ("function" == typeof e.fn.offset) {
                var o = r.offset();
                a.clk_x = t.pageX - o.left, a.clk_y = t.pageY - o.top
            } else a.clk_x = t.pageX - n.offsetLeft, a.clk_y = t.pageY - n.offsetTop;
            setTimeout(function () {
                a.clk = a.clk_x = a.clk_y = null
            }, 100)
        }

        function r() {
            if (e.fn.ajaxSubmit.debug) {
                var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
            }
        }

        var i = /\r?\n/g, a = {};
        a.fileapi = void 0 !== e('<input type="file">').get(0).files, a.formdata = void 0 !== window.FormData;
        var o = !!e.fn.prop;
        e.fn.attr2 = function () {
            if (!o) return this.attr.apply(this, arguments);
            var e = this.prop.apply(this, arguments);
            return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
        }, e.fn.ajaxSubmit = function (t, n, i, s) {
            function l(n) {
                var r, i, a = e.param(n, t.traditional).split("&"), o = a.length, s = [];
                for (r = 0; r < o; r++) a[r] = a[r].replace(/\+/g, " "), i = a[r].split("="), s.push([decodeURIComponent(i[0]), decodeURIComponent(i[1])]);
                return s
            }

            function c(n) {
                function i(e) {
                    var t = null;
                    try {
                        e.contentWindow && (t = e.contentWindow.document)
                    } catch (e) {
                        r("cannot get iframe.contentWindow document: " + e)
                    }
                    if (t) return t;
                    try {
                        t = e.contentDocument ? e.contentDocument : e.document
                    } catch (n) {
                        r("cannot get iframe.contentDocument: " + n), t = e.document
                    }
                    return t
                }

                function a() {
                    function t() {
                        try {
                            var e = i(g).readyState;
                            r("state = " + e), e && "uninitialized" === e.toLowerCase() && setTimeout(t, 50)
                        } catch (e) {
                            r("Server abort: ", e, " (", e.name, ")"), s(j), T && clearTimeout(T), T = void 0
                        }
                    }

                    var n = p.attr2("target"), a = p.attr2("action"),
                        o = p.attr("enctype") || p.attr("encoding") || "multipart/form-data";
                    _.setAttribute("target", h), u && !/post/i.test(u) || _.setAttribute("method", "POST"), a !== d.url && _.setAttribute("action", d.url), d.skipEncodingOverride || u && !/post/i.test(u) || p.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    }), d.timeout && (T = setTimeout(function () {
                        w = !0, s(E)
                    }, d.timeout));
                    var l = [];
                    try {
                        if (d.extraData) for (var c in d.extraData) d.extraData.hasOwnProperty(c) && (e.isPlainObject(d.extraData[c]) && d.extraData[c].hasOwnProperty("name") && d.extraData[c].hasOwnProperty("value") ? l.push(e('<input type="hidden" name="' + d.extraData[c].name + '">', C).val(d.extraData[c].value).appendTo(_)[0]) : l.push(e('<input type="hidden" name="' + c + '">', C).val(d.extraData[c]).appendTo(_)[0]));
                        d.iframeTarget || m.appendTo(S), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                        try {
                            _.submit()
                        } catch (e) {
                            document.createElement("form").submit.apply(_)
                        }
                    } finally {
                        _.setAttribute("action", a), _.setAttribute("enctype", o), n ? _.setAttribute("target", n) : p.removeAttr("target"), e(l).remove()
                    }
                }

                function s(t) {
                    if (!y.aborted && !L) {
                        if ((O = i(g)) || (r("cannot access response document"), t = j), t === E && y) return y.abort("timeout"), void k.reject(y, "timeout");
                        if (t === j && y) return y.abort("server abort"), void k.reject(y, "error", "server abort");
                        if (O && O.location.href !== d.iframeSrc || w) {
                            g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                            var n, a = "success";
                            try {
                                if (w) throw"timeout";
                                var o = "xml" === d.dataType || O.XMLDocument || e.isXMLDoc(O);
                                if (r("isXml=" + o), !o && window.opera && (null === O.body || !O.body.innerHTML) && --F) return r("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                                var l = O.body ? O.body : O.documentElement;
                                y.responseText = l ? l.innerHTML : null, y.responseXML = O.XMLDocument ? O.XMLDocument : O, o && (d.dataType = "xml"), y.getResponseHeader = function (e) {
                                    return {"content-type": d.dataType}[e.toLowerCase()]
                                }, l && (y.status = Number(l.getAttribute("status")) || y.status, y.statusText = l.getAttribute("statusText") || y.statusText);
                                var c = (d.dataType || "").toLowerCase(), u = /(json|script|text)/.test(c);
                                if (u || d.textarea) {
                                    var p = O.getElementsByTagName("textarea")[0];
                                    if (p) y.responseText = p.value, y.status = Number(p.getAttribute("status")) || y.status, y.statusText = p.getAttribute("statusText") || y.statusText; else if (u) {
                                        var h = O.getElementsByTagName("pre")[0], v = O.getElementsByTagName("body")[0];
                                        h ? y.responseText = h.textContent ? h.textContent : h.innerText : v && (y.responseText = v.textContent ? v.textContent : v.innerText)
                                    }
                                } else "xml" === c && !y.responseXML && y.responseText && (y.responseXML = q(y.responseText));
                                try {
                                    D = R(y, c, d)
                                } catch (e) {
                                    a = "parsererror", y.error = n = e || a
                                }
                            } catch (e) {
                                r("error caught: ", e), a = "error", y.error = n = e || a
                            }
                            y.aborted && (r("upload aborted"), a = null), y.status && (a = y.status >= 200 && y.status < 300 || 304 === y.status ? "success" : "error"), "success" === a ? (d.success && d.success.call(d.context, D, "success", y), k.resolve(y.responseText, "success", y), f && e.event.trigger("ajaxSuccess", [y, d])) : a && (void 0 === n && (n = y.statusText), d.error && d.error.call(d.context, y, a, n), k.reject(y, "error", n), f && e.event.trigger("ajaxError", [y, d, n])), f && e.event.trigger("ajaxComplete", [y, d]), f && !--e.active && e.event.trigger("ajaxStop"), d.complete && d.complete.call(d.context, y, a), L = !0, d.timeout && clearTimeout(T), setTimeout(function () {
                                d.iframeTarget ? m.attr("src", d.iframeSrc) : m.remove(), y.responseXML = null
                            }, 100)
                        }
                    }
                }

                var l, c, d, f, h, m, g, y, b, x, w, T, _ = p[0], k = e.Deferred();
                if (k.abort = function (e) {
                    y.abort(e)
                }, n) for (c = 0; c < v.length; c++) l = e(v[c]), o ? l.prop("disabled", !1) : l.removeAttr("disabled");
                (d = e.extend(!0, {}, e.ajaxSettings, t)).context = d.context || d, h = "jqFormIO" + (new Date).getTime();
                var C = _.ownerDocument, S = p.closest("body");
                if (d.iframeTarget ? (x = (m = e(d.iframeTarget, C)).attr2("name")) ? h = x : m.attr2("name", h) : (m = e('<iframe name="' + h + '" src="' + d.iframeSrc + '" />', C)).css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                }), g = m[0], y = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {
                    },
                    getResponseHeader: function () {
                    },
                    setRequestHeader: function () {
                    },
                    abort: function (t) {
                        var n = "timeout" === t ? "timeout" : "aborted";
                        r("aborting upload... " + n), this.aborted = 1;
                        try {
                            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                        } catch (e) {
                        }
                        m.attr("src", d.iframeSrc), y.error = n, d.error && d.error.call(d.context, y, n, t), f && e.event.trigger("ajaxError", [y, d, n]), d.complete && d.complete.call(d.context, y, n)
                    }
                }, (f = d.global) && 0 == e.active++ && e.event.trigger("ajaxStart"), f && e.event.trigger("ajaxSend", [y, d]), d.beforeSend && !1 === d.beforeSend.call(d.context, y, d)) return d.global && e.active--, k.reject(), k;
                if (y.aborted) return k.reject(), k;
                (b = _.clk) && (x = b.name) && !b.disabled && (d.extraData = d.extraData || {}, d.extraData[x] = b.value, "image" === b.type && (d.extraData[x + ".x"] = _.clk_x, d.extraData[x + ".y"] = _.clk_y));
                var E = 1, j = 2, N = e("meta[name=csrf-token]").attr("content"),
                    A = e("meta[name=csrf-param]").attr("content");
                A && N && (d.extraData = d.extraData || {}, d.extraData[A] = N), d.forceSync ? a() : setTimeout(a, 10);
                var D, O, L, F = 50, q = e.parseXML || function (e, t) {
                    return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" !== t.documentElement.nodeName ? t : null
                }, M = e.parseJSON || function (e) {
                    return window.eval("(" + e + ")")
                }, R = function (t, n, r) {
                    var i = t.getResponseHeader("content-type") || "", a = ("xml" === n || !n) && i.indexOf("xml") >= 0,
                        o = a ? t.responseXML : t.responseText;
                    return a && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), r && r.dataFilter && (o = r.dataFilter(o, n)), "string" == typeof o && (("json" === n || !n) && i.indexOf("json") >= 0 ? o = M(o) : ("script" === n || !n) && i.indexOf("javascript") >= 0 && e.globalEval(o)), o
                };
                return k
            }

            if (!this.length) return r("ajaxSubmit: skipping submit process - no element selected"), this;
            var u, d, f, p = this;
            "function" == typeof t ? t = {success: t} : "string" == typeof t || !1 === t && arguments.length > 0 ? (t = {
                url: t,
                data: n,
                dataType: i
            }, "function" == typeof s && (t.success = s)) : void 0 === t && (t = {}), u = t.method || t.type || this.attr2("method"), (f = (f = "string" == typeof(d = t.url || this.attr2("action")) ? e.trim(d) : "") || window.location.href || "") && (f = (f.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
                url: f,
                success: e.ajaxSettings.success,
                type: u || e.ajaxSettings.type,
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
            }, t);
            var h = {};
            if (this.trigger("form-pre-serialize", [this, t, h]), h.veto) return r("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
            if (t.beforeSerialize && !1 === t.beforeSerialize(this, t)) return r("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
            var m = t.traditional;
            void 0 === m && (m = e.ajaxSettings.traditional);
            var g, v = [], y = this.formToArray(t.semantic, v, t.filtering);
            if (t.data) {
                var b = e.isFunction(t.data) ? t.data(y) : t.data;
                t.extraData = b, g = e.param(b, m)
            }
            if (t.beforeSubmit && !1 === t.beforeSubmit(y, this, t)) return r("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
            if (this.trigger("form-submit-validate", [y, this, t, h]), h.veto) return r("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
            var x = e.param(y, m);
            g && (x = x ? x + "&" + g : g), "GET" === t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + x, t.data = null) : t.data = x;
            var w = [];
            if (t.resetForm && w.push(function () {
                p.resetForm()
            }), t.clearForm && w.push(function () {
                p.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
                var T = t.success || function () {
                };
                w.push(function (n, r, i) {
                    var a = arguments, o = t.replaceTarget ? "replaceWith" : "html";
                    e(t.target)[o](n).each(function () {
                        T.apply(this, a)
                    })
                })
            } else t.success && (e.isArray(t.success) ? e.merge(w, t.success) : w.push(t.success));
            if (t.success = function (e, n, r) {
                for (var i = t.context || this, a = 0, o = w.length; a < o; a++) w[a].apply(i, [e, n, r || p, p])
            }, t.error) {
                var _ = t.error;
                t.error = function (e, n, r) {
                    var i = t.context || this;
                    _.apply(i, [e, n, r, p])
                }
            }
            if (t.complete) {
                var k = t.complete;
                t.complete = function (e, n) {
                    var r = t.context || this;
                    k.apply(r, [e, n, p])
                }
            }
            var C = e("input[type=file]:enabled", this).filter(function () {
                    return "" !== e(this).val()
                }).length > 0, S = "multipart/form-data", E = p.attr("enctype") === S || p.attr("encoding") === S,
                j = a.fileapi && a.formdata;
            r("fileAPI :" + j);
            var N, A = (C || E) && !j;
            !1 !== t.iframe && (t.iframe || A) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
                N = c(y)
            }) : N = c(y) : N = (C || E) && j ? function (n) {
                for (var r = new FormData, i = 0; i < n.length; i++) r.append(n[i].name, n[i].value);
                if (t.extraData) {
                    var a = l(t.extraData);
                    for (i = 0; i < a.length; i++) a[i] && r.append(a[i][0], a[i][1])
                }
                t.data = null;
                var o = e.extend(!0, {}, e.ajaxSettings, t, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: u || "POST"
                });
                t.uploadProgress && (o.xhr = function () {
                    var n = e.ajaxSettings.xhr();
                    return n.upload && n.upload.addEventListener("progress", function (e) {
                        var n = 0, r = e.loaded || e.position, i = e.total;
                        e.lengthComputable && (n = Math.ceil(r / i * 100)), t.uploadProgress(e, r, i, n)
                    }, !1), n
                }), o.data = null;
                var s = o.beforeSend;
                return o.beforeSend = function (e, n) {
                    t.formData ? n.data = t.formData : n.data = r, s && s.call(this, e, n)
                }, e.ajax(o)
            }(y) : e.ajax(t), p.removeData("jqxhr").data("jqxhr", N);
            for (var D = 0; D < v.length; D++) v[D] = null;
            return this.trigger("form-submit-notify", [this, t]), this
        }, e.fn.ajaxForm = function (i, a, o, s) {
            if (("string" == typeof i || !1 === i && arguments.length > 0) && (i = {
                url: i,
                data: a,
                dataType: o
            }, "function" == typeof s && (i.success = s)), i = i || {}, i.delegation = i.delegation && e.isFunction(e.fn.on), !i.delegation && 0 === this.length) {
                var l = {s: this.selector, c: this.context};
                return !e.isReady && l.s ? (r("DOM not ready, queuing ajaxForm"), e(function () {
                    e(l.s, l.c).ajaxForm(i)
                }), this) : (r("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
            }
            return i.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, i, t).on("click.form-plugin", this.selector, i, n), this) : this.ajaxFormUnbind().on("submit.form-plugin", i, t).on("click.form-plugin", i, n)
        }, e.fn.ajaxFormUnbind = function () {
            return this.off("submit.form-plugin click.form-plugin")
        }, e.fn.formToArray = function (t, n, r) {
            var i = [];
            if (0 === this.length) return i;
            var o, s = this[0], l = this.attr("id"),
                c = t || void 0 === s.elements ? s.getElementsByTagName("*") : s.elements;
            if (c && (c = e.makeArray(c)), l && (t || /(Edge|Trident)\//.test(navigator.userAgent)) && (o = e(':input[form="' + l + '"]').get()).length && (c = (c || []).concat(o)), !c || !c.length) return i;
            e.isFunction(r) && (c = e.map(c, r));
            var u, d, f, p, h, m, g;
            for (u = 0, m = c.length; u < m; u++) if (h = c[u], (f = h.name) && !h.disabled) if (t && s.clk && "image" === h.type) s.clk === h && (i.push({
                name: f,
                value: e(h).val(),
                type: h.type
            }), i.push({name: f + ".x", value: s.clk_x}, {
                name: f + ".y",
                value: s.clk_y
            })); else if ((p = e.fieldValue(h, !0)) && p.constructor === Array) for (n && n.push(h), d = 0, g = p.length; d < g; d++) i.push({
                name: f,
                value: p[d]
            }); else if (a.fileapi && "file" === h.type) {
                n && n.push(h);
                var v = h.files;
                if (v.length) for (d = 0; d < v.length; d++) i.push({
                    name: f,
                    value: v[d],
                    type: h.type
                }); else i.push({name: f, value: "", type: h.type})
            } else null !== p && void 0 !== p && (n && n.push(h), i.push({
                name: f,
                value: p,
                type: h.type,
                required: h.required
            }));
            if (!t && s.clk) {
                var y = e(s.clk), b = y[0];
                (f = b.name) && !b.disabled && "image" === b.type && (i.push({
                    name: f,
                    value: y.val()
                }), i.push({name: f + ".x", value: s.clk_x}, {name: f + ".y", value: s.clk_y}))
            }
            return i
        }, e.fn.formSerialize = function (t) {
            return e.param(this.formToArray(t))
        }, e.fn.fieldSerialize = function (t) {
            var n = [];
            return this.each(function () {
                var r = this.name;
                if (r) {
                    var i = e.fieldValue(this, t);
                    if (i && i.constructor === Array) for (var a = 0, o = i.length; a < o; a++) n.push({
                        name: r,
                        value: i[a]
                    }); else null !== i && void 0 !== i && n.push({name: this.name, value: i})
                }
            }), e.param(n)
        }, e.fn.fieldValue = function (t) {
            for (var n = [], r = 0, i = this.length; r < i; r++) {
                var a = this[r], o = e.fieldValue(a, t);
                null === o || void 0 === o || o.constructor === Array && !o.length || (o.constructor === Array ? e.merge(n, o) : n.push(o))
            }
            return n
        }, e.fieldValue = function (t, n) {
            var r = t.name, a = t.type, o = t.tagName.toLowerCase();
            if (void 0 === n && (n = !0), n && (!r || t.disabled || "reset" === a || "button" === a || ("checkbox" === a || "radio" === a) && !t.checked || ("submit" === a || "image" === a) && t.form && t.form.clk !== t || "select" === o && -1 === t.selectedIndex)) return null;
            if ("select" === o) {
                var s = t.selectedIndex;
                if (s < 0) return null;
                for (var l = [], c = t.options, u = "select-one" === a, d = u ? s + 1 : c.length, f = u ? s : 0; f < d; f++) {
                    var p = c[f];
                    if (p.selected && !p.disabled) {
                        var h = p.value;
                        if (h || (h = p.attributes && p.attributes.value && !p.attributes.value.specified ? p.text : p.value), u) return h;
                        l.push(h)
                    }
                }
                return l
            }
            return e(t).val().replace(i, "\r\n")
        }, e.fn.clearForm = function (t) {
            return this.each(function () {
                e("input,select,textarea", this).clearFields(t)
            })
        }, e.fn.clearFields = e.fn.clearInputs = function (t) {
            var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
            return this.each(function () {
                var r = this.type, i = this.tagName.toLowerCase();
                n.test(r) || "textarea" === i ? this.value = "" : "checkbox" === r || "radio" === r ? this.checked = !1 : "select" === i ? this.selectedIndex = -1 : "file" === r ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (!0 === t && /hidden/.test(r) || "string" == typeof t && e(this).is(t)) && (this.value = "")
            })
        }, e.fn.resetForm = function () {
            return this.each(function () {
                var t = e(this), n = this.tagName.toLowerCase();
                switch (n) {
                    case"input":
                        this.checked = this.defaultChecked;
                    case"textarea":
                        return this.value = this.defaultValue, !0;
                    case"option":
                    case"optgroup":
                        var r = t.parents("select");
                        return r.length && r[0].multiple ? "option" === n ? this.selected = this.defaultSelected : t.find("option").resetForm() : r.resetForm(), !0;
                    case"select":
                        return t.find("option").each(function (e) {
                            if (this.selected = this.defaultSelected, this.defaultSelected && !t[0].multiple) return t[0].selectedIndex = e, !1
                        }), !0;
                    case"label":
                        var i = e(t.attr("for")), a = t.find("input,select,textarea");
                        return i[0] && a.unshift(i[0]), a.resetForm(), !0;
                    case"form":
                        return ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset(), !0;
                    default:
                        return t.find("form,input,label,select,textarea").resetForm(), !0
                }
            })
        }, e.fn.enable = function (e) {
            return void 0 === e && (e = !0), this.each(function () {
                this.disabled = !e
            })
        }, e.fn.selected = function (t) {
            return void 0 === t && (t = !0), this.each(function () {
                var n = this.type;
                if ("checkbox" === n || "radio" === n) this.checked = t; else if ("option" === this.tagName.toLowerCase()) {
                    var r = e(this).parent("select");
                    t && r[0] && "select-one" === r[0].type && r.find("option").selected(!1), this.selected = t
                }
            })
        }, e.fn.ajaxSubmit.debug = !1
    })
}), define("newweb/common/hotLink", ["./log"], function (e, t) {
    var n = e("./jquery-1.7"), r = (e("./log"), n(".fanyi__popularize a")), i = function () {
        n.ajax({
            type: "GET",
            url: "http://impservice.dictapp.有道翻译_未完成.com/imp/request.s",
            data: {
                req: window.location.href,
                rnd: (new Date).getTime(),
                syndid: 58,
                memberid: 310,
                tn: "text_" + n(".input__original").width() + "_18",
                width: n(".input__original").width(),
                height: 18,
                ref2: "http://www.有道翻译_未完成.com/"
            },
            dataType: "jsonp",
            success: function (e) {
                e && e.title ? (r.text(e.title), r.attr("href", e.link), n(".fanyi__popularize").show()) : n(".fanyi__popularize").hide()
            },
            error: function (e) {
            }
        })
    };
    t.init = function () {
        i()
    }
}), define("newweb/common/jquery-1.7", [], function (e, t) {
    return function (e, t) {
        function n(e) {
            var t, n, r = M[e] = {};
            for (t = 0, n = (e = e.split(/\s+/)).length; t < n; t++) r[e[t]] = !0;
            return r
        }

        function r(e, n, r) {
            if (r === t && 1 === e.nodeType) {
                var i = "data-" + n.replace(H, "-$1").toLowerCase();
                if ("string" == typeof(r = e.getAttribute(i))) {
                    try {
                        r = "true" === r || "false" !== r && ("null" === r ? null : q.isNumeric(r) ? parseFloat(r) : I.test(r) ? q.parseJSON(r) : r)
                    } catch (e) {
                    }
                    q.data(e, n, r)
                } else r = t
            }
            return r
        }

        function i(e) {
            for (var t in e) if (("data" !== t || !q.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function a(e, t, n) {
            var r = t + "defer", i = t + "queue", a = t + "mark", o = q._data(e, r);
            !o || "queue" !== n && q._data(e, i) || "mark" !== n && q._data(e, a) || setTimeout(function () {
                q._data(e, i) || q._data(e, a) || (q.removeData(e, r, !0), o.fire())
            }, 0)
        }

        function o() {
            return !1
        }

        function s() {
            return !0
        }

        function l(e) {
            return !e || !e.parentNode || 11 === e.parentNode.nodeType
        }

        function c(e, t, n) {
            if (t = t || 0, q.isFunction(t)) return q.grep(e, function (e, r) {
                return !!t.call(e, r, e) === n
            });
            if (t.nodeType) return q.grep(e, function (e, r) {
                return e === t === n
            });
            if ("string" == typeof t) {
                var r = q.grep(e, function (e) {
                    return 1 === e.nodeType
                });
                if (ce.test(t)) return q.filter(t, r, !n);
                t = q.filter(t, r)
            }
            return q.grep(e, function (e, r) {
                return q.inArray(e, t) >= 0 === n
            })
        }

        function u(e) {
            var t = pe.split(" "), n = e.createDocumentFragment();
            if (n.createElement) for (; t.length;) n.createElement(t.pop());
            return n
        }

        function d(e, t) {
            return q.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function f(e, t) {
            if (1 === t.nodeType && q.hasData(e)) {
                var n, r, i, a = q._data(e), o = q._data(t, a), s = a.events;
                if (s) {
                    delete o.handle, o.events = {};
                    for (n in s) for (r = 0, i = s[n].length; r < i; r++) q.event.add(t, n + (s[n][r].namespace ? "." : "") + s[n][r].namespace, s[n][r], s[n][r].data)
                }
                o.data && (o.data = q.extend({}, o.data))
            }
        }

        function p(e, t) {
            var n;
            1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), "object" === (n = t.nodeName.toLowerCase()) ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(q.expando))
        }

        function h(e) {
            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName("*") : void 0 !== e.querySelectorAll ? e.querySelectorAll("*") : []
        }

        function m(e) {
            "checkbox" !== e.type && "radio" !== e.type || (e.defaultChecked = e.checked)
        }

        function g(e) {
            var t = (e.nodeName || "").toLowerCase();
            "input" === t ? m(e) : "script" !== t && void 0 !== e.getElementsByTagName && q.grep(e.getElementsByTagName("input"), m)
        }

        function v(e, t) {
            t.src ? q.ajax({
                url: t.src,
                async: !1,
                dataType: "script"
            }) : q.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ce, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
        }

        function y(e, t, n) {
            var r = "width" === t ? e.offsetWidth : e.offsetHeight, i = "width" === t ? Ie : He;
            return r > 0 ? ("border" !== n && q.each(i, function () {
                n || (r -= parseFloat(q.css(e, "padding" + this)) || 0), "margin" === n ? r += parseFloat(q.css(e, n + this)) || 0 : r -= parseFloat(q.css(e, "border" + this + "Width")) || 0
            }), r + "px") : (((r = je(e, t, t)) < 0 || null == r) && (r = e.style[t] || 0), r = parseFloat(r) || 0, n && q.each(i, function () {
                r += parseFloat(q.css(e, "padding" + this)) || 0, "padding" !== n && (r += parseFloat(q.css(e, "border" + this + "Width")) || 0), "margin" === n && (r += parseFloat(q.css(e, n + this)) || 0)
            }), r + "px")
        }

        function b(e) {
            return function (t, n) {
                if ("string" != typeof t && (n = t, t = "*"), q.isFunction(n)) for (var r, i, a = t.toLowerCase().split(et), o = 0, s = a.length; o < s; o++) r = a[o], (i = /^\+/.test(r)) && (r = r.substr(1) || "*"), (e[r] = e[r] || [])[i ? "unshift" : "push"](n)
            }
        }

        function x(e, n, r, i, a, o) {
            a = a || n.dataTypes[0], (o = o || {})[a] = !0;
            for (var s, l = e[a], c = 0, u = l ? l.length : 0, d = e === it; c < u && (d || !s); c++) "string" == typeof(s = l[c](n, r, i)) && (!d || o[s] ? s = t : (n.dataTypes.unshift(s), s = x(e, n, r, i, s, o)));
            return !d && s || o["*"] || (s = x(e, n, r, i, "*", o)), s
        }

        function w(e, n) {
            var r, i, a = q.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((a[r] ? e : i || (i = {}))[r] = n[r]);
            i && q.extend(!0, e, i)
        }

        function T(e, t, n, r) {
            if (q.isArray(t)) q.each(t, function (t, i) {
                n || Ue.test(e) ? r(e, i) : T(e + "[" + ("object" == typeof i || q.isArray(i) ? t : "") + "]", i, n, r)
            }); else if (n || null == t || "object" != typeof t) r(e, t); else for (var i in t) T(e + "[" + i + "]", t[i], n, r)
        }

        function _(e, n, r) {
            var i, a, o, s, l = e.contents, c = e.dataTypes, u = e.responseFields;
            for (a in u) a in r && (n[u[a]] = r[a]);
            for (; "*" === c[0];) c.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
            if (i) for (a in l) if (l[a] && l[a].test(i)) {
                c.unshift(a);
                break
            }
            if (c[0] in r) o = c[0]; else {
                for (a in r) {
                    if (!c[0] || e.converters[a + " " + c[0]]) {
                        o = a;
                        break
                    }
                    s || (s = a)
                }
                o = o || s
            }
            if (o) return o !== c[0] && c.unshift(o), r[o]
        }

        function k(e, n) {
            e.dataFilter && (n = e.dataFilter(n, e.dataType));
            var r, i, a, o, s, l, c, u, d = e.dataTypes, f = {}, p = d.length, h = d[0];
            for (r = 1; r < p; r++) {
                if (1 === r) for (i in e.converters) "string" == typeof i && (f[i.toLowerCase()] = e.converters[i]);
                if (o = h, "*" === (h = d[r])) h = o; else if ("*" !== o && o !== h) {
                    if (s = o + " " + h, !(l = f[s] || f["* " + h])) {
                        u = t;
                        for (c in f) if (((a = c.split(" "))[0] === o || "*" === a[0]) && (u = f[a[1] + " " + h])) {
                            !0 === (c = f[c]) ? l = u : !0 === u && (l = c);
                            break
                        }
                    }
                    l || u || q.error("No conversion from " + s.replace(" ", " to ")), !0 !== l && (n = l ? l(n) : u(c(n)))
                }
            }
            return n
        }

        function C() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {
            }
        }

        function S() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
            }
        }

        function E() {
            return setTimeout(j, 0), mt = q.now()
        }

        function j() {
            mt = t
        }

        function N(e, t) {
            var n = {};
            return q.each(bt.concat.apply([], bt.slice(0, t)), function () {
                n[this] = e
            }), n
        }

        function A(e) {
            if (!gt[e]) {
                var t = O.body, n = q("<" + e + ">").appendTo(t), r = n.css("display");
                n.remove(), "none" !== r && "" !== r || (ft || ((ft = O.createElement("iframe")).frameBorder = ft.width = ft.height = 0), t.appendChild(ft), pt && ft.createElement || ((pt = (ft.contentWindow || ft.contentDocument).document).write(("CSS1Compat" === O.compatMode ? "<!doctype html>" : "") + "<html><body>"), pt.close()), n = pt.createElement(e), pt.body.appendChild(n), r = q.css(n, "display"), t.removeChild(ft)), gt[e] = r
            }
            return gt[e]
        }

        function D(e) {
            return q.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }

        var O = e.document, L = e.navigator, F = e.location, q = function () {
            function n() {
                if (!s.isReady) {
                    try {
                        O.documentElement.doScroll("left")
                    } catch (e) {
                        return void setTimeout(n, 1)
                    }
                    s.ready()
                }
            }

            var r, i, a, o, s = function (e, t) {
                    return new s.fn.init(e, t, r)
                }, l = e.jQuery, c = e.$, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, d = /\S/, f = /^\s+/, p = /\s+$/,
                h = /\d/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, g = /^[\],:{}\s]*$/,
                v = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                y = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, b = /(?:^|:|,)(?:\s*\[)+/g,
                x = /(webkit)[ \/]([\w.]+)/, w = /(opera)(?:.*version)?[ \/]([\w.]+)/, T = /(msie) ([\w.]+)/,
                _ = /(mozilla)(?:.*? rv:([\w.]+))?/, k = /-([a-z]|[0-9])/gi, C = /^-ms-/, S = function (e, t) {
                    return (t + "").toUpperCase()
                }, E = L.userAgent, j = Object.prototype.toString, N = Object.prototype.hasOwnProperty,
                A = Array.prototype.push, D = Array.prototype.slice, F = String.prototype.trim,
                q = Array.prototype.indexOf, M = {};
            return s.fn = s.prototype = {
                constructor: s, init: function (e, n, r) {
                    var i, a, o, l;
                    if (!e) return this;
                    if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                    if ("body" === e && !n && O.body) return this.context = O, this[0] = O.body, this.selector = e, this.length = 1, this;
                    if ("string" == typeof e) {
                        if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : u.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                        if (i[1]) return n = n instanceof s ? n[0] : n, l = n ? n.ownerDocument || n : O, (o = m.exec(e)) ? s.isPlainObject(n) ? (e = [O.createElement(o[1])], s.fn.attr.call(e, n, !0)) : e = [l.createElement(o[1])] : e = ((o = s.buildFragment([i[1]], [l])).cacheable ? s.clone(o.fragment) : o.fragment).childNodes, s.merge(this, e);
                        if ((a = O.getElementById(i[2])) && a.parentNode) {
                            if (a.id !== i[2]) return r.find(e);
                            this.length = 1, this[0] = a
                        }
                        return this.context = O, this.selector = e, this
                    }
                    return s.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), s.makeArray(e, this))
                }, selector: "", jquery: "1.7", length: 0, size: function () {
                    return this.length
                }, toArray: function () {
                    return D.call(this, 0)
                }, get: function (e) {
                    return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                }, pushStack: function (e, t, n) {
                    var r = this.constructor();
                    return s.isArray(e) ? A.apply(r, e) : s.merge(r, e), r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
                }, each: function (e, t) {
                    return s.each(this, e, t)
                }, ready: function (e) {
                    return s.bindReady(), a.add(e), this
                }, eq: function (e) {
                    return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, slice: function () {
                    return this.pushStack(D.apply(this, arguments), "slice", D.call(arguments).join(","))
                }, map: function (e) {
                    return this.pushStack(s.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                }, end: function () {
                    return this.prevObject || this.constructor(null)
                }, push: A, sort: [].sort, splice: [].splice
            }, s.fn.init.prototype = s.fn, s.extend = s.fn.extend = function () {
                var e, n, r, i, a, o, l = arguments[0] || {}, c = 1, u = arguments.length, d = !1;
                for ("boolean" == typeof l && (d = l, l = arguments[1] || {}, c = 2), "object" == typeof l || s.isFunction(l) || (l = {}), u === c && (l = this, --c); c < u; c++) if (null != (e = arguments[c])) for (n in e) r = l[n], l !== (i = e[n]) && (d && i && (s.isPlainObject(i) || (a = s.isArray(i))) ? (a ? (a = !1, o = r && s.isArray(r) ? r : []) : o = r && s.isPlainObject(r) ? r : {}, l[n] = s.extend(d, o, i)) : i !== t && (l[n] = i));
                return l
            }, s.extend({
                noConflict: function (t) {
                    return e.$ === s && (e.$ = c), t && e.jQuery === s && (e.jQuery = l), s
                }, isReady: !1, readyWait: 1, holdReady: function (e) {
                    e ? s.readyWait++ : s.ready(!0)
                }, ready: function (e) {
                    if (!0 === e && !--s.readyWait || !0 !== e && !s.isReady) {
                        if (!O.body) return setTimeout(s.ready, 1);
                        if (s.isReady = !0, !0 !== e && --s.readyWait > 0) return;
                        a.fireWith(O, [s]), s.fn.trigger && s(O).trigger("ready").unbind("ready")
                    }
                }, bindReady: function () {
                    if (!a) {
                        if (a = s.Callbacks("once memory"), "complete" === O.readyState) return setTimeout(s.ready, 1);
                        if (O.addEventListener) O.addEventListener("DOMContentLoaded", o, !1), e.addEventListener("load", s.ready, !1); else if (O.attachEvent) {
                            O.attachEvent("onreadystatechange", o), e.attachEvent("onload", s.ready);
                            var t = !1;
                            try {
                                t = null == e.frameElement
                            } catch (e) {
                            }
                            O.documentElement.doScroll && t && n()
                        }
                    }
                }, isFunction: function (e) {
                    return "function" === s.type(e)
                }, isArray: Array.isArray || function (e) {
                    return "array" === s.type(e)
                }, isWindow: function (e) {
                    return e && "object" == typeof e && "setInterval" in e
                }, isNumeric: function (e) {
                    return null != e && h.test(e) && !isNaN(e)
                }, type: function (e) {
                    return null == e ? String(e) : M[j.call(e)] || "object"
                }, isPlainObject: function (e) {
                    if (!e || "object" !== s.type(e) || e.nodeType || s.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !N.call(e, "constructor") && !N.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (e) {
                        return !1
                    }
                    var n;
                    for (n in e) ;
                    return n === t || N.call(e, n)
                }, isEmptyObject: function (e) {
                    for (var t in e) return !1;
                    return !0
                }, error: function (e) {
                    throw e
                }, parseJSON: function (t) {
                    return "string" == typeof t && t ? (t = s.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : g.test(t.replace(v, "@").replace(y, "]").replace(b, "")) ? new Function("return " + t)() : void s.error("Invalid JSON: " + t)) : null
                }, parseXML: function (n) {
                    var r, i;
                    try {
                        e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : ((r = new ActiveXObject("Microsoft.XMLDOM")).async = "false", r.loadXML(n))
                    } catch (e) {
                        r = t
                    }
                    return r && r.documentElement && !r.getElementsByTagName("parsererror").length || s.error("Invalid XML: " + n), r
                }, noop: function () {
                }, globalEval: function (t) {
                    t && d.test(t) && (e.execScript || function (t) {
                        e.eval.call(e, t)
                    })(t)
                }, camelCase: function (e) {
                    return e.replace(C, "ms-").replace(k, S)
                }, nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                }, each: function (e, n, r) {
                    var i, a = 0, o = e.length, l = o === t || s.isFunction(e);
                    if (r) if (l) {
                        for (i in e) if (!1 === n.apply(e[i], r)) break
                    } else for (; a < o && !1 !== n.apply(e[a++], r);) ; else if (l) {
                        for (i in e) if (!1 === n.call(e[i], i, e[i])) break
                    } else for (; a < o && !1 !== n.call(e[a], a, e[a++]);) ;
                    return e
                }, trim: F ? function (e) {
                    return null == e ? "" : F.call(e)
                } : function (e) {
                    return null == e ? "" : e.toString().replace(f, "").replace(p, "")
                }, makeArray: function (e, t) {
                    var n = t || [];
                    if (null != e) {
                        var r = s.type(e);
                        null == e.length || "string" === r || "function" === r || "regexp" === r || s.isWindow(e) ? A.call(n, e) : s.merge(n, e)
                    }
                    return n
                }, inArray: function (e, t, n) {
                    var r;
                    if (t) {
                        if (q) return q.call(t, e, n);
                        for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++) if (n in t && t[n] === e) return n
                    }
                    return -1
                }, merge: function (e, n) {
                    var r = e.length, i = 0;
                    if ("number" == typeof n.length) for (var a = n.length; i < a; i++) e[r++] = n[i]; else for (; n[i] !== t;) e[r++] = n[i++];
                    return e.length = r, e
                }, grep: function (e, t, n) {
                    var r = [];
                    n = !!n;
                    for (var i = 0, a = e.length; i < a; i++) n !== !!t(e[i], i) && r.push(e[i]);
                    return r
                }, map: function (e, n, r) {
                    var i, a, o = [], l = 0, c = e.length;
                    if (e instanceof s || c !== t && "number" == typeof c && (c > 0 && e[0] && e[c - 1] || 0 === c || s.isArray(e))) for (; l < c; l++) null != (i = n(e[l], l, r)) && (o[o.length] = i); else for (a in e) null != (i = n(e[a], a, r)) && (o[o.length] = i);
                    return o.concat.apply([], o)
                }, guid: 1, proxy: function (e, n) {
                    if ("string" == typeof n) {
                        var r = e[n];
                        n = e, e = r
                    }
                    if (!s.isFunction(e)) return t;
                    var i = D.call(arguments, 2), a = function () {
                        return e.apply(n, i.concat(D.call(arguments)))
                    };
                    return a.guid = e.guid = e.guid || a.guid || s.guid++, a
                }, access: function (e, n, r, i, a, o) {
                    var l = e.length;
                    if ("object" == typeof n) {
                        for (var c in n) s.access(e, c, n[c], i, a, r);
                        return e
                    }
                    if (r !== t) {
                        i = !o && i && s.isFunction(r);
                        for (var u = 0; u < l; u++) a(e[u], n, i ? r.call(e[u], u, a(e[u], n)) : r, o);
                        return e
                    }
                    return l ? a(e[0], n) : t
                }, now: function () {
                    return (new Date).getTime()
                }, uaMatch: function (e) {
                    e = e.toLowerCase();
                    var t = x.exec(e) || w.exec(e) || T.exec(e) || e.indexOf("compatible") < 0 && _.exec(e) || [];
                    return {browser: t[1] || "", version: t[2] || "0"}
                }, sub: function () {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }

                    s.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (n, r) {
                        return r && r instanceof s && !(r instanceof e) && (r = e(r)), s.fn.init.call(this, n, r, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e(O);
                    return e
                }, browser: {}
            }), s.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
                M["[object " + t + "]"] = t.toLowerCase()
            }), (i = s.uaMatch(E)).browser && (s.browser[i.browser] = !0, s.browser.version = i.version), s.browser.webkit && (s.browser.safari = !0), d.test(" ") && (f = /^[\s\xA0]+/, p = /[\s\xA0]+$/), r = s(O), O.addEventListener ? o = function () {
                O.removeEventListener("DOMContentLoaded", o, !1), s.ready()
            } : O.attachEvent && (o = function () {
                "complete" === O.readyState && (O.detachEvent("onreadystatechange", o), s.ready())
            }), "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
                return s
            }), s
        }(), M = {};
        q.Callbacks = function (e) {
            e = e ? M[e] || n(e) : {};
            var r, i, a, o, s, l = [], c = [], u = function (t) {
                var n, r, i, a;
                for (n = 0, r = t.length; n < r; n++) i = t[n], "array" === (a = q.type(i)) ? u(i) : "function" === a && (e.unique && f.has(i) || l.push(i))
            }, d = function (t, n) {
                for (n = n || [], r = !e.memory || [t, n], i = !0, s = a || 0, a = 0, o = l.length; l && s < o; s++) if (!1 === l[s].apply(t, n) && e.stopOnFalse) {
                    r = !0;
                    break
                }
                i = !1, l && (e.once ? !0 === r ? f.disable() : l = [] : c && c.length && (r = c.shift(), f.fireWith(r[0], r[1])))
            }, f = {
                add: function () {
                    if (l) {
                        var e = l.length;
                        u(arguments), i ? o = l.length : r && !0 !== r && (a = e, d(r[0], r[1]))
                    }
                    return this
                }, remove: function () {
                    if (l) for (var t = arguments, n = 0, r = t.length; n < r; n++) for (var a = 0; a < l.length && (t[n] !== l[a] || (i && a <= o && (o--, a <= s && s--), l.splice(a--, 1), !e.unique)); a++) ;
                    return this
                }, has: function (e) {
                    if (l) for (var t = 0, n = l.length; t < n; t++) if (e === l[t]) return !0;
                    return !1
                }, empty: function () {
                    return l = [], this
                }, disable: function () {
                    return l = c = r = t, this
                }, disabled: function () {
                    return !l
                }, lock: function () {
                    return c = t, r && !0 !== r || f.disable(), this
                }, locked: function () {
                    return !c
                }, fireWith: function (t, n) {
                    return c && (i ? e.once || c.push([t, n]) : e.once && r || d(t, n)), this
                }, fire: function () {
                    return f.fireWith(this, arguments), this
                }, fired: function () {
                    return !!r
                }
            };
            return f
        };
        var R = [].slice;
        q.extend({
            Deferred: function (e) {
                var t, n = q.Callbacks("once memory"), r = q.Callbacks("once memory"), i = q.Callbacks("memory"),
                    a = "pending", o = {resolve: n, reject: r, notify: i}, s = {
                        done: n.add, fail: r.add, progress: i.add, state: function () {
                            return a
                        }, isResolved: n.fired, isRejected: r.fired, then: function (e, t, n) {
                            return l.done(e).fail(t).progress(n), this
                        }, always: function () {
                            return l.done.apply(l, arguments).fail.apply(l, arguments)
                        }, pipe: function (e, t, n) {
                            return q.Deferred(function (r) {
                                q.each({
                                    done: [e, "resolve"],
                                    fail: [t, "reject"],
                                    progress: [n, "notify"]
                                }, function (e, t) {
                                    var n, i = t[0], a = t[1];
                                    q.isFunction(i) ? l[e](function () {
                                        (n = i.apply(this, arguments)) && q.isFunction(n.promise) ? n.promise().then(r.resolve, r.reject, r.notify) : r[a + "With"](this === l ? r : this, [n])
                                    }) : l[e](r[a])
                                })
                            }).promise()
                        }, promise: function (e) {
                            if (null == e) e = s; else for (var t in s) e[t] = s[t];
                            return e
                        }
                    }, l = s.promise({});
                for (t in o) l[t] = o[t].fire, l[t + "With"] = o[t].fireWith;
                return l.done(function () {
                    a = "resolved"
                }, r.disable, i.lock).fail(function () {
                    a = "rejected"
                }, n.disable, i.lock), e && e.call(l, l), l
            }, when: function (e) {
                var t = R.call(arguments, 0), n = 0, r = t.length, i = new Array(r), a = r,
                    o = r <= 1 && e && q.isFunction(e.promise) ? e : q.Deferred(), s = o.promise();
                if (r > 1) {
                    for (; n < r; n++) t[n] && t[n].promise && q.isFunction(t[n].promise) ? t[n].promise().then(function (e) {
                        return function (n) {
                            t[e] = arguments.length > 1 ? R.call(arguments, 0) : n, --a || o.resolveWith(o, t)
                        }
                    }(n), o.reject, function (e) {
                        return function (t) {
                            i[e] = arguments.length > 1 ? R.call(arguments, 0) : t, o.notifyWith(s, i)
                        }
                    }(n)) : --a;
                    a || o.resolveWith(o, t)
                } else o !== e && o.resolveWith(o, r ? [e] : []);
                return s
            }
        }), q.support = function () {
            var e, t, n, r, i, a, o, s, l, c, u, d, f, p, h, m, g = O.createElement("div"), v = O.documentElement;
            if (g.setAttribute("className", "t"), g.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>", e = g.getElementsByTagName("*"), t = g.getElementsByTagName("a")[0], !e || !e.length || !t) return {};
            r = (n = O.createElement("select")).appendChild(O.createElement("option")), i = g.getElementsByTagName("input")[0], o = {
                leadingWhitespace: 3 === g.firstChild.nodeType,
                tbody: !g.getElementsByTagName("tbody").length,
                htmlSerialize: !!g.getElementsByTagName("link").length,
                style: /top/.test(t.getAttribute("style")),
                hrefNormalized: "/a" === t.getAttribute("href"),
                opacity: /^0.55/.test(t.style.opacity),
                cssFloat: !!t.style.cssFloat,
                unknownElems: !!g.getElementsByTagName("nav").length,
                checkOn: "on" === i.value,
                optSelected: r.selected,
                getSetAttribute: "t" !== g.className,
                enctype: !!O.createElement("form").enctype,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0
            }, i.checked = !0, o.noCloneChecked = i.cloneNode(!0).checked, n.disabled = !0, o.optDisabled = !r.disabled;
            try {
                delete g.test
            } catch (e) {
                o.deleteExpando = !1
            }
            !g.addEventListener && g.attachEvent && g.fireEvent && (g.attachEvent("onclick", function () {
                o.noCloneEvent = !1
            }), g.cloneNode(!0).fireEvent("onclick")), (i = O.createElement("input")).value = "t", i.setAttribute("type", "radio"), o.radioValue = "t" === i.value, i.setAttribute("checked", "checked"), g.appendChild(i), (s = O.createDocumentFragment()).appendChild(g.lastChild), o.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, g.innerHTML = "", g.style.width = g.style.paddingLeft = "1px", l = O.getElementsByTagName("body")[0], u = O.createElement(l ? "div" : "body"), d = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, l && q.extend(d, {position: "absolute", left: "-999px", top: "-999px"});
            for (h in d) u.style[h] = d[h];
            if (u.appendChild(g), (c = l || v).insertBefore(u, c.firstChild), o.appendChecked = i.checked, o.boxModel = 2 === g.offsetWidth, "zoom" in g.style && (g.style.display = "inline", g.style.zoom = 1, o.inlineBlockNeedsLayout = 2 === g.offsetWidth, g.style.display = "", g.innerHTML = "<div style='width:4px;'></div>", o.shrinkWrapBlocks = 2 !== g.offsetWidth), g.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", f = g.getElementsByTagName("td"), m = 0 === f[0].offsetHeight, f[0].style.display = "", f[1].style.display = "none", o.reliableHiddenOffsets = m && 0 === f[0].offsetHeight, g.innerHTML = "", O.defaultView && O.defaultView.getComputedStyle && ((a = O.createElement("div")).style.width = "0", a.style.marginRight = "0", g.appendChild(a), o.reliableMarginRight = 0 === (parseInt((O.defaultView.getComputedStyle(a, null) || {marginRight: 0}).marginRight, 10) || 0)), g.attachEvent) for (h in{
                submit: 1,
                change: 1,
                focusin: 1
            }) (m = (p = "on" + h) in g) || (g.setAttribute(p, "return;"), m = "function" == typeof g[p]), o[h + "Bubbles"] = m;
            return q(function () {
                var e, t, n, r, i, a = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",
                    s = "visibility:hidden;border:0;";
                (l = O.getElementsByTagName("body")[0]) && ((e = O.createElement("div")).style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:1px", l.insertBefore(e, l.firstChild), (u = O.createElement("div")).style.cssText = a + s, u.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", e.appendChild(u), n = (t = u.firstChild).firstChild, r = t.nextSibling.firstChild.firstChild, i = {
                    doesNotAddBorder: 5 !== n.offsetTop,
                    doesAddBorderForTableAndCells: 5 === r.offsetTop
                }, n.style.position = "fixed", n.style.top = "20px", i.fixedPosition = 20 === n.offsetTop || 15 === n.offsetTop, n.style.position = n.style.top = "", t.style.overflow = "hidden", t.style.position = "relative", i.subtractsBorderForOverflowNotVisible = -5 === n.offsetTop, i.doesNotIncludeMarginInBodyOffset = 1 !== l.offsetTop, l.removeChild(e), u = e = null, q.extend(o, i))
            }), u && (u.innerHTML = "", c.removeChild(u)), u = s = n = r = l = a = g = i = null, o
        }(), q.boxModel = q.support.boxModel;
        var I = /^(?:\{.*\}|\[.*\])$/, H = /([A-Z])/g;
        q.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (q.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
            hasData: function (e) {
                return !!(e = e.nodeType ? q.cache[e[q.expando]] : e[q.expando]) && !i(e)
            },
            data: function (e, n, r, i) {
                if (q.acceptData(e)) {
                    q.expando;
                    var a, o, s, l = "string" == typeof n, c = e.nodeType, u = c ? q.cache : e,
                        d = c ? e[q.expando] : e[q.expando] && q.expando, f = "events" === n;
                    if (d && u[d] && (f || i || u[d].data) || !l || r !== t) return d || (c ? e[q.expando] = d = ++q.uuid : d = q.expando), u[d] || (u[d] = {}, c || (u[d].toJSON = q.noop)), "object" != typeof n && "function" != typeof n || (i ? u[d] = q.extend(u[d], n) : u[d].data = q.extend(u[d].data, n)), a = o = u[d], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[q.camelCase(n)] = r), f && !o[n] ? a.events : (l ? null == (s = o[n]) && (s = o[q.camelCase(n)]) : s = o, s)
                }
            },
            removeData: function (e, t, n) {
                if (q.acceptData(e)) {
                    q.expando;
                    var r, a, o, s = e.nodeType, l = s ? q.cache : e, c = s ? e[q.expando] : q.expando;
                    if (l[c]) {
                        if (t && (r = n ? l[c] : l[c].data)) {
                            for ((a = 0, o = (t = q.isArray(t) ? t : t in r ? [t] : (t = q.camelCase(t)) in r ? [t] : t.split(" ")).length); a < o; a++) delete r[t[a]];
                            if (!(n ? i : q.isEmptyObject)(r)) return
                        }
                        (n || (delete l[c].data, i(l[c]))) && (q.support.deleteExpando || !l.setInterval ? delete l[c] : l[c] = null, s && (q.support.deleteExpando ? delete e[q.expando] : e.removeAttribute ? e.removeAttribute(q.expando) : e[q.expando] = null))
                    }
                }
            },
            _data: function (e, t, n) {
                return q.data(e, t, n, !0)
            },
            acceptData: function (e) {
                if (e.nodeName) {
                    var t = q.noData[e.nodeName.toLowerCase()];
                    if (t) return !(!0 === t || e.getAttribute("classid") !== t)
                }
                return !0
            }
        }), q.fn.extend({
            data: function (e, n) {
                var i, a, o, s = null;
                if (void 0 === e) {
                    if (this.length && (s = q.data(this[0]), 1 === this[0].nodeType && !q._data(this[0], "parsedAttrs"))) {
                        for (var l = 0, c = (a = this[0].attributes).length; l < c; l++) 0 === (o = a[l].name).indexOf("data-") && (o = q.camelCase(o.substring(5)), r(this[0], o, s[o]));
                        q._data(this[0], "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof e ? this.each(function () {
                    q.data(this, e)
                }) : (i = e.split("."), i[1] = i[1] ? "." + i[1] : "", n === t ? ((s = this.triggerHandler("getData" + i[1] + "!", [i[0]])) === t && this.length && (s = q.data(this[0], e), s = r(this[0], e, s)), s === t && i[1] ? this.data(i[0]) : s) : this.each(function () {
                    var t = q(this), r = [i[0], n];
                    t.triggerHandler("setData" + i[1] + "!", r), q.data(this, e, n), t.triggerHandler("changeData" + i[1] + "!", r)
                }))
            }, removeData: function (e) {
                return this.each(function () {
                    q.removeData(this, e)
                })
            }
        }), q.extend({
            _mark: function (e, t) {
                e && (t = (t || "fx") + "mark", q._data(e, t, (q._data(e, t) || 0) + 1))
            }, _unmark: function (e, t, n) {
                if (!0 !== e && (n = t, t = e, e = !1), t) {
                    var r = (n = n || "fx") + "mark", i = e ? 0 : (q._data(t, r) || 1) - 1;
                    i ? q._data(t, r, i) : (q.removeData(t, r, !0), a(t, n, "mark"))
                }
            }, queue: function (e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = q._data(e, t), n && (!r || q.isArray(n) ? r = q._data(e, t, q.makeArray(n)) : r.push(n)), r || []
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = q.queue(e, t), r = n.shift(), i = {};
                "inprogress" === r && (r = n.shift()), r && ("fx" === t && n.unshift("inprogress"), q._data(e, t + ".run", i), r.call(e, function () {
                    q.dequeue(e, t)
                }, i)), n.length || (q.removeData(e, t + "queue " + t + ".run", !0), a(e, t, "queue"))
            }
        }), q.fn.extend({
            queue: function (e, n) {
                return "string" != typeof e && (n = e, e = "fx"), n === t ? q.queue(this[0], e) : this.each(function () {
                    var t = q.queue(this, e, n);
                    "fx" === e && "inprogress" !== t[0] && q.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    q.dequeue(this, e)
                })
            }, delay: function (e, t) {
                return e = q.fx ? q.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(r)
                    }
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, n) {
                function r() {
                    --l || a.resolveWith(o, [o])
                }

                "string" != typeof e && (e, e = t), e = e || "fx";
                for (var i, a = q.Deferred(), o = this, s = o.length, l = 1, c = e + "defer", u = e + "queue", d = e + "mark"; s--;) (i = q.data(o[s], c, t, !0) || (q.data(o[s], u, t, !0) || q.data(o[s], d, t, !0)) && q.data(o[s], c, q.Callbacks("once memory"), !0)) && (l++, i.add(r));
                return r(), a.promise()
            }
        });
        var z, P, B, U = /[\n\t\r]/g, W = /\s+/, $ = /\r/g, X = /^(?:button|input)$/i,
            V = /^(?:button|input|object|select|textarea)$/i, Y = /^a(?:rea)?$/i,
            Z = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            K = q.support.getSetAttribute;
        q.fn.extend({
            attr: function (e, t) {
                return q.access(this, e, t, !0, q.attr)
            }, removeAttr: function (e) {
                return this.each(function () {
                    q.removeAttr(this, e)
                })
            }, prop: function (e, t) {
                return q.access(this, e, t, !0, q.prop)
            }, removeProp: function (e) {
                return e = q.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = t, delete this[e]
                    } catch (e) {
                    }
                })
            }, addClass: function (e) {
                var t, n, r, i, a, o, s;
                if (q.isFunction(e)) return this.each(function (t) {
                    q(this).addClass(e.call(this, t, this.className))
                });
                if (e && "string" == typeof e) for (t = e.split(W), n = 0, r = this.length; n < r; n++) if (1 === (i = this[n]).nodeType) if (i.className || 1 !== t.length) {
                    for (a = " " + i.className + " ", o = 0, s = t.length; o < s; o++) ~a.indexOf(" " + t[o] + " ") || (a += t[o] + " ");
                    i.className = q.trim(a)
                } else i.className = e;
                return this
            }, removeClass: function (e) {
                var n, r, i, a, o, s, l;
                if (q.isFunction(e)) return this.each(function (t) {
                    q(this).removeClass(e.call(this, t, this.className))
                });
                if (e && "string" == typeof e || e === t) for (n = (e || "").split(W), r = 0, i = this.length; r < i; r++) if (1 === (a = this[r]).nodeType && a.className) if (e) {
                    for (o = (" " + a.className + " ").replace(U, " "), s = 0, l = n.length; s < l; s++) o = o.replace(" " + n[s] + " ", " ");
                    a.className = q.trim(o)
                } else a.className = "";
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e, r = "boolean" == typeof t;
                return q.isFunction(e) ? this.each(function (n) {
                    q(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function () {
                    if ("string" === n) for (var i, a = 0, o = q(this), s = t, l = e.split(W); i = l[a++];) o[(s = r ? s : !o.hasClass(i)) ? "addClass" : "removeClass"](i); else "undefined" !== n && "boolean" !== n || (this.className && q._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : q._data(this, "__className__") || "")
                })
            }, hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) > -1) return !0;
                return !1
            }, val: function (e) {
                var n, r, i, a = this[0];
                return arguments.length ? (i = q.isFunction(e), this.each(function (r) {
                    var a, o = q(this);
                    1 === this.nodeType && (null == (a = i ? e.call(this, r, o.val()) : e) ? a = "" : "number" == typeof a ? a += "" : q.isArray(a) && (a = q.map(a, function (e) {
                        return null == e ? "" : e + ""
                    })), (n = q.valHooks[this.nodeName.toLowerCase()] || q.valHooks[this.type]) && "set" in n && n.set(this, a, "value") !== t || (this.value = a))
                })) : a ? (n = q.valHooks[a.nodeName.toLowerCase()] || q.valHooks[a.type]) && "get" in n && (r = n.get(a, "value")) !== t ? r : "string" == typeof(r = a.value) ? r.replace($, "") : null == r ? "" : r : t
            }
        }), q.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                }, select: {
                    get: function (e) {
                        var t, n, r, i, a = e.selectedIndex, o = [], s = e.options, l = "select-one" === e.type;
                        if (a < 0) return null;
                        for (n = l ? a : 0, r = l ? a + 1 : s.length; n < r; n++) if ((i = s[n]).selected && (q.support.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !q.nodeName(i.parentNode, "optgroup"))) {
                            if (t = q(i).val(), l) return t;
                            o.push(t)
                        }
                        return l && !o.length && s.length ? q(s[a]).val() : o
                    }, set: function (e, t) {
                        var n = q.makeArray(t);
                        return q(e).find("option").each(function () {
                            this.selected = q.inArray(q(this).val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                    }
                }
            },
            attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0},
            attr: function (e, n, r, i) {
                var a, o, s, l = e.nodeType;
                return e && 3 !== l && 8 !== l && 2 !== l ? i && n in q.attrFn ? q(e)[n](r) : "getAttribute" in e ? ((s = 1 !== l || !q.isXMLDoc(e)) && (n = n.toLowerCase(), o = q.attrHooks[n] || (Z.test(n) ? P : z)), r !== t ? null === r ? (q.removeAttr(e, n), t) : o && "set" in o && s && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, "" + r), r) : o && "get" in o && s && null !== (a = o.get(e, n)) ? a : null === (a = e.getAttribute(n)) ? t : a) : q.prop(e, n, r) : t
            },
            removeAttr: function (e, t) {
                var n, r, i, a, o = 0;
                if (1 === e.nodeType) for (a = (r = (t || "").split(W)).length; o < a; o++) i = r[o].toLowerCase(), n = q.propFix[i] || i, q.attr(e, i, ""), e.removeAttribute(K ? i : n), Z.test(i) && n in e && (e[n] = !1)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (X.test(e.nodeName) && e.parentNode) q.error("type property can't be changed"); else if (!q.support.radioValue && "radio" === t && q.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }, value: {
                    get: function (e, t) {
                        return z && q.nodeName(e, "button") ? z.get(e, t) : t in e ? e.value : null
                    }, set: function (e, t, n) {
                        if (z && q.nodeName(e, "button")) return z.set(e, t, n);
                        e.value = t
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                for: "htmlFor",
                class: "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function (e, n, r) {
                var i, a, o = e.nodeType;
                return e && 3 !== o && 8 !== o && 2 !== o ? ((1 !== o || !q.isXMLDoc(e)) && (n = q.propFix[n] || n, a = q.propHooks[n]), r !== t ? a && "set" in a && (i = a.set(e, r, n)) !== t ? i : e[n] = r : a && "get" in a && null !== (i = a.get(e, n)) ? i : e[n]) : t
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }), q.attrHooks.tabindex = q.propHooks.tabIndex, P = {
            get: function (e, n) {
                var r, i = q.prop(e, n);
                return !0 === i || "boolean" != typeof i && (r = e.getAttributeNode(n)) && !1 !== r.nodeValue ? n.toLowerCase() : t
            }, set: function (e, t, n) {
                var r;
                return !1 === t ? q.removeAttr(e, n) : ((r = q.propFix[n] || n) in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
            }
        }, K || (B = {name: !0, id: !0}, z = q.valHooks.button = {
            get: function (e, n) {
                var r;
                return (r = e.getAttributeNode(n)) && (B[n] ? "" !== r.nodeValue : r.specified) ? r.nodeValue : t
            }, set: function (e, t, n) {
                var r = e.getAttributeNode(n);
                return r || (r = O.createAttribute(n), e.setAttributeNode(r)), r.nodeValue = t + ""
            }
        }, q.attrHooks.tabindex.set = z.set, q.each(["width", "height"], function (e, t) {
            q.attrHooks[t] = q.extend(q.attrHooks[t], {
                set: function (e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"), n
                }
            })
        }), q.attrHooks.contenteditable = {
            get: z.get, set: function (e, t, n) {
                "" === t && (t = "false"), z.set(e, t, n)
            }
        }), q.support.hrefNormalized || q.each(["href", "src", "width", "height"], function (e, n) {
            q.attrHooks[n] = q.extend(q.attrHooks[n], {
                get: function (e) {
                    var r = e.getAttribute(n, 2);
                    return null === r ? t : r
                }
            })
        }), q.support.style || (q.attrHooks.style = {
            get: function (e) {
                return e.style.cssText.toLowerCase() || t
            }, set: function (e, t) {
                return e.style.cssText = "" + t
            }
        }), q.support.optSelected || (q.propHooks.selected = q.extend(q.propHooks.selected, {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), q.support.enctype || (q.propFix.enctype = "encoding"), q.support.checkOn || q.each(["radio", "checkbox"], function () {
            q.valHooks[this] = {
                get: function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            }
        }), q.each(["radio", "checkbox"], function () {
            q.valHooks[this] = q.extend(q.valHooks[this], {
                set: function (e, t) {
                    if (q.isArray(t)) return e.checked = q.inArray(q(e).val(), t) >= 0
                }
            })
        });
        var G = /^(?:textarea|input|select)$/i, J = /^([^\.]*)?(?:\.(.+))?$/, Q = /\bhover(\.\S+)?/, ee = /^key/,
            te = /^(?:mouse|contextmenu)|click/, ne = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, re = function (e) {
                var t = ne.exec(e);
                return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
            }, ie = function (e, t) {
                return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || e.id === t[2]) && (!t[3] || t[3].test(e.className))
            }, ae = function (e) {
                return q.event.special.hover ? e : e.replace(Q, "mouseenter$1 mouseleave$1")
            };
        q.event = {
            add: function (e, n, r, i, a) {
                var o, s, l, c, u, d, f, p, h, m, g;
                if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (o = q._data(e))) {
                    for (r.handler && (r = (h = r).handler), r.guid || (r.guid = q.guid++), (l = o.events) || (o.events = l = {}), (s = o.handle) || (o.handle = s = function (e) {
                        return void 0 === q || e && q.event.triggered === e.type ? t : q.event.dispatch.apply(s.elem, arguments)
                    }, s.elem = e), n = ae(n).split(" "), c = 0; c < n.length; c++) d = (u = J.exec(n[c]) || [])[1], f = (u[2] || "").split(".").sort(), g = q.event.special[d] || {}, d = (a ? g.delegateType : g.bindType) || d, g = q.event.special[d] || {}, p = q.extend({
                        type: d,
                        origType: u[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: a,
                        namespace: f.join(".")
                    }, h), a && (p.quick = re(a), !p.quick && q.expr.match.POS.test(a) && (p.isPositional = !0)), (m = l[d]) || ((m = l[d] = []).delegateCount = 0, g.setup && !1 !== g.setup.call(e, i, f, s) || (e.addEventListener ? e.addEventListener(d, s, !1) : e.attachEvent && e.attachEvent("on" + d, s))), g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), a ? m.splice(m.delegateCount++, 0, p) : m.push(p), q.event.global[d] = !0;
                    e = null
                }
            },
            global: {},
            remove: function (e, t, n, r) {
                var i, a, o, s, l, c, u, d, f, p, h, m = q.hasData(e) && q._data(e);
                if (m && (u = m.events)) {
                    for (t = ae(t || "").split(" "), i = 0; i < t.length; i++) {
                        if (a = J.exec(t[i]) || [], o = a[1], s = a[2], !o) {
                            s = s ? "." + s : "";
                            for (c in u) q.event.remove(e, c + s, n, r);
                            return
                        }
                        if (d = q.event.special[o] || {}, o = (r ? d.delegateType : d.bindType) || o, p = u[o] || [], l = p.length, s = s ? new RegExp("(^|\\.)" + s.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, n || s || r || d.remove) for (c = 0; c < p.length; c++) h = p[c], n && n.guid !== h.guid || s && !s.test(h.namespace) || (!r || r === h.selector || "**" === r && h.selector) && (p.splice(c--, 1), h.selector && p.delegateCount--, d.remove && d.remove.call(e, h)); else p.length = 0;
                        0 === p.length && l !== p.length && (d.teardown && !1 !== d.teardown.call(e, s) || q.removeEvent(e, o, m.handle), delete u[o])
                    }
                    q.isEmptyObject(u) && ((f = m.handle) && (f.elem = null), q.removeData(e, ["events", "handle"], !0))
                }
            },
            customEvent: {getData: !0, setData: !0, changeData: !0},
            trigger: function (n, r, i, a) {
                if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
                    var o, s, l, c, u, d, f, p, h, m, g = n.type || n, v = [];
                    if (g.indexOf("!") >= 0 && (g = g.slice(0, -1), s = !0), g.indexOf(".") >= 0 && (g = (v = g.split(".")).shift(), v.sort()), i && !q.event.customEvent[g] || q.event.global[g]) if (n = "object" == typeof n ? n[q.expando] ? n : new q.Event(g, n) : new q.Event(g), n.type = g, n.isTrigger = !0, n.exclusive = s, n.namespace = v.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, d = g.indexOf(":") < 0 ? "on" + g : "", !a && i || n.preventDefault(), i) {
                        if (n.result = t, n.target || (n.target = i), (r = null != r ? q.makeArray(r) : []).unshift(n), !(f = q.event.special[g] || {}).trigger || !1 !== f.trigger.apply(i, r)) {
                            if (h = [[i, f.bindType || g]], !a && !f.noBubble && !q.isWindow(i)) {
                                for (m = f.delegateType || g, u = null, c = i.parentNode; c; c = c.parentNode) h.push([c, m]), u = c;
                                u && u === i.ownerDocument && h.push([u.defaultView || u.parentWindow || e, m])
                            }
                            for (l = 0; l < h.length && (c = h[l][0], n.type = h[l][1], (p = (q._data(c, "events") || {})[n.type] && q._data(c, "handle")) && p.apply(c, r), (p = d && c[d]) && q.acceptData(c) && p.apply(c, r), !n.isPropagationStopped()); l++) ;
                            return n.type = g, n.isDefaultPrevented() || f._default && !1 !== f._default.apply(i.ownerDocument, r) || "click" === g && q.nodeName(i, "a") || !q.acceptData(i) || d && i[g] && ("focus" !== g && "blur" !== g || 0 !== n.target.offsetWidth) && !q.isWindow(i) && ((u = i[d]) && (i[d] = null), q.event.triggered = g, i[g](), q.event.triggered = t, u && (i[d] = u)), n.result
                        }
                    } else {
                        o = q.cache;
                        for (l in o) o[l].events && o[l].events[g] && q.event.trigger(n, r, o[l].handle.elem, !0)
                    }
                }
            },
            dispatch: function (n) {
                n = q.event.fix(n || e.event);
                var r, i, a, o, s, l, c, u, d, f, p = (q._data(this, "events") || {})[n.type] || [],
                    h = p.delegateCount, m = [].slice.call(arguments, 0), g = !n.exclusive && !n.namespace,
                    v = (q.event.special[n.type] || {}).handle, y = [];
                if (m[0] = n, n.delegateTarget = this, h && !n.target.disabled && (!n.button || "click" !== n.type)) for (a = n.target; a != this; a = a.parentNode || this) {
                    for (s = {}, c = [], r = 0; r < h; r++) f = s[d = (u = p[r]).selector], u.isPositional ? f = (f || (s[d] = q(d))).index(a) >= 0 : f === t && (f = s[d] = u.quick ? ie(a, u.quick) : q(a).is(d)), f && c.push(u);
                    c.length && y.push({elem: a, matches: c})
                }
                for (p.length > h && y.push({
                    elem: this,
                    matches: p.slice(h)
                }), r = 0; r < y.length && !n.isPropagationStopped(); r++) for (l = y[r], n.currentTarget = l.elem, i = 0; i < l.matches.length && !n.isImmediatePropagationStopped(); i++) u = l.matches[i], (g || !n.namespace && !u.namespace || n.namespace_re && n.namespace_re.test(u.namespace)) && (n.data = u.data, n.handleObj = u, (o = (v || u.handler).apply(l.elem, m)) !== t && (n.result = o, !1 === o && (n.preventDefault(), n.stopPropagation())));
                return n.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),
                filter: function (e, n) {
                    var r, i, a, o = n.button, s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = (r = e.target.ownerDocument || O).documentElement, a = r.body, e.pageX = n.clientX + (i && i.scrollLeft || a && a.scrollLeft || 0) - (i && i.clientLeft || a && a.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || a && a.scrollTop || 0) - (i && i.clientTop || a && a.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || o === t || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            fix: function (e) {
                if (e[q.expando]) return e;
                var n, r, i = e, a = q.event.fixHooks[e.type] || {},
                    o = a.props ? this.props.concat(a.props) : this.props;
                for (e = q.Event(i), n = o.length; n;) e[r = o[--n]] = i[r];
                return e.target || (e.target = i.srcElement || O), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), a.filter ? a.filter(e, i) : e
            },
            special: {
                ready: {setup: q.bindReady},
                focus: {delegateType: "focusin", noBubble: !0},
                blur: {delegateType: "focusout", noBubble: !0},
                beforeunload: {
                    setup: function (e, t, n) {
                        q.isWindow(this) && (this.onbeforeunload = n)
                    }, teardown: function (e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function (e, t, n, r) {
                var i = q.extend(new q.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
                r ? q.event.trigger(i, null, t) : q.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, q.event.handle = q.event.dispatch, q.removeEvent = O.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function (e, t, n) {
            e.detachEvent && e.detachEvent("on" + t, n)
        }, q.Event = function (e, t) {
            if (!(this instanceof q.Event)) return new q.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? s : o) : this.type = e, t && q.extend(this, t), this.timeStamp = e && e.timeStamp || q.now(), this[q.expando] = !0
        }, q.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = s;
                var e = this.originalEvent;
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            }, stopPropagation: function () {
                this.isPropagationStopped = s;
                var e = this.originalEvent;
                e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            }, stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = s, this.stopPropagation()
            }, isDefaultPrevented: o, isPropagationStopped: o, isImmediatePropagationStopped: o
        }, q.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
            q.event.special[e] = q.event.special[t] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var t, n, r = this, i = e.relatedTarget, a = e.handleObj;
                    a.selector;
                    return i && a.origType !== e.type && (i === r || q.contains(r, i)) || (t = e.type, e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), q.support.submitBubbles || (q.event.special.submit = {
            setup: function () {
                if (q.nodeName(this, "form")) return !1;
                q.event.add(this, "click._submit keypress._submit", function (e) {
                    var n = e.target, r = q.nodeName(n, "input") || q.nodeName(n, "button") ? n.form : t;
                    r && !r._submit_attached && (q.event.add(r, "submit._submit", function (e) {
                        this.parentNode && q.event.simulate("submit", this.parentNode, e, !0)
                    }), r._submit_attached = !0)
                })
            }, teardown: function () {
                if (q.nodeName(this, "form")) return !1;
                q.event.remove(this, "._submit")
            }
        }), q.support.changeBubbles || (q.event.special.change = {
            setup: function () {
                if (G.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (q.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), q.event.add(this, "click._change", function (e) {
                    this._just_changed && (this._just_changed = !1, q.event.simulate("change", this, e, !0))
                })), !1;
                q.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    G.test(t.nodeName) && !t._change_attached && (q.event.add(t, "change._change", function (e) {
                        this.parentNode && !e.isSimulated && q.event.simulate("change", this.parentNode, e, !0)
                    }), t._change_attached = !0)
                })
            }, handle: function (e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            }, teardown: function () {
                return q.event.remove(this, "._change"), G.test(this.nodeName)
            }
        }), q.support.focusinBubbles || q.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = 0, r = function (e) {
                q.event.simulate(t, e.target, q.event.fix(e), !0)
            };
            q.event.special[t] = {
                setup: function () {
                    0 == n++ && O.addEventListener(e, r, !0)
                }, teardown: function () {
                    0 == --n && O.removeEventListener(e, r, !0)
                }
            }
        }), q.fn.extend({
            on: function (e, n, r, i, a) {
                var s, l;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = n, n = t);
                    for (l in e) this.on(l, n, r, e[l], a);
                    return this
                }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), !1 === i) i = o; else if (!i) return this;
                return 1 === a && (s = i, (i = function (e) {
                    return q().off(e), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = q.guid++)), this.each(function () {
                    q.event.add(this, e, i, r, n)
                })
            }, one: function (e, t, n, r) {
                return this.on.call(this, e, t, n, r, 1)
            }, off: function (e, n, r) {
                if (e && e.preventDefault && e.handleObj) {
                    var i = e.handleObj;
                    return q(e.delegateTarget).off(i.namespace ? i.type + "." + i.namespace : i.type, i.selector, i.handler), this
                }
                if ("object" == typeof e) {
                    for (var a in e) this.off(a, n, e[a]);
                    return this
                }
                return !1 !== n && "function" != typeof n || (r = n, n = t), !1 === r && (r = o), this.each(function () {
                    q.event.remove(this, e, r, n)
                })
            }, bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, live: function (e, t, n) {
                return q(this.context).on(e, this.selector, t, n), this
            }, die: function (e, t) {
                return q(this.context).off(e, this.selector || "**", t), this
            }, delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            }, undelegate: function (e, t, n) {
                return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n)
            }, trigger: function (e, t) {
                return this.each(function () {
                    q.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                if (this[0]) return q.event.trigger(e, t, this[0], !0)
            }, toggle: function (e) {
                var t = arguments, n = e.guid || q.guid++, r = 0, i = function (n) {
                    var i = (q._data(this, "lastToggle" + e.guid) || 0) % r;
                    return q._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                };
                for (i.guid = n; r < t.length;) t[r++].guid = n;
                return this.click(i)
            }, hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            q.fn[t] = function (e, n) {
                return null == n && (n = e, e = null), arguments.length > 0 ? this.bind(t, e, n) : this.trigger(t)
            }, q.attrFn && (q.attrFn[t] = !0), ee.test(t) && (q.event.fixHooks[t] = q.event.keyHooks), te.test(t) && (q.event.fixHooks[t] = q.event.mouseHooks)
        }), function () {
            function e(e, t, n, r, a, o) {
                for (var s = 0, l = r.length; s < l; s++) {
                    var c = r[s];
                    if (c) {
                        var u = !1;
                        for (c = c[e]; c;) {
                            if (c[i] === n) {
                                u = r[c.sizset];
                                break
                            }
                            if (1 !== c.nodeType || o || (c[i] = n, c.sizset = s), c.nodeName.toLowerCase() === t) {
                                u = c;
                                break
                            }
                            c = c[e]
                        }
                        r[s] = u
                    }
                }
            }

            function n(e, t, n, r, a, o) {
                for (var s = 0, l = r.length; s < l; s++) {
                    var c = r[s];
                    if (c) {
                        var u = !1;
                        for (c = c[e]; c;) {
                            if (c[i] === n) {
                                u = r[c.sizset];
                                break
                            }
                            if (1 === c.nodeType) if (o || (c[i] = n, c.sizset = s), "string" != typeof t) {
                                if (c === t) {
                                    u = !0;
                                    break
                                }
                            } else if (f.filter(t, [c]).length > 0) {
                                u = c;
                                break
                            }
                            c = c[e]
                        }
                        r[s] = u
                    }
                }
            }

            var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                i = "sizcache" + (Math.random() + "").replace(".", ""), a = 0, o = Object.prototype.toString, s = !1,
                l = !0, c = /\\/g, u = /\r\n/g, d = /\W/;
            [0, 0].sort(function () {
                return l = !1, 0
            });
            var f = function (e, t, n, i) {
                n = n || [];
                var a = t = t || O;
                if (1 !== t.nodeType && 9 !== t.nodeType) return [];
                if (!e || "string" != typeof e) return n;
                var s, l, c, u, d, p, g, y, b = !0, w = f.isXML(t), T = [], _ = e;
                do {
                    if (r.exec(""), (s = r.exec(_)) && (_ = s[3], T.push(s[1]), s[2])) {
                        u = s[3];
                        break
                    }
                } while (s);
                if (T.length > 1 && m.exec(e)) if (2 === T.length && h.relative[T[0]]) l = x(T[0] + T[1], t, i); else for (l = h.relative[T[0]] ? [t] : f(T.shift(), t); T.length;) e = T.shift(), h.relative[e] && (e += T.shift()), l = x(e, l, i); else if (!i && T.length > 1 && 9 === t.nodeType && !w && h.match.ID.test(T[0]) && !h.match.ID.test(T[T.length - 1]) && (t = (d = f.find(T.shift(), t, w)).expr ? f.filter(d.expr, d.set)[0] : d.set[0]), t) for (l = (d = i ? {
                    expr: T.pop(),
                    set: v(i)
                } : f.find(T.pop(), 1 !== T.length || "~" !== T[0] && "+" !== T[0] || !t.parentNode ? t : t.parentNode, w)).expr ? f.filter(d.expr, d.set) : d.set, T.length > 0 ? c = v(l) : b = !1; T.length;) g = p = T.pop(), h.relative[p] ? g = T.pop() : p = "", null == g && (g = t), h.relative[p](c, g, w); else c = T = [];
                if (c || (c = l), c || f.error(p || e), "[object Array]" === o.call(c)) if (b) if (t && 1 === t.nodeType) for (y = 0; null != c[y]; y++) c[y] && (!0 === c[y] || 1 === c[y].nodeType && f.contains(t, c[y])) && n.push(l[y]); else for (y = 0; null != c[y]; y++) c[y] && 1 === c[y].nodeType && n.push(l[y]); else n.push.apply(n, c); else v(c, n);
                return u && (f(u, a, n, i), f.uniqueSort(n)), n
            };
            f.uniqueSort = function (e) {
                if (y && (s = l, e.sort(y), s)) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
                return e
            }, f.matches = function (e, t) {
                return f(e, null, null, t)
            }, f.matchesSelector = function (e, t) {
                return f(t, null, null, [e]).length > 0
            }, f.find = function (e, t, n) {
                var r, i, a, o, s, l;
                if (!e) return [];
                for (i = 0, a = h.order.length; i < a; i++) if (s = h.order[i], (o = h.leftMatch[s].exec(e)) && (l = o[1], o.splice(1, 1), "\\" !== l.substr(l.length - 1) && (o[1] = (o[1] || "").replace(c, ""), null != (r = h.find[s](o, t, n))))) {
                    e = e.replace(h.match[s], "");
                    break
                }
                return r || (r = void 0 !== t.getElementsByTagName ? t.getElementsByTagName("*") : []), {
                    set: r,
                    expr: e
                }
            }, f.filter = function (e, n, r, i) {
                for (var a, o, s, l, c, u, d, p, m, g = e, v = [], y = n, b = n && n[0] && f.isXML(n[0]); e && n.length;) {
                    for (s in h.filter) if (null != (a = h.leftMatch[s].exec(e)) && a[2]) {
                        if (u = h.filter[s], d = a[1], o = !1, a.splice(1, 1), "\\" === d.substr(d.length - 1)) continue;
                        if (y === v && (v = []), h.preFilter[s]) if (a = h.preFilter[s](a, y, r, v, i, b)) {
                            if (!0 === a) continue
                        } else o = l = !0;
                        if (a) for (p = 0; null != (c = y[p]); p++) c && (m = i ^ (l = u(c, a, p, y)), r && null != l ? m ? o = !0 : y[p] = !1 : m && (v.push(c), o = !0));
                        if (l !== t) {
                            if (r || (y = v), e = e.replace(h.match[s], ""), !o) return [];
                            break
                        }
                    }
                    if (e === g) {
                        if (null != o) break;
                        f.error(e)
                    }
                    g = e
                }
                return y
            }, f.error = function (e) {
                throw"Syntax error, unrecognized expression: " + e
            };
            var p = f.getText = function (e) {
                var t, n, r = e.nodeType, i = "";
                if (r) {
                    if (1 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        if ("string" == typeof e.innerText) return e.innerText.replace(u, "");
                        for (e = e.firstChild; e; e = e.nextSibling) i += p(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else for (t = 0; n = e[t]; t++) 8 !== n.nodeType && (i += p(n));
                return i
            }, h = f.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {class: "className", for: "htmlFor"},
                attrHandle: {
                    href: function (e) {
                        return e.getAttribute("href")
                    }, type: function (e) {
                        return e.getAttribute("type")
                    }
                },
                relative: {
                    "+": function (e, t) {
                        var n = "string" == typeof t, r = n && !d.test(t), i = n && !r;
                        r && (t = t.toLowerCase());
                        for (var a, o = 0, s = e.length; o < s; o++) if (a = e[o]) {
                            for (; (a = a.previousSibling) && 1 !== a.nodeType;) ;
                            e[o] = i || a && a.nodeName.toLowerCase() === t ? a || !1 : a === t
                        }
                        i && f.filter(t, e, !0)
                    }, ">": function (e, t) {
                        var n, r = "string" == typeof t, i = 0, a = e.length;
                        if (r && !d.test(t)) {
                            for (t = t.toLowerCase(); i < a; i++) if (n = e[i]) {
                                var o = n.parentNode;
                                e[i] = o.nodeName.toLowerCase() === t && o
                            }
                        } else {
                            for (; i < a; i++) (n = e[i]) && (e[i] = r ? n.parentNode : n.parentNode === t);
                            r && f.filter(t, e, !0)
                        }
                    }, "": function (t, r, i) {
                        var o, s = a++, l = n;
                        "string" != typeof r || d.test(r) || (o = r = r.toLowerCase(), l = e), l("parentNode", r, s, t, o, i)
                    }, "~": function (t, r, i) {
                        var o, s = a++, l = n;
                        "string" != typeof r || d.test(r) || (o = r = r.toLowerCase(), l = e), l("previousSibling", r, s, t, o, i)
                    }
                },
                find: {
                    ID: function (e, t, n) {
                        if (void 0 !== t.getElementById && !n) {
                            var r = t.getElementById(e[1]);
                            return r && r.parentNode ? [r] : []
                        }
                    }, NAME: function (e, t) {
                        if (void 0 !== t.getElementsByName) {
                            for (var n = [], r = t.getElementsByName(e[1]), i = 0, a = r.length; i < a; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                            return 0 === n.length ? null : n
                        }
                    }, TAG: function (e, t) {
                        if (void 0 !== t.getElementsByTagName) return t.getElementsByTagName(e[1])
                    }
                },
                preFilter: {
                    CLASS: function (e, t, n, r, i, a) {
                        if (e = " " + e[1].replace(c, "") + " ", a) return e;
                        for (var o, s = 0; null != (o = t[s]); s++) o && (i ^ (o.className && (" " + o.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(o) : n && (t[s] = !1));
                        return !1
                    }, ID: function (e) {
                        return e[1].replace(c, "")
                    }, TAG: function (e, t) {
                        return e[1].replace(c, "").toLowerCase()
                    }, CHILD: function (e) {
                        if ("nth" === e[1]) {
                            e[2] || f.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                            var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                            e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                        } else e[2] && f.error(e[0]);
                        return e[0] = a++, e
                    }, ATTR: function (e, t, n, r, i, a) {
                        var o = e[1] = e[1].replace(c, "");
                        return !a && h.attrMap[o] && (e[1] = h.attrMap[o]), e[4] = (e[4] || e[5] || "").replace(c, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
                    }, PSEUDO: function (e, t, n, i, a) {
                        if ("not" === e[1]) {
                            if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                                var o = f.filter(e[3], t, n, !0 ^ a);
                                return n || i.push.apply(i, o), !1
                            }
                            e[3] = f(e[3], null, null, t)
                        } else if (h.match.POS.test(e[0]) || h.match.CHILD.test(e[0])) return !0;
                        return e
                    }, POS: function (e) {
                        return e.unshift(!0), e
                    }
                },
                filters: {
                    enabled: function (e) {
                        return !1 === e.disabled && "hidden" !== e.type
                    }, disabled: function (e) {
                        return !0 === e.disabled
                    }, checked: function (e) {
                        return !0 === e.checked
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    }, parent: function (e) {
                        return !!e.firstChild
                    }, empty: function (e) {
                        return !e.firstChild
                    }, has: function (e, t, n) {
                        return !!f(n[3], e).length
                    }, header: function (e) {
                        return /h\d/i.test(e.nodeName)
                    }, text: function (e) {
                        var t = e.getAttribute("type"), n = e.type;
                        return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
                    }, radio: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                    }, checkbox: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                    }, file: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "file" === e.type
                    }, password: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "password" === e.type
                    }, submit: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && "submit" === e.type
                    }, image: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "image" === e.type
                    }, reset: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && "reset" === e.type
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, input: function (e) {
                        return /input|select|textarea|button/i.test(e.nodeName)
                    }, focus: function (e) {
                        return e === e.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (e, t) {
                        return 0 === t
                    }, last: function (e, t, n, r) {
                        return t === r.length - 1
                    }, even: function (e, t) {
                        return t % 2 == 0
                    }, odd: function (e, t) {
                        return t % 2 == 1
                    }, lt: function (e, t, n) {
                        return t < n[3] - 0
                    }, gt: function (e, t, n) {
                        return t > n[3] - 0
                    }, nth: function (e, t, n) {
                        return n[3] - 0 === t
                    }, eq: function (e, t, n) {
                        return n[3] - 0 === t
                    }
                },
                filter: {
                    PSEUDO: function (e, t, n, r) {
                        var i = t[1], a = h.filters[i];
                        if (a) return a(e, n, t, r);
                        if ("contains" === i) return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                        if ("not" === i) {
                            for (var o = t[3], s = 0, l = o.length; s < l; s++) if (o[s] === e) return !1;
                            return !0
                        }
                        f.error(i)
                    }, CHILD: function (e, t) {
                        var n, r, a, o, s, l, c = t[1], u = e;
                        switch (c) {
                            case"only":
                            case"first":
                                for (; u = u.previousSibling;) if (1 === u.nodeType) return !1;
                                if ("first" === c) return !0;
                                u = e;
                            case"last":
                                for (; u = u.nextSibling;) if (1 === u.nodeType) return !1;
                                return !0;
                            case"nth":
                                if (n = t[2], r = t[3], 1 === n && 0 === r) return !0;
                                if (a = t[0], (o = e.parentNode) && (o[i] !== a || !e.nodeIndex)) {
                                    for (s = 0, u = o.firstChild; u; u = u.nextSibling) 1 === u.nodeType && (u.nodeIndex = ++s);
                                    o[i] = a
                                }
                                return l = e.nodeIndex - r, 0 === n ? 0 === l : l % n == 0 && l / n >= 0
                        }
                    }, ID: function (e, t) {
                        return 1 === e.nodeType && e.getAttribute("id") === t
                    }, TAG: function (e, t) {
                        return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t
                    }, CLASS: function (e, t) {
                        return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                    }, ATTR: function (e, t) {
                        var n = t[1],
                            r = f.attr ? f.attr(e, n) : h.attrHandle[n] ? h.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n),
                            i = r + "", a = t[2], o = t[4];
                        return null == r ? "!=" === a : !a && f.attr ? null != r : "=" === a ? i === o : "*=" === a ? i.indexOf(o) >= 0 : "~=" === a ? (" " + i + " ").indexOf(o) >= 0 : o ? "!=" === a ? i !== o : "^=" === a ? 0 === i.indexOf(o) : "$=" === a ? i.substr(i.length - o.length) === o : "|=" === a && (i === o || i.substr(0, o.length + 1) === o + "-") : i && !1 !== r
                    }, POS: function (e, t, n, r) {
                        var i = t[2], a = h.setFilters[i];
                        if (a) return a(e, n, t, r)
                    }
                }
            }, m = h.match.POS;
            for (var g in h.match) h.match[g] = new RegExp(h.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source), h.leftMatch[g] = new RegExp(/(^(?:.|\r|\n)*?)/.source + h.match[g].source.replace(/\\(\d+)/g, function (e, t) {
                return "\\" + (t - 0 + 1)
            }));
            var v = function (e, t) {
                return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
            };
            try {
                Array.prototype.slice.call(O.documentElement.childNodes, 0)[0].nodeType
            } catch (e) {
                v = function (e, t) {
                    var n = 0, r = t || [];
                    if ("[object Array]" === o.call(e)) Array.prototype.push.apply(r, e); else if ("number" == typeof e.length) for (var i = e.length; n < i; n++) r.push(e[n]); else for (; e[n]; n++) r.push(e[n]);
                    return r
                }
            }
            var y, b;
            O.documentElement.compareDocumentPosition ? y = function (e, t) {
                return e === t ? (s = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : (y = function (e, t) {
                if (e === t) return s = !0, 0;
                if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                var n, r, i = [], a = [], o = e.parentNode, l = t.parentNode, c = o;
                if (o === l) return b(e, t);
                if (!o) return -1;
                if (!l) return 1;
                for (; c;) i.unshift(c), c = c.parentNode;
                for (c = l; c;) a.unshift(c), c = c.parentNode;
                n = i.length, r = a.length;
                for (var u = 0; u < n && u < r; u++) if (i[u] !== a[u]) return b(i[u], a[u]);
                return u === n ? b(e, a[u], -1) : b(i[u], t, 1)
            }, b = function (e, t, n) {
                if (e === t) return n;
                for (var r = e.nextSibling; r;) {
                    if (r === t) return -1;
                    r = r.nextSibling
                }
                return 1
            }), function () {
                var e = O.createElement("div"), n = "script" + (new Date).getTime(), r = O.documentElement;
                e.innerHTML = "<a name='" + n + "'/>", r.insertBefore(e, r.firstChild), O.getElementById(n) && (h.find.ID = function (e, n, r) {
                    if (void 0 !== n.getElementById && !r) {
                        var i = n.getElementById(e[1]);
                        return i ? i.id === e[1] || void 0 !== i.getAttributeNode && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t : []
                    }
                }, h.filter.ID = function (e, t) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return 1 === e.nodeType && n && n.nodeValue === t
                }), r.removeChild(e), r = e = null
            }(), function () {
                var e = O.createElement("div");
                e.appendChild(O.createComment("")), e.getElementsByTagName("*").length > 0 && (h.find.TAG = function (e, t) {
                    var n = t.getElementsByTagName(e[1]);
                    if ("*" === e[1]) {
                        for (var r = [], i = 0; n[i]; i++) 1 === n[i].nodeType && r.push(n[i]);
                        n = r
                    }
                    return n
                }), e.innerHTML = "<a href='#'></a>", e.firstChild && void 0 !== e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (h.attrHandle.href = function (e) {
                    return e.getAttribute("href", 2)
                }), e = null
            }(), O.querySelectorAll && function () {
                var e = f, t = O.createElement("div");
                if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                    f = function (t, n, r, i) {
                        if (n = n || O, !i && !f.isXML(n)) {
                            var a = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                            if (a && (1 === n.nodeType || 9 === n.nodeType)) {
                                if (a[1]) return v(n.getElementsByTagName(t), r);
                                if (a[2] && h.find.CLASS && n.getElementsByClassName) return v(n.getElementsByClassName(a[2]), r)
                            }
                            if (9 === n.nodeType) {
                                if ("body" === t && n.body) return v([n.body], r);
                                if (a && a[3]) {
                                    var o = n.getElementById(a[3]);
                                    if (!o || !o.parentNode) return v([], r);
                                    if (o.id === a[3]) return v([o], r)
                                }
                                try {
                                    return v(n.querySelectorAll(t), r)
                                } catch (e) {
                                }
                            } else if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                                var s = n, l = n.getAttribute("id"), c = l || "__sizzle__", u = n.parentNode,
                                    d = /^\s*[+~]/.test(t);
                                l ? c = c.replace(/'/g, "\\$&") : n.setAttribute("id", c), d && u && (n = n.parentNode);
                                try {
                                    if (!d || u) return v(n.querySelectorAll("[id='" + c + "'] " + t), r)
                                } catch (e) {
                                } finally {
                                    l || s.removeAttribute("id")
                                }
                            }
                        }
                        return e(t, n, r, i)
                    };
                    for (var n in e) f[n] = e[n];
                    t = null
                }
            }(), function () {
                var e = O.documentElement,
                    t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
                if (t) {
                    var n = !t.call(O.createElement("div"), "div"), r = !1;
                    try {
                        t.call(O.documentElement, "[test!='']:sizzle")
                    } catch (e) {
                        r = !0
                    }
                    f.matchesSelector = function (e, i) {
                        if (i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !f.isXML(e)) try {
                            if (r || !h.match.PSEUDO.test(i) && !/!=/.test(i)) {
                                var a = t.call(e, i);
                                if (a || !n || e.document && 11 !== e.document.nodeType) return a
                            }
                        } catch (e) {
                        }
                        return f(i, null, null, [e]).length > 0
                    }
                }
            }(), function () {
                var e = O.createElement("div");
                e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length && (e.lastChild.className = "e", 1 !== e.getElementsByClassName("e").length && (h.order.splice(1, 0, "CLASS"), h.find.CLASS = function (e, t, n) {
                    if (void 0 !== t.getElementsByClassName && !n) return t.getElementsByClassName(e[1])
                }, e = null))
            }(), O.documentElement.contains ? f.contains = function (e, t) {
                return e !== t && (!e.contains || e.contains(t))
            } : O.documentElement.compareDocumentPosition ? f.contains = function (e, t) {
                return !!(16 & e.compareDocumentPosition(t))
            } : f.contains = function () {
                return !1
            }, f.isXML = function (e) {
                var t = (e ? e.ownerDocument || e : 0).documentElement;
                return !!t && "HTML" !== t.nodeName
            };
            var x = function (e, t, n) {
                for (var r, i = [], a = "", o = t.nodeType ? [t] : t; r = h.match.PSEUDO.exec(e);) a += r[0], e = e.replace(h.match.PSEUDO, "");
                e = h.relative[e] ? e + "*" : e;
                for (var s = 0, l = o.length; s < l; s++) f(e, o[s], i, n);
                return f.filter(a, i)
            };
            f.attr = q.attr, f.selectors.attrMap = {}, q.find = f, q.expr = f.selectors, q.expr[":"] = q.expr.filters, q.unique = f.uniqueSort, q.text = f.getText, q.isXMLDoc = f.isXML, q.contains = f.contains
        }();
        var oe = /Until$/, se = /^(?:parents|prevUntil|prevAll)/, le = /,/, ce = /^.[^:#\[\.,]*$/,
            ue = Array.prototype.slice, de = q.expr.match.POS, fe = {children: !0, contents: !0, next: !0, prev: !0};
        q.fn.extend({
            find: function (e) {
                var t, n, r = this;
                if ("string" != typeof e) return q(e).filter(function () {
                    for (t = 0, n = r.length; t < n; t++) if (q.contains(r[t], this)) return !0
                });
                var i, a, o, s = this.pushStack("", "find", e);
                for (t = 0, n = this.length; t < n; t++) if (i = s.length, q.find(e, this[t], s), t > 0) for (a = i; a < s.length; a++) for (o = 0; o < i; o++) if (s[o] === s[a]) {
                    s.splice(a--, 1);
                    break
                }
                return s
            }, has: function (e) {
                var t = q(e);
                return this.filter(function () {
                    for (var e = 0, n = t.length; e < n; e++) if (q.contains(this, t[e])) return !0
                })
            }, not: function (e) {
                return this.pushStack(c(this, e, !1), "not", e)
            }, filter: function (e) {
                return this.pushStack(c(this, e, !0), "filter", e)
            }, is: function (e) {
                return !!e && ("string" == typeof e ? de.test(e) ? q(e, this.context).index(this[0]) >= 0 : q.filter(e, this).length > 0 : this.filter(e).length > 0)
            }, closest: function (e, t) {
                var n, r, i = [], a = this[0];
                if (q.isArray(e)) {
                    for (var o = 1; a && a.ownerDocument && a !== t;) {
                        for (n = 0; n < e.length; n++) q(a).is(e[n]) && i.push({selector: e[n], elem: a, level: o});
                        a = a.parentNode, o++
                    }
                    return i
                }
                var s = de.test(e) || "string" != typeof e ? q(e, t || this.context) : 0;
                for (n = 0, r = this.length; n < r; n++) for (a = this[n]; a;) {
                    if (s ? s.index(a) > -1 : q.find.matchesSelector(a, e)) {
                        i.push(a);
                        break
                    }
                    if (!(a = a.parentNode) || !a.ownerDocument || a === t || 11 === a.nodeType) break
                }
                return i = i.length > 1 ? q.unique(i) : i, this.pushStack(i, "closest", e)
            }, index: function (e) {
                return e ? "string" == typeof e ? q.inArray(this[0], q(e)) : q.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            }, add: function (e, t) {
                var n = "string" == typeof e ? q(e, t) : q.makeArray(e && e.nodeType ? [e] : e),
                    r = q.merge(this.get(), n);
                return this.pushStack(l(n[0]) || l(r[0]) ? r : q.unique(r))
            }, andSelf: function () {
                return this.add(this.prevObject)
            }
        }), q.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return q.dir(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return q.dir(e, "parentNode", n)
            }, next: function (e) {
                return q.nth(e, 2, "nextSibling")
            }, prev: function (e) {
                return q.nth(e, 2, "previousSibling")
            }, nextAll: function (e) {
                return q.dir(e, "nextSibling")
            }, prevAll: function (e) {
                return q.dir(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return q.dir(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return q.dir(e, "previousSibling", n)
            }, siblings: function (e) {
                return q.sibling(e.parentNode.firstChild, e)
            }, children: function (e) {
                return q.sibling(e.firstChild)
            }, contents: function (e) {
                return q.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : q.makeArray(e.childNodes)
            }
        }, function (e, t) {
            q.fn[e] = function (n, r) {
                var i = q.map(this, t, n), a = ue.call(arguments);
                return oe.test(e) || (r = n), r && "string" == typeof r && (i = q.filter(r, i)), i = this.length > 1 && !fe[e] ? q.unique(i) : i, (this.length > 1 || le.test(r)) && se.test(e) && (i = i.reverse()), this.pushStack(i, e, a.join(","))
            }
        }), q.extend({
            filter: function (e, t, n) {
                return n && (e = ":not(" + e + ")"), 1 === t.length ? q.find.matchesSelector(t[0], e) ? [t[0]] : [] : q.find.matches(e, t)
            }, dir: function (e, n, r) {
                for (var i = [], a = e[n]; a && 9 !== a.nodeType && (r === t || 1 !== a.nodeType || !q(a).is(r));) 1 === a.nodeType && i.push(a), a = a[n];
                return i
            }, nth: function (e, t, n, r) {
                t = t || 1;
                for (var i = 0; e && (1 !== e.nodeType || ++i !== t); e = e[n]) ;
                return e
            }, sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var pe = "abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            he = / jQuery\d+="(?:\d+|null)"/g, me = /^\s+/,
            ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ve = /<([\w:]+)/,
            ye = /<tbody/i, be = /<|&#?\w+;/, xe = /<(?:script|style)/i, we = /<(?:script|object|embed|option|style)/i,
            Te = new RegExp("<(?:" + pe.replace(" ", "|") + ")", "i"), _e = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ke = /\/(java|ecma)script/i, Ce = /^\s*<!(?:\[CDATA\[|\-\-)/, Se = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            }, Ee = u(O);
        Se.optgroup = Se.option, Se.tbody = Se.tfoot = Se.colgroup = Se.caption = Se.thead, Se.th = Se.td, q.support.htmlSerialize || (Se._default = [1, "div<div>", "</div>"]), q.fn.extend({
            text: function (e) {
                return q.isFunction(e) ? this.each(function (t) {
                    var n = q(this);
                    n.text(e.call(this, t, n.text()))
                }) : "object" != typeof e && e !== t ? this.empty().append((this[0] && this[0].ownerDocument || O).createTextNode(e)) : q.text(this)
            }, wrapAll: function (e) {
                if (q.isFunction(e)) return this.each(function (t) {
                    q(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = q(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            }, wrapInner: function (e) {
                return q.isFunction(e) ? this.each(function (t) {
                    q(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = q(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                return this.each(function () {
                    q(this).wrapAll(e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    q.nodeName(this, "body") || q(this).replaceWith(this.childNodes)
                }).end()
            }, append: function () {
                return this.domManip(arguments, !0, function (e) {
                    1 === this.nodeType && this.appendChild(e)
                })
            }, prepend: function () {
                return this.domManip(arguments, !0, function (e) {
                    1 === this.nodeType && this.insertBefore(e, this.firstChild)
                })
            }, before: function () {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                    this.parentNode.insertBefore(e, this)
                });
                if (arguments.length) {
                    var e = q(arguments[0]);
                    return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
                }
            }, after: function () {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
                if (arguments.length) {
                    var e = this.pushStack(this, "after", arguments);
                    return e.push.apply(e, q(arguments[0]).toArray()), e
                }
            }, remove: function (e, t) {
                for (var n, r = 0; null != (n = this[r]); r++) e && !q.filter(e, [n]).length || (t || 1 !== n.nodeType || (q.cleanData(n.getElementsByTagName("*")), q.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) for (1 === e.nodeType && q.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return q.clone(this, e, t)
                })
            }, html: function (e) {
                if (e === t) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(he, "") : null;
                if ("string" != typeof e || xe.test(e) || !q.support.leadingWhitespace && me.test(e) || Se[(ve.exec(e) || ["", ""])[1].toLowerCase()]) q.isFunction(e) ? this.each(function (t) {
                    var n = q(this);
                    n.html(e.call(this, t, n.html()))
                }) : this.empty().append(e); else {
                    e = e.replace(ge, "<$1></$2>");
                    try {
                        for (var n = 0, r = this.length; n < r; n++) 1 === this[n].nodeType && (q.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = e)
                    } catch (t) {
                        this.empty().append(e)
                    }
                }
                return this
            }, replaceWith: function (e) {
                return this[0] && this[0].parentNode ? q.isFunction(e) ? this.each(function (t) {
                    var n = q(this), r = n.html();
                    n.replaceWith(e.call(this, t, r))
                }) : ("string" != typeof e && (e = q(e).detach()), this.each(function () {
                    var t = this.nextSibling, n = this.parentNode;
                    q(this).remove(), t ? q(t).before(e) : q(n).append(e)
                })) : this.length ? this.pushStack(q(q.isFunction(e) ? e() : e), "replaceWith", e) : this
            }, detach: function (e) {
                return this.remove(e, !0)
            }, domManip: function (e, n, r) {
                var i, a, o, s, l = e[0], c = [];
                if (!q.support.checkClone && 3 === arguments.length && "string" == typeof l && _e.test(l)) return this.each(function () {
                    q(this).domManip(e, n, r, !0)
                });
                if (q.isFunction(l)) return this.each(function (i) {
                    var a = q(this);
                    e[0] = l.call(this, i, n ? a.html() : t), a.domManip(e, n, r)
                });
                if (this[0]) {
                    if (s = l && l.parentNode, i = q.support.parentNode && s && 11 === s.nodeType && s.childNodes.length === this.length ? {fragment: s} : q.buildFragment(e, this, c), o = i.fragment, a = 1 === o.childNodes.length ? o = o.firstChild : o.firstChild) {
                        n = n && q.nodeName(a, "tr");
                        for (var u = 0, f = this.length, p = f - 1; u < f; u++) r.call(n ? d(this[u]) : this[u], i.cacheable || f > 1 && u < p ? q.clone(o, !0, !0) : o)
                    }
                    c.length && q.each(c, v)
                }
                return this
            }
        }), q.buildFragment = function (e, t, n) {
            var r, i, a, o, s = e[0];
            return t && t[0] && (o = t[0].ownerDocument || t[0]), o.createDocumentFragment || (o = O), 1 === e.length && "string" == typeof s && s.length < 512 && o === O && "<" === s.charAt(0) && !we.test(s) && (q.support.checkClone || !_e.test(s)) && !q.support.unknownElems && Te.test(s) && (i = !0, (a = q.fragments[s]) && 1 !== a && (r = a)), r || (r = o.createDocumentFragment(), q.clean(e, o, r, n)), i && (q.fragments[s] = a ? r : 1), {
                fragment: r,
                cacheable: i
            }
        }, q.fragments = {}, q.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            q.fn[e] = function (n) {
                var r = [], i = q(n), a = 1 === this.length && this[0].parentNode;
                if (a && 11 === a.nodeType && 1 === a.childNodes.length && 1 === i.length) return i[t](this[0]), this;
                for (var o = 0, s = i.length; o < s; o++) {
                    var l = (o > 0 ? this.clone(!0) : this).get();
                    q(i[o])[t](l), r = r.concat(l)
                }
                return this.pushStack(r, e, i.selector)
            }
        }), q.extend({
            clone: function (e, t, n) {
                var r, i, a, o = e.cloneNode(!0);
                if (!(q.support.noCloneEvent && q.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || q.isXMLDoc(e))) for (p(e, o), r = h(e), i = h(o), a = 0; r[a]; ++a) i[a] && p(r[a], i[a]);
                if (t && (f(e, o), n)) for (r = h(e), i = h(o), a = 0; r[a]; ++a) f(r[a], i[a]);
                return r = i = null, o
            }, clean: function (e, t, n, r) {
                var i;
                void 0 === (t = t || O).createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || O);
                for (var a, o, s = [], l = 0; null != (o = e[l]); l++) if ("number" == typeof o && (o += ""), o) {
                    if ("string" == typeof o) if (be.test(o)) {
                        o = o.replace(ge, "<$1></$2>");
                        var c = (ve.exec(o) || ["", ""])[1].toLowerCase(), d = Se[c] || Se._default, f = d[0],
                            p = t.createElement("div");
                        for (t === O ? Ee.appendChild(p) : u(t).appendChild(p), p.innerHTML = d[1] + o + d[2]; f--;) p = p.lastChild;
                        if (!q.support.tbody) {
                            var h = ye.test(o),
                                m = "table" !== c || h ? "<table>" !== d[1] || h ? [] : p.childNodes : p.firstChild && p.firstChild.childNodes;
                            for (a = m.length - 1; a >= 0; --a) q.nodeName(m[a], "tbody") && !m[a].childNodes.length && m[a].parentNode.removeChild(m[a])
                        }
                        !q.support.leadingWhitespace && me.test(o) && p.insertBefore(t.createTextNode(me.exec(o)[0]), p.firstChild), o = p.childNodes
                    } else o = t.createTextNode(o);
                    var v;
                    if (!q.support.appendChecked) if (o[0] && "number" == typeof(v = o.length)) for (a = 0; a < v; a++) g(o[a]); else g(o);
                    o.nodeType ? s.push(o) : s = q.merge(s, o)
                }
                if (n) for (i = function (e) {
                    return !e.type || ke.test(e.type)
                }, l = 0; s[l]; l++) if (!r || !q.nodeName(s[l], "script") || s[l].type && "text/javascript" !== s[l].type.toLowerCase()) {
                    if (1 === s[l].nodeType) {
                        var y = q.grep(s[l].getElementsByTagName("script"), i);
                        s.splice.apply(s, [l + 1, 0].concat(y))
                    }
                    n.appendChild(s[l])
                } else r.push(s[l].parentNode ? s[l].parentNode.removeChild(s[l]) : s[l]);
                return s
            }, cleanData: function (e) {
                for (var t, n, r, i = q.cache, a = q.event.special, o = q.support.deleteExpando, s = 0; null != (r = e[s]); s++) if ((!r.nodeName || !q.noData[r.nodeName.toLowerCase()]) && (n = r[q.expando])) {
                    if ((t = i[n]) && t.events) {
                        for (var l in t.events) a[l] ? q.event.remove(r, l) : q.removeEvent(r, l, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    o ? delete r[q.expando] : r.removeAttribute && r.removeAttribute(q.expando), delete i[n]
                }
            }
        });
        var je, Ne, Ae, De = /alpha\([^)]*\)/i, Oe = /opacity=([^)]*)/, Le = /([A-Z]|^ms)/g, Fe = /^-?\d+(?:px)?$/i,
            qe = /^-?\d/, Me = /^([\-+])=([\-+.\de]+)/,
            Re = {position: "absolute", visibility: "hidden", display: "block"}, Ie = ["Left", "Right"],
            He = ["Top", "Bottom"];
        q.fn.css = function (e, n) {
            return 2 === arguments.length && n === t ? this : q.access(this, e, n, !0, function (e, n, r) {
                return r !== t ? q.style(e, n, r) : q.css(e, n)
            })
        }, q.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = je(e, "opacity", "opacity");
                            return "" === n ? "1" : n
                        }
                        return e.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {float: q.support.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (e, n, r, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var a, o, s = q.camelCase(n), l = e.style, c = q.cssHooks[s];
                    if (n = q.cssProps[s] || s, r === t) return c && "get" in c && (a = c.get(e, !1, i)) !== t ? a : l[n];
                    if (!("string" == (o = typeof r) && (a = Me.exec(r)) && (r = +(a[1] + 1) * +a[2] + parseFloat(q.css(e, n)), o = "number"), null == r || "number" === o && isNaN(r) || ("number" !== o || q.cssNumber[s] || (r += "px"), c && "set" in c && (r = c.set(e, r)) === t))) try {
                        l[n] = r
                    } catch (e) {
                    }
                }
            },
            css: function (e, n, r) {
                var i, a;
                return n = q.camelCase(n), a = q.cssHooks[n], "cssFloat" === (n = q.cssProps[n] || n) && (n = "float"), a && "get" in a && (i = a.get(e, !0, r)) !== t ? i : je ? je(e, n) : void 0
            },
            swap: function (e, t, n) {
                var r = {};
                for (var i in t) r[i] = e.style[i], e.style[i] = t[i];
                n.call(e);
                for (i in t) e.style[i] = r[i]
            }
        }), q.curCSS = q.css, q.each(["height", "width"], function (e, t) {
            q.cssHooks[t] = {
                get: function (e, n, r) {
                    var i;
                    if (n) return 0 !== e.offsetWidth ? y(e, t, r) : (q.swap(e, Re, function () {
                        i = y(e, t, r)
                    }), i)
                }, set: function (e, t) {
                    return Fe.test(t) ? (t = parseFloat(t)) >= 0 ? t + "px" : void 0 : t
                }
            }
        }), q.support.opacity || (q.cssHooks.opacity = {
            get: function (e, t) {
                return Oe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
            }, set: function (e, t) {
                var n = e.style, r = e.currentStyle, i = q.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    a = r && r.filter || n.filter || "";
                n.zoom = 1, t >= 1 && "" === q.trim(a.replace(De, "")) && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = De.test(a) ? a.replace(De, i) : a + " " + i)
            }
        }), q(function () {
            q.support.reliableMarginRight || (q.cssHooks.marginRight = {
                get: function (e, t) {
                    var n;
                    return q.swap(e, {display: "inline-block"}, function () {
                        n = t ? je(e, "margin-right", "marginRight") : e.style.marginRight
                    }), n
                }
            })
        }), O.defaultView && O.defaultView.getComputedStyle && (Ne = function (e, n) {
            var r, i, a;
            return n = n.replace(Le, "-$1").toLowerCase(), (i = e.ownerDocument.defaultView) ? ((a = i.getComputedStyle(e, null)) && ("" !== (r = a.getPropertyValue(n)) || q.contains(e.ownerDocument.documentElement, e) || (r = q.style(e, n))), r) : t
        }), O.documentElement.currentStyle && (Ae = function (e, t) {
            var n, r, i, a = e.currentStyle && e.currentStyle[t], o = e.style;
            return null === a && o && (i = o[t]) && (a = i), !Fe.test(a) && qe.test(a) && (n = o.left, (r = e.runtimeStyle && e.runtimeStyle.left) && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : a || 0, a = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), "" === a ? "auto" : a
        }), je = Ne || Ae, q.expr && q.expr.filters && (q.expr.filters.hidden = function (e) {
            var t = e.offsetWidth, n = e.offsetHeight;
            return 0 === t && 0 === n || !q.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || q.css(e, "display"))
        }, q.expr.filters.visible = function (e) {
            return !q.expr.filters.hidden(e)
        });
        var ze, Pe, Be = /%20/g, Ue = /\[\]$/, We = /\r?\n/g, $e = /#.*$/, Xe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ve = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            Ye = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Ze = /^(?:GET|HEAD)$/, Ke = /^\/\//,
            Ge = /\?/, Je = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Qe = /^(?:select|textarea)/i,
            et = /\s+/, tt = /([?&])_=[^&]*/, nt = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, rt = q.fn.load,
            it = {}, at = {}, ot = ["*/"] + ["*"];
        try {
            ze = F.href
        } catch (e) {
            (ze = O.createElement("a")).href = "", ze = ze.href
        }
        Pe = nt.exec(ze.toLowerCase()) || [], q.fn.extend({
            load: function (e, n, r) {
                if ("string" != typeof e && rt) return rt.apply(this, arguments);
                if (!this.length) return this;
                var i = e.indexOf(" ");
                if (i >= 0) {
                    var a = e.slice(i, e.length);
                    e = e.slice(0, i)
                }
                var o = "GET";
                n && (q.isFunction(n) ? (r = n, n = t) : "object" == typeof n && (n = q.param(n, q.ajaxSettings.traditional), o = "POST"));
                var s = this;
                return q.ajax({
                    url: e, type: o, dataType: "html", data: n, complete: function (e, t, n) {
                        n = e.responseText, e.isResolved() && (e.done(function (e) {
                            n = e
                        }), s.html(a ? q("<div>").append(n.replace(Je, "")).find(a) : n)), r && s.each(r, [n, t, e])
                    }
                }), this
            }, serialize: function () {
                return q.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    return this.elements ? q.makeArray(this.elements) : this
                }).filter(function () {
                    return this.name && !this.disabled && (this.checked || Qe.test(this.nodeName) || Ve.test(this.type))
                }).map(function (e, t) {
                    var n = q(this).val();
                    return null == n ? null : q.isArray(n) ? q.map(n, function (e, n) {
                        return {name: t.name, value: e.replace(We, "\r\n")}
                    }) : {name: t.name, value: n.replace(We, "\r\n")}
                }).get()
            }
        }), q.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
            q.fn[t] = function (e) {
                return this.bind(t, e)
            }
        }), q.each(["get", "post"], function (e, n) {
            q[n] = function (e, r, i, a) {
                return q.isFunction(r) && (a = a || i, i = r, r = t), q.ajax({
                    type: n,
                    url: e,
                    data: r,
                    success: i,
                    dataType: a
                })
            }
        }), q.extend({
            getScript: function (e, n) {
                return q.get(e, t, n, "script")
            },
            getJSON: function (e, t, n) {
                return q.get(e, t, n, "json")
            },
            ajaxSetup: function (e, t) {
                return t ? w(e, q.ajaxSettings) : (t = e, e = q.ajaxSettings), w(e, t), e
            },
            ajaxSettings: {
                url: ze,
                isLocal: Ye.test(Pe[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": ot
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText"},
                converters: {"* text": e.String, "text html": !0, "text json": q.parseJSON, "text xml": q.parseXML},
                flatOptions: {context: !0, url: !0}
            },
            ajaxPrefilter: b(it),
            ajaxTransport: b(at),
            ajax: function (e, n) {
                function r(e, n, r, o) {
                    if (2 !== w) {
                        w = 2, l && clearTimeout(l), s = t, a = o || "", T.readyState = e > 0 ? 4 : 0;
                        var c, d, y, b, x, C = n, S = r ? _(f, T, r) : t;
                        if (e >= 200 && e < 300 || 304 === e) if (f.ifModified && ((b = T.getResponseHeader("Last-Modified")) && (q.lastModified[i] = b), (x = T.getResponseHeader("Etag")) && (q.etag[i] = x)), 304 === e) C = "notmodified", c = !0; else try {
                            d = k(f, S), C = "success", c = !0
                        } catch (e) {
                            C = "parsererror", y = e
                        } else y = C, C && !e || (C = "error", e < 0 && (e = 0));
                        T.status = e, T.statusText = "" + (n || C), c ? m.resolveWith(p, [d, C, T]) : m.rejectWith(p, [T, C, y]), T.statusCode(v), v = t, u && h.trigger("ajax" + (c ? "Success" : "Error"), [T, f, c ? d : y]), g.fireWith(p, [T, C]), u && (h.trigger("ajaxComplete", [T, f]), --q.active || q.event.trigger("ajaxStop"))
                    }
                }

                "object" == typeof e && (n = e, e = t), n = n || {};
                var i, a, o, s, l, c, u, d, f = q.ajaxSetup({}, n), p = f.context || f,
                    h = p !== f && (p.nodeType || p instanceof q) ? q(p) : q.event, m = q.Deferred(),
                    g = q.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, w = 0, T = {
                        readyState: 0, setRequestHeader: function (e, t) {
                            if (!w) {
                                var n = e.toLowerCase();
                                e = b[n] = b[n] || e, y[e] = t
                            }
                            return this
                        }, getAllResponseHeaders: function () {
                            return 2 === w ? a : null
                        }, getResponseHeader: function (e) {
                            var n;
                            if (2 === w) {
                                if (!o) for (o = {}; n = Xe.exec(a);) o[n[1].toLowerCase()] = n[2];
                                n = o[e.toLowerCase()]
                            }
                            return n === t ? null : n
                        }, overrideMimeType: function (e) {
                            return w || (f.mimeType = e), this
                        }, abort: function (e) {
                            return e = e || "abort", s && s.abort(e), r(0, e), this
                        }
                    };
                if (m.promise(T), T.success = T.done, T.error = T.fail, T.complete = g.add, T.statusCode = function (e) {
                    if (e) {
                        var t;
                        if (w < 2) for (t in e) v[t] = [v[t], e[t]]; else t = e[T.status], T.then(t, t)
                    }
                    return this
                }, f.url = ((e || f.url) + "").replace($e, "").replace(Ke, Pe[1] + "//"), f.dataTypes = q.trim(f.dataType || "*").toLowerCase().split(et), null == f.crossDomain && (c = nt.exec(f.url.toLowerCase()), f.crossDomain = !(!c || c[1] == Pe[1] && c[2] == Pe[2] && (c[3] || ("http:" === c[1] ? 80 : 443)) == (Pe[3] || ("http:" === Pe[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = q.param(f.data, f.traditional)), x(it, f, n, T), 2 === w) return !1;
                if (u = f.global, f.type = f.type.toUpperCase(), f.hasContent = !Ze.test(f.type), u && 0 == q.active++ && q.event.trigger("ajaxStart"), !f.hasContent && (f.data && (f.url += (Ge.test(f.url) ? "&" : "?") + f.data, delete f.data), i = f.url, !1 === f.cache)) {
                    var C = q.now(), S = f.url.replace(tt, "$1_=" + C);
                    f.url = S + (S === f.url ? (Ge.test(f.url) ? "&" : "?") + "_=" + C : "")
                }
                (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), f.ifModified && (i = i || f.url, q.lastModified[i] && T.setRequestHeader("If-Modified-Since", q.lastModified[i]), q.etag[i] && T.setRequestHeader("If-None-Match", q.etag[i])), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + ot + "; q=0.01" : "") : f.accepts["*"]);
                for (d in f.headers) T.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(p, T, f) || 2 === w)) return T.abort(), !1;
                for (d in{success: 1, error: 1, complete: 1}) T[d](f[d]);
                if (s = x(at, f, n, T)) {
                    T.readyState = 1, u && h.trigger("ajaxSend", [T, f]), f.async && f.timeout > 0 && (l = setTimeout(function () {
                        T.abort("timeout")
                    }, f.timeout));
                    try {
                        w = 1, s.send(y, r)
                    } catch (e) {
                        w < 2 ? r(-1, e) : q.error(e)
                    }
                } else r(-1, "No Transport");
                return T
            },
            param: function (e, n) {
                var r = [], i = function (e, t) {
                    t = q.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (n === t && (n = q.ajaxSettings.traditional), q.isArray(e) || e.jquery && !q.isPlainObject(e)) q.each(e, function () {
                    i(this.name, this.value)
                }); else for (var a in e) T(a, e[a], n, i);
                return r.join("&").replace(Be, "+")
            }
        }), q.extend({active: 0, lastModified: {}, etag: {}});
        var st = q.now(), lt = /(\=)\?(&|$)|\?\?/i;
        q.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                return q.expando + "_" + st++
            }
        }), q.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i = "application/x-www-form-urlencoded" === t.contentType && "string" == typeof t.data;
            if ("jsonp" === t.dataTypes[0] || !1 !== t.jsonp && (lt.test(t.url) || i && lt.test(t.data))) {
                var a, o = t.jsonpCallback = q.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                    s = e[o], l = t.url, c = t.data, u = "$1" + o + "$2";
                return !1 !== t.jsonp && (l = l.replace(lt, u), t.url === l && (i && (c = c.replace(lt, u)), t.data === c && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + o))), t.url = l, t.data = c, e[o] = function (e) {
                    a = [e]
                }, r.always(function () {
                    e[o] = s, a && q.isFunction(s) && e[o](a[0])
                }), t.converters["script json"] = function () {
                    return a || q.error(o + " was not called"), a[0]
                }, t.dataTypes[0] = "json", "script"
            }
        }), q.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /javascript|ecmascript/},
            converters: {
                "text script": function (e) {
                    return q.globalEval(e), e
                }
            }
        }), q.ajaxPrefilter("script", function (e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), q.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var n, r = O.head || O.getElementsByTagName("head")[0] || O.documentElement;
                return {
                    send: function (i, a) {
                        (n = O.createElement("script")).async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
                            (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || a(200, "success"))
                        }, r.insertBefore(n, r.firstChild)
                    }, abort: function () {
                        n && n.onload(0, 1)
                    }
                }
            }
        });
        var ct, ut = !!e.ActiveXObject && function () {
            for (var e in ct) ct[e](0, 1)
        }, dt = 0;
        q.ajaxSettings.xhr = e.ActiveXObject ? function () {
            return !this.isLocal && C() || S()
        } : C, function (e) {
            q.extend(q.support, {ajax: !!e, cors: !!e && "withCredentials" in e})
        }(q.ajaxSettings.xhr()), q.support.ajax && q.ajaxTransport(function (n) {
            if (!n.crossDomain || q.support.cors) {
                var r;
                return {
                    send: function (i, a) {
                        var o, s, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in i) l.setRequestHeader(s, i[s])
                        } catch (e) {
                        }
                        l.send(n.hasContent && n.data || null), r = function (e, i) {
                            var s, c, u, d, f;
                            try {
                                if (r && (i || 4 === l.readyState)) if (r = t, o && (l.onreadystatechange = q.noop, ut && delete ct[o]), i) 4 !== l.readyState && l.abort(); else {
                                    s = l.status, u = l.getAllResponseHeaders(), d = {}, (f = l.responseXML) && f.documentElement && (d.xml = f), d.text = l.responseText;
                                    try {
                                        c = l.statusText
                                    } catch (e) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                }
                            } catch (e) {
                                i || a(-1, e)
                            }
                            d && a(s, c, d, u)
                        }, n.async && 4 !== l.readyState ? (o = ++dt, ut && (ct || (ct = {}, q(e).unload(ut)), ct[o] = r), l.onreadystatechange = r) : r()
                    }, abort: function () {
                        r && r(0, 1)
                    }
                }
            }
        });
        var ft, pt, ht, mt, gt = {}, vt = /^(?:toggle|show|hide)$/, yt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
            bt = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
        q.fn.extend({
            show: function (e, t, n) {
                var r, i;
                if (e || 0 === e) return this.animate(N("show", 3), e, t, n);
                for (var a = 0, o = this.length; a < o; a++) (r = this[a]).style && (i = r.style.display, q._data(r, "olddisplay") || "none" !== i || (i = r.style.display = ""), "" === i && "none" === q.css(r, "display") && q._data(r, "olddisplay", A(r.nodeName)));
                for (a = 0; a < o; a++) (r = this[a]).style && ("" !== (i = r.style.display) && "none" !== i || (r.style.display = q._data(r, "olddisplay") || ""));
                return this
            }, hide: function (e, t, n) {
                if (e || 0 === e) return this.animate(N("hide", 3), e, t, n);
                for (var r, i, a = 0, o = this.length; a < o; a++) (r = this[a]).style && ("none" === (i = q.css(r, "display")) || q._data(r, "olddisplay") || q._data(r, "olddisplay", i));
                for (a = 0; a < o; a++) this[a].style && (this[a].style.display = "none");
                return this
            }, _toggle: q.fn.toggle, toggle: function (e, t, n) {
                var r = "boolean" == typeof e;
                return q.isFunction(e) && q.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || r ? this.each(function () {
                    var t = r ? e : q(this).is(":hidden");
                    q(this)[t ? "show" : "hide"]()
                }) : this.animate(N("toggle", 3), e, t, n), this
            }, fadeTo: function (e, t, n, r) {
                return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
            }, animate: function (e, t, n, r) {
                function i() {
                    !1 === a.queue && q._mark(this);
                    var t, n, r, i, o, s, l, c, u, d = q.extend({}, a), f = 1 === this.nodeType,
                        p = f && q(this).is(":hidden");
                    d.animatedProperties = {};
                    for (r in e) {
                        if (t = q.camelCase(r), r !== t && (e[t] = e[r], delete e[r]), n = e[t], q.isArray(n) ? (d.animatedProperties[t] = n[1], n = e[t] = n[0]) : d.animatedProperties[t] = d.specialEasing && d.specialEasing[t] || d.easing || "swing", "hide" === n && p || "show" === n && !p) return d.complete.call(this);
                        !f || "height" !== t && "width" !== t || (d.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === q.css(this, "display") && "none" === q.css(this, "float") && (q.support.inlineBlockNeedsLayout && "inline" !== A(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                    }
                    null != d.overflow && (this.style.overflow = "hidden");
                    for (r in e) i = new q.fx(this, d, r), n = e[r], vt.test(n) ? (u = q._data(this, "toggle" + r) || ("toggle" === n ? p ? "show" : "hide" : 0)) ? (q._data(this, "toggle" + r, "show" === u ? "hide" : "show"), i[u]()) : i[n]() : (o = yt.exec(n), s = i.cur(), o ? (l = parseFloat(o[2]), "px" !== (c = o[3] || (q.cssNumber[r] ? "" : "px")) && (q.style(this, r, (l || 1) + c), s = (l || 1) / i.cur() * s, q.style(this, r, s + c)), o[1] && (l = ("-=" === o[1] ? -1 : 1) * l + s), i.custom(s, l, c)) : i.custom(s, n, ""));
                    return !0
                }

                var a = q.speed(t, n, r);
                return q.isEmptyObject(e) ? this.each(a.complete, [!1]) : (e = q.extend({}, e), !1 === a.queue ? this.each(i) : this.queue(a.queue, i))
            }, stop: function (e, n, r) {
                return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    function t(e, t, n) {
                        var i = t[n];
                        q.removeData(e, n, !0), i.stop(r)
                    }

                    var n, i = !1, a = q.timers, o = q._data(this);
                    if (r || q._unmark(!0, this), null == e) for (n in o) o[n].stop && n.indexOf(".run") === n.length - 4 && t(this, o, n); else o[n = e + ".run"] && o[n].stop && t(this, o, n);
                    for (n = a.length; n--;) a[n].elem !== this || null != e && a[n].queue !== e || (r ? a[n](!0) : a[n].saveState(), i = !0, a.splice(n, 1));
                    r && i || q.dequeue(this, e)
                })
            }
        }), q.each({
            slideDown: N("show", 1),
            slideUp: N("hide", 1),
            slideToggle: N("toggle", 1),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            q.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), q.extend({
            speed: function (e, t, n) {
                var r = e && "object" == typeof e ? q.extend({}, e) : {
                    complete: n || !n && t || q.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !q.isFunction(t) && t
                };
                return r.duration = q.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in q.fx.speeds ? q.fx.speeds[r.duration] : q.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function (e) {
                    q.isFunction(r.old) && r.old.call(this), r.queue ? q.dequeue(this, r.queue) : !1 !== e && q._unmark(this)
                }, r
            }, easing: {
                linear: function (e, t, n, r) {
                    return n + r * e
                }, swing: function (e, t, n, r) {
                    return (-Math.cos(e * Math.PI) / 2 + .5) * r + n
                }
            }, timers: [], fx: function (e, t, n) {
                this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
            }
        }), q.fx.prototype = {
            update: function () {
                this.options.step && this.options.step.call(this.elem, this.now, this), (q.fx.step[this.prop] || q.fx.step._default)(this)
            }, cur: function () {
                if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
                var e, t = q.css(this.elem, this.prop);
                return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
            }, custom: function (e, n, r) {
                function i(e) {
                    return a.step(e)
                }

                var a = this, o = q.fx;
                this.startTime = mt || E(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = r || this.unit || (q.cssNumber[this.prop] ? "" : "px"), i.queue = this.options.queue, i.elem = this.elem, i.saveState = function () {
                    a.options.hide && q._data(a.elem, "fxshow" + a.prop) === t && q._data(a.elem, "fxshow" + a.prop, a.start)
                }, i() && q.timers.push(i) && !ht && (ht = setInterval(o.tick, o.interval))
            }, show: function () {
                var e = q._data(this.elem, "fxshow" + this.prop);
                this.options.orig[this.prop] = e || q.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), q(this.elem).show()
            }, hide: function () {
                this.options.orig[this.prop] = q._data(this.elem, "fxshow" + this.prop) || q.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
            }, step: function (e) {
                var t, n, r, i = mt || E(), a = !0, o = this.elem, s = this.options;
                if (e || i >= s.duration + this.startTime) {
                    this.now = this.end, this.pos = this.state = 1, this.update(), s.animatedProperties[this.prop] = !0;
                    for (t in s.animatedProperties) !0 !== s.animatedProperties[t] && (a = !1);
                    if (a) {
                        if (null == s.overflow || q.support.shrinkWrapBlocks || q.each(["", "X", "Y"], function (e, t) {
                            o.style["overflow" + t] = s.overflow[e]
                        }), s.hide && q(o).hide(), s.hide || s.show) for (t in s.animatedProperties) q.style(o, t, s.orig[t]), q.removeData(o, "fxshow" + t, !0), q.removeData(o, "toggle" + t, !0);
                        (r = s.complete) && (s.complete = !1, r.call(o))
                    }
                    return !1
                }
                return s.duration == 1 / 0 ? this.now = i : (n = i - this.startTime, this.state = n / s.duration, this.pos = q.easing[s.animatedProperties[this.prop]](this.state, n, 0, 1, s.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
            }
        }, q.extend(q.fx, {
            tick: function () {
                for (var e, t = q.timers, n = 0; n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
                t.length || q.fx.stop()
            }, interval: 13, stop: function () {
                clearInterval(ht), ht = null
            }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
                opacity: function (e) {
                    q.style(e.elem, "opacity", e.now)
                }, _default: function (e) {
                    e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
                }
            }
        }), q.each(["width", "height"], function (e, t) {
            q.fx.step[t] = function (e) {
                q.style(e.elem, t, Math.max(0, e.now))
            }
        }), q.expr && q.expr.filters && (q.expr.filters.animated = function (e) {
            return q.grep(q.timers, function (t) {
                return e === t.elem
            }).length
        });
        var xt = /^t(?:able|d|h)$/i, wt = /^(?:body|html)$/i;
        "getBoundingClientRect" in O.documentElement ? q.fn.offset = function (e) {
            var t, n = this[0];
            if (e) return this.each(function (t) {
                q.offset.setOffset(this, e, t)
            });
            if (!n || !n.ownerDocument) return null;
            if (n === n.ownerDocument.body) return q.offset.bodyOffset(n);
            try {
                t = n.getBoundingClientRect()
            } catch (e) {
            }
            var r = n.ownerDocument, i = r.documentElement;
            if (!t || !q.contains(i, n)) return t ? {top: t.top, left: t.left} : {top: 0, left: 0};
            var a = r.body, o = D(r), s = i.clientTop || a.clientTop || 0, l = i.clientLeft || a.clientLeft || 0,
                c = o.pageYOffset || q.support.boxModel && i.scrollTop || a.scrollTop,
                u = o.pageXOffset || q.support.boxModel && i.scrollLeft || a.scrollLeft;
            return {top: t.top + c - s, left: t.left + u - l}
        } : q.fn.offset = function (e) {
            var t = this[0];
            if (e) return this.each(function (t) {
                q.offset.setOffset(this, e, t)
            });
            if (!t || !t.ownerDocument) return null;
            if (t === t.ownerDocument.body) return q.offset.bodyOffset(t);
            for (var n, r = t.offsetParent, i = t.ownerDocument, a = i.documentElement, o = i.body, s = i.defaultView, l = s ? s.getComputedStyle(t, null) : t.currentStyle, c = t.offsetTop, u = t.offsetLeft; (t = t.parentNode) && t !== o && t !== a && (!q.support.fixedPosition || "fixed" !== l.position);) n = s ? s.getComputedStyle(t, null) : t.currentStyle, c -= t.scrollTop, u -= t.scrollLeft, t === r && (c += t.offsetTop, u += t.offsetLeft, !q.support.doesNotAddBorder || q.support.doesAddBorderForTableAndCells && xt.test(t.nodeName) || (c += parseFloat(n.borderTopWidth) || 0, u += parseFloat(n.borderLeftWidth) || 0), r, r = t.offsetParent), q.support.subtractsBorderForOverflowNotVisible && "visible" !== n.overflow && (c += parseFloat(n.borderTopWidth) || 0, u += parseFloat(n.borderLeftWidth) || 0), l = n;
            return "relative" !== l.position && "static" !== l.position || (c += o.offsetTop, u += o.offsetLeft), q.support.fixedPosition && "fixed" === l.position && (c += Math.max(a.scrollTop, o.scrollTop), u += Math.max(a.scrollLeft, o.scrollLeft)), {
                top: c,
                left: u
            }
        }, q.offset = {
            bodyOffset: function (e) {
                var t = e.offsetTop, n = e.offsetLeft;
                return q.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(q.css(e, "marginTop")) || 0, n += parseFloat(q.css(e, "marginLeft")) || 0), {
                    top: t,
                    left: n
                }
            }, setOffset: function (e, t, n) {
                var r = q.css(e, "position");
                "static" === r && (e.style.position = "relative");
                var i, a, o = q(e), s = o.offset(), l = q.css(e, "top"), c = q.css(e, "left"), u = {}, d = {};
                ("absolute" === r || "fixed" === r) && q.inArray("auto", [l, c]) > -1 ? (i = (d = o.position()).top, a = d.left) : (i = parseFloat(l) || 0, a = parseFloat(c) || 0), q.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (u.top = t.top - s.top + i), null != t.left && (u.left = t.left - s.left + a), "using" in t ? t.using.call(e, u) : o.css(u)
            }
        }, q.fn.extend({
            position: function () {
                if (!this[0]) return null;
                var e = this[0], t = this.offsetParent(), n = this.offset(),
                    r = wt.test(t[0].nodeName) ? {top: 0, left: 0} : t.offset();
                return n.top -= parseFloat(q.css(e, "marginTop")) || 0, n.left -= parseFloat(q.css(e, "marginLeft")) || 0, r.top += parseFloat(q.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(q.css(t[0], "borderLeftWidth")) || 0, {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || O.body; e && !wt.test(e.nodeName) && "static" === q.css(e, "position");) e = e.offsetParent;
                    return e
                })
            }
        }), q.each(["Left", "Top"], function (e, n) {
            var r = "scroll" + n;
            q.fn[r] = function (n) {
                var i, a;
                return n === t ? (i = this[0]) ? (a = D(i)) ? "pageXOffset" in a ? a[e ? "pageYOffset" : "pageXOffset"] : q.support.boxModel && a.document.documentElement[r] || a.document.body[r] : i[r] : null : this.each(function () {
                    (a = D(this)) ? a.scrollTo(e ? q(a).scrollLeft() : n, e ? n : q(a).scrollTop()) : this[r] = n
                })
            }
        }), q.each(["Height", "Width"], function (e, n) {
            var r = n.toLowerCase();
            q.fn["inner" + n] = function () {
                var e = this[0];
                return e ? e.style ? parseFloat(q.css(e, r, "padding")) : this[r]() : null
            }, q.fn["outer" + n] = function (e) {
                var t = this[0];
                return t ? t.style ? parseFloat(q.css(t, r, e ? "margin" : "border")) : this[r]() : null
            }, q.fn[r] = function (e) {
                var i = this[0];
                if (!i) return null == e ? null : this;
                if (q.isFunction(e)) return this.each(function (t) {
                    var n = q(this);
                    n[r](e.call(this, t, n[r]()))
                });
                if (q.isWindow(i)) {
                    var a = i.document.documentElement["client" + n], o = i.document.body;
                    return "CSS1Compat" === i.document.compatMode && a || o && o["client" + n] || a
                }
                if (9 === i.nodeType) return Math.max(i.documentElement["client" + n], i.body["scroll" + n], i.documentElement["scroll" + n], i.body["offset" + n], i.documentElement["offset" + n]);
                if (e === t) {
                    var s = q.css(i, r), l = parseFloat(s);
                    return q.isNumeric(l) ? l : s
                }
                return this.css(r, "string" == typeof e ? e : e + "px")
            }
        }), e.jQuery = e.$ = q
    }(window), $.noConflict(!0)
}), define("newweb/common/jquery.selectRange", [], function (e, t) {
    var n = e("./jquery-1.7");
    n.fn.selectRange = function (e) {
        var t, r, i, a = n(this).get(0);
        return void 0 === e ? (t = a.selectionStart, r = a.selectionEnd, i = a.value.substring(t, r), {
            start: t,
            end: r,
            text: i
        }) : ("number" == typeof e && (e = {
            start: e,
            end: e
        }), a.selectionStart = e.start, a.selectionEnd = e.end, a.focus(), !1)
    }
}), define("newweb/common/log", [], function (e, t) {
    var n = e("./jquery-1.7");
    t.clog = function (e, t, n) {
        (new Image).src = n ? "/ctlog?pos=" + t + "&action=" + e + "&check=" + n : "/ctlog?pos=" + t + "&action=" + e
    }, t.init = function () {
        n(".clog-js").live("click", function () {
            var e = n(this), r = e.data("clog"), i = e.data("pos"), a = e.prop("checked");
            t.clog(r, i, a)
        })
    }
}), define("newweb/common/manTranslate", [], function (e, t) {
    function n() {
        i("#transMan")[0] && i("#transMan")[0].removeAttribute("target"), i("#transMan").on("click", function () {
            var e = document.getElementById("mapForm"), t = document.getElementById("mapInput"),
                n = i("#inputOriginal").val();
            n = i.trim(n), t.value = n, e.submit()
        })
    }

    function r() {
        i("#transMan").hover(function () {
            i(".fanyi__operations--man--tips").fadeIn()
        }, function () {
            i(".fanyi__operations--man--tips").fadeOut()
        })
    }

    var i = e("./jquery-1.7");
    t.init = function () {
        r(), n()
    }
}), define("newweb/common/md5", ["./jquery-1.7"], function (e, t) {
    var n = function (e, t) {
        return e << t | e >>> 32 - t
    }, r = function (e, t) {
        var n, r, i, a, o;
        return i = 2147483648 & e, a = 2147483648 & t, n = 1073741824 & e, r = 1073741824 & t, o = (1073741823 & e) + (1073741823 & t), n & r ? 2147483648 ^ o ^ i ^ a : n | r ? 1073741824 & o ? 3221225472 ^ o ^ i ^ a : 1073741824 ^ o ^ i ^ a : o ^ i ^ a
    }, i = function (e, t, n) {
        return e & t | ~e & n
    }, a = function (e, t, n) {
        return e & n | t & ~n
    }, o = function (e, t, n) {
        return e ^ t ^ n
    }, s = function (e, t, n) {
        return t ^ (e | ~n)
    }, l = function (e, t, a, o, s, l, c) {
        return e = r(e, r(r(i(t, a, o), s), c)), r(n(e, l), t)
    }, c = function (e, t, i, o, s, l, c) {
        return e = r(e, r(r(a(t, i, o), s), c)), r(n(e, l), t)
    }, u = function (e, t, i, a, s, l, c) {
        return e = r(e, r(r(o(t, i, a), s), c)), r(n(e, l), t)
    }, d = function (e, t, i, a, o, l, c) {
        return e = r(e, r(r(s(t, i, a), o), c)), r(n(e, l), t)
    }, f = function (e) {
        for (var t, n = e.length, r = n + 8, i = 16 * ((r - r % 64) / 64 + 1), a = Array(i - 1), o = 0, s = 0; s < n;) o = s % 4 * 8, a[t = (s - s % 4) / 4] = a[t] | e.charCodeAt(s) << o, s++;
        return t = (s - s % 4) / 4, o = s % 4 * 8, a[t] = a[t] | 128 << o, a[i - 2] = n << 3, a[i - 1] = n >>> 29, a
    }, p = function (e) {
        var t, n = "", r = "";
        for (t = 0; t <= 3; t++) n += (r = "0" + (e >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
        return n
    }, h = function (e) {
        e = e.replace(/\x0d\x0a/g, "\n");
        for (var t = "", n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) t += String.fromCharCode(r); else if (r > 127 && r < 2048) t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128); else if (r >= 55296 && r <= 56319) {
                if (n + 1 < e.length) {
                    var i = e.charCodeAt(n + 1);
                    if (i >= 56320 && i <= 57343) {
                        var a = 1024 * (r - 55296) + (i - 56320) + 65536;
                        t += String.fromCharCode(240 | a >> 18 & 7), t += String.fromCharCode(128 | a >> 12 & 63), t += String.fromCharCode(128 | a >> 6 & 63), t += String.fromCharCode(128 | 63 & a), n++
                    }
                }
            } else t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128)
        }
        return t
    };
    e("./jquery-1.7").extend({
        md5: function (e) {
            var t, n, i, a, o, s, m, g, v, y = Array();
            for (e = h(e), y = f(e), s = 1732584193, m = 4023233417, g = 2562383102, v = 271733878, t = 0; t < y.length; t += 16) n = s, i = m, a = g, o = v, s = l(s, m, g, v, y[t + 0], 7, 3614090360), v = l(v, s, m, g, y[t + 1], 12, 3905402710), g = l(g, v, s, m, y[t + 2], 17, 606105819), m = l(m, g, v, s, y[t + 3], 22, 3250441966), s = l(s, m, g, v, y[t + 4], 7, 4118548399), v = l(v, s, m, g, y[t + 5], 12, 1200080426), g = l(g, v, s, m, y[t + 6], 17, 2821735955), m = l(m, g, v, s, y[t + 7], 22, 4249261313), s = l(s, m, g, v, y[t + 8], 7, 1770035416), v = l(v, s, m, g, y[t + 9], 12, 2336552879), g = l(g, v, s, m, y[t + 10], 17, 4294925233), m = l(m, g, v, s, y[t + 11], 22, 2304563134), s = l(s, m, g, v, y[t + 12], 7, 1804603682), v = l(v, s, m, g, y[t + 13], 12, 4254626195), g = l(g, v, s, m, y[t + 14], 17, 2792965006), m = l(m, g, v, s, y[t + 15], 22, 1236535329), s = c(s, m, g, v, y[t + 1], 5, 4129170786), v = c(v, s, m, g, y[t + 6], 9, 3225465664), g = c(g, v, s, m, y[t + 11], 14, 643717713), m = c(m, g, v, s, y[t + 0], 20, 3921069994), s = c(s, m, g, v, y[t + 5], 5, 3593408605), v = c(v, s, m, g, y[t + 10], 9, 38016083), g = c(g, v, s, m, y[t + 15], 14, 3634488961), m = c(m, g, v, s, y[t + 4], 20, 3889429448), s = c(s, m, g, v, y[t + 9], 5, 568446438), v = c(v, s, m, g, y[t + 14], 9, 3275163606), g = c(g, v, s, m, y[t + 3], 14, 4107603335), m = c(m, g, v, s, y[t + 8], 20, 1163531501), s = c(s, m, g, v, y[t + 13], 5, 2850285829), v = c(v, s, m, g, y[t + 2], 9, 4243563512), g = c(g, v, s, m, y[t + 7], 14, 1735328473), m = c(m, g, v, s, y[t + 12], 20, 2368359562), s = u(s, m, g, v, y[t + 5], 4, 4294588738), v = u(v, s, m, g, y[t + 8], 11, 2272392833), g = u(g, v, s, m, y[t + 11], 16, 1839030562), m = u(m, g, v, s, y[t + 14], 23, 4259657740), s = u(s, m, g, v, y[t + 1], 4, 2763975236), v = u(v, s, m, g, y[t + 4], 11, 1272893353), g = u(g, v, s, m, y[t + 7], 16, 4139469664), m = u(m, g, v, s, y[t + 10], 23, 3200236656), s = u(s, m, g, v, y[t + 13], 4, 681279174), v = u(v, s, m, g, y[t + 0], 11, 3936430074), g = u(g, v, s, m, y[t + 3], 16, 3572445317), m = u(m, g, v, s, y[t + 6], 23, 76029189), s = u(s, m, g, v, y[t + 9], 4, 3654602809), v = u(v, s, m, g, y[t + 12], 11, 3873151461), g = u(g, v, s, m, y[t + 15], 16, 530742520), m = u(m, g, v, s, y[t + 2], 23, 3299628645), s = d(s, m, g, v, y[t + 0], 6, 4096336452), v = d(v, s, m, g, y[t + 7], 10, 1126891415), g = d(g, v, s, m, y[t + 14], 15, 2878612391), m = d(m, g, v, s, y[t + 5], 21, 4237533241), s = d(s, m, g, v, y[t + 12], 6, 1700485571), v = d(v, s, m, g, y[t + 3], 10, 2399980690), g = d(g, v, s, m, y[t + 10], 15, 4293915773), m = d(m, g, v, s, y[t + 1], 21, 2240044497), s = d(s, m, g, v, y[t + 8], 6, 1873313359), v = d(v, s, m, g, y[t + 15], 10, 4264355552), g = d(g, v, s, m, y[t + 6], 15, 2734768916), m = d(m, g, v, s, y[t + 13], 21, 1309151649), s = d(s, m, g, v, y[t + 4], 6, 4149444226), v = d(v, s, m, g, y[t + 11], 10, 3174756917), g = d(g, v, s, m, y[t + 2], 15, 718787259), m = d(m, g, v, s, y[t + 9], 21, 3951481745), s = r(s, n), m = r(m, i), g = r(g, a), v = r(v, o);
            return (p(s) + p(m) + p(g) + p(v)).toLowerCase()
        }
    })
}), define("newweb/common/requestMoreTrans", ["./service", "./utils", "./md5", "./jquery-1.7"], function (e, t) {
    var n = e("./jquery-1.7"), r = e("./service");
    e("./utils");
    e("./md5");
    var i = null;
    t.asyRequest = function (e) {
        var t = e.i, a = r.generateSaltSign(t);
        i && i.abort(), i = n.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "/bbk/translate_m.do",
            data: {
                i: e.i,
                client: e.client,
                salt: a.salt,
                sign: a.sign,
                ts: a.ts,
                bv: a.bv,
                tgt: e.tgt,
                from: e.from,
                to: e.to,
                doctype: "json",
                version: "3.0",
                cache: !0
            },
            dataType: "json",
            success: function (t) {
                t && 0 == t.errorCode ? e.success && e.success(t) : e.error && e.error(t)
            },
            error: function (e) {
            }
        })
    }
}), define("newweb/common/select", [], function (e, t) {
    var n = e("./jquery-1.7");
    n.fn.select = function (e) {
        var t = this, r = (e = e || {}).changedCallback || function () {
        };
        t.click(function (e) {
            var t = n(this);
            t.removeClass("error-format"), t.find(".error-message").remove(), n(this).find(".select").is(":visible") ? (n(this).find(".select").slideUp("fast"), n(".item-select").removeClass("top")) : (n(".item-select").removeClass("top"), t.addClass("top"), n(".item-select .select").slideUp(), 0 != t.find(".select").children().length && t.find(".select").slideDown("fast")), e.stopPropagation(), e.cancelBubble = !0
        }), n("body").click(function (e) {
            t.find(".select").slideUp("fast")
        }), t.find(".select").click(function (e) {
            var i = n(e.target), a = i.text();
            if (i.hasClass("group")) return e.stopPropagation(), void(e.cancelBubble = !0);
            "A" == i[0].tagName && ((i = i.parent().eq(0)).hasClass("selected") || (n(this).find("li").removeClass("selected"), i.addClass("selected"), n(this).slideUp("fast"), n(this).parent().find(".select-text").text(a), n(this).parent().find(".select-input").val(a), r.call(t), e.stopPropagation(), e.cancelBubble = !0))
        })
    }, n.fn.selectValue = function (e) {
        var t = n('li[data-value="' + e + '"]'), r = t.text();
        n(this).find("li").removeClass("selected"), t.addClass("selected"), n(this).parent().find(".select-text").text(r), n(this).parent().find(".select-input").val(e)
    }
}), define("newweb/common/service", ["./utils", "./md5", "./jquery-1.7"],
    function (e, t) {
    var n = e("./jquery-1.7");
    e("./utils");
    e("./md5");
    var r = function (e) {
        var t = n.md5(navigator.appVersion),
            r = "" + (new Date).getTime(), i = r + parseInt(10 * Math.random(), 10);
        return {
            ts: r,
            bv: t,
            salt: i,
            sign: n.md5("fanyideskweb" + e + i + "]BjuETDhU)zqSxf-=B#7m")}
    };
    t.recordUpdate = function (e) {
        var t = e.i, i = r(t);
        n.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "/bettertranslation",
            data: {
                i: e.i,
                client: "fanyideskweb",
                salt: i.salt,
                sign: i.sign,
                lts: i.ts,
                bv: i.bv,
                tgt: e.tgt,
                modifiedTgt: e.modifiedTgt,
                from: e.from,
                to: e.to
            },
            success: function (e) {
            },
            error: function (e) {
            }
        })
    }, t.recordMoreResultLog_get = function (e) {
        n.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "/ctlog",
            data: {i: e.i, action: "GET_MORE_TRANSLATION", from: e.from, to: e.to},
            success: function (e) {
            },
            error: function (e) {
            }
        })
    }, t.recordMoreResultLog_choose = function (e) {
        n.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "/ctlog",
            data: {
                i: e.i,
                tgt: e.tgt,
                systemName: e.systemName,
                pos: e.pos,
                action: "SELECT_OTHER_TRANSLATION",
                from: e.from,
                to: e.to
            },
            success: function (e) {
            },
            error: function (e) {
            }
        })
    }, t.generateSaltSign = r
}), define("newweb/common/smartResult", ["./TranslateState", "./log"], function (e, t) {
    var n = e("./jquery-1.7"), r = n(".input__target__dict"), i = n(".dict__relative"), a = e("./TranslateState"),
        o = e("./log"), s = {
            getLink: function (e, t) {
                var n = window.encodeURIComponent(t), r = a.state.type;
                return "zh-CHS2en" != r && "zh-CHS2ja" != r && "zh-CHS2ko" != r ? "javascript:;" : 1 == e ? "http://dict.有道翻译_未完成.com/search?q=" + n + "&keyfrom=fanyi.smartResult" : "javascript:;"
            }
        };
    n(".dict__relative").delegate("a", "click", function () {
        o.clog("RESULT_DICT_ITEM_CLICK")
    }), t.render = function (e, t) {
        var a = t.entries, o = !1;
        if (i.html(""), n(".dict__word--phonetic").html(""), t && a.length > 0) {
            r.find(".dict__word--letters").text(e);
            for (var l = 0; l < a.length; l++) if ("" != a[l]) {
                o = !0;
                var c = s.getLink(1, a[l]), u = "";
                "javascript:;" == c ? (u = "no-link", i.append('<span class="' + u + '">' + a[l].replace(/\r\n/, "") + "</span>")) : i.append('<a target="_blank" href="' + c + '">' + a[l].replace(/\r\n/, "") + "</a>")
            }
            o ? r.show() : r.hide();
            var d = "http://dict.有道翻译_未完成.com/search?q=" + e + "&keyfrom=new-fanyi.smartResult";
            n(".dict__more").attr("href", d), n(".dict__more").show()
        } else r.hide()
    }, t.hide = function () {
        r.hide()
    }
}), define("newweb/common/star", ["./TranslateState"], function (e, t) {
    function n(e) {
        for (var t = 0; t < e; t++) a("#targetStarTip .star-con span").eq(t).addClass("add-star")
    }

    function r(e) {
        !function (e) {
            a.ajax({
                type: "POST",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                url: "/score",
                data: e,
                dataType: "json"
            })
        }({
            src: i.state.originalText, tgt: function (e) {
                return a.trim(e).replace(/\r\n/g, "\n").replace(/\n/g, "\\n")
            }(a("#transTarget").text()), score: e, isSmartResult: !1, transType: function () {
                if ("AUTO" == i.state.type) return "AUTO";
                var e = i.state.type;
                return (e = e.split("2"))[0] + "-" + e[1]
            }()
        })
    }

    var i = e("./TranslateState"), a = e("./jquery-1.7"), o = a("#targetStarTip"), s = "", l = !1;
    a("#targetStar").hover(function () {
        s && (clearTimeout(s), s = ""), o.css("display", "block")
    }, function () {
        s = setTimeout(function () {
            o.hide()
        }, 500)
    }), o.hover(function (e) {
        return s && (clearTimeout(s), s = ""), o.show(), e.stopPropagation(), !1
    }, function (e) {
        return o.hide(), e.stopPropagation(), !1
    }), a("#targetStarTip .star-con span").hover(function () {
        l || n(a(this).index() + 1)
    }, function () {
        l || (a(this).removeClass("add-star"), a(this).siblings().removeClass("add-star"))
    }), a("#targetStarTip .star-con span").on("click", function () {
        var e = a(this).index() + 1;
        l || (n(e), r(e), l = !0)
    }), t.reset = function () {
        l = !1, a("#targetStarTip .star-con span").removeClass("add-star")
    }
}), define("newweb/common/textAuto", [], function (e, t) {
    var n = e("./jquery-1.7");
    t.resizeTextarea = function (e) {
        var t = e.value.length, r = e.offsetWidth;
        if (n(e).data("lastHeight", e.style.height), t !== e.valLength || r !== e.boxWidth) {
            (t < e.valLength || r !== e.boxWidth) && (e.style.height = "0");
            var i = Math.max(40, e.scrollHeight);
            e.style.overflow = "hidden", e.style.height = i + "px", e.valLength = t, e.boxWidth = r
        }
        return !0
    }
}), define("newweb/common/translate", ["./utils", "./voice", "./TranslateState", "./log", "./service", "./md5", "./jquery-1.7", "./smartResult", "./requestMoreTrans", "./constData"], function (e, t) {
    function n() {
        f("#transTarget").css("height", "auto");
        var e = f("#inputOriginal").height(), t = f("#transTarget").height(), n = Math.max(e, t);
        f("#inputOriginal").css("height", n), f("#transTarget").css("height", n)
    }

    function r(e) {
        for (var t = e.translateResult, n = [], r = 0, i = q(L.state.type), a = 0; a < t.length; a++) {
            var o = t[a], s = [];
            r += o.length;
            for (var l = 0; l < o.length; l++) {
                var c = o[l].tgt, u = o[l].src;
                1 == o.length && "" === c && "" === u && (c = '<br class="fanyi-br-empty-format">'), c = '<span data-section="' + a + '" data-sentence="' + l + '">' + c + "</span>", l != o.length - 1 && (c += i), s.push(c)
            }
            n.push('<p data-section="' + a + '">' + s.join("") + "</p>")
        }
        b.clog("&sentence_number=" + r + "&type=" + L.state.type);
        var d = n.join("");
        T.html(d), L.state.originalTgt = T.text(), L.state.smallFont ? T.addClass("input__target__text--small") : T.removeClass("input__target__text--small")
    }

    function i(e) {
        var t = function () {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }(), n = document.createElement("p");
        n.innerText = e, n.id = t, T.html(""), f(".fanyi-error-message").html(n), setTimeout(function () {
            var e = document.getElementById(t);
            e && f(e).remove()
        }, 5e3)
    }

    function a(e) {
        var t = {
            "中文": "zh-CHS",
            "英语": "en",
            "韩语": "ko",
            "日语": "ja",
            "法语": "fr",
            "俄语": "ru",
            "西班牙语": "es",
            "葡萄牙语": "pt",
            "印地语": "hi",
            "阿拉伯语": "ar",
            "丹麦语": "da",
            "德语": "de",
            "希腊语": "el",
            "芬兰语": "fi",
            "意大利语": "it",
            "马来语": "ms",
            "越南语": "vi",
            "印尼语": "id",
            "荷兰语": "nl"
        };
        return t[e] ? t[e] : "auto"
    }

    function o(e) {
        function t(e) {
            var t = f("#langSelect span.select-text").text().indexOf("检测到") > -1,
                n = f.trim(f("#langSelect span.select-text").text()).replace("检测到：", "").replace(/\s+/g, "");
            if (n.indexOf("»") < 0) {
                if ("from" === e) return "auto";
                if ("to" === e) return "auto"
            }
            return n = n.split("»"), "from" === e ? t ? "auto" : a(n[0]) : "to" === e ? t ? "auto" : a(n[1]) : void 0
        }

        var n = f.trim(w.val());
        n = n.replace(/\n/g, "").replace(/\r\n/g, "");
        var r = document.createElement("a"),
            i = F + "?url=" + encodeURIComponent(n) + "&from=" + t("from") + "&to=" + t("to") + "&type=1";
        r.setAttribute("href", i), r.className = "transWebsite", r.setAttribute("target", "_blank"), r.appendChild(document.createTextNode(n)), T.html(r), "TURN_NEW_PAGE" === e && (window.location.href = i)
    }

    function s(e) {
        if (0 == f('li[data-value="' + e + '"]').length) f("#langSelect").selectValue("AUTO"); else {
            f("#langSelect").selectValue(e);
            var t = f(".select-text").text();
            L.state.isSelectLan || f(".select-text").text("检测到：" + t)
        }
    }

    function l(e) {
        f(".fanyi-error-message").html(""), e && 0 == e.errorCode ? (L.state = f.extend(L.state, e), s(L.state.type), r(e), e.smartResult && e.translateResult.length > 0 && e.translateResult[0].length > 0 ? (b.clog("RESULT_DICT_SHOW"), y.render(e.translateResult[0][0].src, e.smartResult)) : y.hide(), h.showVoice(L.state.type)) : e && e.errorCode > 0 ? (y.hide(), f("#langSelect").selectValue("AUTO"), i(O.errorMsg[e.errorCode])) : T.html(""), M()
    }

    function c(e, t) {
        if (L.state.originalText = e.i, "first" == e.action) return l(global.translatedJson), void t();
        m && (m.abort(), m = null), m = f.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "translate_o?smartresult=dict&smartresult=rule",
            data: e,
            dataType: "json",
            success: function (e) {
                l(e), t && t()
            },
            error: function (e) {
            }
        })
    }

    function u(e, t) {
        "zh-CHS2en" != L.state.type && "en2zh-CHS" != L.state.type || (f(e).hasClass("show-suggest") ? d() : (f(e).addClass("show-suggest"), A.hide(), x.asyRequest({
            i: t.i,
            client: E,
            tgt: t.tgt,
            from: t.from,
            to: t.to,
            success: function (t) {
                var n = e.position().top, r = e.position().left, i = e.height();
                f("#transTarget .will-update").removeClass("will-update");
                var a = t.translateResult, o = [];
                b.clog("&mul_result_number=" + a.length + "&type=" + L.state.type);
                for (var s = 0; s < a.length; s++) {
                    var l = a[s].tgt, c = a[s].systemName;
                    o.push('<li systemName="' + c + '">' + l + "</li>")
                }
                A.find("ul").html(o.join("")), A.css("top", n + i + 10), A.css("left", r), e.addClass("will-update"), A.show()
            },
            error: function () {
                A.hide()
            }
        })))
    }

    function d() {
        f(".show-suggest").removeClass("show-suggest"), A.hide()
    }

    var f = e("./jquery-1.7"), p = e("./utils"), h = e("./voice"), m = null, g = !1, v = e("./service"),
        y = e("./smartResult");
    e("./jquery.selectRange"), e("./md5");
    var b = e("./log"), x = e("./requestMoreTrans"), w = f("#inputOriginal"), T = f("#transTarget"),
        _ = f(".fonts__over"), k = f("#language").val(), C = "AUTO", S = "AUTO", E = "fanyideskweb", j = "", N = "",
        A = f("#fanyiSuggest"), D = navigator.userAgent.indexOf("Trident") > -1, O = e("./constData"),
        L = e("./TranslateState"), w = f("#inputOriginal"), F = "http://webtrans.yodao.com/webTransPc/index.html#/",
        q = function (e) {
            if ("string" == typeof e) {
                var t = e.split("2");
                if (2 === t.length) {
                    var n = t[1];
                    if ("en" === n || "fr" === n || "es" === n || "pt" === n || "vi" === n || "de" === n || "ru" === n || "id" === n || "ar" === n || "it" === n || "nl" === n) return " "
                }
            }
            return ""
        }, M = function () {
            var e = L.state.getFromTo();
            C = e[0], S = e[1]
        };
    !function () {
        function e() {
            for (var e = w.val().split(/[\r\n]/g), t = L.state.translateResult, n = 0, r = t.length; n < r; n++) {
                var i = t[n].length - 1, a = e[n].lastIndexOf(t[n][i].src), o = e[n].substring(a).replace(/\r\n/g, "");
                t[n][i].src = o
            }
            return t
        }

        function t(t, n) {
            for (var r = 0, i = e(), a = 0; a <= t; a++) {
                var o = i[a].length;
                a == t && (o = n);
                for (var s = 0; s < o; s++) r += i[a][s].src.length
            }
            return r + parseInt(t, 10)
        }

        function r(e) {
            var t = e.position().top, n = e.position().left, r = e.width();
            "zh-CHS2en" != L.state.type && "en2zh-CHS" != L.state.type || (f(".fanyi__update__tip").css({
                top: t - f(".fanyi__update__tip").height() - 5,
                left: 10 + n + r / 2
            }), i(), j = setTimeout(function () {
                f(".fanyi__update__tip").fadeIn()
            }, 500))
        }

        function i() {
            j && (clearTimeout(j), j = "", f(".fanyi__update__tip").stop(!0, !0)), f(".fanyi__update__tip").hide()
        }

        function a() {
            N && (clearInterval(N), N = "")
        }

        function o() {
            a(), N = setInterval(function () {
                null == p.getSelectionText() && (a(), g = !1)
            }, 100)
        }

        T.delegate("span", "mouseover", function () {
            if (!g) {
                var e = f(this), n = e.attr("data-section"), i = e.attr("data-sentence"),
                    a = L.state.translateResult[n][i].src, o = t(n, i),
                    s = (o = Math.max(o, w.val().indexOf(a))) + a.length;
                D || w.selectRange({
                    start: o,
                    end: s
                }), r(e), f("#transTarget span.hover").removeClass("hover"), e.addClass("hover"), b.clog("MATCHING_HOVER&type=" + L.state.type)
            }
        }), T.delegate("span", "click", function () {
            if (!g) {
                var e = f(this), n = e.attr("data-section"), r = e.attr("data-sentence"),
                    i = L.state.translateResult[n][r].src, a = L.state.translateResult[n][r].tgt, o = t(n, r),
                    s = (o = Math.max(o, w.val().indexOf(i))) + i.length;
                D || w.selectRange({start: o, end: s}), b.clog("MUL_RESULT_CLICK&type=" + L.state.type);
                var l = L.state.getDetectedFromTo()[0], c = L.state.getDetectedFromTo()[1];
                u(e, {i: i, tgt: a, from: l, to: c}), v.recordMoreResultLog_get({
                    i: i,
                    from: l,
                    to: c
                }), L.state.updateEle = e
            }
        }), f("#fanyiSuggest").delegate("li", "click", function () {
            var e = L.state.updateEle, t = f(this).text(), r = f(this).attr("systemName"), i = f(this).index();
            L.state.isUpdate = !0, e.text(t), n(), e.addClass("updated");
            var a = L.state.updateEle, o = a.attr("data-section"), s = a.attr("data-sentence"),
                l = L.state.translateResult[o][s].src, c = L.state.translateResult[o][s].tgt,
                u = L.state.getDetectedFromTo()[0], d = L.state.getDetectedFromTo()[1];
            v.recordMoreResultLog_choose({i: l, tgt: c, systemName: r, pos: i, from: u, to: d})
        }), f("body").on("click", function (e) {
            var t = f(e.target);
            0 != t.parents("#transTarget").length && "SPAN" == t[0].tagName || (f("#transTarget .will-update").removeClass("will-update"), d())
        }), f(".suggest__title--close").on("click", function () {
            d()
        }), T.delegate("span", "mouseout", function () {
            g || (f("#transTarget span.hover").removeClass("hover"), D || w.selectRange({start: 0, end: 0}), i())
        }), f(".input__target").on("mousedown", function (e) {
            a(), g = !0, f("#transTarget span.hover").removeClass("hover"), i()
        }), f(".input__target").on("mouseup", function (e) {
            null == p.getSelectionText() && (g = !1), o()
        }), f(".suggest__update__btn").on("click", function () {
            b.clog("RESULT_SINGEL_MODIFY_CLICK"), f("#updateResult").trigger("click", [!0])
        })
    }(), t.translate = function (e, t) {
        k = f("#language").val();
        var n = w.val(), r = v.generateSaltSign(n), i = n.length;
        if (M(), _.text(i), i > 5e3) {
            var a = n;
            n = a.substr(0, 5e3), r = v.generateSaltSign(n);
            var s = a.substr(5e3);
            s = (s = s.trim()).substr(0, 3), f("#inputTargetError").text("有道翻译字数限制为5000字，“" + s + "”及其后面没有被翻译!").show(), _.addClass("fonts__overed")
        } else _.removeClass("fonts__overed"), f("#inputTargetError").hide();
        p.isWeb(n) ? o() : c({
            i: n,
            from: C,
            to: S,
            smartresult: "dict",
            client: E,
            salt: r.salt,
            sign: r.sign,
            lts: r.ts,
            bv: r.bv,
            doctype: "json",
            version: "2.1",
            keyfrom: "fanyi.web",
            action: e || "FY_BY_DEFAULT"
        }, t)
    }, t.translateWeb = o, t.showResult = l
}), define("newweb/common/updateResult", ["./service", "./utils", "./md5", "./jquery-1.7", "./TranslateState", "./log"], function (e, t) {
    var n = e("./jquery-1.7"), r = n("#updateResult"), i = n("#transTarget"), a = n("#transTargetArea"),
        o = n(".download__area"), s = "", l = e("./service"), c = e("./TranslateState"), u = e("./log"), d = "", f = "",
        p = function () {
            for (var e = i.find("p"), t = "", n = 0; n < e.length; n++) t += e.eq(n).text() + "\r\n";
            return t
        }, h = function () {
            var e = n("#language").val(), t = "AUTO";
            -1 != e.indexOf("2") ? (t = e.split("2"), d = t[0], f = t[1]) : (d = "AUTO", f = "AUTO")
        };
    t.init = function () {
        r.click(function (e, t) {
            s = p(), t || u.clog("RESULT_MODIFY_CLICK"), i.hasClass("input__target__text--small") ? a.addClass("input__target__text--small") : a.removeClass("input__target__text--small"), a.css({
                height: i.height(),
                width: i.width()
            }), o.hide(), i.hide(), n(".input__target__bar").css("visibility", "hidden"), a.show(), a.focus(), a.val(s), n(".input__update__suggest").show(), n(".input__target__update").show()
        }), n(".update__cancel").on("click", function () {
            u.clog("MODIFY_CANCEL"), a.hide(), n(".input__update__suggest").hide(), n(".input__target__update").hide(), o.show(), i.show(), n(".input__target__bar").css("visibility", "visible")
        }), n(".update__sure").on("click", function () {
            if (!n(this).hasClass("update-disable")) {
                u.clog("MODIFY_SURE"), n(this).addClass("update-disable"), a.hide(), n(".input__update__suggest").hide(), n(".input__target__update").hide();
                var e = n("<p></p>").text(a.val());
                i.html("").append(e), i.addClass("input__target__text--updated"), o.show(), i.show(), n(".input__target__bar").css("visibility", "visible"), h(), "" !== a.val() && l.recordUpdate({
                    i: c.state.originalText,
                    tgt: c.state.originalTgt,
                    modifiedTgt: a.val(),
                    from: d,
                    to: f
                })
            }
        }), a.on("input", function () {
            "" != n(this).val() ? n(".update__sure").removeClass("update-disable") : n(".update__sure").addClass("update-disable")
        })
    }
}), define("newweb/common/utils", [], function (e) {
    var t = e("./jquery-1.7");
    return {
        utf8_decode: function (e) {
            return unescape(encodeURIComponent(e))
        }, isWeb: function (e) {
            if (!e) return !1;
            if (e.search(/[\s\xa0@]/) > -1) return !1;
            var t = (e = function (e) {
                if (!e) return "";
                var t = (e = (e = e.split("#")[0].split("?")[0]).toLowerCase()).indexOf("://") > -1 ? e.substring(e.indexOf("://") + 3) : e;
                return e = e.substring(0, e.indexOf("://")), t = t.split("/")[0].split(":")[0], e ? e + "://" + t : t
            }(e)).split("."), n = t[t.length - 1];
            if (/^http:\/\/.+/.test(e)) return !0;
            var r = {};
            return {
                ascii_tlds: "aarp abarth abb abbott abbvie abc able abogado abudhabi ac academy accenture accountant accountants aco actor ad adac ads adult ae aeg aero aetna af afamilycompany afl africa ag agakhan agency ai aig aigo airbus airforce airtel akdn al alfaromeo alibaba alipay allfinanz allstate ally alsace alstom am americanexpress americanfamily amex amfam amica amsterdam analytics android anquan anz ao aol apartments app apple aq aquarelle ar arab aramco archi army arpa art arte as asda asia associates at athleta attorney au auction audi audible audio auspost author auto autos avianca aw aws ax axa az azure ba baby baidu banamex bananarepublic band bank bar barcelona barclaycard barclays barefoot bargains baseball basketball bauhaus bayern bb bbc bbt bbva bcg bcn bd be beats beauty beer bentley berlin best bestbuy bet bf bg bh bharti bi bible bid bike bing bingo bio biz bj black blackfriday blockbuster blog bloomberg blue bm bms bmw bn bnpparibas bo boats boehringer bofa bom bond boo book booking bosch bostik boston bot boutique box br bradesco bridgestone broadway broker brother brussels bs bt budapest bugatti build builders business buy buzz bv bw by bz bzh ca cab cafe cal call calvinklein cam camera camp cancerresearch canon capetown capital capitalone car caravan cards care career careers cars casa case caseih cash casino cat catering catholic cba cbn cbre cbs cc cd ceb center ceo cern cf cfa cfd cg ch chanel channel charity chase chat cheap chintai christmas chrome church ci cipriani circle cisco citadel citi citic city cityeats ck cl claims cleaning click clinic clinique clothing cloud club clubmed cm cn co coach codes coffee college cologne com comcast commbank community company compare computer comsec condos construction consulting contact contractors cooking cookingchannel cool coop corsica country coupon coupons courses cpa cr credit creditcard creditunion cricket crown crs cruise cruises csc cu cuisinella cv cw cx cy cymru cyou cz dabur dad dance data date dating datsun day dclk dds de deal dealer deals degree delivery dell deloitte delta democrat dental dentist desi design dev dhl diamonds diet digital direct directory discount discover dish diy dj dk dm dnp do docs doctor dog domains dot download drive dtv dubai duck dunlop dupont durban dvag dvr dz earth eat ec eco edeka edu education ee eg email emerck energy engineer engineering enterprises epson equipment er ericsson erni es esq estate esurance et etisalat eu eurovision eus events exchange expert exposed express extraspace fage fail fairwinds faith family fan fans farm farmers fashion fast fedex feedback ferrari ferrero fi fiat fidelity fido film final finance financial fire firestone firmdale fish fishing fit fitness fj fk flickr flights flir florist flowers fly fm fo foo food foodnetwork football ford forex forsale forum foundation fox fr free fresenius frl frogans frontdoor frontier ftr fujitsu fujixerox fun fund furniture futbol fyi ga gal gallery gallo gallup game games gap garden gay gb gbiz gd gdn ge gea gent genting george gf gg ggee gh gi gift gifts gives giving gl glade glass gle global globo gm gmail gmbh gmo gmx gn godaddy gold goldpoint golf goo goodyear goog google gop got gov gp gq gr grainger graphics gratis green gripe grocery group gs gt gu guardian gucci guge guide guitars guru gw gy hair hamburg hangout haus hbo hdfc hdfcbank health healthcare help helsinki here hermes hgtv hiphop hisamitsu hitachi hiv hk hkt hm hn hockey holdings holiday homedepot homegoods homes homesense honda horse hospital host hosting hot hoteles hotels hotmail house how hr hsbc ht hu hughes hyatt hyundai ibm icbc ice icu id ie ieee ifm ikano il im imamat imdb immo immobilien in inc industries infiniti info ing ink institute insurance insure int intel international intuit investments io ipiranga iq ir irish is ismaili ist istanbul it itau itv iveco jaguar java jcb jcp je jeep jetzt jewelry jio jll jm jmp jnj jo jobs joburg jot joy jp jpmorgan jprs juegos juniper kaufen kddi ke kerryhotels kerrylogistics kerryproperties kfh kg kh ki kia kim kinder kindle kitchen kiwi km kn koeln komatsu kosher kp kpmg kpn kr krd kred kuokgroup kw ky kyoto kz la lacaixa lamborghini lamer lancaster lancia land landrover lanxess lasalle lat latino latrobe law lawyer lb lc lds lease leclerc lefrak legal lego lexus lgbt li lidl life lifeinsurance lifestyle lighting like lilly limited limo lincoln linde link lipsy live living lixil lk llc llp loan loans locker locus loft lol london lotte lotto love lpl lplfinancial lr ls lt ltd ltda lu lundbeck lupin luxe luxury lv ly ma macys madrid maif maison makeup man management mango map market marketing markets marriott marshalls maserati mattel mba mc mckinsey md me med media meet melbourne meme memorial men menu merckmsd metlife mg mh miami microsoft mil mini mint mit mitsubishi mk ml mlb mls mm mma mn mo mobi mobile moda moe moi mom monash money monster mormon mortgage moscow moto motorcycles mov movie mp mq mr ms msd mt mtn mtr mu museum mutual mv mw mx my mz na nab nadex nagoya name nationwide natura navy nba nc ne nec net netbank netflix network neustar new newholland news next nextdirect nexus nf nfl ng ngo nhk ni nico nike nikon ninja nissan nissay nl no nokia northwesternmutual norton now nowruz nowtv np nr nra nrw ntt nu nyc nz obi observer off office okinawa olayan olayangroup oldnavy ollo om omega one ong onl online onyourside ooo open oracle orange org organic origins osaka otsuka ott ovh pa page panasonic paris pars partners parts party passagens pay pccw pe pet pf pfizer pg ph pharmacy phd philips phone photo photography photos physio pics pictet pictures pid pin ping pink pioneer pizza pk pl place play playstation plumbing plus pm pn pnc pohl poker politie porn post pr pramerica praxi press prime pro prod productions prof progressive promo properties property protection pru prudential ps pt pub pw pwc py qa qpon quebec quest qvc racing radio raid re read realestate realtor realty recipes red redstone redumbrella rehab reise reisen reit reliance ren rent rentals repair report republican rest restaurant review reviews rexroth rich richardli ricoh rightathome ril rio rip rmit ro rocher rocks rodeo rogers room rs rsvp ru rugby ruhr run rw rwe ryukyu sa saarland safe safety sakura sale salon samsclub samsung sandvik sandvikcoromant sanofi sap sarl sas save saxo sb sbi sbs sc sca scb schaeffler schmidt scholarships school schule schwarz science scjohnson scor scot sd se search seat secure security seek select sener services ses seven sew sex sexy sfr sg sh shangrila sharp shaw shell shia shiksha shoes shop shopping shouji show showtime shriram si silk sina singles site sj sk ski skin sky skype sl sling sm smart smile sn sncf so soccer social softbank software sohu solar solutions song sony soy space sport spot spreadbetting sr srl ss st stada staples star statebank statefarm stc stcgroup stockholm storage store stream studio study style su sucks supplies supply support surf surgery suzuki sv swatch swiftcover swiss sx sy sydney symantec systems sz tab taipei talk taobao target tatamotors tatar tattoo tax taxi tc tci td tdk team tech technology tel temasek tennis teva tf tg th thd theater theatre tiaa tickets tienda tiffany tips tires tirol tj tjmaxx tjx tk tkmaxx tl tm tmall tn to today tokyo tools top toray toshiba total tours town toyota toys tr trade trading training travel travelchannel travelers travelersinsurance trust trv tt tube tui tunes tushu tv tvs tw tz ua ubank ubs ug uk unicom university uno uol ups us uy uz va vacations vana vanguard vc ve vegas ventures verisign versicherung vet vg vi viajes video vig viking villas vin vip virgin visa vision vistaprint viva vivo vlaanderen vn vodka volkswagen volvo vote voting voto voyage vu vuelos wales walmart walter wang wanggou watch watches weather weatherchannel webcam weber website wed wedding weibo weir wf whoswho wien wiki williamhill win windows wine winners wme wolterskluwer woodside work works world wow ws wtc wtf xbox xerox xfinity xihuan xin xn--11b4c3d xn--1ck2e1b xn--1qqw23a xn--2scrj9c xn--30rr7y xn--3bst00m xn--3ds443g xn--3e0b707e xn--3hcrj9c xn--3oq18vl8pn36a xn--3pxu8k xn--42c2d9a xn--45br5cyl xn--45brj9c xn--45q11c xn--4gbrim xn--54b7fta0cc xn--55qw42g xn--55qx5d xn--5su34j936bgsg xn--5tzm5g xn--6frz82g xn--6qq986b3xl xn--80adxhks xn--80ao21a xn--80aqecdr1a xn--80asehdb xn--80aswg xn--8y0a063a xn--90a3ac xn--90ae xn--90ais xn--9dbq2a xn--9et52u xn--9krt00a xn--b4w605ferd xn--bck1b9a5dre4c xn--c1avg xn--c2br7g xn--cck2b3b xn--cg4bki xn--clchc0ea0b2g2a9gcd xn--czr694b xn--czrs0t xn--czru2d xn--d1acj3b xn--d1alf xn--e1a4c xn--eckvdtc9d xn--efvy88h xn--estv75g xn--fct429k xn--fhbei xn--fiq228c5hs xn--fiq64b xn--fiqs8s xn--fiqz9s xn--fjq720a xn--flw351e xn--fpcrj9c3d xn--fzc2c9e2c xn--fzys8d69uvgm xn--g2xx48c xn--gckr3f0f xn--gecrj9c xn--gk3at1e xn--h2breg3eve xn--h2brj9c xn--h2brj9c8c xn--hxt814e xn--i1b6b1a6a2e xn--imr513n xn--io0a7i xn--j1aef xn--j1amh xn--j6w193g xn--jlq61u9w7b xn--jvr189m xn--kcrx77d1x4a xn--kprw13d xn--kpry57d xn--kpu716f xn--kput3i xn--l1acc xn--lgbbat1ad8j xn--mgb9awbf xn--mgba3a3ejt xn--mgba3a4f16a xn--mgba7c0bbn0a xn--mgbaakc7dvf xn--mgbaam7a8h xn--mgbab2bd xn--mgbah1a3hjkrd xn--mgbai9azgqp6j xn--mgbayh7gpa xn--mgbbh1a xn--mgbbh1a71e xn--mgbc0a9azcg xn--mgbca7dzdo xn--mgbcpq6gpa1a xn--mgberp4a5d4ar xn--mgbgu82a xn--mgbi4ecexp xn--mgbpl2fh xn--mgbt3dhd xn--mgbtx2b xn--mgbx4cd0ab xn--mix891f xn--mk1bu44c xn--mxtq1m xn--ngbc5azd xn--ngbe9e0a xn--ngbrx xn--node xn--nqv7f xn--nqv7fs00ema xn--nyqy26a xn--o3cw4h xn--ogbpf8fl xn--otu796d xn--p1acf xn--p1ai xn--pbt977c xn--pgbs0dh xn--pssy2u xn--q7ce6a xn--q9jyb4c xn--qcka1pmc xn--qxa6a xn--qxam xn--rhqv96g xn--rovu88b xn--rvc1e0am3e xn--s9brj9c xn--ses554g xn--t60b56a xn--tckwe xn--tiq49xqyj xn--unup4y xn--vermgensberater-ctb xn--vermgensberatung-pwb xn--vhquv xn--vuq861b xn--w4r85el8fhu5dnra xn--w4rs40l xn--wgbh1c xn--wgbl6a xn--xhq521b xn--xkc2al3hye2a xn--xkc2dl3a5ee0h xn--y9a3aq xn--yfro4i67o xn--ygbi2ammx xn--zfr164b xxx xyz yachts yahoo yamaxun yandex ye yodobashi yoga yokohama you youtube yt yun za zappos zara zero zip zm zone zuerich zw".split(" "),
                unicode_tlds: "कॉम セール 佛山 ಭಾರತ 慈善 集团 在线 한국 ଭାରତ 大众汽车 点看 คอม ভাৰত ভারত 八卦 موقع বাংলা 公益 公司 香格里拉 网站 移动 我爱你 москва қаз католик онлайн сайт 联通 срб бг бел קום 时尚 微博 淡马锡 ファッション орг नेट ストア 삼성 சிங்கப்பூர் 商标 商店 商城 дети мкд ею ポイント 新闻 工行 家電 كوم 中文网 中信 中国 中國 娱乐 谷歌 భారత్ ලංකා 電訊盈科 购物 クラウド ભારત 通販 भारतम् भारत भारोत 网店 संगठन 餐厅 网络 ком укр 香港 诺基亚 食品 飞利浦 台湾 台灣 手表 手机 мон الجزائر عمان ارامكو ایران العليان اتصالات امارات بازار موريتانيا پاکستان الاردن بارت بھارت المغرب ابوظبي البحرين السعودية ڀارت كاثوليك سودان همراه عراق مليسيا 澳門 닷컴 政府 شبكة بيتك عرب გე 机构 组织机构 健康 ไทย سورية 招聘 рус рф 珠宝 تونس 大拿 ລາວ みんな グーグル ευ ελ 世界 書籍 ഭാരതം ਭਾਰਤ 网址 닷넷 コム 天主教 游戏 vermögensberater vermögensberatung 企业 信息 嘉里大酒店 嘉里 مصر قطر 广东 இலங்கை இந்தியா հայ 新加坡 فلسطين 政务".split(" ")
            }.ascii_tlds.forEach(function (e) {
                r[e.toLowerCase()] = 1
            }), !(!r[n] || t.length < 2) && /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/gi.test(e.toLocaleString())
        }, addToFav: function () {
            t.browser.msie ? window.external.addFavorite("http://fanyi.有道翻译_未完成.com/?keyfrom=favorite", "有道翻译_未完成 - 免费在线翻译") : alert("请使用Ctrl + D 手动加入收藏")
        }, cookie: function (e, t, n) {
            if (void 0 === t) return function (e) {
                var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
                return t ? decodeURIComponent(t[2]) : null
            }(e);
            !function (e, t, n) {
                n = n || 30;
                var r = new Date;
                r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), document.cookie = e + "=" + encodeURIComponent(t) + ";expires=" + r.toGMTString()
            }(e, t, n)
        }, timerProxy: function () {
            var e = function () {
                window.timerProxyTimeout && window.clearTimeout(window.timerProxyTimeout)
            };
            return function n(r, i) {
                this.timerProxy.clearProxy = n.clearProxy = e, e(), window.timerProxyTimeout = window.setTimeout(function () {
                    t.isFunction(r) && r()
                }, i)
            }
        }(), enEight: function (e) {
            var t, n = new Array;
            for (t = 0; t < e.length; t++) n += "\\" + e.charCodeAt(t).toString(8);
            return e = n
        }, deEight: function (e) {
            var t, n = new Array, r = e.split("\\");
            if (1 == r.length) return r[0];
            for (t = 1; t < r.length; t++) n += String.fromCharCode(parseInt(r[t], 8));
            return e = n
        }, getSelectionText: function () {
            var e = null;
            return window.getSelection && (e = window.getSelection().toString()), e || (document.selection ? "" == (e = document.selection.createRange().text) ? null : e : null)
        }, isSelectInTarget: function (e, t) {
            return !1
        }, storage: function (e, t) {
            return window.localStorage ? function (e, t) {
                var n = window.localStorage;
                return void 0 === t ? n.getItem(e) : void 0 !== e && void 0 !== t ? (n.setItem(e, t), t) : void 0
            }(e, t) : document.documentElement.addBehavior ? function (e, t) {
                var n = document.documentElement;
                return n.addBehavior("#default#userData"), void 0 === t ? (n.load("fanyiweb2"), n.getAttribute(e)) : void 0 !== e && void 0 !== t ? (n.setAttribute(e, t), n.save("fanyiweb2"), t) : void 0
            }(e, t) : void 0
        }, blink: function (e, t) {
            var n = "", r = 0, i = t.property, a = t.original, o = t.value, s = {};
            s[i] = o;
            var l = {};
            l[i] = a, n = setInterval(function () {
                ++r > t.count ? clearInterval(n) : e.animate(s, 20, "linear", function () {
                    e.animate(l, 20, "linear")
                })
            }, 50)
        }, throttle: function (e, t, n, r) {
            function i() {
                o && clearTimeout(o)
            }

            function a() {
                function a() {
                    l = Date.now(), n.apply(c, d)
                }

                var c = this, u = Date.now() - l, d = arguments;
                s || (r && !o && a(), i(), void 0 === r && u > e ? a() : !0 !== t && (o = setTimeout(r ? function () {
                    o = void 0
                } : a, void 0 === r ? e - u : e)))
            }

            var o, s = !1, l = 0;
            return "boolean" != typeof t && (r = n, n = t, t = void 0), a.cancel = function () {
                i(), s = !0
            }, a
        }, addEvent: function (e, t, n) {
            t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n
        }
    }
}), define("newweb/common/voice", ["./TranslateState", "./log"], function (e, t) {
    var n = e("./jquery-1.7"), r = e("./TranslateState"), i = e("./log"), a = n("#transTarget"),
        o = n("#inputOriginal"), s = n("#targetSpeaker"),
        l = (n("#originalSpeaker"), !!document.createElement("audio").canPlayType), c = n("#playVoice")[0],
        u = function (e) {
            return -1 != navigator.appName.indexOf("Microsoft") ? window[e] : document[e]
        }, d = function () {
            n("#targetSpeaker").click(function () {
                if (!n(this).hasClass("speaker-disable")) {
                    var e = r.state.type, t = a.text();
                    return i.clog("RESULT_PRONOUNCE_CLICK"), m(h(t, f[e], "speaker-target")), n(this).blur(), !1
                }
            }), n("#originalSpeaker").click(function () {
                if (!n(this).hasClass("speaker-disable")) {
                    var e = r.state.type, t = o.val();
                    return m(h(t, p[e], "speaker-original")), n(this).blur(), !1
                }
            })
        }, f = {"zh-CHS2en": "eng", "zh-CHS2ja": "jap", "zh-CHS2ko": "ko", "zh-CHS2fr": "fr"},
        p = {"en2zh-CHS": "eng", "ja2zh-CHS": "jap", "ko2zh-CHS": "ko", "fr2zh-CHS": "fr"}, h = function (e, t, n) {
            var n = n || "fanyi.newweb.index";
            return "http://tts.有道翻译_未完成.com/fanyivoice?word=" + encodeURIComponent(e) + "&le=" + t + "&keyfrom=" + n
        }, m = function (e) {
            l && "" != c.canPlayType("audio/mpeg") && e ? (c.src = e, c.load(), c.play()) : e && u("fanyivoice") && !0 === jsReady && u("fanyivoice").playVoice(e)
        }, g = function () {
            return a.text().length
        };
    t.stopVoice = function () {
        u("fanyivoice") && u("fanyivoice").stopVoice && u("fanyivoice").stopVoice()
    }, t.showVoice = function (e) {
        f[e] && g() <= 300 ? (s.removeClass("speaker-disable").show(), s.find(".tips__text--short").text("朗读")) : f[e] && g() > 300 ? (s.addClass("speaker-disable").show(), s.find(".tips__text--short").text("文本过长，朗读关闭")) : s.hide()
    }, t.init = function () {
        window.swfReady = !1, window.jsReady = !1, window.isContainerReady = function () {
            return jsReady
        }, window.setSWFIsReady = function () {
            swfReady = !0
        }, window.setJSReady = function () {
            jsReady = !0
        }, setTimeout(function () {
            setJSReady(), n('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="fanyivoice" width="0" height="0" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"><param name="movie" value="scripts/fanyivoice.swf?onload=swfLoad&time=' + (new Date).getTime() + '"/><param name="quality" value="high"/><param name="bgcolor" value="#869ca7"/><param name="allowScriptAccess" value="sameDomain"/><embed src="scripts/fanyivoice.swf?onload=swfLoad&time=' + (new Date).getTime() + '" quality="high" bgcolor="#869ca7" width="0" height="0" name="fanyivoice" align="middle" play="true" loop="false" quality="high" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>').appendTo("body"), d()
        }, 200)
    }
}), define("newweb/index", ["./common/log", "./common/account", "./common/hotLink", "./common/download", "./common/utils", "./common/voice", "./common/TranslateState", "./operations", "./langSelect", "./common/star", "./common/select", "./common/manTranslate", "./input", "./common/textAuto", "./common/translate", "./common/service", "./common/md5", "./common/jquery-1.7", "./common/smartResult", "./common/requestMoreTrans", "./common/constData", "./common/docTrans", "./common/form", "./common/copy", "./common/ZeroClipboard", "./common/updateResult", "./common/advertisement"], function (e) {
    e("./common/jquery-1.7")(function () {
        e("./common/log").init(), e("./common/account").init(), e("./common/hotLink").init(), e("./common/download").init(), e("./common/voice").init(), e("./common/TranslateState"), e("./operations").init(), e("./common/manTranslate").init(), e("./input"), e("./common/star"), e("./common/copy").init(), e("./common/updateResult").init(), e("./common/docTrans").init(), e("./common/advertisement")
    })
}), define("newweb/input", ["./common/textAuto", "./common/translate", "./common/utils", "./common/voice", "./common/TranslateState", "./common/log", "./common/service", "./common/md5", "./common/jquery-1.7", "./common/smartResult", "./common/requestMoreTrans", "./common/constData", "./common/star", "./common/docTrans", "./common/form", "./common/account", "./langSelect", "./common/select"], function (e, t) {
    function n() {
        var e = u.val(), t = 0, n = 0, r = !1, i = !0;
        return d.text(e), t = d.height(), n = d[0].scrollHeight, i = "" == e, r = n - 2 > t, [r, i]
    }

    function r() {
        l.browser.msie && "10.0" == l.browser.version && u.css("height", "auto"), l("#transTarget").css("height", "auto");
        var e = l("#inputOriginal").height(), t = l("#transTarget").height(), n = Math.max(e, t);
        if (l("#inputOriginal").css("height", n), l("#transTarget").css("height", n), l.browser.msie && "10.0" == l.browser.version) {
            var r = u.val();
            u.val(""), u.val(r)
        }
    }

    function i() {
        var e = l(".inside__products")[0].offsetTop, t = l(window).height();
        e + 100 >= t ? l(".download__area").addClass("download__area--rengong") : l(".download__area").removeClass("download__area--rengong")
    }

    function a() {
        l(".input__original__bar").css("visibility", "visible"), l(".input__target__bar").css("visibility", "visible")
    }

    function o() {
        l(".input__original__bar").css("visibility", "hidden"), l(".input__target__bar").css("visibility", "hidden")
    }

    function s(e) {
        var t = u, s = u.val(), d = n();
        u[0].scrollTop = 0, d[0] ? (t.addClass("input__small__font"), t.css({
            "font-size": "14px",
            "line-height": "18px"
        }), h.state.smallFont = !0) : (t.removeClass("input__small__font"), t.css({
            "font-size": "24px",
            "line-height": "30px"
        }), h.state.smallFont = !1), d[1] ? c.hide() : c.show(), "" != l.trim(s) ? (a(), f.resizeTextarea(u[0]), l("#transTarget").removeClass("input__target__text--updated"), p.translate(e, function () {
            r()
        }), y.reset(), b.hideDocTrans()) : (o(), m.showVoice("AUTO"), l("#transTarget").html(""), l("#transTarget").css("height", "auto"), u.css("height", "auto"), g.hide(), l("#langSelect").selectValue("AUTO"), l(".fanyi-error-message").html(""), l("#docUploadBg").is(":visible") || b.showDocTrans()), i()
    }

    var l = e("./common/jquery-1.7"), c = l("#inputDelete"), u = l("#inputOriginal"), d = l("#inputOriginalCopy"),
        f = e("./common/textAuto"), p = e("./common/translate"), h = e("./common/TranslateState"),
        m = e("./common/voice"), g = e("./common/smartResult"), v = e("./common/log"), y = e("./common/star"),
        b = e("./common/docTrans"), x = e("./common/utils"), w = "";
    u.on("keydown", function (e) {
        var t = u.val();
        13 === e.keyCode && x.isWeb(t.substring(0, t.length - 1)) && (e.preventDefault(), p.translateWeb("TURN_NEW_PAGE"))
    }), u.on("input propertychange", function (e, t) {
        w && (clearTimeout(w), w = ""), w = setTimeout(function () {
            t || __rl_event("newweb_translate_text"), s("FY_BY_REALTlME")
        }, 500)
    }), u.on("focus", function () {
        l(".input__original .fanyi__input__bg").addClass("fanyi__input__bg--focus")
    }), u.on("blur", function () {
        l(".input__original .fanyi__input__bg").removeClass("fanyi__input__bg--focus")
    }), l("#transTargetArea").on("focus", function () {
        l(".input__target .fanyi__input__bg").addClass("fanyi__input__bg--focus")
    }), l("#transTargetArea").on("blur", function () {
        l(".input__target .fanyi__input__bg").removeClass("fanyi__input__bg--focus")
    }), c.on("click", function () {
        u.val(""), u.trigger("input", [!0]), u.css({
            height: "auto",
            overflow: "auto"
        }), u[0].valLength = 0, l("#transTarget").html(""), l("#transTarget").css("height", "auto"), u.focus(), l("#inputTargetError").hide(), b.showDocTrans(), v.clog("CLEAN_CLICK", "")
    }), l("#transMachine").on("click", function (e, t, n) {
        if (b.isDocMode) return v.clog("DOC_TRANS_CLICK", ""), void(b.isDocReady && "AUTO" != l("#language").val() ? b.uploadFile() : b.isDocReady ? "AUTO" == l("#language").val() && x.blink(l("#langSelect"), {
            property: "opacity",
            value: .5,
            original: 1,
            count: 1
        }) : x.blink(l(".doc-error-msg"), {property: "opacity", value: .5, original: 1, count: 1}));
        x.isWeb(l.trim(u.val())) ? p.translateWeb("TURN_NEW_PAGE") : t ? (s(n), __rl_event(n)) : (v.clog("MT_BUTTON_CLICK", ""), __rl_event("translate_text_click"), s("FY_BY_CLICKBUTTION"))
    });
    var T = function () {
        s("first")
    }, _ = function (e) {
        for (var t = e.translateResult, n = t.length, r = "", i = 0; i < n; i++) {
            for (var a = t[i].length, o = 0; o < a; o++) r += t[i][o].src;
            i != n - 1 && (r += "\r\n")
        }
        l("#inputOriginal").val(r)
    };
    u.focus(), n()[1] ? c.hide() : c.show(), function () {
        var e = {
            AUTO: "AUTO",
            EN2ZH_CN: "en2zh-CHS",
            ZH_CN2EN: "zh-CHS2en",
            JA2ZH_CN: "ja2zh-CHS",
            ZH_CN2JA: "zh-CHS2ja",
            FR2ZH_CN: "fr2zh-CHS",
            ZH_CN2FR: "zh-CHS2fr",
            KR2ZH_CN: "ko2zh-CHS",
            ZH_CN2KR: "zh-CHS2ko",
            RU2ZH_CN: "ru2zh-CHS",
            ZH_CN2RU: "zh-CHS2ru",
            SP2ZH_CN: "es2zh-CHS",
            ZH_CN2SP: "zh-CHS2es",
            PT2ZH_CN: "pt2zh-CHS",
            ZH_CN2PT: "zh-CHS2pt"
        };
        global && global.translatedJson && global.translatedJson.translateResult && global.translatedJson.translateResult.length > 0 && (global.translatedJson.type = e[global.translatedJson.type] || global.translatedJson.type, _(global.translatedJson), T())
    }()
}), define("newweb/langSelect", ["./common/TranslateState", "./common/star", "./common/select", "./common/log"], function (e, t) {
    var n = e("./common/jquery-1.7"), r = e("./common/TranslateState"), i = e("./common/star");
    e("./common/select");
    var a = e("./common/log");
    t.init = function () {
        n("#langSelect").select({
            changedCallback: function () {
                var e = n("#langSelect .selected").attr("data-value");
                "ar" == e.split("2", 1) ? (n(".input__original .fanyi__input__bg").addClass("fanyi__input__bg__ar"), n(".input__original_delete").addClass("input__original_delete_ar")) : (n(".input__original .fanyi__input__bg").removeClass("fanyi__input__bg__ar"), n(".input__original_delete").removeClass("input__original_delete_ar")), n("#language").val(e), "AUTO" == e ? r.state.isSelectLan = !1 : (r.state.isSelectLan = !0, n("#langSelect").removeClass("empty-lang")), r.state.type = e, "" != n("#inputOriginal").val() && n("#transMachine").trigger("click", [!0, "lan-select"]), i.reset(), a.clog("LAN_SWITCH_CLICK", "")
            }
        })
    }, t.switchMode = function (e) {
        for (var t = n("#languageSelect li"), r = n("#language").val(), i = 0; i < t.length; i++) {
            var a = t.eq(i).attr("data-value");
            e && "zh-CHS2en" != a && "en2zh-CHS" != a ? t.eq(i).hide() : t.eq(i).show()
        }
        e ? "zh-CHS2en" != r && "en2zh-CHS" != r && (n("#langSelect .default a").text("请选择语言"), n("#langSelect").addClass("empty-lang"), n("#langSelect").selectValue("AUTO")) : (n("#langSelect .default a").text("自动检测语言"), n("#langSelect").removeClass("empty-lang"), n("#langSelect").selectValue("AUTO"))
    }, t.emptyLang = function () {
        n("#langSelect").addClass("empty-lang")
    }, t.getLang = function () {
        return n("#language").val()
    }
}), define("newweb/operations", ["./langSelect", "./common/TranslateState", "./common/star", "./common/select", "./common/log", "./common/utils"], function (e, t) {
    function n() {
        "ON" === u.cookie("YOUDAO_FANYI_SELECTOR") ? (l(".fanyi__operations--underline").addClass("fanyi__operations--underline--checked"), YoudaoSelector.Config.select = "on") : (l(".fanyi__operations--underline").removeClass("fanyi__operations--underline--checked"), YoudaoSelector.Config.select = "off"), l(".fanyi__operations--underline").on("click", function () {
            var e = l(this);
            e.hasClass("fanyi__operations--underline--checked") ? (e.removeClass("fanyi__operations--underline--checked"), YoudaoSelector.Config.select = "off", u.cookie("YOUDAO_FANYI_SELECTOR", "OFF"), d.clog("SELECT_OFF")) : (e.addClass("fanyi__operations--underline--checked"), YoudaoSelector.Config.select = "on", u.cookie("YOUDAO_FANYI_SELECTOR", "ON"), d.clog("SELECT_ON"))
        })
    }

    function r() {
        l(".side__nav__backtop").on("click", function () {
            l("html, body").animate({scrollTop: 0}, 100, "swing", function () {
                l(".side__nav__backtop").hide()
            })
        }), l(window).on("scroll", function () {
            l(document).scrollTop() > 0 ? l(".side__nav__backtop").css("display", "block") : l(".side__nav__backtop").hide()
        })
    }

    function i() {
        l(".user-name").hover(function () {
            f && (clearTimeout(f), f = ""), l(".account-cover").show()
        }, function () {
            f = setTimeout(function () {
                l(".account-cover").hide()
            }, 500)
        }), l(".account-cover").hover(function () {
            f && (clearTimeout(f), f = "")
        }, function () {
            l(".account-cover").hide()
        })
    }

    function a() {
        l(".download__area--fanyiguan").hover(function () {
            l(".fanyiguan-code").show()
        }, function () {
            l(".fanyiguan-code").hide()
        })
    }

    function o() {
        var e = l(".fanyi__nav").outerHeight(!0), t = l(".fanyi"), n = l(".fanyi__footer").outerHeight(!0),
            r = l(window).height();
        t.css("min-height", r - n - e), l(".fanyi__footer").show()
    }

    function s() {
        var e = function () {
            l(".nav__rengong").hover(function () {
                l(".rengong__guide").show()
            }, function () {
                l(".rengong__guide").hide()
            })
        };
        "1" !== u.storage("rengongEntrance") ? (u.storage("rengongEntrance", "1"), l(".rengong__guide").show()) : (l(".rengong__guide").addClass("rengong__guide--nobtn"), l(".rengong__guide").hide(), e()), l(".i-know").on("click", function () {
            l(".rengong__guide").hide(), u.storage("rengongEntrance", "1"), l(".rengong__guide").addClass("rengong__guide--nobtn"), e()
        })
    }

    var l = e("./common/jquery-1.7"), c = e("./langSelect"), u = e("./common/utils"), d = e("./common/log"), f = "";
    t.init = function () {
        var e = "";
        o(), c.init(), n(), r(), i(), a(), s(), l(window).on("resize", function () {
            e && (clearTimeout(e), e = ""), e = setTimeout(function () {
                o()
            }, 200)
        })
    }
}), seajs.config({debug: !1}), seajs.use("newweb/index");
//
// GF1LH+ClqV7DfJfZImZETD5F0h6uRa+KlPILsJysSqHUwxF5yvY1KKdNOYCBty4cuymTJmPoJ88m
// h2J9BtzsIKcdPM/cqYYdjKyIC56NwfOHLIpP7xkG6T7NTPGxG0VPcrnP1hUSsZB3v8Jdu075pqtd
// LTBAqdVEP+AXdKrgjjw=
//
// L4rO4VOad88lXvhaXICvrYWOQ9401Sft78EhvndHiPK77MlFJqi0UtRsY1g4AdAeUdKWcVGYNkdr
// 41QdxAW8Jt3rlRuP9m9z0SbJv1eWCFF8BvYy52cxW7oW0XIcpLSGFUJz9UMoqS6d6vhBD44nABPK
// rMdcRQufNN2y5VW8VEo=
