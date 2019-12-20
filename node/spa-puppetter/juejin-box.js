const puppeteer = require('puppeteer')
const $ = require('cheerio')
const schedule = require('node-schedule')
async function run() {
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()
    await page.goto('https://juejin.im/books', {
        waitUntil: 'networkidle0'
    })
    const html = await page.content();

    const books = $('.info', html)
    let totalsold = 0;
    let totalSale = 0;
    books.each(function() {
        const book = $(this)
        console.log($(book.find('.price-text')).text());

        const price = $(book.find('.price-text')).text().replace('￥', '')
        const count = $(book.find('.message')).last().find('span').text().replace('人已购买', '');
        totalSale += Number(price) * Number(count);
        totalsold += Number(count)
    })
    console.log(`${totalSale},${totalsold}`);
    //定时任务
    // Promise.all([promise1,promise2])=>{peomise}
}
// const date = new Date(2019, 11, 20, 21, 11, 0)
// const rule = new schedule.RecurrenceRule()
// rule.dayOfWeek = [0, 1, 2, 3, 4, 5, 6]
// rule.hour = 21
// rule.minute = 16
// const job = schedule.scheduleJob(date, () => {
//     run()
// })
run()