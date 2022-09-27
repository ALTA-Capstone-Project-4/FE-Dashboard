import React from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <div className="conten">
        <h1>YOUR ACCOUNT FOR EVERYTHING WH</h1>

        <Form className="mx-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <div className="text-muted text-center byloging">By logging in, you agree to WareHouse Privacy Policy and Terms of Use</div>
          </Form.Group>
          <Button className="buttonlogin" type="submit">
            Sign In
          </Button>
        </Form>
        <div>
          <p className="plog text-center mt-1">
            Dont Have Account ? <a href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
