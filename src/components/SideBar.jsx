import React, { useState, useEffect } from "react";

import { Nav } from "react-bootstrap";
import { NavLink, useRouteMatch } from "react-router-dom";

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
  const { path, url } = useRouteMatch();

  // useEffect(() => {
  //   console.log(path, url);
  //   return () => {
  //     console.trace("Im Out");
  //   };
  // }, []);

  return isShowing ? (
    <div className="side-bar-container">
      <Nav className="flex-column side-bar">
        <h2>PPBM</h2>
        <NavLink
          to={url}
          style={{ textDecoration: "none" }}
          className="sidebar-link"
          activeClassName="opacity-dark sidebar-link"
        >
          <FontAwesomeIcon icon={faHouseUser} />
          <span style={{ marginLeft: "10px" }}>Home</span>
        </NavLink>

        <NavLink
          to={`${path}/search`}
          style={{ textDecoration: "none" }}
          className="sidebar-link"
          activeClassName="sidebar-link opacity-dark"
        >
          <FontAwesomeIcon icon={faUsers} />
          <span style={{ marginLeft: "10px" }}>Search Ahli</span>
        </NavLink>
      </Nav>
      <button className="btn-nostyle" onClick={() => setIsShowing(false)} />
    </div>
  ) : (
    <Button
      onClick={() => setIsShowing(!isShowing)}
      variant="outline-light"
      className="mr-4"
    >
      <FontAwesomeIcon icon={faBars} />
    </Button>
  );
};

export default SideBar;
