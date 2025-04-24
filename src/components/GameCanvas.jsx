import { useRef, useEffect, useState } from 'react';
import { generateTerrain, createTerrainPath, createExplosion } from '../utils/terrainGenerator';
import { calculateProjectilePosition, checkTerrainCollision, checkTankCollision, calculateDamage } from '../utils/physics';
import '../styles/GameCanvas.css';

// Game constants
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const TANK_WIDTH = 40;
const TANK_HEIGHT = 30;
const TANK_BARREL_LENGTH = 20;
const PROJECTILE_RADIUS = 3;
const EXPLOSION_RADIUS = 30;
const MAX_DAMAGE = 25;

function GameCanvas({ gameState, onGameEvent, currentPlayerId }) {
  const canvasRef = useRef(null);
  const [terrain, setTerrain] = useState([]);
  const [wind, setWind] = useState(0);
  const animationRef = useRef(null);

  // Initialize the game
  useEffect(() => {
    // Generate terrain
    const newTerrain = generateTerrain(CANVAS_WIDTH, CANVAS_HEIGHT);
    setTerrain(newTerrain);

    // Set random wind
    setWind((Math.random() * 2 - 1) * 5); // Wind between -5 and 5

    // Clean up animation frame on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Main game loop
  useEffect(() => {
    if (!canvasRef.current || !terrain.length) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Track if we're currently processing a collision to prevent multiple collisions
    let processingCollision = false;

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Draw sky gradient
      const skyGradient = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
      skyGradient.addColorStop(0, '#1e3a8a');
      skyGradient.addColorStop(1, '#3b82f6');
      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Draw terrain
      const terrainGradient = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
      terrainGradient.addColorStop(0, '#84cc16');
      terrainGradient.addColorStop(1, '#4b5563');
      ctx.fillStyle = terrainGradient;
      createTerrainPath(ctx, terrain, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.fill();

      // Draw tanks
      Object.values(gameState.tanks || {}).forEach(tank => {
        drawTank(ctx, tank, tank.id === currentPlayerId);
      });

      // Draw and update projectile if active and not currently processing a collision
      if (gameState.projectile && gameState.projectile.active && !processingCollision) {
        drawProjectile(ctx, gameState.projectile);

        // Update projectile position
        const updatedProjectile = { ...gameState.projectile };
        calculateProjectilePosition(updatedProjectile, wind);

        // Check for collisions
        const terrainCollision = checkTerrainCollision(updatedProjectile, terrain, CANVAS_WIDTH, CANVAS_HEIGHT);
        const tankCollision = checkTankCollision(updatedProjectile, gameState.tanks, TANK_WIDTH);

        if (terrainCollision || tankCollision.collided) {
          // Set flag to prevent multiple collisions
          processingCollision = true;

          // Handle collision
          handleCollision(updatedProjectile, tankCollision);

          // Reset flag after a short delay to ensure all collision processing is complete
          setTimeout(() => {
            processingCollision = false;
          }, 1000);
        } else {
          // Update projectile if no collision
          onGameEvent('updateProjectile', updatedProjectile);
        }
      } else if (gameState.projectile) {
        // Just draw the projectile without updating if we're processing a collision
        // or if it's not active
        if (gameState.projectile.active) {
          drawProjectile(ctx, gameState.projectile);
        }
      }

      // Draw wind indicator
      drawWindIndicator(ctx, wind);

      // Draw turn indicator
      drawTurnIndicator(ctx, gameState.currentTurn);

      // Continue animation
      animationRef.current = requestAnimationFrame(render);
    };

    // Start the render loop
    animationRef.current = requestAnimationFrame(render);

    // Clean up
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [gameState, terrain, wind, currentPlayerId, onGameEvent]);

  // Handle collision with terrain or tank
  const handleCollision = (projectile, tankCollision) => {
    // Log for debugging
    console.log('Collision detected at position:', projectile.x, projectile.y);

    // Create explosion with appropriate crater size based on weapon
    const explosionPower = 15; // Increased for better visual effect
    const explosionTerrain = createExplosion(terrain, projectile.x, EXPLOSION_RADIUS, explosionPower);
    setTerrain(explosionTerrain);

    // Draw explosion effect (visual only)
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      // Draw explosion circle
      ctx.fillStyle = 'rgba(255, 165, 0, 0.7)';
      ctx.beginPath();
      ctx.arc(projectile.x, projectile.y, EXPLOSION_RADIUS * 0.8, 0, Math.PI * 2);
      ctx.fill();

      // Draw inner explosion
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(projectile.x, projectile.y, EXPLOSION_RADIUS * 0.4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Check for tank damage - now check all tanks within explosion radius
    Object.entries(gameState.tanks || {}).forEach(([tankId, tank]) => {
      // Calculate distance from explosion to tank center
      const tankCenterX = tank.x + TANK_WIDTH / 2;
      const tankCenterY = tank.y + TANK_HEIGHT / 2;
      const dx = projectile.x - tankCenterX;
      const dy = projectile.y - tankCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Apply damage if tank is within explosion radius
      if (distance < EXPLOSION_RADIUS * 1.2) {
        const damage = calculateDamage(distance, EXPLOSION_RADIUS, MAX_DAMAGE);
        if (damage > 0) {
          console.log(`Damaging tank ${tankId} with ${damage} damage at distance ${distance}`);
          onGameEvent('damagePlayer', { playerId: tankId, damage });
        }
      }
    });

    // End projectile first
    onGameEvent('endProjectile');

    // Add a slightly longer delay before changing turn to ensure the explosion is visible
    setTimeout(() => {
      // Change turn
      onGameEvent('nextTurn');

      // Change wind for next turn - more moderate wind values
      setWind((Math.random() * 2 - 1) * 4);
    }, 800);
  };

  // Draw a tank on the canvas
  const drawTank = (ctx, tank, isCurrentPlayer) => {
    const { x, y, angle, color, health } = tank;

    // Save context
    ctx.save();

    // Position tank on terrain
    const terrainY = getTerrainHeightAtPosition(terrain, x + TANK_WIDTH / 2);
    const tankY = terrainY - TANK_HEIGHT;

    // Draw tank body
    ctx.fillStyle = color;
    ctx.fillRect(x, tankY, TANK_WIDTH, TANK_HEIGHT);

    // Draw tank barrel
    ctx.translate(x + TANK_WIDTH / 2, tankY + TANK_HEIGHT / 2);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillStyle = '#333';
    ctx.fillRect(0, -2, TANK_BARREL_LENGTH, 4);

    // Highlight current player's tank
    if (isCurrentPlayer) {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.strokeRect(-TANK_WIDTH / 2, -TANK_HEIGHT / 2, TANK_WIDTH, TANK_HEIGHT);
    }

    // Reset transformation
    ctx.restore();

    // Draw health bar
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(x, tankY - 10, TANK_WIDTH, 5);
    ctx.fillStyle = '#22c55e';
    ctx.fillRect(x, tankY - 10, TANK_WIDTH * (health / 100), 5);

    // Draw player name
    ctx.fillStyle = '#ffffff';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(tank.name, x + TANK_WIDTH / 2, tankY - 15);
  };

  // Draw a projectile on the canvas
  const drawProjectile = (ctx, projectile) => {
    ctx.fillStyle = '#f97316';
    ctx.beginPath();
    ctx.arc(projectile.x, projectile.y, PROJECTILE_RADIUS, 0, Math.PI * 2);
    ctx.fill();

    // Draw trail
    ctx.strokeStyle = 'rgba(249, 115, 22, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(projectile.x, projectile.y);
    ctx.lineTo(
      projectile.x - projectile.velocityX * 3,
      projectile.y - projectile.velocityY * 3
    );
    ctx.stroke();
  };

  // Draw wind indicator
  const drawWindIndicator = (ctx, wind) => {
    const windStrength = Math.abs(wind);
    const windDirection = wind < 0 ? 'left' : 'right';

    ctx.fillStyle = '#ffffff';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';

    let windText = 'Wind: ';
    for (let i = 0; i < Math.ceil(windStrength); i++) {
      windText += windDirection === 'left' ? '←' : '→';
    }

    ctx.fillText(windText, CANVAS_WIDTH / 2, 30);
  };

  // Draw turn indicator
  const drawTurnIndicator = (ctx, currentTurn) => {
    if (!currentTurn) return;

    // Get player name from tanks if available
    let playerName = currentTurn;
    if (gameState.tanks && gameState.tanks[currentTurn]) {
      playerName = gameState.tanks[currentTurn].name;
    }

    ctx.fillStyle = '#ffffff';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${playerName}'s Turn`, CANVAS_WIDTH / 2, 60);

    // Draw a more visible turn indicator
    if (gameState.tanks && gameState.tanks[currentTurn]) {
      const tank = gameState.tanks[currentTurn];
      const x = tank.x + TANK_WIDTH / 2;
      const terrainY = getTerrainHeightAtPosition(terrain, x);

      // Draw arrow pointing to current player's tank
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.moveTo(x, terrainY - TANK_HEIGHT - 30);
      ctx.lineTo(x - 10, terrainY - TANK_HEIGHT - 15);
      ctx.lineTo(x + 10, terrainY - TANK_HEIGHT - 15);
      ctx.closePath();
      ctx.fill();
    }
  };

  // Helper function to get terrain height at a specific position
  const getTerrainHeightAtPosition = (terrainPoints, x) => {
    if (!terrainPoints || terrainPoints.length < 2) return CANVAS_HEIGHT;

    // Find the two points that x is between
    for (let i = 0; i < terrainPoints.length - 1; i++) {
      const p1 = terrainPoints[i];
      const p2 = terrainPoints[i + 1];

      if (x >= p1.x && x <= p2.x) {
        // Linear interpolation between the two points
        const ratio = (x - p1.x) / (p2.x - p1.x);
        return p1.y + ratio * (p2.y - p1.y);
      }
    }

    // If x is outside the terrain, return the height of the closest point
    if (x < terrainPoints[0].x) return terrainPoints[0].y;
    return terrainPoints[terrainPoints.length - 1].y;
  };

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      className="game-canvas"
    />
  );
}

export default GameCanvas;
