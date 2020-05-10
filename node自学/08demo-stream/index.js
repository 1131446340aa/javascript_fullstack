let fs = require('fs')
let ws = fs.createWriteStream('hello.txt', {
    flags: "w",
    encoding: "utf-8"
})
ws.on('open', () => {
    console.log('open');
})
ws.on('close', () => {
    console.log('关闭1');
})
ws.write("helloworld", err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("成功");
    }
})
ws.end(()=>{
    console.log("关闭");
})