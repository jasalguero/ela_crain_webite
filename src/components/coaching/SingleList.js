import React, { Component } from 'react';
import SinglePost from './SinglePost';

class SingleList extends Component {
  state = {
    currentPostIndex: 0
  };

  render() {
    debugger;
    let item =
      this.props.items.length > this.state.currentPostIndex
        ? this.props.items[this.state.currentPostIndex]
        : {};

    return (
      <div className="single-post-wrapper">
        <SinglePost post={item} />
      </div>
    );
  }
}

export default SingleList;
