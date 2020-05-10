var AipImageClassifyClient = require('baidu-aip-sdk').imageClassify
var fs= require('fs')//文件模块
var app_id = "17798946"
var Secret_key = "6QsafElfC5usTn34Qmfq99vLt1Upm9Ee"
var Api_key = "u9W6sDoqflFOBdMI7AlkRaX6"
var image= fs.readFileSync('car.jpg').toString("base64")//同步
var client = new AipImageClassifyClient(app_id,Secret_key,Api_key)
client.carDetect(image).then(function(result){
    console.log(result);  
}).catch(err=>{
    console.log(err);
    
})
