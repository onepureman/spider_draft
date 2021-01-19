def get(num):
    try:
        a = num + "s"
    except:
        num = "c"
        get(num)
    return a

get(1)