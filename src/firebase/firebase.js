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
     isSingle: false,
     location: {
     	city: 'New York',
     	country: 'United States'
     }
  }).then(() => {
  	console.log('Data is saved');
  }).catch((e) => {
     console.log('This failed.', e);
  });

 //database.ref().set('This is my data');

 database.ref('age').set(27);
 database.ref('location/city').set('Tokyo');

 database.ref('attributes').set({
    height: 75,
    weight: 150
 }).then(() => {
 	console.log('Second set call worked');
 }).catch((e) => {
 	console.log('Things didnt work for the second error', e);
 });