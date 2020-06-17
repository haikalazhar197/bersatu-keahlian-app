import React, { useState, useContext } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";

import { Card, Form, Button, Spinner } from "react-bootstrap";

import axios from "axios";

import app from "../utils/fire";

import { AuthContext } from "../utils/Auth";

export default () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmittng] = useState(false);
  const [userError, setUserError] = useState("");

  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  const register = async (e) => {
    e.preventDefault();
    console.log("Registering", name, email, password);
    setSubmittng(true);

    // let response = null;

    if (name && email && password) {
      try {
        const response = await axios.post(
          "https://asia-east2-ppbmbersatuapp.cloudfunctions.net/api/signup/v1",
          {
            user: {
              username: name,
              email: email,
              password: password,
            },
          }
        );
        console.log(response);

        if (response.data.error) {
          setUserError(response.data.error.message);
        } else {
          await app.auth().signInWithEmailAndPassword(email, password);
          history.push("/home");
        }
      } catch (err) {
        console.log("something went wrong", err);
      }
    } else {
      setUserError("Please fill in all the fields above");
    }

    setSubmittng(false);
  };

  // const signIn = async () => {
  //   try{
  //     await app.auth().signInWithEmailAndPassword()
  //   }
  // }

  if (currentUser) {
    // history.replace("/home");
    return <Redirect to={"/home"} />;
  }

  return (
    <div className="full-page flex-center bg-image">
      <Card style={{ marginBottom: "100px", width: "350px" }}>
        <Card.Header>Daftar Akaun</Card.Header>
        <Card.Body>
          {submitting ? (
            <Spinner animation="border" role="status" variant="primary">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <Form onSubmit={register}>
              <Form.Group>
                <Form.Label>NO IC</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan NO IC"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Masukan Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">Untuk pengesahan</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Text>{userError}</Form.Text>
              </Form.Group>
            </Form>
          )}
        </Card.Body>
        <Card.Footer>
          <div className="d-flex flex-column justify-content-center">
            <Button variant="primary" onClick={register}>
              Daftar Akaun
            </Button>
            <div style={{ textAlign: "center" }}>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};
