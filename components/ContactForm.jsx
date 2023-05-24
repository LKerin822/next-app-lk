import React from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactForm() {
  
  return (
    <Form>
      <Container className="cont-bg p-5">
      <h2 >Get in touch...</h2>
      <br></br>
      <label>Name</label>
      <Form.Control size="sm" type="text"></Form.Control>

      <label>Email</label>
      <Form.Control size="sm" type="text"></Form.Control>
      <Row>

      <label>Message</label>
      <Form.Control as="textarea" rows={4}></Form.Control>
        
        <div className="button block">
        <button className='btn btn-primary btn-sml my-3' type="submit">Submit</button>
      </div>
      
      </Row>
      </Container>
    </Form>
  );
};


