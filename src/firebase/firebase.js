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


database.ref()
    .once('value')
    .then(() => {

    })
    .catch((e) => {
    	console.log('Error fetching data', e);
    });





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


 
