var request = require('request')
var cheerio = require('cheerio')
var fs = require('fs')
var arr=[]
function novel(url){
    request(url, function (err, response, body) {
        if (!err && response.statusCode === 200){
            var $ = cheerio.load(body)
           
          var text = $('.me1.clearfix li a').each(
              function(){
                  var href = $(this).attr('href')  
                  request('http://y80s.com'+href,function(err,response,body){
                    if (!err && response.statusCode === 200){
                        var $ = cheerio.load(body)
                        
                        var img = $('.img img').attr('src')
                        var title =$('.info .font14w').text()
                        
                        var actor  =$('.info .clearfix span').eq(2).text()
                        var score =$('.info div').eq(2).text().replace('n','')
                        
                        var desc  =$('#movie_content').text()+0
                        let detail=JSON.stringify({img,title,actor,score,desc})
                        // arr.push(detail)
                        fs.appendFileSync('电影信息.json',`${detail},
                        `)
                        
                    }
                  })              
              }
          )
        //     fs.appendFileSync('禹族.txt',`
        //     ${text}`)
        //     var urlname ='http://www.biquge7.com/' + $('.page_chapter ul li a').eq(2).attr('href')
        // console.log(text);
        
        //     novel(urlname)

        
            
        }
        else{
            console.log('error');
            
        }
    })
  
}
novel('http://y80s.com/dm/list')