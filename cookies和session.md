#### Cookies

Cookies 是实际存在的东西。有name 有 value。 定义在header字段中。



第一次访问网站的时候。浏览器发出请求服务器 响应请求后，会将cookie 放到响应请求中。在浏览器第二次发出请求的时候会把cookie带过去。 服务端会辨别用户身份。 当然服务器端也可以修改cookies。

* cookies 的不可跨越性 就是不能再不同域名下 每个cookie 都会绑定单一的域名

* 属性比较多 name  value domain（cookie 绑定的域名） path 路径 默认 '/' 

   

##### js操作cookie

```javascript
// 读取cookie
document.cookie;

// 写入cookie 
document.cookie="name=lisi;path=/;"
```



#### Session 

session 是一个抽象的概念。 是为了解决cookie的限制。一种更高级的会话状态实现。

session 是服务端用来记录用户状态。 通过某种机制来识别具体的用户。这个就是session。 就比如购物车，当你下单的时候。 由于HTTP协议无状态。所以服务端要给特定的用户创建特定的session。用于标识这个用于 跟踪用户。 session保存在服务端。 有个唯一标识。







