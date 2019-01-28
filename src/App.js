import React, { Component } from 'react';
import './App.css';
import Home from './components/home-page/Home';
import ResultsPage from './components/result-page/ResultsPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/results/' component={ResultsPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
