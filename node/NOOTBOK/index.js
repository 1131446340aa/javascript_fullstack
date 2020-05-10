let o = {}
Object.defineProperty(o, 'a', {
    get: function () {
        console.log(111);
        
        return a=7
     },
    set: function () {
        console.log(222);
        
        a=8 
    console.log(a);
    }
})
o.a=4
console.log( o.a);
console.log(o);

