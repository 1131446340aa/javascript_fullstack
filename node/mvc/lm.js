const Koa = require('koa')

const { initRouter, initController, initservices } = require('./lm-loader.js')
class lm {
    constructor(conf) {
        this.$app = new Koa(conf)
        this.$ctrl = initController()
        this.$service = initservices()
        this.$router = initRouter(this)
        this.$app.use(this.$router.routes())
    }
    start(port, fn) {
        this.$app.listen(port, fn)
    }
}
module.exports = lm