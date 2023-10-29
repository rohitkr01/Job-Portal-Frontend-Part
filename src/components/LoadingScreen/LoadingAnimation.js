import React, { useState, useEffect } from 'react';
import '../LoadingScreen/LoadingAnimation.css';


function LoadingAnimation() {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots + 1) % 4);
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="loading-dots">
      <span className={`dot ${dots === 0 ? 'active' : ''}`}></span>
      <span className={`dot ${dots === 1 ? 'active' : ''}`}></span>
      <span className={`dot ${dots === 2 ? 'active' : ''}`}></span>
      <span className={`dot ${dots === 3 ? 'active' : ''}`}></span>
    </div>
  );
}

export default LoadingAnimation;
