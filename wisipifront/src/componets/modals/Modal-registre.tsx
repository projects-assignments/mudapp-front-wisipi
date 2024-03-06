import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ToubleTab from '../tab-modal-registre'



function ModalRegistre() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant= "secundary" onClick={handleShow} style={{ backgroundColor: '#F9C96A', fontStyle: '#FFFFFF' }}>
      No tienes cuenta, Registrate!
      </Button>

      <Modal show={show} onHide={handleClose} 
      centered
      size="lg" 
      >
        <Modal.Body style={{backgroundColor: '#F9C96A'}}>
              <ToubleTab /> 
        </Modal.Body >
      </Modal>
    </>
  );
}

export default ModalRegistre;
