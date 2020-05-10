// function Person(name) {
//     this.name = name
// }
// let p = new Person('wn')
// p.__proto__ = Person.prototype
//     // console.log(p.__proto__);
//     // console.log(Person.__proto__);
//     // console.log(Function.__proto__);
// var foo = {}
// var d = {}
// var foo = new Object()
// var F = function() {}
// Object.prototype.a = "valA"
// Function.prototype.b = "valB"
// console.log(foo.a);
// console.log(foo.b);
// console.log(F.b);
function Person(name) {
    this.name = name
    return 1
}
let p = new Person('wn')
console.log(p);
//构造函数如果return不是对象则没用
var myarr = [1, 2, 3, 4, 56, 7, 8]
for (let index in myarr) {
    console.log(index);

}
let a = { name: 2 }
myarr.name = "woniu"
console.log(myarr);
console.log(myarr.length);
// for in 是索引，不能进行几何计算
//遍历的顺序不是按照实际数组的内部顺序进行的
//使用for in 会遍历数组的所有可枚举属性，包括原型
// for of 遍历的是数组的元素，遍历不包括数组的原型和索引