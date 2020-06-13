import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

import SideBar from "./SideBar";

import app from "../utils/fire";

const PrivateHeader = () => {
  const history = useHistory();

  const signOut = async () => {
    try {
      await app.auth().signOut();
      history.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="nav-bar"
    >
      <Navbar.Brand href="#home" style={{ marginLeft: "2rem" }}>
        <SideBar />
        PPBM BERSATU
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav style={{ marginRight: "3rem" }}>
          <NavLink to="/login">
            <Button variant="light" onClick={signOut}>
              LogOut
            </Button>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PrivateHeader;
