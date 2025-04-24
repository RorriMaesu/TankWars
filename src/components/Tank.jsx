import { useEffect, useRef } from 'react';
import '../styles/Tank.css';

function Tank({ tank, isCurrentPlayer }) {
  const tankRef = useRef(null);

  useEffect(() => {
    if (tankRef.current) {
      // Update tank position and rotation
      tankRef.current.style.transform = `translate(${tank.x}px, ${tank.y}px) rotate(${tank.angle}deg)`;
    }
  }, [tank.x, tank.y, tank.angle]);

  // Calculate health percentage
  const healthPercentage = (tank.health / 100) * 100;

  return (
    <div 
      ref={tankRef}
      className={`tank ${isCurrentPlayer ? 'current-player' : ''} ${tank.color}`}
      style={{
        transform: `translate(${tank.x}px, ${tank.y}px) rotate(${tank.angle}deg)`,
      }}
    >
      <div className="tank-body">
        <div className="tank-turret"></div>
      </div>
      <div className="tank-name">{tank.name}</div>
      <div className="health-bar-container">
        <div 
          className="health-bar" 
          style={{ width: `${healthPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Tank;
