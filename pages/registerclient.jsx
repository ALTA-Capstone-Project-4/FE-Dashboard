import React from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <div className="contenreg">
        <h1>YOUR ACCOUNT FOR EVERYTHING WH</h1>

        <Form className="mx-3">
          <Form.Group className="mb-2">
            <Form.Label>Nama</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>No.Handphone</Form.Label>
            <Form.Control type="text" placeholder="No.Handphone" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
            <div className="text-muted text-center byloging mt-3">By logging in, you agree to WareHouse Privacy Policy and Terms of Use</div>
          </Form.Group>

          <Button className="buttonlogin mt-2" type="submit">
            Register
          </Button>
        </Form>
        <div>
          <p className="plog text-center mt-1">
            Have an Account ? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
