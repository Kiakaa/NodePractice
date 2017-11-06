function say(word) {
    console.log(word);
  }
  
  function execute(someFunction, value) {
    someFunction(value);
  }
  
  execute(say, "Hello");
//以下与以上等价
//匿名方法
  function execute2(someFunction, value) {
    someFunction(value);
  }
  
  execute2(function(word){ console.log(word) }, "Hello2");