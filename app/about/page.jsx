'use client';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import '../../app/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPage = () => {
  return (
    <Container id='about'>
      <Row>
      <Col md={6}>
        <img src="/about.png" className='mx-auto d-block' id='about-img'></img>
        </Col>
   
      <Col md={5}>
        <br></br>
        <h2 class="text-left">About</h2>
        <br></br>
        <p>Hi, I'm Louise Kerin. I am an artist and designer based in Langwarrin, on the Mornington Peninsula, in Victoria.  
          <br></br>
          <br></br>My area of interest in art is around portraiture.  My portraiture journey began in graphite pencils which is a medium I still love to return to.  From there I moved into soft pastel and then acrylics.  The past few years I have mostly focused on creating digital art.  The main appeal with digital art is the portablily of materials.  I can (and do!) take my iPad and pencil with me everywhere.  My design journey has taken me to studying for a Bachelor degree online with Curtin University. Should everything run smoothly, I should graduate later this year with a Bachelor of Arts: (Digital Experience and Interaction Design) and (Professional Writing and Publishing).</p>
        </Col>

      <Col md={5}>

        </Col>
      </Row>
    </Container>

  )
}

export default AboutPage