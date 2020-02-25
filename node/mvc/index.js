const lm = require('./lm')
const app=new lm()
app.start(3001,()=>{
    console.log('server open');    
})