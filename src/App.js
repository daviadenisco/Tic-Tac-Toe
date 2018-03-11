import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
// import Body from './components/body';
import Footer from './components/footer';


// this tells React what we want to render
class App extends Component {
  // App is a React component class, or React component type
  // render returns a description of what you want to render and then React takes that description and renders it to the screen. Specifically, render returns a React element, which is a lightweight description of what to render. Most React devs use a special sybtax called JSX, which makes it easier to write these structures. The <div /> syntax is transformed at build time to React.createElement('div')
  render() {
    return (
      <div>
      <div>
        <NavBar />
      </div>
      <div>
      <Footer />
      </div>
    </div>
    );
  }
}

export default App;
