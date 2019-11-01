const Events=require('events')
const ev=new Events();
ev.on('price',()=>{
    console.log(123);
    
})
ev.on('price',()=>{
    console.log(456);
    
})
ev.emit('price')
