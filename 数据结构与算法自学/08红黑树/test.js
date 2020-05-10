// var longestCommonPrefix = function (strs) {
//     let str = ""
//     for (let i = 0; i < strs[0].length; i++) {
//         for (let j = 0; j < strs.length; j++) {
//             if (strs[j][i] === strs[0][i]) {
//                 if (j === strs.length - 1) {
//                     str = str + strs[0][i]
//                 }
//             }
//             else {
//                 break;
//             }
//         }
//     }
//     return str;
// }
// console.log(longestCommonPrefix(["flower","flow","flight"]));
// var threeSum = function (nums) {
//     let arr = []
//     let ARR = []
//     let a = []
//     if (nums.length < 3) {
//         return []
//     }
//     else {
//         nums = nums.sort()
//         let index
//         let index1 = 0
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] >= 0) {
//                 index = i
//                 break
//             }
//         }
//         for (let i = 0; i < 3; i++) {
//             if (nums[i] === 0) {
//                 index1++


//                 if (index1 >= 3) {
//                     a.push([0, 0, 0])
//                     break
//                 }

//             }
//         }
//         for (let i = 0; i < index; i++) {

//             for (let m = nums.length - 1; m >= index; m--) {
//                 let array = [...nums]
//                 delete array[i]
//                 delete array[m]
//                 if (array.indexOf((nums[i] + nums[m]) * (-1)) !== -1) {
//                     arr.push([nums[i], nums[m], nums[array.indexOf((nums[i] + nums[m]) * (-1))]])
//                 }
//             }

//         }
//         for (let i = 0; i < arr.length; i++) {
//             ARR.push(arr[i].sort().join(","))
//         }

//         ARR = [...new Set(ARR)].map(item => item.split(","))


//         ARR.forEach(item => {
//             let x = []
//             for (let i = 0; i < item.length; i++) {
//                 x.push(item[i] * 1)
//             }
//             // console.log(x);
//             a.push(x)
//         })

//     }
//     return a
// };
// console.log(threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]));
var removeDuplicates = function (nums) {
    

    return nums
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));







