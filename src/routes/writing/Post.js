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
        <div className="full-post-wrapper">
          <div className="post-navigation nav-prev">
            <div className="nav-content">
              <div className="post-title">Kuiper Cort</div>
              <div className="link">Previous</div>
            </div>
          </div>
          {this.state.post
            ? <FullPost post={this.state.post} />
            : <h1>Post doesn't exist</h1>}
          <div className="post-navigation nav-next">
            <div className="nav-content">
              <div className="link">Next</div>
              <div className="post-title">Kuiper Cort</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostRoute;
