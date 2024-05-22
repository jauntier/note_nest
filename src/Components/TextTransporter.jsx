import React, { useState } from 'react';
import './stylefile.css';

const TextTransporter = () => {
  const [inputText, setInputText] = useState('');
  const [transportedTexts, setTransportedTexts] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTransportClick = () => {
    setTransportedTexts([...transportedTexts, inputText]);
    setInputText(''); 
  };

  return (
 
    <div>
      <input
        className="transport-input"
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type your idea..."
      />
      <button className="transport-button" onClick={handleTransportClick}>Save idea</button>
      <div className="transported-texts-container">
        {transportedTexts.map((text, index) => (
          <p className="transported-text" key={index}>IDEA {index + 1}: {text}</p>
        ))}
      </div>
    </div>
  );
};

export default TextTransporter;
