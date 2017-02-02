### 缓存的控制通过Headers传递信息

缓存的控制需要浏览器和服务器端协同完成,所以他们需要一个传递信息的方式, 事实上目前的web缓存主要通过Headers来传递信息。

![border] (http://7xkpdt.com1.z0.glb.clouddn.com/165f046eab640ae0cda0663795a7feff.png)


#### cache-control 和 max-age
cache-control: 通过最大生存时间来判断资源的缓存是否有效。
cache-control: max-age = 93312000; 告诉浏览器的生存时间。

#### expires
注意到在缓存的 response headers里有一个expires: Sat, 24 Aug 2019 09:03:00 GMT字段。在指定时间之前都是认为缓存是有效的。 但是两个同时存在的时候 cache-control会覆盖expires; `他们都属于协商缓存`。
为什么要设置两个呢 expires是 HTTP/1.0定义的 而 cache-control是HTTP/1.1定义的。

#### 304 Not Modified

上面的缓存策略只能很简单的让浏览器来确定缓存是否有效。不能把存活时间变为永远。因为可能什么时候我们会更新资源 但隔一段时间重新请求一次并没有改变的资源同样浪费带宽 所以我们必须要让所有服务告诉浏览器缓存仍然有效的方法 那边是 ` 304 Not Modified `。在服务器端判断缓存仍然有效时将会返回状态码 304 的响应。

#### 那么服务器如何判断浏览器支持有的缓存是否有效呢？

* If-None-Match/ETag
首先服务器端会在response headers中返回ETag(文件是一个hash);当资源改变时 ETag也会发生改变。浏览器在发起请求时在 If-None-Match字段携带缓存的ETag。        
