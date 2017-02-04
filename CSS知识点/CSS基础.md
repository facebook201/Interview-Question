
### Section
只有元素内容才会被列在 文档大纲中。才适合用section。对于博文的list 整个list才属于一个section。

### 块级元素和行内元素
* 块级元素盒子会扩展到与父元素同宽 明确width后 就不会再扩展到与父元素同宽。没有设定 width时 值为auto
* 行内元素盒子会收缩包裹其内容。并且会尽可能抱紧。其高度不会随着设置的height而变高而是font-size大小

### 选择符

* 后代 p span { }
* 子选择符 p > span  p必须是span的父元素。
* 紧邻同胞选择符 p + span span 必须紧跟在p后面
* 一般同胞选择符 ~  p~span
* 属性选择符 img[title]
* 属性值选择符 p[attr="pic"]
* 伪类 :focus :target :hover
* 伪元素 ::first-letter伪元素  p::first-letter{ font-size: 300%}; ::before 和::after 伪元素 以下标记
*

### 清除浮动
* overflow：hidden;
* clear:both
* clearfix:after{ content:".";display:block;height:0;visibility: hidden;clear: both; }


#### 
