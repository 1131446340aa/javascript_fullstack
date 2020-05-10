class Vue {
    constructor() {
        this.callbacks = []
        this.pending = false
    }
    nextTick(fn) {
        if (typeof fn === 'function') this.callbacks.push(fn)
        if (!this.pending) {
            this.pending = true
            setTimeout(() => { this.flushcallback() }, 0)
        }
    }
    flushcallback() {
        let arr = this.callbacks.slice()
        this.callbacks.length = 0
        arr.forEach(item => {
            item()
        })
    }
}
let vm=new Vue()
vm.nextTick(()=>{console.log(111);
})
vm.nextTick(()=>{console.log(121);
})