import React, { useState, useEffect } from "react";
import Navbarr from "../component/navbarcomp";
import { Accordion, Row, Col } from "react-bootstrap";
import Home from "../component/mapgoogle";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

const DetailLahanClient = () => {
  const router = useRouter();
  const data = router.query;

  const [datas, setDatas] = useState([]);

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
  return (
    <div>
      <div>
        <Navbarr />
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
                            <button className="btnfav">Favorit</button>
                          </Col>
                          <Col sm={9}>
                            <button className="btnnpsn">Pesan</button>
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
