import React, { Component } from 'react';
import Header from '../../components/writing/Header';
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
              <p>
                Here’s what some people said about my writing. I hope you can
                relate to what you read. Don’t be shy and hit me up with your
                feedback!
              </p>
              <span className="review">
                “Ela is a forward-thinking author whose experimental style and
                content challenges conventional views of the world around us.
                Her characters are fantastic yet highly accessible, and through
                them and the universes she creates she walks a tightrope between
                madness and sanity, present and future, and right and wrong –
                always questioning, and never short of theories to help provide
                answers. ~ Cheryl
              </span>
              <span className="review">
                “Ela Crain specializes in the unseeable. Labelled generically as
                “dark” and “surreal,” she transcends familiar classifications
                with slice-of-life tales otherwise found in the strangest of
                nightmares. With an unmatched sense of realism, she haunts us
                with ominously possible futures, uncanny psychological
                distortions, and visions too dreamlike to be real, too familiar
                to be false. Her trademark is a stunning attention to detail,
                which shines most luminously in casual dialogues and dramatic
                conclusions. As she engages us in thoroughly convincing
                scenarios, we are gradually paralyzed by a combined sense of
                wonder and fear—and we realize it only after our emotion has
                been fully invested. In the end, the effect is
                manifold—profound, scarring, bizarre, charming, unique,
                paradoxical—resulting in what might best be labelled as
                “traumatic euphoria.” ~ Henry Sane
              </span>
              <span className="review">
                “It is the young writer, the talented, ambitious, and creatively
                driven writer, that thinks this writing game is merely about
                words — their music, poetry, and association with one another.
                It is the wise writer, the experienced, who learns that it is
                more about ideas. It is the ability to distill a complex notion
                down to a few simple words that anyone, educated or ignorant,
                old or young, can understand. Only… no, it isn’t just about
                understanding, but conveying the feeling of understanding.
                Channeling that feeling of truth into the world through words,
                that’s what writing really is. The young poet or the wise
                distiller of truth, most of us get to be one or the other — if
                we’re lucky — but Ela Crain is one of the rare ones that got to
                be both. Her words are trimmed down to the subatomic, to the
                essence of her persona, and yet they are as elegant and familiar
                as rain on flowers. When you read her work, as I have, the hope
                is to draw just close enough to steal some of her without
                getting so close you become envious.” ~Trevor D. Richardson,
                Author of American Bastard
              </span>
            </section>
          </div>
          <div className="right">
            <div className="wrapper">
              <img src={Portrait} alt="Ela Crain" className="portrait" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutRoute;
