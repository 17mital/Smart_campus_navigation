import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';  // Import custom CSS

function ContactUs() {
    return (
        <div className="contact-container">
            <div className="contact-form">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-description">
                    We'd love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.
                </p>

                <Form>
                    <Form.Group controlId="name" className="form-group">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" required />
                    </Form.Group>

                    <Form.Group controlId="email" className="form-group">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required />
                    </Form.Group>

                    <Form.Group controlId="message" className="form-group">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder="Your message" required />
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="primary" type="submit" className="submit-btn">
                            Send Message
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default ContactUs;
