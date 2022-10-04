
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import NavbarComp from "../component/navbarcomp";
import Sidebar from "../component/sidebar";
import Footer from "../component/footer";
import Router from "next/router";
import { getCookie } from "cookies-next";

const DaftarLahan = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getLahan();
  }, []);

  console.log("ini data", datas);


  const tambahlahan = () => {
    Router.push({
      pathname: "/addlahan",
    });
  };

  const editlahan = () => {
    Router.push({
      pathname: "/editlahan",
    });
  };

  // Get Lahan
  const getLahan = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://group4.altaproject.online/gudang/14/lahan",
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        setDatas(response.data.data.lahan);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>

        <NavbarMitra />

      <Row className="gx-0  min-vh-100 dflahan">
        <Col md={12} lg={12}>
          <div>
            <h3 className="favoritsaya">Daftar lahan</h3>
          </div>
          <div className="new">
            <button type="button" className="tambah mb-4" onClick={tambahlahan}>
              Tambah Baru
            </button>
          </div>
          <Row className="contenmyfav">
            {datas.map((datas, index) => {
              return (
                <Col>
                  <div key={index} className="cardfav">
                    <img className="gambarfav" src={datas.FotoLahan} />
                    <p className="txtmf">{datas.Nama}</p>
                    <p className="txtmf">{datas.Harga}</p>
                    <div className="btndf">
                      <button onClick={editlahan} className="btnpsndf">
                        Edit
                      </button>
                      <button className="btnpsndf2">Hapus</button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default DaftarLahan;
