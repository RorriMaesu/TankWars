import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously
} from 'firebase/auth';
import { auth } from '../firebase';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form submitted. Mode:", isSignUp ? "Sign Up" : "Login");
    console.log("Email:", email);
    setError('');
    setLoading(true);

    try {
      console.log("Attempting to authenticate with email/password...");
      if (isSignUp) {
        console.log("Creating new user account...");
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created successfully:", userCredential.user.uid);
      } else {
        console.log("Signing in existing user...");
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in successfully:", userCredential.user.uid);
      }
    } catch (error) {
      console.error("Authentication error:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAnonymousLogin = async () => {
    console.log("Anonymous login requested");
    setError('');
    setLoading(true);

    try {
      console.log("Attempting anonymous sign in...");
      const userCredential = await signInAnonymously(auth);
      console.log("Anonymous user signed in successfully:", userCredential.user.uid);
    } catch (error) {
      console.error("Anonymous authentication error:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>

      <button
        className="toggle-auth"
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp ? 'Already have an account? Login' : 'Need an account? Sign Up'}
      </button>

      <div className="divider">or</div>

      <button
        className="anonymous-login"
        onClick={handleAnonymousLogin}
        disabled={loading}
      >
        Play as Guest
      </button>
    </div>
  );
}

export default Login;
