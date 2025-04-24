import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ref, onValue, update, remove, onDisconnect, set } from 'firebase/database';
import { database } from '../firebase';
import GameCanvas from './GameCanvas';
import GameControls from './GameControls';
import '../styles/ClassicGame.css';

// Tank colors
const TANK_COLORS = ['#e11d48', '#2563eb', '#16a34a', '#ca8a04'];

function ClassicGame({ user }) {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [players, setPlayers] = useState({});
  const [gameState, setGameState] = useState({
    status: 'waiting',
    tanks: {},
    projectile: null,
    currentTurn: null,
    weaponsInitialized: false
  });
  const [error, setError] = useState('');

  // Initialize game and set up listeners
  useEffect(() => {
    const gameDbRef = ref(database, `classicGames/${gameId}`);

    const unsubscribe = onValue(gameDbRef, (snapshot) => {
      const gameData = snapshot.val();

      if (!gameData) {
        setError('Game not found');
        return;
      }

      setGame(gameData);
      setPlayers(gameData.players || {});

      // Update game state
      setGameState({
        status: gameData.status || 'waiting',
        tanks: gameData.tanks || {},
        projectile: gameData.projectile || null,
        currentTurn: gameData.currentTurn || null,
        weaponsInitialized: gameData.weaponsInitialized || false
      });
    });

    // Set up disconnect handler to remove player from game
    const playerRef = ref(database, `classicGames/${gameId}/players/${user.uid}`);
    onDisconnect(playerRef).remove();

    return () => {
      unsubscribe();
    };
  }, [gameId, user.uid]);

  // Handle game events
  const handleGameEvent = (eventType, data) => {
    const gameRef = ref(database, `classicGames/${gameId}`);

    switch (eventType) {
      case 'fire':
        // Fire a projectile
        update(gameRef, {
          projectile: data
        });
        break;

      case 'updateProjectile':
        // Update projectile position
        update(gameRef, {
          'projectile': data
        });
        break;

      case 'endProjectile':
        // End projectile animation
        update(gameRef, {
          'projectile.active': false
        });
        break;

      case 'damagePlayer':
        // Apply damage to a player
        const { playerId, damage } = data;
        const currentHealth = gameState.tanks[playerId]?.health || 100;
        const newHealth = Math.max(0, currentHealth - damage);

        update(ref(database, `classicGames/${gameId}/tanks/${playerId}`), {
          health: newHealth
        });

        // Check if player is defeated
        if (newHealth <= 0) {
          // Handle player defeat
          update(ref(database, `classicGames/${gameId}/tanks/${playerId}`), {
            defeated: true
          });

          // Check if game is over
          const remainingPlayers = Object.values(gameState.tanks).filter(
            tank => tank.id !== playerId && !tank.defeated
          );

          if (remainingPlayers.length <= 1) {
            // Game over - we have a winner
            update(gameRef, {
              status: 'completed',
              winner: remainingPlayers[0]?.id || null,
              endedAt: Date.now()
            });
          }
        }
        break;

      case 'nextTurn':
        // Move to next player's turn
        const playerIds = Object.keys(gameState.tanks).filter(
          id => !gameState.tanks[id].defeated
        );

        if (playerIds.length <= 1) return; // Game over

        const currentTurnIndex = playerIds.indexOf(gameState.currentTurn);
        const nextTurnIndex = (currentTurnIndex + 1) % playerIds.length;
        const nextPlayerId = playerIds[nextTurnIndex];

        update(gameRef, {
          currentTurn: nextPlayerId
        });
        break;

      default:
        console.warn('Unknown game event:', eventType);
    }
  };

  // Handle ready status toggle
  const handleToggleReady = () => {
    const playerRef = ref(database, `classicGames/${gameId}/players/${user.uid}`);
    update(playerRef, {
      isReady: !players[user.uid]?.isReady
    });
  };

  // Handle game start
  const handleStartGame = () => {
    // Only the creator can start the game
    if (game.createdBy !== user.uid) return;

    // Initialize tank positions
    const tankPositions = {};
    const playerIds = Object.keys(players);

    // Position tanks on opposite sides
    playerIds.forEach((playerId, index) => {
      let x;

      // Position tanks on left or right side
      if (index % 2 === 0) {
        // Left side
        x = 50 + (index * 20);
      } else {
        // Right side
        x = 750 - (index * 20);
      }

      tankPositions[playerId] = {
        id: playerId,
        name: players[playerId].name,
        x,
        y: 300, // Will be adjusted to terrain
        angle: index % 2 === 0 ? 45 : 135, // Face toward center
        health: 100,
        color: TANK_COLORS[index % TANK_COLORS.length],
        defeated: false
      };
    });

    // Update game status and add tanks
    const gameRef = ref(database, `classicGames/${gameId}`);
    update(gameRef, {
      status: 'playing',
      tanks: tankPositions,
      projectile: null,
      currentTurn: playerIds[0], // First player starts
      startedAt: Date.now(),
      weaponsInitialized: true
    });
  };

  // Handle leaving the game
  const handleLeaveGame = () => {
    // Remove player from game
    const playerRef = ref(database, `classicGames/${gameId}/players/${user.uid}`);
    remove(playerRef);

    // If player is the creator and game hasn't started, delete the game
    if (game.createdBy === user.uid && game.status === 'waiting') {
      const gameRef = ref(database, `classicGames/${gameId}`);
      remove(gameRef);
    }

    // Navigate back to lobby
    navigate('/lobby');
  };

  // Handle firing a projectile
  const handleFire = (projectile) => {
    handleGameEvent('fire', projectile);
  };

  // Check if all players are ready
  const allPlayersReady = Object.values(players).every(player => player.isReady);

  // Check if current player is the creator
  const isCreator = game?.createdBy === user.uid;

  // Check if it's the current player's turn
  const isCurrentTurn = gameState.currentTurn === user.uid;

  // Render game over screen
  const renderGameOver = () => {
    const winner = gameState.tanks[game.winner];

    return (
      <div className="game-over">
        <h2>Game Over</h2>
        {winner ? (
          <>
            <p className="winner-text">{winner.name} wins!</p>
            <div className="winner-tank" style={{ backgroundColor: winner.color }}></div>
          </>
        ) : (
          <p>It's a draw!</p>
        )}
        <button className="return-lobby" onClick={handleLeaveGame}>
          Return to Lobby
        </button>
      </div>
    );
  };

  return (
    <div className="classic-game">
      {error ? (
        <div className="error-container">
          <p className="error">{error}</p>
          <button onClick={() => navigate('/lobby')}>Back to Lobby</button>
        </div>
      ) : (
        <>
          <div className="game-header">
            <h2>{game?.name || 'Loading...'}</h2>
            <button className="leave-btn" onClick={handleLeaveGame}>
              Leave Game
            </button>
          </div>

          {gameState.status === 'waiting' ? (
            <div className="waiting-room">
              <h3>Waiting for players</h3>
              <div className="players-list">
                {Object.values(players).map(player => (
                  <div key={player.id} className="player-item">
                    <span>{player.name}</span>
                    <span className={`status ${player.isReady ? 'ready' : 'not-ready'}`}>
                      {player.isReady ? 'Ready' : 'Not Ready'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="game-controls">
                <button
                  className={`ready-btn ${players[user.uid]?.isReady ? 'ready' : ''}`}
                  onClick={handleToggleReady}
                >
                  {players[user.uid]?.isReady ? 'Ready!' : 'Mark as Ready'}
                </button>

                {isCreator && (
                  <button
                    className="start-btn"
                    disabled={!allPlayersReady || Object.keys(players).length < 2}
                    onClick={handleStartGame}
                  >
                    Start Game
                  </button>
                )}
              </div>

              {isCreator && Object.keys(players).length < 2 && (
                <p className="info-text">Need at least 2 players to start</p>
              )}

              {isCreator && !allPlayersReady && Object.keys(players).length >= 2 && (
                <p className="info-text">Waiting for all players to be ready</p>
              )}
            </div>
          ) : gameState.status === 'completed' ? (
            renderGameOver()
          ) : (
            <div className="game-area">
              <GameCanvas
                gameState={gameState}
                onGameEvent={handleGameEvent}
                currentPlayerId={user.uid}
              />
              <GameControls
                onFire={handleFire}
                isCurrentTurn={isCurrentTurn}
                gameState={gameState}
                currentPlayerId={user.uid}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ClassicGame;
