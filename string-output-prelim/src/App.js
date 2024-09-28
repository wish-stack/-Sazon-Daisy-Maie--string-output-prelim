import React from 'react';
import './App.css';
import Steady from './steady.jpg';

function App() {
  const message = "Stream Steady by NCT WISH <3";
  const link = "https://youtu.be/IKlkZZv76Ho?si=BEV7xG6RjjtDiNH5";

  return (
    <div className="App">
      <div className="image-container">
        <img src={Steady} alt="Steady" />
      </div>
      <h1>{message}</h1>
      <a href={link} target="_blank" rel="noopener noreferrer" className="youtube-link">Click here to watch it on YouTube</a>
    </div>
  );
}

export default App;
