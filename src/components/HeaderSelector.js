import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderSelector.css';

class Header extends Component {
  render() {
    return (
      <div className="section-selector">
        <div className="writing-section section">
          <Link to="/writing/posts">Writing</Link>
        </div>
        <div className="coaching-section section">
          <Link to="/coaching">Coaching</Link>
        </div>
      </div>
    );
  }
}

export default Header;
