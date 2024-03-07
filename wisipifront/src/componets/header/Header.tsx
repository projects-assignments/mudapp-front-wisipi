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
            <h2 style={{ margin: "0" }}>MuddAPP</h2>
            <p>mudanzas a un click!</p>
          </div>
          
          <div className="container-form">
            <Form className="d-flex flex-column">
              <div className="container-input-btn mb-3" style={{ marginLeft: '65px', maxWidth: '235px' }}>
                <Form.Label><strong>Me mudo desde</strong></Form.Label>
                <Form.Control
                  type="search"
                  placeholder="Introduce tu dirección"
                  aria-label="Search"
                  className="mb-3 form-input"
                />
              </div>
              <div className="container-input2 mb-3" style={{ marginLeft: '65px' }}>
                <Form.Label className='form-label'><strong>Me mudo a</strong></Form.Label>
                <div className="container-input-btn mr-2 d-flex align-items-center" style={{ maxWidth: '295px' }}>
                  <Form.Control
                    type="search"
                    placeholder="Introduce tu dirección"
                    aria-label="Search"
                    className="mb-3 form-input"
                  />
                  <Button variant="outline-success"  className="btn-submit d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#0D6E6E', marginLeft: '10px', marginBottom: '15px'}}>
                    <TbArrowBigRightFilled style={{ backgroundColor: '#0D6E6E', color: '#fff' }} />
                  </Button>
                </div>
              </div>
            </Form>
          </div>
          <Image src={isMobile ? heroImageMobile : heroImage} alt="HeroImage" className="hero-image"/>
        </Col>
      </Row>
    </Container>

  );
}


export default Header;