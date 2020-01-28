// proxy常用方法
let obj = {
    name: "huang", age: "22",
    Growing() {
        console.log('my height will 1.88');

    }
}
let fn = function (a, b) {
    console.log(a + b);
}
let proxy = new Proxy(obj, {
    // 1:get方法
    get: function (target, key) {
        if (key in target) {
            console.log('我是obj里面的');
            return target[key]
        }
        else {
            console.log("out");
        }
    },
    // 2:set方法
    set: function (target, key, value) {
        if (key in target) {
            console.log("inner");
            target[key] = value
            return value
        }
        else {
            target[key] = value
            console.log("out");
        }
    },
    // 3:apply方法
    apply: function (target, ctx, args) {
        console.log(123, target, ctx, args);
    },
    // 4:has方法
    has: function (target, key) {
        console.log("has");
    },
    //5:delete方法
    deleteProperty (target,key){
        console.log("delete",key);    
    },
    getOwnPropertyDescriptor(target,key){
       return Object.getOwnPropertyDescriptor(target,key)
    }
})
let proxy1 = new Proxy(fn, {
    apply: function (target, ctx, args) {
        console.log(123, target, ctx, args);
    }
})
// 1:get 方法测试
proxy.name
proxy.height
// 2:set 方法测试 经过拦截后,所修改的值无效,需要在set方法里面设置
proxy.name = "lihao"
proxy.height = "1.88"
//3:apply 方法测试,
// proxy.Growing()
// proxy1.call(obj, 1, 5)
// 4:has方法测试 对for in 循环不生效
"name" in proxy
'height' in proxy
// 5:deleteProperty方法测试
delete proxy.name
// console.log(proxy);
// console.log(obj);
// 6:getOwnPropertyDescriptor方法测试
console.log(Object.getOwnPropertyDescriptor(proxy,"name"));