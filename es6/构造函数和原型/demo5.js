function Father(name,age){
    this.name=name
    this.age=age


}
Father.prototype.money=function(){
console.log(56165165)
}
function Son(name,age){
    console.log(this);
    
Father.call(this,name,age)


}
Son.prototype=new Father()
Son.prototype.constructor=Son
var son=new Son('ddd',12)
son.money()

