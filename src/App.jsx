import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Login from './components/Login'
import Lobby from './components/Lobby'
import Game from './components/Game'
import './styles/App.css'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
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
      </Routes>
    </div>
  )
}

export default App
