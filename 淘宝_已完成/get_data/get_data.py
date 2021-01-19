import requests
from requests import session
from lxml import etree
import os
import sys
import re
os.chdir(os.path.dirname(__file__))
sys.path.append("..")
from login import Login
from pprint import pprint
import json


class GetData():
    def __init__(self):
        self.base_url = "https://s.taobao.com/search?q=%E5%9B%BE%E4%B9%A6%E9%9F%B3%E5%83%8F&data-value=sale-desc"
        self.sess = Login(input("输入账号"), input("输入密码")).login_()

    def get_data(self):
        pass

    def run(self):

        if self.sess:
            res = self.sess.get(self.base_url)
            print(res.content.decode())
            # 多次有滑动验证 - 霸下
            data = json.loads(re.findall("g_page_config = (.*);", res.content.decode())[0])
            for i in data["mods"]["itemlist"]["data"]["auctions"]:
                print(i["title"])

            # html = etree.HTML(res.content.decode())
            #
            # div_list = html.xpath("//div[@class='items']/div")
            #
            # for div in div_list:
            #     div.xpath("./")
            #
            # print(res.content.decode())


if __name__ == '__main__':
    getdata = GetData()
    getdata.run()