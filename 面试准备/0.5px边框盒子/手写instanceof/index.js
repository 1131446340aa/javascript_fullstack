function instanceOf(left, right) {
     left = left.__proto__
    right = right.prototype
    while (left) {
        if (left === right) return true
        else {
            left = left.__proto__
        }
        return false
    }
}
let obj = new Object()
console.log(instanceOf(obj,Object));
