
function MyPromise(fn) {
    var _this = this;

    this.callback = [];
    function resolve(val) {
        if (this.callback.length > 0) {
            this.callback.forEach(function (item) {
                var res;
                var cb = item.cb;
                var resolve = item.resolve;

                cb && (res = cb(val));
                resolve && resolve(res);
            });
        }
    }

    fn(resolve.bind(this));
}

MyPromise.prototype.then = function (cb) {
    var _this = this;

    return new MyPromise(function (resolve) {
        _this.callback.push({
            cb: cb,
            resolve: resolve
        });
    });
};

var p = new MyPromise(function (resolve) {
    console.log(1);
    setTimeout(function () {
        resolve(2);
    }, 1000);
});

p.then(function (val) {
    console.log(val);
    return val + 1;
}).then(function (val) {
    console.log(val);
});
