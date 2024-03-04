import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import footerImage from '../../assets/footerImage.svg';
import './footer.css'

// type Props = {}

const Footer = () => {
  return (
    <>
    <Container fluid className='p-0' style={{ backgroundColor: '#354656' }}>
     <Row className='m-0'>
      <Col className='p-0'>
      <Image className='full-width-image' src={footerImage} alt="Footer Image" fluid />
      </Col>
    </Row>
  </Container>
   <Container fluid className='footer-text' style = {{backgroundColor: '#299E5D'}}>
   <Row className='justify-content-md-center text-white'>
     <Col md={4} className='footer-text'>
      <div className='footer-brand'>MudAPP</div>
      <div>
        Ayudamos a personas a realizar una mudanza desde 2024
        MudAPP es una marca registrada!
      </div>
      <div className='footer-contact'>+34 555 55 55 55</div>
     </Col>
    <Col className='footer-social'>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram" style={{color: 'white'}}></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook" style={{color: 'white'}}></i>
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp" style={{color: 'white'}}></i>
            </a>
            </Col>
     <Col md={4} className='footer-links'></Col>
     <div>Sobre nosotros</div>
     <div>Informacion sobre cookies</div>
     <div>Terminos de uso</div>
    <div>Politicas de privacidad</div>
   </Row>
 </Container>
 </>
  );
};

export default Footer