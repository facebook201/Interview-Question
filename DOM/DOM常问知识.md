### 1 DOM结构 两个节点之间可能存在哪些关系 以及如何在节点之间任意移动

* document.documentElement;     返回文档的根节点<html>
* document.body;                <body>
* event.srcElement;             返回激活事件的源节点(IE)
* event.target;                 返回激活事件的源节点(firefox)

### 当前对象为node

* 返回父节点       node.parentNode, node.parentElement;
* 所有子节点       node.childNodes
* 第一个子节点     node.firstChild
* 最后一个子节点   node.lastChild
* 同属下一个子节点 node.nextSibling
* 同属上一个       node.previousSibling


### DOM操作 怎么添加 移除 复制 创建 查找

#### 创建新节点
* createDoucmentFragment()    创建DOM片段
* createElement()             创建一个具体的元素
* createTextNode()            创建一个文本节点

#### 添加 移除 替换 插入
* appendChild()               添加
* removeChild()               移除
* replaceChild()              替换
* cloneNode()                 复制
* insertBefore()              插入

#### 查找

* getElementsByTagName        标签名
* getElementsByName           元素属性名
* getElementById              元素Id
* querySelector()             选择器
* querySelectorAll()        

### 3事件

* 冒泡事件: 事件按照从最特定的事件目标到最不特定的事件目标的顺序触发。
* 捕获事件：从最不精确的对象开始触发 然后到最精确的对象
* DOM 事件流 同时支持两种事件模型 但是捕获事件先发生。从document开始 到document结束

### XMLHttpRequest  ———— 这是什么 这是怎样一种完整地执行一次GET请求 怎样检测错误

首先判断window下面是否有XMLHttpRequest对象。如果有 就创建实例，没有就使用IE的方式创建
创建好对象实例之后 就判断是不是null。 根据实例的属性 onreadystatechange来判断。

```JavaScript

var xhr = null;
function loadXMLDoc(url) {
  if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
  } elseif (window.ActiveXObject) {
    // code for IE5 and IE6
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (xhr != null) {
    xhr.onreadystatechange = state_Change;
    xhr.open("GET", url, true);
    xhr.send(null);
  }
}


```
