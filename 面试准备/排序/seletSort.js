let seletSort = function (array) {
    let arr = []
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i; j < array.length; j++) {
            if (j == array.length - 1) {
                arr.push(array[i])
                break
            }
            if (array[i] > array[j + 1]) {
                let temp = array[i]
                array[i] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return arr
}
console.log(seletSort([4, 3, 23, 4, 5, 34, 645, 7, 6, 756, 8, 67, 876, 9]));
// [
//     3, 4,  4,  5,  6,   7,
//     8, 9, 23, 34, 67, 645,
//   756
// ]
