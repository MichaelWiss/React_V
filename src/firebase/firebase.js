import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB5CThmCjH690y293sa9WkORR6A7tdCz6w",
    authDomain: "expensify-wiss.firebaseapp.com",
    databaseURL: "https://expensify-wiss.firebaseio.com",
    projectId: "expensify-wiss",
    storageBucket: "expensify-wiss.appspot.com",
    messagingSenderId: "134262336316"
};

firebase.initializeApp(config);

const database = firebase.database();

// database.ref('expenses')
//    .once('value')
//    .then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//          expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//          });
//       });

//       console.log(expenses);
//    });   

database.ref('expenses').on('value', (snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
         expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
         });
      });

      console.log(expenses);
});


// database.ref('expenses').push({
//     title: 'Expense 1',
//     body: 'New Phone'
// });







// database.ref('notes/-L6NQGEl77ai74_W9pZk').remove();


// database.ref('notes').push({
// 	title: 'Course Topics',
// 	body: 'React Native, Angular, Python'
// });

// database.ref('notes/-L6NQGEl77ai74_W9pZk').update({
// 	body: 'Buy food'
// });

// const firebaseNotes = {
//     notes: {
//     	nobunaga: {
//     		title: 'First note!',
//     		body: 'This is my note'
//     	},
//     	Uesegi:{
//     		title: 'Another note!',
// 	        body: 'This is my note'
//     	}
//     }
// };

// const notes = [{
// 	id: '12',
// 	title: 'First note!',
// 	body: 'This is my note'
// },{
// 	id: '786wre',
// 	title: 'Another note!',
// 	body: 'This is my note'

// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//    console.log(snapshot.val());
// }, (e) => {
// 	console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   	database.ref('age').set(48);
//   }, 3500);

//  setTimeout(() => {
//   	database.ref().off('value', onValueChange);
//   }, 7000);

//   setTimeout(() => {
//   	database.ref('age').set(58);
//   }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//     })
//     .catch((e) => {
//     	console.log('Error fetching data', e);
//     });





 // database.ref().set({
 //     name: 'Michael Wiss',
 //     age: 36,
 //     stressLevel: 6,
 //     job: {
 //     	   title: 'software developer',
 //           company: 'Google'
 //       },
 //     location: {
 //     	city: 'New York',
 //     	country: 'United States'
 //     }
 //  }).then(() => {
 //  	console.log('Data is saved');
 //  }).catch((e) => {
 //     console.log('This failed.', e);
 //  });

 //  database.ref().update({
 //  	stressLevel: 9,
 //    'job/company': 'Amazon',
 //    'location/city': 'Seattle'
 //  });

// database.ref()
//   .remove()
//   .then(() => {
//      console.log('Data was not removed');
//   }).catch((e) => {
//      console.log('Did not remove data', e);
//   });


 
