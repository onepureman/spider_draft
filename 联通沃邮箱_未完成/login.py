"""
Base_Url: https://mail.wo.cn/
Author: jing
Modify: 2020/10/22
"""


import requests
from pprint import pprint
from requests import Session
sess = Session()

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
}


def load_data():
    data = {}
    with open("./data.txt", "rt", encoding="utf-8") as f:
        read = f.readlines()
        for line in read:
            split_ = line.split(":")
            data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
    return data


data = load_data()
data["uid"] = ""
data["password"] = ""   # TODO: 输入 账号 密码

url = "https://mail.wo.cn/coremail/index.jsp?cus=1"

r = sess.post(url, data=data)
response = sess.get("https://mail.wo.cn/welcome", headers=headers)
pprint(response.request.headers)
print(sess.cookies)

