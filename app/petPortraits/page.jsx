
'use client'; 
import { useState } from 'react';
import {Card, Row, Col, Carousel} from 'react-bootstrap';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";


const petPortraitPage = () => {
  return (
    <Carousel pause="hover">
<Carousel.Item>
  <br></br>
  <Row>
    <Col sm={6}>
        
    </Col>
  </Row>
</Carousel.Item>
    </Carousel>
  )
}

export default petPortraitPage