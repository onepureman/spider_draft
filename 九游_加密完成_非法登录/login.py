"""

Base_Url: https://passport.9you.com/login/ulogin.php?callback=loginCallbackNew&denyCallbackURL=http://uhg.9you.com/vip/Member/sso_deny&sid=3588812f462a13bc909e04fce8d15ae9
Author: jing
Modify: 2020/10/22
"""


import execjs
import requests
import time


class Login():
    def __init__(self, user, pwd):
        self.user = user
        self.pwd = pwd
        self.sess = requests.session()


    def get_pwd(self):
        with open('./get_pwd.js', encoding='utf-8') as f:
            js_pwd = f.read()
        pwd = execjs.compile(js_pwd).call("getpwd", self.pwd)
        return pwd

    def get_captcha(self):
        response = self.sess.get("https://login.passport.9you.com/identifyingCode.jsp?0.7676386687853862")
        with open("captcha.png", "wb") as f:
            f.write(response.content)

    def login_(self):
        self.sess.get("https://login.passport.9you.com/sso_tddevice.jsp")
        pwd = self.get_pwd()
        print(pwd)


        self.get_captcha()
        login_url_raw = "https://login.passport.9you.com/checkJCode?callback=_jqjsp&userName={}&password={}&id=LX_GAME&identifyingCode={}&&_{}="
        login_url = login_url_raw.format(self.user, self.pwd, input("请输入验证码："), str(int(time.time()*1000)))

        self.sess.headers = {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Connection": "keep-alive",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
            "Host": "login.passport.9you.com",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Site": "same-site",
        }

        response = self.sess.get(login_url)
        print(response.content.decode())


if __name__ == '__main__':
    user = "121212121"
    pwd = "121212121212"

    login = Login(user, pwd)  # TODO: 输入 账号 密码

    login.login_()