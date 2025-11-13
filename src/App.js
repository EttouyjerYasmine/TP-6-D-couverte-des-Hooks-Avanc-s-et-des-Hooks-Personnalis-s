// src/App.js
import React from 'react';
import Compteur from './Compteur';
import Horloge from './Horloge'; // si tu veux afficher l'horloge

function App() {
  return (
    <div>
      <h1>Mini TP React</h1>
      <Compteur />
      <Horloge />
    </div>
  );
}

export default App;
