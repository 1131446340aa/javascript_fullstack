const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
function load(dir, cb) {
    const url = path.resolve(__dirname, dir)
    const files = fs.readdirSync(url)
    files.forEach(filename => {
        filename = filename.replace('.js', "")
        const file = require(url + '/' + filename)
        cb(filename, file)
    })

}

function initRouter(app) {
  
    const router = new Router()
    load('routes', (filename, file) => {
        // console.log( typeof file === 'function');
        
        file = typeof file === 'function' ? file(app) : file
      console.log(file);
      
  
        const prefix = filename === 'index' ? '' : `/${filename}`
        Object.keys(file).forEach(key => {
            const [method, path] = key.split(' ')
            //  prefix = filename === 'index' ? '' : `/${filename}`
            console.log(method, prefix + path);
            router[method](prefix + path, async ctx=>{
                app.ctx=ctx
               
                await file[key](app)
            })
            // file[key]()
        })
    })
    return router
}

function initController() {
    const controllers = {}
    load('controller', (filename, controller) => {
        controllers[filename] = controller
    })
    return controllers
}
function initservices() {
    const services = {}
    load('service', (filename, service) => {
        services[filename] = service
    })
    return services
}
module.exports = { initRouter, initController,initservices }
