import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

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
        Keahlian ppbm BERSATU
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Terkini</Nav.Link>
          <Nav.Link>Info</Nav.Link>
          <Nav.Link>Daftar Ahli</Nav.Link>
        </Nav>
        <Nav style={{ marginRight: "3rem" }}>
          <NavLink to="/login">
            <Button variant="light">Login</Button>
          </NavLink>
        </Nav>
        {/* <NavLink to="/login">Login</NavLink> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
