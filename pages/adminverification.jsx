import React, { useEffect, useState } from "react";
import Navbarcom from "../component/navbarcomp";
import Footer from "../component/footer";
import { Row, Col } from "react-bootstrap";
import Router from "next/router";
import { getCookie } from "cookies-next";
import axios from "axios";

const adminverification = () => {
  const [verifMitra, setVerifMitra] = useState([]);
  const [listMitra, setListMitra] = useState([]);

  const goDetail = (user) => {
  Router.push({
    pathname: `${user.name}`,
    query: {
      id: user.id
    }
  },);
    
  };

  const getVerifMitra = () => {
    axios
      .get("https://group4.altaproject.online/mitra/unverify", {
        headers: {
          Authorization: `Bearer ${getCookie("Token")}`,
        },
      })

      .then((response) => {
        setVerifMitra(response.data.data);
      });
  };

  const getListMitra = () => {
    axios
      .get("https://group4.altaproject.online/mitra/verified", {
        headers: {
          Authorization: `Bearer ${getCookie("Token")}`,
        },
      })

      .then((response) => {
        setListMitra(response.data.data);
      });
  };

  useEffect(() => {
    getVerifMitra();
    getListMitra();
  }, []);

  return (
    <div>
      <Navbarcom />
      <div className="contenverif mx-auto p-3 after-navbar">
        <h2>Verifikasi Mitra Gudang</h2>
        {verifMitra.map((user) => {
          return (
            <Row>
              <Col sm={6}>
                <button className="btnmit black-font" type="submit">
                  {user.name}
                </button>
              </Col>
              <Col sm={6} className="p-0 btnright">
                <button className="me-4 btnacc">Terima</button>
                <button className="me-4 btnrej">Tolak</button>
              </Col>
            </Row>
          );
        })}
      </div>
      <div className="contenmitra mx-auto p-3">
        <h2>Daftar Mitra Gudang</h2>
        {listMitra.map((user) => {
          return (
            <Row>
              <Col sm={6}>
                <button className="btnmit black-font" onClick={() => goDetail(user)}>
                  {user.name}
                </button>
              </Col>
              <Col sm={6} className="p-0 btnright">
                <button className="me-4 btnrej">Hapus</button>
              </Col>
            </Row>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default adminverification;
