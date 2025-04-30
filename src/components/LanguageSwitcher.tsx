import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        <img 
          src={`${process.env.PUBLIC_URL}/assets/flags/us.svg`} 
          alt="English" 
          className="flag-icon"
        />
        <span>{t('language.en')}</span>
      </button>
      <button
        className={`language-button ${i18n.language === 'ru' ? 'active' : ''}`}
        onClick={() => changeLanguage('ru')}
      >
        <img 
          src={`${process.env.PUBLIC_URL}/assets/flags/ru.svg`} 
          alt="Russian" 
          className="flag-icon"
        />
        <span>{t('language.ru')}</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher; 