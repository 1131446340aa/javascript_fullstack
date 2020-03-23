function insertSort(array) {
    function swiper(i, j) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    if (array.length < 2) return array
    for (let i = 0; i < array.length-1; i++) {
        for (let j = i; j >= 0; j--) {
           if(array[j+1]<array[j]) {swiper(j,j+1)
           }
           else{break}
        }
    }
    return array
}
console.log(insertSort([4, 3, 23, 4, 5, 34, 645, 7, 6, 756, 8, 67, 876, 9]));
