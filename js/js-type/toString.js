console.log(Object.prototype.toString.call(""));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call(new Date()));
console.log(Object.prototype.toString.call(/[0-9]/));
class A{
    toString1(){

    }
}
class B extends A{

}
var b=new B()
console.log(b);
var fun=function(){}
console.log([1,2].toString());
//__proto__
//__proto__.__proto__
console.log(fun.toString());
console.log(Object.prototype.toString.call(fun));
//万物皆对象      
//数据类型都继承对象，对象上面有一个toString，

//why call？
function Bar() { 
    this.abc=10
 }
Bar.prototype.toFoo=function(){
    return this.abc*100
}
var bar=new Bar()
console.log(bar.toFoo());
console.log(Bar.prototype.toFoo.call({abc:100}));




