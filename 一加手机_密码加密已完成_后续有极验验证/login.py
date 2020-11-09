"""
Base_Url:
Author:
Modify:
"""

import execjs
import requests
import json


class Login(object):

    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()
        self.sess.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        }
        self.login_url = "https://account.oneplus.com/cn/service/web/account/signIn"

    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    def get_ua(self):
        with open('./get_ua.js', encoding='utf-8') as f:
            js_pwd = f.read()
        ua = execjs.compile(js_pwd, cwd=r'E:\node\node_modules\npm\node_modules').call("getua")
        return ua

    def login_(self):

        self.sess.get("https://www.oneplus.com/cn")  # 获取cookies
        pwd = self.get_pwd()
        data = {
            "account": self.user,
            "mc": "cn",
            "qs": "callback=https%3A%2F%2Fmy.oneplus.com%2Fcn%2Forder%3Ffrom%3Dhead&app=10&client=1&state=&cc=cn&ts=1603434611649&sign=7a8f20ca1e74ed21ecb7af80bde8741b&from=null",
            "rpd": pwd,
            "vdata": "csessionid=0117s2gxgxya0KLW-E4W4nPd9loPJlpu7AsAlj12420rRvjQ-fs3z2xVRdjI5irgeV5Km4fNKUxCB-yV39ptmkzv0gAr0O8tIId3dMSMVprRhgj08S1T5hVVoDayX289iJ1yDmVDlQqlxePdOf5MvpFEiKXPasgCwiNzFyHCXwpiibe3feOXFDigU1rHrQP0VU4NSZrZlUUo2sM9IA_BjoHQ&sig=05a1C7nT4bR5hcbZlAujcdyYEVe0dtjASJkEwSnhCJynxqxoQqsreDc7ET8d7Xz46_Z0_oB-2fiiu464tAs8k3GxNyPidpllufr_4WP5HIjw19xL7VSPQ2vGrFCu_Zan3rseZIbE9wZ2dhSWieOZtSWzcrBMT4iPv-XYcmLOxVUnR25gV2cnzawF3F0VsUEt6xEc4O4H8SLwRI-Fjs9wRaTG_9Stbc5UPnCwfPB_hJhPyPuqhHIKg-Xq1epdkhFh7mExhygtd82qIZTMnCDt79IRrojpKgPvo8WuZ6tccYKmWmdZ5603OD8s5LrK6i3ZirrRmtCWxsOT_DqjZ8z7HmdC2DbJG9Rm1DIL4rmRz_DMwn1iZXL-g8-b7fd5_bGV2_9tVhGXuNzGoqpqPxvdaNIR7lj5PMEC7aMIdwlPReGamUkEaJ3qTp-vZklJTwLnGXd8bVTpFlcmeb9FntTQj3PFD7-cu8DHtJMRzYDXCbn74&token=FFFF00000000016BC05B%3A1603434612206%3A0.09860863878032888",
        }

        res = self.sess.post(self.login_url, json=data)
        print(res.content.decode())


if __name__ == '__main__':
    user = ""
    pwd = "1111222222"

    login = Login(user, pwd)  # TODO: 输入账号&密码
    login.login_()
