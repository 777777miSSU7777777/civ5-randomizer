import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './RandomCivilization.css';

const CIVILIZATIONS = [
  'america', 'arabia', 'aztec', 'china', 'egypt', 'england', 'france', 'germany',
  'greece', 'india', 'japan', 'mongolia', 'rome', 'russia', 'siam', 'songhai',
  'spain', 'celts'
];

const LEADER_IMAGE_MAP: { [key: string]: string } = {
  'George Washington': 'washington',
  'Harun al-Rashid': 'harun',
  'Montezuma I': 'montezuma',
  'Wu Zetian': 'wu-zetian',
  'Ramesses II': 'ramesses',
  'Elizabeth I': 'elizabeth',
  'Napoleon Bonaparte': 'napoleon',
  'Otto von Bismarck': 'bismarck',
  'Alexander the Great': 'alexander',
  'Mahatma Gandhi': 'gandhi',
  'Oda Nobunaga': 'nobunaga',
  'Genghis Khan': 'genghis',
  'Augustus Caesar': 'augustus',
  'Catherine the Great': 'catherine',
  'Ramkhamhaeng': 'ramkhamhaeng',
  'Askia': 'askia',
  'Isabella': 'isabella',
  'Boudicca': 'boudicca'
};

const STORAGE_KEY = 'civ5_randomizer_last_civ';

const RandomCivilization: React.FC = () => {
  const [selectedCiv, setSelectedCiv] = useState<string | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Load last selected civilization from localStorage
    const lastCiv = localStorage.getItem(STORAGE_KEY);
    if (lastCiv && CIVILIZATIONS.includes(lastCiv)) {
      setSelectedCiv(lastCiv);
    }
  }, []);

  const selectRandomCiv = () => {
    const randomIndex = Math.floor(Math.random() * CIVILIZATIONS.length);
    const newCiv = CIVILIZATIONS[randomIndex];
    setSelectedCiv(newCiv);
    // Save selected civilization to localStorage
    localStorage.setItem(STORAGE_KEY, newCiv);
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
              src={`${process.env.PUBLIC_URL}/assets/leaders/${LEADER_IMAGE_MAP[t(`civilizations.${selectedCiv}.leader`)]}.png`}
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