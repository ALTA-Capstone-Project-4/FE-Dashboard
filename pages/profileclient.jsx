import React, { useState, useEffect } from "react";
import { Col, Row, Modal, Form, Button } from "react-bootstrap";
import Navbarr from "../component/navbarcomp";
import Footer from "../component/footer";
import axios from "axios";
import { getCookie } from "cookies-next";
import Router from "next/router";

const ProfileClient = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [dataprofile, setDataprofile] = useState("");

  useEffect(() => {
    getDataProfile();
  }, []);
  console.log("ini data", dataprofile);

  // GetData
  const getDataProfile = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://group4.altaproject.online/penitip",
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        setDataprofile(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Delete Akun
  const handleDelete = () => {
    var axios = require("axios");

    var config = {
      method: "delete",
      url: "https://group4.altaproject.online/penitip",
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert("Akun Telah Dihapus");
        Router.push("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Modal Edit Profile

  function EditProfile(props) {
    // Penampung handle change form edit modal
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    console.log("file", selectedFile);

    // handle Edit Profile
    const handleEdit = () => {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", address);
      formData.append("address", phone);
      formData.append("phone", password);
      formData.append("role", "penitip");
      formData.append("photo", selectedFile);

      const config = {
        headers: { Authorization: `Bearer ${getCookie("Token")}` },
      };

      axios
        .put(`https://group4.altaproject.online/penitip`, formData, config)
        .then((res) => {
          alert("File Upload success");
          window.location.reload();
        })
        .catch((err) => alert("File Upload Error"));
    };

    const handleFileInput = (e) => {
      // handle validations
      onFileSelect(e.target.files[0]);
    };

    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Edit Akun Saya</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Masukan Email" />
          <Form.Label>Nama</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Masukan Nama" />
          <Form.Label>Alamat</Form.Label>
          <Form.Control onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Masukan Alamat" />
          <Form.Label>No.Handphone</Form.Label>
          <Form.Control onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Masukan No.Handphone" />
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Masukan Password" />
          <Form.Label>Upload Poto Profil</Form.Label>
          <Form.Control onChange={(e) => setSelectedFile(e.target.files[0])} type="file" placeholder="Masukan Password" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleEdit}>Save</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  // akhir modal edit profile mitra

  return (
    <div>
      <Navbarr />
      <Row className="min-vh-100 gx-0">
        <Col lg={4}>
          <div className="marginnav">
            <img className="ptprfl" src={dataprofile.photo} />
          </div>
        </Col>
        <Col lg={8}>
          <div className="setmar">
            <div className="profcr">
              <h3>Akun Saya</h3>
              <p>Email: {dataprofile.email}</p>
              <p>Nama: {dataprofile.name}</p>
              <p>Alamat : {dataprofile.address}</p>
              <p>Phone : {dataprofile.phone}</p>
              <button className="btneditmit" onClick={() => setModalShow(true)}>
                Edit
              </button>
              <EditProfile show={modalShow} onHide={() => setModalShow(false)} />
              <span className="none">.</span>
            </div>
          </div>
        </Col>
        <div>
          <button onClick={handleDelete} className="dlt">
            Delete Akun
          </button>
        </div>
      </Row>

      <Footer />
    </div>
  );
};

export default ProfileClient;
