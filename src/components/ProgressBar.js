import React, { Component } from 'react';
import '../styles/ProgressBar.css';

class Header extends Component {
  state = {
    ticking: false,
    progress: '20%'
  };

  calculateTotalHeight() {
    let body = document.body,
      html = document.documentElement;

    let height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    // console.log('calculating doc height progress', height);
    // substract the forms height
    return height;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrolling);
    this.setState({ max: this.calculateTotalHeight() });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrolling);
  }

  handleScrolling = () => {
    if (!this.state.ticking) {
      window.requestAnimationFrame(() => {
        let scrollPosition = window.scrollY;
        let docHeight = this.calculateTotalHeight();
        let windowSize = document.documentElement.clientHeight;
        let totalViewed = windowSize + scrollPosition;
        // console.log(
        //   `Calculation scroll position: ${scrollPosition}, total height: ${docHeight}, window height: ${windowSize}, total viewed: ${totalViewed}`
        // );

        let progress = `${Math.round(totalViewed / docHeight * 10000) / 100}%`;
        // console.log(`Percentage: ${progress}`);
        this.setState({ ticking: false, progress: progress });
      });
    }
    this.setState({ ticking: true });
  };

  render() {
    const { type = 'writing' } = this.props;
    return (
      <div className={`progress-bar ${type}`}>
        <div className="bar" style={{ width: this.state.progress }} />
      </div>
    );
  }
}

export default Header;
