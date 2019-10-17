function create(obj)
//返回一个实例对象
//对象她的原型是obj
{
    function F(){
        F.prototype=obj;
    }
    return new F();
}
var Person={
    name:"noname",
    age:0,
    greet:function(){
        console.log(`Hello,${this.name}`)
    }

}

var tom =create(Person)
tom.name='tom';
tom.greet();