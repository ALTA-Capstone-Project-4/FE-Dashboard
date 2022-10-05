import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Footer from "../component/footer";
import { useRouter } from "next/router";
import axios from "axios";
import { getCookie } from "cookies-next";
import dynamic from "next/dynamic";

const DetailMitra = () => {
  const router = useRouter();
  const [ detailMitra, setDetailMitra ] = useState([]);
  const NavbarAdmin = dynamic(() => import("../component/navbar-admin"), {
    ssr: false,
  });

  const getDetailMitra = () => {
    axios
    .get(`https://group4.altaproject.online/mitra/${router.query.id}`, {
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
      },
    })

    .then((response) => {
      setDetailMitra(response.data.data);
    });
  }

  useEffect(() => {
    getDetailMitra();
  }, []);

  return (
    <div className="contendetailmitra">
      <NavbarAdmin />
      <Row className="gx-0">
        <Col lg={4} className="p-0">
          <div className="fotomit marginnav">
            <img/>
          </div>
        </Col>
        <Col lg={8} className="p-0">
          <div className="setmardetmit marginnav">
            <div className="detright">
              <div>
                <h3>Profil Mitra</h3>
                <div className="fotodetktp">
                  <img src={detailMitra.file_ktp} className="img-fluid"/>
                </div>
              </div>
              <div>
                <Row>
                  <Col md={6}>
                    <h3>Data Diri</h3>
                    <p>Email : {detailMitra.email}</p>
                    <p>Nama: {detailMitra.name}</p>
                    <p>Alamat : {detailMitra.address}</p>
                    <p>No.Hp : {detailMitra.phone}</p>
                  </Col>
                  <Col md={6}>
                    <h3>Data Gudang</h3>
                    <p>Nama Gudang : {detailMitra.gudangname}</p>
                    <p>Lokasi Gudang: {detailMitra.gudanglocation}</p>
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
