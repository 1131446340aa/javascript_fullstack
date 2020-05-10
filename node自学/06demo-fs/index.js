const fs = require('fs')
// var fd = fs.openSync('hello.txt', 'r')
// let context = fs.readFileSync('hello.txt')

function fsRead(fd) {
    return new Promise((reslove, reject) => {
        fs.readFile(fd, function (err, data) {
            if (err) {
                // console.log(err);
                reject(err)
            }
            else {
                reslove(data + "")
                // console.log(data + "");
            }
        })
    })
}
async function run() {
    const txt = await fsRead('hello.txt')
    // await console.log(txt);
    const txt2 = await fsRead(txt + '.txt')
    const txt3 = await fsRead(txt2 + '.txt')
    console.log(txt3)
}
// run()

function fsWrite(path,ctx) { 
    return new Promise((reslove,reject)=>{
        fs.appendFile(path, ctx, err => {
            if (!err) {
                // console.log("成功")
                reslove('成功')
            }
            else{
                reject(err)
            }
        })
    })
}
async function test(){
   await fsWrite('test.txt',"js\n")
   await fsWrite('test.txt',"css")
}
test()
fs.unlink('test.js',()=>{
    console.log('成功');
    
})
module.exports={
    fsRead,fsWrite
}
// console.log(context + "")
