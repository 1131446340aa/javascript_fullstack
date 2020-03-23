function* test() {
    console.log(1);
    yield 2
    yield 3
    console.log(4);
    return 5
}
let b = test()
for (item of b){
    item
}




