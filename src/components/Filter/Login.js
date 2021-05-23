import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="form">
     <div className="center">
        <h1 style={{ fontSize: "30px" }}>Login</h1>
        <Form className="formulaire">
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{fontSize:"17px"}}>Email address:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
