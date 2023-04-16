import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

var firebaseConfig = {
  apiKey: "AIzaSyB7-2feZtRbkAteYdlbqc3YGK1dkYnTBbA",
  authDomain: "otpdemo-b3d89.firebaseapp.com",
  projectId: "otpdemo-b3d89",
  storageBucket: "otpdemo-b3d89.appspot.com",
  messagingSenderId: "118935096002",
  appId: "1:118935096002:web:f45da186b1db087425895b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
