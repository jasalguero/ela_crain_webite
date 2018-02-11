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
const ABOUT_COACHING_CATEGORY = 9;
const ABOUT_WRITING_CATEGORY = 10;
const REVIEWS_WRITING_CATEGORY = 11;
const REVIEWS_COACHING_CATEGORY = 12;

// const POEMS_CATEGORY = 3;
// const STORIES_CATEGORY = 4;

class App extends Component {
  state = {
    writingPosts: [],
    coachingPosts: [],
    events: [],
    previousEvents: [],
    about: {
      writing: '',
      coaching: ''
    },
    reviews: {
      writing: [],
      coaching: []
    },
    status: 'loading'
  };

  /**
   * Retrieve all the data
   */
  componentDidMount() {
    CoachingAPI.fetchEventbriteEvents().then(results => {
      this.setState({
        events: results,
        status: 'ready'
      });
    });
    WritingAPI.getAllPosts().then(results => {
      // filter about
      const about = {
        coaching: results.filter(
          p => p.categories.indexOf(ABOUT_COACHING_CATEGORY) !== -1
        )[0].content,
        writing: results.filter(
          p => p.categories.indexOf(ABOUT_WRITING_CATEGORY) !== -1
        )[0].content
      };

      // filter reviews
      const reviews = {
        coaching: results.filter(
          p => p.categories.indexOf(REVIEWS_COACHING_CATEGORY) !== -1
        ),
        writing: results.filter(
          p => p.categories.indexOf(REVIEWS_WRITING_CATEGORY) !== -1
        )
      };

      // filter previousEvents
      const previousEvents = results.filter(
        p => p.categories.indexOf(13) !== -1
      );

      // filter posts && setstate
      this.setState({
        writingPosts: results.filter(
          p => p.categories.indexOf(WRITING_CATEGORY) !== -1
        ),
        coachingPosts: results.filter(
          p => p.categories.indexOf(COACHING_CATEGORY) !== -1
        ),
        about,
        reviews,
        previousEvents,
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
            render={() => (
              <Writing
                posts={this.state.writingPosts}
                about={this.state.about.writing}
                reviews={this.state.reviews.writing}
              />
            )}
          />
          <Route
            path="/coaching"
            render={() => (
              <Coaching
                posts={this.state.coachingPosts}
                events={this.state.events}
                previousEvents={this.state.previousEvents}
                about={this.state.about.coaching}
                reviews={this.state.reviews.coaching}
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
