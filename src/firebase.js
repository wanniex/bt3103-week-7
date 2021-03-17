import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB5zKIevaTYjTp0Ysd0CQ8CeFOmFup6L5E",
  authDomain: "bt3103-week-6-c0314.firebaseapp.com",
  projectId: "bt3103-week-6-c0314",
  storageBucket: "bt3103-week-6-c0314.appspot.com",
  messagingSenderId: "241448939502",
  appId: "1:241448939502:web:a36e5a997133c5141968ff"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export default db;
