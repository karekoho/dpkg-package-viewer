import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Link to="/world">World</Link>
        </p>
      </div>
    );
  }
}

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ Welcome }/>
        { /* <Route path="/world" component={World}/> */ }
      </div>
    </Router>
  );
}

export default App;
