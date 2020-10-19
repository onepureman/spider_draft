import requests
import uuid
import hashlib
import os
from time import time
from random import random
from pprint import pprint



DEBUG = os.getenv("DEBUG")
cache_dir = os.getenv("SOGOU_CACHE_DIR", os.path.expanduser("~/.sogou/"))


def get_seccode():
    import js2py

    UA = (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"
    )

    headers = {
        "Sec-Fetch-Mode": "no-cors",
        "User-Agent": UA,
        "Accept": "*/*",
        "Sec-Fetch-Site": "same-origin",
        "Referer": "https://translate.sogou.com/",
        "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    }

    def get_suv():
        return str(int(time() * 1000000) + int(random() * 1000))

    def get_seccode_cookies():
        res = requests.get("https://translate.sogou.com/", headers=headers)
        return {
            "SNUID": res.cookies.get("SNUID"),
            "SUID": res.cookies.get("SUID"),
            "ABTEST": res.cookies.get("ABTEST"),
            "IPLOC": res.cookies.get("IPLOC"),
            "SUV": get_suv(),
        }

    cookies = get_seccode_cookies()
    response = requests.get(
        "https://translate.sogou.com/logtrace", headers=headers, cookies=cookies
    )
    if DEBUG:
        print(response.status_code, response.text)
    text = response.text
    rv = js2py.eval_js(text + "; window.seccode;")
    return str(rv)


def read_file(path):
    path = os.path.expanduser(path)
    path = os.path.expandvars(path)

    if os.path.isfile(path):
        with open(path) as f:
            return f.read()
    return None


def md5(data):
    if isinstance(data, str):
        data = data.encode()
    return hashlib.md5(data).hexdigest()


def write_file(path, content):
    path = os.path.expanduser(path)
    path = os.path.expandvars(path)

    prepare_dir(path)
    with open(path, "w") as f:
        return f.write(content)


def prepare_dir(path):
    if not path.endswith("/"):
        path = os.path.dirname(path)

    if not os.path.isdir(path):
        os.makedirs(path)


def get_translate(zh):
    url = "https://fanyi.sogou.com/reventondc/translateV2"
    headers = {
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'Origin': 'https://translate.sogou.com',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json',
        'Referer': 'https://translate.sogou.com/',
        'X-Requested-With': 'XMLHttpRequest',
        'Connection': 'keep-alive',
        "Cookie": "SUID=723BCC6F1508990A000000005EFD7C20; SUV=1593670689438195; pgv_pvi=4246437888; ssuid=1271548107; ABTEST=4|1593679468|v17; __guid=3937703.2217409352383618000.1593765758409.0383; SGINPUT_UPSCREEN=1593765759567; usid=dYvl6f6uw33SF2Sv; sw_uuid=3807296512; SMYUV=1594176419630287; UM_distinctid=1732c51b7f58cf-099a6b00e2ac15-376b4502-384000-1732c51b7f660f; wuid=AAHA6HCYMAAAAAqgDFLFhQAAkwA=; ad=vkllllllll2Kp5YDlllllVDDcHclllllbDZEtkllll9lllll9Zlll5@@@@@@@@@@; cd=1598410682&0f6a40761a6bd877a0b5d435ff4676f4; IPLOC=CN1100; SNUID=3DCD2480EFEB40D2F957E1CFEFEBBAE3; ld=pkllllllll2W@gZkg1g5mOdkb5VKStMfbDZEtkllllwlllllRZlll5@@@@@@@@@@; LSTMV=316%2C358; LCLKINT=1118"
    }

    data = {
        "from": "auto",
        "to": "en",
        "text": zh,
        "client": "pc",
        "fr": "browser_pc",
        "pid": "sogou-dict-vr",
        "dict": "true",
        "word_group": "true",
        "second_query": "true",
        # "uuid": str(uuid.uuid4()),
        "needQc": "1",
        "s": "",
    }
    key_file = os.path.join(cache_dir, "key.txt")
    key = read_file(key_file)
    if not key:
        key = get_seccode()
        write_file(key_file, key)
    a = f"{data['from']}{data['to']}{data['text']}{key}"

    data["s"] = md5(a)

    r = requests.post(url, data=data, headers=headers)
    return r.content.decode()


text = "挺好"
translate_ = get_translate(text)
pprint(translate_)

