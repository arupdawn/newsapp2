import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './Components/LogIn';
import Register from './Components/Register';
import VideoL from './Components/VideoList';
import VideoP from './Components/VideoPlay';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          <div className ="MainContent">
            <Switch>
              <Route path="/" exact component={LogIn}/>
              <Route path="/login" exact component={LogIn}/> 
              <Route path="/register" exact component={Register}/>
              <Route path="/videolist/" exact component={VideoL}/> 
              <Route path="/videoplay" exact component={VideoP}/> 
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
