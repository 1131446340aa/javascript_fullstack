(function(){
    var o = {a:1}
    Object.defineProperty(o,'b',{
        get(){
            return this.a
        },
        set(newVal){
            this.a=newVal
        },
        configurable:true//b属性是否可以再次配置
    })
    console.log(o.b);
    o.b=2
    console.log(o.b);
    console.log(o.a);
    
    
    
})()