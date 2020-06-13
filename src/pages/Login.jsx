import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Card, Button } from "react-bootstrap";

import { AuthContext } from "../utils/Auth";
import app from "../utils/fire";

export default () => {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

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

  if (!!currentUser) {
    history.replace("/home");
    return null;
  }

  return (
    <div className="full-page flex-center bg-image">
      <Card style={{ marginBottom: "100px" }}>
        <Card.Header>Login To PPBM App</Card.Header>
        <Card.Body>
          <Button onClick={signinGoogle}>Google</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
