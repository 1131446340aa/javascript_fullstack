let cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')
let httpurl = "http://www.doutula.com/article/list/?page=1"
axios.get(httpurl).then((res) => {
    // console.log(res.data);
    let $ = cheerio.load(res.data)
    $("#home .col-sm-9>a").each(function (i, element) {
        // console.log(element.txt);
        let title = $(element).find('.random_title').text()
        let reg = /(.*?)\d/igs
        title = reg.exec(title)[1]
        // console.log(title)
        fs.mkdir('./img/' + title, () => { })
        let pageurl = $(element).attr('href')
        // console.log(title);

        // console.log(pageurl);
        parsepage(pageurl, title)
    })
})
async function parsepage(url, title) {
    // console.log(url);

    let res = await axios.get(url)
    let $ = await cheerio.load(res.data)
    // console.log($);

    $('.pic-content img').each(function (i, element) {
        let imgUrl = $(element).attr('src')
        console.log(imgUrl);
        let ws = fs.createWriteStream(`./img/${title}/imgUrl+${i}`)
        axios.get(imgUrl, { responseType: "stream" }).then(
            function () {
                res.data.pipe(ws)
                res.data.on('close', function () {
                    ws.close()
                })
            }
        )
    })
}