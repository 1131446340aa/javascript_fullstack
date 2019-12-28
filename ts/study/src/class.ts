class Person {
    //   public  name:string;
    protected name: string;
    // private name: string;
    constructor(name: string) {
        this.name = name
    }
    run(): void {
        console.log(this.name);

    }
}
var p = new Person('aaa')
p.run()
class Web extends Person {
    constructor(name: string) {
        super(name)
    }
    work(): void {
        console.log('bbbb');

    }
    run(): void {
        console.log(this.name);

    }
}
var w = new Web('aaaaaa')
w.run()
w.work()
// p.name

