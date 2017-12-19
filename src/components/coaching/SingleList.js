import React, { Component } from 'react';
import SinglePost from './SinglePost';
import PostIndicator from '../PostIndicator';
import '../../styles/SingleList.css';
import ReactSwipeEvents from 'react-swipe-events';

class SingleList extends Component {
  state = {
    currentPostIndex: 0,
    scrollable: true,
    relativeScrollPosition: 0
  };

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
  }

  handleWheel = event => {
    const threshold = 600;
    const relativeScrollPosition = this.state.relativeScrollPosition;
    if (relativeScrollPosition > threshold) {
      return this.handleNavi('next', event);
    }
    if (relativeScrollPosition < -threshold) {
      return this.handleNavi('prev', event);
    }
    this.setState({
      relativeScrollPosition: relativeScrollPosition - event.wheelDeltaY
    });
  };

  handleNavi = (dir, e) => {
    e.preventDefault();
    const prev = dir === 'prev';
    const next = dir === 'next';

    if (prev || next) {
      let currentPostIndex = this.state.currentPostIndex;
      if (prev && currentPostIndex === 0) {
        ++currentPostIndex;
      }
      if (next && currentPostIndex >= this.props.items.length - 1) {
        --currentPostIndex;
      }
      next ? ++currentPostIndex : --currentPostIndex;
      this.setState({
        currentPostIndex,
        relativeScrollPosition: 0
      });
    }
  };

  render() {
    const currentPostIndex = this.state.currentPostIndex;
    const totalPosts = this.props.items.length;
    let item =
      totalPosts > currentPostIndex ? this.props.items[currentPostIndex] : {};

    return (
      <ReactSwipeEvents
        threshold={100}
        onSwipedRight={e => this.handleNavi('up', e)}
        onSwipedLeft={e => this.handleNavi('down', e)}
      >
        <div className="single-post-wrapper">
          <div className="placeholder" />
          <SinglePost post={item} />
          <PostIndicator
            currentPostIndex={currentPostIndex}
            totalPosts={totalPosts}
            site="coaching"
          />
          <div className="ec-single-post-list--coaching">
            <div className="ec-single-post-list__nav">
              <div
                className="ec-single-post-list__nav-prev"
                onClick={e => this.handleNavi('prev', e)}
                onTouchStart={e => this.handleNavi('prev', e)}
              >
                ←
              </div>
              <div
                className="ec-single-post-list__nav-next"
                onClick={e => this.handleNavi('next', e)}
                onTouchStart={e => this.handleNavi('next', e)}
              >
                →
              </div>
            </div>
          </div>
        </div>
      </ReactSwipeEvents>
    );
  }
}

export default SingleList;
