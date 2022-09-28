import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Navbarcom from "../component/navbarcomp";

const RegisterMitra = () => {
  return (
    <div>
      <Navbarcom />
      <div className="contenmit">
        <h1>YOUR ACCOUNT FOR EVERYTHING WH</h1>
        <Row>
          <Col sm={6}>
            <Form className="mx-3">
              <Form.Group className="mb-2">
                <Form.Control type="email" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Control type="text" placeholder="Address" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="text" placeholder="No.Handphone" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="password" placeholder="password" />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={6}>
            <div className="upld">
              <button className="btnuplod">Upload File</button>
              <div className="boxktp"></div>
              <button className="boxplusktp text-center">+</button>
            </div>
          </Col>
        </Row>

        <div className="btnreg">
          <div className="text-muted text-center mt-3">By logging in, you agree to WareHouse Privacy Policy and Terms of Use</div>
          <Button className="buttonloginm mt-2" type="submit">
            Register
          </Button>
          <p className="plog text-center mt-1">
            Have an Account ? <a href="login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterMitra;
