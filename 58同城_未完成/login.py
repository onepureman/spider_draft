"""
Base_Url: https://bj.58.com/?utm_source=market&spm=u-LlFBrx8a1luDwQM.sgppzq_zbt
Author: jing
Modify: 2020/10/22
"""

import execjs
import requests


js_ = """

function(e, t, n) {
    "use strict";
    window.$instanceof Function || n(80);
    var r = n(2)
      , i = n(3)
      , o = n(7)
      , a = n(82)
      , s = n(76)
      , c = n(1)
      , u = c.ajax
      , l = n(5)
      , d = l.modules
      , p = n(78);
    window._$ = window.$,
    "undefined" == typeof window.jQuery && (window.jQuery = window.$),
    function() {
        function e(e, t) {
            for (var n in e)
                this[n] = e[n];
            "cors" == t ? this.ajax = s : this.ajax = u
        }
        var t;
        window.SDK_CALLBACK_FUN = {
            "successFun": function(e) {
                return t.successFun(e)
            },
            "wxVerifyCallBack": function(e) {
                return t.wxVerifyCallBack(e)
            },
            "wxVerifyCallBackCom": function(e) {
                return t.wxVerifyCallBackCom(e)
            }
        },
        window.WxLogin || p(d.wxLogin);
        for (var n in r)
            e.prototype[n] = r[n];
        e.prototype.jsonpRequest = u;
        var c = function(t) {
            e.prototype[t] = function() {
                var e;
                return (e = i[t]).call.apply(e, [this].concat(Array.prototype.slice.call(arguments)))
            }
        };
        for (var l in i)
            c(l);
        var f = function(t) {
            e.prototype[t] = function() {
                var e;
                return (e = o[t]).call.apply(e, [this].concat(Array.prototype.slice.call(arguments)))
            }
        };
        for (var h in o)
            f(h);
        var m = function(t) {
            e.prototype[t] = function() {
                var e;
                return (e = a[t]).call.apply(e, [this].concat(Array.prototype.slice.call(arguments)))
            }
        };
        for (var g in a)
            m(g);
        window.SDK_PC = function(n) {
            return window.sdk_pc && (window.sdk_pc = void 0),
            t = new e(d,n)
        }
        ,
        window.sdk_pc = SDK_PC()
    }()
}

function getpwd(){
return n.encrypt("21212121")

}

"""

ped = execjs.compile(js_).call("getpwd")
print(ped)