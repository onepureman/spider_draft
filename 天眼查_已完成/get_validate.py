#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2021/1/6


import re
import math
import requests
from get_cookie_json import get_gt_challenge
from Crypto.Cipher import AES
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5
import binascii, hashlib, random, time, json
from get_image import GetImage


def arr_to_str(e, t, r):
    n = 0
    i = 2
    a = e
    s = t[0]
    u = t[2]
    c = t[4]

    o = r[n:n + i]
    while o:
        o = r[n:n + i]
        n += i
        try:
            _ = int(o, 16)
        except:
            break
        f = chr(_)
        l = (s * _ * _ + u * _ + c) % len(e)
        a = a[0:l] + f + a[l:]
    print(a)


class ArrToStr(object):
    '''天眼查数组转成字符串'''

    def arr_str(self, arr):
        # 滑动轨迹数组变成字符串

        def e(arg):
            '''
            滑动轨迹数组映射成新的数组
            :param arg:
            :return:
            '''
            t = []
            r = 0
            for a in range(len(arg) - 1):
                n = math.ceil(arg[a + 1][0] - arg[a][0])
                i = math.ceil(arg[a + 1][1] - arg[a][1])
                o = math.ceil(arg[a + 1][2] - arg[a][2])
                if n == 0 and i == 0 and o == 0:
                    continue
                if n == 0 and i == 0:
                    r += o
                else:
                    t.append([n, i, o + r])
                    r = 0
            if r != 0:
                t.append([n, i, r])
            print(t)
            return t

        def n(arg):
            t = [[1, 0], [2, 0], [1, -1], [1, 1], [0, 1], [0, -1], [3, 0], [2, -1], [2, 1]]
            r = "stuvwxyz~"

            for n in range(len(t)):
                if arg[0] == t[n][0] and arg[1] == t[n][1]:
                    return r[n]
            return 0

        def r(arg):
            d6z = "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqr"
            m6z = len(d6z)
            z6z = ''
            h6z = abs(arg)
            w6z = int(h6z / m6z)
            if w6z >= m6z:
                w6z = m6z - 1
            if w6z:
                z6z = d6z[w6z]
            h6z = h6z % m6z
            q6z = ''
            if arg < 0:
                q6z += "!"
            if z6z:
                q6z += "$"
            return q6z + z6z + d6z[h6z]

        f1z = []
        b1z = []
        o1z = []
        arg1 = e(arr)
        for arg in arg1:
            arg2 = n(arg)
            if not arg2:
                f1z.append(r(arg[0]))
                b1z.append(r(arg[1]))
            else:
                b1z.append(arg2)
            o1z.append(r(arg[2]))
        return ''.join(f1z) + "!!" + ''.join(b1z) + "!!" + "".join(o1z)

    def str_int(self, q1z, v1z, t1z):
        k5r = 2
        j5r = 4
        if (not v1z or not t1z) and j5r * (j5r + 1) * j5r % 2 == 0:
            return q1z
        x1z = 0
        c1z = q1z
        y1z = v1z[0]
        k1z = v1z[2]
        l1z = v1z[4]

        while t1z[x1z:x1z + 2] and k5r * (k5r + 1) * k5r % 2 == 0:
            i1z = t1z[x1z:x1z + 2]
            x1z += 2
            n1z = int(i1z, 16)
            m1z = chr(n1z)
            i1z = (y1z * n1z * n1z + k1z * n1z + l1z) % len(q1z)
            c1z = c1z[0:i1z] + m1z + c1z[i1z:]
            if k5r > 10375:

                k5r = k5r / 8
            else:
                k5r = k5r * 8

        return c1z

    def get_userresponse(self, L0z, o0z):
        '''
        :param L0z: 滑动的最后x坐标位置
        :param o0z: 极验配置的challenge参数 eg '22ff2f326624b638791dfdef7892700d9w'
        :return: userresponse
        '''
        g4r = 6
        Y4r = 7
        F4r = 3
        j0z = o0z[32:]
        c0z = []

        for j in j0z:
            K0z = ord(j)
            c0z.append(K0z - 87 if K0z > 57 else K0z - 48)
            F4r = F4r / 5 if F4r >= 10020 else F4r * 5

        j0z = 36 * c0z[0] + c0z[1]
        k0z = round(L0z) + j0z

        o0z = o0z[:32]

        n0z = 0
        f0z = [[], [], [], [], []]
        Q0z = {}
        N0z = 0
        i0z = len(o0z)

        for i in o0z:
            n0z = i
            if not Q0z.get(n0z):
                Q0z[n0z] = 1
                f0z[N0z].append(n0z)
                N0z += 1
                N0z = 0 if 5 == N0z else N0z
            Y4r = Y4r / 7 if Y4r >= 19614 else Y4r * 7

        y0z, v0z = 0, k0z
        B0z = 4
        x0z = ""
        I0z = [1, 2, 5, 10, 50]

        while 1:
            if v0z > 0:
                if v0z - I0z[B0z] >= 0:
                    y0z = int(random.random() * len(f0z[B0z]))
                    x0z += f0z[B0z][y0z]
                    v0z -= I0z[B0z]
                else:
                    f0z.pop(B0z)
                    I0z.pop(B0z)
                    B0z -= 1
                g4r = g4r / 5 if g4r > 32264 else g4r * 5
            else:
                return x0z

    def get_h7z(self):
        g0b = ''
        for _ in range(4):
            g0b += hex(int(65536 * (1 + random.random()))).replace("0x", '')[1:]

    def arrstr_change_str(self):
        """
        数组转换成字符串
        :return:
        """
        geetest_json, cookie = get_gt_challenge()
        challenge = geetest_json['challenge']
        gt = geetest_json['gt']
        geetest_s = geetest_json['s']  # 极验接口返回的s 需要请求接口
        # TODO 从这里获取图片 解析滑动位置 模拟生成数组
        slice_url = geetest_json['slice']
        bg_url = geetest_json['bg']
        arr = GetImage(bg_url, slice_url).getimg()

        arr_change_str = self.arr_str(arr)
        temp_arr = [12, 58, 98, 36, 43, 95, 62, 15, 12]  # 极验接口返回的数组 每次都是一样的 不用改
        c1z = self.str_int(arr_change_str, temp_arr, geetest_s)
        userresponse = self.get_userresponse(arr[-1][0], challenge)  # userresponse会变 但是变动的幅度不大
        passtime = arr[-1][2]
        imgload = random.choice([i for i in range(108, 130)])  # 图片加载时间 随便写 一般取110左右就可以
        aa = c1z
        rp = hashlib.md5((gt + challenge[0:32] + str(passtime)).encode()).hexdigest()
        message = '{"userresponse":"%s","passtime":%s,"imgload":%s,"aa":"%s","ep":{"v":"6.0.9"},"rp":"%s"}' % (
        userresponse, passtime, imgload, aa, rp)
        return message, gt, challenge, cookie


class GETW(object):
    '''
    获取w参数
    '''

    def get_dkey(self):
        aeskey = self.get_md5_value(str(65536 * (1 + random.random())))[:16]
        pubKey = int('10001', 16)
        modulus = int(
            '00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81',
            16)
        pubobj = RSA.construct((modulus, pubKey), False)
        public_key = pubobj.publickey().exportKey().decode()
        pubobj = RSA.importKey(public_key)
        pubobj = PKCS1_v1_5.new(pubobj)
        a = []
        for i in range(0, len(aeskey), 100):
            a.append(binascii.b2a_hex(pubobj.encrypt(aeskey.encode())).decode())
        a = ''.join(a)
        return a, aeskey

    def get_md5_value(self, data):
        myMd5 = hashlib.md5(data.encode("utf8")).hexdigest()
        return myMd5

    def run(self):
        '''
        重点函数  生成w的地方
        :return:
        '''
        def fun_nd(U7, l7):
            return U7 >> l7 & 1

        def fun_E7(D7, s7):
            I7 = 0
            j7 = 24 - 1
            while j7 >= 0:
                if fun_nd(s7, j7) == 1:
                    I7 = (I7 << 1) + fun_nd(D7, j7)
                j7 -= 1
            return I7

        def fun_ld(v7):
            w7 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()'
            return w7[v7]

        def fun_get_w(d7):  # d7是明文a经过加密偏移拿到的数组  M7 是一个字典
            M7 = {'cd': '.', 'dd': 7274496, 'ed': 9483264, 'fd': 19220, 'gd': 235, 'hd': 24}
            S7, g7 = '', ''
            C7 = 0
            A7 = len(d7)
            l45 = 0
            while C7 < A7:
                if l45 > 20827:
                    l45 -= 10
                else:
                    l45 += 10
                if C7 + 2 < A7:
                    D7 = (d7[C7] << 16) + (d7[C7 + 1] << 8) + d7[C7 + 2]
                    S7 += fun_ld(fun_E7(D7, M7['dd'])) + fun_ld(fun_E7(D7, M7['ed'])) + fun_ld(
                        fun_E7(D7, M7['fd'])) + fun_ld(
                        fun_E7(D7, M7['gd']))
                else:
                    m7 = A7 % 3
                    if m7 == 2:
                        g7 = M7['cd']
                        D7 = (d7[C7] << 16) + (d7[C7 + 1] << 8)
                        S7 += fun_ld(fun_E7(D7, M7['dd'])) + fun_ld(fun_E7(D7, M7['ed'])) + fun_ld(fun_E7(D7, M7['fd']))
                    elif m7 == 1:
                        D7 = d7[C7] << 16
                        g7 = M7['cd'] + M7['cd']
                        S7 += fun_ld(fun_E7(D7, M7['dd'])) + fun_ld(fun_E7(D7, M7['ed']))
                C7 += 3
            return S7 + g7

        def pad(data, lens=16):
            length = lens - (len(data) % lens)
            return data + (chr(length) * length).encode()

        def encryptByAES(content, key, iv):
            key = key.encode()
            iv = iv.encode()
            aes = AES.new(key, AES.MODE_CBC, iv)
            data = aes.encrypt(pad(content.encode()))  # .decode('utf-8','ignore')
            data_list = []
            for ii in data:
                data_list.append(ii)
            return data_list

        def get_w(message, aeskey, iv):
            alist = encryptByAES(message, aeskey, iv)

            return fun_get_w(alist)

        iv = '0000000000000000'
        k1p, aeskey = self.get_dkey()
        message, gt, challenge, cookie = ArrToStr().arrstr_change_str()
        w = get_w(message, aeskey, iv) + k1p
        api_url = "https://api.geetest.com/ajax.php?gt={}&challenge={}&w={}&callback=geetest_{}".format(
            gt, challenge, w, int(time.time() * 1000)

        )
        print(api_url)
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36',
            'Referer': 'https://www.tianyancha.com/',

        }
        res = requests.get(api_url, headers=headers).text
        validate = json.loads(re.findall('(\{.*\})', res)[0])['validate']
        return validate, challenge, cookie


if __name__ == '__main__':

    arr_change_str = GETW().run()
    print(arr_change_str)
