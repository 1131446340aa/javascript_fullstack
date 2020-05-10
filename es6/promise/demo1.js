var test=function(){
    return new Promise((reslove, reject)=>{
        setTimeout(
            ()=>{
                console.log(111);
                reslove('ok')
            }
            ,500
        )
    })
}
var test2=function(){
    
    return new Promise((reslove, reject)=>{
        setTimeout(
            ()=>{
                console.log(222);
                reslove('ok')
            }
            ,500
        )
    })
    
}
var test3=function(){
    console.log(333);
    
}
test()
.then(test2)
.then(test3)