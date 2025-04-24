/**
 * Physics utilities for Tank Wars
 * Handles projectile motion, gravity, wind, and collisions
 */

// Constants
const GRAVITY = 0.2; // Classic Tank Wars gravity - slightly stronger for more arc
const WIND_FACTOR = 0.008; // Wind factor - more noticeable like in classic game
const MAX_VELOCITY = 20; // Maximum velocity - higher to allow for more powerful shots

// Calculate projectile trajectory with gravity and wind
export function calculateProjectilePosition(projectile, wind = 0) {
  // Apply gravity
  projectile.velocityY += GRAVITY;

  // Apply wind (more subtle effect)
  projectile.velocityX += wind * WIND_FACTOR;

  // Limit maximum velocity to prevent extreme speeds
  projectile.velocityX = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, projectile.velocityX));
  projectile.velocityY = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, projectile.velocityY));

  // Update position
  projectile.x += projectile.velocityX;
  projectile.y += projectile.velocityY;

  return projectile;
}

// Calculate initial velocity components based on angle and power
export function calculateInitialVelocity(angle, power) {
  // Convert angle from degrees to radians
  const radians = (angle * Math.PI) / 180;

  // Calculate velocity components with classic Tank Wars scaling
  // In classic Tank Wars, power had a more direct impact on velocity
  // Divide by 10 for a more pronounced effect with higher power values
  const velocityX = Math.cos(radians) * (power / 10);
  const velocityY = -Math.sin(radians) * (power / 10);

  return { velocityX, velocityY };
}

// Check if projectile collides with terrain
export function checkTerrainCollision(projectile, terrainPoints, width, height) {
  // Check if out of bounds
  if (projectile.x < 0 || projectile.x > width || projectile.y < 0) {
    return false;
  }

  // Check if below terrain
  if (projectile.y > height) {
    return true;
  }

  // Get terrain height at projectile x position
  const terrainHeight = getTerrainHeightAt(terrainPoints, projectile.x);

  // Check if projectile is below terrain
  return projectile.y >= terrainHeight;
}

// Get terrain height at a specific x position
function getTerrainHeightAt(terrainPoints, x) {
  if (!terrainPoints || terrainPoints.length < 2) return 0;

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
}

// Check if projectile collides with a tank
export function checkTankCollision(projectile, tanks, tankSize) {
  for (const tankId in tanks) {
    const tank = tanks[tankId];

    // Skip if it's the same tank that fired the projectile
    if (tank.id === projectile.ownerId) continue;

    // Simple collision detection using distance
    const dx = projectile.x - (tank.x + tankSize / 2);
    const dy = projectile.y - (tank.y + tankSize / 2);
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < tankSize / 2) {
      return { collided: true, tankId };
    }
  }

  return { collided: false };
}

// Calculate damage based on distance from explosion center
export function calculateDamage(distance, explosionRadius, maxDamage) {
  if (distance > explosionRadius) return 0;

  // Linear falloff of damage based on distance
  const damageRatio = 1 - (distance / explosionRadius);
  return Math.floor(maxDamage * damageRatio);
}
