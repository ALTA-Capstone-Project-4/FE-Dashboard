
import Footer from "../component/footer";
import { InputGroup, Form, Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import Router from "next/router";
import axios from "axios";
import dynamic from "next/dynamic";


// export const getServerSideProps = async () => {
//   const response = await axios.get("https://group4.altaproject.online/gudang?page=1",
//   {
//     headers : {
//       Authorization: `Bearer ${getCookie("Token")}`,
//     },
//   });
 
//   return {
//     props: {
//       datas: response.data.data,
//     },
//   };
// };


const Home = () => {
  const [datas, setDatas] = useState([]);
  const NavbarClient = dynamic(() => import("../component/navbar-client"), {
    ssr: false,
  });


  useEffect(() => {
    getHome();
  }, []);
  console.log(datas);
  const getHome = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://group4.altaproject.online/gudang?page=1",
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        setDatas(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

console.log("data", )


  // go Check
  const goCheck = (datas) => {
    console.log("ini datas diklik", datas.id_lahan);
    Router.push({
      pathname: "/lahanclient",
      query: {
        id: datas.gudang_id,
        nama: datas.nama,
      },
    });
  };

  return (
    <div>
      <NavbarClient />

      <div
        className="container-fluid d-flex justify-content-center align-items-center after-navbar"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/warehouse-interior-with-cardboard-boxes-racks_107791-1633.jpg?w=900&t=st=1664356525~exp=1664357125~hmac=1e2dfd478aed1381c9a78ec845956ab0d61b1092ff92ef8d747e9ff37ea3070e")`,
          height: "23rem",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          <p className="fs-2 fw-bold white-font text-center">Mau Cari Tempat Penitipan?</p>
          <div className="container">
            <InputGroup>
              <Form.Control type="text" placeholder="Cari.." aria-label="Input group example" aria-describedby="btnGroupAddon" />
              <button className=" yellow-background-hover white-font button-search px-4 py-1 fw-bold">Cari</button>
            </InputGroup>
          </div>
        </div>
      </div>

      <p className="pt-5 fs-3 fw-bold yellow-font text-center">Gudang Yang Tersedia</p>

      <div className="container py-5 ">
        <div className="row d-flex">
          <Row>
            {datas.map((datas, index) => {
              return (
                <Col>
                  <div key={index} className="col">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={datas.foto_lahan} />
                      <Card.Body>
                        <Card.Text>{datas.nama}</Card.Text>
                        <Card.Text>{datas.harga}</Card.Text>
                        <Button onClick={() => goCheck(datas)}>Go Check</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
