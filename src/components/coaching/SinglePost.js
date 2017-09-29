import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/coaching/Header';
import '../../styles/coaching/SinglePost.css';

class SinglePost extends Component {
  render() {
    const post = this.props.post;

    return (
      <div
        className="single-post coaching"
        style={{
          background: `url("https://raw.githubusercontent.com/jasalguero/ela_crain_webite/ea24d97b/src/images/coaching-post-sample.jpg") no-repeat center center fixed`,
          backgroundSize: 'cover'
        }}
      >
        <Header showLayoutIcons={true} onViewModeChange={this.changeViewMode} />
        <div className="labels">Life, Love</div>
        <div className="title">
          {post.title}
        </div>
        <Link className="read-more-link" to={`/coaching/posts/${post.id}`}>
          Read More
        </Link>
      </div>
    );
  }
}

export default SinglePost;
