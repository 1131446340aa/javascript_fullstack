const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const { loginCheck } = require('../middlewares/loginCheeks')
const { SECRIET } = require('../../conf/constance')
// router.get('/', async (ctx, next) => {
//     await ctx.render('index', {
//         title: 'Hello Koa 2!',
//         blog: [{
//             a: '123'
//         }]
//     })
// })

router.get('/json', loginCheck,async ctx => {
    // const session = ctx.session
    // if(!session.viewNum){
    //     session.viewNum=0
    // }
    // session.viewNum++
    ctx.body = {
        a: 3
        // viewNum: session.viewNum
    }
})

// router.get('/profile/:username', async (ctx, next) => {
//     const { username } = ctx.params
//     ctx.body = {
//         title: 'koa2 json',
//         username
//     }
// })

// router.get('/profile/:username/:PageIndex', async (ctx, next) => {
//     const { username, PageIndex } = ctx.params
//     ctx.body = {
//         title: 'koa2 json',
//         username,
//         PageIndex
//     }
// })

// router.post('/login', async (ctx, next) => {
//     const { username, password } = ctx.request.body
//     // ctx.body = {
//     //     username,
//     //     password
//     // }
//     let userInfo
//     if (username === 'zhangsan' && password == 'abc') {
//         userInfo = {
//             username,
//             password
//         }
//     }
//     if (!userInfo) {

//         ctx.body = {
//             msg: 'error'
//         }

//     }
//     else {
//         token = jwt.sign(userInfo, SECRIET, { expiresIn: '1h' })
//         ctx.body = {
//             data: {
//                 token
//             }
//         }
//     }

// })

module.exports = router
