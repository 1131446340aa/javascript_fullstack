//nodejs 爬虫
//http://sports.sina.com.cn/nba/1.shtml
var http = require('http')
var cheerio = require('cheerio')
var fs= require('fs')
var url = 'http://www.biquge7.com/book/6128272/534062930.html'//目标网站

http.get(url, function (res) {
    // console.log(res);
    var html = "";
    res.setEncoding('utf8')
    res.on('data', function (chuck) {
        html = html + chuck  
         
    })
    res.on('end', function () {
        // var $ = cheerio.load(html)
        // console.log(cheerio.load(html));
        // console.log(html);
        console.log(html);
        var a=html
        fs.writeFile('x.txt',a,function(){})
        

    }).on('error',function(err){
        console.log(JSON.stringify(err));
    })  
});