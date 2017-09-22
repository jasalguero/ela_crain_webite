import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import '../styles/ContactForm.css';

class NewsletterForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const values = serializeForm(e.target, { hash: true });
    console.log('Newsletter form values', values);
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
          <input type="text" placeholder="e.g. john@gmail.com" />
          <label>YOUR NAME</label>
          <input type="text" placeholder="e.g. Mariana Knol" />

          <button type="submit" onClick={this.sendForm}>
            Subscribe
          </button>
        </form>
      </section>
    );
  }
}

export default NewsletterForm;
