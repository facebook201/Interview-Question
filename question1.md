

### 1) JavaScript模块开发和 AMD规范以及CommonJS规范

AMD规范) 异步模块定义。浏览器端的模块开发的规范。服务器是CommonJS

```JavaScript

define(id?, dependencies?, factory);
// id 指定定义中模块的名字，可选。如果没有提供参数。模块的名字应该默认为模块加载器请求的指定脚本名字。如果提供了该参数。模块名必须是"顶级" 和绝对的。
//依赖 dependencies：是一个当前模块依赖的 已被模块定义的模块标识的数组字面量。依赖参数是可选的，如果忽略此参数，它应该默认为["require", "exports","module"]。然而，如果工厂方法的长度属性小于3，加载器会选择以函数的长度属性指定的参数个数调用工厂方法
//工厂方法factory 模块初始化要执行的函数或对象。如果为函数 应该只被执行一次。如果是对象 此对象应该为模块的输出值。

//Zepto
(function(global, factory){
	//判断环境是否支持AMD。如果支持就使用defined生成AMD模块。
	// 也就是说factory(global)会返回一个对象。而这个对象就是Zepto入口函数对象。
	if(typeof define === 'function' && define.amd)
		define(function(){
			return factory(global);
		})
	else factory(global);
}(this,function(window){
	
}));

```
标准的AMD模块写法
```JavaScript

// foo.js
define(function(){
	return {
		foo: 'foo',
		bar: 'bar'
	}
});

//使用时如下
main.js
require(['foo'], function(foo){
	console.log(foo.foo);	//'foo'
	console.log(foo.bar);	//'bar'
});

```

###CommonJS 
CommonJS是服务器的的模块。Node.js首先采用了js模块化的概念。每一个模块都是一个单独的作用域。在该模块定义的变量。其他模块无法读取，除非是global对象的属性。

#### 输出模块最好的方法是 module.exports对象。
```JavaScript

var i = 1;
var max = 30;
module.exports = function(){
	for(var -= 1; i++ < max){
		console.log(i);
	}
	max *= 1;
};

```