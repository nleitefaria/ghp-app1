import React, { Component } from 'react';
import { Button } from 'reactstrap';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />         
          <Button color="danger">ghp-app1</Button>
        </header>
      </div>
    );
  }
}

export default App;
