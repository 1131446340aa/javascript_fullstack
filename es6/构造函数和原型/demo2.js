function Star(name,age){
    this.name=name
    this.age=age
}
Star.prototype.sing=function(){
    console.log('singing');
    
}
Object.prototype.sex='nan'
var ldh=new Star('ldh')
ldh.sing()
// ldh.sex='nv'
console.log(ldh.sex);
