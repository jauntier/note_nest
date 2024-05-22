import React from 'react';
import './stylefile.css';
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="body">
        <Helmet >
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Gideon+Roman&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Gideon+Roman&family=Langar&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Chela+One&family=Gideon+Roman&family=Langar&family=Lumanosimo&family=Purple+Purse&display=swap" rel="stylesheet" />
      </Helmet>
      <header className="header">
        <h1 className="title">NoteNest</h1>
        <h3 className="h2x">Your virtual instructor</h3>
        
      </header>
      
      <main className="container">
        <section className="excerpt">
        <div className="aesthetic-paragraph"> 
          <h2 className="h2">Web Development Mode</h2>
          
          <p className="p">Practice your HTML, CSS and JavaScript without installing a text editor.</p>
          
          <Button variant="secondary"><Link to="/webdev" className="linkx">Start Practising</Link></Button>{' '}
          </div>
        </section>
        <section className="excerpt">
        <div className="aesthetic-paragraph"> 
          <h2 className="h2">Music Composition Mode</h2>
          <p className="p">Don't let writer's block come in the way of your creative process.</p>
          <Button variant="secondary"><Link to="/musiccomp" className="linkx">Start Composing</Link></Button>{' '}
          </div>
        </section>

        <section className="excerpt">
        <div className="aesthetic-paragraph"> 
          <h2 className="h2">Booklist Mode</h2>
          <p className="p">Find suggestions for your next read.</p>
          <Button variant="secondary"><Link to="/urban" className="linkx">Explore</Link></Button>{' '}
          </div>
        </section>

        <section className="excerpt">
        <div className="aesthetic-paragraph"> 
          <h2 className="h2">Canvas Mode</h2>
          <p className="p">Test out your artistic skills.</p>
          <Button variant="secondary"><Link to="/draw" className="linkx">Start drawing</Link></Button>{' '}
          </div>
        </section>

       

      </main>
      <footer className="footer">
        <p>&copy; 2024 · Adrian Nderitu · All rights reserved</p>
      </footer>
    </div>
  );
}

export default Home;
