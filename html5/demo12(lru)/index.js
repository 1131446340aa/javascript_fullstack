function Lrucache(title){
//构造函数
this.title=title;
console.log (title)

}
//加方法
Lrucache.prototype.sayhello=function(){
console.log(`nihao,${this.title},ggg`)
}
//静态方法
Lrucache.sayhello=function(){}
let cache= new Lrucache('t5');
console.log(cache instanceof Lrucache);
console.log(cache.sayhello());
console.log(cache.__proto__===Lrucache.prototype);