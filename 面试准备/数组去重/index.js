//1 set 方法
let arr = [1, 2, 3, 4, 3, 4]
// let arr1=[...new Set([...arr])]

//2 includes 方法
// let arr1 = []
// arr.forEach(item=>{
//     if(!arr1.includes(item)){
//         arr1.push(item)
//     }
// })
//3:indexof 方法
// let arr1=[]
// arr.forEach(item=>{
//     if(arr1.indexOf(item)===-1){
//         arr1.push(item)
//     }
// })
// 4:对象法
let obj = {}
arr.forEach(
    item => {
        if (!obj[item]) {
            obj[item] = item
        }
    }
)
let arr1 = []
for (let item in obj) {
    arr1.push(obj[item])
}
console.log(arr1);