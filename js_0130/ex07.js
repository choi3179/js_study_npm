// Arrow function expression - 연결

const f = b => a => a + b + 1;
console.log(f(1));
console.log(f(1)(10));
