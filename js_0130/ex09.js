// Array.prototype.sort
const arr = [100,6,89,34,0,1]
console.log(arr.sort())			// Unicode 순서에 따라 문자열 정렬됨
console.log(arr.sort((a,b)=>a-b));	// Array Function을 이용해 정수 오름차순 정렬
