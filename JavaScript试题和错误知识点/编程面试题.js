
// 实现一个函数 sum(2, 3) 和 sum(2)(3) 正常工作

function sum(){
  var sum1 = arguments[0];
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(sum2){
      return sum1 + sum2;
    }
  }
}
