// Array.prototype.forEach

const array = [1,2,3,4,5];
array.forEach(n=>console.log(n));

// Array.prototype.map
function func(n) {
	return n*n;
};
const r = array.map(n=>func(n));
console.log(r);

// Array.prototype.filter
const f = array.filter(n=>n%2);
console.log(f);

// Array.prototype.reduce
const re = array.reduce((a,b)=> a+b,0);
console.log(re)

// Array.prototype.every
console.log(array.every(n=>n>0));
console.log(array.every(n=>n>4));
// Array.prototype.some
console.log(array.some(n=>n>100));
console.log(array.some(n=>n>4));

