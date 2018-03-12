import React from 'react';
import "../App.css";
import ttt from '../images/ttt.jpg';

// require('bootstrap/dist/css/bootstrap.css');

const NavBar = () =>
<div id="nav">
  <span>
    <div id="backSection">
    <a id="back" href="http://www.daviadenisco.com/"> ← </a>
  </div>
    <img id="logo" src={ttt} className="logo" alt="ttt" />
    <p id="right"></p>
  </span>
  <span>
    <h1 id="title">Tic Tac Toe</h1>
  </span>
</div>


export default NavBar;
