import React, { useState } from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbarcomp";
import Footer from "../component/footer";
import { Col, Row, Modal, Button, Form } from "react-bootstrap";

const ProfilMitra = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShoww, setModalShoww] = React.useState(false);

  // Modal Edit Profile
  function EditProfile(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Edit Akun Saya</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Masukan Email" />
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" placeholder="Masukan Nama" />
          <Form.Label>Alamat</Form.Label>
          <Form.Control type="text" placeholder="Masukan Alamat" />
          <Form.Label>No.Handphone</Form.Label>
          <Form.Control type="number" placeholder="Masukan No.Handphone" />
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Masukan Password" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Save</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  // akhir modal edit profile mitra

  // Modal Edit gudang Profile
  function EditProfile(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Edit Gudang Saya</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" placeholder="Masukan Nama" />
          <Form.Label>Alamat</Form.Label>
          <Form.Control type="text" placeholder="Masukan Alamat" />
          <Form.Label>Lokasi</Form.Label>
          <Form.Control type="text" placeholder="Masukan Lokasi" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Save</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  // akhir modal edit gudang mitra
  return (
    <div>
      <Navbar />
      <Row className="gx-0">
        <Col lg={4}>
          <Sidebar />
        </Col>
        <Col lg={4} className="mt-5">
          <div className="profright">
            <h3>Akun Saya</h3>
            <p>Email : Teguh@gmail.com</p>
            <p>Nama: Teguh</p>
            <p>Alamat : Jln.Teguh</p>
            <p>No.Hp : 081274882212</p>
            <button className="btneditmit" onClick={() => setModalShow(true)}>
              Edit
            </button>
            <EditProfile show={modalShow} onHide={() => setModalShow(false)} />
            <span className="none">.</span>
          </div>
          <div className="profright2">
            <h3>Profil Gudang</h3>
            <p>Nama: Teguh</p>
            <p>Alamat : Jln.Teguh</p>
            <p>Lokasi Gudang :</p>
            <div className="lokmap"></div>
            <button className="btneditmit" onClick={() => setModalShoww(true)}>
              Edit
            </button>
            <EditProfile show={modalShoww} onHide={() => setModalShoww(false)} />

            <span className="none">.</span>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default ProfilMitra;
