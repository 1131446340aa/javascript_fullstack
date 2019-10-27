class Father{
    constructor(x,y){
        this.x=x
        this.y=y
      
        
    } 
     add(){
        console.log(this.x+this.y)
    }
}
class Son extends Father{
    constructor(x,y){
        super(x,y)
        this.x=x
        this.y=y
    } 
   sub(){
    
       console.log(this.x-this.y)
   }
} 
var son=new Son(5,3)
son.add()
son.sub()