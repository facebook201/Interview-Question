#### 1 实现lazyMan

```javascript
实现一个LazyMan，可以按照以下方式调用：
LazyMan(“Hank”)
输出：Hi! This is Hank!
LazyMan(“Hank”).sleep(10).eat(“dinner”)
输出: Hi! This is Hank!
等待10秒..
Wake up after 10
Eat dinner~
LazyMan(“Hank”).eat(“dinner”).eat(“supper”)
输出：Hi This is Hank!
Eat dinner~
Eat supper~
LazyMan(“Hank”).sleepFirst(5).eat(“supper”)
输出：等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
```

个人分析：

首先lazyMan是构造函数。支持链式调用, 挂载在原型上面的方法最后会返回自身。

所有的方法





#### 为了安全 进行字符转义

```javascript
var string = 'I & you < U > "" syo';

String.prototype.escapeHtml = function() {
  return this.replace(/&/g, '&amp').replace(/</g, '&lt').replace(/>/g, '&gt').replace(/""/g, '&quto');
}
console.log(string.escapeHtml());
```



#### 随机生成一个 10 到 100 的数组

```javascript
function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  }
}

function returnArr(cb) {
  var resultArr = [];
  for (var i = 0; i < 10; i++) {
    resultArr.push(Math.ceil(Math.random() * 10) * 10);
  }
  return resultArr;
}

console.log(returnArr().sort(compare));
```



#### 写一个函数可以复制  数字 字符串 布尔值 数组 对象 

```javascript
var a = {name: 'lisi', age: 44, func: function(){return 1;}};
var b = [1, 2, 3];
var c = '11';

function clone(obj) {
  var cloneObj;
  // 基本类型和 对象类型分开
  if (typeof obj !== 'object') {
    cloneObj = obj;
  } else {
    // 根据对象的构造函数指向构造函数本身来判断它是数组还是对象 进行初始化赋值
    cloneObj = obj.constructor === Array ? [] : {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 判断深层是否是对象 进行深度复制
        cloneObj[key] = typeof obj[key] === 'object' ? obj[key].clone() : obj[key];
      }
    }
  }
  return cloneObj;
}

console.log(clone(obj));
```



#### 闭包处理JS异步代码

```javascript
for(var i = 0; i < 5; i++) {
  (function(j){
    setTimeout(function(){
      console.log(new Date, j);    
    }, 1000);  
  }(i));    
}

// 第二种 用参数传值的特征 把每次循环的i当成基本类型的值 传给执行的函数参数
var output = function(arg){
  setTimeout(function(){
    console.log(new Date, i);    
  }, 1000);
}

for (var i = 0; i < 5; i++) {
  output(i); // 这里把值传过去    
}
```



#### 数组扁平化 去重

```javascript
/**
 * 数组平铺内容 [1, [2, 3, [4, 5, 6]], [7, 8]] // 合并成一个数组
 */
var flattern1 = (array) => {
  return array.reduce((result, val) => {
    // 判断值是不数组 如果是 再次合并
    var arr = result.concat(Array.isArray(val) ? falatt  : val);
    // 去重
    return [...new Set(arr)];
  }, []);
}

```

