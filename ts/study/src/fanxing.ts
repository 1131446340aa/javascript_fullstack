// function getData(value:string):string{
//     return value
// }
// function getData<T>(value:T):T{
//     return value
// }
// getData<number>(1)
// getData<string>('1')
// class minclass {
//     list: number[] = []
//     // constructor(num:number){
//     //     this.list=list
//     // }
//     add(num: number) {
//         this.list.push(num)
//     }
//     min():number {
//         var minnum = this.list[0]
//         for (let item of this.list) {
//             if (item > minnum) {
//                 minnum = item
//             }
//         }
//         return minnum
//     }
// }
// var m=new minclass()
// m.add(2)
// m.add(4)
// m.add(0)
// console.log(m.min());
// class minclass<T> {
//     list: T[] = []
//     // constructor(num:number){
//     //     this.list=list
//     // }
//     add(num: T) {
//         this.list.push(num)
//     }
//     min():T {
//         var minnum = this.list[0]
//         for (let item of this.list) {
//             if (item < minnum) {
//                 minnum = item
//             }
//         }
//         return minnum
//     }
// }
// var m=new minclass<number>()
// m.add(2)
// m.add(4)
// m.add(0)
// console.log(m.min());
// var m2=new minclass<string>()
// m2.add('a')
// m2.add('b')
// m2.add('c')
// console.log(m2.min());
// interface confi{
//     (value:string,value1:string):string
// }
// var setdata:confi=function(value:string,value1:string){
//     return value+value1
// }
// interface confi{
//     <T>(value:T,value1:T):T
// }
// var setdata:confi=function <T>(value:T,value1:T):T{
//     return value
// }
// console.log(setdata<string>('123','dasdas'));

// class User {
//     username: string | undefined
//     password: string | undefined
//     constructor(){}

// }
// class mudb <T>{
//     add(user: T): boolean {
//         console.log(user);

//         return true
//     }
// }
// let users= new User()
// users.password='123456'
// users.username="lisi"
// var db=new mudb<User>()
// db.add(users)
interface dbi<T> {
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}
class mysql<T> implements dbi<T>{
    add(info: T): boolean {
       
        console.log(info);
        return true
    }
    update(info: T, id: number): boolean {
      return true
    }
    delete(id: number): boolean {
        return true
    }
    get(id: number): any[] {
        return []
    }
}
class USER {
    username: string | undefined
    password: string | undefined
}
var u=new USER()
u.username="lisi"
u.password='123456'
var omysql=new mysql<USER>()
omysql.add(u)

