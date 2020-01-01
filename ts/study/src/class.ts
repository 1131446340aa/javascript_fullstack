// class Person {
//     //   public  name:string;
//     protected name: string;
//     // private name: string;
//     constructor(name: string) {
//         this.name = name
//     }
//     run(): void {
//         console.log(this.name);

//     }
// }
// var p = new Person('aaa')
// p.run()
// class Web extends Person {
//     constructor(name: string) {
//         super(name)
//     }
//     work(): void {
//         console.log('bbbb');

//     }
//     run(): void {
//         console.log(this.name);

//     }
// }
// var w = new Web('aaaaaa')
// w.run()
// w.work()
// // p.name
// class Person {
//     //   public  name:string;
//     protected name: string;
//    static age: number = 20
//     // private name: string;
//     constructor(name: string) {
//         this.name = name
//     }
//     run(): void {
//         console.log(this.name);

//     }
//     work(): void {
//         console.log(this.name + 'sdfsd');

//     }
//     static print(age:number): void {
//         console.log(age);

//     }
// }
// var p = new Person('aaa')
// p.work()
// p.run()
// Person.print(Person.age)
//多态也是继承的一种表现
// class Animail {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     eat() {
//         console.log('eating');

//     }
// }
// class Dog extends Animail {
//     constructor(name: string) {
//         super(name)
//     }
//     eat():string { 
//         return this.name+'吃'
//     }
// }
// class Cat extends Animail {
//     constructor(name: string) {
//         super(name)
//     }
//     eat():string { 
//         return this.name+'吃鱼'
//     }
// }
//abstract 要求子类包含父类方法
// abstract class Animail{
//     abstract eat():any;
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }
// class Dog extends Animail {
//     constructor(name: string) {
//         super(name)
//     }
//     eat():string { 
//         return this.name+'吃'
//     }
// }
// var d=new Dog('dog')
// console.log(d.eat());
//接口:定义规范
// function label(lab:{
//     label:string
// }): void {
//     console.log('aaaa');

// }
// label({label:'zangsan'})
// interface fullname{
//     firstname:string
//     lastname:string
// }
//  function print(name:fullname):void{
//      console.log(name.firstname+name.lastname);

//  }
//  function info(info:fullname):void{
//     console.log(info.firstname+info.lastname);

// }
//  let obj={
//     firstname:"zhang",
//     lastname:'san'
//     // age:20
//  }
//  print(obj)
//  info(obj)
// label({label:'zangsan'})
// interface fullname {
//     firstname: string
//     lastname?: string
// }
// function print(name: fullname): void {
//     console.log(name.firstname + name.lastname);

// }
// function info(info: fullname): void {
//     console.log(info.firstname + info.lastname);

// }
// let obj = {
//     firstname: "zhang"
//     // lastname: 'san'
//     // age:20
// }
// print(obj)
// info(obj)
// interface encrypt{
//     (key:string,val:string):string;
// }
// var md5:encrypt=function(key:string,val:string):string{
//     return key+val
// }
// console.log(md5('name','zhangsan'));
//数组对象约束
// interface usarr{
//     [index:number]:string
// }
// var number:number[]=[1,2,3,3]
// var arr:usarr=['1','2']
// interface Animail {
//     name: string 
//     eat(str: string): void
// }

// class Dog implements Animail {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     } vvcvfffffv
//     eat() {
//         console.log('aasadas');
//     }
// }
// interface Animail {
//     eat(): void
// }
// interface Person extends Animail {
//     work(): void
// }
// class Web implements Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name
//     }
//     eat() { console.log('aasadas'); }
//     work() {
//         console.log('wefvwr');
//     }

// }