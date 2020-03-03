let puppeteer = require("puppeteer")
let $ = require('cheerio')
let url = require('url')
let write = require('../06demo-fs/index.js')
let httpurl = "https://sobooks.cc/shenghuoshishang"
// console.log(write);

async function run() {
    let brower = await puppeteer.launch({
        headless: true
    })
    await console.log("正在读取分页数量.....");
    async function getAllnum() {
        let page = await brower.newPage()
        await page.setRequestInterception(true)
        await page.on('request', Interception => {
            let urlobj = url.parse(Interception.url())
            if (urlobj.hostname == 'googleads.g.doubleclick.net') {
                Interception.abort()
            } else {
                Interception.continue()
            }
        })
        await page.goto(httpurl)
        let pageNum = await page.$eval('.pagination li:last-child span', element => {
            let text = element.innerHTML.substring(1, element.innerHTML.length - 2).trim()
            return text
        })
        page.close()
        return pageNum;
    }
    let pageNum = await getAllnum()

    await console.log("分页数量读取完毕,数量为:" + pageNum);

    async function pageList(num) {
        let pagelisturl = await "https://sobooks.cc/shenghuoshishang/page/" + num

        let page = await brower.newPage()
        await page.setRequestInterception(true)
        await page.on('request', Interception => {
            let urlobj = url.parse(Interception.url())
            if (urlobj.hostname == 'googleads.g.doubleclick.net') {
                Interception.abort()
            } else {
                Interception.continue()
            }
        })
        await page.goto(pagelisturl)
        let arrpage = await page.$$eval(".card .card-item .thumb-img>a", elements => {
            let arr = []
            elements.forEach((item, i) => {
                let href = item.getAttribute('href')
                arr.push(href)
            })
            return arr
        })
        // console.log(arrpage);
        page.close()
        return arrpage
    }
    for (let i = 0; i < pageNum; i++) {

        try {
            await console.log(`正在读取第${i + 1}页`);
            var pages = await pageList(i + 1);
            await console.log(`解析第${i + 1}页完毕.`);
        }
        catch (err) {
            i--
            console.log('读取失败,重新读取');

        }

        let getPageInfo = async () => {

            for (let i = 0; i < pages.length; i++) {
                try {
                    await console.log(`正在抓取第` + (i + 1) + "篇小说");
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
                    console.log(pages[i]);

                    await page.goto(pages[i])
                    const html = await page.content()
                    // console.log(html);
                    // let title = await $('.content-wrap .content .article-header .article-title a', html).text()
                    // let category = await $('#mute-category a', html).text()
                    let bookinfo = await {}
                    await $('.bookinfo ul li', html).each(
                        function (i) {
                            let tag
                            if (i == 0) {
                                tag = 'title'
                            }
                            if (i == 1) {
                                tag = "author"
                            }
                            if (i == 2) {
                                tag = "saw"
                            }
                            if (i == 3) {
                                tag = "tag"
                            }
                            if (i == 4) {
                                tag = "time"
                            }
                            if (i == 5) {
                                tag = "star"
                            }
                            if (i == 6) {
                                tag = "ISBN"
                            }
                            let info = $(this).text().slice(3, $(this).text().length).trim() || "0"
                            bookinfo[tag] = info
                        }
                    )
                    let auther_content = []
                    let novel_content = []
                    let tab = "1"//标记
                    let content = await $('.article-content>p,.article-content>h2', html).each(function () {
                        let text1 = "内容简介"
                        let text2 = "作者简介"
                        let text = $(this).text()
                        if (text == text1) {
                            tab = text1
                        }
                        if (text == text2) {
                            tab = text2
                        }
                        else {
                            if (tab == text1) {
                                novel_content.push(text)
                            }
                            else {
                                auther_content.push(text)
                            }
                        }

                    })
                    bookinfo['auther_content'] = auther_content
                    bookinfo['novel_content'] = novel_content
                    let img = await $('.bookpic img', html).attr('src')
                    bookinfo['img'] = img
                    let urls = await $('.dltable tr:nth-child(3) a:last-child', html).attr('href')
                    urls = urls.split('?url=')[1]
                    bookinfo['urls'] = urls
                    let info = JSON.stringify(bookinfo)
                    console.log(info);
                    write.fsWrite('shenghuoshishang.json', ',' + info)
                    page.close()
                }
                catch (err) {
                    console.log("网络错误");
                    i--
                    console.log("重新抓取");/*  */
                }
            }
        }
        await getPageInfo()
    }
}
run()
