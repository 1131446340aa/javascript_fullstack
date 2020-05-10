const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static')
const KoaCros = require('koa-cors')
const KoaBody = require('koa-body')
const Path = require('path')

const app = new Koa()
const router = new KoaRouter()
// 单个路由的中间件
// formidable
router.post('/upload', KoaBody({
  multipart: true,
  formidable: {
    uploadDir: Path.join(__dirname, '/static/'), // 上传存储路径
    keepExtensions: true,
    hash: true // hash 字符串
  }
}), async (ctx) => {
  // ctx = {
  //   request,
  //   response
  // }
  // .files是koabody 加上去的
  const diskPath = ctx.request.files.avatar.path
  let fileName = Path.basename(diskPath)
  ctx.body = {
    code: 200,
    url: `http://localhost:3000/${fileName}`
  }
})

// 全局的中间件
// 顺序
app.use(KoaCros()) // 跨域处理
app.use(router.routes())
.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('server is renning http://localhost:3000')
})