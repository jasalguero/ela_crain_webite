import React, { Component } from 'react';
import Header from '../../components/coaching/Header';
import Footer from '../../components/coaching/Footer';
import ContactForm from '../../components/ContactForm';

class AboutRoute extends Component {
  render() {
    return (
      <div className="ec-about ec-about--coaching">
        <Header showLayoutIcons={false} />
        <div className="ec-about__container">
          <div className="ec-about__image-section">
            <div className="ec-about__image-wrapper" />
          </div>
          <div className="ec-about__text-section">
            {/* ABOUT SECTION  */}
            <div
              className="ec-about__right"
              dangerouslySetInnerHTML={{ __html: this.props.about }}
            />
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
