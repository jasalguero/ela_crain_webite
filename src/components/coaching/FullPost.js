import React, { Component } from 'react';
import NewsletterForm from '../../components/NewsletterForm';
import '../../styles/coaching/FullPost.css';
import ImageCollage from './ImageCollage';

// import '../../styles/FullPost.css';

class FullPost extends Component {
  render() {
    const { post } = this.props;
    const { labels, authorName, authorShortbio, authorPicture } = post.fields;

    return (
      <div>
        <div className="collage-wrapper collage-wrapper--fullPost">
          {post.id && <ImageCollage post={post} />}
        </div>
        <div className="full-post">
          <div className="labels">{labels}</div>
          <div
            className="title"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="author">
            {authorPicture && (
              <img src={authorPicture} alt="" className="author-pic" />
            )}
            <div className="author-name">{authorName}</div>
            <div className="author-short-bio">{authorShortbio}</div>
          </div>
        </div>
        <div className="forms-wrapper">
          <NewsletterForm type="coaching" />
        </div>
      </div>
    );
  }
}

export default FullPost;
