import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
<<<<<<< HEAD
import icon1 from "..//..//assets/PayPal-logo-white-png-horizontal.png"
import icon2 from "..//..//assets/Bizum 1.png"
=======
import icon1 from "..//..//assets/paypal.png"
import icon2 from "..//..//assets/transferencia.png"
>>>>>>> feat-modalvermas
import icon3 from "..//..//assets/mingcute_card-pay-fill.png"

type Props = {};

export const Modal_payment = (props: Props) => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Container>
        <Modal.Dialog>
          <Modal.Header closeButton style={{ backgroundColor: "#479CB7" }}>
            <Modal.Title className="text-light">
              <h2>Realiza tu pago</h2>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ backgroundColor: "#479CB7" }}>
          
            <Row className="g-2">
              <Col md>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Ubicacion"
                >
                  <Form.Control type="text" placeholder="lugar" />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid"
                  label="Destino"
                >
                  <Form.Control type="text" placeholder="name@example.com" />
                  
                </FloatingLabel>
              </Col>
            </Row>
            <br></br>
            <Row className="g-2">
              <Col md>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Capacidad"
                >
                  <Form.Control type="number" placeholder="Tipo de transporte" />
                </FloatingLabel>
              </Col>
              <Col md>
                   <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Horario"
                >
                  <Form.Control type="time" placeholder="fecha" />
                </FloatingLabel>
              </Col>
            </Row>
          </Modal.Body>
          <div className="text-center" style={{backgroundColor: "#479CB7"}}>
          <br></br>
      
      <Row>
        
        <Col sm={4}><img src={icon1} width={50}/></Col>
        <Col  sm={4}><img src={icon2} width={50}/></Col>
        <Col sm={4}><img src={icon3} width={50}/></Col>
      </Row>
      <br></br>
        <br></br>  
          </div>

          <Modal.Footer style={{ backgroundColor: "#479CB7" }}>
            <Button className="buttom-center" variant="light">Confirmar</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Container>
    </div>
  );
};

export default Modal_payment;
