import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/writing/Footer.css';

import facebookBlack from '../icons/footer_black/facebook.svg';
import twitterBlack from '../icons/footer_black/twitter.svg';
import mediumBlack from '../icons/footer_black/medium.svg';
import facebookWhite from '../icons/footer_white/facebook.svg';
import twitterWhite from '../icons/footer_white/twitter.svg';
import mediumWhite from '../icons/footer_white/medium.svg';

class Header extends Component {
  render() {
    const social = {
      white: {
        facebook: facebookWhite,
        twitter: twitterWhite,
        medium: mediumWhite
      },
      black: {
        facebook: facebookBlack,
        twitter: twitterBlack,
        medium: mediumBlack
      }
    };

    const type = this.props.type === 'coaching' ? 'white' : 'black';

    return (
      <footer className={type === 'white' ? 'footer-coaching' : ''}>
        <h2>Ela Crain</h2>
        <div className="social">
          <a href="https://www.facebook.com/elacrain" target="_blank">
            <img src={social[type].facebook} />
          </a>
          <a href="https://twitter.com/elacrain" target="_blank">
            <img src={social[type].twitter} />
          </a>
          <a href="https://medium.com/elacrain" target="_blank">
            <img src={social[type].medium} />
          </a>
        </div>
        <div className="meta">
          <div className="copyright">© Ela Crain 2018</div>
          <Link to="/" className="impressum">
            Impressum
          </Link>
          <span className="mentions">
            Design by
            <a
              href="http://freaksofnatu.re"
              rel="noopener noreferrer"
              target="_blank"
            >
              Dreamers
            </a>{' '}
            | Coded by José and{' '}
            <a
              href="http://www.enricoscherlies.de"
              rel="noopener noreferrer"
              target="_blank"
            >
              Enrico
            </a>
          </span>
        </div>
      </footer>
    );
  }
}

export default Header;
