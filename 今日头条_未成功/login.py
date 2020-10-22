import execjs
import time
import requests


class Login(object):
    def __init__(self):
        self.sess = requests.session()

    def get_anc_img(self):

        url = "https://verify.snssdk.com/captcha/get?lang=zh&app_name=sso&h5_sdk_version=2.15.4&sdk_version=&iid=0&did=0&device_id=0&ch=web_text&aid=24&os_type=2&tmp=1602840513266&platform=pc&webdriver=undefined&fp=verify_kgbyyi46_kf8QRlqr_QNyo_4GPK_A43v_OLRQGCreBEGa&subtype=&challenge_code=1105&os_name=windows&_signature=_02B4Z6wo00f01QAlAowAAIBCztEXfe.kYFEAIAYAAB-CCUOL4jqGfMEhJqhe1B0u1lPj8l9tOi3GSINJuNg7yICb.Zzmsx9bIldTq56Qnvj7PnxkEF0ZIGdGw-Y7ZvBQLI0lsHboe2IKZ12737"

        r = self.sess.get(url).json()

        with open("./one.jpg", "wb") as f1:
            f1.write(self.sess.get(r["data"]["question"]["url1"]).content)
        with open("./two.png", "wb") as f2:
            f2.write(self.sess.get(r["data"]["question"]["url2"]).content)



    def anc(self, data):
        js_ = """
        function getpwd(e) {
                        var t, n = [];
                        if (void 0 === e)
                            return "";
                        t = function(e) {
                            for (var t, n = e.toString(), r = [], o = 0; o < n.length; o++)
                                0 <= (t = n.charCodeAt(o)) && t <= 127 ? r.push(t) : 128 <= t && t <= 2047 ? (r.push(192 | 31 & t >> 6),
                                r.push(128 | 63 & t)) : (2048 <= t && t <= 55295 || 57344 <= t && t <= 65535) && (r.push(224 | 15 & t >> 12),
                                r.push(128 | 63 & t >> 6),
                                r.push(128 | 63 & t));
                            for (var i = 0; i < r.length; i++)
                                r[i] &= 255;
                            return r
                        }(e);
                        for (var r = 0, o = t.length; r < o; ++r)
                            n.push((5 ^ t[r]).toString(16));
                        return n.join("")
                    }
        
        """
        r = execjs.compile(js_).call("getpwd", data)
        return r

    def login(self):
        user = self.anc("18513606786")
        pwd = self.anc("Jing1995.")
        print(user, pwd)

        data = {
            "aid": "24",
            "service":"",
            "account_sdk_source": "sso",
            "mix_mode": "1",
            "fp": "verify_kgbyyi46_kf8QRlqr_QNyo_4GPK_A43v_OLRQGCreBEGa",
            "password": user,
            "account": pwd,
            "web_timestamp": str(int(time.time()*1000))
                    }

        login_url = "https://sso.toutiao.com/account_login/v2/"
        r = self.sess.post(login_url, data=data)
        print(r.content.decode())


if __name__ == '__main__':
    login = Login()
    login.login()
    # login.get_anc_img()