'use client';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import '../../app/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPage = () => {
  return (
    <Container className="my-auto">
      <Row className="p-2"></Row>
      <Row id="about">
      <Col  md={6}>
        <img src="/about.png" className='mx-auto d-block mt-4' id='about-img'></img>
        </Col>
   
      <Col md={5}>
        <br></br>
        <h2 className="text-left">About</h2>
        <br></br>
        <p>Hi, I'm Louise Kerin. I am an artist and designer based in Langwarrin, on the Mornington Peninsula, in Victoria.  
          <br></br>
          <br></br>My area of interest in art is around portraiture.  My portraiture journey began in graphite pencils which is a medium I still love to return to.  From there I moved into soft pastel and then acrylics.  The past few years I have mostly focused on creating digital art.  The main appeal with digital art is the portablily of materials.  I can (and do!) take my iPad and pencil with me everywhere.  My design journey has taken me to studying for a Bachelor degree online with Curtin University. Later this year I will graduate with a Bachelor of Arts: (Digital Experience and Interaction Design) and (Professional Writing and Publishing).</p>
          <h5 class="p-0">As seen in...</h5>
          <br></br>
          <p>- <i>The Independent Online </i> <a href="https://www.independent.ie/style/weddings/12-of-the-best-props-for-your-royal-wedding-viewing-party/36512752.html">12 of the best props for your royal wedding party</a> </p>
          <p>- <i>realestate.com.au</i> (Instagram Stories 2018)</p>
          <p>- <i>Mamma Mia's Lady Start Ups </i>(Instagram stories 2018)</p>
        </Col>

      <Col md={5}>

        </Col>
      </Row>
      <Row>
      <Col md={2}></Col>
      <Col md={6}><h5 class="p-0">Skills and Mediums...</h5>
      <br></br></Col>
      <Col md={4}></Col>
      </Row>

      <Row>
      <Col md={2}></Col>
        <Col md={4}><p>- Calligraphy</p></Col>
        <Col md={3}><p>- Illustrations (Digital or Traditional)</p></Col>
        <Col md={3}></Col>
      </Row>

      <Row>
      <Col md={2}></Col>
        <Col md={4}><p>- Web Design</p></Col>
        <Col md={3}><p>- Portraiture (Digital or Traditional)</p></Col>
        <Col md={3}></Col>
      </Row>

      <Row>
      <Col md={2}></Col>
        <Col md={4}><p>- Logo Design</p></Col>
        <Col md={3}><p>- Invitation Design</p></Col>
        <Col md={3}></Col>
      </Row>
      <Row>
      <Col md={2}></Col>
        <Col md={4}><p>- Landscapes (Digital and Traditional)</p></Col>
        <Col md={3}><p>- Pet Portraiture (Digital and Traditional)</p></Col>
        <Col md={3}></Col>
      </Row>
      <Row>
      <Col md={2}></Col>
        <Col md={4}><p>- Front</p></Col>
        <Col md={3}><p>- Web Copy and Editing</p></Col>
        <Col md={3}></Col>
      </Row>

      <Row><br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br></Row>
      

    </Container>

  )
}

export default AboutPage