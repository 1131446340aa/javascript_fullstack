const Koa = require('koa')
const app = new Koa()
const glob = require('glob')
const path = require('path')
const KoaRouter = require('koa-router')
const fs = require('fs')
const router = new KoaRouter({ prefix: '/api' })
router.get('/user', async (ctx) => {
    let userInfo = fs.readFileSync('./api/user.json').toString()
    ctx.body = {
        data: JSON.parse(userInfo),
        code: 200
    }
})
glob.sync(path.resolve('./api/', '*.json'))
    .forEach((item, i) => {
        console.log(item);

        let apiJsonPath = item && item.split('/api')[1]
        let apiPath = apiJsonPath.replace('.json', '')
        router.get(apiPath, async (ctx) => {
            let fileData = fs.readFileSync(item).toString()
            ctx.body = {
                data: JSON.parse(fileData),
                code: 200
            }
        })
    })
//app.use 代表加载一个中间件
// request ->middleWare1->middleWare2->response
// ctx就是一个对象 ctx：{requestAnimationFrame,response}
// app.use(async (ctx) => {
//     ctx.body = {
//         code: 200,
//         msg: 'ok'
//     }
// })
app.use(router.routes()).use(router.allowedMethods())
app.listen(1314, () => {
    console.log("server is running http://localhost:1314");

})