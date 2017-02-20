
Function.prototype.bind = Function.prototype.bind || function (context){
	var me = this;
	var args = Array.prototype.slice.call(arguments, 1);
	// var args = ...arguments; ES6写法 
	return function(){
		var innerArgs = Array.prototype.slice.call(arguments);
		var finalArgs = args.concat(innerArgs);
		return me.apply(context, finalArgs);
	}
}