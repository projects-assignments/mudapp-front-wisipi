import { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import heroImage from '../../assets/heroImage.svg';
import heroImageMobile from '../../assets/heroImageMobile.svg'
import './header.css';
import { SearchBar } from '../searchbar/Search.tsx';

// type HeaderProps = {}

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', updateSize);
    updateSize
    return () => window.removeEventListener('resize', updateSize)
  }, []);

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
          <div className={isMobile ? "position-relative mt-5 search-container-mobile" : "position-absolute bottom-0 start-0 w-100 mb-4 mx-4"} style={{ maxWidth: '300px' }}>
            <SearchBar />
          </div>
        </Col>
      </Row>
    </Container>

  );
}


export default Header;


