import React, { Component } from 'react';
import Header from '../../components/writing/Header';
import Footer from '../../components/writing/Footer';
import Reviews from '../../components/writing/Reviews';
import ContactForm from '../../components/ContactForm';
import Portrait from '../../images/writing-about.png'; // Tell Webpack this JS file uses this image

import '../../styles/About.css';

class AboutRoute extends Component {
  render() {
    return (
      <div className="about writing">
        <Header showLayoutIcons={false} />
        <div className="container">
          <div className="left">
            {/* ABOUT SECTION  */}
            <div dangerouslySetInnerHTML={{ __html: this.props.about }} />
            {/* CONTACT SECTION  */}
            <ContactForm />
            {/* REVIEWS */}
            <Reviews reviews={this.props.reviews} />
          </div>
          <div className="right">
            <div className="wrapper">
              <img src={Portrait} alt="Ela Crain" className="portrait" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutRoute;
