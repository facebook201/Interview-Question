严格模式下 如果你要使用全局变量那么你要引它。

(function(){
  'use strtic';
  var a = b = 5;
  // 如果 这样就不会报错
  // var a = window.b = 5;
})();
console.log(b); // b is not defined

//JavaScript
var length = 10;
function fn(){
    console.log(this.length);
}
var obj = {
    length : 5;
    method : function(fn){
        fn();
        arguments[0]();
        fn.call(obj, 12);
    }
};

obj.method(fn, 1);  // 10 2 5

// 闭包2
var func = (function(a){
  this.a = a;
  return function(a) {
    a += this.a;
    return a;
  }
})(function(a, b){
  return a;
}(1, 2));

func(4); // 5


/*
根据上面的代码。会执行下面的三行代码
* f()
* arguments[0]
* fn.call(obj, 2);
第一个很简单fn()的this 是默认绑定。window.fn();第二个arguments是类数组。其实本质上是一个对象。所以
arguments[0]是对象点出来的。所以this指向的类数组对象。而类数组对象里面有个length属性。所以是2.最后一个
是显示绑定很明显是5;
*/
//函数声明
function Foo(){
    //全局变量
    getName = function(){
        console.log("1");
    };
    return this;
}
// 为函数添加属性getName 其类型是function 所以function 也是一种object
Foo.getName = function(){
    console.log("2");
};
//为Foo添加原型方法getName
Foo.prototype.getName = function(){
    console.log("3");
};
var getName = function(){
    console.log("4");
};
function getName(){
    console.log(5);
}

Foo.getName();          //2
getName();              //4
Foo().getName();        //1
getName();              //1
new Foo.getName();      //2
new Foo().getName();    //3
new new Foo().getName();//3

/*

Foo.getName();
//函数本身Foo并没有执行。执行的是函数的属性getName();当然输出的2;
getName();
//函数声明比var的优先级还要高。所以会提升到前面。只有函数表达式会等待在执行。所有后面的
//会覆盖前面的。所以JavaScript里面没有方法重载
Foo().getName();
//从上面的() 和 . 优先级来看。Foo().getName() 从左向右执行，首先运行Foo() 全局的getName被覆盖输出。
//console.log(1); 并返回的this此时代表的是window。随后相当于执行window.getName();
getName();      //1 也是一样

new Foo.getName();  //2
//运算符的优先级别 点操作符号高于括号() 所以是 new (Foo.getName)()
new Foo().getName();
// (new Foo()).getName();
new new Foo().getName();
*/
