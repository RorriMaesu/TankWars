import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Login from './components/Login'
import Lobby from './components/Lobby'
import Game from './components/Game'
import ClassicGame from './components/ClassicGame'
import Debug from './components/Debug'
import './styles/App.css'

// Log environment information
console.log("App starting...");
console.log("Environment:", process.env.NODE_ENV);
console.log("Base URL:", import.meta.env.BASE_URL);
console.log("Current URL:", window.location.href);
console.log("Pathname:", window.location.pathname);

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("App.jsx: Setting up auth state listener");

    try {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("Auth state changed:", currentUser ? "User logged in" : "No user");
        if (currentUser) {
          console.log("User ID:", currentUser.uid);
          console.log("Anonymous:", currentUser.isAnonymous);
        }
        setUser(currentUser);
        setLoading(false);
      }, (error) => {
        console.error("Auth state change error:", error);
        setLoading(false);
      });

      return () => {
        console.log("Unsubscribing from auth state listener");
        unsubscribe();
      };
    } catch (error) {
      console.error("Error setting up auth state listener:", error);
      setLoading(false);
    }
  }, [])

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="app">
      <h1>Tank Wars</h1>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/lobby" /> : <Login />}
        />
        <Route
          path="/lobby"
          element={user ? <Lobby user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/game/:gameId"
          element={user ? <Game user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/classic/:gameId"
          element={user ? <ClassicGame user={user} /> : <Navigate to="/" />}
        />
      </Routes>

      {/* Debug panel - remove in production */}
      {process.env.NODE_ENV !== 'production' && <Debug />}
    </div>
  )
}

export default App
