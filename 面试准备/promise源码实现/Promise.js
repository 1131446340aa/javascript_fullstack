class MyPromise {
    PENDING = 'pending'
    FULFILLED = "fulfilled"
    REJECT = 'reject'
    constructor(fn) {

        if (typeof fn !== "function") {
            throw new TypeError(`Promise resolver ${fn} is not a function`)
        }
        this.initValue()
        this.Reslovecallback = []
        this.Rejectcallback = []
        try { fn(this.reslove.bind(this), this.reject.bind(this)) }
        catch (e) {
            this.reject(e)
        }
    }
    initValue() {
        this.state = this.PENDING
        this.value = null
        this.reason = null
    }
    reslove(value) {


        if (this.state == this.PENDING) {
            this.state = this.FULFILLED

            this.value = value
            this.Reslovecallback.forEach(fn => { fn(this.value) })
        }
    }
    reject(reason) {
        if (this.state == this.PENDING) {
            this.state = this.REJECT
            this.reason = reason
            this.Rejectcallback.forEach(fn => { fn(this.reason) })
        }
    }
    then(onReslove, onReject) {
        if (typeof onReslove !== 'function') {

            onReslove = function (value) {
                return value
            }
        }
        if (typeof onReject !== 'function') {
            onReject = function (error) {
                throw (error)
            }
        }
        let promise2 = new MyPromise((reslove, reject) => {
            if (this.state === this.REJECT) {
                setTimeout(() => {
                    try {
                        const x = onReject(this.reason)
                        MyPromise.reslovePromise(promise2, x, reslove, reject)
                    }
                    catch (e) {
                        reject(e)
                    }
                });
            }
            if (this.state === this.FULFILLED) {
                setTimeout(() => {
                    try {
                        const x = onReslove(this.value)
                        MyPromise.reslovePromise(promise2, x, reslove, reject)
                    }
                    catch (e) {
                        reject(e)
                    }
                });
            }
            if (this.state = this.PENDING) {
                this.Reslovecallback.push((value) => {
                    setTimeout(() => {
                        try {
                            const x = onReslove(value)
                            MyPromise.reslovePromise(promise2, x, reslove, reject)


                        }
                        catch (e) {
                            reject(e)
                        }
                    }
                    )
                })
                this.Rejectcallback.push(reason => {
                    setTimeout(() => {
                        try {
                            const x = onReject(reason)
                            MyPromise.reslovePromise(promise2, x, reslove, reject)
                        } catch (e) {
                            reject(e)
                        }
                    })
                })
            }

        })
        return promise2
    }
}
MyPromise.reslovePromise = function (promise2, x, reslove, reject) {

    if (promise2 === x) {
        throw new TypeError(
            " cycle promise"
        )
    }
    if (x instanceof MyPromise) {
        x.then(value => {
            MyPromise.reslovePromise(promise2, value, reslove, reject)
        }, reason => {
            reject(reason)
        })
    }
    else if (x !== null && (typeof x === 'object' || typeof x === "function")) {
       
        try {
            if (typeof x.then === "function") {
                x.then(value => {
                    MyPromise.reslovePromise(promise2, value, reslove, reject)
                }, reason => {
                    reject(reason)
                })
            }
        }
        catch (e) {
            reject(e)
        }
    }
    else {
        reslove(x)
    }

}
let p = new MyPromise((reslove, reject) => {
    setTimeout(() => {
        reslove(1)
        reject(2)
    }, 300)
})
p.then(res => {
    return new MyPromise(reslove => {
        setTimeout(() => {
            console.log(res);
            reslove(5)
        }, 500)
    })
}, error => {
    console.log(3);

})
    .then(res => {
        return new Promise(reslove => {
            setTimeout(() => {
                console.log(res);
                reslove(8)

            }, 200);
        })
    }).then(
        res => {
            return new Promise(reslove => {
                setTimeout(() => {
                    console.log(res);
                    reslove(10)
    
                }, 200);
            })
        }
    ).then(res=>{
        console.log(res);
        
    })

