import React, { Component } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="left panel">
          <div className="label">
            <Link to="/writing">Writing</Link>
          </div>
        </div>

        <div className="right panel">
          <div className="label">
            <Link to="/coaching">Coaching</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
