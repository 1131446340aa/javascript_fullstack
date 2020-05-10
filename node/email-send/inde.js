const http = require('http')
const fs = require('fs')
const urlModul = require('url')
const nodemailer = require('nodemailer')
let code = 2333
// /register   展示一个注册的html
//注册成功之后展示一个成功的html
http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    const urlobj = urlModul.parse(url)
    console.log('url', url);

    if (url === '/register' && method === 'GET') {
        //req，res两个对象继承了流和事件
        fs.createReadStream('./register.html').pipe(res)
        res.writeHead(200, {
            'Content-type': 'text/html;utf8'
        })

    }
   
    else if (urlobj.pathname === '/sendEmail' && method === 'GET') {
        const emailQs = urlobj.query

        const email = emailQs.split('=')[1]
        const transport = nodemailer.createTransport({
            service: "qq",
            port: 465,
            secureConnection: true,
            auth: {
                user: '1424254461',
                pass: "dmsopdvamukfbabf "

            }

        })
        transport.sendMail({
            to: email,
            html: `<h2>${code}</h2>`,
            from: "1424254461@qq.com",
            subject: 'xxx网站主页'
        }, (err, info) => {
            res.writeHead(200, {
                'Content-type': 'application/json'
            })
            if (err) {
                res.end(JSON.stringify({
                    code: 500,
                    email
                }))
            }
            else {
                res.end(JSON.stringify({
                    code: 200,
                    email
                }))
            }
        })
        console.log(email);
    }
    else if (urlobj.pathname === '/register1' && method === "POST") {
        let data;
        req.on('data', (c) => {
            data += c
        })
        req.on('end', () => {
            console.log('data', data);

        })
    }
    else {
        res.end('访问出错')
    }

})
    .listen(1314, () => {
        console.log('running');

    })