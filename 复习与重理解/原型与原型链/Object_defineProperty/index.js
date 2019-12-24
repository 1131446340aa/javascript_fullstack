// let obj = {}
// let temp = null
// Object.defineProperty(obj, 'a', {
//     // writable: true,
//     // value: 'aaa',
//     get: function(val) {
//         // console.log(val);
//         console.log(val);

//         return temp
//     },
//     set: function(newval, oldval) {
//         console.log(222);
//         temp = newval
//         console.log(newval, oldval);

//     }
// })

// console.log(obj.a);
// obj.a = 3
//     // obj.a = 1
// console.log(obj.a);
// console.log(obj);
// obj.a = 35


// // console.log(obj.a);
let data1 = {
    name: '小明',
    age: 18
}

Object.defineProperty(data1, 'age', {
        set: function(newAge, oldage) {
            console.log(this.name + '现在' + newAge + '岁')
            console.log(oldage);

        },
        get: function() {
            return 18;
        }
    })
    //赋值
data1.age = 18;
data1.age = 19;
console.log(data1.age)
console.log(data1);