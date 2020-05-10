// function log1(parma:any){
//     // console.log(parma);
//     parma.prototype.apiurl='xxxx'
//     parma.prototype.run=function(){
//         console.log(123);

//     }

// }
// function log1(parma: string) {
//     // console.log(parma);
//     return function (target: any) { 
//         console.log(target); 
//         console.log(parma);

//     }


// }
// @log1('hello')
// class http {
//     constructor() {
//     }
//     getdata() { }
// }
// var xx: any = new http()
// function log1(param:any){
//     return function(target:any,methodname:any,desc:any){
//         console.log(target,methodname,desc);

//     }
// }
// class http{
//     public url:any|undefined
//     constructor(){}
//     @log1('http5rroo')
//     getdata(){
//         console.log(this.url);

//     }
// }
// function log1(parma: any) {
//     // console.log(parma);
//   return class extends parma{
//       url:any="aaa"
//       setdata(){
//         console.log(this.url);
//       }
//   }

//     }
//     @log1
//     class http {
//         public url: string | undefined
//         constructor() {
//             this.url = "dasdfas"
//         }
//         setdata() {
//             console.log(this.url);

//         }
//     }
// var http1 = new http()
// http1.setdata()
// function log1(parma: any) {
//     // console.log(parma);
//   return function(target:any){
//       target.prototype.api=parma
//   }


//     }
function log2(parma: any) {
    return function (target: any, attr: any) {
        //    console.log(target);
        //    console.log(attr);
        target[attr] = parma

    }
}
// @log1('www')
class http {
    @log2('http')
    public url: any | undefined
    constructor() {
        // this.url = "dasdfas"
    }
    setdata() {
        console.log(this.url);
    }
}
var http1 = new http()
http1.setdata()




