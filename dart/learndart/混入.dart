main(List<String> args) {
  final p=person();
  p.swimmer();
}

mixin Runner {
  run() {
    print('run');
  }
}

mixin Swimmer {
  swimmer() {
    print('swimmer');
  }
}

class person with Runner, Swimmer {}
