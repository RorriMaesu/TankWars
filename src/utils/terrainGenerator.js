/**
 * Terrain generator for Tank Wars
 * Generates a procedural 2D terrain for the game
 */

// Generate a random terrain using Perlin-like noise
export function generateTerrain(width, height, roughness = 0.6, segments = 20) {
  // Create an array of terrain points
  const points = [];
  const segmentWidth = width / segments;
  
  // Generate random heights for each segment
  for (let i = 0; i <= segments; i++) {
    const x = i * segmentWidth;
    
    // Generate a height value between 30% and 70% of the canvas height
    const minHeight = height * 0.3;
    const maxHeight = height * 0.7;
    const heightRange = maxHeight - minHeight;
    
    // Use a simple noise function for height
    const noiseValue = Math.sin(i * roughness) * 0.5 + 0.5;
    const y = minHeight + noiseValue * heightRange;
    
    points.push({ x, y });
  }
  
  // Add some random variation to make it more interesting
  for (let i = 1; i < points.length - 1; i++) {
    points[i].y += (Math.random() - 0.5) * height * 0.2;
  }
  
  return points;
}

// Create terrain path for canvas drawing
export function createTerrainPath(ctx, terrainPoints, width, height) {
  if (!terrainPoints || terrainPoints.length === 0) return;
  
  ctx.beginPath();
  ctx.moveTo(0, terrainPoints[0].y);
  
  // Draw the terrain curve
  for (let i = 0; i < terrainPoints.length; i++) {
    const point = terrainPoints[i];
    ctx.lineTo(point.x, point.y);
  }
  
  // Close the path by drawing to the bottom corners
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
}

// Get the terrain height at a specific x position
export function getTerrainHeightAt(terrainPoints, x) {
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

// Modify terrain after an explosion
export function createExplosion(terrainPoints, x, radius, power) {
  const modifiedTerrain = [...terrainPoints];
  
  for (let i = 0; i < modifiedTerrain.length; i++) {
    const point = modifiedTerrain[i];
    const distance = Math.sqrt(Math.pow(point.x - x, 2));
    
    if (distance < radius) {
      // Create a crater effect
      const impact = power * (1 - distance / radius);
      point.y += impact;
    }
  }
  
  return modifiedTerrain;
}
