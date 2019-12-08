function c(){
    return new Promise(
        (res,rej)=>{
            res("ok")
        }
    )
}
c().then(res=>{
    console.log(res);
    
})