import React, { Component } from 'react';
import './App.css';
import Home from './components/home-page/Home';

import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
          <Route path='/' component={Home} />
      </Router>
    );
  }
}

export default App;
