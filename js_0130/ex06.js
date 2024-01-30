// Arrow function expression

// 메소드로 사용할 경우 this 바인딩 불가
var obj = {
	i: 10,
	b: () => console.log(this.i, this),
	c: function() {
		console.log(this.i, this)
	}
};

obj.b();
obj.c();
