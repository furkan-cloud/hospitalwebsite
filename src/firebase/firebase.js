import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyC45hm4Cu69nk2wEVgZ_hZqUkwN9NhgWkk",
  authDomain: "klinify.firebaseapp.com",
  projectId: "klinify",
  storageBucket: "klinify.appspot.com",
  messagingSenderId: "962346153253",
  appId: "1:962346153253:web:e299c0fb5268575ef856cc",
  measurementId: "G-05QTNPS0QH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export{db}