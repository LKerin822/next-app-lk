'use client'; 
import { useState } from 'react';
import { component } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
 
export default function FootyCaro({ children }) {

 const [index, setIndex] = useState(0);
 const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
 };

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>               
            <Carousel.Item  interval={4000}>
            <br></br>
            <Row sm={1}> <h2 class="text-center">Footy Portrait Gallery</h2></Row>
            <Row><br></br></Row>
            <Row>
              <Col sm={1}></Col>
              <Col>
                <img src="/Buddy.png"  alt="slides" />
                </Col>
                <Col>
                <br></br>
                    <h4 class="caro-title">Lance "Buddy" Franklin, Sydney <br></br>
                    <p><i>(Digital Illustration)</i></p></h4>
                    <p class="caro-text">
                    This illustration of Sydney Swan's player Lance "Buddy" Franklin was created in 2019.  I was working my way through a series of AFL portraits and when it came time to chose a player from Sydney, I couldn't go past Buddy.  
                    <br></br>
                    <br></br>When the Sydney Swans made the AFL Grand Final in 2022, I created some decorative Swans bunting with this image.<br></br>  
                       (2019)</p>
                       <Link className='btn btn-primary btn-sml my-3' href="/gallery">Back to all Galleries</Link>
                  </Col>
                  <Col sm={1}></Col>
                    </Row>   
                
            </Carousel.Item>

            <Carousel.Item  interval={4000}>
            <br></br>
            <Row sm={1}> <h2 class="text-center">Footy Portrait Gallery</h2></Row>
            <Row><br></br></Row>
            <Row>
              <Col sm={1}></Col>
              <Col>
                <img src="/Ross.png"  alt="slides" />
                </Col>
                <Col>
                <br></br>
                    <h4 class="caro-title">Seb Ross, St.Kilda <br></br>
                    <p><i>(Digital Illustration)</i></p></h4>
                    <p class="caro-text">
                    I created this portrait of St Kilda player Seb Ross in 2020 during one of the lockdowns.  St. Kilda happens to be my team so it was a lot of fun to create this illustration.<br></br>  
                       (2020)</p>
                       <Link className='btn btn-primary btn-sml my-3' href="/gallery">Back to all Galleries</Link>
                  </Col>
                  <Col sm={1}></Col>
                    </Row>   
                
            </Carousel.Item>

            <Carousel.Item  interval={4000}>
            <br></br>
            <Row sm={1}> <h2 class="text-center">Footy Portrait Gallery</h2></Row>
            <Row><br></br></Row>
            <Row>
              <Col sm={1}></Col>
              <Col>
                <img src="/Max.png"  alt="slides" />
                </Col>
                <Col>
                <br></br>
                    <h4 class="caro-title">Max Gawn, Melbourne <br></br>
                    <p><i>(Digital Illustration)</i></p></h4>
                    <p class="caro-text">
                    This portrait of Melbourne's Max Gawn was created in 2021 to coincide with their AFL Grand Final win.  Just like the portrait of Buddy, this portrait of Max was turned into Melbourne themed bunting to celebrate their premiership win. <br></br>  
                       (2021)</p>
                       <Link className='btn btn-primary btn-sml my-3' href="/gallery">Back to all Galleries</Link>
                  </Col>
                  <Col sm={1}></Col>
                    </Row>   
                
            </Carousel.Item>
            <Carousel.Item  interval={4000}>
            <br></br>
            <Row sm={1}> <h2 class="text-center">Footy Portrait Gallery</h2></Row>
            <Row><br></br></Row>
            <Row>
              <Col sm={1}></Col>
              <Col>
                <img src="/Kennedy.png"  alt="slides" />
                </Col>
                <Col>
                <br></br>
                    <h4 class="caro-title">Josh Kennedy, West Coast <br></br>
                    <p><i>(Digital Illustration)</i></p></h4>
                    <p class="caro-text">
                    Josh Kennedy, former West Coast Eagles player, was the subject of this 2019 illustration.  Just like the portrait of Buddy and Max, this portrait was turned into buntin to celebrate the Eagles' premiership win. <br></br>  
                       (2018)</p>
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