// Arrow function expression

// concise 바디 
var func = x => x*x;

// block 바디
var func2 = (x,y) => {return x+y;};

// 객체 리터럴을 반환할 경우 괄호로 묶어줌
var func3 = () => ({foo: 1});

// 익명함수
const sum = (a,b) => a+b;
const func4 = () => console.log("empty call");
const func5 = (...rest) => rest.reduce((a,b)=>a+b,0);

console.log(sum(1,2));
func4();
console.log(func5(1,2,3,4));



