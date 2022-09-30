import React from "react";
import { Row, Col } from "react-bootstrap";
import Navbarr from "../component/navbarcomp";
import Footer from "../component/footer";

const DetailMitra = () => {
  return (
    <div className="contendetailmitra">
      <Navbarr />
      <Row className="gx-0">
        <Col lg={4} className="p-0">
          <div className="fotomit marginnav">
            <img />
          </div>
        </Col>
        <Col lg={8} className="p-0">
          <div className="setmardetmit marginnav">
            <div className="detright">
              <div>
                <h3>Profil Mitra</h3>
                <div className="fotodetktp"></div>
              </div>
              <div>
                <Row>
                  <Col md={6}>
                    <h3>Data Diri</h3>
                    <p>Email : Teguh@gmail.com</p>
                    <p>Nama: Teguh</p>
                    <p>Alamat : Jln.Teguh</p>
                    <p>No.Hp : 081274882212</p>
                  </Col>
                  <Col md={6}>
                    <h3>Data Gudang</h3>
                    <p>Nama Gudang : Teguh@gmail.com</p>
                    <p>Lokasi Gudang: Teguh</p>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default DetailMitra;
