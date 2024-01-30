// Destructuring assignment > Array

let a = 1;
let b = 3;
[a,b] = [b,a]
console.log(a,b);

// 일부 반환값 무시
function f() {
	return [1,2,3];
}
const [x, , y] = f();
console.log(x,y);

// 나머지 할당
let m, n, rest;
[m, n, ...rest] = [10,20,30,40,50];
console.log(m,n,rest);
