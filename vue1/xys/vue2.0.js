// vue 2.0 如何实现响应式原理
// 数据变化了，可以更新视图

// 重写数组方法 push shift unshift pop reverse
let oldArrayPrototype = Array.prototype
let proto = Object.create(oldArrayPrototype)

Array.from(['push', 'shift', 'unshift']).forEach(method => {
    proto[method] = function () { // 函数劫持，把函数进行重写，内部调用的还是老的方法
        updateView() // 切片编程
        oldArrayPrototype[method].call(this, ...arguments)
    }
})
function observer(target) { // 观察者
    if (typeof target !== 'object' || target == null) {
        return target
    }
    if (Array.isArray(target)) { // 拦截数组，给数组中的方法进行重写
        Object.setPrototypeOf(target, proto)
    }
    for (let key in target) {
        defineReactive(target, key, target[key])
    }
}
function defineReactive(target, key, val) {
    observer(val)
    Object.defineProperty(target, key, {
        configurable: true,
        enumerable: true,
        get() {
            return val
        },
        set(newVal) {
            if (newVal !== val) {
                val = newVal
                updateView()
            }
        }
    })
}

function updateView() {
    console.log('更新视图')
}
// 使用Object.difineProperty 重新定义对象属性，给属性增加getter,setter方法
let data = { name: 'wn', age: 18, weight: [100, 110, 120] }
observer(data)
data.weight.push(130)



