import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAvyDrSdJ0Rdn2Hg1rVl2X0wBAY5fw1vC8",
    authDomain: "adminuserpanel-f4f51.firebaseapp.com",
    projectId: "adminuserpanel-f4f51",
    storageBucket: "adminuserpanel-f4f51.appspot.com",
    messagingSenderId: "584152403091",
    appId: "1:584152403091:web:263732a2d09a841fb95166",
    measurementId: "G-LHGR00WQ0Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the necessary Firebase modules
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
