const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const KoaSession = require('koa-generic-session')
const redis = require('koa-redis')
const index = require('./routes/index')
const UserApiRouter = require('./routes/api/user')
const users = require('./routes/users')
const ErrorRouter = require('./routes/views/error')
const { REDIS_CONF } = require ('./conf/db.js')
const { isProd } = require('./utils/env')
const { SECRIET } = require('../conf/constance.js')

const jwt = require('koa-jwt')

let ERROR = {}

if (isProd) {
    ERROR.redirect = '/error'
}
// error handler
onerror(app, ERROR)

// middlewares
// app.use(jwt({
//     secret: SECRIET
// }).unless({
//     path: [/^\/login/]
// }))
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))

app.keys = ['vsvsef464654*/-*bafyfbyfbew']

app.use(KoaSession({
    key: 'weibo.sid',
    prefix: 'weibo:sess',
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    },
    store: redis({
        alt: `${REDIS_CONF.host}:${REDIS_CONF.port}`
    })
}))

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes

app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(UserApiRouter.routes(), UserApiRouter.allowedMethods())
app.use(ErrorRouter.routes(), ErrorRouter.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})

module.exports = app

