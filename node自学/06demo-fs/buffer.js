// Buffer 解决数组不能进行二进制操作,js数组操作效率太低
// buffer 会在内存空间开辟固定大小内存空间
let str = "hello world"
let buffer = Buffer.from(str)
// console.log(buffer);

// 开辟一个空的buffer
var buf1 = Buffer.alloc(10)
buf1[0] = 257
// console.log(buf1);

let buf2=Buffer.allocUnsafe(10)
buf1[2] = 257 
console.log(buf2);