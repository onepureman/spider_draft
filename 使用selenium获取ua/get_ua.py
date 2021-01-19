
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from time import sleep

# 配置chrome的参数
options = Options()
options.add_argument('--headless')

driver = webdriver.Chrome(
    executable_path=r"E:\webdriver_\chrome_85.0.4183.83\chromedriver.exe", chrome_options=options)  # 获取chrome浏览器的驱动，并启动Chrome浏览器

driver.get(r"E:\pycharmproject\study_own\js_study\使用selenium获取ua\ua.html")  # 同步执行 JavaScript 语句
driver.implicitly_wait(10)
alter = driver.switch_to.alert.text
print(alter)

