let selesOffices = {} //售楼部，发布者
selesOffices.books = [] //缓存列表。花名册，存放订阅者的回调函数
selesOffices.listen = function(fn) {
    this.books.push(fn) //订阅消息
}
selesOffices.trigger = function() {
    //发布消息
    // for (let i = 0, fn;
    //     (fn = selesOffices.books[i++]);) {}
    for (let i = 0; i < selesOffices.books.length; i++) {
        let fn = selesOffices.books[i]
        fn.apply(this, arguments)
    }
}
selesOffices.listen(function(price, squarementer) {
    //购买者a
    console.log(`价格是${price},面积是${squarementer}`);

})
selesOffices.listen(function(price, squarementer) {
    console.log(`价格是${price},面积是${squarementer}`);
    //购买者b
})
selesOffices.trigger(2000000, 100)