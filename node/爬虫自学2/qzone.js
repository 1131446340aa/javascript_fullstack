const puppeteer = require('puppeteer')
async function run() {
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()
    page.setViewport({
        width: 1376,
        height: 900
    })
    await page.goto('https://juejin.im/', {
        waitUntil: "domcontentloaded"
    })
    await page.click('.login');
    await page.type('.input[name="loginPhoneOrEmail"]', '15079482413')
    await page.type('.input[name="loginPassword"]', '113144aa')
    await page.click('.panel .btn');
    await page.click('.login');
}
run();