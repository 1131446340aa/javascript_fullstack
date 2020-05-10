export function debounce(fn){
    if(timer){
        clearTimeout(timer)
    }
    let timer=setTimeout(fn.call(this),300)
}