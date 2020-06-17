import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { Card, Form, Row, Col } from "react-bootstrap";

import axios from "axios";

const Ahli = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();

    return () => {
      console.trace("Im Our");
    };
  }, [id]);

  useEffect(() => {
    console.log(data);
    return () => {
      console.trace("IM Out");
    };
  }, [data]);

  const getData = async () => {
    setIsLoading(true);

    try {
      const results = await axios.get(
        `https://asia-east2-ppbmbersatuapp.cloudfunctions.net/api/ahli?noahli=${id}`
      );
      console.log(results.data.result[0]);

      if (results.data.result.length) {
        console.log("Has Data");
        const newData = results.data.result[0];
        setData(newData);
        console.log(newData);
      }

      setIsLoading(false);
      //   setData(results.data)
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div style={{ width: "100vw" }} className="p-5">
      <Card>
        <Card.Header>
          <Card.Title>{data.nama_penuh}</Card.Title>
        </Card.Header>
        <Card.Body>
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
      </Card>
    </div>
  );
};

export default Ahli;
