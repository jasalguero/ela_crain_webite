import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Coaching from './routes/coaching/Home';
import Writing from './routes/writing/Home';
import Home from './routes/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ela-crain-website">
        <Route exact path="/" render={() => <Home />} />
        <Route path="/writing" component={Writing} />
        <Route path="/coaching" component={Coaching} />
      </div>
    );
  }
}

export default App;
