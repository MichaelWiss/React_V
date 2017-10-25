// const person = {
// 	name: 'Michael',
// 	age: 36,
// 	location: {
// 		city: 'New York',
// 		temp: 45
// 	}
// };

// const { name, age } = person;

// console.log(`${person.name} is ${person.age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book ={
// 	title: 'Ego is the Enemy',
// 	author: "Ryan Holiday",
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'self-published' } = book.publisher;
//   console.log(publisherName);

//array destructuring

const address = ['1299 S Juniper St', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`);





const item = ['Coffee (hot)', '2.00', '2.50', '2.75'];

const [coffee, small, medium, large] = item
console.log(`A medium ${coffee} costs ${medium}`);







