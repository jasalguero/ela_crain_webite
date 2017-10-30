import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/coaching/OverviewPostList.css';

class PostList extends Component {
  render() {
    const posts = this.props.items;

    return (
      <ul className="overview-post-list coaching">
        {posts.map(post => (
          <li key={post.title} className="post">
            <Link to={`/coaching/posts/${post.id}`}>
              <div className="title">{post.title}</div>
              {/* <div className="info">Short Story, 2016</div> */}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default PostList;
