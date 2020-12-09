import requests
from lxml import etree


class GetData():
    def __init__(self):
        self.base_url = "https://s.taobao.com/search?q=%E5%9B%BE%E4%B9%A6%E9%9F%B3%E5%83%8F"

    def get_data(self):
        pass

    def run(self):
        res = requests.get(self.base_url)

        html = etree.HTML(res.content.decode())

        div_list = html.xpath("//div[@class='items']/div")

        for div in div_list:
            div.xpath("./")

        print(res.content.decode())


if __name__ == '__main__':
    getdata = GetData()
    getdata.run()