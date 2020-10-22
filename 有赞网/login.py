

import execjs


js_ = """

var encrypt =  function(t) {
                    return t = e.enc.Utf8.parse(t),
                    e.AES.encrypt(t, o, {
                        mode: e.mode.CBC,
                        padding: e.pad.Iso10126,
                        iv: r
                    }).toString()
                }


function getpwd(user, pwd){

return encrypt(pwd)
}

"""
pwd = execjs.compile(js_).call("getpwd", "222222")  # TODO: 输入 账号 密码

print(pwd)

