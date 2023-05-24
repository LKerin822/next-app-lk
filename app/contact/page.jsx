'use client';
import { useState } from 'react'
import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => {
  return (
    <>
    <Container id='contact'>
       
    <Row id="avail">
    <Col md={6} id="avail">
      <img src="/min.png" className='mx-auto d-block' id='contact-img'></img>
    </Col>
    
    <Col md={5}>
        <br></br>
        <h2 className='p-0'>Contact</h2>
       
        
      <br></br>
      <p>Please feel free to reach out to me.
        <br></br>  
        <br></br>You can find me on TikTok <a href="https://www.tiktok.com/@louisekerinstudios">@louisekerinstudios</a>
        <br></br>
        <br></br>Instagram <a href="https://www.instagram.com/louisekerinstudios/">@louisekerinstudios</a> or 
        <br></br>
        <br></br>Email me at: louisekerinstudios@gmail.com
        <br></br>
        <br></br>Alternatively you can contact me using the form below.</p>
       
      </Col>
    
    <Col md={5}>

</Col>
    </Row>
    <Row>
      <Col md={2}></Col>
      <Col md={8}><ContactForm /></Col>
      <Col md={2}></Col></Row>
      <Row className="padding-gallery"></Row>
  </Container>
  
  </>
  )
}

export default ContactPage