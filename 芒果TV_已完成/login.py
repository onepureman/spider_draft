"""
Base_Url: https://www.mgtv.com/
Author: jing
Modify: 2020/10/22
"""

import requests
from pprint import pprint



def load_data():
    data = {}
    with open("./data.txt", "rt", encoding="utf-8") as f:
        read = f.readlines()
        for line in read:
            split_ = line.split(":")
            data[split_[0]] = ":".join(split_[1:]).replace("\n", "").replace(" ", "")
    return data


data = load_data()
pprint(data)

data["username"] = ""
data["password"] = ""    # TODO: 输入 账号 密码

post_url = "https://nuc.api.mgtv.com/v1/Login"
r = requests.post(post_url, data=data)

print(r.content.decode())  # 登录成功
