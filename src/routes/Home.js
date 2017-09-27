import React, { Component } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="left panel">
          <div className="label">
            <Link to="/writing/posts">Writing</Link>
            <div className="sub">
              Explore a collection of my short stories and poems.
            </div>
          </div>
        </div>

        <div className="right panel">
          <div className="label">
            <Link to="/coaching">Coaching</Link>
            <div className="sub">
              Discover my latest blog posts and join my workshops.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
