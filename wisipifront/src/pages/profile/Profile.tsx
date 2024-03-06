import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';






type Props = {}

export const Profile = (props: Props) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isMatch, setIsMatch] = useState(true);
    const handleChange = (event, field) => {
        if (field === 'newPassword') {
          setNewPassword(event.target.value);
        } else if (field === 'confirmPassword') {
          setConfirmPassword(event.target.value);
          setIsMatch(newPassword === event.target.value); // Check for match on change
        }
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (isMatch) {
          // Handle form submission logic here, potentially sending the new password to your backend
          console.log('New password:', newPassword);
        } else {
          alert('Passwords do not match!');
        }
      };
      const handleChangeimg = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
        setImageUrl(URL.createObjectURL(file)); // Generate temporary URL for preview
      };
    
      const handleSubmitimg = (event) => {
        event.preventDefault();
        // Handle image upload logic here, potentially sending the image to your backend
        console.log('Selected image:', selectedImage);
      };
  return (
    <Container className="Profilepg" fluid style={{ backgroundColor:"#479CB7"}}>
       <Row>
      
        
        <Col sm={5}>
            <Form onSubmit={handleSubmitimg}>
      <Form.Group controlId="formImageUpload">
        <Form.Label>Select Image</Form.Label>
        <Form.Control type="file" onChange={handleChangeimg} />
      </Form.Group>
      {imageUrl && (
        <img src={imageUrl} alt="Preview" width={200} />
      )}
      <Button variant="primary" type="submit" disabled={!selectedImage}>
        Upload Image
      </Button>
    </Form>

        </Col>
        
        <Col sm={5}>        
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicapellidos">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Apellidos" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Apellidos" />
      </Form.Group>
      <Form.Group controlId="formNewPassword">
        <Form.Label></Form.Label>
        <Form.Control
          type="password"
          placeholder="ingresa Nuevo password"
          value={newPassword}
          onChange={(event) => handleChange(event, 'newPassword')}
        />
        <Form.Text className="text-muted">
          Tu password debe terner mas de 8 caracteres
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formRepeatPassword">
        <Form.Label></Form.Label>
        <Form.Control
          type="password"
          placeholder="Repite tu Nuevo password"
          value={confirmPassword}
          onChange={(event) => handleChange(event, 'confirmPassword')}
          isInvalid={!isMatch} // Set invalid state if passwords don't match
        />
        <Form.Control.Feedback type="invalid">
          Passwords No coincide
        </Form.Control.Feedback>
      </Form.Group>
      <br></br>
      <Button variant="primary" type="submit" disabled={!isMatch}>
        Enviar
      </Button>
      <br></br>

    </Form>
    <br></br>
    <Table  striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Fecha</th>
          <th>Ubicacion</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Marzo 15</td>
          <td>Barcelona</td>
          <td>50€</td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    </Col>
      </Row>
    </Container>
  )
}

export default Profile;