'use client'; 
import { useState } from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';



const GalleryPage = () => {
  return (
    <div>
    <Row><h2 id="gallery-title">Galleries</h2></Row>
    <Row>
      <Col>
        <Card className=" mx-auto d-block text-center" style={{ width: "18rem" }}>
          <Card.Img variant="top" img src="/Ross.png" />
          <Card.Body>
            <Card.Text>
            View this gallery to see portraits of AFL players that I have done over the years.
            </Card.Text>
               
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mx-auto d-block text-center" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/Leslie.png" />
          <Card.Body>
            <Card.Text>
              View this gallery to see a few of the portraits that I have done over the years.
            </Card.Text>
               
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mx-auto d-block text-center" style={{ width: "17rem" }}>
          <Card.Img variant="top" src="/Lola.png" />
          <Card.Body>
            <Card.Text class="text-center">
            View this gallery to see portraits of beloved pets that I have for friends and family.
            </Card.Text>
             
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mx-auto d-block text-center" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/pattern.png" />
          <Card.Body>
            <Card.Text>
              View this gallery for some examples of my design work from the past few years.
            </Card.Text>
            <Link className='btn btn-light my-3' href="/footyPortraits">Design Gallery</Link>   
        
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>

  )
}

export default GalleryPage