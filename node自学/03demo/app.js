
const fs = require('fs')
let str = ""
var read = fs.createReadStream('./app.js')
read.on('data', data => {
    str = str + data
    console.log(str);
})
read.on('end',()=>{})
read.on('err',(err)=>{
    console.log(err);
})