import React from "react";
import { Form, Button } from "react-bootstrap";
import Navbarcom from "../component/navbarcomp";

const Login = () => {
  return (
    <div>
      <div className="conten">
        <h1>YOUR ACCOUNT FOR EVERYTHING WH</h1>

        <Form className="mx-3">
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Masukan email" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
            <div className="text-muted text-center byloging">By logging in, you agree to WareHouse Privacy Policy and Terms of Use</div>
          </Form.Group>
          <Button className="buttonlogin" type="submit">
            Masuk
          </Button>
        </Form>
        <div>
          <p className="plog text-center mt-1">
            Tidak Punya Akun? <a href="/registerclient">Daftar</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
