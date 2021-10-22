// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABoPUvQRYNuMHFDW7eWWaO8esir5lp1X4",
  authDomain: "practice2-b8ea2.firebaseapp.com",
  databaseURL: "https://practice2-b8ea2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "practice2-b8ea2",
  storageBucket: "practice2-b8ea2.appspot.com",
  messagingSenderId: "124503821874",
  appId: "1:124503821874:web:442bfa3171b273ad87f62b",
  measurementId: "G-9FS7QJPKB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

function signupUser({email, password,fullName,age}){
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   alert("congo");

   addDoc(collection(db, "users"), {
   email,fullName,age
  }).then(()=> {
      alert("congo");
  }).catch((error) => {
      alert(error.message)
  })
  })
  .catch((error) => {
    alert(error.message);
  });
}


function loginUser(email,password){
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert("Logged In")
  })
  .catch((error) => {
    alert(error.message);
  });
}
export{
    signupUser,
    loginUser
}