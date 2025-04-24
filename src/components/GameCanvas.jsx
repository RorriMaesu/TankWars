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
    console.log('Weapon type:', projectile.weapon);

    // Get weapon properties
    let explosionRadius = EXPLOSION_RADIUS;
    let explosionPower = 15;
    let maxDamage = MAX_DAMAGE;
    let createCluster = false;
    let penetration = false;

    // Adjust explosion properties based on weapon type
    switch (projectile.weapon) {
      case 'heavy':
        // Heavy shell - larger explosion, more damage, deeper crater
        explosionRadius = EXPLOSION_RADIUS * 1.2;
        explosionPower = 25;
        maxDamage = MAX_DAMAGE * 1.6; // 40% more damage
        break;
      case 'cluster':
        // Cluster bomb - smaller initial explosion but creates secondary explosions
        explosionRadius = EXPLOSION_RADIUS * 0.8;
        explosionPower = 10;
        maxDamage = MAX_DAMAGE * 0.6; // 40% less damage
        createCluster = true;
        break;
      case 'bunker':
        // Bunker buster - penetrates terrain before exploding, large damage
        explosionRadius = EXPLOSION_RADIUS * 1.3;
        explosionPower = 30;
        maxDamage = MAX_DAMAGE * 2; // Double damage
        penetration = true;
        break;
      default: // basic shell
        // Standard values
        break;
    }

    // Create explosion with appropriate crater size based on weapon
    const explosionTerrain = createExplosion(
      terrain,
      projectile.x,
      explosionRadius,
      explosionPower
    );
    setTerrain(explosionTerrain);

    // Draw explosion effect (visual only)
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      // Draw explosion circle with color based on weapon type
      let explosionColor = 'rgba(255, 165, 0, 0.7)'; // Default orange
      let innerColor = 'rgba(255, 255, 255, 0.9)'; // Default white

      switch (projectile.weapon) {
        case 'heavy':
          explosionColor = 'rgba(255, 0, 0, 0.7)'; // Red
          innerColor = 'rgba(255, 255, 0, 0.9)'; // Yellow
          break;
        case 'cluster':
          explosionColor = 'rgba(0, 255, 255, 0.7)'; // Cyan
          innerColor = 'rgba(255, 255, 255, 0.9)'; // White
          break;
        case 'bunker':
          explosionColor = 'rgba(128, 0, 128, 0.7)'; // Purple
          innerColor = 'rgba(255, 0, 255, 0.9)'; // Magenta
          break;
      }

      // Draw main explosion
      ctx.fillStyle = explosionColor;
      ctx.beginPath();
      ctx.arc(projectile.x, projectile.y, explosionRadius * 0.8, 0, Math.PI * 2);
      ctx.fill();

      // Draw inner explosion
      ctx.fillStyle = innerColor;
      ctx.beginPath();
      ctx.arc(projectile.x, projectile.y, explosionRadius * 0.4, 0, Math.PI * 2);
      ctx.fill();

      // For cluster bombs, create additional smaller explosions
      if (createCluster) {
        // Create 3-5 smaller explosions around the main one
        const clusterCount = 3 + Math.floor(Math.random() * 3);
        const clusterRadius = explosionRadius * 0.5;

        for (let i = 0; i < clusterCount; i++) {
          // Random position around the main explosion
          const angle = Math.random() * Math.PI * 2;
          const distance = explosionRadius * (0.8 + Math.random() * 0.8);
          const clusterX = projectile.x + Math.cos(angle) * distance;
          const clusterY = projectile.y + Math.sin(angle) * distance;

          // Draw cluster explosion
          ctx.fillStyle = 'rgba(0, 200, 255, 0.6)';
          ctx.beginPath();
          ctx.arc(clusterX, clusterY, clusterRadius, 0, Math.PI * 2);
          ctx.fill();

          // Draw inner cluster explosion
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.beginPath();
          ctx.arc(clusterX, clusterY, clusterRadius * 0.5, 0, Math.PI * 2);
          ctx.fill();

          // Create smaller crater for each cluster
          const clusterTerrain = createExplosion(
            explosionTerrain,
            clusterX,
            clusterRadius,
            explosionPower * 0.6
          );
          setTerrain(clusterTerrain);

          // Apply damage from cluster explosions
          Object.entries(gameState.tanks || {}).forEach(([tankId, tank]) => {
            const tankCenterX = tank.x + TANK_WIDTH / 2;
            const tankCenterY = tank.y + TANK_HEIGHT / 2;
            const dx = clusterX - tankCenterX;
            const dy = clusterY - tankCenterY;
            const clusterDistance = Math.sqrt(dx * dx + dy * dy);

            if (clusterDistance < clusterRadius * 1.2) {
              const clusterDamage = calculateDamage(clusterDistance, clusterRadius, maxDamage * 0.4);
              if (clusterDamage > 0) {
                console.log(`Cluster damaging tank ${tankId} with ${clusterDamage} damage`);
                onGameEvent('damagePlayer', { playerId: tankId, damage: clusterDamage });
              }
            }
          });
        }
      }
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
      // Bunker buster has a larger damage radius
      const damageRadius = penetration ? explosionRadius * 1.5 : explosionRadius * 1.2;

      if (distance < damageRadius) {
        const damage = calculateDamage(distance, explosionRadius, maxDamage);
        if (damage > 0) {
          console.log(`Damaging tank ${tankId} with ${damage} damage at distance ${distance}`);
          onGameEvent('damagePlayer', { playerId: tankId, damage });
        }
      }
    });

    // End projectile first
    onGameEvent('endProjectile');

    // Add a slightly longer delay before changing turn to ensure the explosion is visible
    // Longer delay for cluster bombs to allow all explosions to be seen
    const turnDelay = createCluster ? 1200 : 800;

    setTimeout(() => {
      // Change turn
      onGameEvent('nextTurn');

      // Change wind for next turn - classic Tank Wars had more varied wind
      // Wind ranges from -5 to 5, with a bias toward stronger values
      const windDirection = Math.random() > 0.5 ? 1 : -1;
      const windStrength = Math.pow(Math.random(), 0.7) * 5; // Power function creates bias toward stronger winds
      setWind(windDirection * windStrength);
    }, turnDelay);
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

    // Draw barrel with gradient for better visibility
    const barrelGradient = ctx.createLinearGradient(0, 0, TANK_BARREL_LENGTH, 0);
    barrelGradient.addColorStop(0, '#333');
    barrelGradient.addColorStop(1, '#555');
    ctx.fillStyle = barrelGradient;

    // Make barrel slightly thicker for better visibility
    ctx.fillRect(0, -3, TANK_BARREL_LENGTH, 6);

    // Draw aiming trajectory line if this is the current player's turn
    if (isCurrentPlayer && tank.id === gameState.currentTurn) {
      // Get the current power setting from the tank if available
      const power = tank.power || 50; // Default to 50 if not set

      // Calculate trajectory length based on power (longer line for more power)
      const trajectoryLength = 40 + (power / 2); // Scale from 40 to 90 based on power (10-100)

      // Draw improved trajectory line
      // Create a gradient for the trajectory line
      const trajectoryGradient = ctx.createLinearGradient(TANK_BARREL_LENGTH, 0, trajectoryLength, 0);
      trajectoryGradient.addColorStop(0, 'rgba(255, 255, 0, 0.9)'); // Bright yellow at start
      trajectoryGradient.addColorStop(1, 'rgba(255, 255, 0, 0.3)'); // Faded yellow at end

      // Draw dotted trajectory line
      ctx.setLineDash([3, 3]); // Create dotted line
      ctx.strokeStyle = trajectoryGradient;
      ctx.lineWidth = 2; // Slightly thicker line
      ctx.beginPath();
      ctx.moveTo(TANK_BARREL_LENGTH, 0);
      ctx.lineTo(trajectoryLength, 0);
      ctx.stroke();
      ctx.setLineDash([]); // Reset to solid line

      // Draw small circle at the end of the trajectory
      ctx.fillStyle = '#ffff00';
      ctx.beginPath();
      ctx.arc(trajectoryLength, 0, 4, 0, Math.PI * 2);
      ctx.fill();

      // Add a glow effect to the end point
      ctx.fillStyle = 'rgba(255, 255, 0, 0.3)';
      ctx.beginPath();
      ctx.arc(trajectoryLength, 0, 7, 0, Math.PI * 2);
      ctx.fill();

      // Draw power indicator text
      ctx.save();
      ctx.rotate(-angle * Math.PI / 180); // Rotate back to normal orientation for text
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(`Power: ${power}%`, 0, -15);
      ctx.restore();
    }

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
    // Different colors and sizes for different weapon types
    let projectileColor = '#f97316'; // Default orange
    let trailColor = 'rgba(249, 115, 22, 0.5)'; // Default orange trail
    let projectileSize = PROJECTILE_RADIUS;
    let trailLength = 3;

    // Customize projectile appearance based on weapon type
    switch (projectile.weapon) {
      case 'heavy':
        // Heavy shell - larger, red projectile with longer trail
        projectileColor = '#ef4444'; // Red
        trailColor = 'rgba(239, 68, 68, 0.6)';
        projectileSize = PROJECTILE_RADIUS * 1.5;
        trailLength = 4;
        break;
      case 'cluster':
        // Cluster bomb - cyan projectile with sparkles
        projectileColor = '#06b6d4'; // Cyan
        trailColor = 'rgba(6, 182, 212, 0.6)';
        projectileSize = PROJECTILE_RADIUS * 1.2;
        trailLength = 3.5;
        break;
      case 'bunker':
        // Bunker buster - purple projectile with intense trail
        projectileColor = '#a855f7'; // Purple
        trailColor = 'rgba(168, 85, 247, 0.7)';
        projectileSize = PROJECTILE_RADIUS * 1.3;
        trailLength = 5;
        break;
    }

    // Draw the projectile
    ctx.fillStyle = projectileColor;
    ctx.beginPath();
    ctx.arc(projectile.x, projectile.y, projectileSize, 0, Math.PI * 2);
    ctx.fill();

    // Draw trail
    ctx.strokeStyle = trailColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(projectile.x, projectile.y);
    ctx.lineTo(
      projectile.x - projectile.velocityX * trailLength,
      projectile.y - projectile.velocityY * trailLength
    );
    ctx.stroke();

    // Add special effects for certain weapons
    if (projectile.weapon === 'cluster') {
      // Add sparkle effect for cluster bombs
      for (let i = 0; i < 3; i++) {
        const sparkleX = projectile.x - (Math.random() * 5 - 2.5);
        const sparkleY = projectile.y - (Math.random() * 5 - 2.5);
        const sparkleSize = Math.random() * 2 + 1;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(sparkleX, sparkleY, sparkleSize, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (projectile.weapon === 'bunker') {
      // Add smoke trail for bunker busters
      for (let i = 1; i <= 3; i++) {
        const smokeX = projectile.x - projectile.velocityX * (i * 1.2);
        const smokeY = projectile.y - projectile.velocityY * (i * 1.2);
        const smokeSize = projectileSize * (0.8 - i * 0.15);

        ctx.fillStyle = `rgba(100, 100, 100, ${0.4 - i * 0.1})`;
        ctx.beginPath();
        ctx.arc(smokeX, smokeY, smokeSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };

  // Draw wind indicator
  const drawWindIndicator = (ctx, wind) => {
    const windStrength = Math.abs(wind);
    const windDirection = wind < 0 ? 'left' : 'right';

    // Classic Tank Wars had a visual wind meter
    ctx.fillStyle = '#ffffff';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Wind', CANVAS_WIDTH / 2, 25);

    // Draw wind meter background
    const meterWidth = 100;
    const meterHeight = 10;
    const meterX = (CANVAS_WIDTH / 2) - (meterWidth / 2);
    const meterY = 35;

    // Draw meter background
    ctx.fillStyle = '#333333';
    ctx.fillRect(meterX, meterY, meterWidth, meterHeight);

    // Draw center line
    ctx.fillStyle = '#666666';
    ctx.fillRect(meterX + (meterWidth / 2) - 1, meterY, 2, meterHeight);

    // Draw wind indicator
    const maxWindStrength = 5; // Maximum wind strength
    const indicatorWidth = Math.min(windStrength / maxWindStrength, 1) * (meterWidth / 2);

    if (windDirection === 'right') {
      ctx.fillStyle = '#22c55e'; // Green for right wind
      ctx.fillRect(meterX + (meterWidth / 2), meterY, indicatorWidth, meterHeight);
    } else {
      ctx.fillStyle = '#ef4444'; // Red for left wind
      ctx.fillRect(meterX + (meterWidth / 2) - indicatorWidth, meterY, indicatorWidth, meterHeight);
    }

    // Draw wind value
    ctx.fillStyle = '#ffffff';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(windStrength.toFixed(1), CANVAS_WIDTH / 2, meterY + meterHeight + 12);
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
