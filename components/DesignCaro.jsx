'use client'; 
import { useState } from 'react';
import { component } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
 
export default function DesignCaro({ children }) {

 const [index, setIndex] = useState(0);
 const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
 };

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item  interval={4000}>
            <br></br>
            <Row sm={1}> <h2 class="text-center">Design Gallery</h2></Row>
            <Row><br></br></Row>
            <Row>
              <Col sm={1}></Col>
              <Col>
                <img src="/pattern.png"  alt="slides" />
                </Col>
                <Col>
                <br></br>
                    <h3 class="caro-title">Hen's Night Design <br></br>
                    <p><i>(Digital Illustration)</i></p></h3>
                    <p class="caro-text">
                      This design was commissioned for a hen's night and features all of the bride's favourite things (except the groom himself!); her dog Peanut, red wine, house plants and the beach.<pr></pr>
                      <br></br>
                      <br></br>The design was then used for invitations, place cards for the table and on a welcome poster.
                
                       (2023)</p>
                       <Link className='btn btn-primary btn-sml my-3' href="/gallery">Back to all Galleries</Link> 
                     
          
                  </Col>
                  <Col sm={1}></Col>
                    </Row>   
                
            </Carousel.Item>

            <Carousel.Item  interval={4000}>
            <br></br>
            <Row sm={1}> <h2 class="text-center">Design Gallery</h2></Row>
            <Row><br></br></Row>
            <Row>
              <Col sm={1}></Col>
              <Col>
                <img src="/90s.png"  alt="slides" />
                </Col>
                <Col>
                <br></br>
                    <h3 class="caro-title">90's Themed Design <br></br>
                    <p><i>(Digital Illustration)</i></p></h3>
                    <p class="caro-text">
                    This piece features outlined illustrations of various nineties icons.  The design was used for invitations for a nineties themed party.<br></br>  
                       (2022)</p>
                       <Link className='btn btn-primary btn-sml my-3' href="/gallery">Back to all Galleries</Link>
                     
          
                  </Col>
                  <Col sm={1}></Col>
                    </Row>   
                
            </Carousel.Item>

            <Carousel.Item  interval={4000}>
            <br></br>
            <Row sm={1}> <h2 class="text-center">Design Gallery</h2></Row>
            <Row><br></br></Row>
            <Row>
              <Col sm={1}></Col>
              <Col>
                <img src="/platypus.png"  alt="slides" />
                </Col>
                <Col>
                <br></br>
                    <h3 class="caro-title">The Platypus Principle <br></br>
                    <p><i>(Digital Illustration)</i></p></h3>
                    <p class="caro-text">
                    This logo was recently commissioned for the release of the book <i>The Platypus Principle</i>.<br></br> 
                    <br></br> 
                    The book is about looking out for weak signals in the workplace and has a focus on safety.  The brief called for a winking platypus to suggest that the platypus knows things that you should know too!
                       (2023)</p>
                       <Link className='btn btn-primary btn-sml my-3' href="/gallery">Back to all Galleries</Link>
                     
          
                  </Col>
                  <Col sm={1}></Col>
                    </Row>   
                
            </Carousel.Item>

            

    </Carousel>
     
    
     
   
  
 
  
 
      {children}
    </>
  );
}