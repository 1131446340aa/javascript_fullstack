class Event {
    constructor() {
        this.listener = {}

    }
    listen(type, fn) {
        if (!this.listener[type]) {
            this.listener[type] = []
        }
        if (typeof fn=== 'function'){
            this.listener[type].push(fn)
        }
    }
    target(type,...args) { 
this.listener[type].forEach(item =>{
    item.apply(this,args)
} )
    }
}
let event =new  Event()
event.listen('big', (size, money) => {//添加big类型
    console.log(`小明,你买的大房子价格${money},面积为${size}平方米`);
})
event.listen('big', (size, money) => {//big类型的第二个用户
    console.log(`小光,你买的大房子价格${money},面积为${size}平方米`);

})
event.listen('small', (size, money) => {//添加small类型
    console.log(`小红,你买的小房子价格${money},面积为${size}平方米`);
})
event.target('big', 125, 2000000)//调用所有big类型的函数
event.target('small', 90, 900000)//调用所有small类型的函数