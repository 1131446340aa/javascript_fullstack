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
        for (let i = 0; i < 7; i++) {
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
            let urls=""
            if(phoneurl[i].href.indexOf('https')==-1){
                urls='https:' + phoneurl[i].href
                
               
            }
            else{
                urls=phoneurl[i].href
            }
            await page.goto(urls, {
                waitUntil: 'networkidle0'
            })
            let html = await page.content()
            let phone_image = []
            await $('#J_sliderView img', html).each(function () {
                let img = $(this).attr('data-src')
                phone_image.push(img)
            })

            let title = await $('.pro-info .pro-title .name', html).text()

            let des1 = await $('#J_desc font', html).text()
            let des2 = await $('#J_desc', html).contents()[1].nodeValue
            let select_price = []
            let select_Color = []
            await $('[data-index="0"] .step-list li a', html).each(function () {
                let name = $(this).children('.name').text()
                let price = $(this).children('.price').text()
                let obj = { name, price }
                select_price.push(obj)
            })
            await $('[data-index="1"] .step-list li a img', html).each(function () {
                let color = $(this).attr('alt')
                let img = $(this).attr('data-src')
                let obj = { color, img }
                select_Color.push(obj)
            })
            let productImages = []
            let indroduceImages = []
            await $('.section-box', html).each(function () {
                if ($(this).attr('class') == 'section-box  ') {


                    $(this).children('.section-info').children('.con').children('.pic').each(
                        function () {
                            let img = $(this).attr('data-src')
                            indroduceImages.push(img)
                        }
                    )
                }

            })
            await $('.section-box,.active .section-info .con .pic', html).each(function () {

                let img = $(this).attr('data-src')
                productImages.push(img)
            })
            let info = { title, des1, des2, select_price, select_Color, productImages, indroduceImages }
            phoneInfo.push(JSON.stringify(info))
        }
        
        fs.fsWrite('phoneInfo.json',phoneInfo)
        
        // return phoneInfo
    }
    getPhone()
}
run()