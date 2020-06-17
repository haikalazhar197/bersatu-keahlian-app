import React, { useContext, useState } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";

import { Card, Button, Form, Spinner } from "react-bootstrap";

import { AuthContext } from "../utils/Auth";
import app from "../utils/fire";

import axios from "axios";

export default () => {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //Google Signin function
  const signinGoogle = async () => {
    //Create new Auth Provider
    const googleAuthProvider = new app.firebase_.auth.GoogleAuthProvider();
    console.log(googleAuthProvider);

    // Try to signin the user with redirect
    try {
      await app.auth().signInWithRedirect(googleAuthProvider);
    } catch (err) {
      console.log(err);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const results = await axios.post(
        "https://asia-east2-ppbmbersatuapp.cloudfunctions.net/api/login/v1",
        { username: email }
      );

      if (results.data.error) {
        console.log(results.data.error.message);
        setUserError(results.data.error.message);
      } else {
        await app
          .auth()
          .signInWithEmailAndPassword(results.data.email, password);
      }

      console.log(results);
    } catch (err) {
      setUserError(err.message);
      console.log(err.message);
    }

    // try {
    //   await app.auth().signInWithEmailAndPassword(email, password);
    // } catch (err) {
    //   setUserError(err.message);
    //   console.log(err.message);
    // }
    setIsLoading(false);
  };

  //If user i already logged in change the page to home
  if (currentUser) {
    // history.replace("/home");
    return <Redirect to={"/home"} />;
  }

  return (
    <div className="full-page flex-center bg-image">
      <Card style={{ marginBottom: "100px", width: "350px" }}>
        <Card.Header>Login To PPBM App</Card.Header>
        <Card.Body>
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" role="status" variant="primary">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <Form onSubmit={login}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>IC NO</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Ic"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
              {/* <Button variant="primary" type="submit" className="mx-auto">
                Login
              </Button>
              <Button>Login with email</Button> */}
            </Form>
          )}
        </Card.Body>
        <Card.Footer>
          <div className="d-flex flex-column justify-content-center">
            <Button variant="primary" onClick={login}>
              Login
            </Button>
            <div style={{ textAlign: "center" }}>
              <Link to="/loginemail">Login with Email</Link>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};
