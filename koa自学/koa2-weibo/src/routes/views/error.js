const router = require('koa-router')()

router.get('/error',async ctx=>{
    await ctx.render('error')
})

router.get('*',async ctx=>{
    await ctx.render('404')
})
module.exports = router