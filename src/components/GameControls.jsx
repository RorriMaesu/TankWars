import { useState, useEffect } from 'react';
import { calculateInitialVelocity } from '../utils/physics';
import '../styles/GameControls.css';

// Available weapons
const WEAPONS = [
  { id: 'basic', name: 'Basic Shell', damage: 25, radius: 30 },
  { id: 'heavy', name: 'Heavy Shell', damage: 40, radius: 35, limited: true, count: 3 },
  { id: 'cluster', name: 'Cluster Bomb', damage: 15, radius: 20, cluster: true, limited: true, count: 2 },
  { id: 'bunker', name: 'Bunker Buster', damage: 50, radius: 40, penetration: true, limited: true, count: 1 }
];

function GameControls({ onFire, isCurrentTurn, gameState, currentPlayerId }) {
  const [angle, setAngle] = useState(45);
  const [power, setPower] = useState(50);
  const [selectedWeapon, setSelectedWeapon] = useState(WEAPONS[0]);
  const [showWeaponMenu, setShowWeaponMenu] = useState(false);
  const [weapons, setWeapons] = useState(WEAPONS.map(w => ({ ...w })));
  
  // Reset weapons when game state changes
  useEffect(() => {
    if (gameState.status === 'playing' && !gameState.weaponsInitialized) {
      setWeapons(WEAPONS.map(w => ({ ...w })));
    }
  }, [gameState]);
  
  // Handle angle change
  const handleAngleChange = (increment) => {
    setAngle(prev => {
      const newAngle = prev + increment;
      return Math.max(0, Math.min(90, newAngle));
    });
  };
  
  // Handle power change
  const handlePowerChange = (increment) => {
    setPower(prev => {
      const newPower = prev + increment;
      return Math.max(10, Math.min(100, newPower));
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
    
    // Calculate initial velocity
    const { velocityX, velocityY } = calculateInitialVelocity(angle, power);
    
    // Get current tank position
    const currentTank = gameState.tanks[currentPlayerId];
    if (!currentTank) return;
    
    // Create projectile
    const projectile = {
      active: true,
      x: currentTank.x + 20, // Center of tank
      y: currentTank.y,
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
              {weapon.limited && (
                <div className="weapon-count">{weapon.count} left</div>
              )}
            </button>
          ))}
        </div>
        <button className="close-menu" onClick={() => setShowWeaponMenu(false)}>
          Cancel
        </button>
      </div>
    );
  };
  
  return (
    <div className="game-controls">
      {showWeaponMenu ? (
        renderWeaponMenu()
      ) : (
        <>
          <div className="control-panel">
            <div className="control-group">
              <label>Angle: {angle}°</label>
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
                className={`player-status ${tank.id === currentPlayerId ? 'current-player' : ''}`}
              >
                <div className="player-name">{tank.name}</div>
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
