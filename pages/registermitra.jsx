import useState from "react";
import { Form, Row, Col } from "react-bootstrap";
import { setCookie } from "cookies-next";
import Router from "next/router";

const RegisterMitra = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [file_ktp, setFile_ktp] = useState("");
  const [role, setRole] = useState("");

  const clickregis = () => {
  var axios = require('axios');
  var FormData = require('form-data');
  var fs = require('fs');
  var data = new FormData();
    data.append(name, name);
    data.append(email, email);
    data.append(password, password);
    data.append(address, address);
    data.append(phone, phone);
    data.append(file_ktp, fs.createReadStream(hzoAdiEan/file_ktp));
    data.append(role, role);

  var config = {
    method: 'post',
    url: 'http://34.125.22.211/register',
    headers: { 
      ...data.getHeaders()
    },
    data : data
  };

  axios(config)
    .then(function (response) {
      setCookie("Token", response.data.data.token)
      alert("Berhasil Daftar");
      Router.push("/login");
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      alert("Gagal Daftar");
      console.log(error);
    });
  };

  return (
    <div>
      <div className="contenmit">
        <h1>YOUR ACCOUNT FOR EVERYTHING WH</h1>
        <Row>
          <Col sm={6}>
            <Form className="mx-3">
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
              <button className="btnuplod" onChange={(e) => setFile_ktp(e.target.value)}>Unggah File</button>
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
