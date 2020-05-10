// var a = new Set() //类数组，但是成员的值是唯一的
// Array.from([2, 3, 4, 5, 6, 4, 2, 3]).forEach(x => a.add(x))
// for (let i of a) {
//     console.log(i);

// }
// const items = new Set([1, 2, 3, 4, 5, 6, 7, 6, 8])
// console.log(items.size);
// //set 用size计算长度
// [...new Set ('abbbbaaax')].join('')
// let set = new Set()
// let a=NaN
// let b=NaN
// set.add(a)
// set.add(b)
//     //在js中NaN是不相等的，set中NaN是相等的
// set.add({})
// console.log(set.size);
// set.add({})
// console.log(set.size)
//     //对于set而言空对象是不相等的
// console.log({ a: 3 } === { a: 3 });
// set.add(1).add(2)
// set.has(1)
// set.delete(2)
// const pro = {
//     width: 1,
//     height: 1
// }
// const prosess = new Set()
// prosess.add('width')
// prosess.add('width')
//     // const item =new Set()
// //     //Array.from(new Set)
// let set = new Set(['red', 'green', 'blue'])
// for (let item of set.keys()) {
//     console.log(item);

// }
// for (let item of set.values()) {
//     console.log(item);

// }
// for (let item of set.entries()) {
//     console.log(item);

// }
// Set.prototype[Symbol.iterator]===Set.prototype.values
// set.forEach((value, index)=>{

// })
//set 也支持数组解构
let oSet = new Set([1, 2, 3])
    // [...oSet].map((item) => {
    //     return item * 2
    // })
let b = new Set([4, 3, 2])
let union = new Set([])
let intersect = new Set([...oSet].filter(x => {
    return b.has(x)
}))