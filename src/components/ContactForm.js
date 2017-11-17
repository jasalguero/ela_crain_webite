import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import '../styles/ContactForm.css';
import '../styles/coaching/ContactForm.css';
import { validateEmail } from '../utils/helpers';
var request = require('request');

// const URL = "http://elacrain.com/cf/test.php?s=test123123123&m=hello&f=a@me.com"
const BASE_URL = 'http://elacrain.com/cf/sendForm.php';

class ContactForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const values = serializeForm(e.target, { hash: true });
    if (!validateEmail(values.email)) return alert('Bad E-Mail Formatting');

    let url =
      BASE_URL +
      `?&s=${values.name}&m=${values.message}&f=${values.email}&c=${values.company}`;

    request.post(url, function(error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });

    e.target.reset();
  };

  render() {
    return (
      <section className={`contact-form ${this.props.type}`}>
        <form to="/" onSubmit={this.handleSubmit}>
          <h1>Contact</h1>
          <label>Your Email</label>
          <input
            required
            name="email"
            type="text"
            placeholder="e.g. john@gmail.com"
          />
          <label style={{ display: 'none' }}>Your Company</label>
          <input
            style={{ display: 'none' }}
            name="company"
            type="text"
            placeholder="toyota"
          />
          <label>Your Name</label>
          <input
            required
            name="name"
            type="text"
            placeholder="e.g. Mariana Knol"
          />
          <label>Your Message</label>
          <textarea
            name="message"
            type="text"
            placeholder="Type it away! Write it here..."
            rows="5"
          />
          <button type="submit">Send Out</button>
        </form>
      </section>
    );
  }
}

export default ContactForm;
