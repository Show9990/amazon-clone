//import firebase from "firebase/app";
//import "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration and initialization code here



const firebaseConfig = ({
    apiKey: "AIzaSyCxqVn5MkVX-U1yb0_M6PGRB6VZe_9kvYk",
    authDomain: "clone-72fac.firebaseapp.com",
    projectId: "clone-72fac",
    storageBucket: "clone-72fac.appspot.com",
    messagingSenderId: "143012120204",
    appId: "1:143012120204:web:711c089fda8eddcb829da9",
    measurementId: "G-DZRNYC18EX"


});
const firebaseApp = initializeApp(firebaseConfig);


//const auth=firebase.auth();
//export {auth};


const auth = getAuth(firebaseApp);
export { auth };