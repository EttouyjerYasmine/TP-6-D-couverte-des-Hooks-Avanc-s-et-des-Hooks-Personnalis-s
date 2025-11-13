// src/Horloge.js
import React, { useState, useEffect } from 'react';

function Horloge() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <p>Heure actuelle : {date.toLocaleTimeString()}</p>;
}

export default Horloge;
