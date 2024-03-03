import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo2.png'

import "./navBar.css"




type Props = {}

export const NavBar = (props: Props) => {
  return (
    <Navbar className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="text-light">
          <img alt="logo" src={logo} width="250" height="" className="Logo" />{" "}
        </Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar