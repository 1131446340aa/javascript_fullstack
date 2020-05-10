Function.prototype._call = function (...args) {
    let [_one, ...parma] = args

    _one.fn = this
    _one.fn(...parma)
    delete _one.fn
}
function test(a, b,c,d) {
    console.log(a+b+c+d);
    console.log(this.a);
    
}
let obj={
    a:6
}
test._call(obj, 6,7,8,9)
