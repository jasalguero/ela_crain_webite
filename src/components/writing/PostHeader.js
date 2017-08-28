import React, { Component } from 'react';
import ProgressBar from '../ProgressBar';
import '../../styles/writing/PostHeader.css';

const SCROLL_DELTA = 300;

class Header extends Component {
  state = {
    ticking: false,
    showHeader: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrolling);
  }

  handleScrolling = () => {
    // last_known_scroll_position = window.scrollY;
    if (!this.state.ticking) {
      window.requestAnimationFrame(() => {
        // doSomething(last_known_scroll_position)
        this.setState({
          ticking: false,
          showHeader: window.scrollY > SCROLL_DELTA
        });
      });
    }
    this.setState({ ticking: true });
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrolling);
  }

  render() {
    const title = this.props.post ? this.props.post.title : '';
    return (
      <header
        className={
          this.state.showHeader ? 'post-header' : 'post-header no-show'
        }
      >
        <ProgressBar show={this.state.showHeader} />
        <div className="left-side">
          <div className="currently-reading">CURRENTLY READING</div>
          <div className="post-title">
            {title}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
