// main(List<String> args) {}

// abstract class Person {
//   void eat();
// }//不能被实例化，可以定义抽象方法,多态的实现
// class Dog{

// }
main(List<String> args) {
  circle c=circle(10);
  Rean r=Rean(20,50);
  AREA(c);
  AREA(r);
}
abstract class shape{
  getarea();
}
class circle extends shape{
  double r;
  circle(this.r);
  double getarea(){
    return 3.14*r*r;
  }
}
class Rean extends shape{
  double weight;
  double height;
  Rean(this.weight,this.height);
  double getarea(){
    return weight*height;
  }
}
void AREA(shape s){
    print(s.getarea());
}
