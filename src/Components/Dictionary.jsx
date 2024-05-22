import React, { useState, useEffect, useContext } from 'react';
import './stylefile.css';

import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet';



const PINK = 'rgba(255, 192, 203, 0.6)';
const BLUE = 'rgba(0, 0, 255, 0.6)';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? PINK : BLUE }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Dictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [meaning, setMeaning] = useState('');
  const [books, setBooks] = useState([]);

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

  const fetchBooks = async () => {
    try {
      let allBooks = [];
      let nextPageToken = null;
  
      do {
        const url = `https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=40${nextPageToken ? `&pageToken=${nextPageToken}` : ''}`;
  
        const response = await fetch(url);
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
          previewLink: item.volumeInfo.previewLink,
          imageLinks: item.volumeInfo.imageLinks || {},
          maturityRating: item.volumeInfo.maturityRating || 'Unknown',
          ratingsCount: item.volumeInfo.ratingsCount || 0,
          infoLink: item.volumeInfo.infoLink,
          canonicalVolumeLink: item.volumeInfo.canonicalVolumeLink
        }));
  
        allBooks = [...allBooks, ...bookItems];
        nextPageToken = data.nextPageToken;
      } while (nextPageToken);
  
      setBooks(allBooks);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  
  
  
  

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
       <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Chela+One&family=Gideon+Roman&family=Kumar+One&family=Labrada:ital,wght@0,100..900;1,100..900&family=Langar&family=Lumanosimo&family=Oi&family=Purple+Purse&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Chela+One&family=Gideon+Roman&family=Kumar+One&family=Labrada:ital,wght@0,100..900;1,100..900&family=Langar&family=Lumanosimo&family=Oi&family=Purple+Purse&family=Smokum&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Gideon+Roman&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Gideon+Roman&family=Langar&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Chela+One&family=Gideon+Roman&family=Langar&family=Lumanosimo&family=Purple+Purse&display=swap" rel="stylesheet" />
      </Helmet>
      <header className="header">
        <h1 className="title">NoteNest</h1>
        <h3 className="h2x">Your lexicon</h3>
      </header>
      <Accordion defaultActiveKey="0" style={{width: "1000px"}}>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="0">The Dictionary</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Type a word..."
                className="box"
              />
              <button onClick={fetchDefinition} style={{
        backgroundColor: "rgba(0, 255, 0, 0.3)", 
        color: "rgba(30, 30, 30, 0.9)",
        padding: "8px", 
        borderRadius: "4px", 
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", 
        display: "inline", 
      }}>Search</button>
              <div>
                {meaning && <p>{meaning}</p>}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="1">The Booklist</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div className="ullb"> 
              <div className="ullc">
                <div className="ulld">
              <div className="ull">
              <ul className="grid md:grid-cols-2 gap-4">
  {books.map((book, index) => (
    <a
      href={book.previewLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", lineHeight: "1.4" }}
      key={index}
    >
      <li className="lii" style ={{display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
    padding: '20px'}}>
        <p>
          <strong>Title:</strong>{" "}
          <div style={{ fontSize: "20px" }}>{book.title}</div>
        </p>
        <p>
          <strong>Author(s):</strong>{" "}
          <div style={{ fontSize: "20px" }}>{book.authors}</div>
        </p>
        <p>
          <strong>Cover Art:</strong>
          {book.imageLinks.thumbnail && (
            <a
              href={book.previewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style = {{maxWidth: '100%', 
                maxHeight: '100%', 
                objectFit: 'contain',}}
                
                src={book.imageLinks.thumbnail}
                alt={`${book.title} cover`}
              />
            </a>
          )}
        </p>
        <p>
          <strong>Publisher:</strong>{" "}
          <div style={{ fontSize: "20px" }}>{book.publisher}</div>
        </p>
        <p>
          <strong>Published Date:</strong>{" "}
          <p style={{ fontSize: "20px" }}>{book.publishedDate}</p>
        </p>
        <p>
          <strong>Description:</strong>{" "}
          <div
            style={{
              fontSize: "20px",
              maxHeight: "75px", 
              overflowY: "auto", 
            }}
          >
            {book.description}
          </div>
        </p>
      </li>
    </a>
  ))}
</ul>

              </div>
              </div>
              </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      
      
    
    
    

      
    </div>
  );
}

export default Dictionary;
