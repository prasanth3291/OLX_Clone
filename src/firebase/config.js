import firebase from 'firebase/app'; // Import only the firebase/app module
import 'firebase/auth'; // Import additional Firebase services as needed
import 'firebase/firestore';
import 'firebase/storage';

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg0zNjaSM8r4tgHmoE7GF4LbvAuGrgmSw",
  authDomain: "olx-clone-7a39b.firebaseapp.com",
  projectId: "olx-clone-7a39b",
  storageBucket: "olx-clone-7a39b.appspot.com",
  messagingSenderId: "993374233580",
  appId: "1:993374233580:web:c4daf083b2f266f60756c9",
  measurementId: "G-R94VJFPHGL"
};

// Check if Firebase is not already initialized to avoid errors
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig); // Initialize Firebase
}

export default firebase; // Export the initialized Firebase instance
