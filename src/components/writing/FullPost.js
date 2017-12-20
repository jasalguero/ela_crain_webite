import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm';
import NewsletterForm from '../../components/NewsletterForm';
import AudioWidget from '../AudioWidget';
import ImageCollage from '../ImageCollage';
import '../../styles/FullPost.css';

class FullPost extends Component {
  render() {
    const post = this.props.post;
    // get the first sentence of the content
    const head = post.content.split('.')[0].replace(/(<([^>]+)>)/gi, '');
    // set the content to everything except the first sentence
    const text = post.content
      .split('.')
      .slice(1)
      .join('.');
    return (
      <div>
        {post.id && <ImageCollage post={post} fullPost={true} />}
        <div className="full-post">
          <div
            className="title"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
          <div className="summary">{post.fields && post.fields.summary}</div>
          <div className="comment">{post.fields && post.fields.comment}</div>
          {post.fields.audio && <AudioWidget data={post.fields.audio} />}
          <div className="head" dangerouslySetInnerHTML={{ __html: head }} />
          <div className="content" dangerouslySetInnerHTML={{ __html: text }} />
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
