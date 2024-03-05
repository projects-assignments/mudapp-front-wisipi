import { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import heroImage from '../../assets/heroImage.svg';
import heroImageMobile from '../../assets/heroImageMobile.svg';
import { TbArrowBigRightFilled } from "react-icons/tb";
import './header.css';


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
          <div className={isMobile ? "position-relative mt-5 search-container-mobile" : "position-absolute bottom-0 start-0 w-100 mb-4 mx-4"} style={{ maxWidth: '500px' }}>
            <Form className="d-flex flex-column">
              <div className="mb-3" style={{ marginLeft: '65px', maxWidth: '235px' }}>
                <Form.Label><strong>Me mudo desde</strong></Form.Label>
                <Form.Control
                  type="search"
                  placeholder="Introduce tu código postal"
                  aria-label="Search"
                />
              </div>
              <div className="mb-3" style={{ marginLeft: '65px' }}>
                <Form.Label><strong>Me mudo a</strong></Form.Label>
                <div className="mr-2 d-flex align-items-center" style={{ maxWidth: '285px' }}>
                  <Form.Control
                    type="search"
                    placeholder="Introduce tu dirección"
                    aria-label="Search"
                    className="mb-3"
                  />
                  <Button variant="outline-success" className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#0D6E6E', marginLeft: '10px', marginBottom: '10px' }}>
                    <TbArrowBigRightFilled style={{ backgroundColor: '0D6E6E', color: '#fff' }} />
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>

  );
}


export default Header;