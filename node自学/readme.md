write 写一句话
req.url获取客服端传过来的信息
 response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
    response.write("<head><meta charset='UTF-8'></head>" 防止乱码
    url.parse(api,true)解析地址
    supervisor
    require 默认找node_modules文件下的某个文件的index.js文件
#fs模块
1 fs.stat 检测是文件还是目录
data.isFile()
data.isDirectory()
2  fs.mkdir()创建目录
3  fs.writeFile('./css/index.css', '123', err => {
    if (err) {
        console.log(err);
        return;
    }
})  如果存在替换
4  fs.appendFile('./css/index.css', '123', err => {
    if (err) {
        console.log(err);
        return;
    }
})  追加
5 fs.readFile('./css/index.css', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
    
})读取
 6 fs.readdir() 读取目录
 7 fs.rename('./css/index.css', './css/in.css', err => {
    if (err) {
        console.log(err)
        return;
    }
})修改文件名，也可以移动文件
8  fs.rmdir() 删除目录 有文件不能删除
9  fs.unlink()删除文件
10 const fs = require('fs')
let str = ""
var read = fs.createReadStream('./app.js')
read.on('data', data => {
    str = str + data
    console.log(str);
    
})
read.on('end',()=>{})
read.on('err',(err)=>{
    console.log(err);
    
})流形式读文件
path.extname()拿到后缀名

var events = require('events')
var eventemit = new events()
eventemit.on('to_parent',function(data){
    console.log(data);   
})
setTimeout(()=>{
    console.log('2525');   
    eventemit.emit('to_parent',"222")
},2000)
emit执行后才会执行on