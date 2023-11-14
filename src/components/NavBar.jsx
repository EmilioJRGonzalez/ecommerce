import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to="/">Ecommerce</NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="category/mothers"><span className="nav-link">Motherboards</span></NavLink>
            <NavLink to="category/procesors"><span className="nav-link">Procesadores</span></NavLink>
            <NavLink to="category/videos"><span className="nav-link">Placas de Video</span></NavLink>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    )
}