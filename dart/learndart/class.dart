// main(List<String> args) {
//   final p=person();
//   p.name='123';
//   p.eat();
// }
// class person{
//     String name;
//     int age;
//     void eat(){
//       print("${name}在吃");
//     }
//   }
// main(List<String> args) {
//   final p=person('123',5);

//   p.eat();
// }
// class person{
//     String name;
//     int age;
//     person(String name,int age){
//       this.name=name;
//       this.age=age;
//     }
//     void eat(){
//       print("${name}在吃");
//     }
//   }
main(List<String> args) {
  final p = person('123', 5);
  Map<String, dynamic> info = {"name": 123, "age": 15};
  p.eat();
  final R = Rectang(30, 50);
  print(R);
}

class person {
  String name;
  int age;
  // person(String name, int age) {
  //   this.name = name;
  //   this.age = age;
  // }
  person(this.name, this.age);
  void eat() {
    print("${name}在吃");
  }
}

class Rectang {
  int area;
  int weight;
  int heiht;
  Rectang(this.weight, this.heiht) : area = weight * heiht;
  @override
  String toString() {
    return "wight:$weight height:$heiht area:$area";
  }
}
