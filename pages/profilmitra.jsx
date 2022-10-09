import React, { useEffect, useState } from "react";
import Footer from "../component/footer";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { getCookie } from "cookies-next";
import dynamic from "next/dynamic";
import Router from "next/router"; 
import axios from 'axios'

const ProfilMitra = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShoww, setModalShoww] = React.useState(false);
  const [modalShowww, setModalShowww] = React.useState(false);
  const NavbarMitra = dynamic(() => import("../component/navbar-mitra"), {
    ssr: false,
  });
  const MapsShow = dynamic(() => import("../component/maps-show"), {
    ssr: false,
  });
  const Maps = dynamic(() => import("../component/maps"), {
    ssr: false,
  });

  // Get Data Profile Mitra
  const [datas, setDatas] = useState("");

  const getDataProfile = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://group4.altaproject.online/mitra",
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
      },
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
      formData.append("password", password);
      formData.append("address", address);
      formData.append("phone", phone);
      formData.append("role", "mitra");
      formData.append("photo", selectedFile);

      const config = {
        headers: { Authorization: `Bearer ${getCookie("Token")}` },
      };

      axios
        .put(`https://group4.altaproject.online/mitra`, formData, config)
        .then((res) => {
          alert("Berhasil Unggah File");
          getDataProfile();
          
        })
        .catch((err) => alert("Gagal Unggah File"));
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
          <Button onClick={clickEdit} >Save</Button>
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
    const [location, setLocation] = useState({ lng: -6.1753942, lat: 106.827183});

    const clickAdd = () => {
      var axios = require("axios");
      var data = JSON.stringify({
        name: names,
        address: alamat,
        latitude: latitude,
        longitude: longitude,
      });

      var config = {
        method: "post",
        url: "https://group4.altaproject.online/gudang",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          alert("Berhasil Update");
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          alert("Gagal Update");
          console.log(error);
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
          <Maps
            center={location}
            location={location}
            draggable={true}
            title="sample text"
            onDragMarker={(e) => {
            console.log("e", e);
            let loc = { lat: e.lng, lng: e.lat};
            setLocation(loc);
            setLatitude(e.lat);
            setLongitude(e.lng);
            }}
          />
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
    const [locations, setLocations] = useState({ lng: -6.1753942, lat: 106.827183});

    const clickTambah = () => {
      var axios = require("axios");
      var data = JSON.stringify({
        name: namas,
        address: alamats,
        latitude: latitudes,
        longitude: longitudes,
      });

      var config = {
        method: "put",
        url: "https://group4.altaproject.online/gudang",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          alert("Berhasil Update");
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          alert("Gagal Update");
          console.log(error);
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
          <Maps
            center={locations}
            location={locations}
            draggable={true}
            title="sample text"
            onDragMarker={(e) => {
            console.log("e", e);
            let loc = { lat: e.lng, lng: e.lat};
            setLocations(loc);
            // setLatitudes(e.lat);
            // setLongitudes(e.lng);
            }}
          />
          {/* {"lng: " + location.lng}
          <br/>
          {"lat: " + location.lat} */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={clickTambah}>Save</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  // akhir modal edit gudang mitra

  // go daftar lahan
  const goDaftarLahan = (datas) => {
    Router.push({
      pathname: "/daftarlahan",
      query: {
        gudangID: datas.gudangid,
      },
    });
  };


  return (
    <div>
      <NavbarMitra />
      <Row className="min-vh-100 gx-0 after-navbar">
        <Col lg={4}>
          <div className="marginnav">
            <img className="ptprfl" src={datas.photo}/>
          </div>
        </Col>
        <Col lg={8}>
          <div className="tambahgd">
            { datas.gudangname === null ? 
              <button className="btntambah" onClick={() => setModalShoww(true)}>Tambah Gudang</button> :
              null }
            <TambahGudang show={modalShoww} onHide={() => setModalShoww(false)} />
          </div>
          <div className="profright">
            <h3>Akun Saya</h3>
            <p>Email : {datas.email}</p>
            <p>Nama: {datas.name}</p>
            <p>Alamat : {datas.address}</p>
            <p>No.Hp : {datas.phone}</p>
            <button className="btneditmit" onClick={() => setModalShow(true)}>
              Edit
            </button>
            <EditProfile show={modalShow} onHide={() => setModalShow(false)} />
            <span className="none">.</span>
          </div>

          <div className="profright2">
          <div>
            <h3>Profil Gudang</h3>
            <button type="submit" className="btneditmit" onClick={() => goDaftarLahan(datas)}>
              Lihat Lahan Saya
            </button>
          </div>
          <p>Nama: {datas.gudangname}</p>
          <p>Alamat: {datas.gudanglocation}</p>
          <p>Lokasi Gudang : </p>
          <div className="lokmap">
            <MapsShow 
            lat={51.505}
            long={-0.09}
            size={{ height: "300px", width: "100%"}}
            popup={datas.gudangname}
            />
          </div>
          <button className="btneditmit mt-2" onClick={() => setModalShowww(true)}>
            Edit
          </button>
          <ProfileGudang show={modalShowww} onHide={() => setModalShowww(false)} />
          <span className="none">.</span>
        </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default ProfilMitra;
