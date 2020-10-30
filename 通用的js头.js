const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
window = global;
var document = dom.window.document;
var params = {
    location:{
        hash: "",
        host: "www.toutiao.com",
        hostname: "www.toutiao.com",
        href: "https://www.toutiao.com",
        origin: "https://www.toutiao.com",
        pathname: "/",
        port: "",
        protocol: "https:",
        search: "",
    },
    navigator:{
        appCodeName: "Mozilla",
        appName: "Netscape",
        appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
        cookieEnabled: true,
        deviceMemory: 8,
        doNotTrack: null,
        hardwareConcurrency: 4,
        language: "zh-CN",
        languages: ["zh-CN", "zh"],
        maxTouchPoints: 0,
        onLine: true,
        platform: "Win32",
        product: "Gecko",
        productSub: "20030107",
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
        vendor: "Google Inc.",
        vendorSub: "",
    },
    "screen":{
        availHeight: 1040,
        availLeft: 0,
        availTop: 0,
        availWidth: 1920,
        colorDepth: 24,
        height: 1080,
        pixelDepth: 24,
        width: 1920,
    }
};
Object.assign(window,params);

window.document = document;
