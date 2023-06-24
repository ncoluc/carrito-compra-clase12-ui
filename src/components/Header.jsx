import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import Changuito from "./Changuito";

const Header = ({ changuito, agregarProducto }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container className="container-nav">
          <Navbar.Brand href="#home">Colu's Sneakers</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#productos">Productos</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Changuito changuito={changuito} agregarProducto={agregarProducto} />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
