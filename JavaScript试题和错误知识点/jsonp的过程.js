/**
 * 1> jsonp能解决的问题
 *    解决浏览器跨域问题的方案。跨域指的是浏览器内部一种机制 为了保护每个站点之间
 *    的请求达到安全 独立 相互交互 不能乱套等。浏览器阻止不同源站点之间的请求会报错
 */

/**
 * 	  同源策略
 * 	  http://www.github.com   https://www.github.com            协议不同
 * 	  http://www.github.com   https://www.github1.com           主机不同
 * 	  http://www.github.com:80   https://www.github.com:8080    端口号不同
 */

// 怎么解决跨域。熟悉的三个 cros  代理 jsonp 这里只接收jsonp
// 利用img script标签插入一个请求地址 让不同源的请求远离浏览器的同源策略限制

<script>

    function jsonpcallback(json){
        console.log(json);
    }

    const scr = document.createElement('script');
    scr.src = 'http://localhost:8080/data.json';
    document.body.appendChild(src);

</script>

/**
 * 上面的代码就是主要过程 总结其原理
 * 1 首先在客户端注册一个 callback 然后把callback的名字传给服务器
 * 2 服务器先生成json数据。然后以JavaScript语法的方式 生成一个function。function名字就是传递
 *   上开的参数 jsonp。最后将json数据直接以传入参的方式 放置到function中。
 * 3 客户端浏览器 解析script标签 并执行返回的JavaScript文档。此时数据作为参数传到客户端
 *   预先定义好的callback函数里。
 */
