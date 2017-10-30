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
                Ela Crain wrote her first book at the age of 23, shortly after
                completing her BA in Archaeology. Following an MA in Film &
                Digital Media, she founded and managed a video production
                company in London.
                <br />
                <br />
                Her second book, which examined the link between creativity and
                madness, was published in 2008. Although it was a research book,
                it resonated with young readers and triggered a wave of
                rebellion against rigid social norms. Due to the comprehensive
                research in this book, Ela was offered a scholarship by
                University College London for an MSc on Cognitive and Perceptual
                Brain Sciences.
                <br />
                <br />
                In 2013, Ela founded Mash Stories, a non-profit organization
                helping writers kickstart their careers. With its 69 voluntary
                staff, Mash Stories published over 2,200 hand-picked writers. It
                was listed among the Top 50 Websites in 2015, and took the
                second place in Webby Awards Social Media category.
                <br />
                <br />
                In the meantime Ela published a poetry book and various short
                stories under different pennames across the UK and US. She
                completed her first novel Montana Day in April 2017.
                <br />
                <br />
                Unlike her writings, Ela is a very cheerful person. She loves
                reading, coaching, travelling, and extreme sports. Paragliding,
                diving with sharks, hiking from one country to another, and
                climbing up to glaciers in flip-flops are among her favourite
                spare time activities.
                <br />
                <br />
                Ela is currently working on a short story called, Dandelion
                Clocks.
                <br />
                <br />
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
