源对象跟目标对象都指向同一块内存，所以修改其中任意的值 另一个值都会随之改变 这就是**浅拷贝**。

为目标对象开辟一块新的内存 将源对象的各个属性都复制到新内存 这就是**深拷贝**。



#### 浅拷贝

Object.assign()  将所有可枚举的属性的值从一个或多个源对象复制到目标对象 返回目标对象。

```javascript
var target = {a: 1, b: 1};
var copy1 = {a: 2, b: 2, c: {ca: 21, cb: 22, cc: 23}};
var copy2 = {c: {ca: 31, cb: 32, cd: 34}};
var result = Object.assign(target, copy1, copy2);
console.log(target);    // {a: 2, b: 2, c: {ca: 31, cb: 32, cc: 33}}
console.log(target === result);    // true
```

Object.assign()拷贝的只是属性值，假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。所以Object.assign()只能用于浅拷贝或是合并对象。这是Object.assign()值得注意的地方。



#### 深拷贝

jQuery.extend(deep, target, object1[, objectN]); deep 是Boolean 如果是true 进行深拷贝。

```javascript
jQuery.extend = jQuery.fn.extend = function() {
    var options, name, src, copy, copyIsArray, clone,
        target = arguments[ 0 ] || {},
        i = 1,
        length = arguments.length,
        deep = false;
    // Handle a deep copy situation
    if ( typeof target === "boolean" ) {
        deep = target;
        // Skip the boolean and the target
        target = arguments[ i ] || {};
        i++;
    }
    // Handle case when target is a string or something (possible in deep copy)
    if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
        target = {};
    }
    // Extend jQuery itself if only one argument is passed
    if ( i === length ) {
        target = this;
        i--;
    }
    for ( ; i < length; i++ ) {
        // Only deal with non-null/undefined values
        if ( ( options = arguments[ i ] ) != null ) {
            // Extend the base object
            for ( name in options ) {
                src = target[ name ];
                copy = options[ name ];
                // Prevent never-ending loop
                if ( target === copy ) {
                    continue;
                }
                // Recurse if we're merging plain objects or arrays
                if ( deep && copy && ( jQuery.isPlainObject( copy ) || ( copyIsArray = Array.isArray( copy ) ) ) ) {
                    if ( copyIsArray ) {
                        copyIsArray = false;
                        clone = src && Array.isArray( src ) ? src : [];
                    } else {
                        clone = src && jQuery.isPlainObject( src ) ? src : {};
                    }
                    // Never move original objects, clone them
                    target[ name ] = jQuery.extend( deep, clone, copy );
                // Don't bring in undefined values
                } else if ( copy !== undefined ) {
                    target[ name ] = copy;
                }
            }
        }
    }
    // Return the modified object
    return target;
};
```

上面是jQuery的源码、 JSON.parse() 和 JSON.stringify() 给我们一个基本的解决办法。

```javascript
var target = {a: 1, b: 2, c: {ca: 11, cb: 12}};
var targetCopy = JSON.parse(JSON.stringify(target));
targetCopy.a = 2;
targetCopy.c.ca = 21;
console.log(target);   // {a: 1, b: 1, c: {ca: 11, cb: 12, cc: 13}}
console.log(targetCopy);    // {a: 2, b: 1, c: {ca: 21, cb: 12, cc: 13}}
console.log(target === targetCopy);  // false
```

看到改变targetCopy并没有改变原始的target，继承的属性也没有丢失，因此实现了基本的深拷贝。
但是用JSON.parse()和JSON.stringify()会有一个问题。JSON.parse()和JSON.stringify()能正确处理的对象只有Number、String、Array等**能够被json表示的数据结构**，因此函数这种不能被json表示的类型将不能被正确处理。



下面是github上面的一个深拷贝方法

```javascript
function cloneObj(src) {
  var clone = src;
  // 对于Date String Boolean 等引用类型 需要考虑调用构造函数重新构造
  // 直接赋值会有引用问题 不是真正的clone引用变量
  
  if (src instanceof Date) {
    clone = new Date(src.getDate());
    return clone;
  }
  // 对于Object 和 Array 的遍历 可以使用for in 这样可以保证在Array对象上扩展的属性也可以正确复制
  if (src instanceof Array) {
    clone = [];
    for (var key in src) {
      clone[key] = cloneObj(src[key]);  
    }
    return clone;
  }
  
  if (src instanceof Object) {
    clone = {};
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        clone[key] = cloneObj(src[key]);
      }
    }
    return clone;
  }
  // 数字 字符串 布尔 null undefined
  return src;
}
```



 使用JSON.stringify序列化一个对象时。

* 序列化后的属性出现的顺序是不定的。除了数组中的元素 其按数组中位置顺序序列化。
* Boolean/Number/String 对象转成其原始值
* 如果属性值为undefined 函数对象 symbol 那么这个属性要么被忽略 要么被转成null
* 不可枚举属性也被忽略





























