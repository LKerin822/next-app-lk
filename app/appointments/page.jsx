'use client'; 
import { useState } from 'react';
import {Card, Row, Col, Container} from 'react-bootstrap';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

const appointmentsPage = () => {
  return (
    <Container id="avail" className="mx-auto d-block text-center">
    <div className="mx-auto d-block text-center">
    <Row md={5}>
        <br></br>
      
      <h2 className="mx-auto d-block text-center">Availability</h2>
      <br></br>
    </Row>
    <Row id="avail" >
      <p>This is my availability for the months June through to November 2023. Spaces are limited.</p>
      <p>Please feel free to contact me about reserving time for your project. </p>
    </Row>

    <Row>
      <Col>
       <Card className=" mx-auto d-block text-center" style={{ width: "18rem" }}>
 
          <h5>June</h5>
          <p>10th - 17th</p>
          <p>Deliverable date: June 18th 2023</p>
          <Link className='btn btn-primary my-3 p-3' style={{ width: "10rem" }} href="/contact">Get in Contact</Link>
        </Card>
        </Col>
        <Col>
       <Card className=" mx-auto d-block text-center" style={{ width: "18rem" }}>
 
          <h5>June</h5>
          <p>18th - 25th</p>
          <p>Deliverable date: June 26th 2023</p>
          <Link className='btn btn-primary my-3 p-3' style={{ width: "10rem" }} href="/contact">Get in Contact</Link>
        </Card>
        </Col>
        <Col>
       <Card className=" mx-auto d-block text-center" style={{ width: "18rem" }}>
 
          <h5>July</h5>
          <p>21st - 28th</p>
          <p>Deliverable date: July 29th 2023</p>
          <Link className='btn btn-primary my-3 p-3' style={{ width: "10rem" }} href="/contact">Get in Contact</Link>
        </Card>
        </Col>
        <Col>
       <Card className=" mx-auto d-block text-center" style={{ width: "18rem" }}>
 
          <h5>August</h5>
          <p>1st - 8th</p>
          <p>Deliverable date: Aug 9th 2023</p>
          <Link className='btn btn-primary my-3 p-3' style={{ width: "10rem" }} href="/contact">Get in Contact</Link>
        </Card>
        </Col>
      </Row>
      <Row className="padding-gallery"></Row>
      
      
      
    
    </div>
    </Container>
  )
}

export default appointmentsPage;
