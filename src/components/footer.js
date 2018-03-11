import React from 'react';
import "../App.css";
import heart from '../images/heart.jpg';


const Footer = () =>
  <div className="App">
    <header className="App-footer">
      <img src={ heart } className="App-heart" alt="logo" />
        <p>First Game in React</p>
      </header>
</div>

export default Footer;
