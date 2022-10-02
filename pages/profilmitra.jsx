import React, { useEffect, useState } from "react";
import Navbar from "../component/navbarcomp";
import Footer from "../component/footer";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { getCookie } from "cookies-next";

const ProfilMitra = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShoww, setModalShoww] = React.useState(false);
  const [modalShowww, setModalShowww] = React.useState(false);

  const [datas, setDatas] = useState("");
  console.log(datas);

  const getDataProfile = () => {
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'http://34.125.22.211/mitra',
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NjQ4MTc5OTcsInJvbGUiOiJtaXRyYSIsInVzZXJJZCI6NjF9.Ek8mydwGvtbvMM_P2g_TXG9GOq_xKqoKPe8-Ttjg4iA',
    }
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setDatas(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  useEffect(() => {
    getDataProfile();
  }, []);


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

  // Modal Tambah Gudang //
  function TambahGudang(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Tambah Gudang Saya</Modal.Title>
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
  // akhir modal tambah //

  // Modal Edit gudang Profile
  function ProfileGudang(props) {
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
      <Container className="gx-0">
          <div className="tambahgd">
            <button className="btntambah" onClick={() => setModalShoww(true)} >Tambah Gudang</button>
            <TambahGudang show={modalShoww} onHide={() => setModalShoww(false)} />
          </div>
          <div className="profright">
            <h3>Akun Saya</h3>
            <p>Email : {datas.email}</p>
            <p>Nama: {datas.name}</p>
            <p>Alamat : {datas.address}</p>
            <p>No.Hp : {datas.email}</p>
            <button className="btneditmit" onClick={() => setModalShow(true)}>
              Edit
            </button>
            <EditProfile show={modalShow} onHide={() => setModalShow(false)} />
            <span className="none">.</span>
          </div>
          <div className="profright2">
            <h3>Profil Gudang</h3>
            <p>Nama: Teguh</p>
            <p>Alamat: Jln.Teguh</p>
            <p>Lokasi Gudang :</p>
            <div className="lokmap"></div>
            <button className="btneditmit mt-2" onClick={() => setModalShowww(true)}>
              Edit
            </button>
            <ProfileGudang show={modalShowww} onHide={() => setModalShowww(false)} />

            <span className="none">.</span>
          </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ProfilMitra;
