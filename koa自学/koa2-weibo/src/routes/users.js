const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const { SECRIET } = require('../../conf/constance')
const { loginCheck, loginRedirect } = require('../middlewares/loginCheeks')
const util = require('util')

const verify = util.promisify(jwt.verify)

function getLoginInfo(ctx) {
    let data = {
        isLogin: false
    }
    const userInfo = ctx.session.userInfo
    if (userInfo) {
        data.isLogin = true
        data.userName = userInfo.userName
    }
    return data
}


router.get('/login', loginRedirect, async function (ctx, next) {
    await ctx.render('login', getLoginInfo(ctx))
})

router.get('/register', async function (ctx, next) {
    await ctx.render('register', getLoginInfo(ctx))
})

router.get('/setting', loginCheck, async function (ctx, next) {
    await ctx.render('setting', ctx.session.userInfo)
})

module.exports = router
