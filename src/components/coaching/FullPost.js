import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm';
import NewsletterForm from '../../components/NewsletterForm';
import AudioWidget from '../AudioWidget';
import ImageCollage from '../ImageCollage';
import '../../styles/FullPost.css';

class FullPost extends Component {
  render() {
    const post = this.props.post;
    return (
      <div>
        <div className="full-post">
          <ImageCollage title={post.title} />
          <div className="title">
            {post.title}
          </div>
          <div className="excerpt">
            {post.excerpt}
          </div>
          <div className="comment">
            {post.comment}
          </div>
          {post.audio && <AudioWidget data={post.audio} />}
          <div className="head">
            {post.head}
          </div>
          <div className="content">
            {post.content}
          </div>
        </div>
        <div className="forms-wrapper">
          <ContactForm />
          <NewsletterForm />
        </div>
      </div>
    );
  }
}

export default FullPost;
