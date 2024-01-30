// 배열 구조 분해 할당

const foo = ["one","two","three"];
const [one,two,three] = foo;
console.log(one, two, three);

const o = {p:42,q: true};
const {p,q} = o;
console.log(p,q)

let a,b;
[a,b]=[1,2];
console.log(a,b);

const[x=5,y=7,z=9] = [1,null];
console.log(x,y,z);;
