class sql {
    constructor(ele, array) {
        this.ele = ele
        this.array = array
     
        this.index = -1
    }
    search(start, end) {
        let middle = Math.floor(start, end)    
        if (this.ele > this.array[middle]) {
            this.search(middle + 1, end)
        }
        if (this.ele < this.array[middle]) {
            this.search(start, middle - 1)
        }
        if (this.ele == this.array[middle]) {
            this.index = middle
        }
    }
    serachs(){
        this.search(0, this.array.length)
        return this.index
    }
}
let s = new sql(810, [3, 4, 5, 6, 7, 8])
console.log(s.serachs());



