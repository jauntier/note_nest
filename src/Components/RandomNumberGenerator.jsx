import React, { useState } from 'react';
import './stylefile.css';

const RandomNumberGenerator = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  const generateRandomNumbers = () => {
    const count = Math.floor(Math.random() * 10); 
    const numbers = Array.from({ length: count }, () => Math.floor(Math.random() * 8) + 1); 
    setRandomNumbers(numbers);
  };

  return (
    
    <div>
      <button className="generate-button" onClick={generateRandomNumbers}>Generate Random Numbers</button>
      <div className="random-numbers-container">
        {randomNumbers.length > 0 && (
          <p className="random-numbers">Random Numbers: {randomNumbers.join(', ')}</p>
        )}
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
