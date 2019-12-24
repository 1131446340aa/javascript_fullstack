function A(b) { this.b = b }
var a = new A(
    2
)
Object.prototype.b = 3
console.log(Object.prototype.b);

console.log(A.prototype.__proto__ === Object.prototype);
console.log(a.b);
console.log(a.__proto__.__proto__.b);


console.log(a.__proto__ === A.prototype);