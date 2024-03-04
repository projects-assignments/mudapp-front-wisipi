import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo2.png'
import Avatar from '../../assets/avatar-Icon.png'

import "./navBar.css"
import LoginForm from '../modals/Modal-Login';




type Props = {}

export const NavBar = (props: Props) => {
  return (
    <Navbar className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="text-light">
          <img alt="logo" src={logo} width="150" height="" className="Logo" />{" "}
        </Navbar.Brand>
        
       
          <Nav className="ms-auto">
            {/* <img alt="avatar" src={Avatar} width="40" height="" className="avatar" />{" "} */}
            <LoginForm />
          </Nav>
        
      </Container>
    </Navbar>
  )
}

export default NavBar



// This is a space for test :P


            {/* <Nav.Link variant="primary" onClick={handleShow} href="/Login"> */}
            {/* </Nav.Link> */}
           
           
            {/* <Button variant="primary" onClick={handleShow}>
            <img alt="avatar" src={Avatar} width="35" height="" className="avatar" />{" "}
            </Button> */}

           