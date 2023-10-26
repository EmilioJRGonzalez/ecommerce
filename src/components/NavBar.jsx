import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#motherboards">Motherboards</Nav.Link>
            <Nav.Link href="#procesadores">Procesadores</Nav.Link>
            <Nav.Link href="#placas-de-video">Placas de Video</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    )
}