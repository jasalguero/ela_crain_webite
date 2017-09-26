import React, { Component } from 'react';
import Header from '../../components/writing/Header';
import Footer from '../../components/writing/Footer';
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
            <ContactForm />
            {/* REVIEWS */}
            <section>
              <h1>Reviews</h1>
              <span className="review">
                “Ela Crain is a forward-thinking author whose experimental style
                and content challenges conventional views of the world around
                us.”
                <span className="author">
                  Cheryl Whittaker, Editor, Belgium
                </span>
              </span>
              <span className="review">
                “Ela haunts us with ominously possible futures, uncanny
                psychological distortions, and visions too dreamlike to be real,
                too familiar to be false.”
                <span className="author">
                  Henry Sane, Editor, North Carolina
                </span>
              </span>
              <span className="review">
                “The young poet or the wise distiller of truth, most of us get
                to be one or the other -- if we're lucky -- but Ela Crain is one
                of the rare ones that got to be both.”
                <span className="author">
                  Trevor D. Richardson, Author of _American Bastards_,
                  California
                </span>
              </span>
            </section>
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
