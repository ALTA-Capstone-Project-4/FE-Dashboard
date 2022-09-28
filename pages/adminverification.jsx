import React from "react";
import Navbarcom from "../component/navbarcomp";
import { Row, Col } from "react-bootstrap";

const adminverification = () => {
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
            <button className="me-4 btnacc">Accept</button>
            <button className="me-4 btnrej">Reject</button>
          </Col>
        </Row>
      </div>
      <div className="contenverif mx-auto p-3">
        <h2>Daftar Mitra Gudang</h2>
        <Row>
          <Col sm={6}>
            <button className="btnmit">Fatmawati Warehouse</button>
          </Col>
          <Col sm={6} className="p-0 btnright">
            <button className="me-4 btnrej">Delete</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default adminverification;
