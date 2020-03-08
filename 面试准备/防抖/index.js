function debounce(fn, wait) {
    let timer
    return function (...args) {

        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn.apply(this, args)
        }, wait)
    }
}
function fn1(x,y) {
    console.log(x,y);

}
let run = debounce(fn1, 400)
run(3,4)
