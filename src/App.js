import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Coaching from './routes/coaching/Coaching';
import Writing from './routes/writing/Writing';
import Home from './routes/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ela-crain-website">
        <Route exact path="/" render={() => <Home />} />
        <Route path="/writing" component={Writing} />
        <Route path="/coaching" render={() => <Coaching />} />
      </div>
    );
  }
}

export default App;
