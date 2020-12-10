const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
window = global;
var document = dom.window.document;
var params = {
    location:{
        hash: "",
        host: "www.toutiao.com",
        hostname: "www.toutiao.com",
        href: "https://www.toutiao.com",
        origin: "https://www.toutiao.com",
        pathname: "/",
        port: "",
        protocol: "https:",
        search: "",
    },
    navigator:{
        appCodeName: "Mozilla",
        appName: "Netscape",
        appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
        cookieEnabled: true,
        deviceMemory: 8,
        doNotTrack: null,
        hardwareConcurrency: 4,
        language: "zh-CN",
        languages: ["zh-CN", "zh"],
        maxTouchPoints: 0,
        onLine: true,
        platform: "Win32",
        product: "Gecko",
        productSub: "20030107",
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
        vendor: "Google Inc.",
        vendorSub: "",
    },
    "screen":{
        availHeight: 1040,
        availLeft: 0,
        availTop: 0,
        availWidth: 1920,
        colorDepth: 24,
        height: 1080,
        pixelDepth: 24,
        width: 1920,
    }
};
Object.assign(window,params);

window.document = document;

var undefined, me = this, updateCookieTimer = null, updateCookieTimeHardLimit = 1800, cookieExpireTimeLength = 86400, crossDomainForward = null, crossDomainTimer = null, crossDomainTime = 3, autoLoginCallBack2 = null, ssoCrosssDomainUrl = "https://login.sina.com.cn/sso/crossdomain.php", ssoLoginUrl = "https://login.sina.com.cn/sso/login.php", ssoLogoutUrl = "https://login.sina.com.cn/sso/logout.php", ssoUpdateCookieUrl = "https://login.sina.com.cn/sso/updatetgt.php", ssoPreLoginUrl = "https://login.sina.com.cn/sso/prelogin.php", pincodeUrl = "https://login.sina.com.cn/cgi/pin.php", vfValidUrl = "http://weibo.com/sguide/vdun.php", generateVisitorUrl = "https://passport.weibo.com/visitor/visitor", crossDomainUrlList = null, loginMethod = "", ssoServerTimeTimer = null, ssoLoginTimer = null, loginByConfig = null, loginMethodCheck = null, https = 1, rsa = 2, wsse = 4, pcid = "", tmpData = {}, preloginTimeStart = 0, preloginTime = 0, callbackLogoutStatus;
    this.https = 1;
    this.rsa = 2;
    this.wsse = 4;
    this.name = "sinaSSOController";
    this.loginFormId = "ssoLoginForm";
    this.scriptId = "ssoLoginScript";
    this.ssoCrossDomainScriptId = "ssoCrossDomainScriptId";
    this.loginFrameName = "ssoLoginFrame";
    this.appLoginURL = {
        "weibo.com": "https://passport.weibo.com/wbsso/login"
    };
    this.appDomainService = {
        "weibo.com": "miniblog"
    };
    this.loginExtraQuery = {};
    this.setDomain = !1;
    this.feedBackUrl = "";
    this.service = "sso";
    this.domain = "sina.com.cn";
    this.from = "";
    this.pageCharset = "GB2312";
    this.useTicket = !1;
    this.isCheckLoginState = !1;
    this.isUpdateCookieOnLoad = !0;
    this.useIframe = !0;
    this.noActiveTime = 7200;
    this.autoUpdateCookieTime = 1800;
    this.loginType = rsa;
    this.timeoutEnable = !1;
    this.loginTimeout = 5e3;
    this.crossDomain = !0;
    this.scriptLoginHttps = !1;
    this.allowAutoFoundServerTime = !1;
    this.allowAutoFoundServerTimeError = !0;
    this.calcServerTimeInterval = 2e3;
    this.servertime = null;
    this.nonce = null;
    this.rsaPubkey = null;
    this.rsakv = null;
    this.loginExtraFlag = {};
    this.cdult = !1;
    this.crossDomainTime = 5;
    this.failRedirect = !1;
    this.isGenerateVisitor = !0;
    this.generateVisitorProbability = 1;
    this.generateVisitorDelay = 6;
    this.generateVisitorDomain = ["^.*sina.com.cn$"];
    this.getVersion = function() {
        return "ssologin.js(v1.4.19) 2017-01-09"
    }
    ;
    this.getEntry = function() {
        return me.entry
    }
    ;
    this.getClientType = function() {
        return me.getVersion().split(" ")[0]
    }
    ;
    this.init = function() {
        if (getType(arguments[0]) === "object")
            return customPrepare(arguments[0]);
        me.setLoginType(me.loginType);
        var a = window.sinaSSOConfig;
        typeof a != "object" && (a = {});
        var b;
        for (b in a)
            me[b] = a[b];
        me.entry || (me.entry = me.service);
        me.isUpdateCookieOnLoad && setTimeout(me.name + ".updateCookie()", 1e4);
        me.isGenerateVisitor && self === top && Math.random() < me.generateVisitorProbability && location.protocol !== "https:" && setTimeout(me.name + ".generateVisitor()", me.generateVisitorDelay * 1e3);
        me.isCheckLoginState && addEventListener(window, "load", function() {
            me.checkLoginState()
        });
        me.allowAutoFoundServerTime && ssoLoginServerTime && me.setServerTime(ssoLoginServerTime);
        me.customInit()
    }
    ;
    this.getLoginInfo = function() {
        var a = getCookie("sso_info");
        if (!a)
            return {};
        try {
            return parse_str(sinaSSOEncoder.Cookie.decode(a))
        } catch (b) {
            return {}
        }
    }
    ;
    this.customInit = function() {}
    ;
    this.customUpdateCookieCallBack = function(a) {}
    ;
    this.customLoginCallBack = function(a) {}
    ;
    this.customLogoutCallBack = function(a) {
        me.customLoginCallBack({
            result: !1
        })
    }
    ;
    var customLogin, customPrepare, customLogout;
    (function() {
        var a = function() {}
          , b = {
            username: "",
            password: "",
            savestate: 0,
            vsnf: 0,
            vsnval: "",
            door: "",
            setCookie: 1,
            ssoSimpleLogin: 0,
            onComplete: a,
            onSuccess: a,
            onFailure: a
        }
          , c = {
            onComplete: a,
            onSuccess: a,
            onFailure: a
        }
          , d = {
            vsnf: "vsnf",
            vsnval: "vsnval",
            door: "door",
            setCookie: "s",
            ssoSimpleLogin: "ssosimplelogin"
        }
          , e = {}
          , f = {}
          , g = function(a, b) {
            var c, d = {};
            a = a || {};
            b = b || {};
            objMerge(d, a);
            for (c in b)
                a.hasOwnProperty(c) && (d[c] = b[c]);
            return d
        }
          , h = function(a, b, c) {
            typeof a[b] == "function" && a[b](c)
        };
        this.callbackLoginStatus = function(a) {
            me.customLoginCallBack(a);
            h(e, "onComplete", a);
            a && a.result === !0 ? h(e, "onSuccess", a) : h(e, "onFailure", a)
        }
        ;
        callbackLogoutStatus = function(a) {
            me.customLogoutCallBack(a);
            h(f, "onComplete", a);
            a && a.result === !0 ? h(f, "onSuccess", a) : h(f, "onFailure", a)
        }
        ;
        customPrepare = function(a) {
            var c;
            a = a || {};
            e = objMerge({
                entry: "sso",
                useTicket: !1,
                service: "sso",
                domain: "sina.com.cn",
                feedBackUrl: "",
                setDomain: !1,
                crossDomain: !0,
                name: "sinaSSOController"
            }, b);
            e = g(e, a);
            window[e.name] = window[e.name] || me;
            for (c in e)
                b.hasOwnProperty(c) || (me[c] = e[c]);
            me.loginExtraQuery = {};
            objMerge(me.loginExtraQuery, e.loginExtraQuery);
            for (c in d)
                e.hasOwnProperty(c) && (me.loginExtraQuery[d[c]] = e[c])
        }
        ;
        customLogin = function(a) {
            a = a || {};
            customPrepare(a);
            me.login(e.username, e.password, e.savestate)
        }
        ;
        customLogout = function(a) {
            a = a || {};
            f = objMerge({}, c);
            f = g(f, a);
            me.logout()
        }
    }
    ).apply(this);
    this.login = function(a, b, c) {
        var d = arguments[3] ? arguments[3] : !1;
        if (getType(arguments[0]) === "object")
            return customLogin(arguments[0]);
        ssoLoginTimer ? ssoLoginTimer.clear() : ssoLoginTimer = new prototypeTimer(me.timeoutEnable);
        ssoLoginTimer.start(me.loginTimeout, function() {
            ssoLoginTimer.clear();
            me.callbackLoginStatus({
                result: !1,
                errno: -1,
                reason: unescape("%u767B%u5F55%u8D85%u65F6%uFF0C%u8BF7%u91CD%u8BD5")
            })
        });
        c = c == undefined ? 0 : c;
        tmpData.savestate = c;
        loginByConfig = function() {
            if (!me.feedBackUrl && loginByXMLHttpRequest(a, b, c, d))
                return !0;
            if (me.useIframe && (me.setDomain || me.feedBackUrl)) {
                if (me.setDomain) {
                    document.domain = me.domain;
                    !me.feedBackUrl && me.domain != "sina.com.cn" && (me.feedBackUrl = makeURL(me.appLoginURL[me.domain], {
                        domain: 1
                    }))
                }
                loginMethod = "post";
                var e = loginByIframe(a, b, c, d);
                if (!e) {
                    loginMethod = "get";
                    me.scriptLoginHttps ? me.setLoginType(me.loginType | https) : me.setLoginType(me.loginType | rsa);
                    loginByScript(a, b, c, d)
                }
            } else {
                loginMethod = "get";
                loginByScript(a, b, c, d)
            }
            me.nonce = null
        }
        ;
        loginMethodCheck = function() {
            if (me.loginType & wsse || me.loginType & rsa) {
                if (me.servertime) {
                    me.nonce || (me.nonce = makeNonce(6));
                    loginByConfig();
                    return !0
                }
                me.getServerTime(a, loginByConfig)
            } else
                loginByConfig()
        }
        ;
        loginMethodCheck();
        return !0
    }
    ;
    this.prelogin = function(a, b) {
        var c = ssoPreLoginUrl
          , d = a.username || "";
        d = sinaSSOEncoder.base64.encode(urlencode(d));
        delete a.username;
        var e = {
            entry: me.entry,
            callback: me.name + ".preloginCallBack",
            su: d,
            rsakt: "mod"
        };
        c = makeURL(c, objMerge(e, a));
        me.preloginCallBack = function(a) {
            if (a && a.retcode == 0) {
                me.setServerTime(a.servertime);
                me.nonce = a.nonce;
                me.rsaPubkey = a.pubkey;
                me.rsakv = a.rsakv;
                pcid = a.pcid;
                preloginTime = (new Date).getTime() - preloginTimeStart - (parseInt(a.exectime, 10) || 0)
            }
            typeof b == "function" && b(a)
        }
        ;
        preloginTimeStart = (new Date).getTime();
        excuteScript(me.scriptId, c)
    }
    ;
    this.getServerTime = function(a, b) {
        if (me.servertime) {
            typeof b == "function" && b({
                retcode: 0,
                servertime: me.servertime
            });
            return !0
        }
        me.prelogin({
            username: a
        }, b)
    }
    ;
    this.logout = function() {
        try {
            if (getType(arguments[0]) === "object")
                return customLogout(arguments[0]);
            var a = {
                entry: me.getEntry(),
                callback: me.name + ".ssoLogoutCallBack"
            };
            try {
                a.sr = window.screen.width + "*" + window.screen.height
            } catch (b) {}
            var c = makeURL(ssoLogoutUrl, a);
            excuteScript(me.scriptId, c)
        } catch (b) {}
        return !0
    }
    ;
    this.ssoLogoutCallBack = function(a) {
        a.arrURL && me.setCrossDomainUrlList(a);
        me.crossDomainAction("logout", function() {
            callbackLogoutStatus({
                result: !0
            })
        })
    }
    ;
    this.updateCookie = function() {
        try {
            if (me.autoUpdateCookieTime > 5) {
                updateCookieTimer != null && clearTimeout(updateCookieTimer);
                updateCookieTimer = setTimeout(me.name + ".updateCookie()", me.autoUpdateCookieTime * 1e3)
            }
            var a = me.getCookieExpireTime()
              , b = (new Date).getTime() / 1e3
              , c = {};
            a == null ? c = {
                retcode: 6102
            } : a < b ? c = {
                retcode: 6203
            } : a - cookieExpireTimeLength + updateCookieTimeHardLimit > b ? c = {
                retcode: 6110
            } : a - b > me.noActiveTime && (c = {
                retcode: 6111
            });
            if (c.retcode !== undefined) {
                me.customUpdateCookieCallBack(c);
                return !1
            }
            var d = makeURL(ssoUpdateCookieUrl, {
                entry: me.getEntry(),
                callback: me.name + ".updateCookieCallBack"
            });
            excuteScript(me.scriptId, d)
        } catch (e) {}
        return !0
    }
    ;
    this.setCrossDomainUrlList = function(a) {
        crossDomainUrlList = a
    }
    ;
    this.checkAltLoginName = function() {
        return !0
    }
    ;
    this.callFeedBackUrl = function(a) {
        try {
            var b = {
                callback: me.name + ".feedBackUrlCallBack"
            };
            a.ticket && (b.ticket = a.ticket);
            a.retcode !== undefined && (b.retcode = a.retcode);
            var c = makeURL(me.feedBackUrl, b);
            excuteScript(me.scriptId, c)
        } catch (d) {}
        return !0
    }
    ;
    this.loginCallBack = function(a) {
        try {
            if (me.timeoutEnable && !ssoLoginTimer.isset())
                return;
            ssoLoginTimer.clear();
            me.loginExtraFlag = {};
            var b = {}
              , c = a.ticket
              , d = a.uid;
            if (d) {
                b.result = !0;
                b.retcode = 0;
                b.userinfo = {
                    uniqueid: a.uid
                };
                c && (b.ticket = c);
                a.cookie && (b.cookie = a.cookie);
                if (me.feedBackUrl)
                    me.crossDomain ? me.crossDomainAction("login", function() {
                        me.callFeedBackUrl(b)
                    }) : me.callFeedBackUrl(b);
                else if (me.crossDomain) {
                    a.crossDomainUrlList && me.setCrossDomainUrlList({
                        retcode: 0,
                        arrURL: a.crossDomainUrlList
                    });
                    me.crossDomainAction("login", function() {
                        if (c && me.appLoginURL[me.domain])
                            me.appLogin(c, me.domain, me.name + ".callbackLoginStatus");
                        else {
                            b.userinfo = objMerge(b.userinfo, me.getSinaCookie());
                            me.callbackLoginStatus(b)
                        }
                    })
                } else
                    me.callbackLoginStatus(b)
            } else {
                if (loginMethodCheck && a.retcode == "2092" && me.allowAutoFoundServerTimeError) {
                    me.setServerTime(0);
                    me.loginExtraFlag = objMerge(me.loginExtraFlag, {
                        wsseretry: "servertime_error"
                    });
                    loginMethodCheck();
                    loginMethodCheck = null;
                    return !1
                }
                b.result = !1;
                b.errno = a.retcode;
                if (b.errno == "4069") {
                    var e = a.reason.split("|");
                    b.reason = e[0];
                    e.length == 2 && (b.rurl = e[1]);
                    if (b.rurl)
                        try {
                            top.location.href = b.rurl;
                            return
                        } catch (f) {}
                } else
                    b.reason = a.reason;
                me.callbackLoginStatus(b)
            }
        } catch (f) {}
        return !0
    }
    ;
    this.updateCookieCallBack = function(a) {
        a.retcode == 0 ? me.crossDomainAction("update", function() {
            me.customUpdateCookieCallBack(a)
        }) : me.customUpdateCookieCallBack(a)
    }
    ;
    this.feedBackUrlCallBack = function(a) {
        if (loginMethod != "post" || !me.timeoutEnable || !!ssoLoginTimer.isset()) {
            a.errno == "2092" && me.setServerTime(0);
            if (loginMethodCheck && a.errno == "2092" && me.allowAutoFoundServerTimeError) {
                me.loginExtraFlag = objMerge(me.loginExtraFlag, {
                    wsseretry: "servertime_error"
                });
                loginMethodCheck();
                loginMethodCheck = null;
                return !1
            }
            ssoLoginTimer && ssoLoginTimer.clear();
            if (a.errno == "4069") {
                var b = a.reason.split("|");
                a.reason = b[0];
                if (b.length == 2) {
                    a.rurl = b[1];
                    try {
                        top.location.href = a.rurl;
                        return
                    } catch (c) {}
                }
            }
            me.callbackLoginStatus(a);
            removeNode(me.loginFrameName)
        }
    }
    ;
    this.doCrossDomainCallBack = function(a) {
        me.crossDomainCounter++;
        a && removeNode(a.scriptId);
        if (me.crossDomainCounter == me.crossDomainCount) {
            clearTimeout(crossDomainTimer);
            me.crossDomainResult()
        }
    }
    ;
    this.crossDomainCallBack = function(a) {
        removeNode(me.ssoCrossDomainScriptId);
        if (!a || a.retcode != 0)
            return !1;
        var b = a.arrURL, c, d, e = {
            callback: me.name + ".doCrossDomainCallBack"
        };
        me.crossDomainCount = b.length;
        me.crossDomainCounter = 0;
        if (b.length == 0) {
            clearTimeout(crossDomainTimer);
            me.crossDomainResult();
            return !0
        }
        for (var f = 0; f < b.length; f++) {
            c = b[f];
            d = "ssoscript" + f;
            e.scriptId = d;
            c = makeURL(c, e);
            isSafari() ? excuteIframe(d, c) : excuteScript(d, c)
        }
    }
    ;
    this.crossDomainResult = function() {
        crossDomainUrlList = null;
        typeof crossDomainForward == "function" && crossDomainForward()
    }
    ;
    this.crossDomainAction = function(a, b) {
        crossDomainTimer = setTimeout(me.name + ".crossDomainResult()", crossDomainTime * 1e3);
        typeof b == "function" ? crossDomainForward = b : crossDomainForward = null;
        if (crossDomainUrlList) {
            me.crossDomainCallBack(crossDomainUrlList);
            return !1
        }
        var c = me.domain;
        if (a == "update") {
            a = "login";
            c = "sina.com.cn"
        }
        var d = {
            scriptId: me.ssoCrossDomainScriptId,
            callback: me.name + ".crossDomainCallBack",
            action: a,
            domain: c,
            sr: window.screen.width + "*" + window.screen.height
        }
          , e = makeURL(ssoCrosssDomainUrl, d);
        excuteScript(me.ssoCrossDomainScriptId, e)
    }
    ;
    this.checkLoginState = function(a) {
        a ? me.autoLogin(a) : me.autoLogin(function(a) {
            var b = {};
            if (a !== null) {
                var c = {
                    displayname: a.nick,
                    uniqueid: a.uid,
                    userid: a.user
                };
                b.result = !0;
                b.userinfo = c
            } else {
                b.result = !1;
                b.reason = ""
            }
            me.callbackLoginStatus(b)
        })
    }
    ;
    this.getCookieExpireTime = function() {
        return getCookieExpireTimeByDomain(me.domain)
    }
    ;
    this.getSinaCookie = function(a) {
        var b = getCookie("SUBP");
        if (!b)
            return null;
        var c = sinaSSOEncoder.getSUBPCookie.decode(b);
        try {
            c.uid = c.uid.replace(/(^\s*)|(\s*$)/g, "");
            c.nick = decodeURIComponent(c.nick.replace(/(^\s*)|(\s*$)/g, ""))
        } catch (d) {
            return null
        }
        return c
    }
    ;
    this.get51UCCookie = function() {
        return me.getSinaCookie()
    }
    ;
    this.isPreLoginState = function() {
        var a = getCookie("SUBP");
        if (!a)
            return !1;
        var b = sinaSSOEncoder.getSUBPCookie.decode(a);
        return b && b.status == "40" ? !0 : !1
    }
    ;
    this.isVisitor = function() {
        var a = getCookie("SUBP");
        if (!a)
            return !1;
        var b = sinaSSOEncoder.getSUBPCookie.decode(a);
        return b && b.status == "20" ? !0 : !1
    }
    ;
    this.autoLogin = function(a, b) {
        if (me.domain == "sina.com.cn") {
            if (getCookie("SUBP") === null && getCookie("ALF") !== null) {
                sinaAutoLogin(a);
                return !0
            }
        } else if (getCookie("SUBP") === null && (b || getCookie("SSOLoginState") !== null || getCookie("ALF") !== null)) {
            sinaAutoLogin(a);
            return !0
        }
        a(me.getSinaCookie());
        return !0
    }
    ;
    this.autoLoginCallBack2 = function(a) {
        try {
            autoLoginCallBack2(me.getSinaCookie())
        } catch (b) {}
        return !0
    }
    ;
    this.appLogin = function(a, b, c) {
        var d = tmpData.savestate ? parseInt((new Date).getTime() / 1e3 + tmpData.savestate * 86400) : 0
          , e = getCookie("ALF") ? getCookie("ALF") : 0
          , f = {
            callback: c,
            ticket: a,
            ssosavestate: d || e
        }
          , g = me.appLoginURL[b]
          , h = makeURL(g, f);
        excuteScript(me.scriptId, h, "gb2312");
        return !0
    }
    ;
    this.autoLoginCallBack3 = function(a) {
        if (a.retcode != 0) {
            me.autoLoginCallBack2(a);
            return !1
        }
        var b = me.domain == "sina.com.cn" ? "weibo.com" : me.domain;
        me.appLogin(a.ticket, b, me.name + ".autoLoginCallBack2");
        return !0
    }
    ;
    this.setLoginType = function(a) {
        var b = location.protocol == "https:" ? me.https : 0;
        b && (me.crossDomain = !1);
        me.loginType = a | b;
        return !0
    }
    ;
    this.setServerTime = function(a) {
        ssoServerTimeTimer || (ssoServerTimeTimer = new prototypeTimer(!0));
        if (a == 0) {
            ssoServerTimeTimer.clear();
            me.servertime = a;
            return !0
        }
        if (a < 1294935546)
            return !1;
        var b = function() {
            if (me.servertime) {
                me.servertime += me.calcServerTimeInterval / 1e3;
                ssoServerTimeTimer.start(me.calcServerTimeInterval, b)
            }
        };
        me.servertime = a;
        ssoServerTimeTimer.start(me.calcServerTimeInterval, b)
    }
    ;
    this.getPinCodeUrl = function(a) {
        a == undefined && (a = 0);
        pcid && (me.loginExtraQuery.pcid = pcid);
        return pincodeUrl + "?r=" + Math.floor(Math.random() * 1e8) + "&s=" + a + (pcid.length > 0 ? "&p=" + pcid : "")
    }
    ;
    this.showPinCode = function(a) {
        me.$(a).src = me.getPinCodeUrl()
    }
    ;
    this.isVfValid = function() {
        return me.getSinaCookie(!0).vf != 1
    }
    ;
    this.getVfValidUrl = function() {
        return vfValidUrl
    }
    ;
    this.enableFailRedirect = function() {
        me.failRedirect = !0
    }
    ;
    var makeNonce = function(a) {
        var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
          , c = "";
        for (var d = 0; d < a; d++)
            c += b.charAt(Math.ceil(Math.random() * 1e6) % b.length);
        return c
    }
      , sinaAutoLogin = function(a) {
        autoLoginCallBack2 = a;
        var b = {
            entry: me.getEntry(),
            service: me.service,
            encoding: "UTF-8",
            gateway: 1,
            returntype: "TEXT",
            from: me.from
        };
        if (me.domain == "sina.com.cn") {
            b.callback = me.name + ".autoLoginCallBack3";
            b.service = "miniblog";
            b.useticket = 1
        } else {
            b.callback = me.name + ".autoLoginCallBack3";
            b.useticket = 1
        }
        var c = makeURL(ssoLoginUrl, b);
        excuteScript(me.scriptId, c, "gb2312");
        return !0
    }
      , getCookieExpireTimeByDomain = function(a) {
        var b = null
          , c = null;
        c = me.getSinaCookie();
        c && (b = c.et);
        return b
    }
      , addEventListener = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
    }
      , prototypeTimer = function(a) {
        var b = !1;
        this.start = function(c, d) {
            a && (b = setTimeout(d, c))
        }
        ;
        this.clear = function(c) {
            if (a) {
                clearTimeout(b);
                b = !1
            }
        }
        ;
        this.isset = function() {
            return b !== !1
        }
    }
      , excuteScript = function(a, b, c) {
        removeNode(a);
        var d = document.getElementsByTagName("head")[0]
          , e = document.createElement("script");
        e.charset = c || "gb2312";
        e.id = a;
        e.type = "text/javascript";
        e.src = makeURL(b, {
            client: me.getClientType(),
            _: (new Date).getTime()
        });
        d.appendChild(e)
    }
      , excuteIframe = function(a, b) {
        removeNode(a);
        var c = document.getElementsByTagName("body")[0]
          , d = document.createElement("iframe");
        d.style.display = "none";
        d.src = makeURL(b, {
            client: me.getClientType(),
            _: (new Date).getTime()
        });
        d.isReady = !1;
        addEventListener(d, "load", function() {
            if (!d.isReady) {
                d.isReady = !0;
                me.doCrossDomainCallBack({
                    scriptId: a
                })
            }
        });
        c.appendChild(d)
    }
      , makeRequest = function(a, b, c, d) {
        var e = {
            entry: me.getEntry(),
            gateway: 1,
            from: me.from,
            savestate: c,
            qrcode_flag: d,
            useticket: me.useTicket ? 1 : 0
        };
        me.failRedirect && (me.loginExtraQuery.frd = 1);
        e = objMerge(e, {
            pagerefer: document.referrer || ""
        });
        e = objMerge(e, me.loginExtraFlag);
        e = objMerge(e, me.loginExtraQuery);
        e.su = sinaSSOEncoder.base64.encode(urlencode(a));
        me.service && (e.service = me.service);
        if (me.loginType & rsa && me.servertime && sinaSSOEncoder && sinaSSOEncoder.RSAKey) {
            e.servertime = me.servertime;
            e.nonce = me.nonce;
            e.pwencode = "rsa2";
            e.rsakv = me.rsakv;
            var f = new sinaSSOEncoder.RSAKey;
            f.setPublic(me.rsaPubkey, "10001");
            b = f.encrypt([me.servertime, me.nonce].join("\t") + "\n" + b)
        } else if (me.loginType & wsse && me.servertime && sinaSSOEncoder && sinaSSOEncoder.hex_sha1) {
            e.servertime = me.servertime;
            e.nonce = me.nonce;
            e.pwencode = "wsse";
            b = sinaSSOEncoder.hex_sha1("" + sinaSSOEncoder.hex_sha1(sinaSSOEncoder.hex_sha1(b)) + me.servertime + me.nonce)
        }
        e.sp = b;
        try {
            e.sr = window.screen.width + "*" + window.screen.height
        } catch (g) {}
        return e
    }
      , loginByXMLHttpRequest = function(a, b, c, d) {
        if (typeof XMLHttpRequest == "undefined")
            return !1;
        var e = new XMLHttpRequest;
        if (!1 in e)
            return !1;
        var f = makeXMLRequestQuery(a, b, c, d)
          , g = makeURL(ssoLoginUrl, {
            client: me.getClientType(),
            _: (new Date).getTime()
        });
        try {
            e.open("POST", g, !0);
            e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            e.withCredentials = !0;
            e.onreadystatechange = function() {
                e.readyState == 4 && e.status == 200 && me.loginCallBack(parseJSON(e.responseText))
            }
            ;
            e.send(httpBuildQuery(f))
        } catch (h) {
            return !1
        }
        return !0
    }
      , makeXMLRequestQuery = function(a, b, c, d) {
        if (me.appLoginURL[me.domain]) {
            me.useTicket = 1;
            me.service = me.appDomainService[me.domain] || me.service
        }
        var e = 0;
        me.domain && (e = 2);
        me.appLoginURL[me.domain] || (e = 3);
        me.cdult !== !1 && (e = me.cdult);
        if (e == 3) {
            crossDomainTime = me.crossDomainTime;
            delete me.appLoginURL[me.domain]
        }
        var f = makeRequest(a, b, c, d);
        return objMerge(f, {
            encoding: "UTF-8",
            cdult: e,
            domain: me.domain,
            useticket: me.appLoginURL[me.domain] ? 1 : 0,
            prelt: preloginTime,
            returntype: "TEXT"
        })
    };
    objMerge = function(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    };

function getpwd(user, pwd, ){
    return makeRequest(user, pwd, 7, false);
}


var sinaSSOEncoder = sinaSSOEncoder || {};
(function() {
    var a = 0
      , b = 8;
    this.hex_sha1 = function(a) {
        return i(c(h(a), a.length * b))
    }
    ;
    var c = function(a, b) {
        a[b >> 5] |= 128 << 24 - b % 32;
        a[(b + 64 >> 9 << 4) + 15] = b;
        var c = Array(80)
          , h = 1732584193
          , i = -271733879
          , j = -1732584194
          , k = 271733878
          , l = -1009589776;
        for (var m = 0; m < a.length; m += 16) {
            var n = h
              , o = i
              , p = j
              , q = k
              , r = l;
            for (var s = 0; s < 80; s++) {
                s < 16 ? c[s] = a[m + s] : c[s] = g(c[s - 3] ^ c[s - 8] ^ c[s - 14] ^ c[s - 16], 1);
                var t = f(f(g(h, 5), d(s, i, j, k)), f(f(l, c[s]), e(s)));
                l = k;
                k = j;
                j = g(i, 30);
                i = h;
                h = t
            }
            h = f(h, n);
            i = f(i, o);
            j = f(j, p);
            k = f(k, q);
            l = f(l, r)
        }
        return [h, i, j, k, l]
    }
      , d = function(a, b, c, d) {
        return a < 20 ? b & c | ~b & d : a < 40 ? b ^ c ^ d : a < 60 ? b & c | b & d | c & d : b ^ c ^ d
    }
      , e = function(a) {
        return a < 20 ? 1518500249 : a < 40 ? 1859775393 : a < 60 ? -1894007588 : -899497514
    }
      , f = function(a, b) {
        var c = (a & 65535) + (b & 65535)
          , d = (a >> 16) + (b >> 16) + (c >> 16);
        return d << 16 | c & 65535
    }
      , g = function(a, b) {
        return a << b | a >>> 32 - b
    }
      , h = function(a) {
        var c = []
          , d = (1 << b) - 1;
        for (var e = 0; e < a.length * b; e += b)
            c[e >> 5] |= (a.charCodeAt(e / b) & d) << 24 - e % 32;
        return c
    }
      , i = function(b) {
        var c = a ? "0123456789ABCDEF" : "0123456789abcdef"
          , d = "";
        for (var e = 0; e < b.length * 4; e++)
            d += c.charAt(b[e >> 2] >> (3 - e % 4) * 8 + 4 & 15) + c.charAt(b[e >> 2] >> (3 - e % 4) * 8 & 15);
        return d
    }
      , j = function(a) {
        var b = ""
          , c = 0;
        for (; c < a.length; c++)
            b += "%" + k(a[c]);
        return decodeURIComponent(b)
    }
      , k = function(a) {
        var b = "0" + a.toString(16);
        return b.length <= 2 ? b : b.substr(1)
    };
    this.base64 = {
        encode: function(a) {
            a = "" + a;
            if (a == "")
                return "";
            var b = "", c, d, e = "", f, g, h, i = "", j = 0;
            do {
                c = a.charCodeAt(j++);
                d = a.charCodeAt(j++);
                e = a.charCodeAt(j++);
                f = c >> 2;
                g = (c & 3) << 4 | d >> 4;
                h = (d & 15) << 2 | e >> 6;
                i = e & 63;
                isNaN(d) ? h = i = 64 : isNaN(e) && (i = 64);
                b = b + this._keys.charAt(f) + this._keys.charAt(g) + this._keys.charAt(h) + this._keys.charAt(i);
                c = d = e = "";
                f = g = h = i = ""
            } while (j < a.length);return b
        },
        decode: function(a, b, c) {
            var d = function(a, b) {
                for (var c = 0; c < a.length; c++)
                    if (a[c] === b)
                        return c;
                return -1
            };
            typeof a == "string" && (a = a.split(""));
            var e = [], f, g, h = "", i, j, k, l = "";
            a.length % 4 == 0;
            var m = /[^A-Za-z0-9+\/=]/
              , n = this._keys.split("");
            if (b == "urlsafe") {
                m = /[^A-Za-z0-9-_=]/;
                n = this._keys_urlsafe.split("")
            }
            if (b == "subp_v2") {
                m = /[^A-Za-z0-9_=-]/;
                n = this._subp_v2_keys.split("")
            }
            if (b == "subp_v3_3") {
                m = /[^A-Za-z0-9-_.-]/;
                n = this._subp_v3_keys_3.split("")
            }
            var o = 0;
            if (b == "binnary") {
                n = [];
                for (o = 0; o <= 64; o++)
                    n[o] = o + 128
            }
            if (b != "binnary" && m.test(a.join("")))
                return c == "array" ? [] : "";
            o = 0;
            do {
                i = d(n, a[o++]);
                j = d(n, a[o++]);
                k = d(n, a[o++]);
                l = d(n, a[o++]);
                f = i << 2 | j >> 4;
                g = (j & 15) << 4 | k >> 2;
                h = (k & 3) << 6 | l;
                e.push(f);
                k != 64 && k != -1 && e.push(g);
                l != 64 && l != -1 && e.push(h);
                f = g = h = "";
                i = j = k = l = ""
            } while (o < a.length);if (c == "array")
                return e;
            var p = ""
              , q = 0;
            for (; q < e.lenth; q++)
                p += String.fromCharCode(e[q]);
            return p
        },
        _keys: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        _keys_urlsafe: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        _subp_v2_keys: "uAL715W8e3jJCcNU0lT_FSXVgxpbEDdQ4vKaIOH2GBPtfzqsmYZo-wRM9i6hynrk=",
        _subp_v3_keys_3: "5WFh28sGziZTeS1lBxCK-HgPq9IdMUwknybo.LJrQD3uj_Va7pE0XfcNR4AOYvm6t"
    };
    this.Cookie = {
        decode: function(a) {
            var b = []
              , c = a.substr(0, 3)
              , d = a.substr(3);
            switch (c) {
            case "v01":
                for (var e = 0; e < d.length; e += 2)
                    b.push(parseInt(d.substr(e, 2), 16));
                return decodeURIComponent(j(sinaSSOEncoder.base64.decode(b, "binnary", "array")));
            case "v02":
                d = d.replace(/\./g, "=");
                b = sinaSSOEncoder.base64.decode(d, "urlsafe", "array");
                return j(sinaSSOEncoder.base64.decode(b, "binnary", "array"));
            default:
                return decodeURIComponent(a)
            }
        }
    };
    this.getSUBPCookie = {
        __parse: function(a) {
            var b, c, d, e, f, g = 0, h, i = {}, k = "", l = "";
            if (!a)
                return i;
            do {
                c = a[g];
                b = ++g;
                for (h = g; h < c + b; h++,
                g++)
                    k += String.fromCharCode(a[h]);
                e = a[g];
                b = ++g;
                if (k == "status" || k == "flag")
                    for (h = g; h < e + b; h++,
                    g++)
                        l += a[h];
                else {
                    l = a.slice(b, e + b);
                    try {
                        l = j(l)
                    } catch (m) {
                        l = ""
                    }
                    g += e
                }
                i[k] = l;
                k = "";
                l = ""
            } while (g < a.length);return i
        },
        decode: function(a) {
            var b = [], c, d = a.substr(0, 3), e = decodeURIComponent(a.substr(3));
            switch (d) {
            case "002":
                b = sinaSSOEncoder.base64.decode(e, "subp_v2", "array");
                return sinaSSOEncoder.getSUBPCookie.__parse(b);
            case "003":
                c = e.substr(0, 1);
                e = e.substr(1);
                b = sinaSSOEncoder.base64.decode(e, "subp_v3_" + c, "array");
                return sinaSSOEncoder.getSUBPCookie.__parse(b);
            default:
                return decodeURIComponent(a)
            }
        }
    }
}
).call(sinaSSOEncoder);