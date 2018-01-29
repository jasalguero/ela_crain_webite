import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="left panel">
          <div className="label">
            <Link to="/writing/posts">Writing</Link>
            <div className="sub">
              I refuse to memorize while I can discover. <br />
              I refuse to fit in while I can inspire.
            </div>
          </div>
        </div>
        <div className="right panel">
          <div className="label">
            <Link to="/coaching">Coaching</Link>
            <div className="sub">
              I create freedom of self-expression. <br />
              I create unity in diversity.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
