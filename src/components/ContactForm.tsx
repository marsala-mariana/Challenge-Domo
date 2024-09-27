import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <div className="col-md-6 contact-form-container">
    <div className="containerForm p-4  shadow">
        <h2 className="custom-title">Book your free consultation</h2>
        <h2 className="form-title">Get a free consultation</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contact@email.com"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please type your message here..."
              rows={4}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-primary">
            Get in Touch
          </Button>
        </Form>
      </div>
    </div>
  );
};


export default ContactForm;
