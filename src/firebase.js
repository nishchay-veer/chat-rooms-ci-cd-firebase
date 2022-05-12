// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import initializeApp from ''
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'
// import { initializeApp } from 'firebase/firebase-app';
// import { getAuth , GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js'
// import { getAuth, GoogleAuthProvider } from 'firebase/firebase-auth';
// import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js'
// import { getFirestore } from 'firebase/firebase-firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBAaJJaCOpx4b-HbZxcoe1so2qZ-67dcx8",
  authDomain: "chat-rooms-7c8b7.firebaseapp.com",
  projectId: "chat-rooms-7c8b7",
  storageBucket: "chat-rooms-7c8b7.appspot.com",
  messagingSenderId: "30847757039",
  appId: "1:30847757039:web:42948eaaabf76665dd891a",
  measurementId: "G-E9DZKTE525"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;