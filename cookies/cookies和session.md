#### Cookie 

最初是在客户端用于存储会话信息。 HTTP响应设置以name为名称、以value为值的一个cookie。名称和值在传送时都必须是URL编码。 浏览器存储这样的会话信息。 并在这之后 通过每个请求添加Cookie HTTP头将信息发送回服务器。

> GET /index.html HTTP/1.1
>
> Cookie: name=value
>
> Other-header: other-header-value



#### cookie的构成

* **名称**   一个唯一确定cookie的名称。名称不区分大小写的。 所以myCookie和MyCookie是同一个cookie。 然而 实践中最好将cookie名称看作是区分大小写的。因为某些服务器会这样处理cookie。 名称必须是经过URL编码的。

  ```javascript
  // 编码函数 encodeURIComponent 对URL的组成部分编码 不对整个URL编码 所以 “ ; / ? : @ $ = + # ”等等符号都会在 encodeURIComponent里面进行编码

  encodeURIComponent('syolmm@qq.com'); // syolmm%40qq.com
  decodeURIComponent('syolmm%40qq.com'); // syolmm@qq.com
  ```

  ​

* **值** ： 存储在cookie中的字符串值。必须被URL编码

  ​

* **域** ： cookie 对于哪个域是有效的。 cookie无法跨域

  ​

* 路径 指定域中的路径。应该向服务器发送cookie。

  ​

* **失效时间** ： 表示cookie何时应该被删除的时间戳（也就是何时应该停止向服务器发送这个cookie） 这个值是一个GMT格式的日期。

  ​

  ​

#### JavaScript读写cookie。 读取、写入、删除

```javascript
var Cookie = {
   var cookieName = encodeURIComponent(name) + '=',
  	    cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null;
   if (cookieStart > -1) {
     var cookieEnd = document.cookie.indexOf(';', cookieStart); 
   }
};
```





> 一定不要在cookie里面存储重要和敏感的数据。 cookie数据并非存储一个安全环境中。 任何包含的任何数据都可以被他人访问。所以不要在cookie 中存储如 信用卡 个人地址等等信息。



### session机制

它是一种服务端的机制。 服务器使用一种类似于散列表的结构来保存信息。

当程序需要为某个客户端的请求创建一个session时。 服务器首先检查这个客户端的请求里面是否包含一个session标志。如果已包含则说明以前已经为此客户端创建过session，服务器就按照session id把这个session检索出来使用（检索不到，会新建一个），如果客户端请求不包含session id，则为此客户端创建一个session并且生成一个与此session相关联的session id，session id的值应该是一个既不会重复，又不容易被找到规律以仿造的字符串，这个session id将被在本次响应中返回给客户端保存。



* session 在服务端 cookie在客户端
* session默认存在服务器的一个文件中
* session的运行依赖session id。 而session id 是存在cookie中的。 也就是说 如果浏览器禁用了cookie。同时session也会失效。 但是一般可以用其他方式实现 比如在url 中传递 session_id。 用户验证一般用session。
* 因此，维持一个会话的核心就是客户端的唯一标识，即 session id





#### Web存储机制



Web Storage 的目的是克服由cookie带来的一些限制。 

* 提供一种在cookie之外存储会话数据的途径;

* 提供一种存储大量可以跨会话存在的数据的机制;

  ​



























