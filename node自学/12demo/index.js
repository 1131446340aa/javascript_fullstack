let puppeteer = require("puppeteer")
let $ = require('cheerio')
let url = require('url')
let fs=require('../06demo-fs')
async function run() {
    let brower = await puppeteer.launch({

        defaultViewport: {
            width: 1880,
            height: 800
        },
        headless: false
    })
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
    await page.goto('https://www.mi.com/', {
        waitUntil: 'networkidle0'
    })
    let html = await page.content()
    let header = []
    await $('.header-nav .nav-list .item-children li a', html).each(function (item) {
        let href=$(this).attr('href')
        let name = $(this).children('.title').text()
        let imgHref = $(this).children('.figure-thumb').children('img').attr('data-src')
        let price = $(this).children('.price').text()
        let obj = { name, imgHref, price,href }
        header.push(obj)
    })
    fs.fsWrite('header.json',JSON.stringify(header))
    // console.log(header);
    
    let slider = []
    let sliderobj = {}
    await $('.site-category-list .category-item .children ul li a', html).each(function () {
        let href=$(this).attr('href')
        let name = $(this).children('.text').text()
        let imgsrc = $(this).children('img').attr('data-src')
        sliderobj = { name, imgsrc,href }
        slider.push(sliderobj)
    })
    fs.fsWrite('slider.json',JSON.stringify(slider))
    let swiper=[]
    await $('#J_homeSwiper .swiper-wrapper .swiper-slide a',html).each(function(){
        let href=$(this).attr('href')
        let imgsrc
        if(!$(this).children('img').attr('data-src')){imgsrc=$(this).children('img').attr('src')}
         else{
            imgsrc=$(this).children('img').attr('data-src')
         }
        let obj={href,imgsrc}
        swiper.push(obj)
    })
    fs.fsWrite('swiper.json',JSON.stringify(swiper))
    let flashbuy=[]
    await $('#J_flashSaleList ul li a .content',html).each(function(){
        let href='https://www.mi.com/seckill'
        let imgurl=$(this).children('.thumb').children('img').attr('data-src')
       let name= $(this).children('.title').text()
       let desc= $(this).children('.desc').text()
       let price= $(this).children('.price').text()
       let obj={href,name,desc,imgurl,price}
       flashbuy.push(obj)
    })
    fs.fsWrite('flashbuy.json',JSON.stringify(flashbuy))
    let bd16=[]
    await $('.home-brick-box .box-bd .row .span16 ul li a',html).each(function(){
        let href=$(this).attr('href')
        let imgurl=$(this).children('.figure').children('img').attr('data-src')
        let name= $(this).children('.title').text()
        let desc= $(this).children('.desc').text()
        let price= $(this).children('.price').children('.num').text()
        let obj={href,name,desc,imgurl,price}
        bd16.push(obj)
    })
    fs.fsWrite('bd16.json',JSON.stringify(bd16))
    let bd4=[]
    await $('.home-brick-box .box-bd .row .span4 ul li a',html).each(function(){
        let href=$(this).attr('href')
        let imgurl=$(this).children('img').attr('data-src')
       
        let obj={href,imgurl}
        bd4.push(obj)
    })
    fs.fsWrite('bd4.json',JSON.stringify(bd4))
}
run()