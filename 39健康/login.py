import requests
import execjs
from pprint import pprint

js_ = """
function getpwd(a) {
        var f, b = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"),
            c = new Array(116, 120, 122, 51, 57), d = encodeURIComponent(a), e = "";
        for (i = 0; i < d.length; i++) f = c[i % 5], s = String.fromCharCode(d.charCodeAt(i) ^ f), e += b[s.charCodeAt(0) >> 4] + b[15 & s.charCodeAt(0)];
        return e
    }
"""
user = execjs.compile(js_).call("getpwd", "18513606786")
pwd = execjs.compile(js_).call("getpwd", "jing1995")

def load_data():
    data = {}
    with open("./data.txt", "rt", encoding="utf-8") as f:
        read = f.readlines()
        for line in read:
            split_ = line.split(":")
            data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
    return data


headers = load_data()

r = requests.get("https://my.39.net/post.ashx?callback=jQuery17206856937338735567_1602577896209&action=jsonploginf0&uname={}&pwd={}&safecode=&app=1&_=1602577911928".format(user, pwd), headers=headers)
print(r.content)

