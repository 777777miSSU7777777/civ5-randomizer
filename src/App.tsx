import React from 'react';
import './App.css';
import RandomCivilization from './components/RandomCivilization';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Civilization V Randomizer</h1>
        <p>Click the button to get your random civilization!</p>
      </header>
      <main>
        <RandomCivilization />
      </main>
    </div>
  );
}

export default App;
