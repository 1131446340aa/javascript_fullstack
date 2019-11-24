
function debounce (func, wait) {
  return function (...args) {
    let timer
    if (timer) {
      clearTimeout(timer)
    }
    setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
export {debounce}
