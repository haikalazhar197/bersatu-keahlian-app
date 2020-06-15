import React from "react";

import { useHistory } from "react-router-dom";

import { Button } from "react-bootstrap";

import Header from "../components/Header";

import bersatuLogo from "../bersatuLogo.png";

export default () => {
  const history = useHistory();

  return (
    <div className="App">
      <Header />
      <div className="hero">
        <div className="hero-content">
          <img src={bersatuLogo} alt="Bersatu Logo" />
          <h1>Parti Pribumi Bersatu Malaysia</h1>
          <div
            style={{
              marginTop: "30px",
              width: "200px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              size="lg"
              variant="success"
              onClick={() => history.push("/signup")}
            >
              Daftar
            </Button>
            <Button
              size="lg"
              variant="light"
              onClick={() => history.push("/login")}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
