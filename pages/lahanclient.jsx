import React from "react";
import Navbarr from "../component/navbarcomp";
import { Accordion, Row, Col } from "react-bootstrap";
import Home from "../component/mapgoogle";

const DetailLahanClient = () => {
  return (
    <div>
      <div>
        <Navbarr />
      </div>
      <div className="wrpctn">
        <div>
          <h3 className="mb-4 mcj">Gudang Asyipul</h3>
        </div>
        <div>
          <Row>
            <Col>
              <h5>Mitra Adi Guna</h5>
            </Col>
            <Col className="text-end">
              <button className="btnwsp">Whatsapp</button>
            </Col>
          </Row>
        </div>
        <div>
          <Col>
            <h5 className="mt-5">Lokasi :</h5>
            <div className="lokgud">
              <Home />
            </div>
          </Col>
        </div>
        <div>
          <h3 className="mt-5 mcj">Daftar Lahan</h3>
        </div>
        <div>
          <div className="crdlhn">
            <div className="imglhn">
              <img />
            </div>
            <div>
              <Row>
                <Col lg={6}>
                  <p>luas 10m</p>
                  <p>Rp.1.000.000</p>
                </Col>
                <Col lg={6}>
                  <p>Panjang 10m</p>
                  <p>Lebar 1m</p>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col lg={3}>Love</Col>
                <Col lg={9}>
                  <button className="btnnpsn">Pesan</button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLahanClient;
