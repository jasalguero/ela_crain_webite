import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Coaching from './routes/coaching/Coaching';
import WritingPosts from './routes/writing/Posts';
import WritingAbout from './routes/writing/About';
import Home from './routes/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ela-crain-website">
        <Route exact path="/" render={() => <Home />} />

        <Route path="/writing/posts" render={() => <WritingPosts />} />
        <Route path="/writing/about" component={WritingAbout} />
        <Route path="/coaching" render={() => <Coaching />} />
      </div>
    );
  }
}

export default App;
