// 고차함수 : 함수를 인자로 받거나 반환함으로써 작동하는 함수


var arr1 = [1,2,3];
var arr2 = arr1.map(function(item) {
	return item * 2;
});

console.log(arr2);

function add(a,b) {
	return function(c) {
		return a+b+c;
	}
}

console.log(add(2,3)(10));
