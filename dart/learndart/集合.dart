main(List<String> args) {
  //list
  List<String> names = ['why', 'lisi'];
  names.add('213');
  names.removeAt(1);
  print(names);
  
//set
  Set<int> nums = {11, 222, 33355, 4564, 11};
  nums.add(1);
  print(nums);
//map
  Map<String, dynamic> info = {"age": 18, "name": '32134'};
  info['size']="33";
  print(info['age']);
  print(info);
  print(info.keys);
  
  print(info.values);
}
