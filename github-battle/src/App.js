import React, { Component } from 'react';
import Popular from './Popular';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.clear();
    console.log('App', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Git Battle</h1>
        </header>
        <Popular />
      </div>
    );
  }
}

export default App;
