const router = require('koa-router')()
const userServies = require('../controllers/mySqlConfig')
router.prefix('/users')

router.get('/', function(ctx, next) {
    ctx.body = 'this is a users response!'
})

router.get('/bar', function(ctx, next) {
    ctx.body = 'this is a users/bar response'
})
router.post('/register', async(ctx, next) => {
    let uservalue = ctx.request.body.uservalue
    let pwdvalue2 = ctx.request.body.pwdvalue2

    if (!uservalue || !pwdvalue2) {
        ctx.body = {
            code: '80000',
            mess: '账号，密码，不能为空'
        }
    }
    let user = {
        uservalue: uservalue,
        pwdvalue2: pwdvalue2,
    }
    await userServies.findUser(user.uservalue).then(async(res) => {
        console.log(res);
        if (res.length) {
            try {
                throw Error('用户名已经存在')
            } catch (error) {
                console.log(error);

            }
            ctx.body = {
                code: "80003",
                mess: "用户名已存在"
            }
        } else {
            await userServies.insertUser([user.uservalue, user.pwdvalue2]).then(
                res => {
                    console.log(res);
                    let r = ''
                    if (res.affectedRows !== 0) {
                        r = 'ok',
                            ctx.body = {
                                code: "200",
                                data: r,
                                mess: "注册成功"
                            }
                    } else {
                        r = 'error',
                            ctx.body = {
                                code: "500",
                                data: r,
                                mess: "注册失败"
                            }
                    }

                }
            ).catch(
                err => {
                    ctx.body = {
                        code: "500",
                        data: err,

                    }
                }
            )
        }
    })
})
router.post('/inserthistiryItem', async(ctx, next) => {
    var query = ctx.request.body.query
    await userServies.historySearch(query).then(async res => {
        if (res.length) {
            await userServies.deleteHistory(query).then(async res => {
                await userServies.inserthistiryItem(query).then(
                    async res => {}
                )
            })

        } else {
            await userServies.inserthistiryItem(query).then(
                res => {
                    console.log(res);
                    let r = ''
                    if (res.affectedRows !== 0) {
                        r = 'ok',
                            ctx.body = {
                                code: "200",
                                data: r,
                                mess: "添加成功"
                            }
                    } else {
                        r = 'error',
                            ctx.body = {
                                code: "500",
                                data: r,
                                mess: "添加失败"
                            }
                    }

                }
            ).catch(
                err => {
                    ctx.body = {
                        code: "500",
                        data: err,

                    }
                }
            )
        }

    })

})
router.post('/login', async(ctx, next) => {
    var uservalue = ctx.request.body.uservalue


    await userServies.userLogin(uservalue, pwdvalue)
        .then((res) => {
            let r = '';
            console.log(res)
            if (res.length) {
                r = 'ok';
                let result = {
                    uservalue: res[0].username,
                    pwdvalue: res[0].userpwd
                }
                ctx.body = {
                    code: 200,
                    data: result,
                    mess: '登录成功'
                }
            } else {
                r = 'error';
                ctx.body = {
                    code: '404',
                    data: r,
                    mess: '账号或密码错误'
                }
            }
        })
        .catch((err) => {
            ctx.body = {
                code: '500',
                data: err
            }
        })
})
router.post('/delete', async(ctx, next) => {
    await userServies.deleteAll().then(
        res => {
            console.log(res);

            ctx.body = {
                mess: "删除成功",
                code: "200"
            }
        }

    ).catch(
        res => {
            ctx.body = {
                mess: "删除失败",
                code: "500"
            }
        }
    )
})
router.post('/history', async(ctx, next) => {
    await userServies.historyAll().then(
        res => {
            console.log(res);

            ctx.body = {
                mess: "成功",
                code: "200",
                history: res
            }
        }

    ).catch(
        res => {
            ctx.body = {
                mess: "失败",
                code: "500"
            }
        }
    )
})
module.exports = router