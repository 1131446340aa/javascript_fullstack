class watcher {
    constructor (opts) {
      this.$data = opts.data
      this.$watch = opts.watch
      for (let key in opts.data) {
        this.setData(key, opts.data[key])
      }
    }
    setData (_key, _val) {
      Object.defineProperty(this, _key, {  // Object.defineProperty(this), this把上下文指向当前的对象
        get: function () {
          return _val
        },
        set: function (val) {
          const oldVal = _val
          if (oldVal === val) return val
          this.$data[_key] = val
          this.$watch[_key] && typeof this.$watch[_key] == 'function'
          this.$watch[_key].call(this, val, oldVal)
          console.log(this);
          
          return val
        }
      }) 
    }
  }
  
  // let vm = new watcher({
  //   data: {
  //     a: 0,
  //     b: 'hello'
  //   },
  //   watch: {
  //     a (newVal, oldVal) {
  //       console.log(oldVal, newVal)
  //     }
  //   }
  // })
  
  // setTimeout(() => {
  //   vm.a = 1
  // }, 1000)
//   (function () {
//   var o = { a: 1 }
//   Object.defineProperty(o, 'b', {
//     get () {
//       return this.a
//     },
//     set (newVal) {
//       this.a = newVal
//     },
//     configurable: true  // b 是否可以被再次配置
//   })
//   console.log(o.b)
//   o.b = 7
//   console.log(o.b)
//   console.log(o)
// })()