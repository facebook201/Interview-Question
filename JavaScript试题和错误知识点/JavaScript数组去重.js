
//1 Set 实现 ES6新增的 new Set(); Array.from();
// ES6 新增的数据结构 Set。类似于数组 但是成员的值都是唯一的 没有重复的值。

var set = new Set([1,2,3,4,3,'a','b','a']);

set; {1,2,3,4,'a','b'};
typeof set; 			// "object"
typeof [...set];		// "object"

// 用于将两类对象转为真正的数组
// 类似数组的对象 (array-like object)
// 可遍历 (iterable)的对象 (包括 ES6的数据结构 Set 和 Map)

Array.form();	

// 方案一
Array.prototype.unique = function(){
	return Array.form(new Set(this));
}



// 方案二 filter 返回一个通过函数组成的新数组

Array.prototype.unique1 = function(){
	var sortArr = this.sort();
	return sortArr.filter(function(item, i, context){
		return item !== context[i + 1];
	});
} 


// 方案三 forEach

Array.prototype.unique3 = function(){
	var result = [];
	this.forEach(function(){
		if(!result.includes(v)){
			result.push(v);
		}
	});
	return result;
}

// 方案四 filter 和 indexOF
// 这里 array.indexOf(item) 返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回-1

function unique4(arr){
	var res = arr.filter(function(item, index, array){
		return array.indexOf(item) === index;
	});
	return res;
}

// 方案5 这种方案 会单独提出 NaN 和 {} 的判断 我们都知道 NaN不等于任何值 包括自己。 {} 跟 {} 呢?

Array.prototype.unique = function(){
    var newArr = [];
    var flag = true;	
    for(var i = 0; i < this.length; i++) {
        if (newArr.indexOf(this[i] == -1)) {
	    if (arr[i] != arr[i]) {
	        if (flag) {
		    newArr.push(this[i]);
		    flag = false;	
		}
	    }else {
	        newArr.push(arr[i]);
	    }
	}
    }
    return newArr;
}









