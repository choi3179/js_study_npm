// 변수에 함수 넣어 사용하기


var two = function() {
	return 2;
}

var caller = function(f) {
	return f();
}

var f = function() {
	return two;
}

