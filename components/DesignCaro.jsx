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
                    <h3 class="caro-title">Hen's Night Pattern <br></br>
                    <p><i>(Digital Illustration)</i></p></h3>
                    <p class="caro-text">
                    This repeat pattern was created for a Hen's night.  The design features all of the bride's favourite things; her dog Peanut, plants, red wine and the beach. The design was turned into invitations and a banner.</p>
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
                    <h3 class="caro-title">The Platypus Project <br></br>
                    <p><i>(Digital Illustration)</i></p></h3>
                    <p class="caro-text">
                    This logo was recently commissioned to accompany the book release of 'The Platypus Principle.''
                    <br></br>
                    <br></br>The Platypus Principle is about looking out for weak signals in the workplace with an emphasis on safety.  
                    The brief called for the platypus to be winking as he knows the secret to safety success.
                    </p>
                       <Link className='btn btn-primary btn-sml my-3' id="pp" href="/gallery">Back to all Galleries</Link>
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
                <img src="/Leslie.png"  alt="slides" />
                </Col>
                <Col>
                <br></br>
                    <h3 class="caro-title">Leslie Knope <br></br>
                    <p><i>(Digital Illustration)</i></p></h3>
                    <p class="caro-text">
                    This portait of Leslie Knope was pet project created in 2019.  I have been a fan of Parks and Recreation for many years and had always wanted to draw her. This piece is the result of many hours work flying home from New York.  <br></br>  
                       (2019)</p>
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
                <img src="/royal-wedding.png"  alt="slides" />
                </Col>
                <Col>
                <br></br>
                    <h3 class="caro-title">Royal Wedding of William and Kate <br></br>
                    <p><i>(Digital Illustration)</i></p></h3>
                    <p class="caro-text">
                    This digital illustration was created in 2021 to mark the tenth anniversary of the royal wedding between Prince William and Kate Middleton.  Back in 2011, I created this same image in soft pastel for the art shop I was working for at the time. I often like to recreate earlier pieces to see how much I have learned over the years.   <br></br>  
                       (2021)</p>
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
                <img src="/jill-biden.png"  alt="slides" />
                </Col>
                <Col>
                <br></br>
                    <h3 class="caro-title">Jill Biden<br></br>
                    <p><i>(Digital Illustration)</i></p></h3>
                    <p class="caro-text">
                    This portrait of Jill Biden, the First Lady of the USA, was a covid lockdown project of 2021.  Living in Melbourne, we experienced many lockdowns which were the perfect excuse to pick up my pen and draw!  <br></br>  
                       (2021)</p>
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