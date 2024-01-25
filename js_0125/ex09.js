// 상속 관련 예제

class Food {
	constructor(name){
		this.name = name;
		this.brands = [];
	}

	addBrand(brand){
		this.brands.push(brand);
	}

	print(){
		console.log(`${this.name}을/를 파는 음식점들 : `);
		console.log(this.brands.join(', '));
	}
}

class Pizza extends Food {
	constructor(name){
		super(name);
	}
}

class Chicken extends Food {
	constructor(name){
		super(name);
	}
}

const pizza = new Pizza('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');
pizza.print();

const chicken  = new Chicken('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('BBQ');
chicken.print();
