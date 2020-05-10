function fn(x){
    console.log("dfefe");
    console.log(this.name)
    console.log(x);
    
}
var obj={
    name:'andy'
}
fn.call(obj,3)