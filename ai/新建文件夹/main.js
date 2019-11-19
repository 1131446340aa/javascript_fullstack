var fs =require('fs')
var aipOcrClient = require('baidu-aip-sdk').ocr;
var image =fs.readFileSync('./car.jpg').toString('base64')
var app_id = "17799075"
var Secret_key = "FNWNcgl5LS8Ro8IaTXCa83NqLKmeyFI8"
var Api_key = "a4d0n1P0NnVEuMXI0r5S0Kc3"
var client=new aipOcrClient(app_id,Secret_key,Api_key)
var options={}
client.licensePlate(image,options)
.then(res=>{
    console.log(res);
    
}).catch(err=>{
    console.log(err);
    
})