#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2021/1/6

import requests
import io
import PIL.Image as Image
import cv2
import numpy as np
from imgToStr import GTrace
import os

def get_merge_image(imurl):
    location_list = [{"x": -157, "y": -58}, {"x": -145, "y": -58}, {"x": -265, "y": -58}, {"x": -277, "y": -58},
                     {"x": -181, "y": -58}, {"x": -169, "y": -58}, {"x": -241, "y": -58}, {"x": -253, "y": -58},
                     {"x": -109, "y": -58}, {"x": -97, "y": -58}, {"x": -289, "y": -58}, {"x": -301, "y": -58},
                     {"x": -85, "y": -58}, {"x": -73, "y": -58}, {"x": -25, "y": -58}, {"x": -37, "y": -58},
                     {"x": -13, "y": -58}, {"x": -1, "y": -58}, {"x": -121, "y": -58}, {"x": -133, "y": -58},
                     {"x": -61, "y": -58}, {"x": -49, "y": -58}, {"x": -217, "y": -58}, {"x": -229, "y": -58},
                     {"x": -205, "y": -58}, {"x": -193, "y": -58}, {"x": -145, "y": 0}, {"x": -157, "y": 0},
                     {"x": -277, "y": 0}, {"x": -265, "y": 0}, {"x": -169, "y": 0}, {"x": -181, "y": 0},
                     {"x": -253, "y": 0}, {"x": -241, "y": 0}, {"x": -97, "y": 0}, {"x": -109, "y": 0},
                     {"x": -301, "y": 0}, {"x": -289, "y": 0}, {"x": -73, "y": 0}, {"x": -85, "y": 0},
                     {"x": -37, "y": 0}, {"x": -25, "y": 0}, {"x": -1, "y": 0}, {"x": -13, "y": 0},
                     {"x": -133, "y": 0}, {"x": -121, "y": 0}, {"x": -49, "y": 0}, {"x": -61, "y": 0},
                     {"x": -229, "y": 0}, {"x": -217, "y": 0}, {"x": -193, "y": 0}, {"x": -205, "y": 0}]

    bg_img = requests.get(imurl, verify=False, timeout=3).content
    bg_img = io.BytesIO(bg_img)

    im = Image.open(bg_img)

    im_list_upper = []
    im_list_down = []
    for location in location_list:
        if location['y'] == -58:
            im_list_upper.append(im.crop((abs(location['x']), 58, abs(location['x']) + 10, 116)))
        if location['y'] == 0:
            im_list_down.append(im.crop((abs(location['x']), 0, abs(location['x']) + 10, 0 + 58)))

    new_im = Image.new('RGB', (260, 116))

    x_offset = 0
    for im in im_list_upper:
        new_im.paste(im, (x_offset, 0))
        x_offset += im.size[0]

    x_offset = 0
    for im in im_list_down:
        new_im.paste(im, (x_offset, 58))
        x_offset += im.size[0]
    return new_im


def get_distance():
    cv2.imwrite('r3.jpg', cv2.imread('captcha.png', 0))
    cv2.imwrite('r4.jpg', cv2.imread('slice.png', 0))
    cv2.imwrite('r4.jpg', abs(255 - cv2.cvtColor(cv2.imread('r4.jpg'), cv2.COLOR_BGR2GRAY)))
    result = cv2.matchTemplate(cv2.imread('r4.jpg'), cv2.imread('r3.jpg'), cv2.TM_CCOEFF_NORMED)
    x, y = np.unravel_index(result.argmax(), result.shape)

    cv2.rectangle(cv2.imread('r3.jpg'), (y + 20, x + 20), (y + 136 - 25, x + 136 - 25), (7, 249, 151), 2)
    print('识别坐标为:', y)

    if y > 198 and y < 2:
        return 0
    else:
        return y


class GetImage(object):
    '''获取图片位置生成数组'''

    def __init__(self, bg, slice):
        '''

        :param bg: 图片地址
        :param slice: 滑块地址
        '''
        if 'static.geetest.com' not in bg:
            self.bg_url = 'https://static.geetest.com/' + bg

        else:
            self.bg_url = bg
        if 'static.geetest.com' not in slice:
            self.slice_url = 'https://static.geetest.com/' + slice
        else:
            self.slice_url = slice

    def getimg(self):
        img_ = get_merge_image(self.bg_url)
        img_.save("./captcha.png")
        # 保存 滑块
        bg_img = requests.get(self.slice_url, verify=False,
                              timeout=3).content
        bg_img = io.BytesIO(bg_img)
        im = Image.open(bg_img)
        im.save("./slice.png")
        # 计算滑动的距离
        distance = get_distance()
        os.system('del *.jpg')
        os.system('del *.png')
        trace = GTrace()
        distance, arr = trace.get_mouse_pos_path(distance)
        print(arr)
        return arr



if __name__ == '__main__':
    # 背景图片还原（带有缺口信息）
    img_ = get_merge_image("https://static.geetest.com/pictures/gt/fc064fc73/bg/e1777734e.jpg")
    # img_ = self.get_merge_image("https://static.geetest.com/pictures/gt/e11621516/bg/81fdfc5fc.webp")
    img_.save("./captcha.png")
    # 保存 滑块
    bg_img = requests.get("https://static.geetest.com/pictures/gt/fc064fc73/slice/e1777734e.png", verify=False,
                          timeout=3).content
    bg_img = io.BytesIO(bg_img)
    im = Image.open(bg_img)
    im.save("./slice.png")

    # 计算滑动的距离
    distance = get_distance()
    print(distance)
