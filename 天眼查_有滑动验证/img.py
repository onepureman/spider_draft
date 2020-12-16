import numpy as np
from PIL import Image
import matplotlib.pyplot as plt

def sequence():
    t = 0
    n = []
    e = "6_11_7_10_4_12_3_1_0_5_2_9_8".split("_")
    for r in range(0, 52):
        t = 2 * int(e[int(r%26/2)]) + r % 2
        if 0 == int(r/2)%2:
            t += -1 if (r%2) else 1

        t += 26 if (r<26) else 0
        n.append(t)

    return n


def gen(_seq, _img):
    """
    用于将图片还原
    @param _seq: 图片的序列号，也就是 Sequence 方法生成的结果
    @param _img: 图片
    @return new img
    """
    r = 160
    a = int(r / 2)
    np_image = np.array(img)
    new_np_img = np.zeros((160, 312, 3), dtype=np.uint8)

    for u in range(0, 52):
        c = _seq[u] % 26 * 12 + 1
        _ = int(a if (25 < u) else 0)

        xpos = u % 26 * 10
        ypos = a if (25 < u) else 0

        # var l = getImageData(c, _, 10, a);
        # putImageData(l, u % 26 * 10, 25 < u ? a : 0);
        slice_img = np_image[_:(_+a), c:(c+10)]
        n = len(slice_img[0])
        new_np_img[ypos:(ypos+a), xpos:(xpos+n)] = slice_img

    return new_np_img

if __name__ == "__main__":
    seq = sequence()
    img = Image.open('fd923e5f9.webp.jpg')
    newimg = gen(seq, img)

    plt.imshow(newimg)
    plt.show()