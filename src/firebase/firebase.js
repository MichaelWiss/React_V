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

 database.ref().set({
     name: 'Michael Wiss',
     age: 36,
     job: 'software developer',
     location: {
     	city: 'New York',
     	country: 'United States'
     }
  }).then(() => {
  	console.log('Data is saved');
  }).catch((e) => {
     console.log('This failed.', e);
  });

  database.ref().update({
    job: 'Manager',
    'location/city': 'Boston'
  });

// database.ref()
//   .remove()
//   .then(() => {
//      console.log('Data was not removed');
//   }).catch((e) => {
//      console.log('Did not remove data', e);
//   });


 
