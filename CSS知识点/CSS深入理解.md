## CSS深入
要思考你每一行代码 即使是HTML  

### 最小影响原则
不是实现了功能就行。要更好的实现 扩展性要强 易维护。你在写某段CSS代码时，首先要非常清楚地知道这段CSS代码的功能，其次要尽量严格保障这段CSS代码只实现了你想要实现的功能。

```CSS
.content{
    width: 980px;
    margin: 0 auto;
}
/* 这里看起来居中，但是真的就没有问题吗 看看下面的 */

.content{
    width: 980px;
    margin-left: auto;
    margin-right: auto;
}
/* 这里看起来复杂。但是仔细一想 你想要的水平居中。但是却把 top/bottom也设置。如果需要给另一处需要给top/bottom 设置值。那就必须要提高优先级 */
```
### BFC (Block Fromatting Context)
W3C的定义是：浮动元素和绝对定位元素，非块级盒子的块级容器( inline-blocks table-cells table-captions) 以及overflow值不为 visiable 的块级盒子。都会为他们的内容创建新的BFC。
我们换一种方式来重新定义BFC。一个HTML元素要创建BFC，则满足下列的任意一个或多个条件即可：

* float的值不是none。
* position的值不是static或者relative。
* display的值是inline-block、table-cell、flex、table-caption或者inline-flex
* overflow的值不是visible

BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。

### BFC中盒子的对齐方式
BFC中，每一个盒子的左外边缘（margin-left）会触碰到容器的左边缘(border-left)（对于从右到左的格式来说，则触碰到右边缘）。浮动也是如此（尽管盒子里的行盒子 Line Box 可能由于浮动而变窄），除非盒子创建了一个新的BFC（在这种情况下盒子本身可能由于浮动而变窄）

* 外边距重叠 如果同在一个BFC中，相邻的两个盒子的margin会发生重叠。取值是较大的那个。一正一负就相加。
* 利用BFC避免外边距重叠

```HTML
    <div class="container">
        <p> Sibling 1</p>
        <p> Sibling 2</p>
        <div class="newBFC">
            <p>Sibling 3</p>
        </div>   
    </div>         
```
![border] (https://camo.githubusercontent.com/c7c77701b984c7d4f957a7729db2cf534ef92c3d/687474703a2f2f7365676d656e746661756c742e636f6d2f696d672f62566d327153)
两个不同的BFC 之间就不会发生外边距重叠了。

### BFC包含浮动
浮动元素是会脱离文档流的(绝对定位元素会脱离文档流)。如果一个没有高度或者height是auto的容器的子元素是浮动元素，则该容器的高度是不会被撑开的。我们通常会利用伪元素(:after或者:before)来解决这个问题。BFC能包含浮动，也能解决容器高度不会被撑开的问题。
![border] (https://camo.githubusercontent.com/21d74bf8701804cd465f8f88311d771372f0df4b/687474703a2f2f7365676d656e746661756c742e636f6d2f696d672f62566d327154)
```HTML
<div class="container">
    <div>Sibling</div>
    <div>Sibling</div>
</div>
```

```CSS
.container {
    /* 增加一个overflow: hidden; 触发BFC */
  background-color: green;
}
.container div {
  float: left;
  background-color: lightgreen;
  margin: 10px;
}
```
现在容器可以包住浮动子元素，并且其高度会扩展至包住其子元素，在这个新的BFC中浮动元素又回归到页面的常规流之中了。

### 使用BFC避免文字环绕
```HTML

<div class="container">
    <img src="" alt="">
    <div class="article-content">
        sadasdasdasdsad
    </p>
</div>
```

```CSS

img{
    float: left;
    margin-right: 20px;
}
.article-content{
    /* 创建一个BFC 其他不会影响内部的布局 */
    background-color: #ddd;
    overflow: hidden;
}

```
