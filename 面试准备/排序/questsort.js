class Questfast {
    constructor(array) {
        this.array = array

    }

    sort(start, end, array) {
        let left = []
        let right = []
        let middle = Math.floor((start, end) / 2)

        let m = array.splice(middle, 1)

        array.forEach(item => {
            if (item < m) left.push(item)
        else right.push(item)
        })
        if (left.length > 1) { left = this.sort(0, left.length - 1, left) }
        if (right.length > 1) { right = this.sort(middle + 1, right.length - 1, right) }
        return [...left, ...m, ...right]

    }

    questsort() {
       return this.sort(0, this.array.length - 1, this.array)
    }
}
let qs = new Questfast([4, 3, 23, 4, 5, 34, 645, 7, 6, 756, 8, 67, 876, 9])
console.log(qs.questsort());
//[
//     3,   4,  4,  5,  6,   7,
//     8,   9, 23, 34, 67, 645,
//   756, 876
// ]
