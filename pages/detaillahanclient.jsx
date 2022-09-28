import React from "react";
import Navbarr from "../component/navbarcomp";
import { Accordion, Row, Col } from "react-bootstrap";

const DetailLahanClient = () => {
  return (
    <div>
      <Navbarr />
      <h3 className="text-center">Nama Gudang</h3>
      <div className="contenaccor">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col lg={8}>
                  <div>
                    <p>Luas : 2m x 2m</p>
                    <p>Panjang : 15m</p>
                    <p>
                      Barang yang tidak diijinkan: <br />
                      Benda yang dilarang oleh Undang-Undang
                    </p>
                    <p>
                      Tentang Lahan : <br />
                      Berbentuk Ruangan bisa dikunci, Khusus Penyimpanan Dokumen
                    </p>
                    <p>
                      Fasilitas: <br />
                      -Security <br />
                      -Listrik <br />
                      -Area Parkir <br />
                      -Sumber Air
                    </p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="detpic"></div>
                  <h3>Rp.1.200.000</h3>
                  <button className="btnpsnan">Pesan</button>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div>
          <h5 className="mt-5">Lokasi :</h5>
          <div className="lokgud"></div>
        </div>
        <div>
          <Row>
            <Col>
              <h5 className="mt-5">Nama Mitra :</h5>
            </Col>
            <Col>
              <div className="mt-5">
                <button className="btnpsnan">Whatsapp</button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DetailLahanClient;
