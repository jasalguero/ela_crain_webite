import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import jsonp from 'jsonp';

import '../styles/ContactForm.css';
import '../styles/coaching/ContactForm.css';

const MAILCHIMP_FORM =
  '//elacrain.us14.list-manage.com/subscribe/post?u=988886b7bec93779337af1c49&id=115e349166';

const getAjaxUrl = url => url.replace('/post?', '/post-json?');

class NewsletterForm extends Component {
  state = {
    status: 'ready',
    msg: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    const values = serializeForm(e.target, { hash: true });
    if (!values.email) return;
    if (!values.name) return;
    if (values.email.indexOf('@') === -1) {
      this.setState({
        status: 'error'
      });
      return;
    }

    const [firstName, lastName] = values.name.split(' ');
    const url = `${getAjaxUrl(MAILCHIMP_FORM)}&EMAIL=${encodeURIComponent(
      values.email
    )}&FNAME=${encodeURIComponent(firstName)}&LNAME=${encodeURIComponent(
      lastName
    )}`;
    this.setState(
      {
        status: 'sending',
        msg: null
      },
      () =>
        jsonp(
          url,
          {
            param: 'c'
          },
          (err, data) => {
            if (err) {
              this.setState({
                status: 'error',
                msg: err
              });
              alert(err.message);
            } else if (data.result !== 'success') {
              this.setState({
                status: 'error',
                msg: data.msg
              });
              alert(data.msg);
            } else {
              this.setState({
                status: 'success',
                msg: data.msg
              });
              alert('Thanks!');
              e.target.reset();
            }
          }
        )
    );
  };

  render() {
    return (
      <section
        className={`newsletter-form ${this.props.type} ec-newsletter__section`}
      >
        <div className="ec-newsletter__text">Subscribe to my newsletter.</div>
        <form to="/" onSubmit={this.handleSubmit}>
          <div className="ec-newsletter__form-element-wrapper">
            <div className="ec-newsletter__form-element">
              <label>Your Email</label>
              <input
                type="text"
                name="email"
                placeholder="e.g. john@gmail.com"
              />
            </div>
            <div className="ec-newsletter__form-element">
              <label>Your Name</label>
              <input type="text" name="name" placeholder="e.g. Mariana Knol" />
            </div>
            <button
              className="ec-newsletter__button"
              type="submit"
              onClick={this.sendForm}
            >
              {this.state.status === 'sending' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default NewsletterForm;
