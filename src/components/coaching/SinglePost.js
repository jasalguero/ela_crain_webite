import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/coaching/Header';
import '../../styles/SinglePost.css';

class SinglePost extends Component {
  render() {
    const post = this.props.post;

    return (
      <div className="single-post">
        <Header showLayoutIcons={true} onViewModeChange={this.changeViewMode} />
        <div className="title">
          {post.title}
        </div>
        <div className="excerpt">
          {post.excerpt}
        </div>
        <Link className="read-more-link" to={`/coaching/posts/${post.id}`}>
          Read More
        </Link>
      </div>
    );
  }
}

export default SinglePost;
