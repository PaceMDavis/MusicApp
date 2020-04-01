import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import LogInForm from './components/LogInForm'
import Dashboard from './components/Dashboard';

class App extends Component {
  // state = {
  //   loggedIn: false,
  //   textField: ''
  // }
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: true,
      textField: ''
    }
    this.onInput =this.onInput.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  onLogin (event) {
    // event.preventDefault();
    
    this.setState({
      loggedIn: !this.state.loggedIn,
      // [event.target.name] : event.target.value
    })
    console.log(this.state.loggedIn, "check")
   
  }


  onInput (event) {
    let tempObject = {[event.target.name]:event.target.value}
    this.setState(tempObject)
    console.log("howdy", event.target.value, event.target.name)
  }

  render() {
    return(
      this.state.loggedIn ? (
        <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Dashboard />
          
        </div>
      </div>
      ) : (
      <div>
      <div>
        <NavBar />
      </div>
      <div>
        <LogInForm 
                  //Props for onSubmit
                  onSubmit = {this.onLogin} 
                  loggedIn={this.state.loggedIn} 
                  //Props for textfields
                  username={this.state.textField} 
                  onInput={this.onInput} 
                  password={this.state.textField}  
        />
      </div>
    </div>
      )
      
    )
  }
}
export default App;
