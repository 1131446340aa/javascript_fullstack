//nodejs 爬虫
//http://sports.sina.com.cn/nba/1.shtml
var http = require('http')
var cheerio = require('cheerio')
var fs= require('fs')
var url = 'http://sports.sina.com.cn/nba/1.shtml'//目标网站

http.get(url, function (res) {
    // console.log(res);
    var html = "";
    
    res.on('data', function (chuck) {
        html = html + chuck   
    })
    res.on('end', function () {
        var $ = cheerio.load(html)
        $("#right a").each(function () {
            // console.log($(this).attr('href'));
            var articleUrl = $(this).attr('href')  
            let time=new Date().valueOf()
            fs.writeFile('./news/'+time+".txt", articleUrl, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("File saved successfully!");
            });
            http.get(articleUrl, function (res) {
                var html = ""
                res.on('data',function(chuck){
                    html=chuck+html
                    // console.log(html);
                   
                })
                res.on('end',function(){
                    var $ = cheerio.load(html)
                    var otext=$('#artibody').text()
                    // console.log(otext);
                  
                    // console.log(arr);
                    // var time=new Date().valueOf()
                //   fs.writeFile('./news/nba'+time+'.txt',otext,function(){})
                }).on('error',function(err){
                    console.log();
                    
                })
            })
        })
    }).on('error',function(err){
        console.log(JSON.stringify(err));
    })  
});
// var fs = require('fs');

// fs.writeFile("./news/output.txt", "Hello World!", function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("File saved successfully!");
// });
