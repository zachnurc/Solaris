import React, { Component } from 'react';
import logo from './media/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <a href="#home">
            <img className="header-logo" src={logo} alt={logo} />
          </a>

          <div id="navbar" >
            <ul>
              <li>
                <a href="#meet-memo">Meet Memo</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#connectivity">Connectivity</a>
              </li>
              <li>
                <a href="#memo-app">Memo App</a>
              </li>
              <li>
                <a href="#local-authorities">Local Authorities</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

        </header>
        <p className="intro">
          Hey DJ you suck
        </p>
      </div>
    );
  }
}

export default App;
