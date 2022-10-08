import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Home from "../component/mapgoogle";
import Router, { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import dynamic from "next/dynamic";
import Footer from "../component/footer";

const LahanClient = () => {
  const router = useRouter();
  const data = router.query;
  const NavbarClient = dynamic(() => import("../component/navbar-client"), {
    ssr: false,
  });

  const [datas, setDatas] = useState([]);
  const [gudang, setGudang] = useState([]);
  console.log(datas);

  useEffect(() => {
    getLahangudang();
  }, []);

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
        setGudang(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  };
 
  const goFavo = (datas) => {
    var axios = require("axios");
    var data = JSON.stringify({
      lahan_id: parseInt(`${datas.ID}`),
    });

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

  const checkout = (datas) => {
    Router.push({
      pathname:("/checkout"),
      query: {
        lahan_id: datas.ID,
        foto_lahan: datas.FotoLahan,
        gudang: datas.Nama_Gudang,
        harga: datas.Harga,
        lahan: datas.Nama
      }
    })
  }

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
      <div>
        <NavbarClient />
      </div>
      <div className="wrpctn py-5">
        <div>
          <h3 className="mb-4 mcj">{gudang.name}</h3>
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
            <h5 className="mt-5">Lokasi : {gudang.address}</h5>
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
            {datas?.map((datas, index) => {
              return (
                <Col>
                  <div key={index} className="crdlhn" >
                    <div>
                      <img className="imglhnn" src={datas.FotoLahan} onClick={() => detail(datas)} />
                    </div>
                    <div>
                      <div>
                        <Row>
                          <Col>
                            <p>{datas.Nama}</p>
                            <p>Rp. {(datas.Harga).toLocaleString("id-ID")}</p>
                           
                          </Col>
                          <Col>
                            <p>Panjang : {datas.Panjang} m</p>
                            <p>Lebar: {datas.Lebar} m</p>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        <Row>
                          <Col sm={3}>
                            <button className="btnfav" onClick={() => goFavo(datas)}>Favorit</button>
                          </Col>
                          <Col sm={9}>
                            <button className="btnnpsn" onClick={() => checkout(datas)}>Pesan</button>
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
      <Footer/>
    </div>
  );
};

export default LahanClient;
