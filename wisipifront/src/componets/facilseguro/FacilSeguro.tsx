import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const FacilSeguro = () => {
  return (
    <Container>
      <Row>
        <Col className="text-light "></Col>
        
        <Col  className="text-light " xs={3}><h1>Facil y Seguro</h1></Col>
        <Col></Col>
      </Row>
      <Row>
        
        <Col className="text-light "><img src=''></img><p>Registrate como usuario y accede para encontrar miles de “MuddAppers” cerca de ti1.</p></Col>

        <Col></Col>
        
       
      </Row>
      <Row>
      <Col></Col>
        <Col className="text-light "><p>Registrate como usuario y accede para encontrar miles de “MuddAppers” cerca de ti2.</p></Col>
        
        </Row>
        <Row>
     
        <Col className="text-light "><p>Registrate como usuario y accede para encontrar miles de “MuddAppers” cerca de ti3.</p></Col>
        
        </Row>
        <Row>
          <Col></Col>
     
        <Col className="text-light "><p>Registrate como usuario y accede para encontrar miles de “MuddAppers” cerca de ti4.</p></Col>
        
        </Row>
    </Container>
  );
}

export default FacilSeguro;