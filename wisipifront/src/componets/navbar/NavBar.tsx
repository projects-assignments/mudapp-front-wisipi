import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo2.png'

import "./navBar.css"


export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="/" className='text-light' >
            <img alt="logo"src={logo} width="200"height=""className="Logo" />{' '}
            
          </Navbar.Brand>
          <Nav className="m">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
