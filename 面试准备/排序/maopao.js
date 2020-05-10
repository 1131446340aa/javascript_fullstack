
let arr = [3, 45, 22, 4, 234, 234, 3546, 32, 1, 23432, 5235, 4, 644, 734, 233, 547, 34, 23, 5235, 2]
function maopao() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr);

    return arr
}
maopao()