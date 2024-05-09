

import React, { useState } from 'react';
import './stylefile.css';

function Dictionary() {
    const [searchTerm, setSearchTerm] = useState('');
    const [meaning, setMeaning] = useState('');

    const fetchDefinition = () => {
        fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${searchTerm}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '3a0a8b6c65msha2ae1750d2955aep14edb5jsn812876864661',
                'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.list && data.list.length > 0) {
                setMeaning(data.list[0].definition);
            } else {
                setMeaning('No definition found for this term.');
            }
        })
        .catch(error => console.error('Error fetching definition:', error));
    };

    return (
        <div>
            <h1>Urban Dictionary</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Type a word..."
                className="box"
            />
            <button onClick={fetchDefinition}>Search</button>
            <div>
                {meaning && <p>{meaning}</p>}
            </div>
        </div>
    );
}

export default Dictionary;
