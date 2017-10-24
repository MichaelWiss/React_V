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

const book ={
	title: 'Ego is the Enemy',
	author: "Ryan Holiday",
	publisher: {
		name: 'Penguin'
	}
};

const { name: publisherName = 'self-published' } = book.publisher;
  console.log(publisherName);
