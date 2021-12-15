import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKLwiQs1oU7DyuJsJNuvXqeMiFV-2tj7w",
  authDomain: "bstore-874ab.firebaseapp.com",
  projectId: "bstore-874ab",
  storageBucket: "bstore-874ab.appspot.com",
  messagingSenderId: "958020908852",
  appId: "1:958020908852:web:6e700319f939770efa5761",
  measurementId: "G-1SHLLGYR1V"
};

if (!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();




export {db, auth};
