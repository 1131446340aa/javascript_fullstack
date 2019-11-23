export function debounce(func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
export function findIndex(list, song) {
  return list.findIndex(() => {
    return item.id === song.id
  })
}