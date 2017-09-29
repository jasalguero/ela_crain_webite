import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Posts from './Posts';
import Post from './Post';
import About from './About';
import Coaching from './Coaching';

import '../../styles/Coaching.css';

class CoachingRoute extends Component {
  render() {
    return (
      <div className="coaching">
        <Route
          exact
          path="/coaching/posts"
          render={() => <Posts posts={this.props.posts} />}
        />
        <Route
          exact
          path="/coaching/posts/:id"
          render={({ match }) => {
            return <Post posts={this.props.posts} match={match} />;
          }}
        />
        <Route
          exact
          path="/coaching"
          render={() => <Coaching events={this.props.events} />}
        />
        <Route path="/coaching/about" component={About} />
      </div>
    );
  }
}

export default CoachingRoute;
