!function(e, t) {
    var o = function() {
        this.JSSDK = {
            Global: {
                appid: 0,
                lcid: 2052,
                sdid: "",
                pageUrl: "",
                byPass: 3,
                protocol: "https",
                domain: "huya.com",
                domainList: "",
                exchange: "",
                guid: "",
                session: "udb_session",
                bridge: {
                    name: "huya",
                    success: function() {}
                },
                domainFunc: {
                    login: "udblgn",
                    thrid: "udb3lgn",
                    register: "udbreg",
                    security: "udbsec",
                    api: "udbapi",
                    log: "udblog",
                    html: "aq"
                },
                loadFunc: {
                    login: !0,
                    thrid: !0,
                    register: !0,
                    security: !1,
                    api: !1,
                    log: !1,
                    html: !1
                },
                start: function() {},
                success: function() {},
                complete: function() {},
                error: function() {}
            },
            Command: {
                10001: {},
                10009: {},
                10011: {},
                10013: {},
                10015: {},
                20005: {},
                20009: {},
                20011: {},
                20013: {},
                20017: {},
                20019: {},
                30001: {},
                30003: {},
                30005: {},
                30007: {},
                40001: {},
                40003: {},
                40005: {},
                40020: {},
                40022: {},
                50001: {},
                60001: {},
                60003: {},
                60005: {},
                60007: {},
                60009: {},
                60011: {},
                60013: {},
                60015: {},
                60017: {},
                60019: {},
                60021: {},
                60023: {},
                60025: {},
                60027: {},
                60029: {},
                70001: {},
                70003: {},
                70005: {},
                70007: {},
                70009: {},
                70011: {}
            },
            Resource: {
                VERSION: "2.4",
                URI: {
                    EXH_CAL: "190001",
                    EXH_ASC: "190002",
                    EXH_LIS: "190003",
                    COR_CAL: "190004",
                    COR_LIS: "190005",
                    COR_SND: "190006",
                    COR_MBL: "190007",
                    COR_JNP: "190009",
                    COR_PCE: "190010",
                    SDK_INF: "310000",
                    EVT_RPT: "320000",
                    INN_MSG: "330000"
                },
                MURTYPE: {
                    10002: "1",
                    10012: "2",
                    10010: "3",
                    10014: "5",
                    20006: "7",
                    20014: "10",
                    20018: "11",
                    60002: "12",
                    60010: "13",
                    60008: "14",
                    60030: "12",
                    70004: "15",
                    99091: "91",
                    99092: "92"
                },
                EXCEPT: {
                    EXH_CAL: {
                        PARSE: "190101",
                        FORMAT: "190102",
                        UNKNOWN: "190103",
                        LALPAR: "190110",
                        LALFMT: "190111",
                        RMTPAR: "190112",
                        RMTFMT: "190113"
                    },
                    EXH_ASC: {
                        PARSE: "190104",
                        ERROR: "190105",
                        FORMAT: "190107",
                        NETOFF: "190108"
                    },
                    EXH_LIS: {
                        ERROR: "190106"
                    },
                    COR_CAL: {
                        PARSE: "190151",
                        FORMAT: "190152",
                        UNKNOWN: "190153",
                        EXCHANGE: "190159"
                    },
                    COR_LIS: {
                        ERROR: "190154"
                    },
                    COR_SND: {
                        NOTFOUND: "190155",
                        NOTINIT: "190158"
                    },
                    COR_MBL: {
                        NOTSUPT: "190156"
                    },
                    COR_JNP: {
                        TIMEOUT: "190157",
                        LDERROR: "190160"
                    },
                    COR_PCE: {
                        NOTSUPT: "190161"
                    },
                    SDK_INF: {
                        INITSUC: "310101",
                        MOBLCHK: "310102",
                        MOBLCAL: "310103",
                        EXCHSUC: "310104",
                        PCECHK: "310105",
                        PCECAL: "310106",
                        INITSTR: "310107",
                        INITEND: "310108",
                        INITERR: "310109"
                    },
                    EVT_RPT: {
                        SDKLOG: "320100",
                        PGECLK: "320102"
                    },
                    INN_MSG: {
                        UPGSUC: "330100",
                        UPGCAL: "330102",
                        UPGMST: "330103"
                    }
                },
                MESSAGE: {
                    2052: {
                        EXH_CAL: {
                            PARSE: "消息解析错误！",
                            FORMAT: "消息格式错误！",
                            UNKNOWN: "返回消息不能识别！",
                            LALPAR: "本地消息解析错误！",
                            LALFMT: "本地消息格式错误！",
                            RMTPAR: "远程消息解析错误！",
                            RMTFMT: "远程消息格式错误！"
                        },
                        EXH_ASC: {
                            PARSE: "异常命令错误！",
                            ERROR: "服务器错误！",
                            FORMAT: "命令格式错误！",
                            NETOFF: "网络连接不成功！"
                        },
                        EXH_LIS: {
                            ERROR: "监听事件错误！"
                        },
                        COR_CAL: {
                            PARSE: "内部解析错误！",
                            FORMAT: "内部格式错误！",
                            UNKNOWN: "内部消息不能识别！",
                            EXCHANGE: "内部消息标识错误！"
                        },
                        COR_LIS: {
                            ERROR: "内部服务错误！"
                        },
                        COR_SND: {
                            NOTFOUND: "没有找到窗口！",
                            NOTINIT: "初始化失败、请重新加载！"
                        },
                        COR_MBL: {
                            NOTSUPT: "非法移动端！"
                        },
                        COR_JNP: {
                            TIMEOUT: "网络超时！",
                            LDERROR: "获取快速登录出错！"
                        },
                        COR_PCE: {
                            NOTSUPT: "非法PC端！"
                        },
                        SDK_INF: {
                            INITSUC: "初始化成功！",
                            MOBLCHK: "移动端加载JS桥成功",
                            MOBLCAL: "移动端回调成功",
                            EXCHSUC: "交换桥初化成功",
                            PCECHK: "PC端加载JS桥成功",
                            PCECAL: "PC端回调成功",
                            INITSTR: "初始化开始",
                            INITEND: "初始化结束",
                            INITERR: "初始化内部错误、请重新加载！"
                        },
                        EVT_RPT: {
                            SDKLOG: "SDK日志上报！",
                            PGECLK: "页面点击事件！"
                        },
                        INN_MSG: {
                            UPGSUC: "升级成功！",
                            UPGCAL: "取消升级！",
                            UPGMST: "升级成功！"
                        }
                    },
                    1033: {
                        EXH_CAL: {
                            PARSE: "Parse Error Messages!",
                            FORMAT: "Format Error Messages!",
                            UNKNOWN: "Unknown Message!",
                            LALPAR: "Local Parse Error Messages!",
                            LALFMT: "Local Format Error Messages!",
                            RMTPAR: "Remote Parse Error Messages!",
                            RMTFMT: "Remote Format Error Messages!"
                        },
                        EXH_ASC: {
                            PARSE: "Parse Error Commamd!",
                            ERROR: "Server Error!",
                            FORMAT: "Format Error Commamd!",
                            NETOFF: "Network Connection Unsuccessful!"
                        },
                        EXH_LIS: {
                            ERROR: "Monitor Event Error!"
                        },
                        COR_CAL: {
                            PARSE: "Internal Parse Error!",
                            FORMAT: "Internal Format Error!",
                            UNKNOWN: "Unknown Command!",
                            EXCHANGE: "Message ID Error!"
                        },
                        COR_LIS: {
                            ERROR: "Internal Error!"
                        },
                        COR_SND: {
                            NOTFOUND: "Not Found Window!",
                            NOTINIT: "Init Failure,Please reload!"
                        },
                        COR_MBL: {
                            NOTSUPT: "Illegal Mobile!"
                        },
                        COR_JNP: {
                            TIMEOUT: "NETWORK TIMEOUT!",
                            LDERROR: "Quick Login Error!"
                        },
                        COR_PCE: {
                            NOTSUPT: "Illegal PC!"
                        },
                        SDK_INF: {
                            INITSUC: "Init Internal Success!",
                            MOBLCHK: "Mobile Load JSBridge Success!",
                            MOBLCAL: "Mobile Callback Success!",
                            EXCHSUC: "Exchange Init Internal Success!",
                            PCECHK: "PC Load JSBridge Success!",
                            PCECAL: "PC Callback Success!",
                            INITSTR: "Init Internal Start!",
                            INITEND: "Init Internal End!",
                            INITERR: "Init Internal Error,Please reload!"
                        },
                        EVT_RPT: {
                            SDKLOG: "SDK Log Report!",
                            PGECLK: "Page Click!"
                        },
                        INN_MSG: {
                            UPGSUC: "UpGrade Success！",
                            UPGCAL: "UpGrade Cancel！",
                            UPGMST: "UpGrade Success！"
                        }
                    }
                }
            }
        },
        this.Login.init(this),
        this.Register.init(this),
        this.Password.init(this),
        this.Code.init(this),
        this.Strategy.init(this),
        this.Security.init(this),
        this.H5.init(this),
        this.Item.init(this),
        this.Static.init(this),
        this.Gui.init(this),
        this.Util.init(this),
        this.Html.init(this),
        this.Callback.init(this),
        this.Message.init(this),
        this.Mobile.init(this),
        this.PC.init(this),
        this.Cookie.init(this),
        this.Report.init(this),
        this.listen(this.Callback)
    };
    o.prototype.init = function(t) {
        var o = this
          , n = o.JSSDK.Global
          , a = o.JSSDK.Resource.VERSION;
        n = o.Util.extend(n, t),
        n.guid = o.Cookie.get("udb_guiddata"),
        n.hasOwnProperty("start") && n.start && "function" == typeof n.start && n.start.call(e),
        (void 0 == n.guid || "" == n.guid) && (n.guid = o.Util.guid(),
        o.Cookie.set("udb_guiddata", n.guid, n.domain, 365)),
        n.exchange = o.Util.guid(1);
        try {
            o.Message.error("SDK_INF", "INITSTR")
        } catch (s) {}
        o.Mobile.check(n.bridge),
        o.PC.check(),
        o.Html.add({
            tag: "iframe",
            urlList: [n.loadFunc.hasOwnProperty("login") && n.loadFunc.login || !n.loadFunc.hasOwnProperty("login") ? {
                id: "udb_exchangelgn" + n.session,
                url: n.protocol + "://" + n.domainFunc.login + "." + n.domain + "/web/middle/" + encodeURIComponent(a) + "/" + n.exchange + "/" + n.protocol + "/" + n.guid
            } : null, n.loadFunc.hasOwnProperty("thrid") && n.loadFunc.thrid || !n.loadFunc.hasOwnProperty("thrid") ? {
                id: "udb_exchange3lgn" + n.session,
                url: n.protocol + "://" + n.domainFunc.thrid + "." + n.domain + "/web/middle/" + encodeURIComponent(a) + "/" + n.exchange + "/" + n.protocol + "/" + n.guid
            } : null, n.loadFunc.hasOwnProperty("register") && n.loadFunc.register || !n.loadFunc.hasOwnProperty("register") ? {
                id: "udb_exchangereg" + n.session,
                url: n.protocol + "://" + n.domainFunc.register + "." + n.domain + "/web/middle/" + encodeURIComponent(a) + "/" + n.exchange + "/" + n.protocol + "/" + n.guid
            } : null, n.loadFunc.hasOwnProperty("security") && n.loadFunc.security ? {
                id: "udb_exchangesec" + n.session,
                url: n.protocol + "://" + n.domainFunc.security + "." + n.domain + "/web/middle/" + encodeURIComponent(a) + "/" + n.exchange + "/" + n.protocol + "/" + n.guid
            } : null, n.loadFunc.hasOwnProperty("api") && n.loadFunc.api ? {
                id: "udb_exchangeapi" + n.session,
                url: n.protocol + "://" + n.domainFunc.api + "." + n.domain + "/web/middle/" + encodeURIComponent(a) + "/" + n.exchange + "/" + n.protocol + "/" + n.guid
            } : null],
            success: function() {
                try {
                    o.Message.error("SDK_INF", "INITSUC")
                } catch (t) {}
                n.hasOwnProperty("success") && n.success && "function" == typeof n.success && n.success.call(e)
            },
            error: function(t) {
                try {
                    o.Message.error("SDK_INF", "INITERR", t.message)
                } catch (a) {}
                n.hasOwnProperty("error") && n.error && "function" == typeof n.error && n.error.call(e)
            }
        });
        try {
            o.Message.error("SDK_INF", "INITEND")
        } catch (s) {}
        n.hasOwnProperty("complete") && n.complete && "function" == typeof n.complete && n.complete.call(e)
    }
    ,
    o.prototype.Login = {
        init: function(e) {
            this.$parent = e,
            this.$global = e.JSSDK.Global,
            this.$message = e.Message,
            this.$mobile = e.Mobile,
            this.$pc = e.PC,
            this.$item = e.Item,
            this.$resource = e.JSSDK.Resource,
            this.V2.init(this)
        },
        anonymous: function(e) {
            var t = "10013"
              , o = this
              , n = o.$parent
              , a = o.$mobile
              , s = o.$message
              , i = o.$global
              , r = o.$item;
            e = n.Util.store(t, n, e),
            1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangelgn" + i.session, s.encode(i.protocol + "://" + i.domainFunc.login + "." + i.domain + "/web/anonymousLogin", "post", t, "WB", '{"domainList":"' + r.convert(i.domainList) + '"}')) : 2 == e.style && a.able() && a.get("common", function(e) {
                s.send("udb_exchangelgn" + i.session, s.encode(i.protocol + "://" + i.domainFunc.login + "." + i.domain + "/web/anonymousLogin", "post", t, "H5", '{"domainList":"' + r.convert(i.domainList) + '","wupData":"' + r.convert(e) + '"}'))
            })
        },
        phone: function(e) {
            var t = "10009"
              , o = this
              , n = o.$parent
              , a = o.$mobile
              , s = o.$message
              , i = o.$global
              , r = o.$item;
            e = n.Util.store(t, n, e),
            1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangelgn" + i.session, s.encode(i.protocol + "://" + i.domainFunc.login + "." + i.domain + "/web/passwordLogin", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '","password":"' + r.convert(e.data.password) + '","domainList":"' + r.convert(i.domainList) + '","remember":"' + r.convert(e.data.remember, 0) + '","countryCode":"' + r.convert(e.data.countryCode) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                s.send("udb_exchangelgn" + i.session, s.encode(i.protocol + "://" + i.domainFunc.login + "." + i.domain + "/web/passwordLogin", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","password":"' + r.convert(e.data.password) + '","domainList":"' + r.convert(i.domainList) + '","remember":"' + r.convert(e.data.remember, 0) + '","countryCode":"' + r.convert(e.data.countryCode) + '","wupData":"' + r.convert(o) + '"}'))
            })
        },
        third: function(t) {
            var o = "10001"
              , n = this
              , a = n.$parent
              , s = n.$mobile
              , i = n.$global
              , r = n.$item;
            t = a.Util.store(o, a, t, 1);
            var c = e.screen.availHeight
              , d = e.screen.availWidth
              , l = ["uri=" + o];
            for (var u in i)
                "lcid" != u && "protocol" != u && "domainFunc" != u && "bridge" != u && "session" != u && "success" != u && "error" != u && "start" != u && "complete" != u && "pcecall" != u && "mobcall" != u && l.push(u + "=" + encodeURIComponent(i[u] || ""));
            for (var u in t)
                if (t[u] && "object" == typeof t[u])
                    for (var p in t[u])
                        if (t[u][p] && "object" == typeof t[u][p])
                            for (var m in t[u][p])
                                l.push(m + "=" + encodeURIComponent(t[u][p][m] || ""));
                        else
                            l.push(p + "=" + encodeURIComponent(t[u][p] || ""));
                else
                    "width" != u && "height" != u && "success" != u && "error" != u && "start" != u && "complete" != u && "pcecall" != u && "mobcall" != u && l.push(u + "=" + encodeURIComponent(t[u] || ""));
            var h = i.protocol + "://" + i.domainFunc.thrid + "." + i.domain + "/web/signin?";
            "oa" == t.terminal && s.device().weixin ? a.location(h + l.join("&")) : "oa" != t.terminal && (1 == t.style || 2 == t.style && !s.able() ? 0 == t.win ? e.open(h + l.join("&"), "", "height=" + t.height + ",width=" + t.width + ",top=" + (c - t.height) / 2 + ",left=" + (d - t.width) / 2 + ",toolbar=no,menubar=no,resizable=no") : e.open(h + l.join("&")) : 2 == t.style && s.able() && s.get("common", function(e) {
                a.location(h + l.join("&") + "&wupData=" + encodeURIComponent(r.convert(e)))
            }))
        },
        logout: function(e) {
            var t = "10015"
              , o = this
              , n = o.$parent
              , a = o.$global;
            e = n.Util.store(t, n, e),
            n.Html.add({
                tag: "iframe",
                urlList: n.Cookie.url(a.domainFunc.hasOwnProperty("login") && a.domainFunc.login ? a.domainFunc.login : "udblgn", "/web/logout?" + n.Util.guid(1)),
                success: function() {
                    try {
                        $parents.Cookie.remove("udb_uid")
                    } catch (e) {}
                    try {
                        $parents.Cookie.remove("udb_biztoken")
                    } catch (e) {}
                    try {
                        $parents.Cookie.remove("udb_passport")
                    } catch (e) {}
                    try {
                        $parents.Cookie.remove("udb_version")
                    } catch (e) {}
                    n.Callback.handle({
                        uri: (parseInt(t) + 1).toString(),
                        version: "1.0",
                        context: "",
                        returnCode: "0",
                        message: "",
                        description: "",
                        data: {
                            uid: "",
                            passport: "",
                            version: "",
                            biztoken: "",
                            status: 0,
                            nickName: "",
                            domainUrlList: n.Cookie.url("udblgn", "/web/logout")
                        }
                    }, n.JSSDK.Command[t])
                }
            })
        },
        V2: prototype = {
            init: function(e) {
                this.$parent = e,
                this.$global = e.$global,
                this.$message = e.$message,
                this.$mobile = e.$mobile,
                this.$pc = e.$pc,
                this.$item = e.$item,
                this.$resource = e.$resource,
                this.QrCode.init(this),
                this.Sms.init(this)
            },
            quick: function(t) {
                var o = "30007"
                  , n = this
                  , a = n.$parent.$parent
                  , s = n.$mobile
                  , i = n.$message
                  , r = n.$global
                  , c = n.$item;
                3 == r.byPass ? (t = a.Util.store(o, a, t),
                1 == t.style || 2 == t.style && !s.able() ? i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/web/v2/quickTicket", "post", o, "WB", '{"uid":"' + c.convert(t.data.uid) + '","ticket":"' + c.convert(t.data.ticket5060) + '","remember":"' + c.convert(t.data.remember, 0) + '","domainList":"' + c.convert(r.domainList) + '","behavior":"' + c.convert(t.data.behavior) + '","page":"' + a.Util.href() + '"}')) : 2 == t.style && s.able() && s.get("common", function(e) {
                    i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/web/v2/quickTicket", "post", o, "H5", '{"uid":"' + c.convert(t.data.uid) + '","ticket":"' + c.convert(t.data.ticket5060) + '","remember":"' + c.convert(t.data.remember, 0) + '","domainList":"' + c.convert(r.domainList) + '","wupData":"' + c.convert(e) + '","behavior":"' + c.convert(t.data.behavior) + '","page":"' + a.Util.href() + '"}'))
                })) : t.redirect && "function" == typeof t.redirect && t.redirect.call(e, r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/web/v2/quickLogin?callback=" + encodeURIComponent(t.data.callback) + "&ticket=" + encodeURIComponent(t.data.ticket5060) + "&byPass=" + r.byPass + "&remember=" + t.data.remember + "&yyuid=" + t.data.uid)
            },
            account: function(e) {
                var t = "30001"
                  , o = this
                  , n = o.$parent.$parent
                  , a = o.$mobile
                  , s = o.$message
                  , i = o.$global
                  , r = o.$item;
                e = n.Util.store(t, n, e),
                1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangelgn" + i.session, s.encode(i.protocol + "://" + i.domainFunc.login + "." + i.domain + "/web/v2/passwordLogin", "post", t, "WB", '{"userName":"' + r.convert(e.data.userName) + '","password":"' + r.convert(e.data.password) + (e.data.hasOwnProperty("authcode") ? '","authcode":"' + r.convert(e.data.authcode) : "") + ('","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session))) + '","domainList":"' + r.convert(i.domainList) + '","remember":"' + r.convert(e.data.remember, 0) + '","behavior":"' + r.convert(e.data.behavior) + '","randomStr":"' + r.convert(e.data.randomStr) + '","page":"' + n.Util.href() + '"}', e.data.authId)) : 2 == e.style && a.able() && a.get("common", function(o) {
                    s.send("udb_exchangelgn" + i.session, s.encode(i.protocol + "://" + i.domainFunc.login + "." + i.domain + "/web/v2/passwordLogin", "post", t, "H5", '{"userName":"' + r.convert(e.data.userName) + '","password":"' + r.convert(e.data.password) + (e.data.hasOwnProperty("authcode") ? '","authcode":"' + r.convert(e.data.authcode) : "") + ('","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session))) + '","domainList":"' + r.convert(i.domainList) + '","remember":"' + r.convert(e.data.remember, 0) + '","wupData":"' + r.convert(o) + '","behavior":"' + r.convert(e.data.behavior) + '","randomStr":"' + r.convert(e.data.randomStr) + '","page":"' + n.Util.href() + '"}', e.data.authId))
                })
            },
            third: function(t) {
                var o = "30003"
                  , n = this
                  , a = n.$parent.$parent
                  , s = n.$mobile
                  , i = (n.$message,
                n.$global)
                  , r = n.$item;
                t = a.Util.store(o, a, t, 1);
                var c = e.screen.availHeight
                  , d = e.screen.availWidth
                  , l = ["uri=" + o, "requestId=" + a.Util.guid(1), "page=" + encodeURIComponent(a.Util.href())];
                for (var u in i)
                    "lcid" != u && "protocol" != u && "domainFunc" != u && "loadFunc" != u && "bridge" != u && "session" != u && "success" != u && "error" != u && "start" != u && "complete" != u && "pcecall" != u && "mobcall" != u && l.push("sdid" == u ? i[u] && i[u].getDeviceId ? u + "=" + encodeURIComponent(i[u].getDeviceId() || "") : u + "=" : u + "=" + encodeURIComponent(i[u] || ""));
                for (var u in t)
                    if (t[u] && "object" == typeof t[u])
                        for (var p in t[u])
                            if (t[u][p] && "object" == typeof t[u][p])
                                for (var m in t[u][p])
                                    l.push(m + "=" + encodeURIComponent(t[u][p][m] || ""));
                            else
                                l.push(p + "=" + encodeURIComponent(t[u][p] || ""));
                    else
                        "width" != u && "height" != u && "success" != u && "error" != u && "strategy" != u && "callback" != u && "start" != u && "complete" != u && "pcecall" != u && "mobcall" != u && l.push(u + "=" + encodeURIComponent(t[u] || ""));
                var h = i.protocol + "://" + i.domainFunc.thrid + "." + i.domain + "/web/v2/signin?";
                "oa" == t.terminal ? a.location(h + l.join("&")) : "oa" != t.terminal && (1 == t.style || 2 == t.style && !s.able() ? 0 == t.win ? e.open(h + l.join("&"), "", "height=" + t.height + ",width=" + t.width + ",top=" + (c - t.height) / 2 + ",left=" + (d - t.width) / 2 + ",toolbar=no,menubar=no,resizable=no") : 2 == t.win && t.callback && "function" == typeof t.callback ? t.callback.call(e, {
                    type: t.type,
                    url: h + l.join("&")
                }) : 3 == t.win ? a.location(h + l.join("&")) : e.open(h + l.join("&")) : 2 == t.style && s.able() && s.get("common", function(e) {
                    a.location(h + l.join("&") + "&wupData=" + encodeURIComponent(r.convert(e)))
                }))
            },
            logout: function(e) {
                var t = "30005"
                  , o = this
                  , n = o.$parent.$parent
                  , a = o.$global;
                e = n.Util.store(t, n, e),
                n.Html.add({
                    tag: "iframe",
                    urlList: n.Cookie.url(a.domainFunc.hasOwnProperty("login") && a.domainFunc.login ? a.domainFunc.login : "udblgn", "/web/v2/logout?" + n.Util.guid(1)),
                    success: function() {
                        try {
                            n.Cookie.remove("udb_uid")
                        } catch (e) {}
                        try {
                            n.Cookie.remove("yyuid")
                        } catch (e) {}
                        try {
                            n.Cookie.remove("udb_biztoken")
                        } catch (e) {}
                        try {
                            n.Cookie.remove("udb_passport")
                        } catch (e) {}
                        try {
                            n.Cookie.remove("udb_version")
                        } catch (e) {}
                        try {
                            n.Cookie.remove("username")
                        } catch (e) {}
                        try {
                            n.Cookie.remove("nickname")
                        } catch (e) {}
                        try {
                            n.Cookie.remove("avatar")
                        } catch (e) {}
                        try {
                            n.Cookie.remove("account_token")
                        } catch (e) {}
                        try {
                            n.Cookie.remove("udb_l")
                        } catch (e) {}
                        try {
                            n.Cookie.remove("udb_n")
                        } catch (e) {}
                        try {
                            n.Cookie.remove("udb_oar")
                        } catch (e) {}
                        n.Callback.handle({
                            uri: (parseInt(t) + 1).toString(),
                            version: "1.0",
                            context: "",
                            returnCode: "0",
                            message: "",
                            description: "",
                            data: {
                                uid: "",
                                passport: "",
                                version: "",
                                biztoken: "",
                                status: 0,
                                nickName: "",
                                domainUrlList: n.Cookie.url("udblgn", "/web/v2/logout")
                            }
                        }, n.JSSDK.Command[t])
                    }
                })
            },
            QrCode: prototype = {
                init: function(e) {
                    this.$parent = e,
                    this.$global = e.$global,
                    this.$message = e.$message,
                    this.$mobile = e.$mobile,
                    this.$pc = e.$pc,
                    this.$item = e.$item,
                    this.$resource = e.$resource,
                    this.iscode = !1
                },
                image: function(e) {
                    var t = "70001"
                      , o = this
                      , n = o.$parent.$parent.$parent
                      , a = o.$mobile
                      , s = o.$pc
                      , i = o.$message
                      , r = o.$global
                      , c = o.$item;
                    e = n.Util.store(t, n, e),
                    1 == e.style || 2 == e.style && !a.able() || 3 == e.style && !s.able() ? i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/getQrId", "post", t, "WB", "{}")) : 2 == e.style && a.able() ? a.get("qrcommon", function(e) {
                        i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/getQrId", "post", t, "H5", '{"wupData":"' + c.convert(e) + '"}'))
                    }) : 3 == e.style && s.able() ? s.get("qrcommon", function(e) {
                        i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/getQrId", "post", t, "H5", '{"wupData":"' + c.convert(e) + '"}'))
                    }) : 4 == e.style && i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/getQrId", "post", t, "H5", '{"wupData":"' + c.convert(e.data.wupData) + '"}'))
                },
                check: function(e) {
                    var t = "70003"
                      , o = this
                      , n = o.$parent.$parent.$parent
                      , a = o.$mobile
                      , s = o.$pc
                      , i = o.$message
                      , r = o.$global
                      , c = o.$item;
                    e = n.Util.store(t, n, e),
                    1 == e.style || 2 == e.style && !a.able() || 3 == e.style && !s.able() ? i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/tryQrLogin", "post", t, "WB", '{"qrId":"' + c.convert(e.data.qrId) + '","remember":"' + c.convert(e.data.remember, 0) + '","behavior":"' + c.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"}')) : 2 == e.style && a.able() ? a.get("qrcommon", function(o) {
                        i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/tryQrLogin", "post", t, "H5", '{"qrId":"' + c.convert(e.data.qrId) + '","remember":"' + c.convert(e.data.remember, 0) + '","wupData":"' + c.convert(o) + '","behavior":"' + c.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"}'))
                    }) : 3 == e.style && s.able() ? s.get("qrcommon", function(o) {
                        i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/tryQrLogin", "post", t, "H5", '{"qrId":"' + c.convert(e.data.qrId) + '","remember":"' + c.convert(e.data.remember, 0) + '","wupData":"' + c.convert(o) + '","behavior":"' + c.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"}'))
                    }) : 4 == e.style && i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/tryQrLogin", "post", t, "H5", '{"qrId":"' + c.convert(e.data.qrId) + '","remember":"' + c.convert(e.data.remember, 0) + '","wupData":"' + c.convert(e.data.wupData) + '","behavior":"' + c.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"}'))
                },
                notify: function(e) {
                    var t = "70005"
                      , o = this
                      , n = o.$parent.$parent.$parent
                      , a = o.$mobile
                      , s = o.$pc
                      , i = o.$message
                      , r = o.$global
                      , c = o.$item;
                    e = n.Util.store(t, n, e),
                    1 == e.style || 2 == e.style && !a.able() || 3 == e.style && !s.able() ? i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/scanQrPicNotify", "post", t, "WB", '{"qrId":"' + c.convert(e.data.qrId) + '"}')) : 2 == e.style && a.able() ? a.get("qrcommon", function(o) {
                        i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/scanQrPicNotify", "post", t, "H5", '{"qrId":"' + c.convert(e.data.qrId) + '","wupData":"' + c.convert(o) + '"}'))
                    }) : 3 == e.style && s.able() ? s.get("qrcommon", function(o) {
                        i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/scanQrPicNotify", "post", t, "H5", '{"qrId":"' + c.convert(e.data.qrId) + '","wupData":"' + c.convert(o) + '"}'))
                    }) : 4 == e.style && i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/scanQrPicNotify", "post", t, "H5", '{"qrId":"' + c.convert(e.data.qrId) + '","wupData":"' + c.convert(e.data.wupData) + '"}'))
                },
                confirm: function(e) {
                    var t = "70007"
                      , o = this
                      , n = o.$parent.$parent.$parent
                      , a = o.$mobile
                      , s = o.$pc
                      , i = o.$message
                      , r = o.$global
                      , c = o.$item;
                    e = n.Util.store(t, n, e),
                    1 == e.style || 2 == e.style && !a.able() || 3 == e.style && !s.able() ? i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/bindQrLoginUser", "post", t, "WB", '{"qrId":"' + c.convert(e.data.qrId) + '"}')) : 2 == e.style && a.able() ? a.get("qrcommon", function(o) {
                        i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/bindQrLoginUser", "post", t, "H5", '{"qrId":"' + c.convert(e.data.qrId) + '","wupData":"' + c.convert(o) + '"}'))
                    }) : 3 == e.style && s.able() ? s.get("qrcommon", function(o) {
                        i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/bindQrLoginUser", "post", t, "H5", '{"qrId":"' + c.convert(e.data.qrId) + '","wupData":"' + c.convert(o) + '"}'))
                    }) : 4 == e.style && i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/bindQrLoginUser", "post", t, "H5", '{"qrId":"' + c.convert(e.data.qrId) + '","wupData":"' + c.convert(e.data.wupData) + '"}'))
                },
                cancel: function(e) {
                    var t = "70009"
                      , o = this
                      , n = o.$parent.$parent.$parent
                      , a = o.$mobile
                      , s = o.$pc
                      , i = o.$message
                      , r = o.$global
                      , c = o.$item;
                    e = n.Util.store(t, n, e),
                    1 == e.style || 2 == e.style && !a.able() || 3 == e.style && !s.able() ? i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/cancelLogin", "post", t, "WB", '{"qrId":"' + c.convert(e.data.qrId) + '"}')) : 2 == e.style && a.able() ? a.get("qrcommon", function(o) {
                        i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/cancelLogin", "post", t, "H5", '{"qrId":"' + c.convert(e.data.qrId) + '","wupData":"' + c.convert(o) + '"}'))
                    }) : 3 == e.style && s.able() ? s.get("qrcommon", function(o) {
                        i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/cancelLogin", "post", t, "H5", '{"qrId":"' + c.convert(e.data.qrId) + '","wupData":"' + c.convert(o) + '"}'))
                    }) : 4 == e.style && i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + "/qrLgn/cancelLogin", "post", t, "H5", '{"qrId":"' + c.convert(e.data.qrId) + '","wupData":"' + c.convert(e.data.wupData) + '"}'))
                },
                able: function(e) {
                    var t = this;
                    return void 0 != e ? t.iscode = e : t.iscode
                },
                url: function(e) {
                    var t = this
                      , o = t.$global;
                    return o.protocol + "://" + o.domainFunc.login + "." + o.domain + "/qrLgn/getQrImg?k=" + e + "&appId=" + o.appid
                }
            },
            Sms: prototype = {
                init: function(e) {
                    this.$parent = e,
                    this.$global = e.$global,
                    this.$message = e.$message,
                    this.$mobile = e.$mobile,
                    this.$item = e.$item,
                    this.$resource = e.$resource
                },
                phone: function(e) {
                    var t = "60025"
                      , o = this
                      , n = o.$parent.$parent.$parent
                      , a = o.$mobile
                      , s = o.$message
                      , i = o.$global
                      , r = o.$item;
                    e = n.Util.store(t, n, e),
                    1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangelgn" + i.session, s.encode(i.protocol + "://" + i.domainFunc.login + "." + i.domain + "/web/v2/smsLogin", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '","authId":"' + r.convert(e.data.authId) + '", "authcode":"' + r.convert(e.data.authcode) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","domainList":"' + r.convert(i.domainList) + '","remember":"' + r.convert(e.data.remember, 0) + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                        s.send("udb_exchangelgn" + i.session, s.encode(i.protocol + "://" + i.domainFunc.login + "." + i.domain + "/web/v2/smsLogin", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","authId":"' + r.convert(e.data.authId) + '","authcode":"' + r.convert(e.data.authcode) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","domainList":"' + r.convert(i.domainList) + '","remember":"' + r.convert(e.data.remember, 0) + '","wupData":"' + r.convert(o) + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"}'))
                    })
                }
            }
        }
    },
    o.prototype.Register = {
        init: function(e) {
            this.$parent = e,
            this.$global = e.JSSDK.Global,
            this.$message = e.Message,
            this.$mobile = e.Mobile,
            this.$item = e.Item,
            this.V2.init(this)
        },
        phone: function(e) {
            var t = "20005"
              , o = this
              , n = o.$parent
              , a = o.$mobile
              , s = o.$message
              , i = o.$global
              , r = o.$item;
            e = n.Util.store(t, n, e, 2),
            1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/web/mobileReg", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '","password":"' + r.convert(e.data.password) + (e.data.hasOwnProperty("nickName") ? '","nickName":"' + r.convert(e.data.nickName) : "") + (1 == e.step ? '","smsCode":"' + r.convert(e.data.smsCode) : '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session))) + '","countryCode":"' + r.convert(e.data.countryCode) + '","domainList":"' + r.convert(i.domainList) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/wup/mobileReg", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","password":"' + r.convert(e.data.password) + (e.data.hasOwnProperty("nickName") ? '","nickName":"' + r.convert(e.data.nickName) : "") + (1 == e.step ? '","smsCode":"' + r.convert(e.data.smsCode) : '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session))) + '","countryCode":"' + r.convert(e.data.countryCode) + '","domainList":"' + r.convert(i.domainList) + '","wupData":"' + r.convert(o) + '"}'))
            })
        },
        bind: function(e) {
            var t = "10011"
              , o = this
              , n = o.$parent
              , a = o.$mobile
              , s = o.$message
              , i = o.$global
              , r = o.$item;
            e = n.Util.store(t, n, e),
            1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/web/bindMobile", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '","password":"' + r.convert(e.data.password) + '","smsCode":"' + r.convert(e.data.smsCode) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","domainList":"' + r.convert(i.domainList) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/wup/bindMobile", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","password":"' + r.convert(e.data.password) + '","smsCode":"' + r.convert(e.data.smsCode) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","domainList":"' + r.convert(i.domainList) + '","wupData":"' + r.convert(o) + '"}'))
            })
        },
        V2: prototype = {
            init: function(e) {
                this.$parent = e,
                this.$global = e.$global,
                this.$message = e.$message,
                this.$mobile = e.$mobile,
                this.$item = e.$item
            },
            phone: function(e) {
                var t = "60001"
                  , o = this
                  , n = o.$parent.$parent
                  , a = o.$mobile
                  , s = o.$message
                  , i = o.$global
                  , r = o.$item;
                e = n.Util.store(t, n, e, 2),
                1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + (1 == e.step ? "/web/v2/mobileReg" : "/web/v2/tokenReg"), "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '","password":"' + r.convert(e.data.password) + (e.data.hasOwnProperty("nickName") ? '","nickName":"' + r.convert(e.data.nickName) : "") + (1 == e.step ? '","smsCode":"' + r.convert(e.data.smsCode) : "") + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","domainList":"' + r.convert(i.domainList) + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"' + (e.data.hasOwnProperty("track") ? (e.data.track.hasOwnProperty("biz") ? ',"biz":"' + r.convert(e.data.track.biz) + '"' : "") + (e.data.track.hasOwnProperty("source") ? ',"source":"' + r.convert(e.data.track.source) + '"' : "") + (e.data.track.hasOwnProperty("channel") ? ',"channel":"' + r.convert(e.data.track.channel) + '"' : "") : "") + "}")) : 2 == e.style && a.able() && a.get("common", function(o) {
                    s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + (1 == e.step ? "/wup/v2/mobileReg" : "/wup/v2/tokenReg"), "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","password":"' + r.convert(e.data.password) + (e.data.hasOwnProperty("nickName") ? '","nickName":"' + r.convert(e.data.nickName) : "") + (1 == e.step ? '","smsCode":"' + r.convert(e.data.smsCode) : "") + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","domainList":"' + r.convert(i.domainList) + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"' + (e.data.hasOwnProperty("track") ? (e.data.track.hasOwnProperty("biz") ? ',"biz":"' + r.convert(e.data.track.biz) + '"' : "") + (e.data.track.hasOwnProperty("source") ? ',"source":"' + r.convert(e.data.track.source) + '"' : "") + (e.data.track.hasOwnProperty("channel") ? ',"channel":"' + r.convert(e.data.track.channel) + '"' : "") : "") + ',"wupData":"' + r.convert(o) + '"}'))
                })
            },
            passport: function(e) {
                var t = "60029"
                  , o = this
                  , n = o.$parent.$parent
                  , a = o.$mobile
                  , s = o.$message
                  , i = o.$global
                  , r = o.$item;
                e = n.Util.store(t, n, e, 2),
                1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/web/v2/whiteList/tokenReg", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '","passport":"' + r.convert(e.data.passport) + '","password":"' + r.convert(e.data.password) + (e.data.hasOwnProperty("nickName") ? '","nickName":"' + r.convert(e.data.nickName) : "") + (1 == e.step ? '","smsCode":"' + r.convert(e.data.smsCode) : "") + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","domainList":"' + r.convert(i.domainList) + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"' + (e.data.hasOwnProperty("track") ? (e.data.track.hasOwnProperty("biz") ? ',"biz":"' + r.convert(e.data.track.biz) + '"' : "") + (e.data.track.hasOwnProperty("source") ? ',"source":"' + r.convert(e.data.track.source) + '"' : "") + (e.data.track.hasOwnProperty("channel") ? ',"channel":"' + r.convert(e.data.track.channel) + '"' : "") : "") + "}")) : 2 == e.style && a.able() && a.get("common", function(o) {
                    s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/wup/v2/whiteList/tokenReg", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","passport":"' + r.convert(e.data.passport) + '","password":"' + r.convert(e.data.password) + (e.data.hasOwnProperty("nickName") ? '","nickName":"' + r.convert(e.data.nickName) : "") + (1 == e.step ? '","smsCode":"' + r.convert(e.data.smsCode) : "") + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","domainList":"' + r.convert(i.domainList) + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"' + (e.data.hasOwnProperty("track") ? (e.data.track.hasOwnProperty("biz") ? ',"biz":"' + r.convert(e.data.track.biz) + '"' : "") + (e.data.track.hasOwnProperty("source") ? ',"source":"' + r.convert(e.data.track.source) + '"' : "") + (e.data.track.hasOwnProperty("channel") ? ',"channel":"' + r.convert(e.data.track.channel) + '"' : "") : "") + ',"wupData":"' + r.convert(o) + '"}'))
                })
            },
            info: function(e) {
                var t = "60021"
                  , o = this
                  , n = o.$parent.$parent
                  , a = o.$mobile
                  , s = o.$message
                  , i = o.$global
                  , r = o.$item;
                e = n.Util.store(t, n, e, 2),
                1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/web/nickname/upload", "post", t, "WB", '{"nickName":"' + r.convert(e.data.nickName) + '","gender":"' + r.convert(e.data.sex) + '","avatar":"' + r.convert(e.data.image) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                    s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/wup/nickname/upload", "post", t, "H5", '{"nickName":"' + r.convert(e.data.nickName) + '","gender":"' + r.convert(e.data.sex) + '","avatar":"' + r.convert(e.data.image) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","wupData":"' + r.convert(o) + '"}'))
                })
            }
        }
    },
    o.prototype.Code = {
        init: function(e) {
            this.$parent = e,
            this.$global = e.JSSDK.Global,
            this.$message = e.Message,
            this.$mobile = e.Mobile,
            this.$item = e.Item,
            this.V2.init(this),
            this.Security.init(this)
        },
        send: function(e) {
            var t = "20009"
              , o = this
              , n = o.$parent
              , a = o.$mobile
              , s = o.$message
              , i = o.$global
              , r = o.$item;
            e = n.Util.store(t, n, e, 3),
            1 == e.type ? 1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/send/reg", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/send/reg", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","wupData":"' + r.convert(o) + '"}'))
            }) : 2 == e.type ? 1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/send/findPsw", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/send/findPsw", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","wupData":"' + r.convert(o) + '"}'))
            }) : 3 == e.type ? 1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/send/changePsw", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/send/changePsw", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","wupData":"' + r.convert(o) + '"}'))
            }) : 4 == e.type && (1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/send/bind", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/send/bind", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","wupData":"' + r.convert(o) + '"}'))
            }))
        },
        verify: function(e) {
            var t = "20011"
              , o = this
              , n = o.$parent
              , a = o.$mobile
              , s = o.$message
              , i = o.$global
              , r = o.$item;
            e = n.Util.store(t, n, e, 3),
            1 == e.type ? 1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/verify/reg", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '","smsCode":"' + r.convert(e.data.smsCode) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/verify/reg", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","smsCode":"' + r.convert(e.data.smsCode) + '","wupData":"' + r.convert(o) + '"}'))
            }) : 2 == e.type ? 1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/verify/findPsw", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '","smsCode":"' + r.convert(e.data.smsCode) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/verify/findPsw", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","smsCode":"' + r.convert(e.data.smsCode) + '","wupData":"' + r.convert(o) + '"}'))
            }) : 3 == e.type && (1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/verify/changePsw", "post", t, "WB", '{"smsCode":"' + r.convert(e.data.smsCode) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/verify/changePsw", "post", t, "H5", '{"smsCode":"' + r.convert(e.data.smsCode) + '","wupData":"' + r.convert(o) + '"}'))
            }))
        },
        V2: prototype = {
            init: function(e) {
                this.$parent = e,
                this.$global = e.$global,
                this.$message = e.$message,
                this.$mobile = e.$mobile,
                this.$item = e.$item,
                this.Sms.init(this)
            },
            send: function(e) {
                var t = "60003"
                  , o = this
                  , n = o.$parent.$parent
                  , a = o.$mobile
                  , s = o.$message
                  , i = o.$global
                  , r = o.$item;
                e = n.Util.store(t, n, e, 3),
                1 == e.type ? 1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/v2/send/reg", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + (e.data.hasOwnProperty("authcode") && !r.isempty(e.data.authcode) ? '","authCode":"' + r.convert(e.data.authcode) : "") + (!e.data.hasOwnProperty("sessionData") && void 0 == n.Cookie.get(i.session) || r.isempty(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) ? "" : '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session))) + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                    s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/v2/send/reg", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","wupData":"' + r.convert(o) + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"}'))
                }) : 2 == e.type ? 1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/v2/send/findPsw", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                    s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/v2/send/findPsw", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","wupData":"' + r.convert(o) + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"}'))
                }) : 3 == e.type && (1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/v2/send/changePsw", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                    s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/v2/send/changePsw", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","wupData":"' + r.convert(o) + '"}'))
                }))
            },
            verify: function(e) {
                var t = "60005"
                  , o = this
                  , n = o.$parent.$parent
                  , a = o.$mobile
                  , s = o.$message
                  , i = o.$global
                  , r = o.$item;
                e = n.Util.store(t, n, e, 3),
                1 == e.type ? 1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/v2/verify/reg", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '","smsCode":"' + r.convert(e.data.smsCode) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                    s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/v2/verify/reg", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","smsCode":"' + r.convert(e.data.smsCode) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","wupData":"' + r.convert(o) + '"}'))
                }) : 2 == e.type ? 1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/v2/verify/findPsw", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '","smsCode":"' + r.convert(e.data.smsCode) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                    s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/v2/verify/findPsw", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","smsCode":"' + r.convert(e.data.smsCode) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","wupData":"' + r.convert(o) + '"}'))
                }) : 3 == e.type && (1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/v2/verify/changePsw", "post", t, "WB", '{"smsCode":"' + r.convert(e.data.smsCode) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                    s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/v2/verify/changePsw", "post", t, "H5", '{"smsCode":"' + r.convert(e.data.smsCode) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","wupData":"' + r.convert(o) + '"}'))
                }))
            },
            Sms: prototype = {
                init: function(e) {
                    this.$parent = e,
                    this.$global = e.$global,
                    this.$message = e.$message,
                    this.$mobile = e.$mobile,
                    this.$item = e.$item,
                    this.$resource = e.$resource
                },
                send: function(e) {
                    var t = "60027"
                      , o = this
                      , n = o.$parent.$parent.$parent
                      , a = o.$mobile
                      , s = o.$message
                      , i = o.$global
                      , r = o.$item;
                    e = n.Util.store(t, n, e),
                    1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangelgn" + i.session, s.encode(i.protocol + "://" + i.domainFunc.login + "." + i.domain + "/web/v2/smsCode", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                        s.send("udb_exchangelgn" + i.session, s.encode(i.protocol + "://" + i.domainFunc.login + "." + i.domain + "/web/v2/smsCode", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","wupData":"' + r.convert(o) + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"}'))
                    })
                }
            }
        },
        Security: prototype = {
            init: function(e) {
                this.$parent = e,
                this.$global = e.$global,
                this.$message = e.$message,
                this.$mobile = e.$mobile,
                this.$item = e.$item
            },
            image: function(e) {
                var t = "60023"
                  , o = this
                  , n = o.$parent.$parent
                  , a = o.$mobile
                  , s = o.$message
                  , i = o.$global
                  , r = o.$item;
                e = n.Util.store(t, n, e, 2),
                1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/imagecode", "post", t, "WB", '{"sessionData":"' + r.convert(e.hasOwnProperty("data") && e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                    s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/imagecode", "post", t, "H5", '{"sessionData":"' + r.convert(e.hasOwnProperty("data") && e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","wupData":"' + r.convert(o) + '"}'))
                })
            }
        }
    },
    o.prototype.Password = {
        init: function(e) {
            this.$parent = e,
            this.$global = e.JSSDK.Global,
            this.$message = e.Message,
            this.$mobile = e.Mobile,
            this.$item = e.Item,
            this.V2.init(this)
        },
        modify: function(e) {
            var t = "20013"
              , o = this
              , n = o.$parent
              , a = o.$mobile
              , s = o.$message
              , i = o.$global
              , r = o.$item;
            e = n.Util.store(t, n, e, 2),
            1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/web/changePswBySms", "post", t, "WB", '{"password":"' + r.convert(e.data.password) + (1 == e.step ? '","smsCode":"' + r.convert(e.data.smsCode) : '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session))) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/wup/changePswBySms", "post", t, "H5", '{"password":"' + r.convert(e.data.password) + (1 == e.step ? '","smsCode":"' + r.convert(e.data.smsCode) : '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session))) + '","wupData":"' + r.convert(o) + '"}'))
            })
        },
        find: function(e) {
            var t = "20017"
              , o = this
              , n = o.$parent
              , a = o.$mobile
              , s = o.$message
              , i = o.$global
              , r = o.$item;
            e = n.Util.store(t, n, e, 2),
            1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/web/findPswBySms", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '","password":"' + r.convert(e.data.password) + (1 == e.step ? '","smsCode":"' + r.convert(e.data.smsCode) : '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session))) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/wup/findPswBySms", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","password":"' + r.convert(e.data.password) + (1 == e.step ? '","smsCode":"' + r.convert(e.data.smsCode) : '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session))) + '","wupData":"' + r.convert(o) + '"}'))
            })
        },
        V2: prototype = {
            init: function(e) {
                this.$parent = e,
                this.$global = e.$global,
                this.$message = e.$message,
                this.$mobile = e.$mobile,
                this.$item = e.$item,
                this.Check.init(this)
            },
            modify: function(e) {
                var t = "60007"
                  , o = this
                  , n = o.$parent.$parent
                  , a = o.$mobile
                  , s = o.$message
                  , i = o.$global
                  , r = o.$item;
                e = n.Util.store(t, n, e, 2),
                1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/web/v2/changePswBySms", "post", t, "WB", '{"password":"' + r.convert(e.data.password) + (1 == e.step ? '","smsCode":"' + r.convert(e.data.smsCode) : "") + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                    s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/wup/v2/changePswBySms", "post", t, "H5", '{"password":"' + r.convert(e.data.password) + (1 == e.step ? '","smsCode":"' + r.convert(e.data.smsCode) : "") + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","wupData":"' + r.convert(o) + '"}'))
                })
            },
            find: function(e) {
                var t = "60009"
                  , o = this
                  , n = o.$parent.$parent
                  , a = o.$mobile
                  , s = o.$message
                  , i = o.$global
                  , r = o.$item;
                e = n.Util.store(t, n, e, 2),
                1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/web/v2/findPswBySms", "post", t, "WB", '{"userName":"' + r.convert(e.data.userName) + '","password":"' + r.convert(e.data.password) + (1 == e.step ? '","smsCode":"' + r.convert(e.data.smsCode) : "") + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                    s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/wup/v2/findPswBySms", "post", t, "H5", '{"userName":"' + r.convert(e.data.userName) + '","password":"' + r.convert(e.data.password) + (1 == e.step ? '","smsCode":"' + r.convert(e.data.smsCode) : "") + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","wupData":"' + r.convert(o) + '"}'))
                })
            },
            Check: prototype = {
                init: function(e) {
                    this.$parent = e,
                    this.$global = e.$global,
                    this.$message = e.$message,
                    this.$mobile = e.$mobile,
                    this.$item = e.$item
                },
                modify: function(e) {
                    var t = "60011"
                      , o = this
                      , n = o.$parent.$parent.$parent
                      , a = o.$mobile
                      , s = o.$message
                      , i = o.$global
                      , r = o.$item;
                    e = n.Util.store(t, n, e, 2),
                    1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/web/v2/modifyPswByCheck", "post", t, "WB", '{"uid":"' + r.convert(e.hasOwnProperty("data") && e.data.hasOwnProperty("uid") ? e.data.uid : n.Cookie.get("udb_uid")) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                        s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/wup/v2/modifyPswByCheck", "post", t, "H5", '{"uid":"' + r.convert(e.hasOwnProperty("data") && e.data.hasOwnProperty("uid") ? e.data.uid : n.Cookie.get("udb_uid")) + '","wupData":"' + r.convert(o) + '"}'))
                    })
                },
                find: function(e) {
                    var t = "60013"
                      , o = this
                      , n = o.$parent.$parent.$parent
                      , a = o.$mobile
                      , s = o.$message
                      , i = o.$global
                      , r = o.$item;
                    e = n.Util.store(t, n, e, 2),
                    1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/web/v2/findPswByCheck", "post", t, "WB", '{"userName":"' + r.convert(e.data.userName) + (e.data.hasOwnProperty("authCode") ? '","authCode":"' + r.convert(e.data.authCode) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) : "") + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                        s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/wup/v2/findPswByCheck", "post", t, "H5", '{"userName":"' + r.convert(e.data.userName) + (e.data.hasOwnProperty("authCode") ? '","authCode":"' + r.convert(e.data.authCode) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) : "") + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '","wupData":"' + r.convert(o) + '"}'))
                    })
                },
                mobile: function(e) {
                    var t = "60017"
                      , o = this
                      , n = o.$parent.$parent.$parent
                      , a = o.$mobile
                      , s = o.$message
                      , i = o.$global
                      , r = o.$item;
                    e = n.Util.store(t, n, e, 2),
                    1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/v2/checkUidMobileFindPsw", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                        s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/sms/v2/checkUidMobileFindPsw", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","sessionData":"' + r.convert(e.data.hasOwnProperty("sessionData") ? e.data.sessionData : n.Cookie.get(i.session)) + '","wupData":"' + r.convert(o) + '"}'))
                    })
                }
            }
        }
    },
    o.prototype.Strategy = {
        init: function(e) {
            this.$parent = e,
            this.$global = e.JSSDK.Global,
            this.$message = e.Message,
            this.$mobile = e.Mobile,
            this.$item = e.Item,
            this.Code.init(this)
        },
        sms: function(e) {
            this.auth("40001", "/web/v2/secondAuthLogin", e)
        },
        image: function(e) {
            this.auth("40003", "/web/v2/antiViolentLogin", e)
        },
        token: function(e) {
            this.auth("40005", "/web/v2/secondAuthLogin", e)
        },
        auth: function(e, t, o) {
            var n = this
              , a = n.$parent
              , s = n.$mobile
              , i = n.$message
              , r = n.$global
              , c = n.$item;
            1 == arguments.length && "object" == typeof e && (o = e,
            4 == o.data.strategy || 128 == o.data.strategy ? (e = "40001",
            t = "/web/v2/antiViolentLogin") : 8 == o.data.strategy ? (e = "40003",
            t = "/web/v2/secondAuthLogin") : 16 == o.data.strategy && (e = "40005",
            t = "/web/v2/secondAuthLogin")),
            o = a.Util.store(e, a, o),
            1 == o.style || 2 == o.style && !s.able() ? i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + t, "post", e, "WB", '{"strategy":"' + c.convert(o.data.strategy) + '","uid":"' + c.convert(o.data.uid) + '","authcode":"' + c.convert(o.data.authcode) + '","sessionData":"' + c.convert(o.data.hasOwnProperty("sessionData") ? o.data.sessionData : a.Cookie.get(r.session)) + '","randomStr":"' + c.convert(o.data.randomStr) + '","remember":"' + c.convert(o.data.remember, 0) + '","behavior":"' + c.convert(o.data.behavior) + '","page":"' + a.Util.href() + '"}')) : 2 == o.style && s.able() && s.get("common", function(n) {
                i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + t, "post", e, "H5", '{"strategy":"' + c.convert(o.data.strategy) + '","uid":"' + c.convert(o.data.uid) + '","authcode":"' + c.convert(o.data.authcode) + '","sessionData":"' + c.convert(o.data.hasOwnProperty("sessionData") ? o.data.sessionData : a.Cookie.get(r.session)) + '","remember":"' + c.convert(o.data.remember, 0) + '","wupData":"' + c.convert(n) + '","behavior":"' + c.convert(o.data.behavior) + '","page":"' + a.Util.href() + '"}'))
            })
        },
        Code: prototype = {
            init: function(e) {
                this.$parent = e,
                this.$global = e.$global,
                this.$message = e.$message,
                this.$mobile = e.$mobile,
                this.$item = e.$item
            },
            sms: function(e) {
                this.code("40020", "/web/v2/smscode", e)
            },
            image: function(e) {
                this.code("40022", "/web/v2/imagecode", e)
            },
            code: function(e, t, o) {
                var n = this
                  , a = n.$parent.$parent
                  , s = n.$mobile
                  , i = n.$message
                  , r = n.$global
                  , c = n.$item;
                1 == arguments.length && "object" == typeof e && (o = e,
                4 == o.data.strategy ? (e = "40022",
                t = "/web/v2/imagecode") : 8 == o.data.strategy && (e = "40020",
                t = "/web/v2/smscode")),
                o = a.Util.store(e, a, o),
                1 == o.style || 2 == o.style && !s.able() ? i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + t, "post", e, "WB", '{"uid":"' + c.convert(o.data.uid) + '","sessionData":"' + c.convert(o.data.hasOwnProperty("sessionData") ? o.data.sessionData : a.Cookie.get(r.session)) + '"}')) : 2 == o.style && s.able() && s.get("common", function(n) {
                    i.send("udb_exchangelgn" + r.session, i.encode(r.protocol + "://" + r.domainFunc.login + "." + r.domain + t, "post", e, "H5", '{"uid":"' + c.convert(o.data.uid) + '","sessionData":"' + c.convert(o.data.hasOwnProperty("sessionData") ? o.data.sessionData : a.Cookie.get(r.session)) + '","wupData":"' + c.convert(n) + '"}'))
                })
            }
        }
    },
    o.prototype.Security = {
        init: function(e) {
            this.$parent = e,
            this.$global = e.JSSDK.Global,
            this.$message = e.Message,
            this.$mobile = e.Mobile,
            this.$item = e.Item,
            this.V2.init(this)
        },
        V2: prototype = {
            init: function(e) {
                this.$parent = e,
                this.$global = e.$global,
                this.$message = e.$message,
                this.$mobile = e.$mobile,
                this.$item = e.$item
            },
            check: function(e) {
                var t = "60019"
                  , o = this
                  , n = o.$parent.$parent
                  , a = o.$mobile
                  , s = o.$message
                  , i = o.$global
                  , r = o.$item;
                e = n.Util.store(t, n, e, 2),
                1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangesec" + i.session, s.encode(i.protocol + "://" + i.domainFunc.security + "." + i.domain + "/web/appeal/checkAccount", "post", t, "WB", '{"user":"' + r.convert(e.data.user) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                    s.send("udb_exchangesec" + i.session, s.encode(i.protocol + "://" + i.domainFunc.security + "." + i.domain + "/wup/appeal/checkAccount", "post", t, "H5", '{"user":"' + r.convert(e.data.user) + '","wupData":"' + r.convert(o) + '"}'))
                })
            }
        },
        SHA1: prototype = {
            hexEncode: function(e) {
                return this.toHex(this.core(this.toArray(e)))
            },
            toArray: function(e) {
                for (var t = (e.length + 8 >> 6) + 1, o = new Array(16 * t), n = 0; 16 * t > n; n++)
                    o[n] = 0;
                for (n = 0; n < e.length; n++)
                    o[n >> 2] |= e.charCodeAt(n) << 24 - 8 * (3 & n);
                return o[n >> 2] |= 128 << 24 - 8 * (3 & n),
                o[16 * t - 1] = 8 * e.length,
                o
            },
            toHex: function(e) {
                for (var t = "0123456789abcdef", o = "", n = 0; n < 4 * e.length; n++)
                    o += t.charAt(e[n >> 2] >> 8 * (3 - n % 4) + 4 & 15) + t.charAt(e[n >> 2] >> 8 * (3 - n % 4) & 15);
                return o
            },
            core: function(e) {
                for (var t = e, o = new Array(80), n = 1732584193, a = -271733879, s = -1732584194, i = 271733878, r = -1009589776, c = 0; c < t.length; c += 16) {
                    for (var d = n, l = a, u = s, p = i, m = r, h = 0; 80 > h; h++) {
                        o[h] = 16 > h ? t[c + h] : this.rol(o[h - 3] ^ o[h - 8] ^ o[h - 14] ^ o[h - 16], 1);
                        var g = this.add(this.add(this.rol(n, 5), this.ft(h, a, s, i)), this.add(this.add(r, o[h]), this.kt(h)));
                        r = i,
                        i = s,
                        s = this.rol(a, 30),
                        a = n,
                        n = g
                    }
                    n = this.add(n, d),
                    a = this.add(a, l),
                    s = this.add(s, u),
                    i = this.add(i, p),
                    r = this.add(r, m)
                }
                return new Array(n,a,s,i,r)
            },
            add: function(e, t) {
                var o = (65535 & e) + (65535 & t)
                  , n = (e >> 16) + (t >> 16) + (o >> 16);
                return n << 16 | 65535 & o
            },
            rol: function(e, t) {
                return e << t | e >>> 32 - t
            },
            ft: function(e, t, o, n) {
                return 20 > e ? t & o | ~t & n : 40 > e ? t ^ o ^ n : 60 > e ? t & o | t & n | o & n : t ^ o ^ n
            },
            kt: function(e) {
                return 20 > e ? 1518500249 : 40 > e ? 1859775393 : 60 > e ? -1894007588 : -899497514
            }
        }
    },
    o.prototype.H5 = {
        init: function(e) {
            this.$parent = e,
            this.$mobile = e.Mobile
        },
        close: function() {
            this.$mobile.close()
        }
    },
    o.prototype.Item = {
        init: function(e) {
            this.$parent = e,
            this.$global = e.JSSDK.Global,
            this.$message = e.Message,
            this.$mobile = e.Mobile,
            this.$item = e.Item,
            this.Verify.init(this),
            this.User.init(this)
        },
        isempty: function(e) {
            return e && "undefined" != e && "" != e ? !1 : !0
        },
        length: function(e) {
            if (e && "undefined" != e && "" != e) {
                var t = e;
                return t.replace(/[^\x00-\xff]/g, "00").length
            }
            return 0
        },
        clearHtml: function(e) {
            return e && "undefined" != e && "" != e ? e.replace(/<[^>]+>/g, "") : ""
        },
        trimPhone: function(e) {
            return e && "undefined" != e && "" != e ? e.replace(/\b(0+)/gi, "") : ""
        },
        convert: function(e, t) {
            return "undefined" == typeof e || "string" != typeof e && "boolean" != typeof e && "number" != typeof e ? "undefined" != typeof t ? t : "" : "string" == typeof e ? e.toString().replace(new RegExp('([\"\"])',"g"), '\\"') : e.toString()
        },
        mask: function(e, t, o, babann) {
            if (void 0 != e && void 0 != t && 1 == t) {
                for (var a = "", s = e.length - n - 1, i = 0; i < e.length; i++)
                    a += o > i || i > s ? e[i] : "*";
                return a
            }
            return e
        },
        substring: function(e, t) {
            if (e && "undefined" != e && "" != e) {
                if (e.replace(/[^\x00-\xff]/g, "hy__udb").length <= t)
                    return e;
                for (var o = Math.floor(t / 2), n = o; n < e.length; n++)
                    if (e.substr(0, n).replace(/[^\x00-\xff]/g, "hy__udb").length >= t)
                        return e.substr(0, n) + "...";
                return e
            }
            return ""
        },
        Verify: prototype = {
            init: function(e) {
                this.$parent = e,
                this.$global = e.$global,
                this.$message = e.$message,
                this.$mobile = e.$mobile,
                this.$item = e.$item,
                this.Server.init(this)
            },
            account: function(e, t) {
                return t && 1 == t ? e && "" != e ? e.length < 50 ? 0 : 2 : 1 : t && 2 == t ? e && "" != e ? e.length > 25 ? 2 : /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{3,25}$/.test(e) ? 0 : 3 : 1 : 100
            },
            nikname: function(e, t) {
                return t && 1 == t ? e && "" != e ? 0 : 1 : e && "" != e ? e.length < 20 ? /<|>/.test(e) ? 3 : 0 : 2 : 1
            },
            password: function(e, t) {
                return t && 1 == t ? e && "" != e ? 0 : 1 : e && "" != e ? e.length > 20 ? 2 : /^(?!\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?![!#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]]+$)[a-zA-Z0-9!#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]]{6,20}$/.test(e) ? 0 : 3 : 1
            },
            code: function(e, t) {
                return t && 1 == t ? e && "" != e ? 0 : 1 : e && "" != e ? e.length > 6 ? 2 : /^\d{6}$/.test(e) ? 0 : 3 : 1
            },
            phone: function(e) {
                return e && "" != e && /^([0-9]*)\d{8,16}$/.test(e) ? !0 : !1
            },
            Server: prototype = {
                init: function(e) {
                    this.$parent = e,
                    this.$global = e.$global,
                    this.$message = e.$message,
                    this.$mobile = e.$mobile,
                    this.$item = e.$item,
                    this.V2.init(this)
                },
                phone: function(e) {
                    if (e.data.phone && "" != e.data.phone && /^([0-9]*)\d{8,16}$/.test(e.data.phone)) {
                        var t = "20019"
                          , o = this
                          , n = o.$parent.$parent.$parent
                          , a = o.$mobile
                          , s = o.$message
                          , i = o.$global
                          , r = o.$item;
                        return e = n.Util.store(t, n, e),
                        1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/web/mobileRegisted", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                            s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/wup/mobileRegisted", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","wupData":"' + r.convert(o) + '"}'))
                        }),
                        !0
                    }
                    return !1
                },
                V2: prototype = {
                    init: function(e) {
                        this.$parent = e,
                        this.$global = e.$global,
                        this.$message = e.$message,
                        this.$mobile = e.$mobile,
                        this.$item = e.$item
                    },
                    phone: function(e) {
                        if (e.data.phone && "" != e.data.phone && /^([0-9]*)\d{8,16}$/.test(e.data.phone)) {
                            var t = "60015"
                              , o = this
                              , n = o.$parent.$parent.$parent.$parent
                              , a = o.$mobile
                              , s = o.$message
                              , i = o.$global
                              , r = o.$item;
                            return e = n.Util.store(t, n, e),
                            1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/web/v2/mobileIsRegist", "post", t, "WB", '{"phone":"' + r.convert(e.data.phone) + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                                s.send("udb_exchangereg" + i.session, s.encode(i.protocol + "://" + i.domainFunc.register + "." + i.domain + "/wup/v2/mobileIsRegist", "post", t, "H5", '{"phone":"' + r.convert(e.data.phone) + '","wupData":"' + r.convert(o) + '"}'))
                            }),
                            !0
                        }
                        return !1
                    }
                }
            }
        },
        User: prototype = {
            init: function(e) {
                this.$parent = e,
                this.$global = e.$global,
                this.$message = e.$message,
                this.$mobile = e.$mobile,
                this.$item = e.$item,
                this.V2.init(this)
            },
            V2: prototype = {
                init: function(e) {
                    this.$parent = e,
                    this.$global = e.$global,
                    this.$message = e.$message,
                    this.$mobile = e.$mobile,
                    this.$item = e.$item
                },
                profile: function(e) {
                    var t = "70011"
                      , o = this
                      , n = o.$parent.$parent.$parent
                      , a = o.$mobile
                      , s = o.$message
                      , i = o.$global
                      , r = o.$item;
                    e = n.Util.store(t, n, e),
                    1 == e.style || 2 == e.style && !a.able() ? s.send("udb_exchangelgn" + i.session, s.encode(i.protocol + "://" + i.domainFunc.login + "." + i.domain + "/web/v2/userProfile", "post", t, "WB", '{"uid":"' + r.convert(e.data.uid) + '","ticket":"' + r.convert(e.data.ticket) + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"}')) : 2 == e.style && a.able() && a.get("common", function(o) {
                        s.send("udb_exchangelgn" + i.session, s.encode(i.protocol + "://" + i.domainFunc.login + "." + i.domain + "/wup/v2/userProfile", "post", t, "H5", '{"uid":"' + r.convert(e.data.uid) + '","ticket":"' + r.convert(e.data.ticket) + '","wupData":"' + r.convert(o) + '","behavior":"' + r.convert(e.data.behavior) + '","page":"' + n.Util.href() + '"}'))
                    })
                }
            }
        }
    },
    o.prototype.Static = {
        init: function(e) {
            this.$parent = e,
            this.$global = e.JSSDK.Global,
            this.$message = e.Message,
            this.ByPass.init(this)
        },
        ByPass: prototype = {
            init: function(e) {
                this.$parent = e,
                this.$global = e.$global,
                this.$message = e.$message
            },
            sync: function(e) {
                var t = "50001"
                  , o = this
                  , n = o.$parent.$parent
                  , a = o.$message
                  , s = o.$global
                  , i = n.Cookie.get("udb_passdata");
                !/^[0-9]+$/g.test(i) || isNaN(parseInt(i)) ? e && "undefined" != typeof e && e.hasOwnProperty("data") && (e.data.success = function(e) {
                    /^[0-9]+$/g.test(e.data.bypass) && !isNaN(parseInt(e.data.bypass)) && (s.byPass = e.data.bypass,
                    n.Cookie.set("udb_passdata", s.byPass, s.domain))
                }
                ,
                s = n.Util.extend(s, e.global),
                e.data = n.Util.store(t, n, e.data),
                a.jsonp(0, s.protocol + "://" + s.domainFunc.api + "." + s.domain + "/web/hy/bypass/getBypass", "jsonp", t, "WB", e.data.time, "{}")) : s.byPass = i
            },
            get: function() {
                var e = this
                  , t = e.$parent.$parent
                  , o = e.$global
                  , n = t.Cookie.get("udb_passdata");
                return /^[0-9]+$/g.test(n) && isNaN(parseInt(n)) ? (o.byPass = parseInt(byPass),
                o.byPass) : o.byPass
            }
        }
    },
    o.prototype.Gui = {
        init: function(e) {
            this.$parent = e
        },
        hint: function(t, o, n, a, s, i, r) {
            if (n && n.parent() && void 0 != t)
                if (0 == t) {
                    var c = n.parents("div.UDBSdkLgn-content").find("div.UDBSdkLgn-tips");
                    void 0 != c && c.length > 0 && (clearTimeout(c.attr("timer")),
                    c.remove()),
                    c = $("<div class='UDBSdkLgn-tips'" + (void 0 != a && a && "" != a ? " style='" + a + "'" : "") + "><div>" + o + "</div></div>"),
                    c.insertBefore(n.parent()),
                    (void 0 == i || 0 != i) && n.focus(),
                    c.attr("timer", setTimeout(function() {
                        n.parents("div.UDBSdkLgn-content").find("div.UDBSdkLgn-tips").remove()
                    }, void 0 != s && s && s > 0 ? s : 6e3))
                } else if (1 == t || 2 == t) {
                    var c = n.parents(1 == t ? "div.UDBSdkLgn-content" : "div.UDBSdkReg-content").find(1 == t ? "div.UDBSdkLgn-regError" : "div.UDBSdkReg-error");
                    if (void 0 != c && c.length > 0) {
                        var d = c.attr("timer");
                        void 0 != d && (clearTimeout(c.attr("timer")),
                        c.removeAttr("timer").removeAttr("object")),
                        1 == t ? c.remove() : c.addClass("UDBSdkReg-none")
                    }
                    2 == t ? c.removeClass("UDBSdkReg-none").html("<i class='icon'></i>" + o) : (c = $("<div class='UDBSdkLgn-regError'><i></i>" + o + "</div>"),
                    c.insertAfter(n.parent())),
                    (void 0 == i || 0 != i) && (n.focus(),
                    c.attr("object", n.attr("name"))),
                    c.attr("timer", setTimeout(function() {
                        1 == t ? n.parents("div.UDBSdkLgn-content").find("div.UDBSdkLgn-regError").remove() : (n.parents("div.UDBSdkReg-content").find("div.UDBSdkReg-error").addClass("UDBSdkReg-none"),
                        c.removeAttr("timer").removeAttr("object")),
                        r && "function" == typeof r && r.call(e)
                    }, void 0 != s && s && s > 0 ? s : 2 == t ? 12e3 : 6e3))
                } else if (3 == t) {
                    var c = $("body").find(void 0 != a && "" != a ? a : "UDBSdkReg-tips");
                    void 0 != c && c.length > 0 && (clearTimeout(c.attr("timer")),
                    c.remove()),
                    c = $("<div class='" + (void 0 != a && "" != a ? a : "UDBSdkReg-tips") + "'>" + o + "<div>"),
                    $("body").append(c),
                    c.attr("timer", setTimeout(function() {
                        $("body").find(void 0 != a && "" != a ? a : "div.UDBSdkReg-tips").remove(),
                        r && "function" == typeof r && r.call(e)
                    }, void 0 != s && s && s > 0 ? s : 2e3))
                }
        }
    },
    o.prototype.location = function(t) {
        e.location.href = t
    }
    ,
    o.prototype.listen = function(t) {
        var o = this
          , n = o.JSSDK.Global;
        try {
            if (e.postMessage)
                e.addEventListener ? e.addEventListener("message", function(e) {
                    var o = e.origin ? e.origin.toLowerCase() : e.origin;
                    o && (o.indexOf(n.domainFunc.login + "." + n.domain) > -1 || o.indexOf(n.domainFunc.register + "." + n.domain) > -1 || o.indexOf(n.domainFunc.api + "." + n.domain) > -1 || o.indexOf(n.domainFunc.thrid + "." + n.domain) > -1 || o.indexOf(n.domainFunc.security + "." + n.domain) > -1 || o.indexOf(n.domainFunc.html + "." + n.domain) > -1) && t.message.call(t, e.data)
                }, !1) : e.attachEvent && e.attachEvent("onmessage", function(e) {
                    var o = e.origin ? e.origin.toLowerCase() : e.origin;
                    o && (o.indexOf(n.domainFunc.login + "." + n.domain) > -1 || o.indexOf(n.domainFunc.register + "." + n.domain) > -1 || o.indexOf(n.domainFunc.api + "." + n.domain) > -1 || o.indexOf(n.domainFunc.thrid + "." + n.domain) > -1 || o.indexOf(n.domainFunc.security + "." + n.domain) > -1 || o.indexOf(n.domainFunc.html + "." + n.domain) > -1) && t.message.call(t, e.data)
                });
            else {
                var a = "";
                setInterval(function() {
                    e.name !== a && (a = e.name,
                    t.message.call(t, a))
                }, 5)
            }
        } catch (s) {
            o.Message.error("COR_LIS", "ERROR", encodeURIComponent(s.message))
        }
    }
    ,
    o.prototype.Util = {
        init: function(e) {
            this.$parent = e
        },
        extend: function(e, t) {
            for (var o in t)
                t.hasOwnProperty(o) && (e[o] = t[o]);
            return e
        },
        store: function(e, t, o, n) {
            var a = {
                action: 1,
                style: 1,
                busiurl: "https://www.huya.com",
                mobcall: 1,
                pcecall: 1,
                start: function() {},
                success: function() {},
                complete: function() {},
                strategy: function() {},
                error: function() {}
            }
              , s = t.JSSDK.Command;
            return n && 1 == n ? (a.width = 500,
            a.height = 600,
            a.type = "qq",
            a.terminal = "web",
            a.win = "0") : n && 2 == n ? a.step = 1 : n && 3 == n && (a.type = 1),
            o = this.extend(a, o),
            s[e].action = o.action,
            s[e].style = o.style,
            s[e].mobcall = o.mobcall,
            s[e].pcecall = o.pcecall,
            s[e].busiurl = o.busiurl,
            s[e].start = o.start,
            s[e].success = o.success,
            s[e].complete = o.complete,
            s[e].strategy = o.strategy,
            s[e].error = o.error,
            s[e].time = this.guid(2),
            s[e].uri = e,
            o
        },
        guid: function(e) {
            var t = new Date;
            return e && 1 == e ? Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()) - Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0) : e && 2 == e ? Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()) : "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0
                  , o = "x" == e ? t : 3 & t | 8;
                return o.toString(16)
            })
        },
        reduce: function(e) {
            if (e.hasOwnProperty("data") && e.data && (e.data.hasOwnProperty("sessionData") && delete e.data.sessionData,
            e.data.hasOwnProperty("wupData") && delete e.data.wupData,
            e.data.hasOwnProperty("domainUrlList") && delete e.data.domainUrlList,
            e.data.hasOwnProperty("data") && delete e.data.data,
            e.data.hasOwnProperty("sign") && delete e.data.sign,
            e.data.hasOwnProperty("status") && delete e.data.status,
            e.data.hasOwnProperty("ticket5060") && delete e.data.ticket5060,
            e.data.hasOwnProperty("biztoken") && delete e.data.biztoken,
            e.data.hasOwnProperty("avatar") && delete e.data.avatar,
            e.data.hasOwnProperty("openid") && delete e.data.openid,
            e.data.hasOwnProperty("regOrigin") && delete e.data.regOrigin,
            e.data.hasOwnProperty("passport") && delete e.data.passport,
            e.data.hasOwnProperty("strategys") && e.data.strategys && void 0 != e.data.strategys && e.data.strategys.length > 0))
                for (var t = 0; t < e.data.strategys.length; t++)
                    e.data.strategys[t].hasOwnProperty("data") && delete e.data.strategys[t].data,
                    e.data.strategys[t].hasOwnProperty("sessionData") && delete e.data.strategys[t].sessionData
        },
        offline: function() {
            return void 0 === typeof e.navigator.onLine || e.navigator.onLine ? !1 : !0
        },
        href: function() {
            return this.$parent.JSSDK.Global.pageUrl ? this.$parent.JSSDK.Global.pageUrl : location && void 0 != location && location.href && void 0 != location.href ? encodeURIComponent(location.href) : ""
        }
    },
    o.prototype.Html = {
        init: function(e) {
            this.$parent = e
        },
        add: function(o) {
            var n = 0
              , a = new Array;
            if (o && o.urlList && "[object Array]" == Object.prototype.toString.call(o.urlList))
                if (o.urlList.length > 0) {
                    for (var s = 0; s < o.urlList.length; s++)
                        o.urlList[s] && void 0 != o.urlList[s] && a.push(o.urlList[s]);
                    for (var s = 0; s < a.length; s++) {
                        var i = a[s];
                        if (i && "object" == typeof i || "string" == typeof i) {
                            var r = i.id ? t.getElementById(i.id) : void 0;
                            if (null == r || void 0 == r) {
                                var c = t.createElement(o.tag);
                                if ("script" == o.tag.toLowerCase() || "link" == o.tag.toLowerCase() ? c.type = "script" == o.tag.toLowerCase() ? "text/javascript" : "text/css" : c.style.cssText = "border:0;width:0;height:0;",
                                o.success && "function" == typeof o.success && (c.attachEvent ? c.attachEvent("onload", function(t) {
                                    n++,
                                    n == a.length && o.success.call(e, t)
                                }) : c.addEventListener("load", function(t) {
                                    n++,
                                    n == a.length && o.success.call(e, t)
                                }, !0)),
                                o.error && "function" == typeof o.error && (c.attachEvent ? c.attachEvent("onerror", function(t) {
                                    o.error.call(e, t)
                                }) : c.addEventListener("error", function(t) {
                                    o.error.call(e, t)
                                }, !0)),
                                "object" == typeof i ? (i.id && (c.id = i.id),
                                c.src = i.url) : c.src = i,
                                "script" == o.tag.toLowerCase() || "link" == o.tag.toLowerCase()) {
                                    var d = t.getElementsByTagName("head")[0];
                                    d && d.appendChild(c)
                                } else if (o.pos && "document" == o.pos)
                                    c.style.cssText = "display:none;",
                                    t.documentElement.appendChild(c);
                                else {
                                    var l = t.createElement("div");
                                    l.style.cssText = "display:none;",
                                    l.appendChild(c),
                                    t.body.insertBefore(l, t.body.lastChild)
                                }
                            } else
                                r && (r.src = i.url)
                        }
                    }
                } else
                    o.success && "function" == typeof o.success && o.success.call(e);
            else
                o.success && "function" == typeof o.success && o.success.call(e)
        },
        remove: function(o) {
            if (o) {
                if (o.id) {
                    var n = t.getElementById(o.id);
                    n && n.parentNode.removeChild(n)
                }
                o.callback && "function" == typeof o.callback && o.callback.call(e)
            }
        }
    },
    o.prototype.Callback = {
        init: function(e) {
            this.$parent = e,
            this.$message = e.Message,
            this.$global = e.JSSDK.Global,
            this.$resource = e.JSSDK.Resource,
            this.$report = e.Report,
            this.$command = e.JSSDK.Command,
            this.$mobile = e.Mobile,
            this.$pc = e.PC,
            this.$util = e.Util
        },
        message: function(t) {
            var o = this
              , n = o.$parent
              , a = o.$message
              , s = o.$mobile
              , i = (o.$pc,
            o.$global)
              , r = o.$resource
              , c = o.$command
              , d = o.$report
              , l = o.$util
              , u = "string" == typeof t ? a.decode(t) : t;
            if (u && "undefined" != typeof u && "object" == typeof u)
                if (u.hasOwnProperty("uri") && u.hasOwnProperty("version") && u.hasOwnProperty("context") && u.hasOwnProperty("returnCode") && u.hasOwnProperty("message") && u.hasOwnProperty("description"))
                    if (!u.hasOwnProperty("exchange") || u.hasOwnProperty("exchange") && (u.exchange == i.exchange || "udb_session" == i.session)) {
                        var p = (parseInt(u.uri) - 1).toString()
                          , m = c[p];
                        if (void 0 != m && m) {
                            try {
                                d.info(m, u)
                            } catch (h) {}
                            m && m.hasOwnProperty("start") && m.start && "function" == typeof m.start && m.start.call(e, u),
                            "10002" == u.uri || "10010" == u.uri || "10014" == u.uri ? o.before(u, m, function() {
                                u.hasOwnProperty("data") && u.data && u.data.hasOwnProperty("domainUrlList") && u.data.domainUrlList && u.data.domainUrlList.length > 0 ? n.Html.add({
                                    tag: "iframe",
                                    urlList: u.data.domainUrlList,
                                    success: function() {
                                        o.handle(u, m, function() {
                                            m.hasOwnProperty("mobcall") && m.mobcall && 1 == m.mobcall && s.message(u.uri, u.data.wupData)
                                        })
                                    }
                                }) : o.handle(u, m, function() {
                                    m.hasOwnProperty("mobcall") && m.mobcall && 1 == m.mobcall && s.message(u.uri, u.data.wupData)
                                })
                            }) : "10012" == u.uri || "20006" == u.uri || "60002" == u.uri || "60030" == u.uri || "60024" == u.uri ? o.before(u, m, function() {
                                u.hasOwnProperty("data") && u.data && u.data.hasOwnProperty("sessionData") && null != u.data.sessionData ? n.Cookie.set(i.session, u.data.sessionData) : n.Cookie.remove(i.session),
                                u.hasOwnProperty("data") && u.data && u.data.hasOwnProperty("domainUrlList") && u.data.domainUrlList && u.data.domainUrlList.length > 0 ? n.Html.add({
                                    tag: "iframe",
                                    urlList: u.data.domainUrlList,
                                    success: function() {
                                        o.handle(u, m, function() {
                                            m.hasOwnProperty("mobcall") && m.mobcall && 1 == m.mobcall && s.message(u.uri, u.data.wupData)
                                        })
                                    }
                                }) : o.handle(u, m, function() {
                                    m.hasOwnProperty("mobcall") && m.mobcall && 1 == m.mobcall && s.message(u.uri, u.data.wupData)
                                })
                            }) : "20010" == u.uri || "20012" == u.uri || "60004" == u.uri || "60006" == u.uri || "60014" == u.uri || "60018" == u.uri || "60012" == u.uri || "60020" == u.uri || "60028" == u.uri ? o.before(u, m, function() {
                                u.hasOwnProperty("data") && u.data && u.data.hasOwnProperty("sessionData") && null != u.data.sessionData && n.Cookie.set(i.session, u.data.sessionData),
                                o.handle(u, m)
                            }) : "20014" == u.uri || "20018" == u.uri || "60010" == u.uri || "60008" == u.uri ? o.before(u, m, function() {
                                n.Cookie.remove(i.session),
                                n.Html.add({
                                    tag: "iframe",
                                    urlList: n.Cookie.url(i.domainFunc.hasOwnProperty("login") && i.domainFunc.login ? i.domainFunc.login : "udblgn", "/web/logout?" + n.Util.guid(1)),
                                    success: function() {
                                        o.handle(u, m, function() {
                                            m.hasOwnProperty("mobcall") && m.mobcall && 1 == m.mobcall && s.message(u.uri, u.data.wupData)
                                        })
                                    }
                                })
                            }) : "20020" == u.uri || "60016" == u.uri || "60022" == u.uri || "70012" == u.uri ? o.before(u, m, function() {
                                o.handle(u, m)
                            }) : "70002" == u.uri || "70004" == u.uri || "70006" == u.uri || "70008" == u.uri || "70010" == u.uri ? o.before(u, m, function() {
                                o.handle(u, m)
                            }) : "30002" == u.uri || "30004" == u.uri || "30006" == u.uri || "30008" == u.uri || "40002" == u.uri || "40004" == u.uri || "40006" == u.uri || "60026" == u.uri ? o.before(u, m, function() {
                                n.Cookie.remove(i.session),
                                o.handle(u, m, function() {
                                    m.hasOwnProperty("mobcall") && m.mobcall && 1 == m.mobcall && s.message(u.uri, u.data.wupData)
                                })
                            }) : "40021" == u.uri || "40023" == u.uri ? o.before(u, m, function() {
                                u.hasOwnProperty("data") && u.data && u.data.hasOwnProperty("sessionData") && null != u.data.sessionData && n.Cookie.set(i.session, u.data.sessionData),
                                o.handle(u, m, function() {
                                    m.hasOwnProperty("mobcall") && m.mobcall && 1 == m.mobcall && s.message(u.uri, u.data.wupData)
                                })
                            }) : "50002" == u.uri && o.before(u, m, function() {
                                o.handle(u, m)
                            }),
                            m && m.hasOwnProperty("complete") && m.complete && "function" == typeof m.complete && m.complete.call(e, u)
                        } else if (i.hasOwnProperty("error") && i.error && "function" == typeof i.error) {
                            var g = !1;
                            for (var p in r.URI)
                                if (r.URI[p] == u.uri) {
                                    for (var h in r.EXCEPT[p])
                                        if (r.EXCEPT[p][h] == u.returnCode) {
                                            g = !0,
                                            u.description = r.MESSAGE["2052" == i.lcid || "1033" == i.lcid ? i.lcid : "1033"][p][h],
                                            u.context = "ER-" + i.guid + "-" + n.Item.convert(n.Cookie.get("__yamid_new")) + "-" + n.Item.convert(n.Cookie.get("guid"));
                                            try {
                                                d.error({
                                                    uri: u.uri
                                                }, u)
                                            } catch (h) {}
                                            i.error.call(e, u);
                                            break
                                        }
                                    break
                                }
                            g || (l.reduce(u),
                            a.error("COR_CAL", "UNKNOWN", a.stringify(u)))
                        }
                    } else
                        "330103" == u.uri && i.hasOwnProperty("error") && i.error && "function" == typeof i.error ? i.error.call(e, u) : (l.reduce(u),
                        a.error("COR_CAL", "EXCHANGE", a.stringify(u)));
                else
                    a.error("COR_CAL", "FORMAT", t);
            else
                a.error("COR_CAL", "PARSE", t)
        },
        before: function(t, o, n) {
            var a = this
              , s = a.$parent
              , i = a.$global;
            if (t && "0" == t.returnCode && n && "function" == typeof n)
                n.call(e);
            else if (o && o.hasOwnProperty("error") && o.error && "function" == typeof o.error) {
                if (("10030" == t.returnCode || "70001" == t.returnCode || "10039" == t.returnCode) && t.hasOwnProperty("data") && null != t.data && t.data.hasOwnProperty("sessionData") && null != t.data.sessionData && t.data.hasOwnProperty("strategys") && null != t.data.strategys && (s.Cookie.set(i.session, t.data.sessionData),
                o.hasOwnProperty("strategy") && o.strategy && "function" == typeof o.strategy))
                    return void o.strategy.call(e, t);
                o.error.call(e, t)
            } else
                i.hasOwnProperty("error") && i.error && "function" == typeof i.error && i.error.call(e, t)
        },
        handle: function(t, o, n) {
            var a = this
              , s = a.$parent;
            o && o.hasOwnProperty("success") && o.success && "function" == typeof o.success && o.success.call(e, t),
            o && o.hasOwnProperty("style") && o.style && 1 == o.style && o.hasOwnProperty("action") && o.action && 2 == o.action && o.hasOwnProperty("busiurl") && o.busiurl && "" != o.busiurl ? s.location(o.busiurl) : o && o.hasOwnProperty("style") && o.style && 2 == o.style && n && "function" == typeof n && t && t.hasOwnProperty("data") && t.data && n.call(e)
        }
    },
    o.prototype.Message = {
        init: function(e) {
            this.$parent = e,
            this.$global = e.JSSDK.Global,
            this.$resource = e.JSSDK.Resource,
            this.$report = e.Report,
            this.$item = e.Item,
            this.$cookie = e.Cookie
        },
        send: function(o, n) {
            var a = t.getElementById(o);
            if (a) {
                var s = a.contentWindow;
                s ? e.postMessage ? s.postMessage(n, a.getAttribute("src")) : s.name = n : this.error("COR_SND", "NOTFOUND")
            } else
                this.error("COR_SND", "NOTINIT")
        },
        jsonp: function(o, n, a, s, i, r, c, d, l, u) {
            var p = this
              , d = void 0 == d ? "JSonp" + p.$parent.Util.guid(2) : d
              , m = t.getElementsByTagName("head")[0]
              , h = t.createElement("script");
            m.appendChild(h),
            h.async = !0,
            e[d] = function(t) {
                clearTimeout(h.timer),
                e[d] = null,
                m.removeChild(h),
                0 == o ? e.postMessage ? e.postMessage(p.stringify(t), "*") : e.name = p.stringify(t) : 1 == o && l.call(e, t)
            }
            ,
            h.timer = setTimeout(function() {
                clearTimeout(h.timer),
                e[d] = null,
                m.removeChild(h),
                0 == o ? p.error("COR_JNP", "TIMEOUT") : 1 == o && u.call(e)
            }, r > 0 ? r : 3e3),
            h.onerror = function() {
                clearTimeout(h.timer),
                e[d] = null,
                m.removeChild(h),
                0 == o ? p.error("COR_JNP", "LDERROR") : 1 == o && u.call(e)
            }
            ,
            0 == o ? h.src = n + "?callback=" + d + "&request=" + p.encode(n, a, s, i, c) : 1 == o && (h.src = n + "?callback=" + d + (void 0 != c && "" != c ? "&" + c : ""))
        },
        encode: function(e, t, o, n, a, s) {
            var i = this
              , r = i.$parent
              , c = i.$resource
              , d = i.$global
              , l = i.$item
              , u = i.$cookie;
            return encodeURIComponent("{" + ("jsonp" == t ? "" : '"url":"' + e + '","method":"' + t + '",') + '"uri":"' + o + '","version":"' + c.VERSION + '","context":"' + n + "-" + d.guid + "-" + l.convert(u.get("__yamid_new")) + "-" + l.convert(u.get("guid")) + '","appId":"' + d.appid + '","authId":"' + (s || "") + '","sdid":"' + ("" != d.sdid && d.sdid.getDeviceId ? d.sdid.getDeviceId() : "") + '","lcid":"' + d.lcid + '","byPass":"' + d.byPass + '","requestId":"' + r.Util.guid(1) + '","data":' + a + "}")
        },
        decode: function(t) {
            try {
                return e.JSON && e.JSON.parse ? e.JSON.parse(decodeURIComponent(t)) : new Function("return " + decodeURIComponent(t))()
            } catch (o) {
                return void 0
            }
        },
        error: function(t, o, n) {
            var a = this
              , s = a.$resource
              , i = a.$global
              , r = a.$report
              , c = a.$item
              , d = a.$cookie
              , l = {
                uri: s.URI[t],
                version: s.VERSION,
                context: "ER-" + i.guid + "-" + c.convert(d.get("__yamid_new")) + "-" + c.convert(d.get("guid")),
                returnCode: s.EXCEPT[t][o],
                message: c.convert(n),
                description: s.MESSAGE["2052" == i.lcid || "1033" == i.lcid ? i.lcid : "1033"][t][o]
            };
            try {
                r.error({
                    uri: s.URI[t]
                }, l)
            } catch (u) {}
            "SDK_INF" != t && "EVT_RPT" != t && i.hasOwnProperty("error") && i.error && "function" == typeof i.error && i.error.call(e, l)
        },
        stringify: function(t) {
            if (e.JSON && e.JSON.stringify)
                return JSON.stringify(t);
            var o = typeof t;
            if ("object" != o || null == t)
                return "string" == o && (t = null != t && "" != t ? '"' + t.replace(/\\/g, "\\\\").replace(/\"/g, '\\"') + '"' : '"' + t + '"'),
                String(t);
            var n, a, s = [], i = t && t.constructor == Array, r = arguments.callee;
            for (n in t)
                a = t[n],
                o = typeof a,
                t.hasOwnProperty(n) && ("string" == o ? a = null != a && "" != a ? '"' + a.replace(/\\/g, "\\\\").replace(/\"/g, '\\"') + '"' : '"' + a + '"' : "object" == o && null !== a && (a = r(a)),
                s.push((i ? "" : '"' + n + '":') + String(a)));
            return (i ? "[" : "{") + String(s) + (i ? "]" : "}")
        }
    },
    o.prototype.PC = {
        init: function(e) {
            this.version = "",
            this.jsType = 0,
            this.$parent = e,
            this.$message = e.Message,
            this.$resource = e.JSSDK.Resource
        },
        able: function() {
            return this.version && "" != this.version && "HYUDBMSDK" == this.version.slice(0, "HYUDBMSDK".length) ? !0 : !1
        },
        check: function(t) {
            var o = this
              , n = o.$message;
            try {
                if (o.version = e.external.HYUDBMSDKVersion,
                void 0 != o.version && "" != o.version) {
                    o.version = o.version.toUpperCase(),
                    0 == o.jsType && (o.jsType = 1),
                    t && t.success && "function" == typeof t.success && t.success.call(e, o);
                    try {
                        n.error("SDK_INF", "PCECHK", o.version)
                    } catch (a) {}
                }
            } catch (a) {
                o.version = "",
                n.error("COR_PCE", "NOTSUPT", encodeURIComponent(a.message))
            }
        },
        get: function(t, o) {
            if (t && "qrcommon" == t) {
                if (1 == this.jsType) {
                    var n = e.external.HYUDBMSDKQUrlCommon;
                    o && "function" == typeof o && o.call(e, n)
                }
                return void 0
            }
            return t && "version" == t ? this.version : void 0
        },
        message: function(t, o) {
            var n = this
              , a = n.$resource
              , s = n.$message;
            if (a.hasOwnProperty("MURTYPE") && a.MURTYPE[t] && void 0 != o && null != o && "" != o && 1 == n.jsType) {
                e.external.HYUDBMSDKCallback(o);
                try {
                    s.error("SDK_INF", "PCECAL", t + "-" + a.MURTYPE[t])
                } catch (i) {}
            }
        },
        quick: function(t, o) {
            1 == this.jsType && e.external.HYUDBMSDKQuickLogin(t, o)
        },
        openUrl: function(t) {
            1 == this.jsType && e.external.HYUDBMSDKOpenUrl(t)
        },
        close: function() {
            1 == this.jsType && e.external.HYUDBMSDKClose()
        },
        bind: function(t) {
            1 == this.jsType && e.external.HYUDBMSDKThirdBind(t)
        }
    },
    o.prototype.Mobile = {
        init: function(e) {
            this.version = "",
            this.jsType = 0,
            this.hasLogin = !1,
            this.$parent = e,
            this.$message = e.Message,
            this.$resource = e.JSSDK.Resource,
            this.JSBridge.init(this)
        },
        able: function() {
            return this.version && "" != this.version && "HYUDBMSDK" == this.version.slice(0, "HYUDBMSDK".length) ? !0 : !1
        },
        login: function() {
            return this.hasLogin
        },
        check: function(t) {
            var o = this
              , n = o.$message;
            try {
                t && "huya" == t.name ? o.JSBridge.setup(function(a) {
                    a.invoke("HYUDBMSDKVersion", {}, {
                        success: function(a) {
                            o.version = a.version.toUpperCase(),
                            0 == o.jsType && (o.jsType = 1),
                            t && t.success && "function" == typeof t.success && t.success.call(e, o);
                            try {
                                n.error("SDK_INF", "MOBLCHK", o.version)
                            } catch (s) {}
                        }
                    })
                }) : o.setup(function(a) {
                    a.callHandler("HYUDBMSDKVersion", function(a) {
                        o.version = a.toUpperCase(),
                        0 == o.jsType && (o.jsType = 2),
                        t && t.success && "function" == typeof t.success && t.success.call(e, o);
                        try {
                            n.error("SDK_INF", "MOBLCHK", o.version)
                        } catch (s) {}
                    })
                })
            } catch (a) {
                o.version = "",
                n.error("COR_MBL", "NOTSUPT", encodeURIComponent(a.message))
            }
        },
        get: function(t, o) {
            return t && "common" == t ? void (2 == this.jsType ? this.setup(function(t) {
                t.callHandler("HYUDBMSDKCommon", function(t) {
                    o && "function" == typeof o && o.call(e, t)
                })
            }) : 1 == this.jsType && this.JSBridge.invoke("HYUDBMSDKCommon", {}, {
                success: function(t) {
                    o && "function" == typeof o && o.call(e, t.common)
                }
            })) : t && "qrcommon" == t ? void (2 == this.jsType ? this.setup(function(t) {
                t.callHandler("HYUDBMSDKQUrlCommon", function(t) {
                    o && "function" == typeof o && o.call(e, t)
                })
            }) : 1 == this.jsType && this.JSBridge.invoke("HYUDBMSDKQUrlCommon", {}, {
                success: function(t) {
                    o && "function" == typeof o && o.call(e, t.common)
                }
            })) : t && "version" == t ? this.version : void 0
        },
        message: function(e, t) {
            var o = this
              , n = o.$resource
              , a = o.$message;
            n.hasOwnProperty("MURTYPE") && n.MURTYPE[e] && void 0 != t && null != t && "" != t && (2 == this.jsType ? o.setup(function(o) {
                o.callHandler("HYUDBMSDKCallback", '{"type":"' + n.MURTYPE[e] + '","data":"' + encodeURIComponent(t) + '"}', function() {
                    try {
                        a.error("SDK_INF", "MOBLCAL", e + "-" + n.MURTYPE[e])
                    } catch (t) {}
                })
            }) : 1 == this.jsType && o.JSBridge.invoke("HYUDBMSDKCallback", {
                type: n.MURTYPE[e],
                data: encodeURIComponent(t)
            }, {
                success: function() {
                    try {
                        a.error("SDK_INF", "MOBLCAL", e + "-" + n.MURTYPE[e])
                    } catch (t) {}
                }
            }))
        },
        close: function() {
            var e = this;
            2 == this.jsType ? e.setup(function(e) {
                e.callHandler("HYUDBMSDKClose", function() {})
            }) : 1 == this.jsType && e.JSBridge.invoke("HYUDBMSDKClose", {}, {
                success: function() {}
            })
        },
        showLogin: function(t) {
            var o = this;
            2 == o.jsType ? o.setup(function(o) {
                o.callHandler("showLogin", function(o) {
                    t && "function" == typeof t && t.call(e, o)
                })
            }) : 1 == o.jsType && o.JSBridge.invoke("showLogin", {}, {
                success: function(o) {
                    t && "function" == typeof t && t.call(e, o)
                }
            })
        },
        isLogin: function(t) {
            var o = this;
            2 == o.jsType ? o.setup(function(n) {
                n.callHandler("isLogin", function(n) {
                    o.hasLogin = n.isLogin,
                    t && "function" == typeof t && t.call(e, n)
                })
            }) : 1 == o.jsType && o.JSBridge.invoke("isLogin", {}, {
                success: function(n) {
                    o.hasLogin = n.isLogin,
                    t && "function" == typeof t && t.call(e, n)
                }
            })
        },
        userInfo: function(t) {
            var o = this;
            2 == o.jsType ? o.setup(function(o) {
                o.callHandler("getCurrentUserInfo", function(o) {
                    t && "function" == typeof t && t.call(e, o)
                })
            }) : 1 == o.jsType && o.JSBridge.invoke("getCurrentUserInfo", {}, {
                success: function(o) {
                    t && "function" == typeof t && t.call(e, o)
                }
            })
        },
        appInfo: function(t) {
            var o = this;
            2 == o.jsType ? o.setup(function(o) {
                o.callHandler("getAppInfo", function(o) {
                    t && "function" == typeof t && t.call(e, o)
                })
            }) : 1 == o.jsType && o.JSBridge.invoke("getAppInfo", {}, {
                success: function(o) {
                    t && "function" == typeof t && t.call(e, o)
                }
            })
        },
        showToast: function(t, o) {
            var n = this;
            2 == n.jsType ? n.setup(function(n) {
                n.callHandler("showToast", {
                    message: t
                }, function(t) {
                    o && "function" == typeof o && o.call(e, t)
                })
            }) : 1 == n.jsType && n.JSBridge.invoke("showToast", {
                message: t
            }, {
                success: function(t) {
                    o && "function" == typeof o && o.call(e, t)
                }
            })
        },
        hideCtrl: function() {
            var e = this;
            2 == e.jsType ? (e.setup(function(e) {
                e.callHandler("setShareInfo", {
                    isShow: !1,
                    url: ""
                }, function() {})
            }),
            e.setup(function(e) {
                e.callHandler("setAllowRefresh", {
                    allowRefresh: !1
                }, function() {})
            })) : 1 == e.jsType && (e.JSBridge.invoke("setShareInfo", {
                isShow: !1,
                url: ""
            }, {}),
            e.JSBridge.invoke("setAllowRefresh", {
                allowRefresh: !1
            }, {}))
        },
        setup: function(t) {
            var o = this
              , n = o.$parent;
            if (o.device().mobile || o.device().android || o.device().ios) {
                if (e.WebViewJavascriptBridge)
                    return t(WebViewJavascriptBridge);
                if (e.WVJBCallbacks)
                    return e.WVJBCallbacks.push(t);
                e.WVJBCallbacks = [t],
                n.Html.add({
                    tag: "iframe",
                    pos: "document",
                    urlList: [{
                        id: "__HUYAJSBridgeCommon_DomReady",
                        url: "wvjbscheme://__BRIDGE_LOADED__"
                    }]
                })
            }
        },
        device: function() {
            var e = navigator.userAgent;
            return {
                trident: e.indexOf("Trident") > -1,
                presto: e.indexOf("Presto") > -1,
                webKit: e.indexOf("AppleWebKit") > -1,
                gecko: e.indexOf("Gecko") > -1 && -1 == e.indexOf("KHTML"),
                mobile: !!e.match(/AppleWebKit.*Mobile.*/),
                ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
                iPhone: e.indexOf("iPhone") > -1,
                iPad: e.indexOf("iPad") > -1,
                webApp: -1 == e.indexOf("Safari"),
                weixin: e.indexOf("MicroMessenger") > -1,
                qq: "qq" == e.match(/\sQQ/i),
                uc: e.indexOf("UCBrowser") > -1
            }
        },
        remove: function() {
            this.$parent.Html.remove({
                id: "__HUYAJSBridgeCommon_DomReady"
            })
        },
        JSBridge: prototype = {
            init: function(e) {
                this.$parent = e,
                this.Queue.init(this)
            },
            ready: function(t) {
                {
                    var o = this;
                    o.$parent.$parent
                }
                o.Queue.flush(),
                o.invoke("ready", {
                    usePostMessageByDefault: !0
                }, {
                    success: function() {}
                }),
                t && "function" == typeof t && t.call(e, o)
            },
            setup: function(o) {
                var n = this
                  , a = n.$parent
                  , s = a.$parent;
                a.device().mobile && (e.KiwiJSBridge ? n.ready(o) : t.addEventListener && t.addEventListener("KiwiWebViewJavascriptBridgeReady", function() {
                    n.ready(o)
                }, !1),
                a.device().android ? s.Html.add({
                    tag: "script",
                    urlList: [{
                        id: "__HUYAJSBridgeCommon_DomReady",
                        url: "KWBridge://huya.com/load_KwBridge.js"
                    }]
                }) : a.device().ios && s.Html.add({
                    tag: "iframe",
                    pos: "document",
                    urlList: [{
                        id: "__HUYAJSBridgeCommon_DomReady",
                        url: "kiwi://DOMContentLoaded"
                    }]
                }))
            },
            handle: function(t, o, n) {
                switch (n.status) {
                case "ok":
                    o.success && "function" == typeof o.success && o.success.call(e, n);
                    break;
                case "cancel":
                    o.cancel && "function" == typeof o.cancel && o.cancel.call(e, esponse);
                    break;
                default:
                    o.fail && "function" == typeof o.fail && o.fail.call(e, n)
                }
                o.complete && "function" == typeof o.complete && o.complete.call(e, n)
            },
            invoke: function(t, o, n) {
                var a = this
                  , s = a.$parent.$parent;
                e.KiwiJSBridge ? setTimeout(function() {
                    o = s.Util.extend(o, {
                        usePostMessageByDefault: !0,
                        useProcolByDefault: !1,
                        useContextByDefault: !1
                    }),
                    e.KiwiJSBridge.call(t, o, function(e) {
                        a.handle(t, n, e)
                    })
                }, 0) : a.Queue.call(t, o, n)
            },
            on: function(t, o, n) {
                var a = this;
                e.KiwiJSBridge ? e.KiwiJSBridge.on(t, o, n) : a.Queue.on(t, o, n)
            },
            off: function(t, o, n) {
                var a = this;
                e.KiwiJSBridge ? e.KiwiJSBridge.off(t, o, n) : a.Queue.off(t, o, n)
            },
            Queue: prototype = {
                init: function(e) {
                    this.$parent = e,
                    this.queue = []
                },
                call: function(e, t, o) {
                    this.queue.push({
                        type: "call",
                        func: e,
                        options: t,
                        params: o
                    })
                },
                on: function(e, t, o) {
                    this.queue.push({
                        type: "on",
                        eventId: e,
                        params: o,
                        callback: callback
                    })
                },
                off: function(e, t, o) {
                    this.queue.push({
                        type: "off",
                        eventId: eventId,
                        params: o,
                        callback: callback
                    })
                },
                flush: function() {
                    for (var t = this, o = t.$parent, n = 0; n < t.queue.length; n++) {
                        var a = t.queue[n];
                        "call" == a.type && e.KiwiJSBridge ? o.call(a.func, func.options, func.params) : "on" == a.type && e.KiwiJSBridge ? o.on(a.eventId, a.params, a.callback) : "off" == a.type && e.KiwiJSBridge && o.off(a.eventId, a.params, a.callback)
                    }
                    this.queue = []
                }
            }
        }
    },
    o.prototype.Cookie = {
        init: function(e) {
            this.$parent = e,
            this.$global = e.JSSDK.Global
        },
        get: function(e) {
            for (var o = e + "=", n = t.cookie.split(";"), a = 0; a < n.length; a++) {
                for (var s = n[a]; " " == s.charAt(0); )
                    s = s.substring(1, s.length);
                if (0 == s.indexOf(o))
                    return s.substring(o.length, s.length)
            }
            return void 0
        },
        set: function(e, o, n, a) {
            var s = "";
            if (void 0 != a && a) {
                var i = new Date;
                i.setTime(i.getTime() + 24 * a * 60 * 60 * 1e3),
                s = "; expires=" + i.toUTCString()
            }
            t.cookie = e + "=" + o + s + "; domain=" + (void 0 != n && "" != n && t.domain.toUpperCase().indexOf(n.toUpperCase()) > -1 ? n : t.domain) + "; path=/"
        },
        remove: function(e) {
            this.set(e, "", void 0, -1)
        },
        url: function(e, t, o) {
            var n = this
              , a = new Array
              , s = n.$global;
            if ((!o || o && "0" == o) && a.push(s.protocol + "://" + e + "." + s.domain + t),
            (!o || o && "0" == o) && s.domainList && "" != s.domainList)
                for (var i = s.domainList.split(","), r = 0; r < i.length; r++)
                    a.push(s.protocol + "://" + e + "." + i[r] + t);
            return a
        }
    },
    o.prototype.Report = {
        init: function(e) {
            this.$parent = e,
            this.$item = e.Item,
            this.$message = e.Message,
            this.$cookie = e.Cookie,
            this.$global = e.JSSDK.Global,
            this.$resource = e.JSSDK.Resource,
            this.$util = e.Util,
            this.Event.init(this)
        },
        error: function(e, t) {
            this.send(this.$message.stringify(this.format(e, t)))
        },
        info: function(e, t) {
            ("70004" != t.uri || "70004" == t.uri && "0" == t.returnCode && t.hasOwnProperty("data") && void 0 != t.data && t.data.hasOwnProperty("stage") && "0" != t.data.stage && "1" != t.data.stage) && this.send(this.$message.stringify(this.format(e, t)))
        },
        send: function(e) {
            try {
                var o = t.getElementsByTagName("head")[0]
                  , n = t.createElement("script");
                o.appendChild(n),
                n.src = "https://udblog.huya.com/web/log/report?request=" + encodeURIComponent(e),
                o.removeChild(n)
            } catch (a) {}
        },
        format: function(e, t) {
            var o = {}
              , n = {}
              , a = {};
            try {
                void 0 != t && (a = this.$message.decode(this.$message.stringify(t)),
                this.$util.reduce(a))
            } catch (s) {}
            o.topic = "huyaudb",
            n.term_type = "4",
            n.net_type = 2,
            n.carrier_type = 2;
            try {
                n.device_id = this.$item && void 0 != this.$item && this.$cookie && void 0 != this.$cookie ? this.$item.convert(this.$cookie.get("udb_guiddata"), "") : ""
            } catch (s) {
                n.device_id = ""
            }
            try {
                n.device_name = navigator && void 0 != navigator ? navigator.platform : ""
            } catch (s) {
                n.device_name = ""
            }
            try {
                n.system_info = navigator && void 0 != navigator ? navigator.userAgent : ""
            } catch (s) {
                n.system_info = ""
            }
            try {
                n.appid = this.$item && void 0 != this.$item && this.$global && void 0 != this.$global ? this.$item.convert(this.$global.appid, "0") : "0"
            } catch (s) {
                n.appid = "0"
            }
            try {
                n.sdk_ver = this.$item && void 0 != this.$item && this.$resource && void 0 != this.$resource ? this.$item.convert(this.$resource.VERSION, "1.9") : "1.9"
            } catch (s) {
                n.sdk_ver = "1.9"
            }
            try {
                n.local_time = new Number(this.$item && void 0 != this.$item && this.$util && void 0 != this.$util ? this.$item.convert(this.$util.guid(2), "0") : "0")
            } catch (s) {
                n.local_time = 0
            }
            try {
                n.uid = new Number(this.$item && void 0 != this.$item && this.$cookie && void 0 != this.$cookie ? this.$item.convert(this.$cookie.get("udb_uid"), a.hasOwnProperty("data") && a.data && a.data.hasOwnProperty("uid") && a.data.uid ? a.data.uid : "0") : a.hasOwnProperty("data") && a.data && a.data.hasOwnProperty("uid") && a.data.uid ? a.data.uid : "0")
            } catch (s) {
                n.uid = 0
            }
            try {
                n.uri = e && void 0 != e && e.hasOwnProperty("uri") && e.uri && void 0 != e.uri ? e.uri : "0"
            } catch (s) {
                n.uri = "0"
            }
            try {
                n.ui_cmd = location && void 0 != location && location.href && void 0 != location.href ? encodeURIComponent(location.href) : ""
            } catch (s) {
                n.ui_cmd = ""
            }
            try {
                n.context = a.hasOwnProperty("context") && a.context && "" != a.context ? a.context : this.$item && void 0 != this.$item && this.$cookie && void 0 != this.$cookie ? "ER-" + this.$item.convert(this.$cookie.get("udb_guiddata")) + "-" + this.$item.convert(this.$cookie.get("__yamid_new")) + "-" + this.$item.convert(this.$cookie.get("guid")) : ""
            } catch (s) {
                n.context = ""
            }
            try {
                n.rsp_time = new Number(this.$item && void 0 != this.$item && this.$util && void 0 != this.$util && e && void 0 != e && e.hasOwnProperty("time") && e.time && void 0 != e.time ? this.$item.convert(this.$util.guid(2) - e.time, "0") : "0")
            } catch (s) {
                n.rsp_time = 0
            }
            try {
                n.rescode = a.hasOwnProperty("returnCode") && a.returnCode ? a.returnCode : "0"
            } catch (s) {
                n.rescode = "0"
            }
            try {
                n.strategy = a.hasOwnProperty("data") && a.data && a.data.hasOwnProperty("strategys") && null != a.data.strategys ? this.$message.stringify(a.data.strategys) : ""
            } catch (s) {
                n.strategy = ""
            }
            try {
                n.detail = this.$message.stringify(a)
            } catch (s) {
                n.detail = ""
            }
            try {
                o.json = this.$message.stringify(n)
            } catch (s) {
                o.json = ""
            }
            return o
        },
        Event: prototype = {
            init: function(e) {
                this.$parent = e,
                this.$message = e.$message
            },
            click: function(e) {
                this.$message.error("EVT_RPT", "PGECLK", e)
            }
        }
    },
    e.HyUDBWebErr = "",
    e.HwUDBWebSDK = new o,
    e.onerror = function(t, o, n, a, s) {
        try {
            var i = encodeURIComponent(t + "-" + o + "-" + n + "-" + a + "-" + s)
              , r = "300000-" + i
              , c = "JS-"
              , d = "";
            if (e.HyUDBWebErr != r) {
                e.HyUDBWebErr = r;
                try {
                    d = encodeURIComponent(location.href),
                    d = d && void 0 != d && "" != d ? d.toLowerCase() : "";
                    var l = e.HpUDBWebSDK.Item
                      , u = e.HpUDBWebSDK.Cookie;
                    c = "JS-" + l.convert(u.get("udb_guiddata")) + "-" + l.convert(u.get("__yamid_new")) + "-" + l.convert(u.get("guid"))
                } catch (p) {}
                d && void 0 != d && "" != d && d.indexOf("udblgn.") > -1 && d.indexOf("udb3lgn.") > -1 && d.indexOf("udbsec.") > -1 && d.indexOf("udbapi.") > -1 && d.indexOf("udbreg.") > -1 && d.indexOf("aq.") > -1 && e.HpUDBWebSDK.Report.error({
                    uri: 3e5
                }, {
                    uri: 3e5,
                    version: "2.2",
                    context: c,
                    returnCode: 3e5,
                    message: encodeURIComponent(i),
                    description: "javascript script error",
                    data: {
                        page: d
                    }
                })
            }
        } catch (p) {}
    }
}(window, document);

function getpwd(pwd){
    return HwUDBWebSDK.Security.SHA1.hexEncode(pwd)

}
