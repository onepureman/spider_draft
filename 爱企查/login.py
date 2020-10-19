import requests
from pprint import pprint
from requests import session
import time


class GetData(object):
    def __init__(self, user, pwd):
        self.login_url = "https://www.iqiyecha.com/mayi-member.php"
        self.user = user
        self.pwd = pwd
        self.sess = session()
        self.headers = self.load_data("headers.txt")

    def load_data(self, path):

        data = {}
        with open(path, "rt", encoding="utf-8") as f:
            read = f.readlines()
            for line in read:
                split_ = line.split(":")
                data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
        return data

    def login_(self):

        # 获取formdata
        data = self.load_data("data.txt")

        # 获取验证码图片
        def get_checkcode_img():
            url = "https://www.iqiyecha.com/mayi-auth.php?"
            r_img = self.sess.get(url)
            with open("./check_img.jpg", "wb") as f:
                f.write(r_img.content)
        get_checkcode_img()

        data["userid"] = self.user
        data["userpwd"] = self.pwd
        data["checkcode"] = input("请打开-check_img文件-输入验证码")

        pprint(data)
        response = self.sess.post(self.login_url, data=data)
        with open("./a.jpg", "wb") as f:
            f.write(response.content)
        print(response.content.decode())
        print(self.sess.cookies)
        r = self.sess.get("https://www.iqiyecha.com/javascript.php?part=mayilogin&callback=success_jsonpCallback&_=" + str(round(time.time() * 1000)))
        print(r.content.decode())
        print("\u666f\u6c38\u5f3a")


if __name__ == '__main__':
    user = "景永强"
    pwd = "jing1995"
    get_data = GetData(user, pwd)
    get_data.login_()



