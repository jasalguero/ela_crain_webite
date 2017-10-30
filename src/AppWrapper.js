import React, { Component } from 'react';
import App from './App';
import MobileApp from './MobileApp';
import { Helmet } from 'react-helmet';

export default class AppWrapper extends Component {
  state = { width: window.innerWidth };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (!isMobile) {
      return (
        <div>
          <Helmet>
            <link rel="shortcut icon" href={require('./icons/favicon.png')} />
          </Helmet>
          <App />
        </div>
      );
    } else {
      return (
        <div>
          <Helmet>
            <link rel="shortcut icon" href={require('./icons/favicon.png')} />
          </Helmet>
          <MobileApp />
        </div>
      );
    }
  }
}
