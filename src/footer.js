import React from 'react';
import "./App.css";
import heart from './heart.jpg';

// require('bootstrap/dist/css/bootstrap.css');

const Footer = () =>
  <div className="App">
    <header className="App-footer">
      <img src={ heart } className="App-heart" alt="logo" />
        <p>First Game in React</p>
      </header>
      {/* <p className="App-footer"></p> */}
</div>

export default Footer;
