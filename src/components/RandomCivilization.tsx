import React, { useState } from 'react';
import { civilizations } from '../data/civilizations';
import './RandomCivilization.css';

const RandomCivilization: React.FC = () => {
  const [selectedCiv, setSelectedCiv] = useState<number | null>(null);

  const selectRandomCiv = () => {
    const randomIndex = Math.floor(Math.random() * civilizations.length);
    setSelectedCiv(randomIndex);
  };

  return (
    <div className="random-civ-container">
      <button className="random-button" onClick={selectRandomCiv}>
        Choose Random Civilization
      </button>
      
      {selectedCiv !== null && (
        <div className="civ-card">
          <div className="civ-header">
            <img 
              src={`/src/assets/leaders/${civilizations[selectedCiv].leader.name.toLowerCase()}.png`}
              alt={civilizations[selectedCiv].leader.name}
              className="leader-image"
            />
            <h2>{civilizations[selectedCiv].name}</h2>
          </div>
          <div className="civ-details">
            <p><strong>Leader:</strong> {civilizations[selectedCiv].leader.fullName}</p>
            <p><strong>Unique Unit:</strong> {civilizations[selectedCiv].uniqueUnit}</p>
            <p><strong>Unique Building:</strong> {civilizations[selectedCiv].uniqueBuilding}</p>
            <p><strong>Special Ability:</strong> {civilizations[selectedCiv].specialAbility}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomCivilization; 