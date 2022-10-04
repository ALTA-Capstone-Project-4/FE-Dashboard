import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import Footer from "../component/footer";
import NavbarComp from "../component/navbarcomp";
import { getCookie } from "cookies-next";
import axios from "axios";
import Router from "next/router";

const addlahan = () => {
  const [nama, setNama] = useState("");
  const [luas, setLuas] = useState("");
  const [panjang, setPanjang] = useState("");
  const [lebar, setLebar] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [fasilitas, setFasilitas] = useState("");
  const [barangtdk, setBarangtdk] = useState("");
  const [fotolahan, setFotolahan] = useState("");

  const handleTambahlahan = () => {
    const formData = new FormData();
    formData.append("name", nama);
    formData.append("luas", luas);
    formData.append("panjang", panjang);
    formData.append("lebar", lebar);
    formData.append("harga", harga);
    formData.append("deskripsi", deskripsi);
    formData.append("fasilitas", fasilitas);
    formData.append("barang_tdk_diizinkan", barangtdk);
    formData.append("foto_lahan", fotolahan);

    const config = {
      headers: { Authorization: `Bearer ${getCookie("Token")}` },
    };

    axios
      .post(`https://group4.altaproject.online/lahan`, formData, config)
      .then((res) => {
        alert("Lahan berhasil ditambahkan");
        Router.push("/daftarlahan");
      })
      .catch((err) => alert("Lahan Gagal Ditambahkan"));
  };

  return (
    <div>
      <NavbarComp />
      <Row className="gx-0 min-vh-100 addlahan">
        <Col lg={2}>
          <div className="sdbr">
            <img src="" alt="" />
          </div>
        </Col>
        <Col lg={10}>
          <div className="contencomedit">
            <Row className="gx-0">
              <Col sm={6}>
                <h1 className="mx-2">Tambah Lahan</h1>
                <Form className="mx-2">
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Nama Lahan</Form.Label>
                    <Form.Control onChange={(e) => setNama(e.target.value)} type="text" placeholder="Enter Nama Lahan" />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Luas</Form.Label>
                    <Form.Control onChange={(e) => setLuas(e.target.value)} type="number" placeholder="Enter Luas" />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Panjang</Form.Label>
                    <Form.Control onChange={(e) => setPanjang(e.target.value)} type="number" placeholder="Enter Panjang" />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Lebar</Form.Label>
                    <Form.Control onChange={(e) => setLebar(e.target.value)} type="number" placeholder="Enter Lebar" />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Harga</Form.Label>
                    <Form.Control onChange={(e) => setHarga(e.target.value)} type="number" placeholder="Enter Harga" />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Tentang Lahan</Form.Label>
                    <Form.Control onChange={(e) => setDeskripsi(e.target.value)} type="text" placeholder="Enter Tentang Gudang" />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Fasilitas</Form.Label>
                    <Form.Control onChange={(e) => setFasilitas(e.target.value)} type="text" placeholder="Enter Fasilitas" />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Barang yang tidak diijinkan</Form.Label>
                    <Form.Control onChange={(e) => setBarangtdk(e.target.value)} type="text" placeholder="Enter Barang yang tidak diijinkan" />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Upload Foto Lahan</Form.Label>
                    <Form.Control onChange={(e) => setFotolahan(e.target.files[0])} type="file" />
                  </Form.Group>
                </Form>
              </Col>

              <Col sm={6}>
                <div className="cr">
                  <div className="foto"></div>
                </div>
              </Col>
            </Row>
            <button onClick={handleTambahlahan} className="btnbr text-light">
              Tambah Lahan
            </button>
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default addlahan;
