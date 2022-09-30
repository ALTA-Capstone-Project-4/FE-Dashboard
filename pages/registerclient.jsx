import React from "react";
import { Form, Button } from "react-bootstrap";
import Navbarcom from "../component/navbarcomp";
import Footer from "../component/footer";

const RegisterClient = () => {
  return (
    <div>
      <div className="contenreg">
        <h1>YOUR ACCOUNT FOR EVERYTHING WH</h1>

        <Form className="mx-3">
          <Form.Group className="mb-2">
            <Form.Control type="text" placeholder="Masukan Nama" />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control type="text" placeholder="No.Handphone" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control type="email" placeholder=" Masukan Email" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control type="password" placeholder="password" />
            <div className="text-muted text-center byloging mt-3">By logging in, you agree to WareHouse Privacy Policy and Terms of Use</div>
          </Form.Group>

          <Button className="buttonloginc mt-2" type="submit">
            Daftar
          </Button>
        </Form>
        <div>
          <p className="plog text-center mt-1">
            Sudah Punya Akun ? <a href="/login">Masuk</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterClient;
