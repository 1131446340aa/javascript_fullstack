const delay = (data, tick) => new Promise(reslove => {
    setTimeout(() => {
        reslove(data)
    }, tick);
})
module.exports = {
    getName() {
        return delay('jerry', 1000)
    },
    getAge(){
        return 20
    }
}