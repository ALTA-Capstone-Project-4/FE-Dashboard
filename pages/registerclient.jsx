import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Router from "next/router";

const RegisterClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  // REGISTER CLIENT
  const handleRegClient = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      name: name,
      email: email,
      password: password,
      address: address,
      phone: phone,
      role: "penitip",
    });

    var config = {
      method: "post",
      url: "http://34.125.22.211:80/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        alert("daftar berhasil");
        Router.push("/login");
      })
      .catch(function (error) {
        console.log(error);
        alert("gagal");
      });
  };
  return (
    <div>
      <div className="contenreg">
        <h1>YOUR ACCOUNT FOR EVERYTHING WH</h1>

        <Form className="mx-3">
          <Form.Group className="mb-2">
            <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Masukan Nama" />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control onChange={(e) => setPhone(e.target.value)} type="text" placeholder="No.Handphone" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control required onChange={(e) => setEmail(e.target.value)} type="email" placeholder=" Masukan Email" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
            <div className="text-muted text-center byloging mt-3">By logging in, you agree to WareHouse Privacy Policy and Terms of Use</div>
          </Form.Group>
        </Form>
        <div>
          <button onClick={handleRegClient} className="buttonloginc text-white mt-2" type="submit">
            Daftar
          </button>
          <div className="txtsdh text-center">
            <p className="mt-1">
              Sudah Punya Akun ?
              <a className="txtoren" href="/login">
                Masuk
              </a>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default RegisterClient;
