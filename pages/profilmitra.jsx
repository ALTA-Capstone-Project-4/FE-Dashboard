import React, { useEffect, useState } from "react";
import Navbar from "../component/navbarcomp";
import Footer from "../component/footer";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { getCookie, setCookie } from "cookies-next";

const ProfilMitra = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShoww, setModalShoww] = React.useState(false);
  const [modalShowww, setModalShowww] = React.useState(false);

  // Get Data Profile Mitra
  const [datas, setDatas] = useState("");
  console.log(datas);

  const getDataProfile = () => {
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'http://34.125.22.211/mitra',
    headers: { 
      Authorization: `Bearer ${getCookie("Token")}`,
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
  // Akhir Get Data Profile Mitra

  // Modal Put Data Profile Mitra
  function EditProfile(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    console.log("file", selectedFile);

    const clickEdit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", address);
    formData.append("address", phone);
    formData.append("phone", password);
    formData.append("role", "mitra");
    formData.append("photo", selectedFile);

    const config = {
      headers: { Authorization: `Bearer ${getCookie("Token")}` },
      };

    axios
      .put(`http://34.125.22.211:80/mitra`, formData, config)
      .then((res) => {
        alert("Berhasil Unggah File");
        window.location.reload();
      })
      .catch((err) => alert("Gagal Unggah File"));
    };
    
  const clickFileInput = (e) => {
    onFileSelect(e.target.files[0]);
  };

    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Edit Akun Saya</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Masukan Email" onChange={(e) => setEmail(e.target.value)} />
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" placeholder="Masukan Nama" onChange={(e) => setName(e.target.value)} />
          <Form.Label>Alamat</Form.Label>
          <Form.Control type="text" placeholder="Masukan Alamat" onChange={(e) => setAddress(e.target.value)} />
          <Form.Label>No.Handphone</Form.Label>
          <Form.Control type="number" placeholder="Masukan No.Handphone" onChange={(e) => setPhone(e.target.value)} />
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Masukan Password" onChange={(e) => setPassword(e.target.value)} />
          <Form.Label>Upload Poto Profil</Form.Label>
          <Form.Control onChange={(e) => setSelectedFile(e.target.files[0])} type="file" placeholder="Masukan Password" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={clickEdit}>Save</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  // akhir modal edit profile mitra

  // Modal Post Tambah Gudang //
  function TambahGudang(props) {
    const [names, setNames] = useState("");
    const [alamat, setAlamat] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const clickAdd = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      name: names,
      address: alamat,
      latitude: latitude,
      longitude: longitude
    });

    var config = {
      method: 'post',
      url: 'http://34.125.22.211/gudang',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
      .then((response) => {
        alert("Berhasil Update");
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        alert("Gagal Update")
        console.log(error)
      });
    };

    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Tambah Gudang Saya</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" placeholder="Masukan Nama" onChange={(e) => setNames(e.target.value)} />
          <Form.Label>Alamat</Form.Label>
          <Form.Control type="text" placeholder="Masukan Alamat" onChange={(e) => setAlamat(e.target.value)} />
          <Form.Label>Lokasi</Form.Label>
          <Form.Control type="text" placeholder="Masukan Lokasi" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={clickAdd}>Save</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  // akhir modal tambah //

  // Modal Edit gudang Profile
  function ProfileGudang(props) {
    const [namas, setNamas] = useState("");
    const [alamats, setAlamats] = useState("");
    const [latitudes, setLatitudes] = useState("");
    const [longitudes, setLongitudes] = useState("");

    const clickTambah = () => {
      var axios = require('axios');
      var data = JSON.stringify({
        name: namas,
        address: alamats,
        latitude: latitudes,
        longitude: longitudes
    });

    var config = {
      method: 'put',
      url: 'http://34.125.22.211/gudang',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
      .then((response) => {
        alert("Berhasil Update");
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        alert("Gagal Update")
        console.log(error)
      });
    };

    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Edit Gudang Saya</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" placeholder="Masukan Nama" onChange={(e) => setNamas(e.target.value)} />
          <Form.Label>Alamat</Form.Label>
          <Form.Control type="text" placeholder="Masukan Alamat" onChange={(e) => setAlamats(e.target.value)} />
          <Form.Label>Lokasi</Form.Label>
          <Form.Control type="text" placeholder="Masukan Lokasi" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={clickTambah}>Save</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  // akhir modal edit gudang mitra
  return (
    <div>
      <Navbar />
      <Row className="min-vh-100 gx-0">
        <Col lg={4}>
          <div className="marginnav">
            <img className="ptprfl" src="" />
          </div>
        </Col>
        <Col lg={8}>
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
        </Col>
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
      </Row>
      <Footer />
    </div>
  );
};

export default ProfilMitra;
