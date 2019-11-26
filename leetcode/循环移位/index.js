
let a = [1, 23, 4, 5]
let k = 6
// console.log([...a.slice(k,a.length),...a.slice(0,k)]);
// function Rshift(list, k) {
//     const n = list.length
//     if (k % n === 0) return list
//     let cnt = Math.abs(K > 0 ? k % n : n + (k % n))
//     let t = null
//     while(cnt--){
//         t=list[n-1]
//         for(let i=n-1;i>0;i--){
//             list[i]=list[i-1]

//         }
//         list[0]=t
//     }
//     return list
// }
const b=[...a]
for(let i=0;i<a.length;i++){
    
    a[i]=b[(i+k)%a.length]
}
console.log(a);
let b=[1,2,3,4]




