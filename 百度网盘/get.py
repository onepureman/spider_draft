import execjs
import os


def get_js_object(js_file_path):
    """获取js可执行对象"""
    with open(os.path.dirname(__file__) + js_file_path, encoding='GBK') as f:
        js_file = f.read()
        return execjs.compile(js_file)


ua = get_js_object("./ua.js").call("get_ua")
print(ua)