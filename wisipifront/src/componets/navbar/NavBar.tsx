import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo2.png'
import Avatar from '../../assets/avatar-Icon.png'

import "./navBar.css"




type Props = {}

export const NavBar = (props: Props) => {
  return (
    <Navbar className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="text-light">
          <img alt="logo" src={logo} width="150" height="" className="Logo" />{" "}
        </Navbar.Brand>
        
       
          <Nav className="ms-auto">
            <img alt="avatar" src={Avatar} width="40" height="" className="avatar" />{" "}
          </Nav>
        
      </Container>
    </Navbar>
  )
}

export default NavBar