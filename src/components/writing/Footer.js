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
          Design by freaksofnatu.re Coded by José
        </span>
      </footer>
    );
  }
}

export default Header;
