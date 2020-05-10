const debounce = (fn, delay) => {

    return(...args)=>{
        if(timer){
            clearTimeout(timer)
        }
        let timer = setTimeout(() => {
            fn.apply(this,...args)
        }, delay)
    }
}