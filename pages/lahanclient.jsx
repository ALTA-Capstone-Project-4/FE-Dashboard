import React, { useState, useEffect } from "react";
import Navbarr from "../component/navbarcomp";
import { Accordion, Row, Col } from "react-bootstrap";
import Home from "../component/mapgoogle";
import Router, { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import dynamic from "next/dynamic";

const DetailLahanClient = () => {
  const router = useRouter();
  const data = router.query;
  const NavbarClient = dynamic(() => import("../component/navbar-client"), {
    ssr: false,
  });

  const [datas, setDatas] = useState([]);
  console.log(datas);

  useEffect(() => {
    getLahangudang();
  }, []);
  console.log("ini get datas", datas);

  const getLahangudang = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://group4.altaproject.online/gudang/${data.id}/lahan`,
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

  // useEffect(() => {
  //   getFavorite();
  // }, []);
 
  const goFavo = (datas) => {
    var axios = require("axios");
    var data = JSON.stringify({
      lahan_id: parseInt(`${datas.ID}`),
    });

    console.log("baseng", datas)

    var config = {
      method: "post",
      url: `https://group4.altaproject.online/favorite`,
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
        'Content-Type': 'application/json'
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        Router.push ("/myfavorit");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const goFavo = (datas) => {
  //   console.log("ini input diklik", datas.ID);
  //   Router.push({
  //     pathname: "/myfavorit",
  //     query: {
  //       lahan_id: datas.ID,
  //     },
  //   });
  // };

  return (
    <div>
      <div>
        <NavbarClient />
      </div>
      <div className="wrpctn">
        <div>
          <h3 className="mb-4 mcj">{data.nama}</h3>
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
          <Row>
            {datas.map((datas, index) => {
              return (
                <Col>
                  <div key={index} className="crdlhn">
                    <div>
                      <img className="imglhnn" src={datas.FotoLahan} />
                    </div>
                    <div>
                      <div>
                        <Row>
                          <Col>
                            <p>{datas.Nama}</p>
                            <p>{datas.Harga}</p>
                          </Col>
                          <Col>
                            <p>{datas.Panjang}</p>
                            <p>{datas.Lebar}</p>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        <Row>
                          <Col sm={3}>
                            <button className="btnfav" onClick={() => goFavo(datas)}>Favorit</button>
                          </Col>
                          <Col sm={9}>
                            <button className="btnnpsn" onClick={() => goOrder()}>Pesan</button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DetailLahanClient;
