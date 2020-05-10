var http = require('http');
const test =require('fn')
test()

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
    response.write("<head><meta charset='UTF-8'></head>"
    )
    response.end('你好 World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');