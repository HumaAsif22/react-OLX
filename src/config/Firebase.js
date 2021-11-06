// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { addDoc, collection, getFirestore, setDoc, query, doc , getDoc, getDocs, where, orderBy } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"



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
const storage = getStorage();

async function signupUser({email, password,fullName,age,phoneNumber,photoURL}){
    const {user: { uid }} = await createUserWithEmailAndPassword(auth, email, password,fullName)
    await updateProfile(auth.currentUser, {
      displayName: fullName, 
      age: age,
      phoneNumber: phoneNumber,
      photoURL: photoURL
    })
  

   await setDoc(doc(db, "users", uid), {
   email,fullName,age,uid
  })

  return uid
  
}


async function loginUser(email,password,fullName){
  const {user: { uid }} = await signInWithEmailAndPassword(auth, email, password,fullName)

  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  return {uid, ...docSnap.data()}
  
}

async function submitPost(data){
  //upload files to storage

  let { images } = data
  let imagesUrl = []
  
  for(let i = 0; i < images.length; i++){
    const storageRef = ref(storage, 'ads/' + images[i].name)
    await uploadBytes(storageRef, images[i])
    const url = await getDownloadURL(storageRef)
    imagesUrl.push(url)
  }
  data.images = imagesUrl
  //add posts to database
  await addDoc(collection(db, 'newPost'), data)
  alert('Data added successfully!')
}

async function getAllAds(){
  const q = query(collection(db, "newPost"))
  const querySnapshot = await getDocs(q)
  const currentAds = []
  querySnapshot.forEach(doc => {
    currentAds.push(doc.data())
  })
  return currentAds
}

// async function callAllData(){
//   const q = query(collection(db, "newPost"));

//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
  
// });

// }


async function callAllData(searchedItem){
  console.log("firebase searched data: ", searchedItem)
  let dataCopyArray = []

  if(searchedItem){
    const q = query(collection(db, "newPost"), where("title", "==", searchedItem))
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
    let dataCopy = doc.data()
    dataCopyArray.push(dataCopy)
  });
  }
  else{
    const q = query(collection(db, "newPost"), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
    let dataCopy = doc.data()
    dataCopyArray.push(dataCopy)
  });
  }
console.log('firebase ===>',dataCopyArray)
  return  dataCopyArray
}

function logout() {
  signOut(auth)
}

export{
    signupUser,
    loginUser,
    submitPost,
    getAllAds,
    callAllData,
    logout
}