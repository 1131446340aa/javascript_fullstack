class fastSort {
    constructor(array) {
        this.array = array
    }
    swiper(i, j) {
        let temp = this.array[i]
        this.array[i] = this.array[j]
        this.array[j] = temp
    }
    sort() {
        this.middle(0, this.array.length - 1)
        return this.array
    }
    middle(left, right) {
        
        let center = Math.floor((left + right) / 2)
        if (this.array[left] > this.array[center]) {
            this.swiper(left, center)
        }
        if (this.array[center] > this.array[right]) {
            this.swiper(center, right)
        }
        if (this.array[left] > this.array[center]) {
            this.swiper(left, center)
        }
        this.swiper(center, right - 1)      
        let i = left
        let j = right - 1     
        while (i < j) {
            while (this.array[++i] < this.array[right - 1]) { }
            while (this.array[--j] > this.array[right - 1]) { }
            if (i < j) {
                this.swiper(i, j)
            }
        }
        this.swiper(i, right - 1)
        if (left < i - 1) {
            this.middle(left, i - 1)
        }
        if (i + 1 < right) {
            this.middle(i + 1, right)
        }
    }
}
let q = new fastSort([3, 45, 22, 4, 234, 234, 3546, 32, 1, 23432, 5235, 4, 644, 734, 233, 547, 34, 23, 5235, 2])
console.log(q.sort());