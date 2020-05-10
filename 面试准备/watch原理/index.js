class Vue {
    constructor(opts) {
        this.data = opts.data,
            this.watch = opts.watch
        for (let key in opts.data) {
            this.setDate(key, opts.data[key])
        }
    }
    setDate(key, val) {
        Object.defineProperty(this, key, {
            get() {
                return val
            },
            set(newval) {
                // console.log(newval);
               
                if (newval == val) return val
                this.data[key]=newval
               
                
                if (this.watch[key] && typeof this.watch[key] == 'function') {
                 this.watch[key].call(this,newval,val)
                }

            }
        })
    }
}
let vm = new Vue({
    data: {
        a: 3,
        b: 4,
        c: 5
    },
    watch: {
        a(val) {
            console.log(val);
        },
        b(newval,oldval){
            console.log(newval,oldval);           
        }
    }
})
setTimeout(() => {
    vm.a=8
    vm.b="wad"
}, 1000);