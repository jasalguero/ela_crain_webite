import React, { Component } from 'react';
import Header from '../../components/coaching/Header';
import Footer from '../../components/coaching/Footer';
import ContactForm from '../../components/ContactForm';
import Portrait from '../../images/coaching-about.png'; // Tell Webpack this JS file uses this image

import '../../styles/coaching/About.css';

class AboutRoute extends Component {
  render() {
    return (
      <div className="about coaching">
        <Header showLayoutIcons={false} />
        <div className="container">
          <div className="left">
            <div className="wrapper">
              <img
                src={Portrait}
                alt="Ela Crain"
                className="portrait"
                width="504px"
              />
            </div>
          </div>
          <div className="right">
            {/* ABOUT SECTION  */}
            <section>
              <h1>About</h1>
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
            </section>
            {/* CONTACT SECTION  */}
            <ContactForm type="coaching" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutRoute;
