var obj={
    name:"aaa"
}
var x=Object.create(obj)
console.log(x.__proto__===obj);
console.log(obj.__proto__===Object.prototype);
