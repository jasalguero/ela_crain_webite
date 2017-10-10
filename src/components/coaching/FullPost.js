import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm';
import NewsletterForm from '../../components/NewsletterForm';
import '../../styles/coaching/FullPost.css';

class FullPost extends Component {
  render() {
    const { post } = this.props;
    const { image_url, labels } = post.fields;

    return (
      <div>
        <div className="full-post coaching">
          <img className="image-header" src={`${image_url}`} alt={post.title} />
          <div className="labels">{labels}</div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <div className="forms-wrapper">
          <ContactForm type="coaching" />
          <NewsletterForm type="coaching" />
        </div>
      </div>
    );
  }
}

export default FullPost;
