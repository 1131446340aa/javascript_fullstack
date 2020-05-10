let notSure: any = 4//"4"
notSure = 'wn'
let value: any
value = true
value = {}
value()
new value()
//__________
let val: unknown
val = 1
val = true
// val()
// new val()

//nerver是任何类型的子类型，也可以赋值给任何类型
//然而没有类别never的子类型或赋值给never类型
function err(message: string): never {
    throw new Error(message)
}
const empty: never[] = []
//Array,2,
const list: number[] = [1, 2, 3, 4]
const list2: Array<number> = [1, 2, 3, 4]
const lias3:Array<string|number>=[1,2,3,"asdcas"]
//元组
let x: [string, number]
x = ['wn', 1]
//obj
enum Direction{
    center=1
}
let value1:object
value1=Direction
value1=[1]
value1=[1,'hello']
value1={}



