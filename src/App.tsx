import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import './i18n';
import RandomCivilization from './components/RandomCivilization';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <LanguageSwitcher />
      <header className="App-header">
        <h1>{t('title')}</h1>
        <p>{t('subtitle')}</p>
      </header>
      <main>
        <RandomCivilization />
      </main>
    </div>
  );
}

export default App;
