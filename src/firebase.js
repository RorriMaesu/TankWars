// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHA78mlZCIB1n6I9ngZLD2tc7SQjiBY0c",
  authDomain: "tankwars-97e19.firebaseapp.com",
  projectId: "tankwars-97e19",
  storageBucket: "tankwars-97e19.firebasestorage.app",
  messagingSenderId: "214275382819",
  appId: "1:214275382819:web:fbf9edefd593aaa1719b96",
  measurementId: "G-JVQ264VMTX",
  databaseURL: "https://tankwars-97e19-default-rtdb.firebaseio.com" // Add this line for Realtime Database
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { app, auth, database, analytics };
