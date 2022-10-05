import React from "react";
import Footer from "../component/footer";
import { Row, Col, Form } from "react-bootstrap";
import dynamic from "next/dynamic";

const Checkout = () => {

  const NavbarClient = dynamic(() => import("../component/navbar-client"), {
    ssr: false,
  });

  return (
    <div>
      <NavbarClient />
      <h3 className="favoritsaya marginnav">Transaksi</h3>
      <Row className="gx-0">
        <Col lg={4} className="mb-4">
          <div className="checkl">
            <div className="checkpic">
              <img src="" alt="" />
            </div>
            <div>
              <h5>Gudang Ipul</h5>
              <h5>Lahan 1</h5>
              <h5>Rp.2.000.000</h5>
            </div>
          </div>
        </Col>
        <Col lg={8}>
          <div className="checkr">
            <Row>
              <Col sm={6}>
                <Form className="mx-2">
                  <Form.Group className="mb-4">
                    <Form.Label className="mb-0">Mulai Sewa</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="mb-0">Akhir Sewa</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="mb-0">Nama Barang</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-5">
                  <Form.Label className="mb-0">Foto Yang akan dititipkan</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Select aria-label="Default select example">
                  <option>Metode Pembayaran</option>
                  <option value="BCA">BCA Transfer</option>
                  <option value="BRI">BRI Transfer</option>
                  <option value="BNI">BNI Transfer</option>
                </Form.Select>
              </Col>
            </Row>
            <div className="gas">
              <h5 className="total">Total : Rp.2.000.000</h5>
              <button className="btnpsna">Pesan</button>
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Checkout;
