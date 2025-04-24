import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import {
  ref,
  onValue,
  push,
  set,
  remove,
  update
} from 'firebase/database';
import { auth, database } from '../firebase';
import '../styles/Lobby.css';

function Lobby({ user }) {
  const [games, setGames] = useState([]);
  const [gameName, setGameName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Log user information for debugging
    console.log("Lobby - User info:", user);

    // Listen for classic games
    const gamesRef = ref(database, 'games');
    let gamesUnsubscribe;

    try {
      gamesUnsubscribe = onValue(gamesRef, (snapshot) => {
        try {
          const gamesData = snapshot.val();
          if (gamesData) {
            const allGames = Object.entries(gamesData).map(([id, game]) => ({
              id,
              ...game,
              // Ensure players object exists
              players: game.players || {}
            }));

            // Only get classic games
            const classicGames = allGames.filter(game => game.gameType === 'classic');

            // Check for stale games (games that haven't been updated in over 24 hours)
            const now = Date.now();
            const ONE_DAY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

            classicGames.forEach(game => {
              // If the game is older than 24 hours and has no players, delete it
              if (
                game.createdAt &&
                (now - game.createdAt > ONE_DAY) &&
                (!game.players || Object.keys(game.players).length === 0)
              ) {
                console.log(`Deleting stale game: ${game.id}`);
                remove(ref(database, `games/${game.id}`));
              }

              // If the game has no players, delete it regardless of age
              if (!game.players || Object.keys(game.players).length === 0) {
                console.log(`Deleting empty game: ${game.id}`);
                remove(ref(database, `games/${game.id}`));
              }
            });

            // Filter out games that are being deleted
            const activeGames = classicGames.filter(game =>
              game.players && Object.keys(game.players).length > 0
            );

            setGames(activeGames);
          } else {
            setGames([]);
          }
        } catch (error) {
          console.error("Error processing games data:", error);
          setGames([]);
        }
      }, (error) => {
        console.error("Database read error:", error);
        setError("Failed to load games. Please try again.");
      });
    } catch (error) {
      console.error("Error setting up games listener:", error);
      setError("Failed to connect to the game server. Please try again.");
    }

    return () => {
      try {
        if (gamesUnsubscribe) gamesUnsubscribe();
      } catch (error) {
        console.error("Error unsubscribing from games:", error);
      }
    };
  }, [user]);

  const handleCreateGame = async () => {
    if (!gameName.trim()) {
      setError('Please enter a game name');
      return;
    }

    try {
      console.log("Creating classic game with user:", user);

      // Safety check for user object
      if (!user || !user.uid) {
        setError('User authentication issue. Please try logging in again.');
        console.error("User object invalid:", user);
        return;
      }

      // Use the database path for games
      const gamesRef = ref(database, 'games');
      const newGameRef = push(gamesRef);

      // Generate a display name for the user
      const displayName = user.isAnonymous
        ? `Guest-${user.uid.substring(0, 5)}`
        : (user.displayName || `User-${user.uid.substring(0, 5)}`);

      const gameData = {
        name: gameName,
        createdBy: user.uid,
        creatorName: displayName,
        gameType: 'classic', // Always create classic games
        players: {
          [user.uid]: {
            id: user.uid,
            name: displayName,
            isReady: false,
            isAnonymous: !!user.isAnonymous
          }
        },
        status: 'waiting',
        createdAt: Date.now()
      };

      console.log("Creating classic game with data:", gameData);
      await set(newGameRef, gameData);

      // Navigate to the game route
      navigate(`/game/${newGameRef.key}`);
    } catch (error) {
      console.error("Error creating game:", error);
      setError(error.message || "Failed to create game. Please try again.");
    }
  };

  const handleJoinGame = async (gameId) => {
    try {
      console.log("Joining classic game with user:", user);

      // Safety check for user object
      if (!user || !user.uid) {
        setError('User authentication issue. Please try logging in again.');
        console.error("User object invalid:", user);
        return;
      }

      // Generate a display name for the user
      const displayName = user.isAnonymous
        ? `Guest-${user.uid.substring(0, 5)}`
        : (user.displayName || `User-${user.uid.substring(0, 5)}`);

      // Use the database path for the game
      const gameRef = ref(database, `games/${gameId}/players/${user.uid}`);

      const playerData = {
        id: user.uid,
        name: displayName,
        isReady: false,
        isAnonymous: !!user.isAnonymous,
        joinedAt: Date.now()
      };

      console.log("Joining game with player data:", playerData);
      await set(gameRef, playerData);

      // Navigate to the game route
      navigate(`/game/${gameId}`);
    } catch (error) {
      console.error("Error joining game:", error);
      setError(error.message || "Failed to join game. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="lobby-container">
      <div className="lobby-header">
        <h2>Tank Wars Lobby</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="create-game">
        <div className="game-form">
          <input
            type="text"
            placeholder="Enter game name"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
          />
          <button onClick={handleCreateGame}>
            Create New Game
          </button>
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="games-list">
        <h3>Available Games</h3>
        {games.length === 0 ? (
          <p className="no-games">No games available. Create one!</p>
        ) : (
          games.map((game) => (
            <div key={game.id} className="game-item">
              <div className="game-info">
                <h4>{game.name || 'Unnamed Game'}</h4>
                <p>Created by: {game.creatorName || 'Unknown'}</p>
                <p>Players: {Object.keys(game.players || {}).length}/2</p>
                <p>Status: {game.status || 'unknown'}</p>
              </div>
              {/* Safe check for user and game status */}
              {user && user.uid && game.status === 'waiting' &&
               game.players && !game.players[user.uid] && (
                <button
                  className="join-btn"
                  onClick={() => handleJoinGame(game.id)}
                >
                  Join
                </button>
              )}
              {/* Safe check for user and player membership */}
              {user && user.uid && game.players && game.players[user.uid] && (
                <button
                  className="resume-btn"
                  onClick={() => navigate(`/game/${game.id}`)}
                >
                  Resume
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Lobby;
