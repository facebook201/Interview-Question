// 创建原生对象
// 在String对象上sing一个repeatify函数，这个函数接收一个整数参数，
// 明确字符串需要重复几次。这个函数要求字符串重复指定的次数。


(function(){
    'use strtic';
    String.prototype.repeatify = String.prototype.repeatify
      ||  function(timer){
          var str = '';
          for(var i = 0; i < timer; i++){
            str += this;
          }
          return str;
    };
    var str1 = 'hello'.repeatify(3);  // 'hellohellohello'
})();
