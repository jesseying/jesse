from selenium.webdriver import Chrome,ChromeOptions
import time
import requests as re
optipns = ChromeOptions()
optipns.add_argument("--headless")
optipns.add_argument("--no-sandbox")
optipns.add_argument("--disable-gpu")
optipns.add_argument("user-agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36'")
driver = Chrome(options=optipns)
urlBased = "https://101.qq.com/?ADTAG=cooperation.glzx.web#/"
url = "https://101.qq.com/?ADTAG=cooperation.glzx.web#/hero"
driver.get(url=url)
time.sleep(1)
champList = driver.find_elements_by_class_name("list-item")
champName = []
champCover = []
champLink = []
for i in champList:
    champName.append(i.text)
for i in champList:
    champLink.append(url+i.find_element_by_tag_name("a").get_attribute("href"))
for i in champList:
    champCover.append(i.find_element_by_tag_name("img").get_attribute("src"))
for i in range(len(champLink)):
    with open("{}.jpg".format(champName[i]),'wb') as imgWritter:
        imgBytes = re.get(champCover[i]).content
        imgWritter.write(imgBytes)
    imgWritter.close()
    time.sleep(0.1)
print("Done!")