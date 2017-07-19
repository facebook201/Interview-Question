#### DOM节点操作篇

页面上面有空的无序列表 ul, 要往里面插入三个li。每个列表的内容是插入的顺序，原生js实现这个需求？



给出的答案1:

```javascript
var ul = document.getElementById('list');
for (var i = 0; i < 3; i++) {
  var item = document.createElement('li');
  item.innerText = i + 1;
  ul.appendChild(item);
} 
```

但是上面的只能说是完成了需求，如果做到以下几点会更好。

* 变量命名就 加上nd前缀会更加容易辨识。

* 选择符命名，给js的选择符建议加上js-前缀。提高可读性; 而且避免命名冲突

* 容错能力 对节点的存在性做检查。这样代码才能更加健壮。单个地方的js可能会导致后续的代码不执行。（可以查看防御性编程）

* 最小作用域原则：应该把代码段包含在IIFE里，不产生全集变量 避免变量名冲突的风险，维护遗留代码必须要做的。

  ​

接下来进行改版。

  ```javascript
;(() => {
      // 变量名前缀 选择符号前缀
      let ndUl = document.getElementById('js-list');
      let frag = document.createDocumentFragment();
      // 容错能力 存在性检查
      if (!ndUl) {
        return;
      }
      for (var i = 0; i < 3; i++) {
        let li = document.createElement('li');
        li.innerText = i + 1;
        frag.appendChild(li);
      }
      ndUl.appendChild(frag);
    })();
  ```



#### 追问1 如何绑定事件

有了页面的内容 接下来就是交互。怎么点击li 弹出里面的内容。

```javascript
for (var i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerText = i + 1;
  li.addEventListener('click', function() {
     alert(this.innerText);
  });
  frag.appendChild(li);
}
```

注意箭头函数只有词法作用域，this会到顺着作用域链向上找。所以注意this丢失



#### 如果数据量变大怎么办

这时候我们可以想到 事件委托

```javascript
      for (var i = 0; i < 100; i++) {
        let li = document.createElement('li');
        li.innerText = i + 1;
        frag.appendChild(li);
      }
      ndUl.appendChild(frag);
      ndUl.addEventListener('click', function(eve){
        const e = eve.target;
        if (e.tagName === 'LI') {
          alert(e.innerText);
        }
      });
```

 这里额外补充点知识：事件的相关知识。我们点击目标的时候 会触发鼠标事件；

```javascript
MouseEvent
  UIEvent
    Event
      Object // 事件原型
      
eve.target; // 目标节点 上面就是li的dom节点。
eve.target.tagName; // 目标节点的li标签名 大写

```

