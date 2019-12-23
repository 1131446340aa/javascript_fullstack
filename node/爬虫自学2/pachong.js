var request = require('request')
var cheerio = require('cheerio')
var fs = require('fs')
function novel(url){
    request(url, function (err, response, body) {
        if (!err && response.statusCode === 200){
            var $ = cheerio.load(body)
          var text = $('.showtxt').text().replace(/\s/g,"\n")
            fs.appendFileSync('禹族.txt',`
            ${text}`)
            var urlname ='http://www.biquge7.com/' + $('.page_chapter ul li a').eq(2).attr('href')
        console.log(text);
        
            novel(urlname)
            
        }
        else{
            console.log('error');
            
        }
    })
  
}
novel('http://www.biquge7.com/book/7062749/558621114.html')
// request('http://www.biquge7.com/book/6128272/534062930.html', function (err, response, body) {
//     if (!err && response.statusCode === 200) {

//         // fs.writeFile('b.html', body, function () { })

//         // fs.writeFile('adad.html',1,function(){})
//         var $ = cheerio.load(body)

//         text += $('.showtxt').text()
//        console.log(text);
       
//         var urlname = url + $('.page_chapter ul li a').eq(2).attr('href')
//         console.log(urlname);
//         request(urlname, function (err, response, body) {
//             if (!err && response.statusCode === 200) {

//             }
//         })
//         // fs.appendFileSync('xiao.txt',otext)
//         // otext='asfasfesgfesgesgsegse'
//         // console.log(otext);
//         // fs.writeFile('adadsasd123123as.html',1,function(){})

//     }
// })
// let str="sacdascfas \n nsafasfasfas"
// console.log(str);

