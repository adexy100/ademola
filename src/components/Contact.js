import React, { Component } from 'react';
import { Container, Row, Media } from "react-bootstrap";

class Contact extends Component {
  state = {
    sending: false,
    status: '',
    name: '',
    email: '',
    message: '',
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({ sending: true });

    const { name, email, message } = this.state;
    const data = {
      service_id: process.env.default_service,
      template_id: process.env.default,
      user_id: process.env.default,
      template_params: {
        from_name: name,
        from_email: email,
        message_html: message
      }
    }

    fetch('https://formspree.io/xrgyvbvy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(() => {
        this.setState({
          sending: false,
          status: 'success',
          name: '',
          email: '',
          message: '',
        });
      })
      .catch(() => {
        this.setState({ sending: false, status: 'fail' });
      });
  }

  onModalClose = () => {
    this.setState({ status: '' });
  }

  render() {
    const { sending, status, name, email, message } = this.state;
    const Spinner = () => {
      return (
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
      )
    }

    return (
      <Container fluid className="contact">
        <Row className="justify-content-center">
          <Media className="light-green">
            <Media.Body className="portfolio-header text-center">
              <div>
                Have a question for me? Contact me directly via
                my <a className="red" href="mailto:adexy100@gmail.com">email.</a>
                <br />Want to discuss your next project with me? Just send me the details
                using the form below.
              </div>
            </Media.Body>
          </Media>
        </Row>
        {<section id="contact">
          <form className="contact-form" id="contact-form" onSubmit={this.onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.onChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email" 
              value={email}
              onChange={this.onChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={this.onChange}
              required
            ></textarea>
            <div className="submit">
              <span className="submit__message"></span>
              <button className="black bg-blue" type="submit">Send</button>
            </div>
          </form>
         
          {(sending || status !== '') && (
            <div className="modal-bg">
              <div className="modal">
                {sending ? (
                  <div className="modal--sending">
                    <Spinner wrappedComponentRef={c => (this.component = c)} />
                    <p>Sending message...</p>
                  </div>
                ) : status === 'success' ? (
                  <div className="modal--sent">
                    <p>Message sent successfully!</p>
                    <p>I will get back to you as soon as I can!</p>
                    <button onClick={this.onModalClose}>OK</button>
                  </div>
                ) : status === 'fail' ? (
                  <div className="modal--sent">
                    <p>Failed to send the message.</p>
                    <p>Please try again...</p>
                    <button onClick={this.onModalClose}>OK</button>
                  </div>
                ) : undefined}
              </div>
            </div>
          )}
        </section>}
      </Container>
    )
  }
}

export default Contact;