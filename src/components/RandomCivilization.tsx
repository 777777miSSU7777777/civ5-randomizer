import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './RandomCivilization.css';

const CIVILIZATIONS = [
  'america', 'arabia', 'aztec', 'china', 'egypt', 'england', 'france', 'germany',
  'greece', 'india', 'japan', 'mongolia', 'rome', 'russia', 'siam', 'songhai',
  'spain', 'celts'
];

const RandomCivilization: React.FC = () => {
  const [selectedCiv, setSelectedCiv] = useState<string | null>(null);
  const { t } = useTranslation();

  const selectRandomCiv = () => {
    const randomIndex = Math.floor(Math.random() * CIVILIZATIONS.length);
    setSelectedCiv(CIVILIZATIONS[randomIndex]);
  };

  return (
    <div className="random-civ-container">
      <button className="random-button" onClick={selectRandomCiv}>
        {t('button')}
      </button>
      
      {selectedCiv && (
        <div className="civ-card">
          <div className="civ-header">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/leaders/${t(`civilizations.${selectedCiv}.leader`).toLowerCase()}.png`}
              alt={t(`civilizations.${selectedCiv}.leader`)}
              className="leader-image"
            />
            <h2>{t(`civilizations.${selectedCiv}.name`)}</h2>
          </div>
          <div className="civ-details">
            <p><strong>{t('selectedCiv.leader')}:</strong> {t(`civilizations.${selectedCiv}.leader`)}</p>
            <p><strong>{t('selectedCiv.uniqueUnit')}:</strong> {t(`civilizations.${selectedCiv}.uniqueUnit`)}</p>
            <p><strong>{t('selectedCiv.uniqueBuilding')}:</strong> {t(`civilizations.${selectedCiv}.uniqueBuilding`)}</p>
            <p><strong>{t('selectedCiv.specialAbility')}:</strong> {t(`civilizations.${selectedCiv}.specialAbility`)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomCivilization; 