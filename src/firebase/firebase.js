import * as firebase from "firebase";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

// use this key in dev environment;
// const config = {
// 	apiKey: 'AIzaSyBJUvaTyUcHxqw28JPjouon0ujigLi0zLQ',
// 	authDomain: 'expensify-c5224.firebaseapp.com',
// 	databaseURL: 'https://expensify-c5224.firebaseio.com',
// 	projectId: '43744907099',
// 	storageBucket: 'expensify-c5224',
// 	messagingSenderId: 'expensify-c5224.appspot.com',
// };


  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };
