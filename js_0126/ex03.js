// var/let for문 바인딩 비교

for(var i=0;i<3;i++){
	setTimeout(function() {
		console.log('setTimeOut', i)
	});
}


for(let i=0;i<3;i++){
	setTimeout(function() {
		console.log('setTimeOut', i)
	});
}

