let event = {//
    listener: {},//监听各种事件,如本例中的big和small
    listen(type, fn) {
        if (!this.listener[type]) {//如果监听的类型不存在,则添加
            this.listener[type] = []
        }
        this.listener[type].push(fn)
        //某种类型可能有很多个
    },
    target(type,...parma) {
        if (!this.listener[type]||this.listener[type].length===0) {
            return false//如果listener没有这种事件或者这种事件下面的函数为0个
        }
        this.listener[type].forEach(fn=>{//遍历数组执行函数
            fn.apply(this,parma)//绑定this
        })
    }
}
event.listen('big',(size,money)=>{//添加big类型
    console.log(`小明,你买的大房子价格${money},面积为${size}平方米`);  
})
event.listen('big',(size,money)=>{//big类型的第二个用户
    console.log(`小光,你买的大房子价格${money},面积为${size}平方米`);
    
})
event.listen('small',(size,money)=>{//添加small类型
    console.log(`小红,你买的小房子价格${money},面积为${size}平方米`);    
})
event.target('big',125,2000000)//调用所有big类型的函数
event.target('small',90,900000)//调用所有small类型的函数