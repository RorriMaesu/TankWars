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
  const [classicGames, setClassicGames] = useState([]);
  const [gameName, setGameName] = useState('');
  const [gameType, setGameType] = useState('modern'); // 'modern' or 'classic'
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Log user information for debugging
    console.log("Lobby - User info:", user);

    // Listen for modern games
    const gamesRef = ref(database, 'games');
    let gamesUnsubscribe;

    try {
      gamesUnsubscribe = onValue(gamesRef, (snapshot) => {
        try {
          const gamesData = snapshot.val();
          if (gamesData) {
            const gamesList = Object.entries(gamesData)
              .map(([id, game]) => ({
                id,
                ...game,
                // Ensure players object exists
                players: game.players || {}
              }))
              .filter(game => !game.gameType || game.gameType === 'modern');

            setGames(gamesList);
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

    // Listen for classic games
    const classicGamesRef = ref(database, 'classicGames');
    let classicGamesUnsubscribe;

    try {
      classicGamesUnsubscribe = onValue(classicGamesRef, (snapshot) => {
        try {
          const classicGamesData = snapshot.val();
          if (classicGamesData) {
            const classicGamesList = Object.entries(classicGamesData).map(([id, game]) => ({
              id,
              ...game,
              // Ensure players object exists
              players: game.players || {},
              gameType: 'classic'
            }));

            setClassicGames(classicGamesList);
          } else {
            setClassicGames([]);
          }
        } catch (error) {
          console.error("Error processing classic games data:", error);
          setClassicGames([]);
        }
      }, (error) => {
        console.error("Classic games database read error:", error);
      });
    } catch (error) {
      console.error("Error setting up classic games listener:", error);
    }

    return () => {
      try {
        if (gamesUnsubscribe) gamesUnsubscribe();
        if (classicGamesUnsubscribe) classicGamesUnsubscribe();
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
      console.log("Creating game with user:", user);

      // Safety check for user object
      if (!user || !user.uid) {
        setError('User authentication issue. Please try logging in again.');
        console.error("User object invalid:", user);
        return;
      }

      // Determine which database reference to use based on game type
      const dbPath = gameType === 'classic' ? 'classicGames' : 'games';
      const gamesRef = ref(database, dbPath);
      const newGameRef = push(gamesRef);

      // Generate a display name for the user
      const displayName = user.isAnonymous
        ? `Guest-${user.uid.substring(0, 5)}`
        : (user.displayName || `User-${user.uid.substring(0, 5)}`);

      const gameData = {
        name: gameName,
        createdBy: user.uid,
        creatorName: displayName,
        gameType: gameType,
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

      console.log(`Creating ${gameType} game with data:`, gameData);
      await set(newGameRef, gameData);

      // Navigate to the appropriate game route
      const route = gameType === 'classic' ? '/classic/' : '/game/';
      navigate(`${route}${newGameRef.key}`);
    } catch (error) {
      console.error("Error creating game:", error);
      setError(error.message || "Failed to create game. Please try again.");
    }
  };

  const handleJoinGame = async (gameId, isClassic = false) => {
    try {
      console.log("Joining game with user:", user);

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

      // Determine which database path to use
      const dbPath = isClassic ? 'classicGames' : 'games';
      const gameRef = ref(database, `${dbPath}/${gameId}/players/${user.uid}`);

      const playerData = {
        id: user.uid,
        name: displayName,
        isReady: false,
        isAnonymous: !!user.isAnonymous,
        joinedAt: Date.now()
      };

      console.log("Joining game with player data:", playerData);
      await set(gameRef, playerData);

      // Navigate to the appropriate game route
      const route = isClassic ? '/classic/' : '/game/';
      navigate(`${route}${gameId}`);
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
        <h2>Game Lobby</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="create-game">
        <div className="game-type-selector">
          <button
            className={`game-type-btn ${gameType === 'modern' ? 'active' : ''}`}
            onClick={() => setGameType('modern')}
          >
            Modern
          </button>
          <button
            className={`game-type-btn ${gameType === 'classic' ? 'active' : ''}`}
            onClick={() => setGameType('classic')}
          >
            Classic
          </button>
        </div>

        <div className="game-form">
          <input
            type="text"
            placeholder="Enter game name"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
          />
          <button onClick={handleCreateGame}>
            Create {gameType === 'classic' ? 'Classic' : 'Modern'} Game
          </button>
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="games-tabs">
        <button
          className={`tab-btn ${gameType === 'modern' ? 'active' : ''}`}
          onClick={() => setGameType('modern')}
        >
          Modern Games
        </button>
        <button
          className={`tab-btn ${gameType === 'classic' ? 'active' : ''}`}
          onClick={() => setGameType('classic')}
        >
          Classic Games
        </button>
      </div>

      {gameType === 'modern' ? (
        <div className="games-list">
          <h3>Available Modern Games</h3>
          {games.length === 0 ? (
            <p className="no-games">No modern games available. Create one!</p>
          ) : (
            games.map((game) => (
              <div key={game.id} className="game-item">
                <div className="game-info">
                  <h4>{game.name || 'Unnamed Game'}</h4>
                  <p>Created by: {game.creatorName || 'Unknown'}</p>
                  <p>Players: {Object.keys(game.players || {}).length}/4</p>
                  <p>Status: {game.status || 'unknown'}</p>
                </div>
                {/* Safe check for user and game status */}
                {user && user.uid && game.status === 'waiting' &&
                 game.players && !game.players[user.uid] && (
                  <button
                    className="join-btn"
                    onClick={() => handleJoinGame(game.id, false)}
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
      ) : (
        <div className="games-list">
          <h3>Available Classic Games</h3>
          {classicGames.length === 0 ? (
            <p className="no-games">No classic games available. Create one!</p>
          ) : (
            classicGames.map((game) => (
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
                    onClick={() => handleJoinGame(game.id, true)}
                  >
                    Join
                  </button>
                )}
                {/* Safe check for user and player membership */}
                {user && user.uid && game.players && game.players[user.uid] && (
                  <button
                    className="resume-btn"
                    onClick={() => navigate(`/classic/${game.id}`)}
                  >
                    Resume
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Lobby;
