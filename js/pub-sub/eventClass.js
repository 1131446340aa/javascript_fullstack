const subpub={
    price:[
        ()=>{console.log(3)},
            ()=>{console.log(4)
        }
    ]
}
for(let fn of subpub['price'])
{
    fn()
}
function foo(){
    console.log('foo');
    
}
 var b=subpub.foo=[]
 b.push(foo)
console.log(subpub);


class Events {
    constructor() {
        this.listen = {}
    }
    on(key,fn) {
        if(!this.listen[key])
        {
            this.listen[key]=[]
        }
        this.listen[key].push(fn)

    }
    emit(key) {
        for (let fn of this.listen[key]) { fn() }
    }

}
const ev = new Events();
ev.on('price',() => {
    console.log(1);
})
ev.on('price',() => {
    console.log(2);
})
ev.emit()
