### 盒子模型

* IE盒子 width = contentWidth + paddingWidth + borderWidth;
* W3C盒子 width = contentWidth;

  高度也是同理。行级盒子和块级盒子。
```CSS
.box{
    height: 50px;
    width: 100px;
    background-color: yellow;
    border: 1px solid red;
}
```
```HTML
    <div class="box"></div>
    <span class="box"></span>
```

结果发现行级盒子的宽度是0。高度是有但是不是50px; 原因是因为 `行内盒子的content box 宽高本来就不是由height和width决定的。高度是由font-size决定的，宽度是由子行级盒子的宽度决定`

### 行内盒子被挤段
```CSS
.broken{
    border: 1px solid red;
    background-color: yellow;
}
```
当inline-level box 宽度大于父容器宽度时。会被拆分成多个inline-level box; margin/border/padding-left 作用于左边。padding border margin-right作用于右边。


### IFC行内格式化上下文

IFC 则是表示盒子从左到右的水平排列等等,而IFC则是表示盒子从左到右的水平排列方式。仅此而已


### 垂直排版特性
line-level box排版单位不是其本身。而是line-box。 重点在于line-box。

* 位于该行上的所有 in-flow的inline-level box均参与该行line box高度的计算。是所有inline-level box，而不仅仅是子元素所生成的 inline-level box.
* inline-level 根据vertical-algin 属性值相对各自的父容器作为垂直方向对齐;
* 最上方的 box上边界到最下方的下边界则是 line box的高度。

### Collapsing margins

* 产生新BFC的盒子不会与子盒子发生margin重叠。
* display: inline-block 盒子不与兄弟和父盒子发生 margin重叠。是因为display:inline-block的盒子的IFC;
* position scheme(定位方案) 为floats的盒子不与floated的兄弟盒子发生margin重叠。也不会与前一个in-flow的兄弟盒子发生margin重叠。

```HTML
    <div class="margins border">sdsa</div>
	<div class="margins border float">sdad</div>
	<div class="margins border float">sdas</div>
```
```CSS
    .margins{
        margin: 50px 0 70px;
    }
    .border{
        border: 1px solid red;
    }
    .float{
        float: left;
        width: 200px;
    }
```
这里 float浮动的元素 不会与第一个发生margin重叠。
