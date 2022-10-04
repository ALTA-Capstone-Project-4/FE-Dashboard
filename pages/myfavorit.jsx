import React, { useEffect, useState } from "react";
import Navbarr from "../component/navbarcomp";
import Footer from "../component/footer";
import { Row, Col } from "react-bootstrap";
import Router from "next/router";

const MyFavorit = () => {
  const [datas, setDatas] = useState("");
  console.log(datas);

  const getFavorite = () => {
    var axios = require('axios');

    var config = {
      methode: 'get',
      url: 'https://group4.altaproject.online/favorite',
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setDatas(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });

      useEffect(() => {
        getFavorite();
      }, []);
  }

  const clickPesan = (datas) => {
    console.log(datas);
    Router.push({
      pathname: "/checkout",
      query: {
        LahanName: datas.LahanName,
        LahanHarga: datas.LahanHarga,
        LahanFotoLahan: datas.LahanFotoLahan,
      },
    });
  };

  const handleDelete = ({ id }) => {
    var axios = require("axios");
    var config = {
      method: "delete",
      url: `https://group4.altaproject.online/favorite/${id}`,
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbarr />
      <Row className="gx-0  min-vh-100">
        <Col>
          <h3 className="favoritsaya marginnav">Favorit Saya</h3>
          <Row className="contenmyfav">
            <Col>
              <div className="cardfav">
                <img className="gambarfav" src={datas.LahanFotoLahan} />
                <p className="txtmf">{datas.LahanName}</p>
                <p className="txtmf">{datas.LahanHarga}</p>
                <div className='btndf'>
                  <button className="btnpsndf" onClick={clickPesan}>Pesan</button>
                  <button className="btnpsndf2" onClick={() => handleDelete(datas)}>Hapus</button>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default MyFavorit;
