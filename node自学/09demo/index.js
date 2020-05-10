// let url = require('url')
// let http = "https://leetcode-cn.com/problems/distribute-candies/solution/"
// console.log(url.parse(http));
// let http = "http://www.taobao.com/"
// let httpurl="/news"
// console.log(url.resolve(http,httpurl));
let request = require('request')
let $ = require('cheerio')
let httpurl = "https://www.1905.com/vod/?fr=vodplay_menu_vodhome"
// request.get(httpurl, (err, res, body) => {
//     // console.log(body);
//     })
   
function req(httpUrl) {
    return new Promise((reslove, reject) => {
        request.get(httpUrl, (err, res, body) => {
            if (err) {
                reject(err)
            }
            else {
                reslove({ res, body })
            }
        })
    })
}
const getclassUrl = async () => {
    let { response, body } = await req(httpurl)
//    await console.log(body);
 $('.btn_ele_nav',body).each( await function(){
   console.log( $(this).attr('title'));  
})
}