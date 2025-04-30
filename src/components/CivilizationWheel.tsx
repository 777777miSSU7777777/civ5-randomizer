import React, { useState } from 'react';
import { civilizations } from '../data/civilizations';
import './CivilizationWheel.css';

const CivilizationWheel: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedCiv, setSelectedCiv] = useState<number | null>(null);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const randomRotation = Math.floor(Math.random() * 360) + 3600; // At least 10 full rotations
    setRotation(rotation + randomRotation);
    
    // Calculate which civilization will be selected
    setTimeout(() => {
      const normalizedRotation = (rotation + randomRotation) % 360;
      const sliceAngle = 360 / civilizations.length;
      const selectedIndex = Math.floor(normalizedRotation / sliceAngle);
      setSelectedCiv(selectedIndex);
      setIsSpinning(false);
    }, 5000); // Match this with CSS transition duration
  };

  return (
    <div className="wheel-container">
      <div 
        className={`wheel ${isSpinning ? 'spinning' : ''}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {civilizations.map((civ, index) => {
          const angle = (360 / civilizations.length) * index;
          const hue = (360 / civilizations.length) * index;
          return (
            <div
              key={civ.id}
              className="wheel-slice"
              style={{
                transform: `rotate(${angle}deg)`,
                background: `linear-gradient(45deg, hsl(${hue}, 70%, 35%), hsl(${hue}, 70%, 45%))`
              }}
            >
              <div className="slice-content">
                <img 
                  src={`/src/assets/leaders/${civ.leader.name.toLowerCase()}.png`}
                  alt={civ.leader.name}
                  className="leader-image"
                />
                <span className="civ-name">{civ.name}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="wheel-pointer"></div>
      <button 
        className="spin-button"
        onClick={spinWheel}
        disabled={isSpinning}
      >
        {isSpinning ? 'Spinning...' : 'Spin the Wheel!'}
      </button>
      {selectedCiv !== null && (
        <div className="selected-civ">
          <h2>Selected Civilization:</h2>
          <h3>{civilizations[selectedCiv].name}</h3>
          <p>Leader: {civilizations[selectedCiv].leader.fullName}</p>
          <p>Unique Unit: {civilizations[selectedCiv].uniqueUnit}</p>
          <p>Unique Building: {civilizations[selectedCiv].uniqueBuilding}</p>
          <p>Special Ability: {civilizations[selectedCiv].specialAbility}</p>
        </div>
      )}
    </div>
  );
};

export default CivilizationWheel; 