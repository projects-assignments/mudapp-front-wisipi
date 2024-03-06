import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import iconuser from "..//../assets/usuario.png"
import iconCar from "..//../assets/carro.png"
import ListGroup from 'react-bootstrap/ListGroup';



type Props = {}

 export const Modal_verMas = (props: Props) => {
    

  return (
    
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
       
      <Modal.Dialog>
      <Modal.Body style={{ backgroundColor: "#479CB7" }}>
      <Container>
      <Row>
        <Col sm={2}><img src={iconuser} width={80}/> </Col>
        <Col><img src={iconCar} width={80}/></Col>
      </Row>
    </Container>
    <br></br>
    <ListGroup >
      <ListGroup.Item className="text-light" style={{ backgroundColor: "#479CB7" }}>Capacidad: 10 a 20 mt3</ListGroup.Item>
      <ListGroup.Item  className="text-light"  style={{ backgroundColor: "#479CB7" }}>Zona: Barcelona y alrededores</ListGroup.Item>
      <ListGroup.Item  className="text-light"   style={{ backgroundColor: "#479CB7" }}>Vehiculo: Van roja bmw</ListGroup.Item>
      <ListGroup.Item   className="text-light"  style={{ backgroundColor: "#479CB7" }}>Disponibilidad: Solo tardes, entre semana y fines de semana fuera de barcelona</ListGroup.Item>
     
    </ListGroup>
        </Modal.Body>
        <br></br>

        {/* <Modal.Footer style={{ backgroundColor: "#479CB7" }}> */}
      
          <Button  variant="primary">Contratar</Button>
        {/* </Modal.Footer> */}
      </Modal.Dialog>
    </div>
  )
}

export default Modal_verMas;