import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Avatar from '../../assets/avatar-Icon.png';
import '/src/componets/modals/Modal-Login.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalRegistre from './Modal-registre';


function LoginForm() {
  const [show, setShow] = useState(false);
// fetch
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = async () => {
    try {
      const response = await fetch('auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password,
        }),
      });

      if (response.ok) {
        console.log('Usuario autenticado');
        
      } else {
        console.error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <img alt="avatar" src={Avatar} width="40" height="" className="avatar" />{" "}
      </Button>

      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header closeButton className="modal-style">
          <Modal.Title className='modal-title'>Inicio de sesion</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-style form-div">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="Contraseña"
                placeholder="Ingresa tu contraseña"
                autoFocus
              />
            </Form.Group>
          </Form>
   <Container>
       <Row className='forgot-pass mt-1'>
          <Button  variant="secondary" onClick={handleClose}>
            Olvidaste tu contraseña
          </Button>
        </Row>
        <Row className="mt-3">
        <Col>
          {/* <Button variant= "secundary" onClick={handleClose} style={{ backgroundColor: '#F9C96A', fontStyle: '#FFFFFF' }}>
            No tienes cuenta, Registrate!
          </Button> */}
          <ModalRegistre />
        </Col>
        <Col>
          <Button variant= "terciary" onClick={handleClose} style={{ backgroundColor: '#F9C96A', padding: '1.15rem 5rem 1.15rem 5rem'}}>
            Iniciar
          </Button>
        </Col>
       </Row>
  </Container>
        </Modal.Body>
       
        
      </Modal>
    </>
  );
}

export default LoginForm;

type Props = {}