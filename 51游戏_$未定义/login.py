"""
Base_Url:http://www.51.com/
Author:jing
Modify:2020/10/30
"""

import time
import execjs
import requests
from pprint import pprint


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.login_url = ""

    def get_pwd(self):

        js_pwd = """
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
        
        
        // const {Jquery} = require("E:/pycharmproject/study_own/js_study/51游戏_$未定义/jquery.js")
        
        
        
        
        
        
        var reglogin = {
    submitnum: 0,
    statTimer: 0,
    isBox: false,
    _ajax_jp: function(params) {
        httpsAjax.ajax(params);
    },
    getHL: function(text) {
        text = $.trim(text);
        var h = text.charAt(0);
        var l = text.charAt((text.length - 1));
        return h + '' + l;
    },
    aes: function(text) {
        text = $.trim(text);
        var key = aes_config.key;
        var iv = aes_config.iv;
        key = CryptoJS.enc.Utf8.parse(key);
        iv = CryptoJS.enc.Utf8.parse(iv);
        var encrypted = CryptoJS.AES.encrypt(text, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding

        }).toString();
        return encrypted;
    },
    newaes: function(text) {
        text = $.trim(text);
        var key = aes_config.key;
        var iv = aes_config.iv;
        return fo_ssh_encrypt(text, key, iv);
    },
    _ajax: function(params) {
        // var _this=this;

        document.domain = fodomain.get_domain();
        var _this = this, iframe, ajaxCount = 0, ajaxTimer = 0, _params = params;
        if (_this.submitnum) {
            return;
        }
        _this.submitnum = 1;
        var createIframe = function() {
            var c = document.createElement("IFRAME");
            c.id = "_ajax_iframediv_";
            c.style.cssText = "display:none";
            c.src = '//' + fodomain.get_domain('passport') + '/login/proxy';
            c.is_loading = 0;
            c.pageisloaded = 0;
            c.onload = c.onreadystatechange = function() {
                if (this.readyState != "interactive") {
                    c.pageisloaded = 1;
                }
                iframe = document.getElementById(c.id).contentWindow;
            }
            ;

            document.body.insertBefore(c, document.getElementsByTagName("BODY")[0].getElementsByTagName("*")[0]);
            sendAjax();
        };
        var sendAjax = function() {
            var xh, text, url, data, tmpArr = [], _data = [], tmptext = '', _timer = 0, dataType = _params.dataType ? _params.dataType : 'json', async = !_params.async ? _params.async : false, options = _params.options ? _params.options : '', type = _params.type ? _params.type : 'GET';

            if (_params.url && _params.url != '' && _params.url != null) {
                url = _params.url;
            } else {
                return;
            }
            //判断是http还是https
            var ishttps = 'https:' == document.location.protocol ? true : false;
            if (ishttps) {
                url = 'https:' + url;
            } else {
                url = 'http:' + url;
            }
            if (_params.data == null) {
                data = null;
            } else if (_params.data && typeof _params.data == 'string' && _params.data != null && _params.data != '') {
                data = params.data;
            } else if (_params.data && typeof _params.data == 'object') {
                for (var i in _params.data) {
                    tmpArr.push(i + '=' + _params.data[i]);
                }
                data = tmpArr.join('&');
            } else {
                return;
            }
            if (type.toLowerCase() == 'get') {
                url = _params.url.concat('/?' + data);
            }
            ajaxCount++;
            if (ajaxCount > 100) {
                return;
            }
            try {
                if (iframe.pageload) {

                    xh = iframe.xht();
                    xh.open(type, url, async);

                    if (options && options != '') {
                        for (var x in _params.options) {
                            xh.setRequestHeader(x, options[x]);
                        }
                    }
                    if (type.toLowerCase() == 'post') {
                        xh.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    }
                    xh.onreadystatechange = function() {
                        if (xh.readyState == 4) {
                            if (dataType == 'json') {
                                //tmptext = "'"+xh.responseText+"'";alert(tmptext);
                                // text = (new Function("return "+tmptext))();
                                text = eval('(' + xh.responseText + ')');
                            } else if (dataType == 'text') {
                                text = xh.responseText;
                            } else {
                                text = xh.responseText;
                            }
                            clearTimeout(_timer);
                            _params.callback(text);
                            try {
                                var temp = document.getElementById('_ajax_iframediv_');
                                document.body.removeChild(temp);
                                $("#_ajax_iframediv_").remove();
                            } catch (e) {
                                console.log(e);
                            }
                        }
                    }
                    ;
                    xh.send(data);
                } else {
                    _timer = setTimeout(function() {
                        sendAjax();
                    }, ajaxCount * 100);
                }
            } catch (e) {
                _timer = setTimeout(function() {
                    sendAjax();
                }, ajaxCount * 100);
            }
            clearTimeout(_this.statTimer);
            _this.statTimer = setTimeout(function() {
                _this.submitnum = 0;
            }, 800)
        };

        createIframe();
    },
    qqLogin: function(gourl, from) {
        var url = '//' + fodomain.get_domain('passport') + '/connect/auth/qq?g=' + gourl + '&s=' + from;
        if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0" || navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE8.0" || navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE6.0")) {
            url = '//' + fodomain.get_domain('passport') + '/qqlogin/qq?url=' + encodeURIComponent(url);
        }
        var neww = window.open(url, '51QqLogin', 'width=550,height=450,menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1');
    },
    wechatLogin: function(gourl, from) {
        var neww = window.open('//' + fodomain.get_domain('passport') + '/connect/auth/wechat?g=' + gourl + '&s=' + from, 'wechatLogin', 'width=550,height=450,menubar=0,scrollbars=1,resizable=1,status=1,titlebar=0,toolbar=0,location=1');
    },
    sinaLogin: function(gourl, from) {
        window.open('//' + fodomain.get_domain('passport') + '/connect/auth/sina?s=' + from + '&g=' + gourl, 'sinaLogin', 'width=650,height=450,menubar=0,scrollbars=1,resizable=1,status=1,titlebar=0,toolbar=0,location=1');
    },
    ttffLogin: function(gourl, from) {
        var neww = window.open('//' + fodomain.get_domain('passport') + '/connect/auth/ttff/' + from + '/?g=' + gourl, '2345Login', 'width=650,height=450,menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1');
    },
    createScanLogin: function(_param) {
        var o = {};
        var param = {};
        if (typeof _param != 'undefined') {
            param = _param;
        }
        o.goUrl = typeof param.goUrl != 'undefined' ? param.goUrl : location.href;
        o.qrcode_img = typeof param.qrcode_img != 'undefined' ? param.qrcode_img : 'pop_qrcode_img';
        o.qrcode_div = typeof param.qrcode_div != 'undefined' ? param.qrcode_div : 'qrcode_loginbox';
        o.qrcode_tips = typeof param.qrcode_tips != 'undefined' ? param.qrcode_tips : 'sq-qr-message';
        o.qrcode_refresh = typeof param.qrcode_refresh != 'undefined' ? param.qrcode_refresh : 'sq-qr-refresh';
        o.parent_jupmp = typeof param.parent_jupmp != 'undefined' ? true : false;
        o.checkQrcode = null;
        o.start = function() {
            var _this = this;
            $('#' + this.qrcode_refresh).bind('click', function() {
                _this.initqrcode();
            });
            _this.initqrcode();
        }
        ;
        o.initqrcode = function() {
            var _this = this
              , getTokenurl = '//' + fodomain.get_domain('passport') + '/qrcode/api/createOrder?callback=?';
            setTimeout(function() {
                $.getJSON(getTokenurl, {
                    time: new Date().getTime()
                }, function(data) {
                    if (data.errno == 0) {
                        _this._orderid = data.data.orderid;
                        var content = "https://" + fodomain.get_domain('passport') + "/qrcode/api/m/login/" + _this._orderid;
                        var src = '//' + fodomain.get_domain('passport') + '/qrcode/api/img?t=' + new Date().getTime() + '&data=' + content;
                        $('#' + _this.qrcode_img).attr('src', src);
                        $('#' + _this.qrcode_div).show();
                        $('#' + _this.qrcode_tips).hide();
                        _this.startCheck();
                    }
                });
            }, 200);
        }
        ;
        o.startCheck = function() {
            var _this = this;
            if (!_this.checkQrcode) {
                // console.log('开始循环');
                _this.checkQrcode = setInterval(function() {
                    _this.checkStatus();
                }, 3000);
            }
        }
        ;
        o.checkStatus = function() {
            var _this = this
              , gourl = _this.goUrl
              , orderid = _this._orderid;
            if (!orderid) {
                return false;
            }
            var checkurl = '//' + fodomain.get_domain('passport') + '/qrcode/api/checkOrder/' + orderid + '?callback=?';
            $.getJSON(checkurl, {
                gourl: gourl,
                time: new Date().getTime()
            }, function(data) {
                if (data.errno == 0) {
                    if (_this.parent_jupmp) {
                        window.opener.location.href = data.data.url;
                        try {
                            window.close();
                        } catch (e) {}
                        return;
                    }
                    window.location.href = data.data.url;

                } else if (data.errno == 1) {
                    _this._orderid = data.data.orderid;
                    // _this.initqrcode();
                    $('#' + _this.qrcode_div).hide();
                    $('#' + _this.qrcode_tips).show();
                    _this.closeCheck();
                }
            });
        }
        ;
        o.closeCheck = function() {
            clearInterval(this.checkQrcode);
            this.checkQrcode = null;
        }
        ;
        o.setGourl = function(gourl) {
            this.goUrl = gourl;
        }
        ;
        return o;
    }
};
        
        
        
        function getpwd(pwd){
            return reglogin.newaes(pwd);
        
        
        }
        
        
        """

        pwd = execjs.compile(js_pwd, cwd=r'E:\node\node_modules\npm\node_modules').call("getpwd", self.pwd)
        return pwd

    def login_(self):
        pwd = self.get_pwd()
        print(pwd)


if __name__ == '__main__':
    user = ""
    pwd = "222222"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()