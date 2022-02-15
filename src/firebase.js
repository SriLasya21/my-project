import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA32HXQmFj7SEVXO9mz0wfwesCqkb8twH8",
  authDomain: "my-project-3163d.firebaseapp.com",
  projectId: "my-project-3163d",
  storageBucket: "my-project-3163d.appspot.com",
  messagingSenderId: "976606088542",
  appId: "1:976606088542:web:75f23f53501555c1e1d3cf",
  measurementId: "G-K3LH8MP9C9",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };