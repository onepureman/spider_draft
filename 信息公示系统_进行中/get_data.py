from requests import session
import requests
import re
import execjs
from pprint import pprint
import time


class GetIndex(object):

    def __init__(self):
        self.url = 'http://bj.gsxt.gov.cn/index.html'
        self.headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Host': 'bj.gsxt.gov.cn',
            'Pragma': 'no-cache',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36',
            'Referer': 'http://bj.gsxt.gov.cn/index.html',
        }

        self.cookie_headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Host': 'bj.gsxt.gov.cn',
            'Pragma': 'no-cache',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36',

        }

    def get_cookies(self, res):
        js_str = re.findall("document.cookie=(.*?)\+\('m'\)\+\('a'\)\+\('x'\)", res.text, re.S)[0]
        js = """function jl_clear(){ return %s }""" % js_str
        __jsluid_h = "__jsluid_h=" + res.cookies['__jsluid_h']
        __jsl_clearance = execjs.compile(js).call('jl_clear').replace(";", '')

        cookie = '{}; {}'.format(__jsluid_h, __jsl_clearance)
        self.headers['Cookie'] = cookie

        res2 = requests.get(self.url, headers=self.headers)
        set_timeout = re.findall(r"(setTimeout.*?\},.*?\);)", res2.text, re.S)[0]
        js_cookie = "return {}".format(re.findall("setTimeout.*?=(.*?);", res2.text, re.S)[0])
        js = res.content.decode("utf-8").replace(set_timeout, js_cookie).replace("go({",
                                                                                 "function get_jsl(){return go({").replace(
            "<script>", '').replace("</script>", "}").replace("\\x20", ' ').replace("\\x22", '"')

        js = self.get_js(js)

        jsl = execjs.compile(js, cwd=r'E:\node\node_modules\npm\node_modules').call("get_jsl")

        cookie = "{} {};".format(__jsluid_h, jsl.split(";")[0])
        self.headers['Cookie'] = cookie

        res = requests.get(self.url, headers=self.headers)
        jsid = re.findall("(JSESSIONID=.*?;)", res.headers['Set-Cookie'])[0]
        token = re.findall("(SECTOKEN=.*?;)", res.headers['Set-Cookie'])[0]
        tlb_cookie = re.findall("(tlb_cookie=.*?;)", res.headers['Set-Cookie'])[0]
        self.headers['Cookie'] = '{} {} {} {}'.format(self.headers['Cookie'], jsid, token, tlb_cookie)

        res = requests.get(self.url, headers=self.headers)
        print(res.text)

    def get_js(self, js_):
        js = r"""
            const jsdom = require("jsdom");
        const { JSDOM } = jsdom;
        const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
        window = global;
        var document = dom.window.document;
        var params = {
            location:{
                hash: "",

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

            %s
            """ % js_
        return js

    def run(self):
        res = requests.get(self.url, headers=self.headers)
        self.get_cookies(res)
        pprint(self.headers)

if __name__ == '__main__':
    get_index = GetIndex()
    get_index.run()



