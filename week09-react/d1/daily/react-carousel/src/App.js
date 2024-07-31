import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="App">
      <Carousel>
        <div>
          <img src="newyork.jpg" alt="NY" />
          <p className="legend">NY</p>
        </div>
        <div>
          <img src="toronto.jpg" alt="Toronto" />
          <p className="legend">Toronto</p>
        </div>
        <div>
          <img src="tokyo.jpg" alt="Tokyo" />
          <p className="legend">Tokyo</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;