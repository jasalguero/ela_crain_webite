import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import Coaching from './routes/coaching/Home';
import Writing from './routes/writing/Home';
import Home from './routes/Home';
import * as CoachingAPI from './utils/CoachingAPI';
import * as WritingAPI from './utils/WritingAPI';
import './App.css';

//TODO: Hardcoded for now, figure out how to bring it from wordpress
const COACHING_CATEGORY = 5;
const WRITING_CATEGORY = 2;
// const POEMS_CATEGORY = 3;
// const STORIES_CATEGORY = 4;

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
    Promise.all([CoachingAPI.fetchEventbriteEvents()]).then(results => {
      this.setState({
        events: results[0],
        status: 'ready'
      });
    });
    Promise.all([WritingAPI.getAllPosts()]).then(results => {
      this.setState({
        writingPosts: results[0].filter(
          p => p.categories.indexOf(WRITING_CATEGORY) !== -1
        ),
        coachingPosts: results[0].filter(
          p => p.categories.indexOf(COACHING_CATEGORY) !== -1
        ),
        status: 'ready'
      });
    });
  }

  render() {
    return (
      <div className="ela-crain-website">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            path="/writing"
            render={() => <Writing posts={this.state.writingPosts} />}
          />
          <Route
            path="/coaching"
            render={() => (
              <Coaching
                posts={this.state.coachingPosts}
                events={this.state.events}
              />
            )}
          />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
