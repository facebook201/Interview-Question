
var cookies = function (data, opt) {
  // 默认函数 设置默认选项
  function defaults(obj, defs) {
    obj = obj || {};
    for (var key in defs) {
      if (obj[key] === void 0) {
        obj[key] = defs[key];
      }
    }
    return obj;
  }




  // 初始化默认设置cookies
  defaults(cookies, {
    expires: 360 * 24 * 3600,     // 过期时间
    path: '/', // 路径
    secure: window.location.protocol === 'https:',

    
  });

}