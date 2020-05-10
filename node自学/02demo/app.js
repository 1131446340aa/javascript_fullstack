// var md5=require('md5')
// console.log(md5('123456'));
const fs = require('fs')
fs.stat("./node_modules/", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        console.log(data.isFile());
        console.log(data.isDirectory());
    }
})
fs.mkdir('./css', err => {
    if (err) {
        console.log(err);
        return;
    }

})
// fs.writeFile('./css/index.css', '123', err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
// })
fs.appendFile('./css/index.css', '123', err => {
    if (err) {
        console.log(err);
        return;
    }
})
fs.readFile('./css/index.css', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
})
fs.rename('./css/index.css', './css/in.css', err => {
    if (err) {
        console.log(err)
        return;
    }
})
fs.rmdir()
fs.unlink()