import React, { useContext, useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Navbar, Nav, Button, Card } from "react-bootstrap";

import SideBar from "./SideBar";

import app from "../utils/fire";

import { AuthContext } from "../utils/Auth";

const UserPopup = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Card>
      <Card.Title>User</Card.Title>
    </Card>
  );
};

const PrivateHeader = () => {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

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
              {currentUser.displayName}
            </Button>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PrivateHeader;
