var _a;
var a = "123";
function test(person) {
    console.log(person);
    return person;
}
test('5');
function logPerson(person) {
    console.log(person.age);
    return person;
}
logPerson({ age: 4 });
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function (food) {
        console.log(food);
    };
    return Dog;
}());
var numArr = [1, 2];
var StrArr = ['1', '2'];
var tuple = ['1', 2];
var tuple1 = [['5', 6], 2];
var Sex;
(function (Sex) {
    Sex[Sex["Man"] = 7] = "Man";
    Sex[Sex["Woman"] = 8] = "Woman";
})(Sex || (Sex = {}));
console.log(Sex[7]);
function p(person) {
}
var or = '7';
var obj1;
var obj = 'aaa';
var str = obj;
var str2 = obj;
var str3 = obj;
var dog = new Dog('dog');
dog.eat('food');
var arr = [1, 2];
var one = arr[0], two = arr[1];
_a = [two, one], one = _a[0], two = _a[1];
var str1 = ['1', '2', '3'];
var _one = str1[0], res = str1.slice(1);
var person = {
    age: 17,
    Pname: "huang"
};
var age = person.age, Pname = person.Pname;
console.log(age, Pname);
