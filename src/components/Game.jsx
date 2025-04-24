import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ref,
  onValue,
  update,
  remove,
  onDisconnect,
  set
} from 'firebase/database';
import { database } from '../firebase';
import Tank from './Tank';
import Projectile from './Projectile';
import '../styles/Game.css';

// Tank colors
const TANK_COLORS = ['red', 'blue', 'green', 'yellow'];

// Game constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const TANK_SPEED = 3;
const ROTATION_SPEED = 3;
const PROJECTILE_SPEED = 7;
const FIRE_COOLDOWN = 500; // ms
const TANK_SIZE = 40;
const PROJECTILE_SIZE = 6;

function Game({ user }) {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [players, setPlayers] = useState({});
  const [tanks, setTanks] = useState({});
  const [projectiles, setProjectiles] = useState({});
  const [gameStarted, setGameStarted] = useState(false);
  const [error, setError] = useState('');
  const [keys, setKeys] = useState({
    up: false,
    down: false,
    left: false,
    right: false,
    space: false
  });
  const lastFireTime = useRef(0);
  const gameLoopRef = useRef(null);
  const gameRef = useRef(null);

  // Initialize game and set up listeners
  useEffect(() => {
    const gameDbRef = ref(database, `games/${gameId}`);
    const playerRef = ref(database, `games/${gameId}/players/${user.uid}`);
    let playersUnsubscribe;

    const gameUnsubscribe = onValue(gameDbRef, (snapshot) => {
      const gameData = snapshot.val();

      if (!gameData) {
        setError('Game not found');
        return;
      }

      setGame(gameData);
      setPlayers(gameData.players || {});
      setTanks(gameData.tanks || {});
      setProjectiles(gameData.projectiles || {});
      setGameStarted(gameData.status === 'playing');
    });

    // Set up a separate listener for players to detect when all players have left
    playersUnsubscribe = onValue(ref(database, `games/${gameId}/players`), (snapshot) => {
      const playersData = snapshot.val();

      // If there are no players left in the game, delete the game
      if (!playersData || Object.keys(playersData).length === 0) {
        console.log('No players left in game, deleting game room');
        remove(gameDbRef);
      }
    });

    // Set up disconnect handler to remove player from game when they disconnect
    onDisconnect(playerRef).remove();

    return () => {
      gameUnsubscribe();
      if (playersUnsubscribe) playersUnsubscribe();
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }

      // Also remove the player from the game when they leave the page
      remove(playerRef).then(() => {
        console.log('Player removed from game on component unmount');
      }).catch(error => {
        console.error('Error removing player from game:', error);
      });
    };
  }, [gameId, user.uid]);

  // Set up keyboard event listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'w') {
        setKeys(prev => ({ ...prev, up: true }));
      } else if (e.key === 'ArrowDown' || e.key === 's') {
        setKeys(prev => ({ ...prev, down: true }));
      } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        setKeys(prev => ({ ...prev, left: true }));
      } else if (e.key === 'ArrowRight' || e.key === 'd') {
        setKeys(prev => ({ ...prev, right: true }));
      } else if (e.key === ' ') {
        setKeys(prev => ({ ...prev, space: true }));
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'w') {
        setKeys(prev => ({ ...prev, up: false }));
      } else if (e.key === 'ArrowDown' || e.key === 's') {
        setKeys(prev => ({ ...prev, down: false }));
      } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        setKeys(prev => ({ ...prev, left: false }));
      } else if (e.key === 'ArrowRight' || e.key === 'd') {
        setKeys(prev => ({ ...prev, right: false }));
      } else if (e.key === ' ') {
        setKeys(prev => ({ ...prev, space: false }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Game loop
  useEffect(() => {
    if (!gameStarted || !tanks[user.uid]) return;

    const gameLoop = () => {
      // Handle tank movement and rotation
      const tank = tanks[user.uid];
      let updatedTank = { ...tank };
      let tankUpdated = false;

      if (keys.left) {
        updatedTank.angle = (updatedTank.angle - ROTATION_SPEED) % 360;
        tankUpdated = true;
      }

      if (keys.right) {
        updatedTank.angle = (updatedTank.angle + ROTATION_SPEED) % 360;
        tankUpdated = true;
      }

      const radians = updatedTank.angle * (Math.PI / 180);

      if (keys.up) {
        updatedTank.x += Math.sin(radians) * TANK_SPEED;
        updatedTank.y -= Math.cos(radians) * TANK_SPEED;
        tankUpdated = true;
      }

      if (keys.down) {
        updatedTank.x -= Math.sin(radians) * TANK_SPEED;
        updatedTank.y += Math.cos(radians) * TANK_SPEED;
        tankUpdated = true;
      }

      // Keep tank within bounds
      if (updatedTank.x < 0) updatedTank.x = 0;
      if (updatedTank.x > GAME_WIDTH - TANK_SIZE) updatedTank.x = GAME_WIDTH - TANK_SIZE;
      if (updatedTank.y < 0) updatedTank.y = 0;
      if (updatedTank.y > GAME_HEIGHT - TANK_SIZE) updatedTank.y = GAME_HEIGHT - TANK_SIZE;

      // Update tank in Firebase if it moved
      if (tankUpdated) {
        const tankRef = ref(database, `games/${gameId}/tanks/${user.uid}`);
        update(tankRef, {
          x: updatedTank.x,
          y: updatedTank.y,
          angle: updatedTank.angle
        });
      }

      // Handle firing
      if (keys.space) {
        const now = Date.now();
        if (now - lastFireTime.current > FIRE_COOLDOWN) {
          lastFireTime.current = now;

          // Create new projectile
          const projectileRef = ref(database, `games/${gameId}/projectiles/${user.uid}_${now}`);
          const projectile = {
            id: `${user.uid}_${now}`,
            ownerId: user.uid,
            x: updatedTank.x + TANK_SIZE / 2,
            y: updatedTank.y + TANK_SIZE / 2,
            angle: updatedTank.angle,
            createdAt: now
          };

          set(projectileRef, projectile);
        }
      }

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoopRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameId, gameStarted, keys, tanks, user.uid]);

  // Handle projectile movement and collisions
  useEffect(() => {
    if (!gameStarted) return;

    const projectileInterval = setInterval(() => {
      const now = Date.now();
      const updatedProjectiles = { ...projectiles };
      let projectilesUpdated = false;

      // Update projectile positions and check for collisions
      Object.values(updatedProjectiles).forEach(projectile => {
        // Remove old projectiles (older than 5 seconds)
        if (now - projectile.createdAt > 5000) {
          delete updatedProjectiles[projectile.id];
          projectilesUpdated = true;
          return;
        }

        // Update position
        const radians = projectile.angle * (Math.PI / 180);
        projectile.x += Math.sin(radians) * PROJECTILE_SPEED;
        projectile.y -= Math.cos(radians) * PROJECTILE_SPEED;
        projectilesUpdated = true;

        // Check if out of bounds
        if (
          projectile.x < 0 ||
          projectile.x > GAME_WIDTH ||
          projectile.y < 0 ||
          projectile.y > GAME_HEIGHT
        ) {
          delete updatedProjectiles[projectile.id];
          return;
        }

        // Check for collisions with tanks
        Object.values(tanks).forEach(tank => {
          // Don't collide with own tank
          if (tank.id === projectile.ownerId) return;

          // Simple collision detection
          const dx = projectile.x - (tank.x + TANK_SIZE / 2);
          const dy = projectile.y - (tank.y + TANK_SIZE / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < (TANK_SIZE / 2 + PROJECTILE_SIZE / 2)) {
            // Hit detected
            delete updatedProjectiles[projectile.id];

            // Update tank health
            const tankRef = ref(database, `games/${gameId}/tanks/${tank.id}`);
            update(tankRef, {
              health: Math.max(0, tank.health - 10)
            });

            // Check if tank is destroyed
            if (tank.health <= 10) {
              // Respawn tank after 3 seconds
              setTimeout(() => {
                const respawnX = Math.random() * (GAME_WIDTH - TANK_SIZE);
                const respawnY = Math.random() * (GAME_HEIGHT - TANK_SIZE);

                update(tankRef, {
                  x: respawnX,
                  y: respawnY,
                  health: 100
                });
              }, 3000);
            }
          }
        });
      });

      // Update projectiles in Firebase
      if (projectilesUpdated) {
        const projectilesRef = ref(database, `games/${gameId}/projectiles`);
        set(projectilesRef, updatedProjectiles);
      }
    }, 33); // ~30fps

    return () => clearInterval(projectileInterval);
  }, [gameId, gameStarted, projectiles, tanks]);

  const handleToggleReady = () => {
    const playerRef = ref(database, `games/${gameId}/players/${user.uid}`);
    update(playerRef, {
      isReady: !players[user.uid]?.isReady
    });
  };

  const handleStartGame = () => {
    // Only the creator can start the game
    if (game.createdBy !== user.uid) return;

    // Initialize tank positions
    const tankPositions = {};
    const playerIds = Object.keys(players);

    playerIds.forEach((playerId, index) => {
      // Position tanks in different corners
      let x, y;

      switch (index) {
        case 0: // Top left
          x = 50;
          y = 50;
          break;
        case 1: // Top right
          x = GAME_WIDTH - TANK_SIZE - 50;
          y = 50;
          break;
        case 2: // Bottom left
          x = 50;
          y = GAME_HEIGHT - TANK_SIZE - 50;
          break;
        case 3: // Bottom right
          x = GAME_WIDTH - TANK_SIZE - 50;
          y = GAME_HEIGHT - TANK_SIZE - 50;
          break;
        default:
          x = Math.random() * (GAME_WIDTH - TANK_SIZE);
          y = Math.random() * (GAME_HEIGHT - TANK_SIZE);
      }

      tankPositions[playerId] = {
        id: playerId,
        name: players[playerId].name,
        x,
        y,
        angle: 0,
        health: 100,
        color: TANK_COLORS[index % TANK_COLORS.length]
      };
    });

    // Update game status and add tanks
    const gameRef = ref(database, `games/${gameId}`);
    update(gameRef, {
      status: 'playing',
      tanks: tankPositions,
      projectiles: {},
      startedAt: Date.now()
    });
  };

  const handleLeaveGame = () => {
    // Remove player from game
    const playerRef = ref(database, `games/${gameId}/players/${user.uid}`);
    remove(playerRef);

    // If player is the creator and game hasn't started, delete the game
    if (game.createdBy === user.uid && game.status === 'waiting') {
      const gameRef = ref(database, `games/${gameId}`);
      remove(gameRef);
    }

    // Navigate back to lobby
    navigate('/lobby');
  };

  // Check if all players are ready
  const allPlayersReady = Object.values(players).every(player => player.isReady);

  // Check if current player is the creator
  const isCreator = game?.createdBy === user.uid;

  return (
    <div className="game-page">
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

          {!gameStarted ? (
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
          ) : (
            <div className="game-container" ref={gameRef}>
              {/* Render tanks */}
              {Object.values(tanks).map(tank => (
                <Tank
                  key={tank.id}
                  tank={tank}
                  isCurrentPlayer={tank.id === user.uid}
                />
              ))}

              {/* Render projectiles */}
              {Object.values(projectiles).map(projectile => (
                <Projectile key={projectile.id} projectile={projectile} />
              ))}

              <div className="controls-info">
                <p>Use WASD or Arrow Keys to move</p>
                <p>Space to fire</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Game;
