// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
// var convert = function(s, numRows) {
//     let transform
//     let arr=[]
//     if(numRows===1){
//         transform=s
//     }
//     if(numRows>=2){
//         for(let i=0;i<numRows;i++){
            
            
//             for(let j=i;j<s.length;j=j+2*numRows-2){
//                 console.log(j);
                
//                 arr.push(s[j])
//                 if(j<j+(2*numRows-2-2*i)&&j+(2*numRows-2-2*i)<(j+2*numRows-2))
//                 {arr.push(s[j+2*numRows-2-2*i])}
               
//             }
//         }
//         transform=arr.join("")
//     }
    
//     return transform
// }
// // console.log(convert("LE",1));
// var rotatedDigits = function(N) {
//     let Arr=[]
//     let len=0
// for(let i=1;i<=N;i++){
//     i=i+""
//     let arr=[...i]
   
// if(!(arr.includes('3')||arr.includes('4')||arr.includes('7'))){
//     Arr.push(arr)
// }  
// }
// Arr.map(item=>{
// for(let n=0;n<item.length;n++){
//     if(item[n]==='0'||item[n]==='1'||item[n]==='8'){

//     }
//     else{
//         len++
//         break;
//     }
// }
// })
// return len
// };
// console.log(rotatedDigits(1000));
// let a=[1,2]
// let b=[...a].reverse()
// console.log(b);
// console.log(a);
// a=a+""
// parseInt(a)
// console.log(([...123]));
str="swdes234"
let str1=str.trim()
let arr=[...str1]
let res=parseInt(str1)
if(isNaN(res)){
    res=0
}
console.log(res);













