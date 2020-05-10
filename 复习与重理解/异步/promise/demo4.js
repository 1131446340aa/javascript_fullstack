var p1=new Promise((res,rej)=>{
   setTimeout(()=>{
    console.log(1);
    res(123)
   },300)
    
}).then(()=>{setTimeout(()=>{console.log(2);})
}).then(()=>{
    console.log(3);
    
})