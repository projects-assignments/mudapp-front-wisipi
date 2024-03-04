import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo2.png";


// import "./navBar.css"

type Props = {};

export const NavBar = (props: Props) => {
  return (
    <Navbar bg="primary" expand="lg">
    <Container>
      <Navbar.Brand href="/">
      <img alt="logo" src={logo} width="180" height="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"  />
      <Navbar.Collapse  id="basic-navbar-nav" >
        <Nav className="ms-auto">
          <Nav.Link className="text-light"href="/"></Nav.Link>
          <Nav.Link className="text-light" href="/Join">Join</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

};

export default NavBar;
