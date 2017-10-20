import React, { Component } from 'react';

class MobileApp extends Component {
  render() {
    return (
      <div className="" style={styles.mobileContainer}>
        <div className="header">
          <div style={styles.header.left} />
          <div style={styles.header.right} />
          <img
            src={require('./images/mobile-header.svg')}
            alt="header-logo"
            style={styles.header.img}
          />
        </div>
        <div style={styles.body}>
          <div>
            <h1>Hi There!</h1>
            <p>
              My website is currently under development, and we are still at
              work on the mobile version.
              <br />
              <br />
              Please visit the website on a desktop to access to my writing and
              my coaching workshops.
              <br />
              <br />
              Thank you for your understanding, <br />
              Ela
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileApp;

const styles = {
  header: {
    img: {
      position: 'absolute',
      left: 'calc(50vw - 45px)',
      top: 'calc(60px - 30px)',
      height: 60,
      width: 90
    },
    left: {
      position: 'absolute',
      backgroundColor: '#1b1b1b',
      width: '50vw',
      height: '120px'
    },
    right: {
      position: 'absolute',
      left: '50vw',
      backgroundColor: '#ffffff',
      width: '50vw',
      height: '120px'
    }
  },
  body: {
    padding: '24px',
    paddingTop: '177px',
    backgroundColor: '#1b1b1b',
    color: '#ffffff'
  },
  mobileContainer: {
    backgroundColor: '#1b1b1b',
    color: '#ffffff',
    minHeight: '100vh',
    overflow: 'hidden'
  }
};
