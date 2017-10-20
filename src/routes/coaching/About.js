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
                Ela Crain helps people to become top-performers and rebels with
                a cause.
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
                leadership skills, building an inspired community, and adopting
                a success mindset.
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
