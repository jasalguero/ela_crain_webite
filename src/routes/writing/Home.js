import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import WritingPosts from './Posts';
import WritingPost from './Post';
import WritingAbout from './About';
import * as WritingAPI from '../../utils/WritingAPI';

class WritingRoute extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    WritingAPI.getAllPosts().then(posts => {
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div className="writing">
        <Route
          exact
          path="/writing/posts"
          render={() => <WritingPosts posts={this.state.posts} />}
        />
        <Route
          exact
          path="/writing/posts/:id"
          render={({ match }) => {
            return <WritingPost posts={this.state.posts} match={match} />;
          }}
        />
        <Route path="/writing/about" component={WritingAbout} />
      </div>
    );
  }
}

export default WritingRoute;
