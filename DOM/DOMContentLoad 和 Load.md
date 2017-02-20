
## DOMContentLoad 和 Load的区别

触发时机不一样 先触发 DOMContentLoaded事件 后触发load事件DOM文档加载步骤：  

* 解析HTML结构
* 加载外部脚本和样式表文件
* 解析并执行脚本代码
* DOM树构建完成 // DOMContentLoaded
* 加载图片等外部文件
* 页面加载完毕 // load
