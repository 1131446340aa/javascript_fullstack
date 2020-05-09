const seq = require('./seq')

require('./module/index')

seq.sync({ force: true }).then(res => {
    console.log('ok')
    
    process.exit()
})
  

seq.authenticate().then(() => {
    console.log('ok')

}).catch(() => {
    console.log('error')

})