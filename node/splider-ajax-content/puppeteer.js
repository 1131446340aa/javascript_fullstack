//无头浏览器
// 软件自动化测试
const puppeteer = require('puppeteer')
async function run() {
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()
    await page.goto('https://juejin.im/books', {
        waitUntil:"networkidle0"

    })
    await page.screenshot({
        path:"./books.png"
    })

}

run()