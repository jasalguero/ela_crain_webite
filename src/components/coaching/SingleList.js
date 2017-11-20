import React, { Component } from 'react';
import SinglePost from './SinglePost';
import PostIndicator from '../PostIndicator';
import '../../styles/SingleList.css';

class SingleList extends Component {
  state = {
    currentPostIndex: 0,
    scrollable: true
  };

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
  }

  handleWheel = event => {
    const threshold = 1;
    const down = event.deltaY > threshold;
    const up = event.deltaY < -threshold;
    console.log(event.movementY, event.deltaY);

    if (this.state.scrollable) {
      if (up || down) {
        let currentPostIndex = this.state.currentPostIndex;
        if (up && currentPostIndex === 0) return;
        if (down && currentPostIndex >= this.props.items.length - 1) return;
        this.setState({
          currentPostIndex: down ? ++currentPostIndex : --currentPostIndex,
          scrollable: false
        });
        setTimeout(() => {
          this.setState({ scrollable: true });
        }, 1000);
      }
    }
  };

  render() {
    const currentPostIndex = this.state.currentPostIndex;
    const totalPosts = this.props.items.length;
    let item =
      totalPosts > currentPostIndex ? this.props.items[currentPostIndex] : {};

    return (
      <div className="single-post-wrapper">
        <div style={{ background: 'yellow', flex: 1 }} />
        <SinglePost post={item} />
        <PostIndicator
          currentPostIndex={currentPostIndex}
          totalPosts={totalPosts}
        />
      </div>
    );
  }
}

export default SingleList;
