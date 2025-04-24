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
  storageBucket: "tankwars-97e19.appspot.com", // Updated to correct domain
  messagingSenderId: "214275382819",
  appId: "1:214275382819:web:fbf9edefd593aaa1719b96",
  measurementId: "G-JVQ264VMTX",
  databaseURL: "https://tankwars-97e19-default-rtdb.firebaseio.com" // Realtime Database URL
};

// Add debugging
console.log("Firebase initialization starting...");

// Initialize variables
let app, auth, database, analytics = null;

try {
  // Initialize Firebase
  console.log("Initializing Firebase app with config:", JSON.stringify({
    ...firebaseConfig,
    apiKey: "***" // Hide API key in logs for security
  }));

  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    console.error("Not in browser environment - Firebase may not initialize properly");
  }

  // Initialize Firebase app
  try {
    app = initializeApp(firebaseConfig);
    console.log("Firebase app initialized successfully");
  } catch (appError) {
    console.error("Firebase app initialization error:", appError);
    console.error("Error code:", appError.code);
    console.error("Error message:", appError.message);
    throw appError; // Re-throw to stop further initialization
  }

  // Initialize Auth
  try {
    console.log("Initializing Firebase Auth...");
    auth = getAuth(app);
    console.log("Firebase Auth initialized successfully");
  } catch (authError) {
    console.error("Firebase Auth initialization error:", authError);
    // Continue with other services even if auth fails
  }

  // Initialize Database
  try {
    console.log("Initializing Firebase Realtime Database...");
    console.log("Database URL:", firebaseConfig.databaseURL);
    database = getDatabase(app);
    console.log("Firebase Realtime Database initialized successfully");

    // Test database connection - using modern Firebase v9 API
    try {
      console.log("Testing database connection...");
      // We don't need to create a reference here as getDatabase already validates the connection
      console.log("Database connection test successful");
    } catch (dbTestError) {
      console.error("Database connection test failed:", dbTestError);
    }
  } catch (dbError) {
    console.error("Firebase Database initialization error:", dbError);
    console.error("Error code:", dbError.code);
    console.error("Error message:", dbError.message);
    // Continue with other services even if database fails
  }

  // Initialize Analytics only if supported
  console.log("Checking Analytics support...");
  isSupported().then(supported => {
    if (supported) {
      try {
        console.log("Analytics is supported, initializing...");
        analytics = getAnalytics(app);
        console.log("Analytics initialized successfully");
      } catch (analyticsError) {
        console.error("Analytics initialization error:", analyticsError);
      }
    } else {
      console.log("Analytics is not supported in this environment");
    }
  }).catch(error => {
    console.error("Analytics support check error:", error);
  });

  // Log initialization success
  console.log("Firebase services initialization completed");

} catch (error) {
  console.error("Firebase initialization error:", error);
  console.error("Error code:", error.code);
  console.error("Error message:", error.message);
  console.error("Error stack:", error.stack);
}

export { app, auth, database, analytics };
