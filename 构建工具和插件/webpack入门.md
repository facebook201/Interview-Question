
## Webpack是什么
 我个人认为webpack是一个 集前端自动化 模块化 组件化于一体的扩展系统。根据自己的需要来进行一系列的安装和配置。最终实现你需要的功能并进行打包输出。简单来说就是一个打包工具。


#### webpack的作用

* 将许多松散的模块按照依赖关系和规则打包成符合生产环境部署的前端资源
* 将按需加载的模块进行代码分割，等到实际需要的时候进行异步加载
* 通过加载器loader的转换 所有的前端资源都可以看做是模块 比如说 CommJS AMD模块 ES6模块 css js json sass less img等等


#### 1 前端资源是什么？

前端资源就是 我们在创建html 引入的 script link img json 等文件。用于存放依赖的模块, 就可以将其他前端资源按照依赖关系和规则打包。 现在只需要在html 里面引入一个主文件index.js。这个入口不用写在 html中。然后配置好config.在cmd中输入webpack执行编译 所以前端资源都被引入。 并且webpack 会帮我们入口文件enter.js 的每个模块的类型和依赖关系。等到需要的时候按需加载。

```HTML

<body>
    <script src="js/main.js"></script>
    <!-- 引入主模块main.js -->

</body>

<!--
entry.js
import $ from 'jquery'
import other
-->
```
### 2 什么是模块

所有前端资源都是模块。可以通过加载器loader进行转换。 在JavaScript方面 有几大模块系统。
CommonJS模块 AMD模块 CMD模块 ES6模块

* CommonJS
在 CommonJs中。 有一个全局方法 require(), 用于加载依赖模块。

```JavaScript
var jquery = require('jquery');
var bootstrap = require('bootstrap');
```
主文件 main.js 模块依赖这两个模块。CommonJS 缺点就是同步加载。也就是说 会先加载jquery 模块,等到 jquery加载完毕 在加载 bootstrap。 同步意味着阻塞。模块太大容易假死


### AMD模块
AMD 又叫做异步块定义。 每个独立的模块的加载不影响回调函数中定义的模块的运行。在回调函数中定义模块 只有当依赖的模块加载完毕 该模块才会编译执行，不同于CommJS 它有两个参数。第一个参数是数组。需要传入依赖模块; 第二个参数是回调函数 回调函数中也接受参数。而参数是形式参数 来自每一个依赖模块

```JavaScript
// main.js
require(['jquery', 'bootstrap'], funtion($, boot){
    // 写入的模块
});

```

主模块main.js 依赖于jquery Bootstrap模块。main 只有在这两个模块加载完成之后才会编译 执行main定义的模块。 主模块需要等到依赖模块加载完成之后才编译执行。属于同步 而被依赖模块之间属于异步加载 哪一个模块小 就加载哪一个。
AMD 模块的一大不足就是所有依赖的模块都需要提前加载 依赖前置。

#### 总结CMD 依赖就近 延迟执行。


#### ES6 模块

ES6模块的设计就是尽量的静态化 使得编译时就能确定模块的依赖关系。最大的区别就是按需加载 只加载自己想要的。


#### 模块化

webpack 使用某种方法将每一个松散的模块按照依赖关系编译的过程。webpack 需要一个入口js文件
主模块js文件。config文件就可以实现前端资源模块化。

```HTML

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<title></title>
	</head>
	<body>

        <!-- 引入主模块main.js -->
        <script src='js/main.js'></script>

        <!--
            //2 入口文件entry.js

            //3 webpack.config.js
            module.exports = {      
                //入口
                entry: './app/js/entry.js',
                // 输出
                output: {
                    path: './dist/js',
                    filename: 'main.js'
                }
            };
        -->
	</body>
</html>
```

### 按需加载?

webpack 其中的一个作用就是可以将按需加载的模块进行代码分割。根据实际需要进行异步加载。 顾明思义就是按照用户需要某个功能的时候在加载相应的模块。


#### loader？

loader 转换器可以将各种类型的资源转换为 JavaScript模块。这样每个资源都可以当成模块处理。
