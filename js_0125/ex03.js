// Inner Function (const vs var)

//var  value = 'hello!';
const  value = 'hello!';

function myFunction() {
	//var value = 'bye!';
	const value = 'bye!';
	if(true){	
        	//var value = 'world';
		const value = 'world';
                console.log('block scope : ');
                console.log(value);
	}
	console.log('function scope: ');
	console.log(value);
}

myFunction();
console.log('global scope : ');
console.log(value);
