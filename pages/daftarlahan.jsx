import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "../component/footer";
import Router from "next/router";
import { getCookie } from "cookies-next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import axios from "axios";

const DaftarLahan = () => {
  const router = useRouter();
  const gudangID = router.query.gudangID;
  const NavbarMitra = dynamic(() => import("../component/navbar-mitra"), {
    ssr: false,
  });
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getLahan();
  }, []);

  const tambahlahan = (datas) => {
    Router.push({
      pathname: "/addlahan",
      query: {
        gudangID: gudangID,
      },
    });
  };

  const editlahan = (datas) => {
    Router.push({
      pathname: "/editlahan",
      query: {
        ID: datas.ID,
        gudangID: gudangID,
      },
    });
  };

  // get ID Gudang
  // const getIdgudang = () => {
  //   var axios = require("axios");

  //   var config = {
  //     method: "get",
  //     url: "https://group4.altaproject.online/mitra",
  //     headers: {
  //       Authorization: `Bearer ${getCookie("Token")}`,
  //     },
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       setId(response.data.data.gudangid);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // Get Lahan ${router.query.gudangid}
  const getLahan = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://group4.altaproject.online/gudang/${gudangID}/lahan`,
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log("ini respon", response.data.data);
        setDatas(response.data.data.lahan);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = (datas) => {
    var axios = require("axios");

    var config = {
      method: "delete",
      url: `https://group4.altaproject.online/lahan/${datas.ID}`,
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        alert("berhasil dihapus");
        getLahan();
      })
      .catch(function (error) {
        console.log(error);
        alert("Gagal Hapus");
      });
  };

  const detail = (datas) => {
    Router.push({
      pathname:("/detaillahanclient"),
      query:{
        lahan_id: datas.ID
      }
    })
  }

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
            {datas?.map((datas, index) => {
              return (
                <Col key={index}>
                  <div className="cardfav">
                    <img className="gambarfav" src={datas.FotoLahan} onClick={() => detail(datas)}/>
                    <p className="txtmf">{datas.Nama}</p>
                    <p className="txtmf">Rp. {(datas.Harga).toLocaleString("id-ID")}</p>
                    <div className="btndf">
                      <button onClick={() => editlahan(datas)} className="btnpsndf">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(datas)} className="btnpsndf2">
                        Hapus
                      </button>
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
