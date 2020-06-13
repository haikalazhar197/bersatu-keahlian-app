import React from "react";
import { useHistory } from "react-router-dom";

import { Card, Button } from "react-bootstrap";

export default () => {
  const history = useHistory();
  return (
    <div className="full-page flex-center bg-image">
      <Card style={{ marginBottom: "100px" }}>
        <Card.Header>Login To PPBM App</Card.Header>
        <Card.Body>
          <Button onClick={() => history.push("/home")}>Google</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
