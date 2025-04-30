import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { civilizations } from '../data/civilizations';
import './RandomCivilization.css';

const RandomCivilization: React.FC = () => {
  const [selectedCiv, setSelectedCiv] = useState<number | null>(null);
  const { t } = useTranslation();

  const selectRandomCiv = () => {
    const randomIndex = Math.floor(Math.random() * civilizations.length);
    setSelectedCiv(randomIndex);
  };

  return (
    <div className="random-civ-container">
      <button className="random-button" onClick={selectRandomCiv}>
        {t('button')}
      </button>
      
      {selectedCiv !== null && (
        <div className="civ-card">
          <div className="civ-header">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/leaders/${civilizations[selectedCiv].leader.name.toLowerCase()}.png`}
              alt={civilizations[selectedCiv].leader.name}
              className="leader-image"
            />
            <h2>{civilizations[selectedCiv].name}</h2>
          </div>
          <div className="civ-details">
            <p><strong>{t('selectedCiv.leader')}:</strong> {civilizations[selectedCiv].leader.fullName}</p>
            <p><strong>{t('selectedCiv.uniqueUnit')}:</strong> {civilizations[selectedCiv].uniqueUnit}</p>
            <p><strong>{t('selectedCiv.uniqueBuilding')}:</strong> {civilizations[selectedCiv].uniqueBuilding}</p>
            <p><strong>{t('selectedCiv.specialAbility')}:</strong> {civilizations[selectedCiv].specialAbility}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomCivilization; 