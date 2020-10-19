define(function (require, exports, module) {
    var validate = require("validation.js?v=202001071351");

    function loginPage() {
    };
    loginPage.prototype = {
        initObj: function () {
            var that = this;
            that.burl = $("#backurl");
            /*登录成功后的回调地址*/
            that.middleUrl = $("#middleUrl");
            /*跨域登录中间页地址*/
            that.host = $("#host");
            that.service = $("#service");
            that.autoLogin = $("#autoLogin");
            that.usernameFlag = false;
            that.passwordFlag = false;
            that.username = $("#username");
            that.clearusername = $("#clearusername");
            /*清空username输入框内容*/
            that.password = $("#password");
            that.clearpassword = $("#clearpassword");
            /*清空password输入框内容*/
            that.usernameVal = undefined;
            that.passwordVal = undefined;
            that.finalUsernameVal = undefined;
            that.finalPasswordVal = undefined;
            that.switchPwd = $("#switchPwd");
            that.btnLogin = $("#loginWithPswd");
            that.registerBtn = $("#register");
            /*免费注册按钮*/
            //that.loginByCode = $("#loginByCode");/*跳转到验证码登录页面按钮*/
            /*图形验证码*/
            //that.verifyCodeInput = undefined;/*用户输入的图片验证码*/
            //that.sure = $("#qd");
            //that.close = $("#closeMathCode");
            //that.verify = $("#verify");
            //that.verifyCode = $("#verifyCode");
            that.mathCodePswd = $("#mathCodePswd");
            /*错误提示*/
            that.pswdTip = $("#pswdTip");
            that.isLoginBtnEnable = true;
            /*登录按钮是否可用*/
            that.bindEvent();
        },

        /*---------------------------------------------------给Dom成员绑定事件方法的方法 -----------------------------------------------------*/

        bindEvent: function () {
            var that = this;
            /*检验用户名，blur事件*/
            that.username.blur(function () {
                return that.checkUsernameOnBlurFn.call(this, that);
            });
            /*检验用户名，keyup事件*/
            that.username.keyup(function () {
                return that.checkUsernameOnKeyupFn.call(this, that);
            });
            /*检验密码，change事件*/
            that.password.keyup(function () {
                return that.checkPasswordOnInputFn.call(this, that);
            });
            /*检查登录错误次数，失去焦点事件*/
            that.username.blur(function () {
                return that.checkErrorCount.call(this, that);
            });
            /*检验密码，focus事件*/
            //that.password.on("focus", function () { return that.checkPasswordOnFocusFn.call(this, that); });
            /*检验密码，判断是否显示清空按钮，keyup事件*/
            //that.password.on("keyup", function () { return that.checkPasswordOnKeyupFn.call(this, that); });
            /*切换密码明文开关*/
            that.switchPwd.click(function () {
                return that.switchPwdFn.call(this, that);
            });
            /*关闭弹窗浮层*/
            //that.close.on("click", function () { return that.closeFloatFn.call(this, that); });
            /*点击改变验证码*/
            //that.verify.on("click", function () { return that.clickChangePicFn.call(this, that); });
            /*检验图片验证码输入框*/
            //that.verifyCode.on("keyup", function () { return that.checkPicInputFn.call(this, that); });
            /*浮层确定按钮*/
            //that.sure.on("click", function () { return that.clickFloatSureFn.call(this, that); });
            /*登陆按钮事件*/
            //that.btnLogin.on("click", function () { return that.loginClickFn.call(this, that); });
            that.btnLogin.click(function () {
                return that.loginClickFn.call(this, that);
            });
            /*清除用户名输入框内容事件*/
            that.clearusername.click(function () {
                return that.clearValFn.call(this, that.username);
            });
            /*清除密码输入框内容事件*/
            that.clearpassword.click(function () {
                return that.clearValFn.call(this, that.password);
            });
            /*自动登录，checkbox*/
            that.autoLogin.click(function () {
                return that.getAutoLoginVal.call(this, that);
            });
            /*跳转到验证码登录页面*/
            //that.loginByCode.on("click", function () { return that.loginByCodeJump.call(this, that); });
            /*免费注册*/
            that.registerBtn.click(function () {
                return that.register.call(this, that);
            });
            /*如果上一页是搜房，显示返回按钮；否则显示logo*/
            if (!(document.referrer.indexOf(".fang.com") > -1)) {
                $(".logo").show();
            }
            else {
                $(".back").show();
            }
        },
        /*---------------------------------------------------用户名验证  -----------------------------------------------------*/
        /*检验用户名，blur事件*/
        checkUsernameOnBlurFn: function (obj) {
            var $this = $(this), that = obj;
            that.usernameVal = $this.val();
            that.usernameVal = $.trim(that.usernameVal);
            $this.val(that.usernameVal);
            if (!that.usernameVal) {
                //that.btnLogin.removeClass("click");
                that.finalUsernameVal = '';
                that.usernameFlag = false;
            } else {
                that.finalUsernameVal = that.usernameVal;
                // that.checkUsernameIsExistOrNoFn(that.finalUsernameVal);
            }
        },
        /*检验用户名，keyup事件*/
        checkUsernameOnKeyupFn: function (obj) {
            var $this = $(this), that = obj;
            if (!that.usernameVal) {
                //that.btnLogin.removeClass("click");
                that.finalUsernameVal = '';
                that.usernameFlag = false;

            }
            var usernameval = $.trim(that.username.val());
            if (usernameval) {
                that.clearusername.show();
            }
            else {
                that.clearusername.hide();
            }
        },
        /*----------------------------------------------------密码验证 -----------------------------------------------------*/
        /*检验密码，input事件*/
        checkPasswordOnInputFn: function (obj) {
            var $this = $(this), that = obj;
            that.passwordVal = $this.val();
            if (that.strlenFn(that.passwordVal) >= 6) {
                that.passwordFlag = true;
                that.finalPasswordVal = that.passwordVal;
                that.btnLogin.addClass("click");
                ;
            } else {
                //that.btnLogin.removeClass("click");;
                that.finalPasswordVal = '';
                that.passwordFlag = false;
            }
        },
        /*密码长度检测*/
        strlenFn: function (str) {
            var len = 0;
            for (var i = 0; i < str.length; i++) {
                var c = str.charCodeAt(i);
                //单字节加1
                if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                    len++;
                }
                else {
                    len += 2;
                }
            }
            return len;
        },
        /*检验密码，focus事件*/
        checkPasswordOnFocusFn: function (obj) {
            var that = obj;
            if (that.username.val() == '') {
                validate.displayPswdLoginResult("还没有输入用户名呢", '', that);
                //that.btnLogin.removeClass("click");
                that.finalUsernameVal = '';
                that.usernameFlag = false;
            }
        },
        /*检验密码，判断是否显示清空按钮，keyup事件*/
        //checkPasswordOnKeyupFn: function (obj) {
        //    var that = obj;
        //    var passwordval = $.trim(that.password.val());
        //    if (passwordval) {
        //        that.clearpassword.show();
        //    }
        //    else {
        //        that.clearpassword.hide();
        //    }
        //},
        /*切换密码明文开关*/
        switchPwdFn: function (obj) {
            var $this = $(this), that = obj;
            if ($this.is('.cur')) {
                $this.attr('class', 'icon-m');
                that.password[0].type = 'password';
            } else {
                $this.attr('class', 'icon-m cur');
                that.password[0].type = 'text';
            }
        },
        /*----------------------------------------------------登陆按钮 -----------------------------------------------------*/

        /*使登录按钮可用*/
        enableLoginBtn: function (obj) {
            var that = obj;
            that.isLoginBtnEnable = true;
            that.btnLogin.show();

        },
        /*使登录按钮不可用*/
        disenableLoginBtn: function (obj) {
            var that = obj;
            that.isLoginBtnEnable = false;
            that.btnLogin.hide();
        },
        /*点击登录按钮*/
        loginClickFn: function (obj) {
            var $this = $(this), that = obj;
            if (!that.isLoginBtnEnable) {
                return;
            }
            //that.disenableLoginBtn(that);
            that.isLoginBtnEnable = false;
            validate.displayPswdLoginResult('', '', that);
            if (that.username.val() == '') {
                validate.displayPswdLoginResult('请输入用户名/邮箱/手机号', '', that);
                that.enableLoginBtn(that);
                return;
            }
            if (that.password.val() == '') {
                validate.displayPswdLoginResult('请输入密码', '', that);
                that.enableLoginBtn(that);
                return;
            }
            else {
                var result = validate.isPassword(that.password.val());
                if (result == true) {
                    that.passwordFlag = true;
                }
                else {
                    validate.displayPswdLoginResult(result, '', that);
                    that.passwordFlag = false;
                    that.enableLoginBtn(that);
                    return;
                }
            }

            _ub.collect(9, {'vwg.page': 'txz_dl^gg_pc', "vwt.logintype": "password"}); //埋码

            //登录
            $.ajax({
                type: "post",
                url: "/login.api",
                xhrFields: {
                    withCredentials: true
                },
                data: {
                    uid: that.username.val(),
                    pwd: encryptedString(key_to_encode, that.password.val()),
                    Service: that.service.val(),
                    AutoLogin: that.autoLogin.val()
                },
                error: function (data) {
                    validate.displayPswdLoginResult('服务器开小差了，请重试', '', that);
                    that.enableLoginBtn(that);
                },
                success: function (json) {
                    that.enableLoginBtn(that);
                    if (json.Message == "Success") {
                        if (validate.isPasswordForV(that.password.val(), 1) != true) {
                            alert("您的账号密码过于简单，建议修改为安全性更高的密码。您可稍后在“我的房天下”中修改。");
                        }
                        var burl = that.burl.val()
                        if (burl && json.PToken) {
                            burl = that.middleUrl.val() + "?backurl=" + burl + '&ptoken=' + json.PToken;
                        }
                        validate.displayPswdLoginResult("登录成功", burl, that);
                    } else if (json.Message == "Error") {
                        if (json.LoginErrorCount > 4 || json.IsIpCanVisit == "false" || json.IsIpCanVisit == false) {
                            that.disenableLoginBtn(that);
                            that.initSlideMathCode(that);
                            validate.displayPswdLoginMathCode(that);
                        } else {
                            validate.displayPswdLoginResult(json.Tip, '', that);
                        }
                    }
                }
            });

        },
        /*----------------------------------------------------图文验证码相关 -----------------------------------------------------*/

        /*清空标签内容 obj传的是要清空的标签对象*/
        clearValFn: function (obj) {
            var objval = $.trim(obj.val());
            var $this = $(this);
            if (objval) {
                obj.val("");
                $this.hide();
            }
        },
        /*带参数跳转到验证码登录页面*/
        loginByCodeJump: function (obj) {
            var hrefData = obj.loginByCode.attr("hrefdata");
            if (hrefData != undefined && hrefData != "") {
                var phone = $.trim(obj.username.val());
                if (phone != "") {
                    hrefData += "&username=" + escape(phone);
                }
            } else {
                hrefData = "/passport/mobilelogin.aspx?Burl=http%3a%2f%2fm.fang.com%2fmy%2f%3fc%3dmycenter%26a%3dindex%26city%3dbj";
            }
            location.href = hrefData;
        },
        /*初始化滑动验证码*/
        initSlideMathCode: function (obj) {
            var that = obj;
            that.disenableLoginBtn(that);
            if (window.fCheck.target) {
                window.fCheck.target = null;
            }
            window.fCheck.init({
                container: '#mathCodePswd',
                url: "/getslidecodeinit.api",
                callback: function () {
                    // 验证成功后的回调
                    var tip = "";
                    var result = window.fCheck.config.result; //滑动验证码验证参数
                    //校验
                    if (that.username.val() == '') {
                        validate.displayPswdLoginResult('请输入用户名/邮箱/手机号', '', that);
                        that.reInitSlideMathCode();
                        return;
                    }
                    if (that.password.val() == '') {
                        validate.displayPswdLoginResult('请输入密码', '', that);
                        that.reInitSlideMathCode();
                        return;
                    }
                    else {
                        var res = validate.isPassword(that.password.val());
                        if (res == true) {
                            that.passwordFlag = true;
                        }
                        else {
                            validate.displayPswdLoginResult(res, '', that);
                            that.passwordFlag = false;
                            that.reInitSlideMathCode();
                            return;
                        }
                    }
                    jQuery.ajax({
                        url: '/login.api',
                        type: 'Post',
                        dataType: 'json',
                        async: false,
                        xhrFields: {
                            withCredentials: true
                        },
                        data: {
                            uid: that.username.val(),
                            pwd: encryptedString(key_to_encode, that.password.val()),
                            Service: that.service.val(),
                            AutoLogin: that.autoLogin.val(),
                            Operatetype: "0",
                            Gt: result.fc_gt,
                            Challenge: result.fc_challenge,
                            Validate: result.fc_validate
                        },
                        error: function (data) {
                            that.enableLoginBtn(that);
                            validate.displayPswdLoginResult('服务器开小差了，请重试', '', that);
                            that.reInitSlideMathCode();
                        },
                        success: function (data) {
                            if (data.Message == "Success") {
                                if (validate.isPasswordForV(that.password.val(), 1) != true) {
                                    alert("您的账号密码过于简单，建议修改为安全性更高的密码。您可稍后在“我的房天下”中修改。");
                                }
                                var burl = that.burl.val()
                                if (burl && data.PToken) {
                                    burl = that.middleUrl.val() + "?backurl=" + burl + '&ptoken=' + data.PToken;
                                }
                                validate.displayPswdLoginResult("登录成功", burl, that);
                            } else {
                                validate.displayPswdLoginResult(data.Tip, '', that, false);
                                that.reInitSlideMathCode();
                            }
                        }
                    });

                }
            });
            var mc = $("#mathCodePswd");
            mc.bind("DOMNodeInserted", function (e) {
                $("#mathCodePswd .slide-verify").addClass("yz_hua");
                $("#mathCodePswd .drag-bg").addClass("yz_pass");
                $("#mathCodePswd .img-verify").addClass("yz_pic");
            });
            mc.css('height', '40px');
        },
        /*滑动验证码重新初始化*/
        reInitSlideMathCode: function () {
            window.fCheck.reinit();
        },
        /*检测登录错误次数*/
        checkErrorCount: function (obj) {
            var that = obj;
            if (that.username.val() != '') {
                $.ajax({
                    type: "post",
                    url: "/GetLoginErrorCount.api",//调用返回错误次数接口
                    async: false,
                    data: {"Uid": that.username.val(), "Service": that.service.val()},
                    success: function (json) {
                        if (json.Message == "Success") {
                            if (json.LoginErrorCount > 4 || json.IsIpCanVisit == "false" || json.IsIpCanVisit == false) {
                                that.disenableLoginBtn(that);
                                that.initSlideMathCode(that);
                                validate.displayPswdLoginMathCode(that);
                            } else {
                                validate.closePswdLoginMathCode(that);
                                that.enableLoginBtn(that);
                            }
                        } else {
                            validate.closePswdLoginMathCode(that);
                            that.enableLoginBtn(that);
                        }
                    }
                });
            }
        },
        /*获取是否需要自动登录*/
        getAutoLoginVal: function (obj) {
            var that = obj;
            if (that.autoLogin.is(':checked')) {
                that.autoLogin.val('1');
            } else {
                that.autoLogin.val('0');
            }
        },
        /*注册*/
        register: function (obj) {
            var that = obj;
            if (that.burl && that.burl.val() != "") {
                window.location.href = "/NewRegister.aspx?backurl=" + that.burl.val();
            } else {
                window.location.href = "/NewRegister.aspx";
            }
        }

    };
    var page = new loginPage();
    page.initObj();
});