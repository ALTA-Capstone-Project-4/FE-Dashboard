import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbarcomp";
import Footer from "../component/footer";
import { Col, Row } from "react-bootstrap";

const ProfilMitra = () => {
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
            <button className="btneditmit">Edit</button>
            <span className="none">.</span>
          </div>
          <div className="profright2">
            <h3>Profil Gudang</h3>
            <p>Nama: Teguh</p>
            <p>Alamat : Jln.Teguh</p>
            <p>Lokasi Gudang :</p>
            <div className="lokmap"></div>
            <button className="btneditmit">Edit</button>
            <span className="none">.</span>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default ProfilMitra;
