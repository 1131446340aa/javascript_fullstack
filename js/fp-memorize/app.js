var Koa = require('koa');
var Router = require('koa-router');
var koa = require('koa-static')
var app = new Koa();
var router = new Router();
app.use(koa(__dirname))
// 把磁盘路径映射为网络url
router.get('/', (ctx, next) => {
    // ctx.router available
    ctx.body = `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
  <script src="./app1.js"></script>
</body>
</html>`
});
router.get('/app1.js', async (ctx) => {
    console.log('qwrqew');
    
    const fs = require('fs')
    const content = fs.readFileSync('./app1.js', 'utf-8')
    const timer = Date.now() + 1000 * 30//30s
    ctx.set('cache-control', 'public,max-age=30')//30s有效 a->ServerA ->ServerB
    ctx.body = content
})
app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(8090, () => {
    console.log('8090');

})
