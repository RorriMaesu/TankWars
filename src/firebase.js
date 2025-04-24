// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics, isSupported } from "firebase/analytics";

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

// Add debugging
console.log("Firebase initialization starting...");

// Initialize variables
let app, auth, database, analytics = null;

try {
  // Initialize Firebase
  console.log("Initializing Firebase app with config:", JSON.stringify(firebaseConfig));
  app = initializeApp(firebaseConfig);
  console.log("Firebase app initialized successfully");

  // Initialize Auth
  console.log("Initializing Firebase Auth...");
  auth = getAuth(app);
  console.log("Firebase Auth initialized successfully");

  // Initialize Database
  console.log("Initializing Firebase Realtime Database...");
  database = getDatabase(app);
  console.log("Firebase Realtime Database initialized successfully");

  // Initialize Analytics only if supported
  console.log("Checking Analytics support...");
  isSupported().then(supported => {
    if (supported) {
      console.log("Analytics is supported, initializing...");
      analytics = getAnalytics(app);
      console.log("Analytics initialized successfully");
    } else {
      console.log("Analytics is not supported in this environment");
    }
  }).catch(error => {
    console.error("Analytics error:", error);
  });
} catch (error) {
  console.error("Firebase initialization error:", error);
}

export { app, auth, database, analytics };
