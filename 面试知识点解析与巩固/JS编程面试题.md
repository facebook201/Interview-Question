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