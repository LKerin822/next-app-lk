'use client'; 
import { useState } from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';



const GalleryPage = () => {
  return (
    <div>
      <Row className="p-2"></Row>
      <Row s={1}></Row>
    <Row>
      <Col ><h2 id="gallery-title">Galleries</h2></Col>
      </Row>
    <Row>
      <Col>
        <Card className=" mx-auto d-block text-center" style={{ width: "18rem" }}>
          <Card.Img variant="top" img src="/Ross.png" />
          <Card.Body>
            <Card.Text>
            View this gallery to see portraits of AFL players that I have done over the years.
            </Card.Text>
            <Link className='btn btn-primary my-3' href="/footyPortraits">Footy Portrait Gallery</Link>   
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
            <Link className='btn btn-primary my-3' href="/portraits">Portrait Gallery</Link>   
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
            <Link className='btn btn-primary my-3' href="/petPortraits">Pet Portrait Gallery</Link>   
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mx-auto d-block text-center" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/90s.png" />
          <Card.Body>
            <Card.Text>
              View this gallery for some examples of my design work from the past few years.
            </Card.Text>
            <Link className='btn btn-primary my-3' href="/design">Design Gallery</Link>   
        
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row id="avail"></Row>
  </div>

  )
}

export default GalleryPage