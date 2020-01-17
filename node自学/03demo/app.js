//  function test() {
//     return new Promise((res, tej) => {
//         setTimeout(() => {
//             res('123')
//         }, 1000)

//     })
// }
//  function test1(res){
//     console.log(res);

// }
// // async function run(){
// //     await test()
// //     await test1()
// // }
// // run()
// test().then(test1)
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