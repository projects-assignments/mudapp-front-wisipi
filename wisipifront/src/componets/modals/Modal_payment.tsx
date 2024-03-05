import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type Props = {};

export const Modal_payment = (props: Props) => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Container>
        <Modal.Dialog>
          <Modal.Header  closeButton style={{ backgroundColor: "#479CB7" }}>
            <Modal.Title  className="text-light"><h2 style={{ textAlign: "center" }}>Payment</h2></Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ backgroundColor: "#479CB7" }}>
            <Form>
              <Row>
                <Col sm={5}>
                  <Form.Group className="mb-3" controlId="formModalUbicacion">
                    <Form.Label>Ubicación</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu ubicación"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={5}>
                  <Form.Group className="mb-3" controlId="formModalUbicacion">
                    <Form.Label>Capacidad de carga</Form.Label>
                    <Form.Control type="text" placeholder="Capacidad" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={5}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Destino</Form.Label>
                    <Form.Control type="Text" placeholder="Destino" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={5}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Horario</Form.Label>
                    <Form.Control type="Text" placeholder="Horario" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Modal.Body>

          <Modal.Footer style={{ backgroundColor: "#479CB7" }}>
            <Button  variant="light">Confirmar</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Container>
    </div>
  );
};

export default Modal_payment;
