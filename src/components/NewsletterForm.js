import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import jsonp from 'jsonp';

import '../styles/ContactForm.css';

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
            } else if (data.result !== 'success') {
              this.setState({
                status: 'error',
                msg: data.msg
              });
            } else {
              this.setState({
                status: 'success',
                msg: data.msg
              });
            }
          }
        )
    );
  };

  render() {
    return (
      <section>
        <h1>Newsletter</h1>
        <p>
          You can hit me up with matters related to my writing, to ask for
          advice, anything really! I will try to get back to you as fast as
          possible.
        </p>
        <form className="newsletter-form" to="/" onSubmit={this.handleSubmit}>
          <label>YOUR EMAIL</label>
          <input type="text" name="email" placeholder="e.g. john@gmail.com" />
          <label>YOUR NAME</label>
          <input type="text" name="name" placeholder="e.g. Mariana Knol" />
          <button type="submit" onClick={this.sendForm}>
            {this.state.status === 'sending' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </section>
    );
  }
}

export default NewsletterForm;
