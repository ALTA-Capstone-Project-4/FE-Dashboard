import React from "react";
import Navbarcom from "../component/navbarcomp";
import Footer from "../component/footer";
import { Row, Col } from "react-bootstrap";
import Router from "next/router";

const adminverification = () => {
  const goDetail = () => {
    Router.push("/detailmitra");
  };
  return (
    <div>
      <Navbarcom />
      <div className="contenverif mx-auto p-3">
        <h2>Verifikasi Mitra Gudang</h2>
        <Row>
          <Col sm={6}>
            <button className="btnmit">Fatmawati Warehouse</button>
          </Col>
          <Col sm={6} className="p-0 btnright">
            <button className="me-4 btnacc">Terima</button>
            <button className="me-4 btnrej">Tolak</button>
          </Col>
        </Row>
      </div>
      <div className="contenmitra mx-auto p-3">
        <h2>Daftar Mitra Gudang</h2>
        <Row>
          <Col sm={6}>
            <button className="btnmit" onClick={goDetail}>
              Fatmawati Warehouse
            </button>
          </Col>
          <Col sm={6} className="p-0 btnright">
            <button className="me-4 btnrej">Hapus</button>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default adminverification;
