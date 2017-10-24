import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/writing/Footer.css';

class Header extends Component {
  render() {
    return (
      <footer>
        <span className="copyright">© Ela Crain 2017</span>
        <Link to="/" className="Impressum">
          Impressum
        </Link>
        <span className="mentions">
          Design by
          <a
            href="http://freaksofnatu.re"
            rel="noopener noreferrer"
            target="_blank"
          >
            freaksofnatu.re
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
      </footer>
    );
  }
}

export default Header;
