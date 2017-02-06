// 将所有的工具方法都封装在一个WDS里面 (Wall DOM Script) 命名空间中

(function(WDS, undefiend){

    // 获取特定元素的计算样式
    function getStyle(elem, property){
      // 安全保护判断
      if(!elem || !property){
        return false;
      }
      var value = elem.style[camelize(property)], //是否有内联元素
          css;  //获取的所有计算样式

      // 无内联样式 则获取层叠样式表计算后的样式
      if(!value){
        // 功能嗅探 如果是IE9-的话 就不能识别 document.defaultView.getComputedStyle
        // window.currentStyle 和 getAttribute 获取特定属性
        if(document.defaultView && document.defaultView.getComputedStyle){
          css = document.defaultView.getComputedStyle(elem, null);
          value = css ? css.getPropertyValue(property) : null;
        }
      }
      return value;
    }

    // 检测获取的背景色是否有效 排除特定的情况 opacity display visiblty
    function checkBgValue(elem){
      var value = getStyle(elem, 'background-color'),
          hasColor = value ? true : false;  // 是否有颜色

      // 排除特殊情况
      if(value == 'transparent' || value == 'rgba(0,0,0,0)'){
        // 未设置background-color 或者设置跟随父节点
        hasColor = false;
      }else if(getStyle(elem, 'opacity') == '0'){
        // dom节点透明度全透明
        hasColor = false;
      }else if(getStyle(elem, 'visibility') == 'hidden'){
        // dom 节点不可见
        hasColor = false;
      }else if(getStyle(elem, 'display') == 'none'){
        // dom 节点不可见
        hasColor = false;
      }
      return hasColor;
    }

    // 获取div在页面最终显示的颜色
    function getRealBg(elem){
      if(checkBgValue(elem)){
        return getStyle(elem, 'background-color');
      }else if(elem != document.documentElement){
        return getRealBg(elem.parentNode);
      }
      return ''
    }

    // 将rbg颜色转换为16进制
    function toHex(r, g, b){
      return ("#" + (r << 16 | g << 8 | b).toString(16)).slice(-6);
    }

    // 字符串转换为驼峰写法
    function camelize(str){
      return str.replace(/-(\w)/g, function(strMatch,p1){
        return p1.toUpperCase();
      });
    }
    WDS.getRealBg = getRealBg;
})(window.WDS || (window.WDS = {}));


var elem = document.querySelector('.box');
WDS.getRealBg(elem);
