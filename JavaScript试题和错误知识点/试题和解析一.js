1 object.keys() 和 Array.prototype.filter()
==============================================

var obj = {a: 1, b: 2, c: 3, d: 4};

Object.keys(obj).filter(function(x){
	return obj[x] > 2;
});

Object.keys()方法会返回一个由给定对象的所有可枚举自身属性的属性名组成的数组。
数组中属性名的排列顺序和使用for...in循环遍历该对象时返回的顺序一致。
它返回一个所有元素为  <字符串>的数组。例如:


var arr = ["a", "b", "c"];
因为数组有个length属性。所以arr.length = 3;
0: "a",
1: "b",
2: "c"
所以arr[0] = "a";Object.keys(arr);返回的是一个有属性名组成的元素为字符串的数组。
返回的就是 ["0", "1", "2"];

var obj = {0: "a", 1: "b", 2: "c"};
Object.keys(obj);	// ["0", "1", "2"]

var obj = {100: "a", 2: "b", 3: "c"};
Object.keys(obj);	// ["2", "3", "100"]  随机键排序的数组类对象


第二步就是filter 使用测试测试所有的元素 返回一个通过测试元素的数组
["a", "b", "c", "d"].filter(function(x){
	return obj[x] > 2;
});

也就是一个个元素输入进行比较
obj["a"] > 2;是否大于2？而obj["a"] 等于0 所以无法返回 "a";
下面的就以此类推。
最后就是返回 ["c", "d"];


2> 运算符的优先级 以及变量怎么存贮
http://blog.csdn.net/jackshiny/article/details/51941796
==================================================

var a = {n: 1};		
var b = a;
a.x = a = {n: 2};
console.log(a.x);		
console.log(b.x);
=====================
Ans: 首先我们要知道 45 46 两行代码表示 a 和 b指向的是同一个对象。
其次 . 操作符优先级高于赋值操作符。




