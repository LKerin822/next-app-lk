'use client';
import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => {
  return (
    <>
    <Container id='contact'>
       
    <Row>
    <Col md={6}>
      <img src="/min.png" className='mx-auto d-block' id='contact-img'></img>
    </Col>
    
    <Col md={5}>
        <br></br>
      <h2>Contact</h2>
      <br></br>
      <p>Please feel free to reach out to me.
        <br></br>  
        <br></br>You can find me on TikTok <a href="https://www.tiktok.com/@louisekerinstudios">@louisekerinstudios</a>
        <br></br>
        <br></br>Instagram <a href="https://www.instagram.com/louisekerinstudios/">@louisekerinstudios</a> or 
        <br></br>
        <br></br>Email me at: louisekerinstudios@gmail.com</p>
      </Col>
    
    <Col md={5}>

</Col>
    </Row>
  </Container></>
  )
}

export default ContactPage