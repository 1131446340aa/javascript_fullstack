let p =new Promise(reslove => {
    setTimeout(() => {
        reslove(9)
    }, 500)})
    p.then(res=>{
        console.log(res);
        
    }).then(console.log(123)
    )

