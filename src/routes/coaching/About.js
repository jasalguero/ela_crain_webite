import React, { Component } from 'react';
import Header from '../../components/coaching/Header';
import Footer from '../../components/coaching/Footer';
import ContactForm from '../../components/ContactForm';

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
                src={require('../../images/coaching-about.jpg')}
                alt="Ela Crain"
                className="portrait"
                width="504px"
              />
            </div>
          </div>
          <div className="right">
            {/* ABOUT SECTION  */}
            <div
              className="right"
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
