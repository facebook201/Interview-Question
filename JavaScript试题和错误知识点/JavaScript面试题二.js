
// JavaScript之事件委托


document.addEventListener('DOMContentLoaded', function(){
    const app = document.getElementById("ul");

    app.addEventListener('click', function(e){
        if(e.target && e.target.nodeName === 'LI'){
            var item = e.target;
            console.log(item.innerHTML);
        }
    });
});


//2 循环内使用闭包
外部函数可以读取内部函数的作用域。可以"创建私有变量 私有函数等等"

const arr = [10, 12, 15, 21];
for(var i = 0; i < arr.length; i++){
    (function(e){
        setTimeout(function(){
            console.log(e);
        }, 3000);
    })(i);
}

// 或者是 let 会创建一个新的绑定


3函数防抖 (Debouncing)

有些浏览器事件可以在很短的时间内执行多次, 就像改变浏览器窗口尺寸和滚动页面。如果你绑定一个事件去监听
窗口的滚动.用户连续滚动页面 可能会在几秒钟触动几千次。

函数防抖 ' 通过限制函数被调用的次数。把多个函数放在一个函数里面调用,隔一段时间调用一次 '

// debounce 用来包裹我们的事件

function debounce(fn, delay){
    // 一个持久化的timer
    var timer = null;
    //闭包取到timer
    return function(){
        //通过函数获取到参数列表和作用域
        var context = this;
        var args = arguments;
        //如果事件被触发 清除timer 重新开始计时
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context, args);
        }, delay);
    };
}

//用户发生操作时候调用的函数

function foo(){
    console.log("你滚动了");
}
//事件触发两秒后 我们在包裹debounce中的函数才会触发
const app = document.querySelector('scroll');

app.addEventListener('scroll', debounce(foo, 2000));
