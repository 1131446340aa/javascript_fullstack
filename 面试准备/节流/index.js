function throlle(fn, wait) {
    let time = 0
    return function (...args) {
        let curTimer = Date.now()
console.log(curTimer - time);

        if (curTimer - time >= wait) {
            fn.apply(this, args)
            time =  Date.now()
        }
    }
}
let run = throlle(() => {
    console.log(555);
}, 300)
setTimeout(() => { run() }, 500)
setTimeout(() => { run() }, 600)
setTimeout(() => { run() }, 700)
setTimeout(() => { run() }, 850)