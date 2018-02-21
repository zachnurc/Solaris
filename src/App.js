import React, { Component } from 'react';
import logo from './media/logo.png';
import './App.css';

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    scrollLocation: 0
  };
}

handleKeyPress(keycode){

  if(keycode === 40){
    this.handleScroll('down');
  }
  else if(keycode === 38){
    this.handleScroll('up');
  }
}

//instead of scrolling load page with relevant #link

handleScroll(direction){
  if(direction === 'down'){
    window.scroll(0, this.state.scrollLocation + window.innerHeight);
  } else if(direction === 'up'){
    window.scroll(0, this.state.scrollLocation - window.innerHeight);
  }

  this.setState({ scrollLocation: window.scrollY })

}

componentDidMount() {
  //   document.addEventListener('scroll', this.handleScroll);
  window.addEventListener("keydown", (e) => {
    // space, page up, page down and arrow keys:
    if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
      this.handleKeyPress(e.keyCode);
    }
  }, false);

  // window.addEventListener("scroll", (event) => {
  //   if (window.scrollY > this.state.scrollLocation){
  //     this.handleScroll('down');
  //   }else if(window.scrollY < this.state.scrollLocation){
  //     this.handleScroll('up');
  //   }
  // }, false);
}

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
                <a href="#meet-memo">Meet Solaris</a>
              </li>
              <li>
                <a href="#features">Contact</a>
              </li>
            </ul>
          </div>

        </header>
        <div id="home">
          <div className="intro">
            <p>
              Hey DJ you suck
            </p>
          </div>
        </div>
        <div id="contact">
          <h3>Contact</h3>
        </div>
        <footer>
          <p>Copyright Solaris 2017</p>
        </footer>
      </div>
    );
  }
}

export default App;
