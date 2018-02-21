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

  firebase.database().ref().set({
     name: 'Michael Wiss'
  });