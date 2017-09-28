import React, { Component } from 'react';
import Header from '../../components/coaching/Header';
import Footer from '../../components/coaching/Footer';
import WorkshopList from '../../components/coaching/WorkshopList';

import '../../styles/coaching/Coaching.css';

class CoachingRoute extends Component {
  render() {
    return (
      <div className="coaching-page">
        <Header showLayoutIcons={false} />
        <div className="container">
          <div className="coaching-hero">
            <div className="head">
              Fight your inner fears and become your best self.
            </div>
            <div className="sub">
              Offering a broad range of workshops and coaching events, Ela will
              help you reaching the next step in your life or career.
            </div>
          </div>
          <WorkshopList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default CoachingRoute;
