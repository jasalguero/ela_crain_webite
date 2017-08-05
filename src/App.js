import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Writing from './routes/Writing';
import Coaching from './routes/Coaching';
import Home from './routes/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ela-crain-website">
        <Route exact path="/" render={() => <Home />} />

        <Route path="/writing" render={() => <Writing />} />

        <Route path="/coaching" render={() => <Coaching />} />
      </div>
    );
  }
}

export default App;
