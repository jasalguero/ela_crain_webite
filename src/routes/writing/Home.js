import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import WritingPosts from './Posts';
import WritingPost from './Post';
import WritingAbout from './About';

import Dev from './../../components/PostHeader';

class WritingRoute extends Component {
  render() {
    return (
      <div className="home-writing">
        <Route
          exact
          path="/writing/dev"
          render={() => <Dev type="writing" />}
        />
        <Route
          exact
          path="/writing/posts"
          render={() => <WritingPosts posts={this.props.posts} />}
        />
        <Route
          exact
          path="/writing/posts/:id"
          render={({ match }) => {
            return <WritingPost posts={this.props.posts} match={match} />;
          }}
        />
        <Route
          exact
          path="/writing"
          render={() => <Redirect to="/writing/posts" />}
        />
        <Route
          path="/writing/about"
          render={() => (
            <WritingAbout
              about={this.props.about}
              reviews={this.props.reviews}
            />
          )}
        />
      </div>
    );
  }
}

export default WritingRoute;
