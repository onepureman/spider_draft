"""
Base_Url:https://www.wjx.cn/Login.aspx?returnUrl=%2fnewwjx%2fmanage%2fmyquestionnaires.aspx
Author:jing
Modify:2020/12/3
"""

"""
有时候登陆失败之后需要一直登陆，因为本次登陆是一个项目的一部分所以本人的循环条件放在了项目的其他地方， 
在使用时尽量添加失败失败后重复调用 run 方法， 一直到登陆成功
"""
from requests import session
import requests
from pprint import pprint
from lxml import etree
from bs4 import BeautifulSoup


class GetData(object):

    def __init__(self, user, pwd, activity):
        self.user = user
        self.pwd = pwd
        self.activity = activity  # 问卷的编号
        self.sess = session()
        # 设置请求头
        self.sess.headers = {
            "Host": "www.wjx.cn",
            "Connection": "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Referer": "https://www.wjx.cn/wjx/activitystat/viewstatsummary.aspx?activity=96886015&",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9",
        }

    # 获取问卷的地址
    def get_url(self):
        url = "https://www.wjx.cn/newwjx/manage/myquestionnaires.aspx"
        res = self.sess.get(url)
        html = etree.HTML(res.content.decode())
        try:
            # 设置是否已经在登陆状态的检测条件，  自己添加语句
            href = html.xpath("")[0]
            return True
        except:
            return False

    # 登录
    def login(self):

        res = self.sess.get("https://www.wjx.cn/login.aspx")
        if "liVerifyCode" in res.text:
            # 如果存在则证明 需要滑动验证
            return False
        else:  # 不需要滑动验证
            soup = BeautifulSoup(res.content, "html.parser", from_encoding="utf-8")
            viewstate = soup.select("#__VIEWSTATE")[0]["value"]
            viewstategenerator = soup.select("#__VIEWSTATEGENERATOR")[0]["value"]
            eventvalidation = soup.select("#__EVENTVALIDATION")[0]["value"]

            data = {
                "__VIEWSTATE": viewstate,
                "__VIEWSTATEGENERATOR": viewstategenerator,
                "__EVENTVALIDATION": eventvalidation,
                "UserName": "",
                "hfUserName": "",
                "Password": "",
                "LoginButton": "登 录",
            }

            ress = self.sess.post("https://www.wjx.cn/login.aspx", data=data)
            return True

    # 程序入口
    def run(self):  # TODO: 测试登陆是否可用

        # 1、首先验证是否在登录状态
        login_status = self.get_url()
        if login_status:
            self.get_data()
            return True  # 成功获取数据
        else:
            print("正在重新登陆")
            # 重新登陆
            if self.login():
                self.get_data()
                return True  # 成功获取数据
            else:
                print("登陆失败， 需要滑动验证码")
                return False  # 需要滑动验证码

    def get_data(self):
        print("正在保存数据")
        file_name = "data/data.xlsx"  # 数据的保存路径
        res = self.sess.get(
            "https://www.wjx.cn/wjx/activitystat/viewstatsummary.aspx?activity={}&reportid=-1&dw=1&dt=2".format(
                self.activity))
        res = requests.get(res.url)
        with open(file_name, "wb") as f:
            f.write(res.content)


if __name__ == '__main__':
    user = ""
    pwd = ""
    activity = ""
    get_data = GetData(user, pwd, activity)  # 输入账号 密码 以及 问卷的id
    get_data.run()
