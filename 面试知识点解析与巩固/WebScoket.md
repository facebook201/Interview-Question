## WebScoket（它是一种协议）

WebScoket 是HTML5出的东西。但是HTTP是不支持持久连接(长连接)



### HTTP协议详解

HTTP是一个属于应用层的面向对象的协议。简捷、快速的方式。其特点如下:

* 支持客户 / 服务器模式
* 简单快速：客户想服务器发送请求，只需传送请求方法和路径、GET、POST、PUT。每种方法规定客户与服务器联系的类型不同。由于HTTP协议简单。是的HTTP服务器的程序规模小 通信很快
* 灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type 加以标记。
* 无连接：限制每一次连接只会处理一个请求。 服务器处理完客户的请求。并且受到客户应答之后 就断开连接这种方式可以节省传输时间。
* 无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。





### HTTP协议之URL

http是一个基于请求与响应模式的、无状态的、应用层的协议，常基于TCP的连接方式，HTTP1.1版本中给出一种持续连接的机制，绝大多数的Web开发，都是构建在HTTP协议之上的Web应用。

协议 主机名 端口号



### HTTP协议协议之请求

http请求的三部分：**请求行、消息报头、 请求正文**

* 请求行以一个方法符号开头，以空格分开，后面跟着请求的URI和协议的版本 格式如下：Method Request-URI HTTP-Version CRLF

  * 请求方法 Method 

    GET     请求获取Request-URI所标识的资源
    POST    在Request-URI所标识的资源后附加新的数据
    HEAD    请求获取由Request-URI所标识的资源的响应消息报头
    PUT     请求服务器存储一个资源，并用Request-URI作为其标识
    DELETE  请求服务器删除Request-URI所标识的资源
    TRACE   请求服务器回送收到的请求信息，主要用于测试或诊断
    CONNECT 保留将来使用
    OPTIONS 请求查询服务器的性能，或者查询与资源相关的选项和需求



### HTTP请求之响应

http响应：**状态码、消息报头、响应正文**



WebSocket协议是Http协议的一种补充。

![border](https://pic1.zhimg.com/6651f2f811ec133b0e6d7e6d0e194b4c_b.jpg)



有交集 但是不是全部。



### 2 WebScoket 是什么样的协议 具体有什么优点



webScoket是一个持久化的协议。相对于HTTP这种非持久的协议来说。举个生命周期的例子来说

* http生命周期通过request来界定。一个Request和一个Response。http1.1 中进行了改进 使得有一个keep-alive 也就是说。在一个HTTP连接中。可以发送多个Request 接受多个response。但是请记住 **Request = Response** 在HTTP中永远都是这样。也就是说一个request 只能有一个response。 而且这个response也是被动的 不能主动发送。

* WebSocket协议 是基于 HTTP协议，借助了HTTP的协议来完成一部分握手。

  GET /chat HTTP/1.1
  Host: server.example.com
  Upgrade: websocket  //  多了的东西
  Connection: Upgrade // 多了的东西
  Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
  Sec-WebSocket-Protocol: chat, superchat
  Sec-WebSocket-Version: 13

  Origin: http://example.com

  多出来的东西就是 Webscoket的核心。告诉Apache、Nginx 等服务器。

  ```
  Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
  Sec-WebSocket-Protocol: chat, superchat
  Sec-WebSocket-Version: 13
  ```

首先，Sec-WebSocket-Key 是一个Base64 encode的值，这个是浏览器随机生成的，告诉服务器：**泥煤，不要忽悠窝，我要验证尼是不是真的是Websocket助理。**
然后，Sec_WebSocket-Protocol 是一个用户定义的字符串，用来区分同URL下，不同的服务所需要的协议。简单理解：**今晚我要服务A，别搞错啦~**
最后，Sec-WebSocket-Version 是告诉服务器所使用的Websocket Draft（协议版本），在最初的时候，Websocket协议还在 Draft 阶段，各种奇奇怪怪的协议都有，而且还有很多期奇奇怪怪不同的东西，什么Firefox和Chrome用的不是一个版本之类的，当初Websocket协议太多可是一个大难题。。不过现在还好，已经定下来啦~大家都使用的一个东西~ 脱水：**服务员，我要的是13岁**



### long poll 和 ajax 轮询

http的另一个特性。被动性。服务端不能主动联系客户端，只能有客户端发起

其实我们所用的程序是要经过两层代理的，即**HTTP协议在Nginx等服务器的解析下**，然后再传送给相应的**Handler（PHP等）**来处理。其实我们所用的程序是要经过两层代理的，即**HTTP协议在Nginx等服务器的解析下**，然后再传送给相应的**Handler（PHP等）**来处理。Websocket就解决了这样一个难题，建立后，可以直接跟接线员建立持**久连接**，有信息的时候客服想办法通知接线员，然后**接线员**在统一转交给客户。















