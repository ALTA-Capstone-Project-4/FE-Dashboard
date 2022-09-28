import React from "react";
import Navbarr from "../component/navbarcomp";
import Footer from "../component/footer";
import { Row, Col } from "react-bootstrap";

const MyFavorit = () => {
  return (
    <div>
      <Navbarr />
      <h3 className="favoritsaya">Favorit Saya</h3>
      <Row className="contenmyfav">
        <Col>
          <div className="cardfav">
            <img className="gambarfav" />
            <p className="txtmf">Lahan 2x2M</p>
            <p className="txtmf">Rp.1.000.000</p>
            <button className="btnpsn">Pesan Sekarang</button>
            <br />
            <button className="btnpsn2">Hapus</button>
          </div>
        </Col>
        <Col>
          <div className="cardfav">
            <img className="gambarfav" />
            <p className="txtmf">Lahan 2x2M</p>
            <p className="txtmf">Rp.1.000.000</p>
            <button className="btnpsn">Pesan Sekarang</button>
            <br />
            <button className="btnpsn2">Hapus</button>
          </div>
        </Col>
        <Col>
          <div className="cardfav">
            <img className="gambarfav" />
            <p className="txtmf">Lahan 2x2M</p>
            <p className="txtmf">Rp.1.000.000</p>
            <button className="btnpsn">Pesan Sekarang</button>
            <br />
            <button className="btnpsn2">Hapus</button>
          </div>
        </Col>
        <Col>
          <div className="cardfav">
            <img className="gambarfav" />
            <p className="txtmf">Lahan 2x2M</p>
            <p className="txtmf">Rp.1.000.000</p>
            <button className="btnpsn">Pesan Sekarang</button>
            <br />
            <button className="btnpsn2">Hapus</button>
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default MyFavorit;
