import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
    apiKey: "AIzaSyCi807QAoVApoJ6elxev6YGjZN2_3OjXi4",
    authDomain: "kidsagainstcovid.firebaseapp.com",
    databaseURL: "https://kidsagainstcovid.firebaseio.com",
    projectId: "kidsagainstcovid",
    storageBucket: "kidsagainstcovid.appspot.com",
    messagingSenderId: "508972433390",
    appId: "1:508972433390:web:d0a8226e3b1ed2436498ff",
    measurementId: "G-4H5R1CV0Q7"
  };

// Initialize Firebase
let fb = firebase.initializeApp(firebaseConfig);
fb.analytics();
export default fb;