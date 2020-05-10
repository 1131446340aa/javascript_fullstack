let puppeteer = require("puppeteer")
let $ = require('cheerio')
let axios = require('axios')
let url = require('url')
let fs = require('fs')
let FS = require('../06demo-fs/index.js')
async function run() {
    let json = await FS.fsRead('./book.json')
    json = await JSON.parse(json)  // 将json字符串转化为数组
    console.log(`总计${json.length}部小说等待下载......`);
    let brower = await puppeteer.launch({
        headless: true
    })
    let count = 0
    async function download(urls, title) {
        console.log(count);
        let page = await brower.newPage()
        // await console.log(pages[i]);
        await page.setRequestInterception(true)
        await page.on('request', Interception => {
            let urlobj = url.parse(Interception.url())
            if (urlobj.hostname == 'googleads.g.doubleclick.net') {
                Interception.abort()
            } else {
                Interception.continue()
            }
        })
        await page.goto(urls, {
            waitUntil: 'networkidle0'
        })
        let html = await page.content()
        let httpurl = await $('.table tbody .even a', html).attr('href')
        if (httpurl) {
            await page.close()
            async function tolodownload() {
                // await console.log(pages[i]);
                try {
                    let page = await brower.newPage()
                    await page.setRequestInterception(true)
                    page.on('request', Interception => {
                        let urlobj = url.parse(Interception.url())
                        //
                        if (urlobj.hostname == '14804066.ch1.ctc.data.tv002.com' || urlobj.hostname == '14804066.169.ctc.data.tv002.com' || urlobj.hostname == '14804066.164.ctc.data.tv002.com' || urlobj.hostname == '14804066.142.ctc.data.tv002.com') {
                            //拦截下载地址域名
                            let ws = fs.createWriteStream('./book/' + title + '.epub')
                            axios.get(urlobj.href, { responseType: "stream" }).then(function (res) {
                                console.log("正在下载:" + title);
                                res.data.pipe(ws) //通过管道流下载小说
                                ws.on('close', function () {
                                    console.log("下载已完成:" + title);
                                    count = count + 1
                                    page.close()
                                    function Run() {
                                        try {
                                            download(json[count].urls, json[count].title)
                                        }
                                        catch (err) {
                                            console.log("失败,重新.");
                                            Run()
                                        }
                                    }//当下载完毕之后通过递归形式再次进行下载
                                    if (count < json.length) {
                                        Run()
                                    }
                                })
                            })
                            Interception.abort()
                        }
                        if (urlobj.hostname == 'googleads.g.doubleclick.net') {
                            Interception.abort()
                        }
                        if (urlobj.hostname != 'googleads.g.doubleclick.net' && urlobj.hostname != '14804066.ch1.ctc.data.tv002.com' && urlobj.hostname != '14804066.169.ctc.data.tv002.com' && urlobj.hostname != '14804066.164.ctc.data.tv002.com' && urlobj.hostname != '14804066.142.ctc.data.tv002.com') {
                            Interception.continue()
                        }
                    })
                  httpurl= 'https://590m.com'+httpurl
                    await page.goto(httpurl, {
                        waitUntil: 'networkidle0'
                    })
                    let html = await page.content()
                    let timer = await $('.display-4.fs-2.mb-3.mt-3.font-weight-normal.text-warning', html).text()
                    let reg1 = await RegExp(/小时/)
                    let reg2 = await RegExp(/分钟/)                
                    let num = await timer.replace(/[^0-9]/ig, "") * 1;
                    if (!timer) {
                        count = count + 1
                        function Run() {
                            try {
                                download(json[count].urls, json[count].title)
                            }
                            catch (err) {
                                console.log("失败,重新.");
                                Run()
                            }
                        }
                        if (count < json.length) {
                            Run()
                        }
                    }
                    else {
                        if (reg1.exec(timer) || (reg2.exec(timer) && num > 10)) {
                            FS.fsWrite('lost_book.json', `,{"title":"${title}"}`)
                            count = await count + 1
                            await download(json[count].urls, json[count].title)
                        }
                        else {
                            let btn = await page.$('.btn.btn-outline-secondary.fs--1')
                            await btn.click()
                        }
                    }
                }
                catch (err) {
                    page.close()
                    tolodownload()
                }
            }
            tolodownload()
        }
        else {
            count = count + 1
            function Run() {
                try {
                    download(json[count].urls, json[count].title)
                }
                catch (err) {
                    console.log("失败,重新.");
                    Run()
                }
            }
            if (count < json.length) {
                Run()
            }
        }
    }
    async function run() {
        try {
            await download(json[count].urls, json[count].title)
        }
        catch (err) {
            console.log("失败,重新.");
            await run
        }
    }
    run()
}
run()

