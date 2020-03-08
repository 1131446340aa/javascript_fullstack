let event = {
    clientList: {},
    listen (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)   // 订阅的消息添加进缓存列表
    },
    trigger (type, money) {
        let fns = this.clientList[type]
        if (!fns || fns.length === 0) { // 如果没有绑定对应的消息
            return false
        }
        fns.forEach(fn => {
            fn.apply(this, [money])
        })
    }
}

// 再定义一个installEvent函数，用于给所有对象动态安装发布-订阅功能
// 如：另一家售楼处也想要这个功能，就可以调用这个注册了，不同再写多一次这段代码
let installEvent = obj => {
    for (let i in event) {
        obj[i] = event[i]   
    }
}
// 给售楼处对象salesOffices动态增加发布-订阅功能
let salesOffices = {}
installEvent(salesOffices)
// 小明订阅信息
salesOffices.listen('squareMeter88', price => {
    console.log('小明，你看中的88平方的房子，价格=' + price)
})
// 小光订阅信息
salesOffices.listen('squareMeter88', price => {
    console.log('小光，你看中的88平方的房子，价格=' + price)
})
// 小红订阅信息
salesOffices.listen('squareMeter100', price => {
    console.log('小红，你看中的100平方的房子，价格=' + price)
})
salesOffices.trigger('squareMeter88', 2000000)
salesOffices.trigger('squareMeter100', 2500000)