let max = 0
let i = 0
let arr = [1, 2, 3,3,2,2,34,3]
let timer = setInterval(() => {
    if (arr[i] > max) {
        max = arr[i]
    }
    i++
    if (i === arr.length) {
        console.log(max);
        clearInterval(timer)

    }
}, 0)
console.log(max);



