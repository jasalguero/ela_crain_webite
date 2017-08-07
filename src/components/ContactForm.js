import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import '../styles/ContactForm.css';

class ContactForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const values = serializeForm(e.target, { hash: true });
    console.log('contact form values', values);
    // if (this.props.onCreateContact) this.props.onCreateContact(values);
  };

  render() {
    return (
      <form className="contact-form" to="/" onSubmit={this.handleSubmit}>
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
    );
  }
}

export default ContactForm;
