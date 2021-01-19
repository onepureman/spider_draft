#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2020/12/21

import requests
import re
import time
import execjs
import json

get_r = '''
 function get_r(){
 r = function (e) {
                    function t(e, t) {
                        var r, s = 0;
                        for (r = 0; r < t.length; r++)
                            s |= n[r] << 8 * r;
                        return e ^ s
                    }
                    var r, s, a = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36", n = [], i = 0;
                    for (r = 0; r < a.length; r++)
                        s = a.charCodeAt(r),
                        n.unshift(255 & s),
                        n.length >= 4 && (i = t(i, n),
                        n = []);
                    return n.length > 0 && (i = t(i, n)),
                    i.toString(16)
                }
        return r()
 }
'''
get_t = """
  function get_t(){
  t = function() {
                    return Math.random().toString(16).replace(".", "")
                }
            return t()
  }
"""
get_e = """
    function get_e(){
        e = function() {
        for (var e = 1 * new Date, t = 0; e == 1 * new Date; )
            t++;
        return e.toString(16) + t.toString(16)
        }
        return e()
}
"""
get_suuid = '''
        function genSsuid() {
            return Math.round(2147483647 * Math.random()) * (new Date).getUTCMilliseconds() % 1e10
        }
        
'''


def sensorsdata2015jssdkcross():
    t = execjs.compile(get_t, cwd=r'E:\node\node_modules\npm\node_modules').call('get_t')
    r = execjs.compile(get_r, cwd=r'E:\node\node_modules\npm\node_modules').call('get_r')
    d_id = execjs.compile(get_e, cwd=r'E:\node\node_modules\npm\node_modules').call(
        'get_e') + "-" + t + "-" + r + "-" + '2073600' + "-" + execjs.compile(get_e, cwd=r'E:\node\node_modules\npm\node_modules').call(
        'get_e')
    # print(d_id)
    sjss = '%7B%22distinct_id%22%3A%22{}%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%22{}%22%7D'.format(
        d_id, d_id)
    return sjss


def get_acw_2(args):
    '''

    :param args:
    :return:
    '''
    default_list = [15, 35, 29, 24, 33, 16, 1, 38, 10, 9, 19, 31, 40, 27, 22, 23, 25, 13, 6, 11, 39, 18, 20, 8, 14, 21,
                    32, 26, 2, 30, 7, 4, 17, 5, 3, 28, 34, 37, 12, 36]  # 死的
    temp_list = [0 for i in range(40)]
    _0x12605e = ''
    for i in range(len(args)):
        _ = args[i]
        for index in range(len(default_list)):
            if default_list[index] == i + 1:
                temp_list[index] = _
    arg = ''.join(temp_list)
    temp_str = '3000176000856006061501533003690027800375'  # 死的
    acw = ''
    for i in range(0, len(arg), 2):
        v1 = int(arg[i: i + 2], 16)
        v2 = int(temp_str[i: i + 2], 16)
        v3 = hex(v1 ^ v2).replace("0x", '')
        if len(v3) == 1:
            v3 = '0' + v3
        acw += v3
    return acw


def get_cookie():
    start_headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Host': 'www.tianyancha.com',
        'Pragma': 'no-cache',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36',
    }
    url = 'https://www.tianyancha.com/login'
    res = requests.get(url, headers=start_headers)
    acw_tc = re.findall("acw_tc=.*?;", res.headers['Set-Cookie'])[0]
    start_headers['Cookie'] = acw_tc
    arg1 = re.findall("var arg1='(.*?)'", res.text, re.S)[0]
    acw_sc_v2 = ' acw_sc__v2={};'.format(get_acw_2(arg1))
    start_headers['Cookie'] += acw_sc_v2
    res = requests.get(url, headers=start_headers)
    csrfToken = re.findall("csrfToken=.*?;", res.headers['Set-Cookie'])[0]
    TYCID = re.findall("TYCID=.*?;", res.headers['Set-Cookie'])[0]
    sen = sensorsdata2015jssdkcross()
    suuid = execjs.compile(get_suuid, cwd=r'E:\node\node_modules\npm\node_modules').call('genSsuid')
    cookie = "{} {} {} {} sensorsdata2015jssdkcross={}; suuid={}; sajssdk_2015_cross_new_user=1;".format(acw_tc,
                                                                                                         acw_sc_v2,
                                                                                                         csrfToken,
                                                                                                         TYCID, sen,
                                                                                                         suuid)
    print(cookie)
    return cookie


def get_gt_challenge(flag=False):
    get_token_headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36',
    }
    url = 'https://www.tianyancha.com/verify/geetest.xhtml'
    data = {"uuid": int(time.time() * 1000)}
    # 获取gt challenge
    try:
        img_json, cookie = request_first(url, data, get_token_headers)
        return img_json, cookie
    except:
        pass

    cookie = get_cookie()
    get_token_headers['Cookie'] = cookie
    img_json, cookie = request_first(url, data, get_token_headers)
    return img_json, cookie




def request_first(url, data, get_token_headers):
    if get_token_headers.get('cookie'):
        cookie = get_token_headers['cookie']
    else:
        cookie = ''
    res = requests.post(url, json=data, headers=get_token_headers).json()
    gt = res['data']['gt']
    challenge = res['data']['challenge']
    url = 'https://api.geetest.com/get.php?gt={}&challenge={}&product=popup&offline=false&protocol=https://&path=/static/js/geetest.6.0.9.js&pencil=/static/js/pencil.1.0.3.js&voice=/static/js/voice.1.2.0.js&type=slide&beeline=/static/js/beeline.1.0.1.js&maze=/static/js/maze.1.0.1.js&callback=geetest_{}'.format(
        gt, challenge, int(time.time() * 1000))

    headers = {'Referer': 'https://www.tianyancha.com/',
               "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36"}
    res = requests.get(url, headers=headers)
    img_json = json.loads(re.findall("\((.*)\)", res.text, re.S)[0])
    return img_json, cookie


if __name__ == '__main__':
    get_gt_challenge()
