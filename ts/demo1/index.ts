let a: String = "123"
function test(person: String): String {
    console.log(person);
    return person
}
test('5')

interface Person {
    age: Number
}




function logPerson(person: Person): Person {
    console.log(person.age);

    return person
}
logPerson({ age: 4 })

class Dog {
    name: String
    constructor(name: String) {
        this.name = name
    }
    public eat(food: String) {
        console.log(food);
    }
}
let numArr: Number[] = [1, 2]
let StrArr: Array<String> = ['1', '2']

let tuple: [String, Number] = ['1', 2]

let tuple1: [[String, Number], Number] = [['5', 6], 2]

enum Sex {
    Man = 7,
    Woman
}

console.log(Sex[7]);

function p(person: String): void {

}
let or: string | number = '7'

let obj1: object
let obj: any = 'aaa'
let str: String = obj

let str2: string = (<string>obj)
let str3: string = (obj as string)
let dog = new Dog('dog')
dog.eat('food')

let arr: Number[] = [1, 2]
let [one, two] = arr;

[one, two] = [two, one];

let str1: Array<String> = ['1', '2', '3']

let [_one, ...res] = str1

interface Person1 {
    age: Number,
    Pname: string
}

let person: Person1 = {
    age: 17,
    Pname: "huang"
}
let { age, Pname } = person

console.log(age, Pname);


interface Person2 {
    pname: string,
    page: number,
    pwork: string
}

let per: Person2 = {
    pname: 'lihao',
    page: 12,
    pwork: "123"
}

function priPerson(per: Person2) {
    console.log(per.page);
}
priPerson(per)

interface circle {
    color?: string,
    area: number
}

interface config {
    color: string
    radious: number,
    // [propName: string]: any
}

function createCircle(con: config): circle {
    return {
        area: 5
    }
}

interface Fullname {
    readonly firstName: string,
    readonly lastName: string
}

let p1: Fullname = {
    firstName: "a",
    lastName: "b"
}

let arr1: ReadonlyArray<number> = [1, 2]

createCircle({ color: 'a', radious: 4 })

interface func {
    (first: Number, last: Number): Boolean
}

let inter: func = function (a, b) {
    return a > b
}
inter(10, 20)

interface StrArr {
    [index: number]: string
}
let strArr: StrArr = ['a', 'b']

strArr[0]

interface ClockInterface {
    current: Date
    setTime(d: Date)

}

class Clock implements ClockInterface {
    current: Date
    constructor(h: number, m: number) {
    }
    setTime(d: Date) {
    }
}

interface Animail {
    breed: string
}

interface Mammal {
    leg: number
}

interface Cat extends Animail, Mammal {
    color: string
}
let cat: Cat = {
    breed: "blue",
    color: "red",
    leg: 4
}
