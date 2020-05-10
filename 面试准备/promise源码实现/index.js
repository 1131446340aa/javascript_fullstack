class MyPromise {
    constructor(fn) {
        this.callback = []
        fn(this.resolve.bind(this))
    }
    then(cb) {
        let _this = this
        return new MyPromise(resolve => {
            _this.callback.push({ cb: cb, resolve: resolve })
        })
    }
    resolve(val) {
        if (this.callback.length > 0) {
            // console.log(this.callback);
            this.callback.forEach(function (item) {
                var res;
                var cb = item.cb;
                var resolve = item.resolve;
                res = cb(val)

                if (typeof res === 'object' && res.then) {
                    res.then(resolve);
                } else {
                    resolve && resolve(res);
                }
            });
        }
    }
}
let p = new MyPromise(resolve => {
    console.log(1);
    setTimeout(() => {
        resolve(2)
    }, 1000)
})
p.then(
    res => {
       return new Promise(resolve=>{
           resolve(3)
       })
    }
).then(res => {
    console.log(res);
})
