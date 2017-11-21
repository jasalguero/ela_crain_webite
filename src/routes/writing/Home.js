import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import WritingPosts from './Posts';
import WritingPost from './Post';
import WritingAbout from './About';

class WritingRoute extends Component {
  render() {
    return (
      <div className="home-writing">
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
          path="/writing"
          render={() => <Redirect to="/writing/posts" />}
        />
        <Route path="/writing/about" component={WritingAbout} />
      </div>
    );
  }
}

export default WritingRoute;
