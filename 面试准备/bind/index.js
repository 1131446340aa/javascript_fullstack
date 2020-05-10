Function.prototype._bind = function (content) {
    let _that = this
    return function bound(...args) {
        if (content instanceof bound) {
            return new _that(content, ...args)
        }
        else {
            _that.apply(content, args)
        }
    }
}
function test(a, b, c, d) {
    console.log(a + this.a);

}
let obj = { a: 3 }
let run = test._bind(obj)
run(5)