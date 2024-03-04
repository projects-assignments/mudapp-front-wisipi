import {useState, useEffect} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import heroImage from '../../assets/heroImage.svg';
import heroImageMobile from '../../assets/heroImageMobile.svg'
import './header.css';


// type HeaderProps = {}

const Header = () => {
const [isMobile, setIsMobile] =useState(false);

useEffect(() =>{
  const updateSize = () => {
    setIsMobile(window.innerWidth <768);
  }

  window.addEventListener('resize', updateSize);
  updateSize
  return () => window.removeEventListener('resize', updateSize)
},[ ]);
 
  return (
    <Container fluid className="hero-container">
    <Row>
        <Col className="position-relative">
            <div className="hero-text">
                <p>Bienvenidos a</p>
                <h1>MuddAPP</h1>
                <p>mudanzas a un click!</p>
            </div>
            <Image src={isMobile ? heroImageMobile : heroImage} alt="HeroImage" fluid />
           
        </Col>
    </Row>
</Container>
  );
}

export default Header;
