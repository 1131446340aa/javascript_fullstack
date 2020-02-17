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
    // await page.screenshot({
    //     path: "shoot.png"
    // })

    let eles = await page.$$eval("#menu li a", Element => {
        let elements = []
        Element.forEach((item, i) => {
            if (item.getAttribute('href') != "#") {
                var eleobj = {
                    href: item.getAttribute('href'),
                    text: item.innerText
                }
                elements.push(eleobj)

            }
        })
        return elements
    })
    // console.log(eles);
    let gnpage = await brower.newPage()
    await gnpage.goto(eles[2].href)
    // page.on('console', function (e) {
    //     console.log(e.text());

    // })
}
run()