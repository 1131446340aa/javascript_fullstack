class Grid {
  constructor(size) {
    // new 
    this.size = size
    this.grid = this.init()
  }
  init() {
    let grid = []
    for (let i = 0; i < this.size; i++) {
      grid[i] = []
      for (let j = 0; j < this.size; j++) {
        grid[i].push('')
      }
    }
    return grid
  }
  // 把 空格子 挑出来
  useFulCell() {
    let cells = []
    for (let i = 0; i < this.size; i ++) {
      for(let j = 0; j < this.size; j ++) {
        if (this.grid[i][j] == '') {
          cells.push({
            i,
            j
          })
        }
      }
    }
    return cells
  }
  // 从一堆空格子中随机拿一个
  selectCell() {
    let unUsed = this.useFulCell() // 3
    let index = Math.floor(Math.random() * unUsed.length)
    return unUsed[index];
  }
}
module.exports = Grid