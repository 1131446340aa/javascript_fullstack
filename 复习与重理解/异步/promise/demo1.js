function promise(){
    return new Promise(
        function(reslove,reject){
           setTimeout(()=>{
            console.log('a');
            reslove('ok')
           },3000)
          
        }
    )
}
promise().then((res)=>{
    new Promise(function(reslove,reject){
        setTimeout(()=>{
            console.log('我是后面的',res);
            reslove('ok')
        },3000)
      
    }).then(function(res){
       setTimeout(()=>{
        console.log('我是最后面的',res);
       },3000)
        
    })
    
})