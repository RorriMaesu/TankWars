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
    const gamesRef = ref(database, 'games');
    
    const unsubscribe = onValue(gamesRef, (snapshot) => {
      const gamesData = snapshot.val();
      if (gamesData) {
        const gamesList = Object.entries(gamesData).map(([id, game]) => ({
          id,
          ...game
        }));
        setGames(gamesList);
      } else {
        setGames([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleCreateGame = async () => {
    if (!gameName.trim()) {
      setError('Please enter a game name');
      return;
    }

    try {
      const gamesRef = ref(database, 'games');
      const newGameRef = push(gamesRef);
      
      await set(newGameRef, {
        name: gameName,
        createdBy: user.uid,
        creatorName: user.displayName || 'Anonymous',
        players: {
          [user.uid]: {
            id: user.uid,
            name: user.displayName || 'Anonymous',
            isReady: false
          }
        },
        status: 'waiting',
        createdAt: Date.now()
      });

      navigate(`/game/${newGameRef.key}`);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleJoinGame = async (gameId) => {
    try {
      const gameRef = ref(database, `games/${gameId}/players/${user.uid}`);
      
      await set(gameRef, {
        id: user.uid,
        name: user.displayName || 'Anonymous',
        isReady: false
      });

      navigate(`/game/${gameId}`);
    } catch (error) {
      setError(error.message);
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
        <input
          type="text"
          placeholder="Enter game name"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
        />
        <button onClick={handleCreateGame}>Create Game</button>
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
                <h4>{game.name}</h4>
                <p>Created by: {game.creatorName}</p>
                <p>Players: {Object.keys(game.players || {}).length}/4</p>
                <p>Status: {game.status}</p>
              </div>
              {game.status === 'waiting' && !game.players[user.uid] && (
                <button 
                  className="join-btn"
                  onClick={() => handleJoinGame(game.id)}
                >
                  Join
                </button>
              )}
              {game.players && game.players[user.uid] && (
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
