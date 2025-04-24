import { useState, useEffect } from 'react';
import { ref, update } from 'firebase/database';
import { database } from '../firebase';
import { calculateInitialVelocity } from '../utils/physics';
import '../styles/GameControls.css';

// Constants
const CANVAS_WIDTH = 800; // Match the constant in GameCanvas

// Available weapons
const WEAPONS = [
  {
    id: 'basic',
    name: 'Basic Shell',
    damage: 25,
    radius: 30,
    description: 'Standard shell with balanced damage and radius.'
  },
  {
    id: 'heavy',
    name: 'Heavy Shell',
    damage: 40,
    radius: 35,
    limited: true,
    count: 3,
    description: 'Powerful shell with increased damage and explosion radius. Limited to 3 uses.'
  },
  {
    id: 'cluster',
    name: 'Cluster Bomb',
    damage: 15,
    radius: 20,
    cluster: true,
    limited: true,
    count: 2,
    description: 'Splits into multiple smaller explosions on impact. Great for uneven terrain. Limited to 2 uses.'
  },
  {
    id: 'bunker',
    name: 'Bunker Buster',
    damage: 50,
    radius: 40,
    penetration: true,
    limited: true,
    count: 1,
    description: 'Extremely powerful shell that penetrates terrain before exploding. Limited to 1 use.'
  }
];

function GameControls({ onFire, isCurrentTurn, gameState, currentPlayerId, gameId }) {
  const [angle, setAngle] = useState(45);
  const [power, setPower] = useState(gameState.tanks && gameState.tanks[currentPlayerId] ?
    gameState.tanks[currentPlayerId].power || 50 : 50);
  const [selectedWeapon, setSelectedWeapon] = useState(WEAPONS[0]);
  const [showWeaponMenu, setShowWeaponMenu] = useState(false);
  const [weapons, setWeapons] = useState(WEAPONS.map(w => ({ ...w })));

  // Reset weapons when game state changes
  useEffect(() => {
    if (gameState.status === 'playing' && !gameState.weaponsInitialized) {
      setWeapons(WEAPONS.map(w => ({ ...w })));
    }

    // Update power from tank data if it exists
    if (gameState.tanks && gameState.tanks[currentPlayerId] &&
        gameState.tanks[currentPlayerId].power !== undefined) {
      setPower(gameState.tanks[currentPlayerId].power);
    }

    // Log current turn and player status for debugging
    console.log('GameControls - Current turn:', gameState.currentTurn);
    console.log('GameControls - Is current player turn:', isCurrentTurn);
    console.log('GameControls - Projectile active:', gameState.projectile?.active);
  }, [gameState, isCurrentTurn, currentPlayerId]);

  // Handle angle change
  const handleAngleChange = (increment) => {
    setAngle(prev => {
      const newAngle = prev + increment;
      // In classic Tank Wars, angle is limited between 0 and 90 degrees
      // For left tank (0-90), for right tank (90-180)

      // Get the current tank
      const currentTank = gameState.tanks[currentPlayerId];
      if (!currentTank) return prev;

      // Check if this is a left or right tank based on position
      const isLeftTank = currentTank.x < CANVAS_WIDTH / 2;

      // Apply appropriate angle limits
      if (isLeftTank) {
        // Left tank: 0 to 90 degrees (facing right)
        const limitedAngle = Math.max(0, Math.min(90, newAngle));

        // Update the tank's angle in the database to match the firing angle
        // This will rotate the tank barrel
        const tankRef = ref(database, `games/${gameId}/tanks/${currentPlayerId}`);
        update(tankRef, { angle: limitedAngle });

        return limitedAngle;
      } else {
        // Right tank: 90 to 180 degrees (facing left)
        // Convert the input angle (0-90) to the appropriate range (180-90)
        const actualAngle = 180 - newAngle;
        const limitedAngle = Math.max(90, Math.min(180, actualAngle));

        // Update the tank's angle in the database
        const tankRef = ref(database, `games/${gameId}/tanks/${currentPlayerId}`);
        update(tankRef, { angle: limitedAngle });

        // Return the UI angle (0-90)
        return Math.max(0, Math.min(90, newAngle));
      }
    });
  };

  // Handle power change
  const handlePowerChange = (increment) => {
    setPower(prev => {
      const newPower = Math.max(10, Math.min(100, prev + increment));

      // Update the tank's power in the database
      // This will be used for the visual power indicator
      if (gameId && currentPlayerId) {
        const tankRef = ref(database, `games/${gameId}/tanks/${currentPlayerId}`);
        update(tankRef, { power: newPower });
      }

      return newPower;
    });
  };

  // Handle weapon selection
  const handleSelectWeapon = (weapon) => {
    setSelectedWeapon(weapon);
    setShowWeaponMenu(false);
  };

  // Handle fire button click
  const handleFire = () => {
    if (!isCurrentTurn) return;

    // Get current tank position and angle
    const currentTank = gameState.tanks[currentPlayerId];
    if (!currentTank) return;

    // Use the tank's actual angle for velocity calculation, not the UI angle
    const tankAngle = currentTank.angle;

    // Calculate initial velocity using the tank's angle
    const { velocityX, velocityY } = calculateInitialVelocity(tankAngle, power);

    // Calculate projectile starting position from the end of the barrel
    const TANK_WIDTH = 40; // Match the constant in GameCanvas
    const TANK_HEIGHT = 20; // Match the constant in GameCanvas
    const TANK_BARREL_LENGTH = 30; // Match the constant in GameCanvas

    // Get the tank's angle (not the firing angle set by the player)
    // In classic Tank Wars, the tank's barrel rotates to match the firing angle
    const tankAngle = currentTank.angle;

    // Convert tank angle to radians
    const tankRadians = (tankAngle * Math.PI) / 180;

    // Calculate the center of the tank
    const tankCenterX = currentTank.x + TANK_WIDTH / 2;
    const tankCenterY = currentTank.y + TANK_HEIGHT / 2;

    // Calculate the end of the barrel using the tank's angle
    const barrelEndX = tankCenterX + Math.cos(tankRadians) * TANK_BARREL_LENGTH;
    const barrelEndY = tankCenterY + Math.sin(tankRadians) * TANK_BARREL_LENGTH;

    // Log for debugging
    console.log('Tank angle:', tankAngle);
    console.log('Firing angle:', angle);
    console.log('Barrel end position:', barrelEndX, barrelEndY);

    // Create projectile at the end of the barrel
    const projectile = {
      active: true,
      x: barrelEndX,
      y: barrelEndY,
      velocityX,
      velocityY,
      ownerId: currentPlayerId,
      weapon: selectedWeapon.id
    };

    // Update weapon count if limited
    if (selectedWeapon.limited) {
      const updatedWeapons = [...weapons];
      const weaponIndex = updatedWeapons.findIndex(w => w.id === selectedWeapon.id);

      if (weaponIndex !== -1 && updatedWeapons[weaponIndex].count > 0) {
        updatedWeapons[weaponIndex].count--;
        setWeapons(updatedWeapons);

        // Switch to basic weapon if out of ammo
        if (updatedWeapons[weaponIndex].count === 0) {
          setSelectedWeapon(WEAPONS[0]);
        }
      }
    }

    // Fire the projectile
    onFire(projectile);
  };

  // Render the weapon selection menu
  const renderWeaponMenu = () => {
    return (
      <div className="weapon-menu">
        <h3>Select Weapon</h3>
        <div className="weapon-grid">
          {weapons.map(weapon => (
            <button
              key={weapon.id}
              className={`weapon-item ${weapon.id === selectedWeapon.id ? 'selected' : ''}`}
              onClick={() => handleSelectWeapon(weapon)}
              disabled={weapon.limited && weapon.count === 0}
            >
              <div className="weapon-name">{weapon.name}</div>
              <div className="weapon-description">{weapon.description}</div>
              {weapon.limited && (
                <div className="weapon-count">
                  {weapon.count > 0
                    ? `${weapon.count} left`
                    : 'Out of ammo'}
                </div>
              )}
              <div className="weapon-stats">
                <span>Damage: {weapon.damage}</span>
                <span>Radius: {weapon.radius}</span>
              </div>
            </button>
          ))}
        </div>
        <button className="close-menu" onClick={() => setShowWeaponMenu(false)}>
          Cancel
        </button>
      </div>
    );
  };

  // Get the current tank for UI display
  const currentTank = gameState.tanks ? gameState.tanks[currentPlayerId] : null;

  return (
    <div className="game-controls">
      {showWeaponMenu ? (
        renderWeaponMenu()
      ) : (
        <>
          <div className="control-panel">
            <div className="control-group">
              <label>Angle: {angle}° {currentTank && currentTank.x > CANVAS_WIDTH / 2 ? `(${180-angle}° actual)` : ''}</label>
              <div className="button-group">
                <button onClick={() => handleAngleChange(-5)} disabled={!isCurrentTurn}>-5°</button>
                <button onClick={() => handleAngleChange(-1)} disabled={!isCurrentTurn}>-1°</button>
                <button onClick={() => handleAngleChange(1)} disabled={!isCurrentTurn}>+1°</button>
                <button onClick={() => handleAngleChange(5)} disabled={!isCurrentTurn}>+5°</button>
              </div>
            </div>

            <div className="control-group">
              <label>Power: {power}%</label>
              <div className="button-group">
                <button onClick={() => handlePowerChange(-10)} disabled={!isCurrentTurn}>-10%</button>
                <button onClick={() => handlePowerChange(-5)} disabled={!isCurrentTurn}>-5%</button>
                <button onClick={() => handlePowerChange(5)} disabled={!isCurrentTurn}>+5%</button>
                <button onClick={() => handlePowerChange(10)} disabled={!isCurrentTurn}>+10%</button>
              </div>
            </div>

            <div className="control-group">
              <label>Weapon</label>
              <button
                className="weapon-select"
                onClick={() => setShowWeaponMenu(true)}
                disabled={!isCurrentTurn}
              >
                {selectedWeapon.name}
                {selectedWeapon.limited && ` (${weapons.find(w => w.id === selectedWeapon.id)?.count || 0} left)`}
              </button>
            </div>

            <button
              className="fire-button"
              onClick={handleFire}
              disabled={!isCurrentTurn || gameState.projectile?.active}
            >
              FIRE!
            </button>
          </div>

          <div className="player-info">
            {Object.values(gameState.tanks || {}).map(tank => (
              <div
                key={tank.id}
                className={`player-status ${tank.id === currentPlayerId ? 'current-player' : ''} ${tank.id === gameState.currentTurn ? 'active-turn' : ''}`}
              >
                <div className="player-name">
                  {tank.name}
                  {tank.id === gameState.currentTurn && <span className="turn-indicator"> (Current Turn)</span>}
                </div>
                <div className="player-health">
                  <div className="health-bar" style={{ width: `${tank.health}%` }}></div>
                  <span>{tank.health}%</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default GameControls;
