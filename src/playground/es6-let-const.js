var nameVar = 'Michael';
nameVar = 'Mike'
console.log('nameVar', nameVar);

let nameLet = 'Hugh';
console.log('nameLet', nameLet);

const nameConst = 'Frank';

console.log('nameConst', nameConst); 


const fullName = 'Andrew Mead';
let firstName;

if (fullName) {
	firstName = fullName.split(' ')[0];
	console.log(firstName);
}

console.log(firstName);
