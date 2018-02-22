const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is my resolved data');
		resolve('This is my other resloved data');
	}, 5000);
});

console.log('before');

promise.then((data) => {
	console.log('1', data);
});



console.log('after');