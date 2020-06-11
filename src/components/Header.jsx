import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="nav-bar"
    >
      <Navbar.Brand href="#home" style={{ marginLeft: "2rem" }}>
        PPBM BERSATU
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Terkini</Nav.Link>
          <Nav.Link href="#pricing">Info</Nav.Link>
          <Nav.Link href="#pricing">Daftar Ahli</Nav.Link>
        </Nav>
        <Nav style={{ marginRight: "3rem" }}>
          <Nav.Link href="#deets">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
