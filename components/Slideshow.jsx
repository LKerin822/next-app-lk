'use client'; 
import { useState } from 'react';
import { component } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
 
export default function Slideshow({ children }) {

 const [index, setIndex] = useState(0);
 const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
 };

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item  interval={4000}>
            <br></br>
            <Row sm={1}> <h2 class="text-center">Pet Portrait Gallery</h2></Row>
            <Row><br></br></Row>
            <Row>
              <Col sm={1}></Col>
              <Col>
                <img src="/Alice.png"  alt="slides" />
                </Col>
                <Col>
                <br></br>
                    <h4 class="caro-title">Alice <br></br>
                    <p><i>(Soft Pastel)</i></p></h4>
                    <p class="caro-text">
                      This soft pastel piece of my dog, Alice, was created in 2010 when she was still a pup.  For the first few years of her life I would create an illustration of Alice that I could print onto Christmas cards and send out to friends and family.  <br></br><br></br>
                      Sadly just before Christmas last year we lost Alice.  I love her expression in this illustration especially because it reminds me of how little she once was.<pr></pr><br></br>
                
                       (2010. 4 x 6 inch)</p>
                       <Link className='btn btn-primary btn-sml my-3' href="/gallery">Back to all Galleries</Link> 
                     
          
                  </Col>
                  <Col sm={1}></Col>
                    </Row>   
                
            </Carousel.Item>

            <Carousel.Item  interval={4000}>
            <br></br>
            <Row sm={1}> <h2 class="text-center">Pet Portrait Gallery</h2></Row>
            <Row><br></br></Row>
            <Row>
              <Col sm={1}></Col>
              <Col>
                <img src="/Lola.png"  alt="slides" />
                </Col>
                <Col>
                <br></br>
                    <h4 class="caro-title">Lola <br></br>
                    <p><i>(Digital Illustration)</i></p></h4>
                    <p class="caro-text">
                    Lola was commissioned by a friend as a gift for her daughter.  Lola is the apple of her mum's eye and it was a joy to create a bright, happy piece of such a bright and happy pet!<br></br>
            It was created digitally on an iPad with an apple pencil.<br></br>  
                       (2019)</p>
                       <Link className='btn btn-primary btn-sml my-3' href="/gallery">Back to all Galleries</Link>
                     
          
                  </Col>
                  <Col sm={1}></Col>
                    </Row>   
                
            </Carousel.Item>

            <Carousel.Item  interval={4000}>
            <br></br>
            <Row sm={1}> <h2 class="text-center">Pet Portrait Gallery</h2></Row>
            <Row><br></br></Row>
            <Row>
              <Col sm={1}></Col>
              <Col>
                <img src="/Peanut.png"  alt="slides" />
                </Col>
                <Col>
                <br></br>
                    <h4 class="caro-title">Peanut <br></br>
                    <p><i>(Digital Illustration)</i></p></h4>
                    <p class="caro-text">
                    This digital illustration of the gorgeous Peanut was created as surprise portrait for her mum.  Peanut's mum was getting married to her dad and the bridesmaids commissioned this piece so that the bride and groom could include their precious pup in their wedding.<br></br>  
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