// REST Parameter
// 가변 인자를 배열로 받을 수 있게 한다.

function f(x,y,...a) {
	return (x+y) * a.length;
}

console.log(f(1,2));
console.log(f(1,2,"hello",true,7));

// REST Parameter는 항상 배열 객체 형태로 리턴된다.
function f2(a,b, ...rest) {
	console.log(a,b,rest);
}

f2(1,2,3);
