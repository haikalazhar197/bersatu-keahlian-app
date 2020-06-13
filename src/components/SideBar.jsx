import React, { useState } from "react";

import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faUser,
  faUsers,
  faBars,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "react-bootstrap";

const SideBar = () => {
  const [isShowing, setIsShowing] = useState(false);

  return isShowing ? (
    <div className="side-bar-container">
      <Nav className="flex-column side-bar">
        <h2>PPBM</h2>
        <NavLink
          to="/home"
          style={{ textDecoration: "none" }}
          className="sidebar-link"
          activeClassName="opacity-dark sidebar-link"
        >
          <FontAwesomeIcon icon={faHouseUser} />
          <span style={{ marginLeft: "10px" }}>Home</span>
        </NavLink>

        <NavLink
          to="/home"
          style={{ textDecoration: "none" }}
          className="sidebar-link"
        >
          <FontAwesomeIcon icon={faUser} />
          <span style={{ marginLeft: "10px" }}>Status Keahlian</span>
        </NavLink>

        <NavLink
          to="/home"
          style={{ textDecoration: "none" }}
          className="sidebar-link"
        >
          <FontAwesomeIcon icon={faUsers} />
          <span style={{ marginLeft: "10px" }}>Search Ahli</span>
        </NavLink>
      </Nav>
      <button className="btn-nostyle" onClick={() => setIsShowing(false)} />
    </div>
  ) : (
    <Button onClick={() => setIsShowing(!isShowing)} variant="outline-light">
      <FontAwesomeIcon icon={faBars} />
    </Button>
  );
};

export default SideBar;
