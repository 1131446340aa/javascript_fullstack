//vue3.0 响应式原理
//2.0会默认递归  2)数组改变length无效。3）对象不存在的属性不能被拦截

//响应式方法
function isobject(val) {
    return typeof val === "object" && val !== null
}
function reactive(target) {
    //  创建响应式的对象
    return createRecativeObject(target)
}
function createRecativeObject(target) {
    if (!isobject(target)) {//如果不是对象return
        return target
    }
    let baseHander = {
        //Reflect 不会报错，， 而且会有返回值。会替代掉Object上的方法
        get(target, key, receiver) {
            //如果设置没成功，如果这个对象不可被更改 writeable ：false 
            Object.getPrototypeOf(1)
            let result = Reflect.get(target, key, receiver)
            console.log('获取');
            return result
        },
        set(target, key, value, receiver) {
            console.log('设置');
            let res = Reflect.set(target, key, value, receiver)
            return res
        },
        deleteProperty(target, key) {
            let res = Reflect.deleteProperty(target, key)
            console.log('删除');
            return res;

        }
    }
    let observed = new Proxy(target, baseHander)
    return observed
}
// let proxy = reactive({ name: 'wn' })
// proxy.name = 'mg'
// proxy.age = 18
// console.log(proxy.name);66666


// delete proxy.name
// let proxy = reactive([1,2,3])
// proxy.push(4)
// console.log(proxy);
let object ={
    name:{
        n:'wn'
    }
}
let proxy=reactive(object)
proxy.name.n='zm'
console.log(proxy.name.n);
