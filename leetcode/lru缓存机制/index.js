//  缓存算法
//  函数  首字母大写的函数，  就是一个类
function LRUCache(title) {
  // 构造函数
  // 类的属性
  // this 是指针  指向要生成的对象
  console.log(this)
  this.title = title;
}
//加方法
LRUCache.prototype.sayHello = function() {
  console.log(`你好，${this.title}`)
}

// 静态方法
LRUCache.buyCar = function() {
  console.log('买车')
}

//对象  实例
let cache = new LRUCache('井柏然')
console.log(cache.title)
console.log(cache.sayHello())
LRUCache.buyCar()
console.log(cache.__proto__ == LRUCache.prototype)
console.log(cache instanceof LRUCache)
