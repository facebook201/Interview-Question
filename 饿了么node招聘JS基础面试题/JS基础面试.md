#### 类型判断

类型判断其实是一个比较折磨人的话题。如果要考虑到兼容性等问题 确实比较麻烦。 比如兼容ES5以上的环境。Array.isArray 是一个比较好的支持原生方法。 但是如果要考虑到比较多的情况 可以是用万金油的方法

```javascript
function isType(type) {
  return function(obj) {
    return Object.proptotype.toString.call(obj) === '[object ' + type + ']'; 
  }
}
```



#### 引用传递

> js中什么类型是引用传递 什么是值类型传递 如何将值类型变量以引用的方式传递

 对于数字、字符串等 是将他们的值传递给了函数参数，函数参数的改变不会影响函数外部的变量。

对于数组和对象等是将**对象的变量的值传递给了函数参数**，这个变量**保存的指向对象的地址**。当函数改变**这个地址指向的对象的内容时**, 同时会改变函数外部变量指向的对象的内容；当函数改变的是**变量的地址**时 就跟外部函数失去了联系 就不会对函数外部对象造成改变。

```javascript
function addNum(num) {
  num += 10;
  return num;
}
var count = 20;
addNum(count); // 30
count; // 20 这里还是20 


  var b = {name: 'syo'};
  function getObj(obj) {
    obj = {age: 1}; // 直接改变变量的值
  }
  getObj(b);
  console.log(b); // obj = {name: 'syo'}


  var b = {name: 'syo'};
  function getObj(obj) {
    obj.name = 'lisi'; // 这里改变的是变量指向的对象的内容
  }
  getObj(b);
  console.log(b); // obj = {name: 'lisi'}
```





### 2 NetWork

首先我们来看看什么是RESTful架构 Representational State Transfer

* 资源（Resources）

  **所谓"资源"，就是网络上的一个实体，或者说是网络上的一个具体信息。**它可以是一段文本、一张图片、一首歌曲、一种服务，总之就是一个具体的实在。你可以用一个URI（统一资源定位符）指向它，每种资源对应一个特定的URI。要获取这个资源，访问它的URI就可以，因此URI就成了每一个资源的地址或独一无二的识别符

* Representation表现层

  "资源"是一种信息实体，它可以有多种外在表现形式。**我们把"资源"具体呈现出来的形式，叫做它的"表现层"（Representation）。**

* 状态转化（State Transfer）

  访问一个网站，就代表了客户端和服务器的一个互动过程。在这个过程中，势必涉及到数据和状态的变化。

  互联网通信协议HTTP协议，是一个无状态协议。这意味着，所有的状态都保存在服务器端。**如果客户端想要操作服务器，必须通过某种手段，让服务器端发生"状态转化"（State Transfer）。而这种转化是建立在表现层之上的，所以就是"表现层状态转化"。** 客户端用到的手段，只能是HTTP协议。具体来说，就是HTTP协议里面，四个表示操作方式的动词：GET、POST、PUT、DELETE。它们分别对应四种基本操作：**GET用来获取资源，POST用来新建资源（也可以用于更新资源），PUT用来更新资源，DELETE用来删除资源。**

* （1）每一个URI代表一种资源；

  （2）客户端和服务器之间，传递这种资源的某种表现层；

  （3）客户端通过四个HTTP动词，对服务器端资源进行操作，实现"表现层状态转化"。

这是 覃超的回答 关于RESTful

* REST 描述的是在网络中client 和 server 的一种交互形式；REST本身不实用 实用的是 如何设计REST API

* Server 提供的RESTful API中。 URL 中只使用名词来指定资源， 原则上不使用动词。资源是REST架构或者整个网络处理的核心。

* 用HTTP协议里的动词来实现资源的添加、修改、删除、等操作。 通过HTTP动词来实现资源的状态扭转

  GET 用来获取资源， (获取用户的信息)
  POST 用来新建资源（也可以用于更新资源）(新增客户的信息)
  PUT 用来更新资源，(更新客户的信息)
  DELETE 用来删除资源。(删除客户的信息)

* ​

> GET 和 POST的区别

这两个东西最根本的差别是语义, 引申了看, 协议 (protocol) 这种东西就是人与人之间协商的约定, 什么行为是什么作用都是"约定"好的, 而不是强制使用的。

> cookie 与 session 的区别? 服务端如何清除 cookie?

 session 存在服务端, cookie 存在客户端. session 比 cookie 更安全. 而且 cookie 不一定一直能用 (可能被浏览器关掉). 服务端可以通过设置 cookie 的值为空并设置一个及时的 expires 来清除存在客户端上的 cookie.



















