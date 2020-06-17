import React, { useEffect, useContext, useState } from "react";

import {
  Card,
  ListGroup,
  Nav,
  Form,
  Row,
  Col,
  Button,
  Spinner,
} from "react-bootstrap";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import {
  useRouteMatch,
  Switch,
  Route,
  useHistory,
  useParams,
  NavLink,
} from "react-router-dom";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../utils/Auth";

const DetailsPage = () => {
  const { type } = useParams();
  const { currentUser } = useContext(AuthContext);
  // const [selectedDate, setSelectedDate] = useState(null);
  const history = useHistory();

  const [birthDate, setBirthDate] = useState(new Date());
  const [fullName, setFullName] = useState("");
  const [nric, setNric] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // console.log(type);
    console.log(birthDate);
    return () => {
      console.trace("Im Out");
    };
  }, [birthDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const registrationData = {
      fullName,
      nric,
      address,
      city,
      zip,
      state,
      birthDate,
      email: currentUser.email,
      uid: currentUser.uid,
    };

    try {
      const response = await axios.post(
        "https://asia-east2-ppbmbersatuapp.cloudfunctions.net/api/register/v1",
        { data: registrationData }
      );

      setIsLoading(false);
      console.log(response.data);
      history.push("/home");
      return null;
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }

    // currentUser
    //   .getIdToken(/* forceRefresh */ true)
    //   .then((idToken) => {
    //     console.log(idToken);

    //     const registrationData = {
    //       fullName,
    //       nric,
    //       address,
    //       city,
    //       zip,
    //       state,
    //       birthDate,
    //       email: currentUser.email,
    //       uid: currentUser.uid,
    //     };
    //     // register(registrationData);
    //     console.log(registrationData);
    //   })
    //   .catch((error) => {
    //     // Handle error
    //     console.log(error);
    //   });

    console.log("submitting", registrationData, currentUser);
  };

  const register = async (registrationData) => {
    try {
      const response = await axios.post(
        "https://asia-east2-ppbmbersatuapp.cloudfunctions.net/api/register/v1",
        registrationData
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return (
      <Card.Body>
        <Spinner animation="border" role="status" variant="primary">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Card.Body>
    );
  }

  return (
    <Card.Body>
      {/* <Card.Text>{type}</Card.Text> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={currentUser.email} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Full name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            NRIC
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="ic number"
              value={nric}
              onChange={(e) => setNric(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Date of Birth
          </Form.Label>
          <Col sm="10">
            <Form.Control
              placeholder="dd/mm/yyy"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Row className="justify-content-end p-3">
          <Col lg="1">
            <Button
              variant="outline-primary"
              onClick={() => history.push("/home/register")}
            >
              Back
            </Button>
          </Col>
          <Col lg="1">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Card.Body>
  );
};

const RegistrationForm = () => {
  const { path, url } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    console.log(path, url);
    return () => {
      console.trace("IM Out");
    };
  }, []);

  return (
    <div className="p-5 m-auto" style={{ maxWidth: "1300px" }}>
      <Card className="mb-5">
        <Card.Header className="d-flex justify-content-between">
          <Card.Title>Registration Form</Card.Title>
        </Card.Header>

        <Switch>
          <Route exact path={path}>
            <Card.Body>
              <Card.Text>Select Type</Card.Text>
              <ListGroup>
                <ListGroup.Item
                  action
                  onClick={() => history.push(`${path}/form/ab`)}
                >
                  <Card.Text>
                    <FontAwesomeIcon
                      icon={faUser}
                      className="ml-5 text-primary"
                    />
                    <span className="ml-3">Ahli Biasa</span>
                  </Card.Text>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  onClick={() => history.push(`${path}/form/absh`)}
                >
                  <Card.Text>
                    <FontAwesomeIcon
                      icon={faUserPlus}
                      className="ml-5 text-primary"
                    />
                    <span className="ml-3">Ahli Biasa Seumur Hidup</span>
                  </Card.Text>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  onClick={() => history.push(`${path}/form/absk`)}
                >
                  <Card.Text>
                    <FontAwesomeIcon
                      icon={faUser}
                      className="ml-5 text-warning"
                    />
                    <span className="ml-3">Ahli Bersekutu</span>
                  </Card.Text>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  onClick={() => history.push(`${path}/form/abskh`)}
                >
                  <Card.Text>
                    <FontAwesomeIcon
                      icon={faUserPlus}
                      className="ml-5 text-warning"
                    />
                    <span className="ml-3">Ahli Bersekutu Seumur Hidup</span>
                  </Card.Text>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Route>
          <Route path={`${path}/form/:type`} component={DetailsPage} />
        </Switch>
      </Card>
    </div>
  );
};

export default RegistrationForm;
