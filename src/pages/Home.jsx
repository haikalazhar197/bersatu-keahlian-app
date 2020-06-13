import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAddressBook,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { faAngular, faReact } from "@fortawesome/free-brands-svg-icons";

import PrivateHeader from "../components/PrivateHeader";
import SideBar from "../components/SideBar";

export default () => {
  return (
    <div className="home-page">
      <PrivateHeader />
      {/* <SideBar /> */}
      <section>Home</section>
    </div>
  );
};
