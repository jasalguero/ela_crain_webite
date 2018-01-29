import React, { Component } from 'react';
import Header from '../../components/writing/Header';
import Footer from '../../components/Footer';
import Reviews from '../../components/writing/Reviews';
import ContactForm from '../../components/ContactForm';
import Portrait from '../../images/writing-about.png'; // Tell Webpack this JS file uses this image

class AboutRoute extends Component {
  render() {
    return (
      <div className="ec-about">
        <Header showLayoutIcons={false} />
        <div className="ec-about__container">
          <div className="ec-about__text-section">
            {/* ABOUT SECTION  */}
            <div dangerouslySetInnerHTML={{ __html: this.props.about }} />
            {/* CONTACT SECTION  */}
            <ContactForm />
            {/* REVIEWS */}
            <Reviews reviews={this.props.reviews} />
          </div>
          <div className="ec-about__image-section">
            <div className="ec-about__image-wrapper" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutRoute;
