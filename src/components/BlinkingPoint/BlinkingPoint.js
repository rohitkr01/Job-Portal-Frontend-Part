import React, { useState, useEffect } from 'react';
import './BlinkingPoint.css';

function BlinkingPoint() {
  const [layerCount] = useState(3); // Number of layers
  const layerColors = ['#ff6600', '#ffcc00', '#ff9900']; // Layer colors
  const layerSizes = [20, 40, 60]; // Layer sizes

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const layers = [];
  for (let i = 0; i < layerCount; i++) {
    layers.push(
      <div
        key={i}
        className={`layer ${isVisible ? 'visible' : 'hidden'}`}
        style={{
          backgroundColor: layerColors[i],
          width: `${layerSizes[i]}px`,
          height: `${layerSizes[i]}px`,
        }}
      ></div>
    );
  }

  return <div className="multi-layer-blinking-point">{layers}</div>;
}

export default BlinkingPoint;
