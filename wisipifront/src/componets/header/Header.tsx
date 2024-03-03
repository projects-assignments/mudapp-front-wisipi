import { Container, Row, Col, Image } from 'react-bootstrap';
import heroImage from '../../assets/heroImage.svg';
import './header.css';

type HeaderProps = {}

function Header(_props: HeaderProps) {
  return (
    <Container fluid className="hero-container">
    <Row>
        <Col className="position-relative">
            <div className="hero-text">
                <p>Bienvenidos a</p>
                <h1>MuddAPP</h1>
                <p>mudanzas a un click!</p>
            </div>
            <Image src={heroImage} alt="HeroImage" fluid />
        </Col>
    </Row>
</Container>
  );
}

export default Header;
