import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const BasicExample = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">JL fotografia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Carreras</Nav.Link>
            <Nav.Link href="#link">Futbol</Nav.Link>
            <NavDropdown title="Fiestas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bodas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                15 años
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Egresados</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 

export default BasicExample;