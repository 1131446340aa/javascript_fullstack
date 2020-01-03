main(List<String> args) {
  final p= Person('213',45);
  print(p);

}

class Animal {
  int age;
  Animal(this.age);
  eat() {
    print('吃东西');
  }
}

class Person extends Animal {
  String name;
  Person(this.name,int age):super(age);
  void eat(){
    print("$name在吃东西");
  }
    @override
  String toString() {
    return "name:$name age:$age ";
  }
}

