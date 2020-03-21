let puppeteer = require("puppeteer")
let $ = require('cheerio')
let url = require('url')
let fs = require('../06demo-fs')

async function run() {
    let brower = await puppeteer.launch({

        defaultViewport: {
            width: 1880,
            height: 800
        },
        headless: true
    })
    let phoneurl = await fs.fsRead('./index-mi-pachong/slider.json')
    phoneurl = JSON.parse(phoneurl)
    let phoneInfo = []
    async function getPhone() {
        for (let i = 7; i < 17; i++) {
            console.log(i);

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
            // 'https:' + 
            let urls = ""
            if (phoneurl[i].href.indexOf('https') == -1) {
                urls = 'https:' + phoneurl[i].href


            }
            else {
                urls = phoneurl[i].href
            }
            await page.goto(urls, {
                waitUntil: 'networkidle0'
            })
            let html = await page.content()
            let productImages=[]
            await $('.section img', html).each(function () {
                let img = $(this).attr('data-src')
                productImages.push(img)
                            
            })
            let canshu= await $('.con .right a',html).eq(1).attr('href')
               
            let page1 = await brower.newPage()
            await page1.goto(canshu, {
                waitUntil: 'networkidle0'
            })
            let html1 = await page.content()
        }

        // fs.fsWrite('phoneInfo.json', phoneInfo)

        // return phoneInfo
    }
    getPhone()
}
run()