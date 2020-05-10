class Dep {
    //订阅者
    constructor() {
            //拿来存放watcher对象的数组
            this.subs = []
        }
        //在sub中添加watcher对象
    addSub(sub) {
            this.subs.push(sub)
        }
        //通知所有的watcher对象更新视图
    notify() {
        this.subs.forEach((sub) => {
            sub.update()
        })
    }
}
class Watcher {
    //观察者
    constructor() {
            //在new一个watcher对象时，将该对象赋值给Deo.target.在get中会用到
            Dep.target = this
        }
        //更新视图的方法
    update() {
        console.log(
            '视图更新了'
        );
    }
}
Dep.target = null

function defineReactive(obj, key, val) {
    //Deo类对象
    //找到是数据源中的哪一条数据发生变化
    const dep = new Dep()
    Object.defineProperty(obj, key, {
        enumerable: true, //是否可枚举
        configurable: true, //是否可配置
        get: function reactiveGetter() {
            //将Dep.target（也就说当前的watcher对象存入dep的subs中）
            dep.addSub(Dep.target)
            return val
        },
        set: function reactiveSetter(newval) {
            if (newval === val) return
                //通知所有的watcher对象更新视图
            dep.notify()
        }
    })
}

function observe(value) {
    if (!value || (typeof value !== 'object')) return
    Object.keys(value).forEach((key) => {
        defineReactive(value, key, value[key])
    })
}
class Vue {
    constructor(options) {
        this._data = options.data
        observe(this._data)
            //新建一个观察者对象
        new Watcher()
            //模拟一下render的过程，为了触发test属性的get函数
        console.log('render', this._data.test);
    }
}
//测试
let o = new Vue({
    data: {
        test: 'i am test'
    }
})
o._data.test = 'hello'