
## Webpack的核心理念

#### 1 `万物皆模块`: 
就像JS文件可以当做模块, 那么其他所有的文件(css 图片 HTML)都可以当做模块。这样就可以直接 require("XXX.js"); 或者require("xxx.css"),这样我们可以在细分 分割成更小更容易管理的粒度 实现复用。

#### 2 `按需加载 异步加载`: 
一般的模块打包器会打包所有的模块 然后生成一个巨大的输出文件。但是许多实际应用的APP中 这个bundle.js可能会有10MB-15MB那么大。并且总是会加载，而webpack有一些功能分割代码 然后生成多个bundle文件在你需要的时候异步加载。


### 开发模式 VS 生成模式

一般有两个大型的webpack配置文件。
```JavaScript

"scripts": {
	// npm run build 生产模式打包
	"build": "webpack --config webpack.config.prod.js",

	// npm run dev 开发模式打包并运行dev-server
	"dev": "webpack-dev-server"
}

```
#### 配置
Webpack的配置如下 entry output plugins module resolve等等 
```JavaScript

module.exports = {
	//页面入口
	entry: {
		index: './src/js/page/index.js'
	},
	//入口文件输出位置
	output: {
		path: 'dist/js/page',
		filename: '[name].js'
	},	
	
	module: {
		// 加载器配置
		loaders: [
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.js$/,  loader: 'jsx-loader?harmony'},
			{test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
			{test: /\.(png|jpg)$, loader: 'url-loader?limit=8912'}
		]
	},
	//解决方案 配置
	resolve: {
		root: 'E:/github/flux-example/src',	//绝对路径
		extensions: ['', '.js', '.json', 'scss'],
		alias: {
			AppStore: 'js/stores/AppStores.js',
			ActionType: 'js/actions/ActionType.js',
			AppAction: 'js/actions/AppAction.js'
		}
	}
	
};

```

FIS3的文件配置 是通过glob语法match 到某些文件。然后对这些文件定义各自的各个阶段的插件处理。发布规则。

```JavaScript

var path = require('path');
var domain = '';

//需要构建的文件 
fis.set('project.fileType.text', 'po');
fis.set('project.files', ['src/**']);
fis.set('project.ignore', fis.get('project.ignore').concat(['demo/**','DS_store']));

//模块化支持插件

fis.hook('commonjs', {
	extList : ['.js', '.coffee', '.es6', '.jsx'],
	umd2commonjs: true
});

//模块文件 会进行require包装
fis.match('/{node_modules, src}/**.{js, jsx}',{
	isMod: true,
	useSameNameRequire: true
});

//不是AMD UMD CMD规范的
fis.match('src/scripts/{engine, plugin, shim}/**',{
	isMod: false
});

//所有文件
fis.match('src/(**)', {release: 'assets/&1'});

//html
fis.match('src/page/(**)',{release: 'page/$1'});

//node_modules
fis.match('node_modules/(**)', {release: 'npm/$1'});

//所有js jsx






```











