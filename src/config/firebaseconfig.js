import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyCE30zaynjTJfSav-MNfypCBzwl8_vbSbM",
    authDomain: "ecg-app-e299f.firebaseapp.com",
    databaseURL: "https://ecg-app-e299f-default-rtdb.firebaseio.com",
    projectId: "ecg-app-e299f",
    storageBucket: "ecg-app-e299f.appspot.com",
    messagingSenderId: "982401711810",
    appId: "1:982401711810:web:2117e74328adcd7d95455b"
  };
  
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;
 
