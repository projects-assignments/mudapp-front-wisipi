import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UserRegistration() {
  return (
    <Form style={{background:'#F9C96A', display:'flex', justifyContent: 'center', flexDirection:'column'}}>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupLastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Apellido" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formUserName">
        <Form.Label>Nombre de Usuário</Form.Label>
        <Form.Control type="text" placeholder="Nombre de Usuário" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder=" email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="text" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupRepeatPassword">
        <Form.Label>Repetir Contraseña</Form.Label>
        <Form.Control type="text" placeholder="Repetir Contraseña" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{backgroundColor: '#0D6E6E', display: 'flex', alignSelf: 'center'}}>
        Confirmar
      </Button>
    </Form>
  );
}

export default UserRegistration;