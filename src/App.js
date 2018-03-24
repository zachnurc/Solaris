import React, { Component } from 'react';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import logo from './media/logo.png';
import './App.css';

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    email: "",
    name: "",
    subject: "",
    message: "Your Message",
    submission: ""
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.resetForm = this.resetForm.bind(this);
  this.handleFormKeyUp = this.handleFormKeyUp.bind(this);
}

handleChange(event){
  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({[name]: value})
}

handleSubmit(event) {
  event.preventDefault();

  this.resetForm();

  if (this.state.name === ""){
    this.contactName.setAttribute("class", "input-box input-box-error");
    this.setState({submission: "Please enter your name."});
  } else if (this.state.email === "") {
    this.contactEmail.setAttribute("class", "input-box input-box-error");
    this.setState({submission: "Please enter your email address."});
  } else if (this.state.subject === "") {
    this.contactSubject.setAttribute("class", "input-box input-box-error");
    this.setState({submission: "Please enter the email subject."});
  } else if (this.state.message === "Your Message" || this.state.message === "") {
    this.contactMessage.setAttribute("class", "input-box input-box-error");
    this.setState({submission: "Please type a message."});
  } else {

    axios.post(
      "/mailer.php",
      {
      "form_name": this.state.name,
      "form_email": this.state.email,
      "form_message": this.state.message,
      "form_subject": this.state.subject
    }).then(response => {
      this.setState({submission: "Your email has been sent."})
      setTimeout(() => {
        this.setState({submission: ""})
      },3000)
    }).catch(error => {
      console.error(error);
      this.setState({submission: "Sorry, there has been an error.  Please try again later or email info@alcuris.co.uk"})
    });
  }
}

handleFormKeyUp(event) {
    if (event.keyCode == 13) {
      this.handleSubmit(event);
    }
}

resetForm(){
  this.contactName.setAttribute("class", "input-box");
  this.contactEmail.setAttribute("class", "input-box");
  this.contactSubject.setAttribute("class", "input-box");
  this.contactMessage.setAttribute("class", "input-box");
}

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" />
        <header ref={(input) => { this.header = input; }}>
          <a href="#home">
            <img className="header-logo" src={logo} alt={logo} />
          </a>

          <label htmlFor="show-menu" className="show-menu">
            <FontAwesome
              name='fas fa-bars'
              size='2x'
            />
          </label>
          <input type="checkbox" id="show-menu" role="button" />

          <div id="navbar" ref={(input) => { this.navbar = input; }} >
            <a ref={(input) => { this.navHome = input; }} href="#home" className="active">HOME</a>
            <a ref={(input) => { this.navMeetMemo = input; }} href="#meet-memo" className="">MEET MEMO</a>
          </div>
        </header>
        <div id="container">
          <div className="background" />
          <div id="home">
            <p>
              So my idea is to have some kind of expanded menu and like a big header image
              When you scroll down below the extended menu/ header image the navbar changes to what you see now
              ofc it would transform with an animation not just jump
            </p>
          </div>
          <div id="contact">
            <h3>Contact</h3>
            <div>
              <form onSubmit={this.handleSubmit} onKeyUp={this.handleFormKeyUp}>
                <div className="col-wide">
                  <div className="col-small no-left-padding">
                    <input
                      ref={(input) => { this.contactName = input; }}
                      className="input-box"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={this.state.myName}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-small">
                    <input
                      ref={(input) => { this.contactEmail = input; }}
                      className="input-box"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-small">
                    <input
                      ref={(input) => { this.contactSubject = input; }}
                      className="input-box"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      value={this.state.subject}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-wide">
                  <textarea
                    ref={(input) => { this.contactMessage = input; }}
                    className="input-box"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-wide">
                  <div id="recaptcha" className="col-small no-left-padding" />
                  <div className="col-small">
                    <p>{this.state.submission}</p>
                  </div>
                  <div className="col-small">
                    <input
                      className="input-box"
                      type="Submit"
                      value="Send"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <footer>
            <p>Copyright Solaris 2017</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
