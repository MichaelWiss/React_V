'use strict';

var nameVar = 'Michael';
nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = 'Hugh';
console.log('nameLet', nameLet);

var nameConst = 'Frank';

console.log('nameConst', nameConst);

var fullName = 'Andrew Mead';

if (fullName) {
	var firstName = fullName.split(' ')[0];
	console.log(firstName);
}
