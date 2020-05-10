function Star(uname,age){
    this.uname=uname
    this.age=age
    this.sing=function(){
        console.log('我会唱歌啊');
        
    }
}
// Star.prototype.sing=function(){
//     console.log('我会唱歌')
// }
// Star.prototype.movie=function(){
//     console.log('我会movie')
// }
Star.prototype={
    constructor:Star,
    sing:function(){
        console.log('我会唱歌啊');
        
    },
    movie:function(){
            console.log('我会movie')
         }
}
var ldh=new Star('刘德华')
var ldh1=new Star('刘德华')
ldh.sing()
ldh1.sing()
console.log(ldh.__proto__===ldh1.__proto__)
console.log(Star.prototype);

//实例成员就是构造函数通过this添加的成员，实例成员只能实例化的对象来访问
//静态成员，在构造函数本身上添加的属性
Star.sex="男"
//静态成员只能通过构造函数来访问
//原型是一个对象
//原型的作用是共享
//一般共有的方法放在原型对象上，对象身上系统自己添加一个——proto——指向我们构造函数的原型对象，如果构造函数有这个方法则执行构造函数的方法，如果没有则去构造函数原型对象的prototype上查找
