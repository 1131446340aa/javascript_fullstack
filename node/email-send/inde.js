const http = require('http')
const fs = require('fs')
// /register   展示一个注册的html
//注册成功之后展示一个成功的html
http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    if (url === '/register' && method === 'GET') {
        //req，res两个对象继承了流和事件
        fs.createReadStream('./register.html').pipe(res)

    }
})
    .listen(() => {
        console.log(running);

    })