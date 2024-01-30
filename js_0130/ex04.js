// Destructuring assignment > Deeper

const metadata = {
	title: "Scratchpad",
	translations: [ {
		locale: "de",
		localization_tags: [],
		title: "JS1"
	}, {
		locale: "de",
		localization_tags: [],
		title: "JS2"
	}],
	url: "naver.com"
};

const {title: engTitle, translations: [{title:t1},{title:t2}] } = metadata;
console.log(engTitle,t1,t2)

// for...of 반복문과 구조 분해 할당
const people = [{
	name: "Mike Smith",
	family: {
		mother: "Jane Smith",
		father: "Harry Smith",
		sister: "Samantha Smith"
	},
	age: 35
}, {
	name: "Tom Jones",
	family: {
		mother: "Norah Jones",
		father: "Richard Jones",
		brother: "Howard Jones"
	},
	age: 25
}];

for(let {name: n, family: {father: f} } of people) {
	console.log("Name: " + n + ", Father: " + f);
}

// 함수 매개변수로 전달된 객체에서 필드 가져오기
function userId({id}) {
	return id;
}
function whois({
	displayName: displayName,
	fullName: {firstName:name}
}) {
	console.log(displayName + " is " + name);
}

const user = {
	id: 42,
	displayName : "jdoe",
	fullName: {firstName : "John", lastName: "Doe"}
}

console.log("userId: " + userId(user));
whois(user);
