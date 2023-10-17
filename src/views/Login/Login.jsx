import React from "react";
import "./Login.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const Login = (props) => {
  return (
    <section id="Login">
      <Container fluid>
        <Row>
          <Col>
            <h1 className="aboutTitle">FriendLinker</h1>
            <p className="aboutDescription">
              Connect with friends and the world around you on FriendLinker.
            </p>
          </Col>
          <Col>
            <Card className="text-center ">
              <Card.Body>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Email or username"
                    aria-label="Email or username"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
                <div className="d-flex gap-3 justify-content-center">
                  <Button onClick={props.authenticate} variant="primary">
                    Log In
                  </Button>
                  <Button
                    as={Link}
                    to="/signUp"
                    onClick={props.authenticate}
                    variant="primary"
                  >
                    Sign Up
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          {/* <Col>

          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Login;
