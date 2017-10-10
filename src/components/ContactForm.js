import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import '../styles/ContactForm.css';
import '../styles/coaching/ContactForm.css';

class ContactForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const values = serializeForm(e.target, { hash: true });
    console.log('contact form values', values);
  };

  render() {
    return (
      <section className={`contact-form ${this.props.type}`}>
        <form to="/" onSubmit={this.handleSubmit}>
          <h1>Contact</h1>
          <p>
            You can hit me up with matters related to my writing, to ask for
            advice, anything really! I will try to get back to you as fast as
            possible.
          </p>
          <label>YOUR EMAIL</label>
          <input type="text" placeholder="e.g. john@gmail.com" />
          <label>YOUR NAME</label>
          <input type="text" placeholder="e.g. Mariana Knol" />
          <label>WHAT'S UP?</label>
          <textarea placeholder="Type it away! Write it here..." rows="5" />

          <button type="submit" onClick={this.sendForm}>
            Send Out
          </button>
        </form>
      </section>
    );
  }
}

export default ContactForm;
