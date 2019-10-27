// class Father{
//     constructor(){}
//     money(){
//         console.log(100)
//     }
// }
// class Son extends Father{}
// var son=new Son()
// son.money()
// class Father{
//     constructor(x,y){
//         this.x=x
//         this.y=y
//     }
//     add()
//     {
//         console.log(this.x+this.y)
//     }
// }
// class  Son extends Father{
//     constructor(x,y){
//         super(x,y)
//     }
// }
// var son =new Son(2,3)
// son.add()
class Father{
    constructor(){}
    money(a){
        console.log(a)
    }
}
class Son extends Father{
    money(){
        console.log()
        super.money(5)
    }
}
var son=new Son()
son.money()