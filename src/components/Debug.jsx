import { useState, useEffect } from 'react';
import { auth, database } from '../firebase';

function Debug() {
  const [debugInfo, setDebugInfo] = useState({
    environment: 'Unknown',
    authInitialized: false,
    databaseInitialized: false,
    currentUrl: '',
    basePath: '',
  });

  useEffect(() => {
    // Get environment info
    const environment = process.env.NODE_ENV || 'Unknown';
    
    // Check auth initialization
    const authInitialized = auth ? true : false;
    
    // Check database initialization
    const databaseInitialized = database ? true : false;
    
    // Get current URL
    const currentUrl = window.location.href;
    
    // Get base path
    const basePath = window.location.pathname;

    setDebugInfo({
      environment,
      authInitialized,
      databaseInitialized,
      currentUrl,
      basePath,
    });
  }, []);

  return (
    <div className="debug-panel" style={{ 
      position: 'fixed', 
      bottom: '10px', 
      right: '10px', 
      background: 'rgba(0,0,0,0.8)', 
      color: '#00ff00', 
      padding: '10px', 
      borderRadius: '5px',
      fontSize: '12px',
      fontFamily: 'monospace',
      zIndex: 9999,
      maxWidth: '400px',
      maxHeight: '200px',
      overflow: 'auto'
    }}>
      <h4 style={{ margin: '0 0 5px 0' }}>Debug Info</h4>
      <div>Environment: {debugInfo.environment}</div>
      <div>Auth Initialized: {debugInfo.authInitialized ? 'Yes' : 'No'}</div>
      <div>Database Initialized: {debugInfo.databaseInitialized ? 'Yes' : 'No'}</div>
      <div>URL: {debugInfo.currentUrl}</div>
      <div>Path: {debugInfo.basePath}</div>
      <button 
        onClick={() => console.log('Current Firebase Auth:', auth)} 
        style={{ 
          background: '#333', 
          color: 'white', 
          border: 'none', 
          padding: '3px 5px', 
          margin: '5px 0', 
          cursor: 'pointer' 
        }}
      >
        Log Auth
      </button>
    </div>
  );
}

export default Debug;
