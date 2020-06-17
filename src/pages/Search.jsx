import React, { useState } from "react";

import {
  Form,
  Card,
  ListGroup,
  Row,
  Col,
  Button,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

import { useHistory } from "react-router-dom";

import axios from "axios";

const types = [
  { type: "Nama", code: "nama" },
  { type: "No ahli", code: "noahli" },
  { type: "no kad pengenalan", code: "nokad" },
];

const Search = () => {
  // const types = ["Nama", "No ahli", "no kad pengenalan"];
  const history = useHistory();

  const [currentType, setCurrentType] = useState(types[0]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchField, setSearchField] = useState("");

  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    console.log("searching for ahli by", currentType.code);
    console.log(searchField);

    try {
      // const result = await axios.get(
      //   `https://asia-east2-ppbmbersatuapp.cloudfunctions.net/api/ahli?noahli=00000008&nama=tun`
      // );

      const results = await axios.get(
        `https://asia-east2-ppbmbersatuapp.cloudfunctions.net/api/ahli?${currentType.code}=${searchField}`
      );
      setData(results.data.result);
      console.log(results.data.result);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <div style={{ width: "100vw" }} className="p-5">
      <Card>
        <Card.Header>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row}>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder={`Search ahli dengan ${currentType.type}`}
                  value={searchField}
                  onChange={(e) => setSearchField(e.target.value)}
                />
              </Col>
              <Col sm="2">
                <Dropdown as={ButtonGroup}>
                  <Button variant="success" type="submit">
                    {currentType.type}
                  </Button>

                  <Dropdown.Toggle
                    split
                    variant="success"
                    id="dropdown-split-basic"
                  />

                  <Dropdown.Menu>
                    {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item> */}
                    {types.map((type, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => setCurrentType(type)}
                      >
                        {type.type}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Form.Group>
          </Form>
        </Card.Header>
        <Card.Body>
          {isLoading ? (
            <div>...Loading</div>
          ) : (
            <ListGroup>
              {!!data.length && (
                <ListGroup.Item variant="secondary">
                  <Row>
                    <Col sm="8">
                      <Card.Text>Nama Penuh</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>No Ahli</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>No Kad Pengenalan</Card.Text>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              {data.map((ahli, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  onClick={() => history.push(`/home/ahli/${ahli.no_keahlian}`)}
                >
                  {/* <Card.Text>{ahli.nama_penuh}</Card.Text> */}
                  <Row>
                    <Col sm="8">
                      <Card.Text>{ahli.nama_penuh}</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>{ahli.no_keahlian}</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>{ahli.no_kad_pengenalan}</Card.Text>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Search;
