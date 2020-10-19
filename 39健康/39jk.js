var LightBox, CPassport, Passport, host, da, month, dastr, isIE = document.all ? !0 : !1,
    isIE6 = isIE && 6 == [/MSIE (\d+)\.0/i.exec(navigator.userAgent)][0][1], $$ = function (a) {
        return "string" == typeof a ? document.getElementById(a) : a
    }, Class = {
        create: function () {
            return function () {
                this.initialize.apply(this, arguments)
            }
        }
    }, Extend = function (a, b) {
        for (var c in b) a[c] = b[c]
    }, Bind = function (a, b) {
        return function () {
            return b.apply(a, arguments)
        }
    }, Each = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) b(a[c], c)
    }, Contains = function (a, b) {
        return a.contains ? a != b && a.contains(b) : !!(16 & a.compareDocumentPosition(b))
    }, OverLay = Class.create();
OverLay.prototype = {
    initialize: function (options) {
        with (this.SetOptions(options), this.Lay = $$(this.options.Lay) || document.body.insertBefore(document.createElement("div"), document.body.childNodes[0]), this.Color = this.options.Color, this.Opacity = parseInt(this.options.Opacity), this.zIndex = parseInt(this.options.zIndex), this.Lay.style) display = "none", zIndex = this.zIndex, left = top = 0, position = "fixed", width = height = "100%", opacity = .5;
        isIE6 && (this.Lay.style.position = "absolute", this._resize = Bind(this, function () {
            this.Lay.style.width = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) + "px", this.Lay.style.height = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) + "px"
        }), this.Lay.innerHTML = '<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;filter:alpha(opacity=0);"></iframe>')
    }, SetOptions: function (a) {
        this.options = {Lay: null, Color: "#000", Opacity: 25, zIndex: 1e3}, Extend(this.options, a || {})
    }, Show: function () {
        with (isIE6 && (this._resize(), window.attachEvent("onresize", this._resize)), this.Lay.style) isIE ? filter = "alpha(opacity:" + this.Opacity + ")" : opacity = this.Opacity / 100, backgroundColor = this.Color, display = "block"
    }, Close: function () {
        this.Lay.style.display = "none", isIE6 && window.detachEvent("onresize", this._resize)
    }
}, LightBox = Class.create(), LightBox.prototype = {
    initialize: function (a, b) {
        this.Box = $$(a), this.OverLay = new OverLay(b), this.SetOptions(b), this.Fixed = !!this.options.Fixed, this.Over = !!this.options.Over, this.Center = !!this.options.Center, this.onShow = this.options.onShow, this.Box.style.zIndex = this.OverLay.zIndex + 1, this.Box.style.display = "none", isIE6 && (this._top = this._left = 0, this._select = [], this._fixed = Bind(this, function () {
            this.Center ? this.SetCenter() : this.SetFixed()
        }))
    }, SetOptions: function (a) {
        this.options = {
            Over: !0, Fixed: !0, Center: !0, onShow: function () {
            }
        }, Extend(this.options, a || {})
    }, SetFixed: function () {
        this.Box.style.top = document.documentElement.scrollTop - this._top + this.Box.offsetTop + "px", this.Box.style.left = document.documentElement.scrollLeft - this._left + this.Box.offsetLeft + "px", this._top = document.documentElement.scrollTop, this._left = document.documentElement.scrollLeft
    }, SetCenter: function () {
        this.Box.style.marginTop = document.documentElement.scrollTop - this.Box.offsetHeight / 2 + "px", this.Box.style.marginLeft = document.documentElement.scrollLeft - this.Box.offsetWidth / 2 + "px"
    }, Show: function () {
        this.Box.style.position = this.Fixed && !isIE6 ? "fixed" : "absolute", this.Over && this.OverLay.Show(), this.Box.style.display = "block", this.Center && (this.Box.style.top = this.Box.style.left = "50%", this.Fixed ? (this.Box.style.marginTop = -this.Box.offsetHeight / 2 + "px", this.Box.style.marginLeft = -this.Box.offsetWidth / 2 + "px") : this.SetCenter()), isIE6 && (this.Over || (this._select.length = 0, Each(document.getElementsByTagName("select"), Bind(this, function (a) {
            Contains(this.Box, a) || (a.style.visibility = "hidden", this._select.push(a))
        }))), this.Center ? this.SetCenter() : this.Fixed && this.SetFixed(), this.Fixed && window.attachEvent("onscroll", this._fixed)), this.onShow()
    }, Close: function () {
        this.Box.style.display = "none", this.OverLay.Close(), isIE6 && (window.detachEvent("onscroll", this._fixed), Each(this._select, function (a) {
            a.style.visibility = "visible"
        }))
    }
}, CPassport = Class.create(), CPassport.prototype = {
    initialize: function () {
        this.options = {
            AppId: 0,
            PlatformId: 1,
            LoginCallback: null,
            DisableAutoEventHandle: !1,
            CheckLoginCache: 1440,
            MyHost: "my.39.net",
            Protocol: window.location.protocol,
            LoginModel: 0,
            LoginSlide: 0,
            LoginSlideShow: 2,
            UserType: 1,
            RefUrl: window.location.href,
            OpenidUrl: "",
            BackUrl: "",
            CountdownButtonText: "获取短信验证码",
            CountdownTextTemp: "{0}秒",
            SwitchActiveClassName: "swiper-pagination-bullet-active",
            InfoAlertClassName: "alert",
            ControlNames: [{
                loginName: "loginName0",
                loginNameInfo: "loginNameInfo0",
                password: "password0",
                passwordInfo: "passwordInfo0",
                safeCodeImage: "safeCodeImage0",
                safeCode: "safeCode0",
                safeCodeInfo: "safeCodeInfo0",
                safeCodeArea: "safeCodeArea0",
                info: "passwordInfo0",
                sendSmsBtn: "sendSmsBtn0",
                loginBtn: "loginBtn0",
                loginSwitch: "loginSwitch0",
                loginContainer: "loginContainer0"
            }, {
                loginName: "loginName1",
                loginNameInfo: "loginNameInfo1",
                password: "password1",
                passwordInfo: "passwordInfo1",
                safeCodeImage: "safeCodeImage1",
                safeCode: "safeCode1",
                safeCodeInfo: "safeCodeInfo1",
                safeCodeArea: "safeCodeArea1",
                info: "passwordInfo1",
                sendSmsBtn: "sendSmsBtn1",
                loginBtn: "loginBtn1",
                loginSwitch: "loginSwitch1",
                loginContainer: "loginContainer1"
            }]
        }, this.loginBox = null, this._LoginState = !1, this.OAuthWindow = null, this.CountdownTimer = null, this.CountdownButton = "", this.CountdownSecond = 120, this.FindPwdUrl = "", this.RegisterUrl = ""
    }, SetOptions: function (a) {
        a && a.CheckLoginCache && (a.CheckLoginCache = a.CheckLoginCache < 60 ? 60 : a.CheckLoginCache), Extend(this.options, a || {}), this.FindPwdUrl = this.options.Protocol + "//" + this.options.MyHost + "/passport/findPwd.aspx?ref=" + encodeURIComponent(this.options.RefUrl);
        var b = "" == this.options.OpenidUrl ? 1 : 0;
        this.RegisterUrl = this.options.Protocol + "//" + this.options.MyHost + "/passport/Reg.aspx?usertype=" + this.options.UserType + "&regauto=" + b + "&backurl=" + encodeURIComponent(this.options.BackUrl) + "&ref=" + encodeURIComponent(this.options.RefUrl)
    }, PopShow: function () {
        Passport.loginBox && Passport.loginBox.Show()
    }, PopClose: function () {
        Passport.loginBox && Passport.loginBox.Close()
    }, PopLogin: function () {
        var e, f, g, a = Passport.options.ControlNames[Passport.options.LoginSlide].loginName,
            b = Passport.options.ControlNames[Passport.options.LoginSlide].password,
            c = Passport.options.ControlNames[Passport.options.LoginSlide].safeCode,
            d = Passport.options.ControlNames[Passport.options.LoginSlide].loginBtn;
        jQuery("#" + d).html("正在登录.."), e = jQuery("#" + a).val(), f = jQuery("#" + b).val(), g = jQuery("#" + c).val(), Passport.Login(e, f, g, Passport.PopLoginCallBack)
    }, PopLoginPhone: function () {
        var d, e, a = Passport.options.ControlNames[Passport.options.LoginSlide].loginName,
            b = Passport.options.ControlNames[Passport.options.LoginSlide].password,
            c = Passport.options.ControlNames[Passport.options.LoginSlide].loginBtn;
        jQuery("#" + c).html("正在登录.."), d = jQuery("#" + a).val(), e = jQuery("#" + b).val(), Passport.LoginPhone(d, e, Passport.PopLoginCallBack)
    }, PopSendMessageToken: function () {
        var a = Passport.options.ControlNames[Passport.options.LoginSlide].loginName,
            b = Passport.options.ControlNames[Passport.options.LoginSlide].safeCode,
            c = Passport.options.ControlNames[Passport.options.LoginSlide].sendSmsBtn, d = jQuery("#" + a).val(),
            e = jQuery("#" + b).val();
        Passport.SendMessageToken(d, e, c, Passport.PopLoginCallBack)
    }, PopLoginCallBack: function (a, b) {
        var c, d, e, f, g, h, i;
        Passport.options.LoginCallback && Passport.options.LoginCallback(a, b), Passport.options.DisableAutoEventHandle || (c = Passport.options.ControlNames[Passport.options.LoginSlide].loginNameInfo, d = Passport.options.ControlNames[Passport.options.LoginSlide].passwordInfo, e = Passport.options.ControlNames[Passport.options.LoginSlide].safeCodeInfo, f = Passport.options.ControlNames[Passport.options.LoginSlide].info, g = Passport.options.ControlNames[Passport.options.LoginSlide].password, h = Passport.options.ControlNames[Passport.options.LoginSlide].safeCodeArea, i = Passport.options.ControlNames[Passport.options.LoginSlide].loginBtn, "check" == a ? b.Success ? (Passport.PopInfo(c, ""), Passport.PopInfo(d, ""), Passport.PopInfo(e, ""), Passport.PopInfo(f, "")) : ("loginname" == b.ctype ? Passport.PopInfo(c, b.Info) : "pwd" == b.ctype ? Passport.PopInfo(d, b.Info) : "needsafecode" == b.ctype ? (Passport.PopInfo(e, b.Info), Passport.UpdateSC(), jQuery("#" + h).show()) : "checksafecode" == b.ctype ? Passport.PopInfo(e, b.Info) : "ipban" == b.ctype ? $("#loginPopForm").remove() : Passport.PopInfo(f, b.Info), jQuery("#" + i).html("登录")) : "login" == a ? (b.Success ? (jQuery("#" + g).val(""), Passport.PopClose(), "" == Passport.options.RefUrl ? Passport.Reload() : Passport.Reload(Passport.options.RefUrl)) : "loginname" == b.ctype ? Passport.PopInfo(c, b.Info) : "pwd" == b.ctype ? Passport.PopInfo(d, b.Info) : "needsafecode" == b.ctype ? (Passport.PopInfo(e, b.Info), Passport.UpdateSC(), jQuery("#" + h).show()) : "checksafecode" == b.ctype ? Passport.PopInfo(e, b.Info) : "ipban" == b.ctype ? $("#loginPopForm").remove() : Passport.PopInfo(f, b.Info), jQuery("#" + i).html("登录")) : "error" == a && (Passport.PopInfo(f, b.Info), jQuery("#" + i).html("登录")))
    }, PopInfo: function (a, b) {
        Passport.IsEmpty(b) ? (jQuery("#" + a).removeClass(), jQuery("#" + a).hide()) : (jQuery("#" + a).show(), jQuery("#" + a).addClass(Passport.options.InfoAlertClassName), jQuery("#" + a).html(b))
    }, Login: function (a, b, c, d) {
        if (!Passport._LoginState) {
            Passport._LoginState = !0;
            var e = Passport.CheckLoginVal(a, b, c);
            d && d("check", e), e.Success ? jQuery.ajax({
                url: Passport.options.Protocol + "//" + Passport.options.MyHost + "/post.ashx",
                type: "get",
                data: {
                    action: "jsonploginf0",
                    uname: Passport.f0(a),
                    pwd: Passport.f0(b),
                    safecode: encodeURIComponent(c),
                    app: Passport.options.AppId
                },
                dataType: "jsonp",
                success: function (a) {
                    Passport._LoginState = !1, d && (e = {
                        Success: !1,
                        ctype: "login",
                        Info: ""
                    }, a.Success ? e.Success = !0 : a.Data ? "needSafeCode" == a.Data ? (e.ctype = "needsafecode", e.Info = a.Info) : "checksafecode" == a.Data ? (e.ctype = "checksafecode", e.Info = a.Info) : "None" == a.Data ? (e.ctype = "ipban", e.Info = a.Info) : "pwd" == a.Data ? (e.ctype = "pwd", e.Info = a.Info) : "LoginError" == a.Data ? (e.ctype = "loginerror", e.Info = a.Info) : (e.ctype = a.Data, e.Info = a.Info) : e.Info = a.Info, d("login", e))
                },
                error: function () {
                    Passport._LoginState = !1;
                    var e = {Success: !1, Info: "服务器忙，请稍后再尝试"};
                    d && d("error", e)
                }
            }) : Passport._LoginState = !1
        }
    }, LoginPhone: function (a, b, c) {
        if (!Passport._LoginState) {
            Passport._LoginState = !0;
            var d = Passport.CheckLoginPhoneVal(a, b);
            c && c("check", d), d.Success ? jQuery.ajax({
                url: Passport.options.Protocol + "//" + Passport.options.MyHost + "/post.ashx",
                type: "get",
                data: {
                    action: "jsonpphoneloginf0",
                    uname: Passport.f0(a),
                    pwd: Passport.f0(b),
                    app: Passport.options.AppId
                },
                dataType: "jsonp",
                success: function (a) {
                    Passport._LoginState = !1, c && (d = {
                        Success: !1,
                        ctype: "login",
                        Info: ""
                    }, a.Success ? d.Success = !0 : a.Data ? "None" == a.Data ? (d.ctype = "ipban", d.Info = a.Info) : "pwd" == a.Data ? (d.ctype = "pwd", d.Info = a.Info) : "LoginError" == a.Data ? (d.ctype = "loginerror", d.Info = a.Info) : (d.ctype = a.Data, d.Info = a.Info) : d.Info = a.Info, c("login", d))
                },
                error: function () {
                    Passport._LoginState = !1;
                    var e = {Success: !1, Info: "服务器忙，请稍后再尝试"};
                    c && c("error", e)
                }
            }) : Passport._LoginState = !1
        }
    }, SendMessageToken: function (a, b, c, d) {
        if (!Passport._LoginState) {
            Passport._LoginState = !0;
            var e = Passport.CheckLoginName(a, !0);
            e.Success && (e = Passport.CheckSafeCode(b)), d && d("check", e), e.Success ? jQuery.ajax({
                url: Passport.options.Protocol + "//" + Passport.options.MyHost + "/post.ashx",
                type: "get",
                data: {
                    action: "sendmessagetokenf0",
                    uname: Passport.f0(a),
                    safecode: Passport.f0(b),
                    app: Passport.options.AppId,
                    ver: "p2.0"
                },
                dataType: "jsonp",
                success: function (a) {
                    Passport._LoginState = !1, d && (e = {
                        Success: !1,
                        ctype: "check",
                        Info: ""
                    }, a.Success ? (e.Success = !0, Passport.IsEmpty(c) || (Passport.CountdownButton = c, Passport.Countdown())) : a.Data ? "loginname" == a.Data ? (e.ctype = "loginname", e.Info = a.Info) : "pwd" == a.Data ? (e.ctype = "pwd", e.Info = a.Info) : "checksafecode" == a.Data ? (e.ctype = "checksafecode", e.Info = a.Info) : (e.ctype = a.Data, e.Info = a.Info) : e.Info = a.Info, d("check", e))
                },
                error: function () {
                    Passport._LoginState = !1;
                    var e = {Success: !1, Info: "服务器忙，请稍后再尝试"};
                    d && d("error", e)
                }
            }) : Passport._LoginState = !1
        }
    }, Logout: function (a) {
        var b = Passport.GetCookie("pid");
        b > 0 && jQuery.ajax({
            url: Passport.options.Protocol + "//" + Passport.options.MyHost + "/post.ashx",
            type: "get",
            data: {action: "jsonplogout", pid: b},
            dataType: "jsonp",
            success: function (b) {
                b.Success && Passport.Reload(), a || a("logout", b)
            },
            error: function () {
                var e = {Success: !1, ctype: "logouterr", Info: "登出失败"};
                a || a("logout", e)
            }
        })
    }, CheckLogin: function (a) {
        var e, b = !1, c = Passport.GetCookie("pid"), d = Passport.GetCookie("verify");
        return c > 0 && d > 0 && (a && (e = Passport.GetCookie("CheckLoginCache"), e && Passport.options.CheckLoginCache > 0 ? a && a({Success: !0}) : jQuery.ajax({
            url: Passport.options.Protocol + "//" + Passport.options.MyHost + "/post.ashx",
            type: "get",
            data: {action: "jsonpverify", pid: c, verify: d},
            dataType: "jsonp",
            success: function (b) {
                Passport.options.CheckLoginCache > 0 && Passport.SetCookie("CheckLoginCache", !0, Passport.options.CheckLoginCache), a && a(b)
            },
            error: function () {
                var e = {Success: !1, Info: "服务器出错，请等待一会再尝试"};
                a && a(e)
            }
        })), b = !0), b
    }, NeedSafeCode: function (a) {
        var b = {Success: !0, ctype: "needsafecode", Info: ""};
        return jQuery.ajax({
            url: Passport.options.Protocol + "//" + Passport.options.MyHost + "/post.ashx",
            type: "get",
            data: {action: "jsonpshowsafecode", uname: a},
            async: !1,
            dataType: "jsonp",
            success: function (a) {
                a.Success || (b.Success = !1, b.Info = a.Info)
            },
            error: function () {
                b.Success = !1, b.Info = "图形验证码服务错误"
            }
        }), b
    }, IsSafeCodeShow: function () {
        var a = Passport.options.ControlNames[Passport.options.LoginSlide].safeCodeArea;
        return "block" == jQuery("#" + a).css("display") ? !0 : !1
    }, VerifySafeCode: function (a) {
        var b = {Success: !0, ctype: "checksafecode", Info: ""};
        return jQuery.ajax({
            url: Passport.options.Protocol + "//" + Passport.options.MyHost + "/post.ashx",
            type: "get",
            data: {action: "checksafecode", safecode: a},
            async: !1,
            dataType: "jsonp",
            success: function (a) {
                a.Success || (b.Success = !1, b.Info = a.Info)
            },
            error: function () {
                b.Success = !1, b.Info = "图形验证码服务错误"
            }
        }), b
    }, CheckSafeCode: function (a) {
        var b = {Success: !0, ctype: "checksafecode", Info: ""};
        return Passport.IsEmpty(a) ? (b.Info = "图形验证码不能为空", b.Success = !1, b) : b
    }, CheckLoginVal: function (a, b, c) {
        var d = Passport.CheckLoginName(a);
        return d.Success ? (d = Passport.CheckPassword(b), d.Success ? Passport.IsSafeCodeShow() && (d = Passport.CheckSafeCode(c), !d.Success) ? d : d : d) : d
    }, CheckLoginPhoneVal: function (a, b) {
        var c = Passport.CheckLoginName(a, !0);
        return c.Success ? (c = Passport.CheckToken(b), c.Success ? c : c) : c
    }, CheckLoginName: function (a, b) {
        var d, c = {Success: !0, ctype: "loginname", Info: ""};
        if (b) {
            if (Passport.IsEmpty(a)) return c.Info = "手机号不能为空", c.Success = !1, c;
            if (!Passport.IsPhone(a)) return c.Info = "手机号错误,请重新输入!", c.Success = !1, c
        } else {
            if (Passport.IsEmpty(a)) return c.Info = "登录名不能为空", c.Success = !1, c;
            if (d = Passport.GetLength(a), 3 > d || d > 64) return c.Info = "登录名错误,请重新输入!", c.Success = !1, c;
            if (!(Passport.IsPhone(a) || Passport.IsEmail(a) || Passport.IsUserName(a))) return c.Info = "登录名错误,请重新输入!", c.Success = !1, c
        }
        return c
    }, CheckPassword: function (a) {
        var c, b = {Success: !0, ctype: "pwd", Info: ""};
        return Passport.IsEmpty(a) ? (b.Info = "密码不能为空", b.Success = !1, b) : (c = Passport.GetLength(a), 6 > c || c > 16 ? (b.Info = "密码格式不正确,请重新输入!", b.Success = !1, b) : b)
    }, CheckToken: function (a) {
        var c, b = {Success: !0, ctype: "pwd", Info: ""};
        return Passport.IsEmpty(a) ? (b.Info = "验证码不能为空", b.Success = !1, b) : (c = Passport.GetLength(a), 6 == c && Passport.IsNumber(a) ? b : (b.Info = "验证码错误,请重新输入!", b.Success = !1, b))
    }, UpdateSC: function (a) {
        var b = Passport.options.Protocol + "//" + Passport.options.MyHost + "/other/SafeCodeImg.aspx?0&ts=" + (new Date).valueOf();
        a || (a = Passport.options.ControlNames[Passport.options.LoginSlide].safeCodeImage), $("#" + a).attr("src", b)
    }, GetLoginUser: function () {
        var c, d, e, a = Passport.GetCookie("pid"), b = Passport.GetCookie("verify");
        return a > 0 && b > 0 ? (c = Passport.GetCookie("username"), d = Passport.GetCookie("nickname"), e = Passport.GetCookie("picurl"), Passport.CreateUser(a, c, d, b, e)) : null
    }, CreateUser: function (a, b, c, d, e) {
        return {pid: a, username: b, nickname: c, verify: d, picurl: e}
    }, Countdown: function () {
        Passport.CountdownSecond--, jQuery("#" + Passport.CountdownButton).html(Passport.options.CountdownTextTemp.replace("{0}", Passport.CountdownSecond)), Passport.CountdownSecond <= 0 ? (jQuery("#" + Passport.CountdownButton).removeAttr("disabled"), clearTimeout(Passport.CountdownTimer), Passport.CountdownSecond = 120, jQuery("#" + Passport.CountdownButton).html(Passport.options.CountdownButtonText)) : (jQuery("#" + Passport.CountdownButton).removeAttr("disabled"), jQuery("#" + Passport.CountdownButton).attr("disabled", "disabled"), Passport.CountdownTimer = setTimeout("Passport.Countdown()", 1e3))
    }, IsPhone: function (a) {
        return /^1\d{10}$/.test(a)
    }, IsEmail: function (a) {
        return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(a)
    }, IsUserName: function (a) {
        return /^[a-zA-Z0-9]+[a-zA-Z0-9-]*[a-zA-Z0-9]+$/.test(a)
    }, IsNumber: function (a) {
        return /^\d+$/.test(a)
    }, GetLength: function (a) {
        var b = 0;
        for (i = 0; i < a.length; i++) a.charCodeAt(i) > 256 ? b += 2 : b++;
        return b
    }, IsEmpty: function (a) {
        return null != a && "" != a && a ? !1 : !0
    }, f0: function (a) {
        var f, b = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"),
            c = new Array(116, 120, 122, 51, 57), d = encodeURIComponent(a), e = "";
        for (i = 0; i < d.length; i++) f = c[i % 5], s = String.fromCharCode(d.charCodeAt(i) ^ f), e += b[s.charCodeAt(0) >> 4] + b[15 & s.charCodeAt(0)];
        return e
    }, SetCookie: function (a, b, c) {
        var d = new Date;
        d.setTime(d.getTime() + 1e3 * 60 * c), document.cookie = a + "=" + encodeURIComponent(b) + ";expires=" + d.toGMTString() + ";path=/;domain=39.net"
    }, GetCookie: function (a) {
        var b = document.cookie.match(new RegExp("(^| )" + a + "=([^;]*)(;|$)"));
        return null != b ? decodeURIComponent(b[2]) : null
    }, GetCookieIgnoreCase: function (a) {
        var b = new RegExp(["(?:^| )", a, "=([^;]*)"].join(""), "i"), c = document.cookie.match(b);
        return c ? decodeURIComponent(c[1]) : null
    }, DelCookie: function (a) {
        var c, b = new Date;
        b.setTime(b.getTime() - 1), c = GetCookie(a), null != c && (document.cookie = a + "=" + c + ";expires=" + b.toGMTString() + ";path=/;domain=39.net")
    }, OAuthParam: function (a) {
        var b = {OpenidUrl: "", BackUrl: "", RefUrl: "", FName: "", UserType: "1", Refresh: "", Target: ""};
        return a || (a = {}), b.OpenidUrl = Passport.IsEmpty(a.OpenidUrl) ? encodeURIComponent(Passport.options.OpenidUrl) : encodeURIComponent(a.OpenidUrl), b.BackUrl = Passport.IsEmpty(a.BackUrl) ? encodeURIComponent(Passport.options.BackUrl) : encodeURIComponent(a.BackUrl), b.RefUrl = Passport.IsEmpty(a.RefUrl) ? Passport.IsEmpty(Passport.options.RefUrl) ? encodeURIComponent(window.location.href) : encodeURIComponent(Passport.options.RefUrl) : encodeURIComponent(a.RefUrl), b.FName = Passport.IsEmpty(a.FName) ? "Passport.OAuthCallback" : a.FName, b.UserType = Passport.IsEmpty(a.UserType) ? Passport.options.UserType.toString() : a.UserType, b.Refresh = Passport.IsEmpty(a.Refresh) ? Passport.IsEmpty(Passport.options.Refresh) ? encodeURIComponent(window.location.href) : encodeURIComponent(Passport.options.Refresh) : encodeURIComponent(a.Refresh), b.Target = Passport.IsEmpty(a.Target) ? "" : a.Target, b
    }, LoginQQ: function (a) {
        var b = Passport.OAuthParam(a),
            c = window.location.protocol + "//" + Passport.options.MyHost + "/account/qq_login.aspx?appid=" + Passport.options.AppId + "&platform=" + Passport.options.PlatformId + "&regurl=" + b.RefUrl + "&fname=" + b.FName + "&usertype=" + b.UserType + "&openidUrl=" + b.OpenidUrl + "&backurl=" + b.BackUrl + "&refresh=" + b.Refresh + "&target=" + b.Target;
        Passport.IsEmpty(b.Refresh) ? Passport.OAuthWindow = window.open(c, "TencentLogin", "width=750,height=450,menubar=0,scrollbars=0, status=1,titlebar=0,toolbar=0,location=1") : window.location.href = c
    }, LoginWeibo: function (a) {
        var b = Passport.OAuthParam(a),
            c = window.location.protocol + "//" + Passport.options.MyHost + "/account/weibo_login.aspx?appid=" + Passport.options.AppId + "&platform=" + Passport.options.PlatformId + "&regurl=" + b.RefUrl + "&fname=" + b.FName + "&usertype=" + b.UserType + "&openidUrl=" + b.OpenidUrl + "&backurl=" + b.BackUrl + "&refresh=" + b.Refresh + "&target=" + b.Target;
        Passport.IsEmpty(b.Refresh) ? Passport.OAuthWindow = window.open(c, "WeiboLogin", "width=450,height=320,menubar=0,scrollbars=0, status=1,titlebar=0,toolbar=0,location=1") : window.location.href = c
    }, LoginWeixin: function (a) {
        var b = Passport.OAuthParam(a),
            c = window.location.protocol + "//" + Passport.options.MyHost + "/account/weixin_login.aspx?appid=" + Passport.options.AppId + "&platform=" + Passport.options.PlatformId + "&regurl=" + b.RefUrl + "&fname=" + b.FName + "&usertype=" + b.UserType + "&openidUrl=" + b.OpenidUrl + "&backurl=" + b.BackUrl + "&refresh=" + b.Refresh + "&target=" + b.Target;
        Passport.IsEmpty(b.Refresh) ? Passport.OAuthWindow = window.open(c, "WeixinLogin", "width=525,height=525,menubar=0,scrollbars=0, status=1,titlebar=0,toolbar=0,location=1") : window.location.href = c
    }, LoginBaidu: function (a) {
        var b = Passport.OAuthParam(a),
            c = window.location.protocol + "//" + Passport.options.MyHost + "/account/baidu_login.aspx?appid=" + Passport.options.AppId + "&platform=" + Passport.options.PlatformId + "&regurl=" + b.RefUrl + "&fname=" + b.FName + "&usertype=" + b.UserType + "&openidUrl=" + b.OpenidUrl + "&backurl=" + b.BackUrl + "&refresh=" + b.Refresh + "&target=" + b.Target;
        Passport.IsEmpty(b.Refresh) ? Passport.OAuthWindow = window.open(c, "BaiduLogin", "width=525,height=525,menubar=0,scrollbars=0, status=1,titlebar=0,toolbar=0,location=1") : window.location.href = c
    }, OAuthCallback: function (a, b) {
        b.ctype = b.loginType, Passport.PopLoginCallBack(a, b)
    }, Reload: function (a) {
        window.location.href = Passport.IsEmpty(a) ? window.location.href : a
    }
}, document.domain = "39.net", Passport = new CPassport, host = window.location.host, "my-55.39.net" == host || "myt.39.net" == host || "my-test.39.net" == host || "my-37.39.net" == host ? Passport.options.MyHost = host : "wapmyt.39.net" == host ? Passport.options.MyHost = "myt.39.net" : "wapmy-37.39.net" == host ? Passport.options.MyHost = "my-37.39.net" : "wapmy-55.39.net" == host && (Passport.options.MyHost = "my-55.39.net"), Passport.SetOptions({}), "undefined" == typeof disable_newlbcss && (da = new Date, month = da.getMonth() + 1, dastr = da.getFullYear() + "" + month + da.getDate(), document.write(unescape("%3Clink rel='stylesheet' href='//image.39.net/pass/css/newlb.css?" + dastr + "'%3E"))), jQuery(document).ready(function () {
    var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, a = Passport.options.ControlNames[0].loginName,
        b = Passport.options.ControlNames[0].loginNameInfo, c = Passport.options.ControlNames[0].password,
        d = Passport.options.ControlNames[0].passwordInfo, e = Passport.options.ControlNames[0].safeCode,
        f = Passport.options.ControlNames[0].safeCodeInfo, g = Passport.options.ControlNames[0].safeCodeArea,
        h = Passport.options.ControlNames[0].safeCodeImage;
    Passport.options.ControlNames[0].sendSmsBtn, j = Passport.options.ControlNames[0].loginBtn, k = Passport.options.ControlNames[0].loginSwitch, l = Passport.options.ControlNames[0].loginContainer, m = Passport.options.ControlNames[1].loginName, n = Passport.options.ControlNames[1].loginNameInfo, o = Passport.options.ControlNames[1].password, p = Passport.options.ControlNames[1].passwordInfo, q = Passport.options.ControlNames[1].safeCode, r = Passport.options.ControlNames[1].safeCodeInfo, s = Passport.options.ControlNames[1].safeCodeArea, t = Passport.options.ControlNames[1].safeCodeImage, u = Passport.options.ControlNames[1].sendSmsBtn, v = Passport.options.ControlNames[1].loginBtn, w = Passport.options.ControlNames[1].loginSwitch, x = Passport.options.ControlNames[1].loginContainer, y = '<div class="swiper-pagination">        <span class="swiper-pagination-bullet" id="' + k + '">帐号登录</span><span class="swiper-pagination-bullet" id="' + w + '">短信登录</span>    </div>    <div class="swiper-container">        <div class="swiper-wrapper">            <div class="swiper-slide" id="' + l + '">            <form>                <div class="maininput"><input type="text" id="' + a + '" value="" placeholder="用户名/邮箱/手机号" /><p id="' + b + '" style="display:none;"></p></div>                <div class="maininput"><input type="password" id="' + c + '" value="" placeholder="密码" /><p id="' + d + '" style="display:none;"></p></div>                <div class="picvf hidevf" id="' + g + '"><input type="text" id="' + e + '" value="" placeholder="图形验证码" /><img alt="图形验证码" src="" id="' + h + '" onclick="Passport.UpdateSC();return false;" /><a href="javascript:void(0);" onclick="Passport.UpdateSC();return false;" target="_self" title="图形验证码">换一张</a><p id="' + f + '" style="display:none;"></p></div>                <div class="option"><input type="checkbox" value="1" checked />十天免登录<a href="' + Passport.FindPwdUrl + '">忘记密码</a></div>                <div class="submit"><button id="' + j + '" type="button" onclick="Passport.PopLogin();">登录</button><span>没有帐号？<a href="' + Passport.RegisterUrl + '">立刻注册</a></span></div>            </form>            </div>            <div class="swiper-slide" id="' + x + '">            <form>                <div class="maininput"><input type="text" id="' + m + '" value="" placeholder="手机号" /><p id="' + n + '" style="display:none;"></p></div>                <div class="picvf" id="' + s + '"><input type="text" id="' + q + '" value="" placeholder="图形验证码" /><img alt="图形验证码" src="" id="' + t + '" onclick="Passport.UpdateSC();return false;" /><a href="javascript:void(0);" onclick="Passport.UpdateSC();return false;" target="_self" title="图形验证码">换一张</a><p id="' + r + '" style="display:none;"></p></div>                <div class="smsvf"><input type="text" id="' + o + '" value="" placeholder="短信验证码" /><button type="button" id="' + u + '" value="" onclick="Passport.PopSendMessageToken();return false;">获取短信验证码</button><p id="' + p + '" style="display:none;"></p></div>                <div class="option"><input type="checkbox" value="1" checked />十天免登录<a href="' + Passport.FindPwdUrl + '">忘记密码</a></div>                <div class="submit"><button id="' + v + '" type="button" onclick="Passport.PopLoginPhone();">登录</button><span>没有帐号？<a href="' + Passport.RegisterUrl + '">立刻注册</a></span></div>            </form>            </div>        </div>    </div>    <div class="pb-other-login">        你可以使用第三方帐号登录        <a class="qq-login" href="javascript:void(0);" onclick="Passport.LoginQQ();return false;"></a>        <a class="sina-login" href="javascript:void(0);" onclick="Passport.LoginWeibo();return false;"></a>        <a class="wx-login" href="javascript:void(0);" onclick="Passport.LoginWeixin();return false;"></a>        <a class="bd-login" href="javascript:void(0);" onclick="Passport.LoginBaidu();return false;"></a>    </div>', 0 == Passport.options.LoginModel ? (jQuery("body").append('<div class="loginpannl" id="loginPop">            <div class="title">请先登录<a href="javascript:void(0);" target="_self" onclick="javascript:Passport.PopClose();"></a></div>            <div class="loginform" id="loginPopForm"></div>        </div>'), jQuery("#loginPopForm").append(y), Passport.loginBox = new LightBox("loginPop")) : 1 == Passport.options.LoginModel && (z = null, jQuery("#loginPanel").length > 0 ? z = jQuery("#loginPanel") : jQuery(".loginpannl").length > 0 && (z = jQuery(".loginpannl")), null != z && (z.append('<div class="title">请先登录</div><div class="loginform" id="loginPopForm"></div>'), jQuery("#loginPopForm").append(y))), jQuery("#loginSwitch0").click(function () {
        jQuery("#loginSwitch1").removeClass(Passport.options.SwitchActiveClassName), jQuery(this).addClass(Passport.options.SwitchActiveClassName), Passport.options.LoginSlide = 0, jQuery("#loginContainer1").hide(), jQuery("#loginContainer0").show()
    }), jQuery("#loginSwitch1").click(function () {
        jQuery("#loginSwitch0").removeClass(Passport.options.SwitchActiveClassName), jQuery(this).addClass(Passport.options.SwitchActiveClassName), Passport.options.LoginSlide = 1, Passport.UpdateSC(), jQuery("#loginContainer0").hide(), jQuery("#loginContainer1").show()
    }), 0 == Passport.options.LoginSlideShow ? (jQuery("#loginSwitch1").hide(), jQuery("#loginContainer1").hide(), jQuery("#loginSwitch0").click()) : 1 == Passport.options.LoginSlideShow ? (jQuery("#loginSwitch0").hide(), jQuery("#loginContainer0").hide(), jQuery("#loginSwitch1").click()) : jQuery("#loginSwitch0").click(), jQuery("#" + a).focus(function () {
        Passport.PopInfo(b, "")
    }).blur(function () {
        var a = Passport.CheckLoginName(jQuery(this).val());
        Passport.PopLoginCallBack("check", a)
    }), jQuery("#" + c).focus(function () {
        Passport.PopInfo(d, "")
    }).blur(function () {
        var a = Passport.CheckPassword(jQuery(this).val());
        Passport.PopLoginCallBack("check", a)
    }), jQuery("#" + e).focus(function () {
        Passport.PopInfo(f, "")
    }).blur(function () {
        var a = Passport.CheckSafeCode(jQuery(this).val());
        Passport.PopLoginCallBack("check", a)
    });
    try {
        jQuery("#" + a).mailAutoComplete({
            boxClass: "out_box",
            listClass: "list_box",
            focusClass: "focus_box",
            markCalss: "mark_box",
            autoClass: !1,
            textHint: !0,
            hintText: "请输入邮箱地址"
        })
    } catch (A) {
    }
    jQuery("#" + m).focus(function () {
        Passport.PopInfo(n, "")
    }).blur(function () {
        var a = Passport.CheckLoginName(jQuery(this).val(), !0);
        Passport.PopLoginCallBack("check", a)
    }), jQuery("#" + o).focus(function () {
        Passport.PopInfo(p, "")
    }).blur(function () {
        var a = Passport.CheckToken(jQuery(this).val());
        Passport.PopLoginCallBack("check", a)
    }), jQuery("#" + q).focus(function () {
        Passport.PopInfo(r, "")
    }).blur(function () {
        var a = Passport.CheckSafeCode(jQuery(this).val());
        Passport.PopLoginCallBack("check", a)
    })
});