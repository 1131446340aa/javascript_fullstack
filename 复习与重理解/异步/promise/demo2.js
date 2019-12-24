var p1=new Promise(
    (reslove,reject)=>{
    setTimeout(()=>{
        console.log('我是第一个');
        reslove('我是下一个啊')
    },3000)
        
    }
)
var p2 =new Promise((reslove,reject)=>{
    console.log('我会是第一个吗？');
    reslove('我的下一个是谁？')
    
})
Promise.all([p1,p2]).then(
    (res)=>{
        console.log(res);       
    }
)
//可以发现res的值为P1,P2的reslove()