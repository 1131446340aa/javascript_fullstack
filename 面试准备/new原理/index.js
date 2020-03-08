function test() {
    console.log(this);
    return { a: 3 }
}
let run = new test()
console.log(run);

//过程
// var test
// test.prototype=run.__proto__
// 执行代码并绑定this
// 返回值
// 如果无返回值或者返回值非对象则返回test,否则返回对象