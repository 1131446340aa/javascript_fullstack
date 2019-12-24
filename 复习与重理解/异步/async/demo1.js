function p1(){
    return new Promise((res,rej)=>{
       
        setTimeout(()=>{
            console.log(1);
            res('1')
           },200)
    })
}
function p2(res1){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(2);
            console.log(res1);        
            res('21313')
           })
        
    })
}
function p3(res){
    console.log(res);
    
}
// async function run(){
//    const s= await p1()
//     await p2(s)
//     await p3()
// }
// run()
p1().then(p2).then(p3)