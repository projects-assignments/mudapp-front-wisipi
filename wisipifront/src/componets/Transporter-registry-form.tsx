import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TransporterRegistration() {
    return ( 
    <Form style={{background:'#F9C96A', display:'flex', justifyContent: 'center', flexDirection:'column'}}>
    <Row>
     <Col>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="nombre" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formGroupLastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="apellido" />
      </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formGroupLicense">
        <Form.Label>Permiso de Conducir</Form.Label>
        <Form.Control type="text" placeholder="permiso de conducir" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formGroupCartype">
        <Form.Label>Tipo de Coche</Form.Label>
        <Form.Control type="text" placeholder="tipo de coche" />
      </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formGroupLicensePlate">
        <Form.Label>Matrícula del Coche</Form.Label>
        <Form.Control type="text" placeholder="matricula del coche" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formGroupTelephone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="tel" placeholder="telefono" />
      </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formGroupAdress">
        <Form.Label>Dirección</Form.Label>
        <Form.Control type="text" placeholder="Dirección" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder=" email" />
      </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="text" placeholder="Contraseña" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formGroupRepeatPassword">
        <Form.Label>Repetir Contraseña</Form.Label>
        <Form.Control type="text" placeholder="Repetir Contraseña" />
      </Form.Group>
      </Col>
    </Row>
    <Button variant="primary" type="submit" style={{backgroundColor: '#0D6E6E', display: 'flex', alignSelf: 'center'}}>
        Confirmar
      </Button>
  </Form>
);
}

export default TransporterRegistration;