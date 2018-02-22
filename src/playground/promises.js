const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({
            name:'Michael',
            age: 36
		});
	}, 5000);
});

console.log('before');

promise.then((data) => {
	console.log('1', data);
});



console.log('after');