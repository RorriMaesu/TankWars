import { useEffect, useRef } from 'react';
import '../styles/Projectile.css';

function Projectile({ projectile }) {
  const projectileRef = useRef(null);

  useEffect(() => {
    if (projectileRef.current) {
      // Update projectile position
      projectileRef.current.style.transform = `translate(${projectile.x}px, ${projectile.y}px)`;
    }
  }, [projectile.x, projectile.y]);

  return (
    <div 
      ref={projectileRef}
      className="projectile"
      style={{
        transform: `translate(${projectile.x}px, ${projectile.y}px)`,
      }}
    />
  );
}

export default Projectile;
