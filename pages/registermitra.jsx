
import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Router from "next/router";
import axios from "axios";


const RegisterMitra = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [file_ktp, setFile_ktp] = useState(null);
  const role = "mitra";

  const clickregis = () => {
    
    const formData=new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("file_ktp", file_ktp);
    formData.append("role", role);
  
    axios
    .post("http://34.125.22.211/register", formData)
    .then((res) => {
      alert("Berhasil Registrasi");
      Router.push("/login");
    })
    .catch((err) => alert("gagal register"))
  };


  return (
    <div>
      <div className="contenmit">
        <h1>YOUR ACCOUNT FOR EVERYTHING WH</h1>
        <Row>
          <Col sm={6}>
            <Form className="mx-3" >
              <Form.Group className="mb-2">
                <Form.Control type="email" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="text" placeholder="No.Handphone" onChange={(e) => setPhone(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={6}>
            <div className="upld">
              <input  type="file" onChange={(e) => setFile_ktp(e.target.files[0])}></input>

              <div className="boxktp"></div>
            </div>
          </Col>
        </Row>

        <div className="btnreg">
          <div className="text-muted text-center mt-3">By logging in, you agree to WareHouse Privacy Policy and Terms of Use</div>
          <button className="buttonloginm mt-2" type="submit" onClick={clickregis}>
            Register
          </button>
          <p className="plog text-center mt-1">
            Sudah Punya Akun ? <a href="login">Masuk</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterMitra;
