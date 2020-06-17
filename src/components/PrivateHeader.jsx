import React, { useContext, useState, useEffect } from "react";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import { Navbar, Nav, Button, Card } from "react-bootstrap";

import SideBar from "./SideBar";

import app from "../utils/fire";

import { AuthContext } from "../utils/Auth";

const UserPopup = () => {
  const { currentUser } = useContext(AuthContext);

  const signOut = async () => {
    try {
      await app.auth().signOut();
      // history.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card
      style={{
        position: "absolute",
        right: "80px",
        top: "50px",
        zIndex: 4,
      }}
    >
      <Card.Header className="text-center">
        {currentUser.displayName}
      </Card.Header>
      <Card.Body>{currentUser.email}</Card.Body>
      <Card.Footer className="d-flex">
        <Button size="sm" className="mx-auto" onClick={signOut}>
          Log Out
        </Button>
      </Card.Footer>
    </Card>
  );
};

const PrivateHeader = () => {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const [showUser, setShowUser] = useState(false);

  // useEffect(() => {
  //   console.log(path, url);
  //   return () => {
  //     console.trace("Im Out");
  //   };
  // }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="nav-bar"
    >
      <Navbar.Brand style={{ marginLeft: "2rem" }}>
        <SideBar />
        Keahlian ppbm BERSATU
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav style={{ marginRight: "3rem" }}>
          <Button variant="light" onClick={() => setShowUser(!showUser)}>
            {currentUser.displayName}
          </Button>
        </Nav>
      </Navbar.Collapse>
      {showUser && <UserPopup />}
    </Navbar>
  );
};

export default PrivateHeader;
