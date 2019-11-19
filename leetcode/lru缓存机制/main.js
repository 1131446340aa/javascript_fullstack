function LRUCache(capacity) {
  this.capacity = capacity  // 容量
  this.obj = {};  //  get set
  // push splice pop  unshift 
  this.arr= []
}

LRUCache.prototype.get = function(key) {
    var val = this.obj[key]
    if (val) {
      var index = this.arr.indexOf(key)
      this.arr.splice(index, 1)  //在inedx位置上删除1个长度
      this.arr.unshift(key)
      return val
    } else {
      return -1
    }
    // 没有 -1
    // 处理优先级
    return this.obj[key]
};

LRUCache.prototype.put = function(key, value) {
    if (this.obj[key]) {// 已存在
      this.obj[key] = value  //更新值
      // 调整它的优先级，在某个位置 删除，移到最前面
      var index = this.arr.indexOf(key);
      this.arr.splice(index, 1)  //在inedx位置上删除1个长度
      this.arr.unshift(key)
      return
    }
    if (this.capacity === this.arr.length) {  // 容量已经满了
      var k = this.arr.pop()
      this.obj[k] = undefined
    }
    this.obj[key] = value
    this.arr.unshift(key) // 放到最前面   最前面是最优先
};

let cache = new LRUCache(2)
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
console.log(cache.get(2));       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
console.log(cache.get(1));       // 返回 -1 (未找到)
console.log(cache.get(3));       // 返回  3
console.log(cache.get(4)); 
