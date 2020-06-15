import React, { useEffect, useContext } from "react";

import { Card, ListGroup, Nav, Form, Row, Col } from "react-bootstrap";

import {
  useRouteMatch,
  Switch,
  Route,
  useHistory,
  useParams,
  NavLink,
} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../utils/Auth";

const DetailsPage = () => {
  const { type } = useParams();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log(type);
    return () => {
      console.trace("Im Out");
    };
  }, []);
  return (
    <Card.Body>
      {/* <Card.Text>{type}</Card.Text> */}
      <Form>
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
            <Form.Control type="text" placeholder="enter full name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            NRIC
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="ic number" />
          </Col>
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Date of Birth</Form.Label>
          {/* <DatePicker /> */}
        </Form.Group>

        {/* <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group> */}
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
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <Card.Title>Registration Form</Card.Title>
          <Nav>
            <Nav.Item>
              <NavLink
                to={`${path}`}
                activeClassName="opacity-dark sidebar-link"
              >
                Choose Type
              </NavLink>
            </Nav.Item>
            <Nav.Item>Choose Type</Nav.Item>
            <Nav.Item>Choose Type</Nav.Item>
          </Nav>
        </Card.Header>

        <Switch>
          <Route exact path={path}>
            <Card.Body>
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
