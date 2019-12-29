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
main(List<String> args) {
  final p=person('123',5);

  p.eat();
}
class person{
    String name;
    int age;
    person(String name,int age){
      this.name=name;
      this.age=age;
    }
    void eat(){
      print("${name}在吃");
    }
  }

