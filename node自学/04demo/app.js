var http = require('http');
var fs = require('fs')
var path = require('path')
var url = require('url')
http.createServer(function (request, response) {

    // response.write("<head><meta charset='UTF-8'></head>"
    // )
    console.log(url.parse(request.url));
    
    var pathname = url.parse(request.url).pathname
    // console.log(pathname);
    if (pathname === '/') pathname = '/index.html'
    let extname = path.extname(pathname)
    if (pathname !== '/favicon.ico') {
        fs.readFile('./static/' + pathname, (err, data) => {
            if (err) {
                // console.log(1);
                fs.readFile('./static/404.html', (err, data) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    response.write(data)
                    response.end()
                })
            }
            else {
                var houname = name(extname)
                console.log(houname);
                response.writeHead(200, { 'Content-Type': houname + ';charset="utf-8"' });
                response.write(data)
                response.end()
            }
        })
    }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
function name(extname) {
    if (extname === '.html') {
        return ' text/html'
    }
    if (extname === '.css') {
        return ' text/css'
    }
    if (extname === '.js') {
        return ' text/javascript'
    }
}