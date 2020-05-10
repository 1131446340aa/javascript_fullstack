main(List<String> args) {
  test(foo);
}
void foo(){
  print('safsd');
}
void test(Function func){
  func();
}