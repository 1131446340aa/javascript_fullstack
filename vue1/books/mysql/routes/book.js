const router = require('koa-router')()
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const booksServies = require('../controllers/mySqlConfig')
router.prefix('/books')
router.get('/bookstore', async function (ctx, next) {
    await booksServies.novel_select().then(res => {

        ctx.body = {
            content: res,
            code: "200"
        }

    })
    await booksServies.history_select().then(res => {

        ctx.body.history = res

    })
    await booksServies.cglz_select().then(res => {

        ctx.body.cglz = res

    })
    await booksServies.hightStar_select().then(res => {

        ctx.body.hightStar_select = res

    })
    await booksServies.renwen().then(res => {

        ctx.body.renwen = res

    })
    await booksServies.shenghuo().then(res => {

        ctx.body.shenghuo = res

    })
    // ctx.body={a:123}
})
router.post('/bookinfo', async (ctx, next) => {
    let bookid = await ctx.request.body.params.bookid
    await booksServies.querybookinfo(bookid).then(res => {
        ctx.body = {
            bookinfo: res
        }
    })
})
router.get('/search', async function (ctx, next) {
    await booksServies.hot_search().then(res => {
        ctx.body = {
            hot_search: res
        }
    })
})
router.get('/recommed', async function (ctx, next) {
    await booksServies.sqlday_book().then(res => {
        ctx.body = {
            day_book: res
        }
    })
    await booksServies.fengxiang().then(res => {
        ctx.body.fengxiang = res
    })
    await booksServies.recommed().then(res => {
        ctx.body.recommed = res
    })
})
router.get('/delreader', async function (ctx, next) {
    await booksServies.delreader().then(res => {
        ctx.body = {
            status: "200"
        }
    })
})
router.post('/sBook', async (ctx, next) => {
    let title = await ctx.request.body.params

    await booksServies.search_book(title).then(res => {
        ctx.body = {
            search_book: res.slice(0, 20)
        }
    })
})
router.post('/zhuche', async (ctx, next) => {
    let user = await ctx.request.body.params.user
    let pass = await ctx.request.body.params.pass

    await booksServies.sqluser(user).then(res => {
        if (res.length) {
            ctx.body = {
                status: '500',
                msg: "用户已存在"
            }
        }
        else {
            ctx.body = {
                status: '200',
                msg: "注册成功"
            }
            booksServies.zhuche(user, pass)
        }



    })

})
router.post('/user', async (ctx, next) => {
    let user = await ctx.request.body.params.user
    await booksServies.sqluser(user).then(res => {
        if (res.length) {

            ctx.body = {
                status: '200',
                data: [{
                    nickname: res[0].nickname,
                    img: res[0].img,
                    sex: res[0].sex,
                    qianming: res[0].qianming,
                }]
            }
        }
    })

})
router.post('/login', async (ctx, next) => {
    let user = await ctx.request.body.params.user
    let password = await ctx.request.body.params.password
    await booksServies.login(user, password).then(res => {
        if (res.length) {
            ctx.body = {
                status: '200',
                msg: "登录成功"
            }
        }
        else {
            ctx.body = {
                status: '500',
                msg: "用户名或密码错误"
            }
        }
    })

})
router.post('/collection', async (ctx, next) => {
    let user = await ctx.request.body.params.user
    let bookinfo = await ctx.request.body.params.bookinfo[0]
    await booksServies.collection(user, bookinfo).then(res => {
        ctx.body = {
            status: '200',
            msg: "添加成功"
        }
    })

})
router.post('/sqlcollection', async (ctx, next) => {
    let user = await ctx.request.body.params.user
    await booksServies.sqlcollection(user).then(res => {
        ctx.body = {
            data: res
        }
    })

})
router.post('/updateuserinfo', async (ctx, next) => {
    let user = await ctx.request.body.params.user
    let sex = await ctx.request.body.params.sex
    let qianming = await ctx.request.body.params.qianming
    let nickname = await ctx.request.body.params.nickname
    await booksServies.updateinfo(user, nickname, qianming, sex).then(res => {
        ctx.body = {
            status: '200',
            msg: "更新成功"
        }
    })

})
router.post('/setUp', async (ctx, next) => {
    let user = await ctx.request.body.params.user
    let fontsize = await ctx.request.body.params.fontsize
    let bgcolor = await ctx.request.body.params.bgcolor
    await booksServies.insertSetUp(user, fontsize, bgcolor).then(res => {
        ctx.body = {
            status: '200',
            msg: "插入成功"
        }
    })

})
router.post('/progress', async (ctx, next) => {
    let user = await ctx.request.body.params.user
    let bookid = await ctx.request.body.params.bookid
    let progress = await ctx.request.body.params.progress
    await booksServies.bookprogress(user, bookid, progress).then(res => {
        ctx.body = {
            status: '200',
            msg: "保存成功"
        }
    })

})
router.post('/sqlset', async (ctx, next) => {
    let user = await ctx.request.body.params.user
    await booksServies.sqlsetUP(user).then(res => {
        if (res.length) {
            ctx.body = {
                status: '200',
                msg: "查询成功",
                data: res
            }
        }
        else {
            ctx.body = {
                status: '500',
                msg: "暂无数据"
            }
        }
    })

})
router.post('/sqlprogress', async (ctx, next) => {
    let user = await ctx.request.body.params.user
    let bookid = await ctx.request.body.params.bookid
    await booksServies.sqlpregress(user, bookid).then(res => {
        if (res.length) {
            ctx.body = {
                status: '200',
                msg: "查询成功",
                data: res
            }
        }
        else {
            ctx.body = {
                status: '500',
                msg: "暂无数据"
            }
        }
    })

})
// router.post('/sqlHS', async (ctx, next) => {
//     let text = await ctx.request.body.params.text
//     let user = await ctx.request.body.params.user
//     await booksServies.sqlHS(user, text).then(res => {
//         if (res.length) {
//             ctx.body = {
//                 status: '200',
//                 msg: "记录存在"
//             }
//         }
//         else {
//             ctx.body = {
//                 status: '500',
//                 msg: "记录不存在"
//             }
//         }
//     })

// })
// router.post('/delsqlHS', async (ctx, next) => {
//     let text = await ctx.request.body.params.text
//     let user = await ctx.request.body.params.user
//     await booksServies.delsqlHS(user, text).then(res => {
//         ctx.body = {
//             status: '200',
//             msg: "删除成功"
//         }

//     })

// })
router.post('/insertHS', async (ctx, next) => {
    let text = await ctx.request.body.params.text
    let user = await ctx.request.body.params.user
    await booksServies.insertHS(user, text).then(res => {
        ctx.body = {
            status: '200',
            msg: "插入成功"
        }
    })

})
router.post('/HS', async (ctx, next) => {
    let user = await ctx.request.body.params.user
    await booksServies.historySearch(user).then(res => {
        ctx.body = {
            status: '200',
            data: res
        }
    })

})
router.post('/sqlCll', async (ctx, next) => {
    let user = await ctx.request.body.params.user
    let bookid = await ctx.request.body.params.bookid
    await booksServies.sqlCll(user, bookid).then(res => {
        if (res.length) {
            ctx.body = {
                status: '200',
                msg: "已收藏",
                data: res
            }
        }
        else {
            ctx.body = {
                status: '500',
                msg: "未收藏",
                data: res
            }
        }
    })

})
router.post('/delCll', async (ctx, next) => {
    let user = await ctx.request.body.params.user
    let bookid = await ctx.request.body.params.bookid
    await booksServies.delCll(user, bookid).then(res => {
        ctx.body = {
            status: '200',
            msg: "取消收藏"
        }
    })

})
router.get('/delHS', async function (ctx, next) {
    await booksServies.delHS().then(res => {
        ctx.body = {
            msg: "成功",
            code: "200"
        }
    })

    // ctx.body={a:123}
})
let status = "200"

// router.post('/download', async (ctx, next) => {
//     let url = await ctx.request.body.params.url
//     let title = await ctx.request.body.params.title
//     let ws = await fs.createWriteStream('D:/js全栈/javascript_fullstack/vue1/books/book/static/' + title + '.epub')
//     await axios.get(url, { responseType: "stream" })
//         .then(function (res) {
//             ctx.body = {
//                 msg: "下载完成"
//             }
//             res.data.pipe(ws)
//             ws.on('close', function () {
//                 console.log(123);

//                 status = "500"
//             })
//         })
// })
router.post('/readHis', async (ctx, next) => {
    let user = await ctx.request.body.params.user
    let bookinfo = await ctx.request.body.params.bookinfo
    await booksServies.insertReadHis(user, bookinfo).then(res => {
        ctx.body = {
            status: "200"
        }
    })
})
router.post('/sqlAllreadHis', async (ctx, next) => {
    let user = await ctx.request.body.params.user
    await booksServies.sqlALLReadHis(user).then(res => {
        ctx.body = {
            status: "200",
            data: res
        }
    })
})
module.exports = router