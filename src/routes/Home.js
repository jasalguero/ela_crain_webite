import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Helmet>
          <link rel="shortcut icon" href={require('../icons/favicon.png')} />
        </Helmet>

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
