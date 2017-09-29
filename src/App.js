import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Coaching from './routes/coaching/Home';
import Writing from './routes/writing/Home';
import Home from './routes/Home';
import * as CoachingAPI from './utils/CoachingAPI';
import * as WritingAPI from './utils/WritingAPI';
import './App.css';

class App extends Component {
  state = {
    writingPosts: [],
    coachingPosts: [],
    events: [],
    status: 'loading'
  };

  /**
   * Retrieve all the data
   */
  componentDidMount() {
    Promise.all([
      CoachingAPI.fetchEventbriteEvents(),
      WritingAPI.getAllPosts()
    ]).then(results => {
      this.setState({
        events: results[0],
        writingPosts: results[1],
        coachingPosts: results[1],
        status: 'ready'
      });
    });
  }

  render() {
    return (
      <div className="ela-crain-website">
        <Route exact path="/" render={() => <Home />} />
        <Route
          path="/writing"
          render={() => <Writing posts={this.state.writingPosts} />}
        />
        <Route
          path="/coaching"
          render={() =>
            <Coaching
              posts={this.state.coachingPosts}
              events={this.state.events}
            />}
        />
      </div>
    );
  }
}

export default App;
