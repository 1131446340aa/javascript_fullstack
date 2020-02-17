var events = require('events')
var eventemit = new events()
eventemit.on('to_parent',function(data){
    console.log(data);   
})
setTimeout(()=>{
    console.log('2525');   
    eventemit.emit('to_parent',"222")
},2000)
