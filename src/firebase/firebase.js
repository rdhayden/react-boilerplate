import * as firebase from 'firebase';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// ref returns a reference to somewhere in the database (root in this case)
// set returns a promise
// database
//   .ref()
//   .set({
//     name: 'Robin Hayden',
//     age: 26,
//     isSingle: false,
//     location: {
//       city: 'London',
//       country: 'UK',
//     },
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch((e) => {
//     console.log('This failed', e);
//   });

// database.ref('age').set(48);
// database.ref('location/city').set('Manchester');

// database
//   .ref('attributes')
//   .set({
//     height: 185,
//     weight: 80,
//   })
//   .then(() => {
//     console.log('Attributes changed');
//   })
//   .catch((e) => {
//     console.log('This failed', e);
//   });

// calling set(null) is equivelent to remove
// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('isSingle removed');
//   })
//   .catch((e) => {
//     console.log('This failed', e);
//   });

// database
//   .ref()
//   .update({
//     name: 'Robin',
//     age: 30,
//     isSingle: null,
//     job: 'Be awesome',
//   })
//   .then(() => {
//     console.log('update success');
//   })
//   .catch((e) => {
//     console.log('This failed', e);
//   });

// // updating child objects using /
// database
//   .ref()
//   .update({
//     'location/city': 'Southampton',
//     job: 'Be awesome',
//   })
//   .then(() => {
//     console.log('update success');
//   })
//   .catch((e) => {
//     console.log('This failed', e);
//   });

// // subscribe to changes
// const onValueChange = database.ref().on(
//   'value',
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (error) => {
//     console.log('Error with subscription fetching data', error);
//   }
// );

// setTimeout(() => {
//   database.ref('age').set(33);
// }, 3500);

// //cancel subscription
// setTimeout(() => {
//   // as we only have 1 subscription we could have also just call off() with no args to
//   // cancel all subscriptions
//   //database.ref().off();
//   database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(48);
// }, 10500);

// const onValueChange = database.ref().on(
//   'value',
//   (snapshot) => {
//     const state = snapshot.val();
//     console.log(
//       `${state.name} is a ${state.job} living in ${state.location.city}`
//     );
//   },
//   (error) => {
//     console.log('subscription failed', e);
//   }
// );

// setTimeout(() => {
//   database.ref('job').set('Director');
//   database.ref('location/city').set('London');
// }, 3500);

// database
//   .ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// // push generates entry in the form {autoGeneratedId: { myProperty: myValue, ...}}
// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'bla bla bla',
//   amount: 109500,
//   createdAt: 876876876796,
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// setTimeout(() => {
//   database.ref('expenses').push({
//     description: 'Barcelona trip',
//     note: 'bla bla bla',
//     amount: 340000,
//     createdAt: 4568847635737,
//   });
// }, 3500);

// subscribe to child removal
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // subscribe to child changes
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // subscribe to child added - NOTE IT gets called for all existing children not just for a new added one
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });