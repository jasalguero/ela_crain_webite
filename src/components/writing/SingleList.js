import React, { Component } from 'react';
import SinglePost from './SinglePost';

class SingleList extends Component {
  state = {
    currentPostIndex: 0
  };

  render() {
    let item =
      this.props.items.length > this.state.currentPostIndex
        ? this.props.items[this.state.currentPostIndex]
        : {};

    return (
      <div className="single-post-wrapper">
        <div className="post-navigation nav-prev">
          <div className="link">Previous</div>
        </div>
        <SinglePost post={item} />
        <div className="post-navigation nav-next">
          <div className="link">Next</div>
        </div>
      </div>
    );
  }
}

export default SingleList;
