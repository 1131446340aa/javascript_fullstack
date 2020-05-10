function Father() {
    console.log(this.name +""+2); 
    this.age = 22
    this.name = "huang"  

    console.log( this.name +""+3);

}

function Son() {
    console.log(this.name+""+1);   
    Father.call(this)
    this.height = 188
    Son.prototype.run = function () {
        console.log(this.name+""+""+4);
    }
}
Son.prototype = Object.create(Father)//Son.prototype=Object.create(Father.prototype)
Son.prototype.constructor = Son
let son = new Son()
son.run()
//this 全部是Son Son.name本身是undefined,但是Son的父级是Father()(函数),函数有一个name属性,另外函数名不可被修改,所以所有name都是Father







