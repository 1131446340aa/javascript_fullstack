var http=require('http')
var https=require('https')
var cheerio=require('cheerio')
function db(url,cb){
    https.get(url,res=>{
        let html=''
        res.on('data',(chunk)=>{
            html+=chunk
        })
        res.on('end',()=>{
            const $=cheerio.load(html)
            let movies=[]
            $(li .item).each(
                function(){
                    const picUrl = $('.pic img',  ).attr('src')
                    const title = $('.info .title', this).text();
                    const star = $('.star .rating_num', this).text();
                    const inq = $('.inq', this).text()
                    movies.push({ picUrl, title, star, inq })
                }
            )
            cb(movies)

        })
    })
}
http.createServer((req,res)=>{
    db('https://movie.douban.com/top250?start=25',(data)=>{
          res.writeHead(200,{
        'Content-type':'application/json',
        'Access-Control-Allow-origin':'*'
    })
        res.end(JSON.stringify(data))
    })
  


})
.listen(3001,()=>{
    console.log(running);
    
})
