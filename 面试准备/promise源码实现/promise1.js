class Promise {
    PENDING = "pending"
    RESLOVE = "reslove"
    REJECT = "reject"
    constructor(fn) {
        if (typeof fn !== "function") {
            throw new TypeError('please a function')
        }
        this.fn = fn
        this.resloveCallback = []
        this.rejectCallback = []
        this.initstate()

        try { fn(this.reslove.bind(this), this.reject.bind(this)) }
        catch (e) {
            this.reject(e)
        }
    }
    reslove(value) {
        if (this.state === this.PENDING) {
            this.state = this.RESLOVE
            this.value = value
            this.resloveCallback.forEach(item => {
                item(this.value)
            })
        }
    }
    reject(reason) {
        if (this.state === this.PENDING) {
            this.state = this.REJECT
            this.value = reason
            this.rejectCallback.forEach(item => {
                item(this.reason)
            })
        }
    }
    initstate() {
        this.state = this.PENDING
        this.value = null
        this.reason = null
    }
    then(Onreslove, Onreject) {
      


        let promise2 = new Promise((reslove, reject) => {
            if (typeof Onreslove !== "function") {
              
                Onreslove = function (value) {
                    return value
                }
            }
            if (typeof Onreject !== "function") {
                Onreject = function (err) {
                    throw (err)
                }
            }
            if (this.state === this.RESLOVE) {
                setTimeout(() => {
                    try {
                        const x = Onreslove(this.value)
                        Promise.reslovePromise(promise2, x, reslove, reject)
                    }
                    catch (err) {
                        reject(err)
                    }
                })
            }
            if (this.state === this.REJECT) {
                setTimeout(() => {
                    try {
                        const x = Onreject(this.reason)
                        Promise.reslovePromise(promise2, x, reslove, reject)
                    }
                    catch (e) {
                        reject(e)
                    }
                })
            }
            if (this.state === this.PENDING) {

                this.resloveCallback.push(value => {
                    setTimeout(() => {
                        try {

                            const x = Onreslove(value)

                            Promise.reslovePromise(promise2, x, reslove, reject)
                        }
                        catch (err) {
                            reject(err)
                        }
                    })
                })
                this.rejectCallback.push(reason => {
                    setTimeout(() => {
                        setTimeout(() => {
                            try {
                                const x = Onreject(reason)
                                Promise.reslovePromise(promise2, x, reslove, reject)
                            }
                            catch (e) {
                                reject(e)
                            }
                        })
                    })
                })
            }
        })
        return promise2
    }
}
Promise.reslovePromise = function (promise2, x, reslove, reject) {
    
    if (promise2 === x) {
        throw new TypeError('promise cycle error')
    }
    if (x instanceof Promise) {
       ;

        x.then((value) => {
            Promise.reslovePromise(promise2, value, reslove, reject)
        }, reason => {
            reject(reason)
        })
    }
    else if (x !== null && (typeof x === "object" || typeof x === "function")) {
        try {
            if (typeof x.then === "function") {
                x.then((value) => {
                    Promise.reslovePromise(promise2, value, reslove, reject)
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
let p = new Promise((reslove, reject) => {
    setTimeout(() => {
        console.log(123);
        reslove(789)
    }, 500)
})
p.then(res => {
    return new Promise(reslove => {
        console.log(res);
        reslove(9)
    })

}).then((res) => {
    return new Promise(reslove => {
        console.log(res);
        reslove(15)
    })

}).then(console.log(7)
)
