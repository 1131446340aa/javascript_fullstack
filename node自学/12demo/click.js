let puppeteer = require("puppeteer")
async function run() {
    let brower = await puppeteer.launch({

        defaultViewport: {
            width: 1880,
            height: 800
        },
        headless: false
    })
    let page = await brower.newPage()
    await page.goto('https://www.dytt8.net/')
    // let eles = await page.$$("#menu li a")
    // await eles[2].click()//点击
    let inptele = await page.$(".searchl .formhue")
    await inptele.focus()
    await page.keyboard.type("小丑")
    let btnclick = await page.$('.searchr input[name="Submit"]')
    await btnclick.click()
}
run()