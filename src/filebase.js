import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQ4lzNYO3Sameof3is0BTxyb-xomzQNoI",
    authDomain: "linkedin-clone-neung.firebaseapp.com",
    projectId: "linkedin-clone-neung",
    storageBucket: "linkedin-clone-neung.appspot.com",
    messagingSenderId: "1033820178850",
    appId: "1:1033820178850:web:5938228873278660390afb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db= firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };

