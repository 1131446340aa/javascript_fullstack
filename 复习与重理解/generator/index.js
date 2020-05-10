// function *a(){
//     yield console.log('我是第一个哦');
//     yield console.log('我是第二个哦');
//     return console.log('我是最后一个哦');
    
    
// }
// var dy=a()
// dy.next()
// dy.next()
// dy.next()
// dy.next()
// dy.next()
// function *test(){
//   console.log('我什么时候执行呢');
    
// }
// //没有写yield 同样要用next()
// var b=test()
// b.next()
// function *demo(){
//     console.log('hello' );
    
// }
// var ccc=demo()
// ccc.next()
// // ccc.next()
// for (let i of a()){
//     i
    
// }
var c=2
function *a(){
    yield this
    yield 2
    return console.log(3);
    
    
    
}
let i=0
for(o of a()){
    console.log(o,++i);
    
}



// console.log(a().next());
// console.log(a().next());
// console.log(a().next());
// console.log(a().next());




