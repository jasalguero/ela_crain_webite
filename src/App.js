import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Search from './routes/Search';
import Home from './routes/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="my-reads-app">
        <Home />
        {/* <Route exact path="/" render={() => {
          //<Home />
          null
        }} />

        <Route path="/search" render={() => {
          //<Search />
          null
        }} /> */}
      </div>
    );
  }
}

export default App;
