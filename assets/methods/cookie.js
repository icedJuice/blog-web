const cookies = {
  add: function (arg1, arg2) {
    // param = {key1,value1, key2, value2.....}
    var str = '';
    if(arguments.length === 1 && typeof(arguments[0]) === 'object') {
      // 传入的是对象方式
      for (var item in arg1) {
        str += (item + '=' + arg1[item] + ';' )
      }
    } else if (arguments.length === 2) {
      // 传入是建名、键值 方式
      str = arg1 + '=' + arg2
    }
  },
  delete: function () {

  },
  get: function () {

  }
}
