// some : 지정된 함수의 결과가 true일 때까지 배열 원소를 반복하는 js 내장함수


var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

var isEven = function(value){
	return value % 2 === 0;
}

console.log( arr.some(isEven) );
