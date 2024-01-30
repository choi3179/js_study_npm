// Destructuring assginment > object

const o = {p:42,q:true};
const {p,q} = o;
console.log(p,q);

// 선언에서 분리한 할당
let a,b;
({a,b} = {a:1,b:2});
console.log(a,b);

// 새로운 변수 이름으로 할당
const k = {p:42, q: true};
const {p:foo, q:bar} = k;
console.log(foo, bar);;
