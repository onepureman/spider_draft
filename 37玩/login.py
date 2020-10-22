
"""
Base_Url: https://www.37.com/
Author: jing
Modify: 2020/10/22
"""

import requests
import execjs

js_ = """
var ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function __rsa(str) {
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += ch.charAt(c1 >> 2);
            out += ch.charAt((c1 & 0x3) << 4);
            out += "==";
            break
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += ch.charAt(c1 >> 2);
            out += ch.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += ch.charAt((c2 & 0xF) << 2);
            out += "=";
            break
        }
        c3 = str.charCodeAt(i++);
        out += ch.charAt(c1 >> 2);
        out += ch.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += ch.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += ch.charAt(c3 & 0x3F)
    }
    return out
}
function td(a) {
    var maxPos = ch.length - 2
      , w = [];
    for (i = 0; i < 15; i++) {
        w.push(ch.charAt(Math.floor(Math.random() * maxPos)));
        if (i === 7) {
            w.push(a.substr(0, 3))
        }
        if (i === 12) {
            w.push(a.substr(3))
        }
    }
    return __rsa(w.join(""))
}

"""
passwd = execjs.compile(js_).call("td", "")   # TODO: 输入密码


data = {
"callback": "jQuery18307600618330276601_1601282584636",
"action": "login",
"login_account": "",  # TODO: 输入账号
"password": passwd,
"ajax": "0",
"remember_me": "1",
"save_state": "1",
"ltype": "1",
"tj_from": "100",
"s": "1",
"tj_way": "1",
"_": "1601282594970",


}

url = "https://my.37.com/api/login.php?callback=jQuery18306406318829314788_1601282675051&action=login&login_account=jing_1995&password={}&ajax=0&remember_me=1&save_state=1&ltype=1&tj_from=100&s=1&tj_way=1&_=1601282679088".format(passwd)
r = requests.get(url)
print(r.status_code)
print(r.content.decode())