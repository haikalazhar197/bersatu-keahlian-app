import React, { useEffect, useState, useContext } from "react";

import PrivateHeader from "../components/PrivateHeader";

import { Spinner, Card, Button, Form, Col, Row } from "react-bootstrap";

import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";

import Search from "./Search";
import RegistrationForm from "./RegistrationForm";
import Ahli from "./Ahli";

import { AuthContext } from "../utils/Auth";

import axios from "axios";
import app from "../utils/fire";

const db = app.firestore();

const Home = () => {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isApplying, setIsApplying] = useState(false);

  const getUserData = async () => {
    setIsLoading(true);
    try {
      const querySnapShot = await db
        .collection("applications")
        .where("nric", "==", currentUser.displayName)
        .get();
      console.log(querySnapShot.docs);
      if (querySnapShot.docs.length) {
        console.log("Have DATA");
        const newData = querySnapShot.docs[0].data();
        setData(newData);
        setIsApplying(true);
        setIsLoading(false);
        return null;
      }

      const results = await axios.get(
        `https://asia-east2-ppbmbersatuapp.cloudfunctions.net/api/ahli?nokad=${currentUser.displayName}`
      );

      if (results.data.result.length) {
        const newData = results.data.result[0];
        setData(newData);
        setIsLoading(false);
        console.log(newData);
        return null;
      }

      console.log(results.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUserData();
    return () => {
      console.trace("IM Out");
    };
  }, []);

  if (data) {
    return (
      <div style={{ width: "100vw" }} className="p-5">
        <Card style={{ maxWidth: "700px" }} className="m-auto">
          <Card.Header>My Keahlian</Card.Header>
          {isApplying ? (
            <Card.Body>
              <Card.Title>Pending Approval</Card.Title>
            </Card.Body>
          ) : (
            <Card.Body>
              {" "}
              <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Nama Penuh
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue={data.nama_penuh}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    No Ic
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue={data.no_kad_pengenalan}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Keturunanan
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue={data.keturunan}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Jenis Keahlian
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue={data.jenis_keahlian}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Negeri
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue={data.bahagian_negeri}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Bahagian
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue={data.bahagian_bahagian}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Cawangan
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue={data.bahagian_cawangan}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    No Keahlian
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue={data.no_keahlian}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Account Status
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue={data.account_status}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          )}
        </Card>
      </div>
    );
  }

  return (
    <div style={{ width: "100vw" }} className="p-5">
      <Card style={{ maxWidth: "700px" }} className="m-auto">
        <Card.Header>My Keahlian</Card.Header>
        {isLoading ? (
          <Spinner animation="border" role="status" variant="primary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <Card.Body>
            <Card.Title>You are not yet an ahli of bersatu</Card.Title>
          </Card.Body>
        )}
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

{
  /* <Spinner animation="border" role="status" variant="primary">
          <span className="sr-only">Loading...</span>
        </Spinner> */
}

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
        <Route path={`${path}/ahli/:id`} component={Ahli} />
      </Switch>
    </div>
  );
};
