import React, { useEffect } from 'react';
import './ColorfulWavePoint.css';

const ColorfulWavePoint = () => {
  useEffect(() => {
    const container = document.getElementById('bubble-container');

    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = `${Math.random() * 100}vw`;
      container.appendChild(bubble);

      bubble.addEventListener('animationend', () => {
        bubble.remove();
      });
    };

    const waveColors = ['red', 'blue', 'green', 'purple'];

    const createWave = (color) => {
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          createBubble();
        }, i * 100);
      }
    };

    const startWaves = () => {
      waveColors.forEach((color, index) => {
        setTimeout(() => {
          createWave(color);
        }, index * 500);
      });
    };

    startWaves();
  }, []);

  return (
    <div id="bubble-container" className="bubble-container">
    </div>
  );
};

export default ColorfulWavePoint;
