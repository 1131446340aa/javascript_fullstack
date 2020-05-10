function Father(x){
    this.x=x
}
Father.prototype.sum=function(){
    console.log(this.x)
}
function Son(x){
    Father.call(this,x)
}
Son.prototype=new Father()
Son.prototype.constructor=Son
var son =new Son(5)
son.sum()
var fa=new Father(8)
fa.sum()