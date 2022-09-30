import React from "react";
import { Col, Row, Modal, Form, Button } from "react-bootstrap";
import Sidebar from "../component/sidebar";
import Navbarr from "../component/navbarcomp";
import Footer from "../component/footer";

const ProfileClient = () => {
  const [modalShow, setModalShow] = React.useState(false);
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
  return (
    <div>
      <Navbarr />
      <Row className="min-vh-100 gx-0">
        <Col lg={4}>
          <div className="sdbr">
            <Sidebar />
          </div>
        </Col>
        <Col lg={8}>
          <div className="profcr mt-5">
            <h3>Akun Saya</h3>
            <p>Email: Teguh@gmail.com</p>
            <p>Nama: Teguh</p>
            <p>Alamat : Jln.Teguh</p>
            <p>No.Handphone</p>

            <button className="btneditmit" onClick={() => setModalShow(true)}>
              Edit
            </button>
            <EditProfile show={modalShow} onHide={() => setModalShow(false)} />
            <span className="none">.</span>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default ProfileClient;
