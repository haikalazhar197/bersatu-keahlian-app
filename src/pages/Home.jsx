import React, { useEffect } from "react";

import PrivateHeader from "../components/PrivateHeader";

import { Spinner, Card, Button } from "react-bootstrap";

import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";

import Search from "./Search";
import RegistrationForm from "./RegistrationForm";

const Home = () => {
  const history = useHistory();
  return (
    <div style={{ width: "100vw" }} className="p-5">
      <Card style={{ maxWidth: "700px" }} className="m-auto">
        <Card.Header>My Keahlian</Card.Header>
        <Card.Body>
          <Card.Title>You are not yet an ahli of bersatu</Card.Title>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-center">
            <Button onClick={() => history.push("/home/register")}>
              Apply Now
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default () => {
  const { path, url } = useRouteMatch();

  useEffect(() => {
    console.log(path, url);
    return () => {
      console.trace("Im out");
    };
  }, []);

  return (
    <div className="home-page">
      <PrivateHeader />
      {/* <section>Home</section> */}
      <Switch>
        <Route exact path={path} component={Home} />
        <Route exact path={`${path}/search`} component={Search} />
        <Route path={`${path}/register`} component={RegistrationForm} />
      </Switch>
    </div>
  );
};
