import React, { Component } from 'react';
import Header from '../../components/coaching/Header';
import Footer from '../../components/coaching/Footer';
import WorkshopList from '../../components/coaching/WorkshopList';
import Testimonials from '../../components/coaching/Testimonials';
import NewsletterForm from '../../components/NewsletterForm';
import Portrait from '../../images/coaching-about.png'; // Tell Webpack this JS file uses this image

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
              Fight your inner fears and become your best self.
            </div>
            <div className="sub">
              Offering a broad range of workshops and coaching events, Ela will
              help you reaching the next step in your life or career.
            </div>
          </div>

          {/* EVENTS */}
          <WorkshopList events={this.props.events} />

          {/* TESTIMONIALS */}
          <Testimonials />

          {/* ABOUT */}
          <section className="about-section">
            <div className="left">
              <img
                src={Portrait}
                alt="Ela Crain"
                className="portrait"
                width="432px"
              />
            </div>
            <div className="right">
              <h1>About Ela Crain</h1>
              <p>
                I still appreciate individuality. Style is much more interesting
                than fashion, really. Over the years I have learned that what is
                important in a dress is the woman who is wearing it. My shows
                are about the complete woman who swallows it all. It’s a
                question of survival.
              </p>
              <p>
                My aim is to make the poor look rich and the rich look poor. I
                have my favourite fashion decade, yes, yes, yes: ‘60s. It was a
                sort of little revolution; the clothes were amazing but not too
                exaggerated. Clothes mean nothing until someone lives in them. I
                don’t really know how to do casual clothes. Clothes can
                transform your mood and confidence.
              </p>
            </div>
          </section>

          {/* NEWSLETTER FORM */}
          <div className="form-wrapper">
            <NewsletterForm className="coaching" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CoachingRoute;
