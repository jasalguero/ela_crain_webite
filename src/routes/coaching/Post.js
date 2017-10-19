import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/coaching/Header';
import PostHeader from '../../components/PostHeader';
import FullPost from '../../components/coaching/FullPost';

import '../../styles/coaching/FullPostNavigation.css';

class PostRoute extends Component {
  state = {
    post: null,
    postIndex: 0,
    prevPost: null,
    nextPost: null
  };

  componentDidMount() {
    this.calculateState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.calculateState(nextProps);
  }

  calculateState({ posts, match }) {
    // retrieve the post
    const postIndex = posts.findIndex(
      p => p.id === window.parseInt(match.params.id)
    );

    let { post, nextPost, prevPost } = this.getPostObjects(posts, postIndex);

    this.setState({ post, postIndex, nextPost, prevPost });
  }

  getPostObjects(posts, postIndex) {
    let post = null;
    let nextPost = null;
    let prevPost = null;

    if (postIndex !== -1) {
      post = posts[postIndex];
      if (postIndex > 0) {
        prevPost = posts[postIndex - 1];
      } else {
        prevPost = posts[posts.length - 1];
      }

      if (postIndex + 1 < posts.length) {
        nextPost = posts[postIndex + 1];
      } else {
        nextPost = posts[0];
      }
    }

    return { post, prevPost, nextPost };
  }

  getNavPrev() {
    return (
      this.state.prevPost && (
        <div className="coaching-post-navigation nav-prev">
          <div className="nav-content">
            <Link to={`/coaching/posts/${this.state.prevPost.id}`}>
              <div className="post-title">{this.state.prevPost.title}</div>
              <div className="link">Previous</div>
            </Link>
          </div>
        </div>
      )
    );
  }

  getNavNext() {
    return (
      this.state.nextPost && (
        <div className="coaching-post-navigation nav-next">
          <div className="nav-content">
            <Link to={`/coaching/posts/${this.state.nextPost.id}`}>
              <div className="post-title">{this.state.nextPost.title}</div>
              <div className="link">Next</div>
            </Link>
          </div>
        </div>
      )
    );
  }

  render() {
    const post = this.state.post;
    return (
      <div className="writing">
        <Header showLayoutIcons={false} />
        <PostHeader post={post} type="coaching" />
        {this.getNavPrev()}
        <div className="full-post-wrapper">
          {this.state.post ? (
            <FullPost post={post} />
          ) : (
            <h1>Post doesn't exist</h1>
          )}
        </div>
        {this.getNavNext()}
      </div>
    );
  }
}

export default PostRoute;
