import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Posts from './Posts';
import Post from './Post';
import About from './About';
import Coaching from './Coaching';
import * as API from '../../utils/CoachingAPI';

import '../../styles/Coaching.css';

class CoachingRoute extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    API.getAllPosts().then(posts => {
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div className="coaching">
        <Route
          exact
          path="/coaching/posts"
          render={() => <Posts posts={this.state.posts} />}
        />
        <Route
          exact
          path="/coaching/posts/:id"
          render={({ match }) => {
            return <Post posts={this.state.posts} match={match} />;
          }}
        />
        <Route exact path="/coaching" component={Coaching} />
        <Route path="/coaching/about" component={About} />
      </div>
    );
  }
}

export default CoachingRoute;
