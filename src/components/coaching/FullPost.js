import React, { Component } from 'react';
import NewsletterForm from '../../components/NewsletterForm';
import '../../styles/coaching/FullPost.css';
// import '../../styles/FullPost.css';

class FullPost extends Component {
  render() {
    const { post } = this.props;
    const {
      image_url,
      labels,
      authorName,
      authorShortbio,
      authorPicture
    } = post.fields;

    return (
      <div>
        <div className="collage-wrapper collage-wrapper--fullPost">
          <div className="image-collage">
            <div className="image-wrapper">
              <img className="" src={`${image_url}`} alt={post.title} />
            </div>
          </div>
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
