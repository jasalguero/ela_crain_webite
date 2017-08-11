import React, { Component } from 'react';
import Header from '../../components/Header';
import FullPost from '../../components/writing/FullPost';
import * as WritingAPI from '../../utils/WritingAPI';

class PostRoute extends Component {
  state = {
    post: {}
  };

  componentDidMount() {
    WritingAPI.getPost(this.props.match.params.id).then(post => {
      this.setState({ post });
    });
  }

  render() {
    return (
      <div className="writing">
        <Header section="writing" onViewModeChange={this.changeViewMode} />
        {this.state.post
          ? <FullPost post={this.state.post} />
          : <h1>Post doesn't exist</h1>}
      </div>
    );
  }
}

export default PostRoute;
