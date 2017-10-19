
function Foo() {
  getName = function() {
    console.log('1');
  }
  return this;
}

Foo.getName = function() {console.log('2');}

Foo.prototype.getName = function() {console.log('3');}

var getName = function() {console.log('4');}

function getName() {console.log('5');}

/***************************************************************/

Foo.getName(); // 2
getName(); // 4
Foo().getName(); // 1
getName(); //
new Foo.getName(); //
new Foo().getName(); //

/****/

首先声明了一个构造函数Foo。
Foo虽然是函数 但是也是一个对象 对象上面挂载了一个静态的getName方法
在Foo构造函数的原型上 挂载了一个getName方法
写了个getName的函数表达式
声明了一个getName的函数


抛开值类型不是对象。 函数本身也是一个对象。
