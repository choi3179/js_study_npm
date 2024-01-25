// 프로토타입 - prototype
// 프르토타입은 객체 생성자 함수 아래에 설정 가능

function Animal(type, name, sound) {
	this.type = type;
	this.name = name;
	this.sound = sound;

}

Animal.prototype.say = function() {
	console.log(this.sound);
}

Animal.prototype.sharedValue = 1;

const dog = new Animal('개','멍멍이','멍멍');
const cat = new Animal('고양이','야옹이','야옹');

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);
