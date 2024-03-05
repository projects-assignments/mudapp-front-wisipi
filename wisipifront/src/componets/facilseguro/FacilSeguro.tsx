import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo1 from "../../assets/telefono-inteligente.png";
import logo2 from "../../assets/ic_twotone-handshake.png";
import logo3 from "../../assets/mingcute_card-pay-fill.png";
import logo4 from "../../assets/maletas.png";

export const FacilSeguro = () => {
  return (
    <Container style={{ backgroundColor: "#ffff" }}>
      <Row>
        <Col className="text-dark "></Col>
        <Col sm={3} className="text-dark " xs={3}>
          <br></br>
          <br></br>
          <h2>Facil y Seguro</h2>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col sm={2} className="text-dark "> {/*columna1*/}
          
          <img src={logo1} width={180} />
        </Col>
        <br></br>
        <Col sm={5}>
          <br></br>
          <br></br>
          
          <h4>
            {" "}
            Registrate como usuario y accede para encontrar miles de
            “MuddAppers” cerca de ti1.
          </h4>
        </Col>
      </Row>
      <Row>{/*columna2*/}
        <Col sm></Col>
        <Col sm></Col>
        <Col sm></Col>
        <Col sm><img src={logo2} width={180} /></Col>
      <Col sm={5}>
          <br></br>
          <br></br>
          
          <h4>
            {" "}
            Cierra trato con el mejor presupuesto según tus necesidades.
          </h4>
        </Col>

      </Row>
      <Row>
      <Col sm={2} className="text-dark "> {/*columna3*/}
          
          <img src={logo3} width={180} />
        </Col>
        <br></br>
        <Col sm={5}>
          <br></br>
          <br></br>
          
          <h4>
            {" "}
            Realiza el pago por medio de nuestra app de forma segura.
          </h4>
        </Col>
      </Row>
      <Row>{/*columna 4*/}
        <Col sm></Col>
        <Col sm></Col>
        <Col sm></Col>
        <Col sm><img src={logo4} width={180} /></Col>
      <Col sm={5}>
          <br></br>
          <br></br>
          
          <h4>
            {" "}
            Recibe tu mudanza en la fecha establecida en tu destino.
          </h4>
          <br></br>
          <br></br>
        </Col>

      </Row>
      
    </Container>
  );
};

export default FacilSeguro;
