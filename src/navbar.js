import React from 'react';
import "./App.css";
import ttt from './ttt.jpg';

// require('bootstrap/dist/css/bootstrap.css');

const NavBar = () =>
  <div className="App">
    <header className="App-header">
      <img src={ttt} className="App-logo" alt="ttt" />
        <h1 className="App-title">Tic Tac Toe</h1>
      </header>
      <p className="App-intro"></p>
</div>

export default NavBar;
