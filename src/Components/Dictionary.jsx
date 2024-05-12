

import React, { useState } from 'react';
import './stylefile.css';
import { useEffect } from 'react';

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
    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetchBooks();
    }, []);
  
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyAEqhC_UVWp2xAjwi-7z-mO7vwPFdbkcNE`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        const bookItems = data.items.map((item) => ({
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown',
            publisher: item.volumeInfo.publisher || 'Unknown',
            publishedDate: item.volumeInfo.publishedDate || 'Unknown',
            description: item.volumeInfo.description || 'No description available',
            industryIdentifiers: item.volumeInfo.industryIdentifiers || [],
            pageCount: item.volumeInfo.pageCount || 0,
            printType: item.volumeInfo.printType || 'Unknown',
            categories: item.volumeInfo.categories || ['Unknown'],
            averageRating: item.volumeInfo.averageRating || 0,
            language: item.volumeInfo.language || 'Unknown',
          }));
          
        
        setBooks(bookItems);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    return (
        <div>
            <h1>A Dictionary</h1>
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
            <div>
      <h2>Book List</h2>
      <ul className="ull">
  {books.map((book, index) => (
    <li className="lii" key={index}>
      <strong>Title:</strong> {book.title} - <strong>Author(s):</strong> {book.authors}<br />
      <strong>Publisher:</strong> {book.publisher}<br />
      <strong>Published Date:</strong> {book.publishedDate}<br />
      <strong>Description:</strong> {book.description}<br />
      <strong>Industry Identifiers:</strong> {book.industryIdentifiers.map((identifier, index) => (
        <span key={index}>{identifier.type}: {identifier.identifier}<br /></span>
      ))}
      <strong>Page Count:</strong> {book.pageCount}<br />
      <strong>Print Type:</strong> {book.printType}<br />
      <strong>Categories:</strong> {book.categories.join(', ')}<br />
      <strong>Average Rating:</strong> {book.averageRating}<br />
      <strong>Language:</strong> {book.language}<br />
    </li>
  ))}
</ul>

    </div>
        </div>
    );
}

export default Dictionary;
