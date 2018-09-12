import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Popular from './Popular/Popular';
import Battle from './Battle/Battle';
import './App.css';

const Home = () =>
  <div>
    <h1 className='App'>Github battle: battle your friends...and stuff</h1>
    <Link className='button' to='/battle'>Battle</Link>
  </div>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className='nav'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/battle">Battle</Link></li>
            <li><Link to="/popular">Popular</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/battle" component={Battle} />
          <Route path="/popular" component={Popular} />
        </div>
      </Router>
    );
  }
}

export default App;
