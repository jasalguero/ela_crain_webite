import React, { Component } from 'react';
import Header from '../../components/coaching/Header';
import Footer from '../../components/coaching/Footer';
import WorkshopList from '../../components/coaching/WorkshopList';
import Testimonials from '../../components/coaching/Testimonials';
import NewsletterForm from '../../components/NewsletterForm';

import '../../styles/coaching/Coaching.css';

class CoachingRoute extends Component {
  render() {
    return (
      <div className="coaching-page">
        <Header showLayoutIcons={false} />
        <div className="container">
          {/* HERO */}
          <div className="coaching-hero">
            <div className="head">
              Discover your purpose. <br />
              Open up with trust. <br />
              Play with life.
            </div>
            <div className="sub">
              I help people to become top-performers and rebels with a cause.{' '}
              <br />
              Join me to transform your career and connect with your creativity.
            </div>
          </div>

          {/* EVENTS */}
          {this.props.events &&
            this.props.events.length > 0 && (
              <WorkshopList events={this.props.events} />
            )}

          {/* TESTIMONIALS */}
          <Testimonials />

          {/* ABOUT */}
          <section className="about-section">
            <div className="left">
              <img
                src={require('../../images/coaching-about.jpg')}
                alt="Ela Crain"
                className="portrait"
                width="432px"
              />
            </div>
            <div className="right">
              <section>
                <h1>About</h1>
                <p>
                  Ela Crain helps people to become top-performers and rebels
                  with a cause.
                  <br />
                  <br />
                  As an entrepreneur herself, Ela has founded and managed an
                  advertising agency in London, and a Webby nominee non-profit
                  organization, called Mash Stories — listed among the Top 50
                  Websites in 2015. She has a BA in Archaeology, an MA in Media,
                  and an MSc in Brain Sciences from University College London.
                  She’s also published three books and just finished a novel.
                  <br />
                  <br />
                  As well as one-to-one sessions, Ela gives workshops on
                  overcoming procrastination and perfectionism, developing
                  leadership skills, building an inspired community, and
                  adopting a success mindset.
                </p>
              </section>
            </div>
          </section>

          {/* NEWSLETTER FORM */}
          <div className="form-wrapper">
            <NewsletterForm type="coaching" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CoachingRoute;
