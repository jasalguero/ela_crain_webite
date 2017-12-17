import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/OverviewPostList.css';

class PostList extends Component {
  render() {
    const posts = this.props.items;

    return (
      <ul className="overview-post-list">
        {posts.map(post => (
          <li key={post.title} className="post">
            <Link to={`/writing/posts/${post.id}`}>
              <div
                className="title"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              {/* <div className="info">Short Story, 2016</div> */}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default PostList;
