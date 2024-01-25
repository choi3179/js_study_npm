// array handling

var arr = [ 1, 2, 3, 4 ];
console.log(`arr : ${arr}`);

arr.pop();
console.log(`arr pop : ${arr}`);

arr.push(5);
console.log(`arr push : ${arr}`);

console.log('\n-------------------------------------\n');

// splice
arr = [ 1, 2, 3, 4, 5, 6, 7 ];
console.log(`${arr}`);

arr.splice(3,2);
console.log(`splice(3,2) : ${arr}`);

arr = [ 1, 2, 3, 4, 5, 6, 7 ];
arr.splice(2,1,"a","b");	// 2번째 인덱스에서 1개 제거 후 a,b를 추가
console.log(`arr.splice(2,1,"a","b") : ${arr}`);
