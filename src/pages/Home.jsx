import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCoffee,
//   faAddressBook,
//   faSpinner,
// } from "@fortawesome/free-solid-svg-icons";
// import { faAngular, faReact } from "@fortawesome/free-brands-svg-icons";

import PrivateHeader from "../components/PrivateHeader";
// import SideBar from "../components/SideBar";

import { Spinner } from "react-bootstrap";

export default () => {
  return (
    <div className="home-page">
      <PrivateHeader />
      <div className="badge badge-dark badge-pill">Mine</div>
      <section>Home</section>
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status" variant="primary">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};
