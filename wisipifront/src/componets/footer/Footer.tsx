import { Container, Row, Col, Image } from "react-bootstrap";
import footerImage from "../../assets/footerImage.svg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./footer.css";

// type Props = {}

const Footer = () => {
  return (
    <>
      <Container fluid className="p-0" style={{backgroundColor:'#354656'}}>
        <Row className="m-0">
          <Col className="p-0">
            <Image
              className="full-width-image"
              src={footerImage}
              alt="Footer Image"
              fluid
            />
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="footer-details"
        style={{ backgroundColor: "#299E5D" }}
      >
        <Row className="justify-content-md-center text-white">
          <Col md={7} className="text-details">
            <div className="footer-brand">
              MudAPP
            </div>
            <div className="footer-description">
              Ayudamos las personas a realizar sus mudanzas desde 2024 <br />
              MudAPP es una marca registrada!
            </div>

            <div className="footer-contact" style={{ color: "white" }}>
              +34 555 55 55 55
            </div>
            <div className="social-media">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-instagram"
                  style={{
                    color: "white",
                    fontSize: "24px",
                    margin: "10px",
                    padding: "10px",
                  }}
                ></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-facebook"
                  style={{
                    color: "white",
                    fontSize: "24px",
                    margin: " 10px",
                    padding: "10px",
                  }}
                ></i>
              </a>
              <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-whatsapp"
                  style={{
                    color: "white",
                    fontSize: "24px",
                    margin: "10px",
                    padding: "10px",
                  }}
                ></i>
              </a>
            </div>
          </Col>

          <Col md={4} className="footer-links">
            <div className="links-container">
              <div className="link-group">
              <a href="/sobre-nosotros"   style={{
                    color: "white",
                    fontSize: "18px",
                    margin: " 10px",
                    padding: "10px",
                    textDecoration:" none"
                  }}>Sobre nosotros</a>

                <a href="/informacion sobre cookies"   style={{
                    color: "white",
                    fontSize: "18px",
                    margin: " 10px",
                    padding: "10px",
                    textDecoration:" none"
                  }}>Informacion sobre cookies</a>
              </div>

              <div className="link-group" >
                <a href="/Terminos de uso"   style={{
                    color: "white",
                    fontSize: "18px",
                    margin: " 10px",
                    padding: "10px",
                    textDecoration:" none"
                  }}>Terminos de uso</a>

                <a href="/Politicas de privacidad"   style={{
                    color: "white",
                    fontSize: "18px",
                    margin: " 10px",
                    padding: "10px",
                    textDecoration:" none"
                  }}>Politicas de privacidad</a>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
