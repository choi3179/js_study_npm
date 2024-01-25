// reduce : 배열을 특정 조건에 따라 줄이는 함수

var arr = [1,2,3,4,5,6,7,8,9,10];

var value = arr.reduce(function(preValue,curValue,index){
	return preValue + curValue;
});

console.log(value);
