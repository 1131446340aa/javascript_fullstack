class Vue {
    constructor(opts) {
        for (let key in opts.data) {
            this.setDate(key, opts.data[key])
        }
        this.watch = opts.watch
        this.data = opts.data
    }
    setDate(key, value) {
        // console.log(this);

        Object.defineProperty(this, key, {
            get: function() {
                return value
            },
            set: function(newval) {
                this.data[key] = newval
                this.watch[key].call(this, newval, value)
                return newval
            }
        })
    }
}
let vm = new Vue({
    data: {
        test: 'i am test ',
        test1: 'i am test1'
    },
    watch: {
        test(newval, oldval) {
            console.log(newval, oldval, 1);
        }
    }
})


// vm.test = 1
console.log(vm.test);

// console.log(vm.test);