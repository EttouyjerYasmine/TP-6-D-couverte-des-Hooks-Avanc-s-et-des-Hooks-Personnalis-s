// src/Compteur.js
import React, { useReducer, useEffect } from 'react';

// 1️⃣ UNE SEULE déclaration du reducer
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Action non reconnue');
  }
}

// État initial
const initialState = { count: Number(localStorage.getItem('count')) || 0 };

// 2️⃣ Composant Compteur
function Compteur() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('count', state.count);
  }, [state.count]);

  return (
    <div>
      <p>Compteur : {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Remettre à zéro</button>
    </div>
  );
}

export default Compteur;
